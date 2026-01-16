// RAPS Mission Control - Library Tab Component (Redesigned)
// Unified document access with GitHub + Preview options

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

export function renderLibraryTab(projectPath = 'C:/Users/gerry/OneDrive/Desktop/LLM/TAPAS') {
    return `
    <div id="library" class="tab-content">
        <div class="library-banner">
            <span class="banner-icon">📚</span>
            <span>Click <strong>🔗</strong> to view on GitHub, <strong>📂</strong> to open in VS Code, or <strong>👁️</strong> to preview inline</span>
        </div>
        
        <div class="grid-3">
            <!-- Requirements & Specs -->
            <div class="card library-card">
                <h2>📋 Requirements & Specs</h2>
                <ul class="artifact-list">
                    ${docLink('REQUIREMENTS.md', `${projectPath}/docs/requirements/REQUIREMENTS.md`, '/workflows/README.md', '📋', 'Functional requirements', true)}
                    ${docLink('SPECS.md', `${projectPath}/docs/SPECS.md`, '/workflows/architect.md', '📐', 'Technical specifications', true)}
                    ${docLink('v1.1 Requirements', `${projectPath}/docs/requirements/v1.1_REQUIREMENTS.md`, '/workflows/analyst.md', '📊', 'Upgrade requirements', true)}
                    ${docLink('User Feedback', `${projectPath}/docs/v1.1_USER_FEEDBACK.md`, '/workflows/ux.md', '💬', 'Consolidated feedback', true)}
                </ul>
            </div>

            <!-- Project Management -->
            <div class="card library-card">
                <h2>🛠️ Project Management</h2>
                <ul class="artifact-list">
                    ${docLink('PLAN.md', `${projectPath}/PLAN.md`, '/workflows/initialize.md', '📝', 'Master Ledger', true)}
                    ${docLink('SESSION_LOG.md', `${projectPath}/SESSION_LOG.md`, '/workflows/status.md', '📜', 'Activity history', true)}
                    ${docLink('README.md', `${projectPath}/README.md`, '/README.md', '📖', 'Project overview', true)}
                    ${docLink('HANDOFF_NOTES.md', `${projectPath}/HANDOFF_NOTES.md`, '/workflows/sprint.md', '🤝', 'Agent handoffs', true)}
                </ul>
            </div>

            <!-- Diagrams -->
            <div class="card library-card">
                <h2>📊 Diagrams</h2>
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

            <!-- Source Code -->
            <div class="card library-card">
                <h2>💻 Source Code</h2>
                <ul class="artifact-list">
                    ${folderLink('Dashboard', `${projectPath}/dashboard`, '/dashboard', '🎛️', 'Mission Control app')}
                    ${folderLink('Backend', `${projectPath}/backend`, '/dashboard/src', '⚙️', 'API routes & middleware')}
                    ${folderLink('Frontend', `${projectPath}/frontend`, '/dashboard/src/components', '🎨', 'React components')}
                    ${folderLink('Workflows', `${projectPath}/.agent/workflows`, '/workflows', '📋', 'All persona workflows')}
                </ul>
            </div>

            <!-- Research -->
            <div class="card library-card">
                <h2>🔍 Research</h2>
                <ul class="artifact-list">
                    ${docLink('Research Workflow', `${projectPath}/.agent/workflows/research.md`, '/workflows/research.md', '🔍', 'Data Strategist guide', true)}
                    ${docLink('Build Workflow', `${projectPath}/.agent/workflows/build.md`, '/workflows/build.md', '💻', 'Lead Developer guide', true)}
                    ${docLink('Design Workflow', `${projectPath}/.agent/workflows/design.md`, '/workflows/design.md', '🎨', 'UI/UX Designer guide', true)}
                    ${docLink('Test Workflow', `${projectPath}/.agent/workflows/test.md`, '/workflows/test.md', '🧪', 'QA Engineer guide', true)}
                </ul>
            </div>

            <!-- Testing & QA -->
            <div class="card library-card">
                <h2>🧪 Testing & QA</h2>
                <ul class="artifact-list">
                    ${docLink('Test Workflow', `${projectPath}/.agent/workflows/test.md`, '/workflows/test.md', '📊', 'Test procedure', true)}
                    ${docLink('Security Workflow', `${projectPath}/.agent/workflows/security.md`, '/workflows/security.md', '🔒', 'Security audit guide', true)}
                    ${docLink('Review Workflow', `${projectPath}/.agent/workflows/review.md`, '/workflows/review.md', '👀', 'Code review process', true)}
                    ${docLink('Release Workflow', `${projectPath}/.agent/workflows/release.md`, '/workflows/release.md', '🚦', 'Release gates', true)}
                </ul>
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
