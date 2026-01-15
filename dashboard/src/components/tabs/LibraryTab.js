// RAPS Mission Control - Library Tab Component (Redesigned)
// Unified document access with VS Code integration

function fileLink(name, path, icon, description) {
    const vscodeUrl = `vscode://file${path}`;
    return `
    <li class="artifact-item" onclick="window.open('${vscodeUrl}', '_blank')" style="cursor: pointer;">
        <div class="artifact-icon">${icon}</div>
        <div class="artifact-info">
            <div class="artifact-name">${name}</div>
            <div class="artifact-path">${description}</div>
        </div>
        <div class="artifact-action">📂</div>
    </li>`;
}

export function renderLibraryTab(projectPath = 'C:/Users/gerry/OneDrive/Desktop/LLM/TAPAS') {
    return `
    <div id="library" class="tab-content">
        <div class="library-banner">
            <span class="banner-icon">📂</span>
            <span>Click any document to open in <strong>VS Code</strong></span>
        </div>
        
        <div class="grid-3">
            <!-- Requirements & Specs -->
            <div class="card library-card">
                <h2>📋 Requirements & Specs</h2>
                <ul class="artifact-list">
                    ${fileLink('REQUIREMENTS.md', `${projectPath}/docs/requirements/REQUIREMENTS.md`, '📋', 'Functional requirements')}
                    ${fileLink('SPECS.md', `${projectPath}/docs/SPECS.md`, '📐', 'Technical specifications')}
                    ${fileLink('v1.1 Requirements', `${projectPath}/docs/requirements/v1.1_REQUIREMENTS.md`, '📊', 'Upgrade requirements')}
                    ${fileLink('User Feedback', `${projectPath}/docs/v1.1_USER_FEEDBACK.md`, '💬', 'Consolidated feedback')}
                </ul>
            </div>

            <!-- Project Management -->
            <div class="card library-card">
                <h2>🛠️ Project Management</h2>
                <ul class="artifact-list">
                    ${fileLink('PLAN.md', `${projectPath}/PLAN.md`, '📝', 'Master Ledger')}
                    ${fileLink('SESSION_LOG.md', `${projectPath}/SESSION_LOG.md`, '📜', 'Activity history')}
                    ${fileLink('README.md', `${projectPath}/README.md`, '📖', 'Project overview')}
                    ${fileLink('HANDOFF_NOTES.md', `${projectPath}/HANDOFF_NOTES.md`, '🤝', 'Agent handoffs')}
                </ul>
            </div>

            <!-- Diagrams -->
            <div class="card library-card">
                <h2>📊 Diagrams</h2>
                <ul class="artifact-list">
                    <li class="artifact-item" onclick="showDiagramModal('useCaseDiagram')" style="cursor: pointer;">
                        <div class="artifact-icon">🎯</div>
                        <div class="artifact-info">
                            <div class="artifact-name">Use Case Diagram</div>
                            <div class="artifact-path">System interactions</div>
                        </div>
                        <div class="artifact-action">👁️</div>
                    </li>
                    <li class="artifact-item" onclick="showDiagramModal('stateMachine')" style="cursor: pointer;">
                        <div class="artifact-icon">🔄</div>
                        <div class="artifact-info">
                            <div class="artifact-name">State Machines</div>
                            <div class="artifact-path">Entity lifecycles</div>
                        </div>
                        <div class="artifact-action">👁️</div>
                    </li>
                    <li class="artifact-item" onclick="showDiagramModal('processFlow')" style="cursor: pointer;">
                        <div class="artifact-icon">📈</div>
                        <div class="artifact-info">
                            <div class="artifact-name">Process Flows</div>
                            <div class="artifact-path">Business workflows</div>
                        </div>
                        <div class="artifact-action">👁️</div>
                    </li>
                </ul>
            </div>

            <!-- Source Code -->
            <div class="card library-card">
                <h2>💻 Source Code</h2>
                <ul class="artifact-list">
                    ${fileLink('Backend', `${projectPath}/backend`, '⚙️', 'API routes & middleware')}
                    ${fileLink('Frontend', `${projectPath}/frontend`, '🎨', 'React components')}
                    ${fileLink('Database', `${projectPath}/backend/supabase/migrations`, '🗄️', 'SQL migrations')}
                    ${fileLink('Tests', `${projectPath}/backend/src/__tests__`, '🧪', 'Test suites')}
                </ul>
            </div>

            <!-- Research -->
            <div class="card library-card">
                <h2>🔍 Research</h2>
                <ul class="artifact-list">
                    ${fileLink('Research Folder', `${projectPath}/research`, '📁', 'All research docs')}
                    ${fileLink('API Research', `${projectPath}/research`, '🔌', 'Third-party APIs')}
                    ${fileLink('Tech Evaluations', `${projectPath}/research`, '⚙️', 'Feasibility studies')}
                    ${fileLink('Competitors', `${projectPath}/research/COMPETITORS.md`, '🏢', 'Market analysis')}
                </ul>
            </div>

            <!-- Testing & QA -->
            <div class="card library-card">
                <h2>🧪 Testing & QA</h2>
                <ul class="artifact-list">
                    ${fileLink('Test Reports', `${projectPath}/tests`, '📊', 'Test results')}
                    ${fileLink('Security Audits', `${projectPath}/docs/security`, '🔒', 'OWASP scans')}
                    ${fileLink('UAT Feedback', `${projectPath}/docs/ux_feedback`, '🎭', 'User testing')}
                    ${fileLink('FIXES.md', `${projectPath}/FIXES.md`, '🐛', 'Bug tracking')}
                </ul>
            </div>
        </div>
    </div>
    `;
}

export function initLibraryTab() {
    document.querySelectorAll('.artifact-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.background = 'rgba(59, 130, 246, 0.1)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.background = 'transparent';
        });
    });
}
