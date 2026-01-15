// RAPS Mission Control - Project Selector Component

let currentProject = null;
let projectChangeCallbacks = [];

export function renderProjectSelector(projects, defaultProjectId) {
    currentProject = projects.find(p => p.id === defaultProjectId) || projects[0];

    return `
    <div class="project-selector">
        <select id="projectSelect" onchange="handleProjectChange(this.value)">
            ${projects.map(p => `
                <option value="${p.id}" ${p.id === currentProject?.id ? 'selected' : ''}>
                    ${p.name}
                </option>
            `).join('')}
        </select>
        <span class="project-status ${currentProject?.status || 'active'}">${currentProject?.currentPhase || 'Unknown'}</span>
    </div>
    `;
}

export function getCurrentProject() {
    return currentProject;
}

export function onProjectChange(callback) {
    projectChangeCallbacks.push(callback);
}

export function handleProjectChange(projectId) {
    // This will be called from the global scope
    const event = new CustomEvent('projectchange', { detail: { projectId } });
    document.dispatchEvent(event);
}

export function initProjectSelector(projects) {
    // Make handler globally available
    window.handleProjectChange = (projectId) => {
        currentProject = projects.find(p => p.id === projectId);
        projectChangeCallbacks.forEach(cb => cb(currentProject));
    };

    // Listen for custom event
    document.addEventListener('projectchange', (e) => {
        const project = projects.find(p => p.id === e.detail.projectId);
        if (project) {
            currentProject = project;
            projectChangeCallbacks.forEach(cb => cb(project));
        }
    });
}
