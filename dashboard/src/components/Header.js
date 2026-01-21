// RAPS Mission Control - Header Component with Project Selector
import { renderProjectSelector } from './ProjectSelector.js';

export function renderHeader(projects, defaultProjectId) {
    const currentProject = projects.find(p => p.id === defaultProjectId) || projects[0];
    const sprintProgress = currentProject?.sprintProgress !== undefined ? currentProject.sprintProgress : 75;

    return `
    <header class="header">
        <div class="header-left">
            <h1>🎛️ RAPS Mission Control</h1>
            <p>Multi-Project Dashboard</p>
        </div>
        <div class="header-center">
            ${renderProjectSelector(projects, defaultProjectId)}
        </div>
        <div class="header-right">
            <div class="header-stat">
                <div class="value" id="sprint-progress">${sprintProgress}%</div>
                <div class="label">Sprint Progress</div>
            </div>
            <div class="header-stat">
                <div class="value" id="current-phase">${currentProject?.currentPhase || 'Planning'}</div>
                <div class="label">Current Phase</div>
            </div>
        </div>
    </header>
    `;
}

export function updateHeaderStats(project) {
    const progressEl = document.getElementById('sprint-progress');
    const phaseEl = document.getElementById('current-phase');

    if (progressEl) progressEl.textContent = (project?.sprintProgress || '—') + '%';
    if (phaseEl) phaseEl.textContent = project?.currentPhase || '—';
}
