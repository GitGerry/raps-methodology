// TAPAS Dashboard - Project Library Tab Component (formerly Artifacts)
// Documents are clickable - opens in VS Code via file:// protocol

// Helper to create clickable file links
function fileLink(name, path, icon, description) {
    // Use vscode:// protocol to open in VS Code, or file:// for system default
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
        <div class="focus-banner" style="margin-bottom: 1.5rem;">
            <p style="color: var(--text-secondary); margin: 0;">
                <strong>📂 Click any document</strong> to open in VS Code
            </p>
        </div>
        
        <div class="grid-2">
            <!-- Requirements & Specs -->
            <div class="card">
                <h2>📋 Requirements & Specs</h2>
                <ul class="artifact-list">
                    ${fileLink('REQUIREMENTS.md', `${projectPath}/docs/requirements/REQUIREMENTS.md`, '📋', 'Functional & Non-functional requirements')}
                    ${fileLink('SPECS.md', `${projectPath}/docs/SPECS.md`, '📐', 'Technical specifications & API contracts')}
                    ${fileLink('v1.1 Requirements', `${projectPath}/docs/requirements/v1.1_REQUIREMENTS.md`, '📊', 'Version 1.1 upgrade requirements')}
                    ${fileLink('User Feedback', `${projectPath}/docs/v1.1_USER_FEEDBACK.md`, '💬', 'Consolidated user feedback')}
                </ul>
            </div>

            <!-- Project Management -->
            <div class="card">
                <h2>🛠️ Project Management</h2>
                <ul class="artifact-list">
                    ${fileLink('PLAN.md', `${projectPath}/PLAN.md`, '📝', 'Master Ledger - Single source of truth')}
                    ${fileLink('SESSION_LOG.md', `${projectPath}/SESSION_LOG.md`, '📜', 'Activity history & session notes')}
                    ${fileLink('README.md', `${projectPath}/README.md`, '📖', 'Project overview & setup guide')}
                </ul>
            </div>

            <!-- Testing & QA -->
            <div class="card">
                <h2>🧪 Testing & QA</h2>
                <ul class="artifact-list">
                    ${fileLink('Test Reports', `${projectPath}/tests`, '🧪', 'Unit & integration test results')}
                    ${fileLink('Security Audits', `${projectPath}/docs/security`, '🔒', 'OWASP & vulnerability scans')}
                    ${fileLink('UAT Reports', `${projectPath}/docs/ux_feedback`, '🎭', 'User acceptance testing')}
                </ul>
            </div>

            <!-- Research -->
            <div class="card">
                <h2>🔍 Research</h2>
                <ul class="artifact-list">
                    ${fileLink('Research Folder', `${projectPath}/research`, '📁', 'All research documents')}
                    ${fileLink('API Research', `${projectPath}/research`, '🔌', 'Third-party API evaluations')}
                    ${fileLink('Tech Evaluations', `${projectPath}/research`, '⚙️', 'Technology feasibility studies')}
                </ul>
            </div>

            <!-- Backend & Frontend -->
            <div class="card">
                <h2>💻 Source Code</h2>
                <ul class="artifact-list">
                    ${fileLink('Backend', `${projectPath}/backend`, '⚙️', 'API routes, middleware, database')}
                    ${fileLink('Frontend', `${projectPath}/frontend`, '🎨', 'React/Next.js components')}
                    ${fileLink('Database Migrations', `${projectPath}/backend/supabase/migrations`, '🗄️', 'SQL schema migrations')}
                </ul>
            </div>

            <!-- Agile & Process -->
            <div class="card">
                <h2>🏃 Agile & Process</h2>
                <ul class="artifact-list">
                    ${fileLink('Agile Toolkit', 'C:/Users/gerry/.gemini/antigravity/skills/agile_toolkit/SKILL.md', '📚', 'Sprint cycles, INVEST, DoD')}
                    ${fileLink('Sprint Retros', `${projectPath}/docs/retro`, '🔄', 'Sprint retrospective notes')}
                    ${fileLink('Research Toolkit', 'C:/Users/gerry/OneDrive/Desktop/LLM/RAPS/raps-methodology/skills/research-toolkit/SKILL.md', '🔍', 'Research templates & standards (skill)')}
                </ul>
            </div>
        </div>
    </div>
    `;
}

// Add click style for artifact items
export function initLibraryTab() {
    // Add hover effect for clickable items
    document.querySelectorAll('.artifact-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.background = 'rgba(59, 130, 246, 0.1)';
            item.style.borderRadius = '0.5rem';
        });
        item.addEventListener('mouseleave', () => {
            item.style.background = 'transparent';
        });
    });
}
