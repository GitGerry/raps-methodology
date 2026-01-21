// TAPAS Dashboard - Project Docs Tab Component

export function renderProjectDocsTab() {
    return `
    <div id="project-docs" class="tab-content">
        <div class="grid-2">
            <!-- Use Case Diagrams -->
            <div class="card">
                <h2>📊 Use Case Diagrams</h2>
                <p style="color: var(--text-secondary); margin-bottom: 1rem;">Click to view detailed diagrams</p>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                    <button class="flow-node" onclick="openDiagramModal('use_cases', 'Use Case Diagram')">
                        📊 System Use Cases
                    </button>
                    <button class="flow-node" onclick="openDiagramModal('activation', 'Project Activation Workflow')">
                        🚀 Project Activation
                    </button>
                    <button class="flow-node" onclick="openDiagramModal('acceptance', 'Acceptance Approval Workflow')">
                        🔐 Acceptance Approval
                    </button>
                    <button class="flow-node" onclick="openDiagramModal('draft', 'Draft Mode State Machine')">
                        📝 Draft Mode
                    </button>
                </div>
            </div>
            
            <!-- Key Documents -->
            <div class="card">
                <h2>📚 Key Documents</h2>
                <ul class="artifact-list">
                    <li class="artifact-item">
                        <div class="artifact-icon">📋</div>
                        <div class="artifact-info">
                            <div class="artifact-name">REQUIREMENTS.md</div>
                            <div class="artifact-path">Functional & Non-functional requirements</div>
                        </div>
                    </li>
                    <li class="artifact-item">
                        <div class="artifact-icon">📐</div>
                        <div class="artifact-info">
                            <div class="artifact-name">SPECS.md</div>
                            <div class="artifact-path">Technical specifications & API contracts</div>
                        </div>
                    </li>
                    <li class="artifact-item">
                        <div class="artifact-icon">🗄️</div>
                        <div class="artifact-info">
                            <div class="artifact-name">Database Schema</div>
                            <div class="artifact-path">Entity relationships & migrations</div>
                        </div>
                    </li>
                    <li class="artifact-item">
                        <div class="artifact-icon">🔄</div>
                        <div class="artifact-info">
                            <div class="artifact-name">State Machines</div>
                            <div class="artifact-path">Lead, Opportunity, Project, Timesheet flows</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        
        <!-- Entity Overview -->
        <div class="card">
            <h2>🗂️ Core Entities</h2>
            <div class="stats-grid" style="grid-template-columns: repeat(5, 1fr);">
                <div class="stat-card blue">
                    <div class="value">Lead</div>
                    <div class="label">Sales Pipeline Entry</div>
                </div>
                <div class="stat-card purple">
                    <div class="value">Account</div>
                    <div class="label">Customer Organization</div>
                </div>
                <div class="stat-card green">
                    <div class="value">Opportunity</div>
                    <div class="label">Sales Deal</div>
                </div>
                <div class="stat-card yellow">
                    <div class="value">Project</div>
                    <div class="label">Work Container</div>
                </div>
                <div class="stat-card blue">
                    <div class="value">Timesheet</div>
                    <div class="label">Time Tracking</div>
                </div>
            </div>
        </div>
    </div>
    `;
}
