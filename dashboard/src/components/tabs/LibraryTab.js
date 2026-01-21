import { skillsData, skillCategories, personaSkills } from '../../data/skills.js';

const GITHUB_BASE = 'https://github.com/GitGerry/raps-methodology/blob/main';

// Helper to get skills for a persona (case-insensitive lookup)
function getSkillsForPersona(name) {
    const key = name.toLowerCase();
    return personaSkills[key] || [];
}

// ... existing helper functions (docLink, etc.) ...

// [SKIPPED] docLink, projectDocLink, folderLink, projectFolderLink definitions kept as is (user: assume they are there or I need to be careful not to delete them if I'm replacing a huge block?)
// The tool `replace_file_content` replaces a contiguous block.
// I will target the specific sections to replace to avoid re-writing the whole file if possible, or large chunks.

// Actually, I need to add the import at the top first.


// Document with dual actions: View on GitHub + Preview inline
function docLink(name, localPath, githubPath, icon, description, canPreview = false) {
    const vscodeUrl = `vscode://file${localPath}`;
    const githubUrl = `${GITHUB_BASE}${githubPath}`;

    return `
    <li class="artifact-item">
        <div class="artifact-icon">${icon}</div>
        <div class="artifact-info">
            <div class="artifact-name">${name}</div>
            <div class="artifact-path">${description}</div>
        </div>
        <div class="artifact-actions">
            <button class="action-btn github-btn" onclick="window.open('${githubUrl}', '_blank')" title="View on GitHub">
                <span>🔗</span>
            </button>
            <button class="action-btn vscode-btn" onclick="window.open('${vscodeUrl}', '_blank')" title="Open in VS Code">
                <span>📂</span>
            </button>
            ${canPreview ? `
            <button class="action-btn preview-btn" onclick="showDocPreview('${name}', '${githubPath}')" title="Preview content">
                <span>👁️</span>
            </button>
            ` : ''}
        </div>
    </li>`;
}

// Project-specific document (no GitHub, just VS Code)
function projectDocLink(name, localPath, icon, description) {
    const vscodeUrl = `vscode://file${localPath}`;

    return `
    <li class="artifact-item">
        <div class="artifact-icon">${icon}</div>
        <div class="artifact-info">
            <div class="artifact-name">${name}</div>
            <div class="artifact-path">${description}</div>
        </div>
        <div class="artifact-actions">
            <button class="action-btn vscode-btn" onclick="window.open('${vscodeUrl}', '_blank')" title="Open in VS Code">
                <span>📂</span>
            </button>
        </div>
    </li>`;
}

// Folder link (no preview option)
function folderLink(name, localPath, githubPath, icon, description) {
    const vscodeUrl = `vscode://file${localPath}`;
    const githubUrl = `${GITHUB_BASE}${githubPath}`;

    return `
    <li class="artifact-item">
        <div class="artifact-icon">${icon}</div>
        <div class="artifact-info">
            <div class="artifact-name">${name}</div>
            <div class="artifact-path">${description}</div>
        </div>
        <div class="artifact-actions">
            <button class="action-btn github-btn" onclick="window.open('${githubUrl}', '_blank')" title="View on GitHub">
                <span>🔗</span>
            </button>
            <button class="action-btn vscode-btn" onclick="window.open('${vscodeUrl}', '_blank')" title="Open in VS Code">
                <span>📂</span>
            </button>
        </div>
    </li>`;
}

// Project folder link (VS Code only)
function projectFolderLink(name, localPath, icon, description) {
    const vscodeUrl = `vscode://file${localPath}`;

    return `
    <li class="artifact-item">
        <div class="artifact-icon">${icon}</div>
        <div class="artifact-info">
            <div class="artifact-name">${name}</div>
            <div class="artifact-path">${description}</div>
        </div>
        <div class="artifact-actions">
            <button class="action-btn vscode-btn" onclick="window.open('${vscodeUrl}', '_blank')" title="Open in VS Code">
                <span>📂</span>
            </button>
        </div>
    </li>`;
}

export function renderLibraryTab(projectPath = 'C:/Users/gerry/OneDrive/Desktop/LLM/TAPAS') {
    return `
    <div id="library" class="tab-content">
        <div class="library-banner">
            <span class="banner-icon">📚</span>
            <span>Click <strong>🔗</strong> to view on GitHub, <strong>📂</strong> to open in VS Code, or <strong>👁️</strong> to preview inline</span>
        </div>
        
        <!-- Section 1: Project Files -->
        <div class="library-section">
            <h2 class="section-header project-header">
                <span class="section-icon">📁</span>
                Project Files
                <span class="section-badge">TAPAS</span>
            </h2>
            <div class="grid-3">
                <!-- Requirements & Specs (Project) -->
                <div class="card library-card project-card">
                    <h3>📋 Requirements & Specs</h3>
                    <ul class="artifact-list">
                        ${projectDocLink('REQUIREMENTS.md', `${projectPath}/docs/requirements/REQUIREMENTS.md`, '📋', 'Functional requirements')}
                        ${projectDocLink('SPECS.md', `${projectPath}/docs/SPECS.md`, '📐', 'Technical specifications')}
                        ${projectDocLink('v1.1 Requirements', `${projectPath}/docs/requirements/v1.1_REQUIREMENTS.md`, '📊', 'Upgrade requirements')}
                        ${projectDocLink('User Feedback', `${projectPath}/docs/v1.1_USER_FEEDBACK.md`, '💬', 'Consolidated feedback')}
                    </ul>
                </div>

                <!-- Project Management -->
                <div class="card library-card project-card">
                    <h3>🛠️ Project Management</h3>
                    <ul class="artifact-list">
                        ${projectDocLink('PLAN.md', `${projectPath}/PLAN.md`, '📝', 'Master Ledger')}
                        ${projectDocLink('SESSION_LOG.md', `${projectPath}/SESSION_LOG.md`, '📜', 'Activity history')}
                        ${projectDocLink('README.md', `${projectPath}/README.md`, '📖', 'Project overview')}
                        ${projectDocLink('HANDOFF_NOTES.md', `${projectPath}/HANDOFF_NOTES.md`, '🤝', 'Agent handoffs')}
                    </ul>
                </div>

                <!-- Source Code (Project) -->
                <div class="card library-card project-card">
                    <h3>💻 Source Code</h3>
                    <ul class="artifact-list">
                        ${projectFolderLink('Backend', `${projectPath}/backend`, '⚙️', 'API routes & middleware')}
                        ${projectFolderLink('Frontend', `${projectPath}/frontend`, '🎨', 'Next.js components')}
                        ${projectFolderLink('Dashboard', `${projectPath}/dashboard`, '🎛️', 'Project dashboard')}
                        ${projectFolderLink('Tests', `${projectPath}/tests`, '🧪', 'Test suites')}
                    </ul>
                </div>

                <!-- Diagrams (Project-specific) -->
                <div class="card library-card project-card">
                    <h3>📊 Diagrams</h3>
                    <ul class="artifact-list">
                        <li class="artifact-item">
                            <div class="artifact-icon">🎯</div>
                            <div class="artifact-info">
                                <div class="artifact-name">Use Case Diagram</div>
                                <div class="artifact-path">System interactions</div>
                            </div>
                            <div class="artifact-actions">
                                <button class="action-btn preview-btn" onclick="showDiagramModal('useCaseDiagram')" title="View diagram">
                                    <span>👁️</span>
                                </button>
                            </div>
                        </li>
                        <li class="artifact-item">
                            <div class="artifact-icon">🔄</div>
                            <div class="artifact-info">
                                <div class="artifact-name">State Machines</div>
                                <div class="artifact-path">Entity lifecycles</div>
                            </div>
                            <div class="artifact-actions">
                                <button class="action-btn preview-btn" onclick="showDiagramModal('stateMachine')" title="View diagram">
                                    <span>👁️</span>
                                </button>
                            </div>
                        </li>
                        <li class="artifact-item">
                            <div class="artifact-icon">📈</div>
                            <div class="artifact-info">
                                <div class="artifact-name">Process Flows</div>
                                <div class="artifact-path">Business workflows</div>
                            </div>
                            <div class="artifact-actions">
                                <button class="action-btn preview-btn" onclick="showDiagramModal('processFlow')" title="View diagram">
                                    <span>👁️</span>
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Section 1: Personas & Workflows -->
        <div class="library-section">
            <h2 class="section-header raps-header">
                <span class="section-icon">🚀</span>
                1. Personas & Workflows
                <span class="section-badge raps-badge">Process</span>
            </h2>
            <div class="grid-3">
                <!-- Planning Personas -->
                <div class="card library-card raps-card">
                    <h3>📋 Planning</h3>
                    <ul class="artifact-list">
                        ${docLink('Initialize', '', '/workflows/initialize.md', '🏗️', 'Project scaffolding', true)}
                        ${docLink('Analyst', '', '/workflows/analyst.md', '📝', 'Requirements definition', true)}
                        ${docLink('Architect', '', '/workflows/architect.md', '📐', 'Technical specs', true)}
                        ${docLink('Sprint', '', '/workflows/sprint.md', '🏃', 'Sprint planning', true)}
                    </ul>
                </div>

                <!-- Build & Design Personas -->
                <div class="card library-card raps-card">
                    <h3>💻 Build & Design</h3>
                    <ul class="artifact-list">
                        ${docLink('Build', '', '/workflows/build.md', '⚙️', 'Backend development', true)}
                        ${docLink('Design', '', '/workflows/design.md', '🎨', 'Frontend & UI/UX', true)}
                        ${docLink('Review', '', '/workflows/review.md', '👀', 'Code review', true)}
                    </ul>
                </div>

                <!-- Quality & Release Personas -->
                <div class="card library-card raps-card">
                    <h3>✅ Quality & Release</h3>
                    <ul class="artifact-list">
                        ${docLink('Test', '', '/workflows/test.md', '🧪', 'QA verification', true)}
                        ${docLink('Security', '', '/workflows/security.md', '🔒', 'Security audit', true)}
                        ${docLink('UX', '', '/workflows/ux.md', '🎭', 'User acceptance', true)}
                        ${docLink('Release', '', '/workflows/release.md', '🚦', 'Release gates', true)}
                    </ul>
                </div>

                <!-- Ops & Utilities -->
                <div class="card library-card raps-card">
                    <h3>🛠️ Ops & Utilities</h3>
                    <ul class="artifact-list">
                        ${docLink('Deploy', '', '/workflows/deploy.md', '🚀', 'Deployment', true)}
                        ${docLink('Retro', '', '/workflows/retro.md', '🔙', 'Retrospectives', true)}
                        ${docLink('RAPS Status', '', '/workflows/raps-status.md', '🏥', 'Status & Health', true)}
                    </ul>
                </div>
            </div>
        </div>

        <!-- Section 2: Skills -->
        <div class="library-section">
            <h2 class="section-header raps-header">
                <span class="section-icon">🎯</span>
                2. Skill Toolkits
                <span class="section-badge raps-badge">Capabilities</span>
            </h2>
            <div class="grid-3">
                <!-- Core Toolkits -->
                <div class="card library-card raps-card">
                    <h3>🧰 Core Toolkits</h3>
                    <ul class="artifact-list">
                        ${docLink('Research Toolkit', '', '/skills/research-toolkit/SKILL.md', '🔍', 'Deep research', true)}
                        ${docLink('Agile Toolkit', '', '/skills/agile-toolkit/SKILL.md', '🏃', 'Agile processes', true)}
                        ${docLink('Project Scaffold', '', '/skills/project-scaffolding/SKILL.md', '🏗️', 'Setup & Tiers', true)}
                        ${docLink('Skills README', '', '/skills/README.md', '📚', 'Index of all skills', true)}
                    </ul>
                </div>
                
                <!-- Role-Specific Toolkits -->
                <div class="card library-card raps-card">
                    <h3>👤 Role Toolkits</h3>
                    <ul class="artifact-list">
                        ${docLink('Analyst Toolkit', '', '/skills/analyst-toolkit/SKILL.md', '📋', 'Requirements tools', true)}
                        ${docLink('Architecture Toolkit', '', '/skills/architecture-toolkit/SKILL.md', '🏛️', 'Design patterns', true)}
                        ${docLink('Deploy Toolkit', '', '/skills/deploy-toolkit/SKILL.md', '🚀', 'Ops runbooks', true)}
                        ${docLink('QA Toolkit', '', '/skills/qa-toolkit/SKILL.md', '🧪', 'Testing tools', true)}
                    </ul>
                </div>

                <!-- Utility Skills -->
                <div class="card library-card raps-card">
                    <h3>🔧 Utilities</h3>
                    <ul class="artifact-list">
                        ${docLink('Debug Assist', '', '/skills/debug-assist/SKILL.md', '🐛', 'Debugging helper', true)}
                        ${docLink('Estimate', '', '/skills/estimate/SKILL.md', '⏱️', 'Effort estimation', true)}
                        ${docLink('Handoff', '', '/skills/handoff/SKILL.md', '🤝', 'Context transfer', true)}
                        ${docLink('Security Toolkit', '', '/skills/security-toolkit/SKILL.md', '🛡️', 'Security tools', true)}
                    </ul>
                </div>
            </div>
        </div>

        <!-- Section 3: RAPS Overview -->
        <div class="library-section">
            <h2 class="section-header raps-header">
                <span class="section-icon">🧠</span>
                3. RAPS Overview & Core Tech
                <span class="section-badge raps-badge">Knowledge</span>
            </h2>
            <div class="grid-3">
                <!-- Core Documentation -->
                <div class="card library-card raps-card">
                    <h3>📖 Methodology</h3>
                    <ul class="artifact-list">
                        ${docLink('RAPS Framework', '', '/README.md', '📘', 'Main documentation', true)}
                        ${docLink('Docs Standards', '', '/docs/PROJECT_DOCUMENTATION_GUIDE.md', '📚', 'Documentation Guide (T1-T4)', true)}
                        ${folderLink('Templates', '', '/templates', '📄', 'All Templates')}
                        ${folderLink('Dashboard Source', '', '/dashboard', '🎛️', 'Mission Control Code')}
                    </ul>
                </div>

                <!-- Features & Tech -->
                <div class="card library-card raps-card">
                    <h3>⚙️ Features & Tech</h3>
                    <ul class="artifact-list">
                        ${docLink('Memory Protocol', '', '/templates/MEMORY.md', '🧠', 'Context management', true)}
                        ${docLink('Audit System', '', '/workflows/raps-status.md', '🏥', 'Self-repair mechanisms', true)}
                        ${docLink('CrewAI Integration', '', '/skills/README.md', '🤖', 'Agent orchestration', true)}
                    </ul>
                </div>
            </div>
        </div>
        
        <!-- Document Preview Modal -->
        <div id="doc-preview-modal" class="modal">
            <div class="modal-content doc-preview-content">
                <div class="modal-header">
                    <h2 id="doc-preview-title">Document Preview</h2>
                    <button class="modal-close" onclick="closeDocPreview()">&times;</button>
                </div>
                <div id="doc-preview-body" class="doc-preview-body">
                    <p>Loading...</p>
                </div>
            </div>
        </div>
    </div>
    `;
}



function personaLink(name, localPath, icon, description, skillIds = []) {
    const skillData = skillIds.length > 0 ? `data-skills="${skillIds.join(',')}"` : '';
    const vscodeUrl = `vscode://file${localPath}`;

    return `
    <div class="persona-card raps-card" ${skillData}>
        <div class="persona-header">
            <span class="persona-icon">${icon}</span>
            <span class="persona-name">${name}</span>
        </div>
        <div class="persona-desc">${description}</div>
        <div class="persona-actions">
            <button class="action-link" onclick="window.open('${vscodeUrl}', '_blank')">Open Workflow 📂</button>
        </div>
    </div>`;
}

function skillLink(id, name, localPath, icon, description) {
    const vscodeUrl = `vscode://file${localPath}`;

    return `
    <div class="skill-card raps-card" data-skill-id="${id}">
        <div class="skill-header">
            <span class="skill-icon">${icon}</span>
            <span class="skill-name">${name}</span>
        </div>
        <div class="skill-desc">${description}</div>
        <div class="skill-actions">
            <button class="action-link" onclick="window.open('${vscodeUrl}', '_blank')">View Toolkit 🛠️</button>
        </div>
    </div>`;
}

export function renderLibraryTab(projectPath = 'C:/Users/gerry/OneDrive/Desktop/LLM/TAPAS') {
    return `
    <div id="library" class="tab-content">
        <style>
            .personas-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                gap: 1rem;
                margin-top: 1rem;
            }
            .persona-card {
                background: rgba(30, 41, 59, 0.5);
                border: 1px solid rgba(148, 163, 184, 0.1);
                border-radius: 8px;
                padding: 1rem;
                transition: all 0.2s ease;
                cursor: pointer;
            }
            .persona-card:hover {
                border-color: #3b82f6;
                background: rgba(59, 130, 246, 0.1);
                transform: translateY(-2px);
            }
            .persona-header {
                display: flex;
                align-items: center;
                gap: 0.75rem;
                margin-bottom: 0.5rem;
            }
            .persona-icon { font-size: 1.5rem; }
            .persona-name { font-weight: 600; color: #e2e8f0; }
            .persona-desc { font-size: 0.85rem; color: #94a3b8; margin-bottom: 1rem; line-height: 1.4; }
            .action-link {
                background: none;
                border: none;
                color: #3b82f6;
                font-size: 0.8rem;
                cursor: pointer;
                padding: 0;
            }
            .action-link:hover { text-decoration: underline; }

            .skill-card {
                background: rgba(30, 41, 59, 0.5);
                border: 1px solid rgba(148, 163, 184, 0.1);
                border-radius: 8px;
                padding: 0.75rem;
                transition: all 0.2s ease;
                opacity: 0.7;
            }
            .skill-card.active-skill {
                opacity: 1;
                border-color: #22c55e;
                background: rgba(34, 197, 94, 0.1);
                box-shadow: 0 0 10px rgba(34, 197, 94, 0.1);
            }
            .skill-header { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem; }
            .skill-name { font-weight: 500; font-size: 0.9rem; }
            .skill-desc { font-size: 0.75rem; color: #64748b; }
        </style>

        <div class="library-banner">
            <span class="banner-icon">✨</span>
            <span>Hover over a <strong>Persona</strong> to see which Skills they use!</span>
        </div>

        <!-- Section 1: Personas -->
        <div class="library-section">
            <h2 class="section-header raps-header">
                <span class="section-icon">🎭</span>
                1. RAPS Personas
                <span class="section-badge raps-badge">Workflows</span>
            </h2>
            <div class="personas-grid">
                ${personaLink('Initialize', '/workflows/initialize.md', '🏗️', 'Project setup & scaffolding', personaSkills['initialize'])}
                ${personaLink('Analyst', '/workflows/analyst.md', '📝', 'Requirements & Stories', personaSkills['analyst'])}
                ${personaLink('Architect', '/workflows/architect.md', '📐', 'Technical Specs & Design', personaSkills['architect'])}
                ${personaLink('Sprint', '/workflows/sprint.md', '🏃', 'Agile Planning', personaSkills['sprint'])}
                ${personaLink('Build', '/workflows/build.md', '⚙️', 'Backend Implementation', personaSkills['build'])}
                ${personaLink('Design', '/workflows/design.md', '🎨', 'Frontend & UI', personaSkills['design'])}
                ${personaLink('Review', '/workflows/review.md', '👀', 'Code Review', personaSkills['review'])}
                ${personaLink('Test', '/workflows/test.md', '🧪', 'QA & Verification', personaSkills['test'])}
                ${personaLink('Security', '/workflows/security.md', '🔒', 'Security Audit', personaSkills['security'])}
                ${personaLink('UX', '/workflows/ux.md', '🎭', 'User Acceptance', personaSkills['ux'])}
                ${personaLink('Release', '/workflows/release.md', '🚦', 'Release Management', personaSkills['release'])}
                ${personaLink('Deploy', '/workflows/deploy.md', '🚀', 'Production Deploy', personaSkills['deploy'])}
                ${personaLink('Retro', '/workflows/retro.md', '🔙', 'Retrospectives', personaSkills['retro'])}
                ${personaLink('RAPS Status', '/workflows/raps-status.md', '🏥', 'Project Validation', personaSkills['health'])}
            </div>
        </div>

        <!-- Section 2: Skills -->
        <div class="library-section">
            <h2 class="section-header raps-header">
                <span class="section-icon">⚡</span>
                2. Available Skills
                <span class="section-badge raps-badge">Capabilities</span>
            </h2>
            <div class="personas-grid" style="grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));">
                ${Object.values(skillsData).map(skill =>
        skillLink(skill.id, skill.name, skill.path, skill.icon, skill.description)
    ).join('')}
            </div>
        </div>

        <!-- Section 3: Overview -->
        <div class="library-section">
            <h2 class="section-header raps-header">
                <span class="section-icon">📚</span>
                3. RAPS Overview & Docs
                <span class="section-badge raps-badge">Knowledge</span>
            </h2>
            <div class="grid-3">
                <div class="card library-card raps-card">
                    <h3>📖 General Documentation</h3>
                    <ul class="artifact-list">
                        ${docLink('RAPS Manual', '', '/README.md', '📘', 'Core Methodology', true)}
                        ${docLink('Documentation Standards', '', '/docs/PROJECT_DOCUMENTATION_GUIDE.md', '📚', 'Tiers & Guidelines', true)}
                        ${folderLink('Templates', '', '/templates', '📄', 'Standard Templates')}
                    </ul>
                </div>
                 <div class="card library-card raps-card">
                    <h3>⚙️ System Internals</h3>
                    <ul class="artifact-list">
                        ${docLink('Memory Protocol', '', '/templates/MEMORY.md', '🧠', 'Context Design', true)}
                        ${docLink('Dashboard Code', '', '/dashboard', '🎛️', 'Mission Control Source', true)}
                        ${docLink('Skills Index', '', '/skills/README.md', '🗂️', 'Full Skill List', true)}
                    </ul>
                </div>
            </div>
        </div>
        
        <!-- Document Preview Modal -->
        <div id="doc-preview-modal" class="modal">
            <div class="modal-content doc-preview-content">
                <div class="modal-header">
                    <h2 id="doc-preview-title">Document Preview</h2>
                    <button class="modal-close" onclick="closeDocPreview()">&times;</button>
                </div>
                <div id="doc-preview-body" class="doc-preview-body">
                    <p>Loading...</p>
                </div>
            </div>
        </div>
    </div>
    `;
}

export function initLibraryTab() {
    // Add hover effects for personas to highlight skills
    const personas = document.querySelectorAll('.persona-card');
    const skills = document.querySelectorAll('.skill-card');

    personas.forEach(persona => {
        persona.addEventListener('mouseenter', () => {
            const usedSkills = (persona.dataset.skills || '').split(',');
            // Dim all skills first
            skills.forEach(s => s.style.opacity = '0.3');

            // Highlight specific skills
            usedSkills.forEach(skillId => {
                const skillCard = document.querySelector(`.skill-card[data-skill-id="${skillId}"]`);
                if (skillCard) {
                    skillCard.classList.add('active-skill');
                    skillCard.style.opacity = '1';
                }
            });
        });

        persona.addEventListener('mouseleave', () => {
            // Reset all
            skills.forEach(skillCard => {
                skillCard.classList.remove('active-skill');
                skillCard.style.opacity = '0.7';
            });
        });
    });

    // Existing doc preview logic
    window.showDocPreview = async function (name, githubPath) {
        const modal = document.getElementById('doc-preview-modal');
        const title = document.getElementById('doc-preview-title');
        const body = document.getElementById('doc-preview-body');

        title.textContent = name;
        body.innerHTML = '<p style="text-align: center; padding: 2rem;">Loading from GitHub...</p>';
        modal.classList.add('active');

        try {
            // Fetch raw content from GitHub
            const rawUrl = `https://raw.githubusercontent.com/GitGerry/raps-methodology/main${githubPath}`;
            const response = await fetch(rawUrl);

            if (response.ok) {
                const content = await response.text();
                // Basic markdown rendering (headings, code blocks, lists)
                const html = renderMarkdown(content);
                body.innerHTML = html;
            } else {
                body.innerHTML = `<p style="color: var(--accent-yellow);">Could not load document. <a href="https://github.com/GitGerry/raps-methodology/blob/main${githubPath}" target="_blank">View on GitHub</a></p>`;
            }
        } catch (e) {
            body.innerHTML = `<p style="color: var(--accent-yellow);">Failed to fetch document. <a href="https://github.com/GitGerry/raps-methodology/blob/main${githubPath}" target="_blank">View on GitHub</a></p>`;
        }
    };

    window.closeDocPreview = function () {
        document.getElementById('doc-preview-modal').classList.remove('active');
    };

    // Simple markdown renderer
    function renderMarkdown(text) {
        let html = text
            // Escape HTML
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            // Headers
            .replace(/^### (.*$)/gm, '<h3>$1</h3>')
            .replace(/^## (.*$)/gm, '<h2>$1</h2>')
            .replace(/^# (.*$)/gm, '<h1>$1</h1>')
            // Bold and italic
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            // Code blocks
            .replace(/```[\w]*\n([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
            .replace(/`(.*?)`/g, '<code>$1</code>')
            // Lists
            .replace(/^\- (.*$)/gm, '<li>$1</li>')
            .replace(/^\* (.*$)/gm, '<li>$1</li>')
            // Line breaks
            .replace(/\n\n/g, '</p><p>')
            .replace(/\n/g, '<br>');

        return `<div class="markdown-content"><p>${html}</p></div>`;
    }
