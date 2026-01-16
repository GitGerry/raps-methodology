// RAPS Mission Control - Work Tab Component (Redesigned)
// Kanban-style sprint board + Epic backlog

export function renderWorkTab() {
    return `
    <div id="work" class="tab-content">
        <!-- Sprint Header -->
        <div class="sprint-header">
            <div class="sprint-info">
                <h2>🏃 Sprint 2: v1.1 Upgrades</h2>
                <p class="sprint-goal"><strong>Goal:</strong> Implement Draft Mode, Audit Logging, and Soft Delete features</p>
            </div>
            <div class="sprint-stats">
                <span class="sprint-dates">Jan 10 - Jan 24</span>
                <span class="sprint-velocity">Velocity: 21 pts</span>
            </div>
        </div>
        
        <!-- Kanban Board -->
        <div class="kanban-board">
            <!-- To Do Column -->
            <div class="kanban-column">
                <div class="column-header todo">
                    <span class="column-icon">📋</span>
                    <span class="column-title">To Do</span>
                    <span class="column-count">2</span>
                </div>
                <div class="column-cards">
                    <div class="story-card">
                        <div class="story-header">
                            <span class="story-id">STORY-010</span>
                            <span class="story-size">M</span>
                        </div>
                        <div class="story-title">Implement conflict of interest checks</div>
                        <div class="story-meta">
                            <span class="story-epic">EPIC-004</span>
                        </div>
                    </div>
                    <div class="story-card">
                        <div class="story-header">
                            <span class="story-id">STORY-011</span>
                            <span class="story-size">S</span>
                        </div>
                        <div class="story-title">Add restore endpoint for soft-deleted records</div>
                        <div class="story-meta">
                            <span class="story-epic">EPIC-004</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- In Progress Column -->
            <div class="kanban-column">
                <div class="column-header in-progress">
                    <span class="column-icon">🔄</span>
                    <span class="column-title">In Progress</span>
                    <span class="column-count">3</span>
                </div>
                <div class="column-cards">
                    <div class="story-card active">
                        <div class="story-header">
                            <span class="story-id">STORY-007</span>
                            <span class="story-size">L</span>
                        </div>
                        <div class="story-title">Test Draft Mode schema implementation</div>
                        <div class="story-meta">
                            <span class="story-agent">/test</span>
                            <span class="story-epic">EPIC-004</span>
                        </div>
                    </div>
                    <div class="story-card">
                        <div class="story-header">
                            <span class="story-id">STORY-008</span>
                            <span class="story-size">M</span>
                        </div>
                        <div class="story-title">Test Audit Logging middleware</div>
                        <div class="story-meta">
                            <span class="story-agent">/test</span>
                            <span class="story-epic">EPIC-004</span>
                        </div>
                    </div>
                    <div class="story-card">
                        <div class="story-header">
                            <span class="story-id">STORY-009</span>
                            <span class="story-size">M</span>
                        </div>
                        <div class="story-title">Test Soft Delete functionality</div>
                        <div class="story-meta">
                            <span class="story-agent">/test</span>
                            <span class="story-epic">EPIC-004</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Done Column -->
            <div class="kanban-column">
                <div class="column-header done">
                    <span class="column-icon">✅</span>
                    <span class="column-title">Done</span>
                    <span class="column-count">8</span>
                </div>
                <div class="column-cards">
                    <div class="story-card completed">
                        <div class="story-header">
                            <span class="story-id">STORY-001</span>
                            <span class="story-size">L</span>
                        </div>
                        <div class="story-title">Define v1.1 requirements from user feedback</div>
                        <div class="story-meta">
                            <span class="story-agent">/analyst</span>
                        </div>
                    </div>
                    <div class="story-card completed">
                        <div class="story-header">
                            <span class="story-id">STORY-002</span>
                            <span class="story-size">M</span>
                        </div>
                        <div class="story-title">Update SPECS.md for v1.1 features</div>
                        <div class="story-meta">
                            <span class="story-agent">/architect</span>
                        </div>
                    </div>
                    <div class="story-card completed">
                        <div class="story-header">
                            <span class="story-id">STORY-003</span>
                            <span class="story-size">L</span>
                        </div>
                        <div class="story-title">Implement Draft Mode database schema</div>
                        <div class="story-meta">
                            <span class="story-agent">/build</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Product Backlog (Epics) -->
        <div class="card" style="margin-top: 2rem;">
            <h2 class="collapsible" onclick="toggleCollapse(this)">📦 Product Backlog (Epics)</h2>
            <div class="collapse-content">
                <div class="epic-list">
                    <div class="epic-row">
                        <div class="epic-info">
                            <span class="epic-id">EPIC-001</span>
                            <span class="epic-name">Core Sales Pipeline</span>
                        </div>
                        <div class="epic-progress">
                            <div class="progress-bar small">
                                <div class="progress-fill" style="width: 100%;"></div>
                            </div>
                            <span class="progress-text">100%</span>
                        </div>
                        <span class="epic-status done">✅ Complete</span>
                    </div>
                    <div class="epic-row">
                        <div class="epic-info">
                            <span class="epic-id">EPIC-002</span>
                            <span class="epic-name">Timesheet System</span>
                        </div>
                        <div class="epic-progress">
                            <div class="progress-bar small">
                                <div class="progress-fill" style="width: 100%;"></div>
                            </div>
                            <span class="progress-text">100%</span>
                        </div>
                        <span class="epic-status done">✅ Complete</span>
                    </div>
                    <div class="epic-row">
                        <div class="epic-info">
                            <span class="epic-id">EPIC-003</span>
                            <span class="epic-name">Project Management</span>
                        </div>
                        <div class="epic-progress">
                            <div class="progress-bar small">
                                <div class="progress-fill" style="width: 80%;"></div>
                            </div>
                            <span class="progress-text">80%</span>
                        </div>
                        <span class="epic-status active">🔄 In Progress</span>
                    </div>
                    <div class="epic-row">
                        <div class="epic-info">
                            <span class="epic-id">EPIC-004</span>
                            <span class="epic-name">v1.1 Upgrades</span>
                        </div>
                        <div class="epic-progress">
                            <div class="progress-bar small">
                                <div class="progress-fill" style="width: 60%;"></div>
                            </div>
                            <span class="progress-text">60%</span>
                        </div>
                        <span class="epic-status active">🔄 In Progress</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}

export function initWorkTab() {
    // Toggle collapse functionality is handled globally
}
