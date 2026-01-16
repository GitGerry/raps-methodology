const fs = require('fs');
const path = require('path');

// Arguments: [node, script, dashboardJsonPath, projectId, projectName, projectFullPath]
// Example: node register-project.js "C:/RAPS/dashboard/projects.json" "my-app" "My App" "C:/RAPS/my-app"

const dashboardJsonPath = process.argv[2];
const projectId = process.argv[3];
const projectName = process.argv[4];
const projectFullPath = process.argv[5];

if (!dashboardJsonPath || !projectId || !projectName || !projectFullPath) {
    console.error("Usage: node register-project.js <dashboardJsonPath> <projectId> <projectName> <projectFullPath>");
    process.exit(1);
}

try {
    let projectsData;
    if (fs.existsSync(dashboardJsonPath)) {
        projectsData = JSON.parse(fs.readFileSync(dashboardJsonPath, 'utf8'));
    } else {
        projectsData = { projects: [], settings: { defaultProject: projectId } };
    }

    // Check if exists
    const existingIndex = projectsData.projects.findIndex(p => p.id === projectId);

    const newProject = {
        id: projectId,
        name: projectName,
        fullName: projectName, // Default to name if not provided
        path: projectFullPath.replace(/\\/g, '/'), // Normalize paths
        status: 'active',
        currentPhase: 'Planning', // Default starting phase
        sprintProgress: 0,
        createdAt: new Date().toISOString().split('T')[0]
    };

    if (existingIndex >= 0) {
        console.log(`Updating existing project: ${projectName}`);
        // Preserve some fields if updating
        const existing = projectsData.projects[existingIndex];
        projectsData.projects[existingIndex] = {
            ...newProject,
            status: existing.status,
            currentPhase: existing.currentPhase,
            sprintProgress: existing.sprintProgress
        };
    } else {
        console.log(`Adding new project: ${projectName}`);
        projectsData.projects.push(newProject);
    }

    // Make default if it's the first one
    if (!projectsData.settings.defaultProject) {
        projectsData.settings.defaultProject = projectId;
    }

    fs.writeFileSync(dashboardJsonPath, JSON.stringify(projectsData, null, 4));
    console.log(`✅ Successfully registered ${projectName} in RAPS Dashboard.`);

} catch (error) {
    console.error("Error registering project:", error);
    process.exit(1);
}
