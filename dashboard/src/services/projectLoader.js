// RAPS Mission Control - Project Data Loader Service
// Reads PLAN.md and extracts project-specific data

/**
 * Parses PLAN.md content and extracts structured data
 * @param {string} content - Raw PLAN.md content
 * @returns {Object} Parsed project data
 */
export function parsePlanMd(content) {
    const data = {
        squadStatus: [],
        activeSprint: {
            name: '',
            goal: '',
            stories: []
        },
        backlog: [],
        recentActivity: [],
        sprintProgress: 0
    };

    if (!content) return data;

    // Parse Squad Status table
    const squadMatch = content.match(/## 3️⃣ Squad Status[\s\S]*?\|[\s\S]*?(?=\n##|\n---|\Z)/);
    if (squadMatch) {
        const lines = squadMatch[0].split('\n').filter(l => l.startsWith('|') && !l.includes('---'));
        lines.slice(1).forEach(line => { // Skip header
            const cols = line.split('|').map(c => c.trim()).filter(c => c);
            if (cols.length >= 4) {
                data.squadStatus.push({
                    agent: cols[0],
                    role: cols[1],
                    status: cols[2],
                    task: cols[3]
                });
            }
        });
    }

    // Parse Active Sprint
    const sprintMatch = content.match(/### Active Sprint[:\s]*([^\n]*)\n([\s\S]*?)(?=###|\n## |\Z)/);
    if (sprintMatch) {
        data.activeSprint.name = sprintMatch[1].trim();
        const goalMatch = sprintMatch[2].match(/\*\*Goal:\*\*\s*(.+)/);
        if (goalMatch) data.activeSprint.goal = goalMatch[1];

        // Parse stories from checklist
        const storyMatches = sprintMatch[2].matchAll(/- \[([ x\/])\] \*\*(\w+-\d+)\*\*[:\s]*(.+?)(?:\s*\[([SML])\])?$/gm);
        for (const match of storyMatches) {
            data.activeSprint.stories.push({
                status: match[1] === 'x' ? 'done' : match[1] === '/' ? 'active' : 'todo',
                id: match[2],
                title: match[3].trim(),
                size: match[4] || 'M'
            });
        }
    }

    // Calculate sprint progress
    const totalStories = data.activeSprint.stories.length;
    const doneStories = data.activeSprint.stories.filter(s => s.status === 'done').length;
    data.sprintProgress = totalStories > 0 ? Math.round((doneStories / totalStories) * 100) : 0;

    // Parse Product Backlog (Epics)
    const backlogMatch = content.match(/### Product Backlog[\s\S]*?(?=### Sprint Archive|\n## |\Z)/);
    if (backlogMatch) {
        const epicMatches = backlogMatch[0].matchAll(/#### (EPIC-\d+):\s*(.+)\n([\s\S]*?)(?=####|\Z)/g);
        for (const match of epicMatches) {
            const epicStories = [];
            const storyMatches = match[3].matchAll(/- \[([ x\/])\] \*\*(\w+-\d+)\*\*[:\s]*(.+)/g);
            for (const sm of storyMatches) {
                epicStories.push({
                    status: sm[1] === 'x' ? 'done' : sm[1] === '/' ? 'active' : 'todo',
                    id: sm[2],
                    title: sm[3].trim()
                });
            }
            data.backlog.push({
                id: match[1],
                name: match[2].trim(),
                stories: epicStories,
                progress: epicStories.length > 0
                    ? Math.round((epicStories.filter(s => s.status === 'done').length / epicStories.length) * 100)
                    : 0
            });
        }
    }

    return data;
}

/**
 * Loads project data from file path (for Node.js/Electron)
 * In browser, this would be replaced with a fetch to a backend
 */
export async function loadProjectData(projectPath) {
    // For now, return mock data since we can't read files in browser
    // In a real implementation, this would call a backend API
    return {
        loaded: true,
        path: projectPath,
        planMd: null,
        parsed: null
    };
}

/**
 * Gets status emoji from status text
 */
export function getStatusClass(status) {
    if (!status) return 'idle';
    const s = status.toLowerCase();
    if (s.includes('active') || s.includes('🛠️')) return 'active';
    if (s.includes('done') || s.includes('✅')) return 'done';
    if (s.includes('waiting') || s.includes('⏳')) return 'waiting';
    if (s.includes('blocked') || s.includes('🔴')) return 'blocked';
    return 'idle';
}
