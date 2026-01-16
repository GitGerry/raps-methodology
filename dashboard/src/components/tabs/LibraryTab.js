// RAPS Mission Control - Library Tab Component (Redesigned)
// Separated Project Files from RAPS Documentation

const GITHUB_BASE = 'https://github.com/GitGerry/raps-methodology/blob/main';

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

        <!-- Section 2: RAPS Documentation -->
        <div class="library-section">
            <h2 class="section-header raps-header">
                <span class="section-icon">📖</span>
                RAPS Framework Documentation
                <span class="section-badge raps-badge">Methodology</span>
            </h2>
            <div class="grid-3">
                <!-- Core Workflows -->
                <div class="card library-card raps-card">
                    <h3>🚀 Core Workflows</h3>
                    <ul class="artifact-list">
                        ${docLink('Initialize', '', '/workflows/initialize.md', '🏗️', 'Project scaffolding', true)}
                        ${docLink('Research Toolkit', '', '/skills/research-toolkit/SKILL.md', '🔍', 'Research capability (skill)', true)}
                        ${docLink('Analyst', '', '/workflows/analyst.md', '📋', 'Requirements definition', true)}
                        ${docLink('Architect', '', '/workflows/architect.md', '📐', 'Technical specs', true)}
                    </ul>
                </div>

                <!-- Build & Design -->
                <div class="card library-card raps-card">
                    <h3>💻 Build & Design</h3>
                    <ul class="artifact-list">
                        ${docLink('Build', '', '/workflows/build.md', '⚙️', 'Backend development', true)}
                        ${docLink('Design', '', '/workflows/design.md', '🎨', 'Frontend & UI/UX', true)}
                        ${docLink('Review', '', '/workflows/review.md', '👀', 'Code review', true)}
                        ${docLink('Sprint', '', '/workflows/sprint.md', '🏃', 'Sprint planning', true)}
                    </ul>
                </div>

                <!-- Quality & Release -->
                <div class="card library-card raps-card">
                    <h3>✅ Quality & Release</h3>
                    <ul class="artifact-list">
                        ${docLink('Test', '', '/workflows/test.md', '🧪', 'QA verification', true)}
                        ${docLink('Security', '', '/workflows/security.md', '🔒', 'Security audit', true)}
                        ${docLink('UX', '', '/workflows/ux.md', '🎭', 'User acceptance', true)}
                        ${docLink('Release', '', '/workflows/release.md', '🚦', 'Release gates', true)}
                    </ul>
                </div>

                <!-- Utilities -->
                <div class="card library-card raps-card">
                    <h3>🛠️ Utilities</h3>
                    <ul class="artifact-list">
                        ${docLink('Status', '', '/workflows/status.md', '📊', 'Project status check', true)}
                        ${docLink('Health', '', '/workflows/health.md', '🏥', 'Project validator', true)}
                        ${docLink('Retro', '', '/workflows/retro.md', '📝', 'Retrospectives', true)}
                        ${docLink('Deploy', '', '/workflows/deploy.md', '🚀', 'Deployment', true)}
                    </ul>
                </div>

                <!-- Skills -->
                <div class="card library-card raps-card">
                    <h3>🎯 Skills</h3>
                    <ul class="artifact-list">
                        ${docLink('Skills README', '', '/skills/README.md', '📚', 'All skill toolkits', true)}
                        ${docLink('Sprint Planning', '', '/skills/sprint-plan/SKILL.md', '🏃', 'Sprint skill', true)}
                        ${docLink('Debug Assist', '', '/skills/debug-assist/SKILL.md', '🔧', 'Debugging workflow', true)}
                        ${docLink('Estimate', '', '/skills/estimate/SKILL.md', '📏', 'Effort estimation', true)}
                    </ul>
                </div>

                <!-- Templates -->
                <div class="card library-card raps-card">
                    <h3>📁 Templates & Assets</h3>
                    <ul class="artifact-list">
                        ${docLink('README', '', '/README.md', '📖', 'Main documentation', true)}
                        ${docLink('Docs Guide', '', '/docs/PROJECT_DOCUMENTATION_GUIDE.md', '📚', 'Documentation Standards & Tiers', true)}
                        ${folderLink('Dashboard', '', '/dashboard', '🎛️', 'Mission Control app')}
                        ${folderLink('All Workflows', '', '/workflows', '📋', 'Workflow definitions')}
                        ${folderLink('All Skills', '', '/skills', '🎯', 'Skill toolkits')}
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
    // Add hover effects
    document.querySelectorAll('.artifact-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.background = 'rgba(59, 130, 246, 0.1)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.background = 'transparent';
        });
    });

    // Global function to show document preview
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
}

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
