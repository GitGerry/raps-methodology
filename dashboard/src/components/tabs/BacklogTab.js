// TAPAS Dashboard - Backlog Tab Component

export function renderBacklogTab() {
    return `
    <div id="backlog" class="tab-content">
        <div class="grid-2">
            <!-- Active Sprint -->
            <div class="card">
                <h2>🏃 Active Sprint <span class="badge">Sprint 2</span></h2>
                <p style="color: var(--text-secondary); margin-bottom: 1rem;">Goal: Complete v1.1 QA and Release</p>
                <div style="overflow-x: auto;">
                    <table class="backlog-table">
                        <thead>
                            <tr>
                                <th>Story ID</th>
                                <th>Title</th>
                                <th>Size</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span class="task-id">STORY-007</span></td>
                                <td>Draft Mode Schema Implementation</td>
                                <td>🐂 L (8)</td>
                                <td><span class="status status-done">✅ Done</span></td>
                            </tr>
                            <tr>
                                <td><span class="task-id">STORY-008</span></td>
                                <td>Audit Logging Middleware</td>
                                <td>🐂 L (8)</td>
                                <td><span class="status status-done">✅ Done</span></td>
                            </tr>
                            <tr>
                                <td><span class="task-id">STORY-009</span></td>
                                <td>Soft Delete Implementation</td>
                                <td>🐕 M (5)</td>
                                <td><span class="status status-done">✅ Done</span></td>
                            </tr>
                            <tr>
                                <td><span class="task-id">STORY-010</span></td>
                                <td>v1.1 Feature Testing</td>
                                <td>🐕 M (5)</td>
                                <td><span class="status status-active">🛠️ Active</span></td>
                            </tr>
                            <tr>
                                <td><span class="task-id">STORY-011</span></td>
                                <td>Security Audit</td>
                                <td>🐂 L (8)</td>
                                <td><span class="status status-waiting">⏳ Pending</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <!-- Product Backlog -->
            <div class="card">
                <h2>📦 Product Backlog (Epics)</h2>
                
                <div style="margin-bottom: 1rem; padding: 1rem; background: var(--glass); border-radius: 0.5rem;">
                    <h3 style="color: var(--accent-purple); margin-bottom: 0.5rem;">EPIC-001: Lead Management</h3>
                    <div class="progress-bar" style="height: 0.25rem; margin: 0;">
                        <div class="progress-fill" style="width: 100%"></div>
                    </div>
                    <p style="color: var(--text-secondary); font-size: 0.85rem; margin-top: 0.25rem;">4/4 stories complete</p>
                </div>
                
                <div style="margin-bottom: 1rem; padding: 1rem; background: var(--glass); border-radius: 0.5rem;">
                    <h3 style="color: var(--accent-purple); margin-bottom: 0.5rem;">EPIC-002: Opportunity Pipeline</h3>
                    <div class="progress-bar" style="height: 0.25rem; margin: 0;">
                        <div class="progress-fill" style="width: 75%"></div>
                    </div>
                    <p style="color: var(--text-secondary); font-size: 0.85rem; margin-top: 0.25rem;">3/4 stories complete</p>
                </div>
                
                <div style="margin-bottom: 1rem; padding: 1rem; background: var(--glass); border-radius: 0.5rem;">
                    <h3 style="color: var(--accent-purple); margin-bottom: 0.5rem;">EPIC-003: Project & Timesheets</h3>
                    <div class="progress-bar" style="height: 0.25rem; margin: 0;">
                        <div class="progress-fill" style="width: 50%"></div>
                    </div>
                    <p style="color: var(--text-secondary); font-size: 0.85rem; margin-top: 0.25rem;">2/4 stories complete</p>
                </div>
                
                <div style="padding: 1rem; background: var(--glass); border-radius: 0.5rem;">
                    <h3 style="color: var(--accent-purple); margin-bottom: 0.5rem;">EPIC-004: v1.1 Enhancements</h3>
                    <div class="progress-bar" style="height: 0.25rem; margin: 0;">
                        <div class="progress-fill" style="width: 60%"></div>
                    </div>
                    <p style="color: var(--text-secondary); font-size: 0.85rem; margin-top: 0.25rem;">3/5 stories complete</p>
                </div>
            </div>
        </div>
        
        <!-- Sprint Archive -->
        <div class="card">
            <h2 class="collapsible collapsed">✅ Completed Sprints</h2>
            <div class="collapse-content collapsed">
                <p style="color: var(--text-secondary);">Sprint 1 (Initialization) - Completed 2026-01-14 | Velocity: 21 points</p>
            </div>
        </div>
    </div>
    `;
}

export function initBacklogTab() {
    // Initialize collapsible sections
    document.querySelectorAll('.collapsible').forEach(header => {
        header.addEventListener('click', () => {
            header.classList.toggle('collapsed');
            const content = header.nextElementSibling;
            if (content && content.classList.contains('collapse-content')) {
                content.classList.toggle('collapsed');
            }
        });
    });
}
