// RAPS Mission Control - Squad Tab Component (Simplified)
// Active agents table only - Persona Directory moved to RAPS Guide

export function renderSquadTab() {
    return `
    <div id="squad" class="tab-content">
        <!-- Active Agents Table -->
        <div class="card">
            <h2>🔄 Active Agents</h2>
            <p style="color: var(--text-secondary); margin-bottom: 1rem;">Real-time status of AI agents working on the current project</p>
            <table class="squad-table">
                <thead>
                    <tr>
                        <th>Agent</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Current Task</th>
                        <th>Last Active</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><span class="agent-name">/test</span></td>
                        <td class="agent-role">QA Engineer</td>
                        <td><span class="status status-active">🛠️ ACTIVE</span></td>
                        <td>Executing v1.1 feature tests</td>
                        <td class="last-active">Just now</td>
                    </tr>
                    <tr>
                        <td><span class="agent-name">/build</span></td>
                        <td class="agent-role">Lead Developer</td>
                        <td><span class="status status-done">✅ DONE</span></td>
                        <td>Completed v1.1 schema implementation</td>
                        <td class="last-active">2 hours ago</td>
                    </tr>
                    <tr>
                        <td><span class="agent-name">/architect</span></td>
                        <td class="agent-role">Solution Architect</td>
                        <td><span class="status status-done">✅ DONE</span></td>
                        <td>Updated SPECS.md for v1.1</td>
                        <td class="last-active">Yesterday</td>
                    </tr>
                    <tr>
                        <td><span class="agent-name">/analyst</span></td>
                        <td class="agent-role">Business Analyst</td>
                        <td><span class="status status-done">✅ DONE</span></td>
                        <td>Defined v1.1 requirements</td>
                        <td class="last-active">2 days ago</td>
                    </tr>
                    <tr>
                        <td><span class="agent-name">/security</span></td>
                        <td class="agent-role">Security Analyst</td>
                        <td><span class="status status-waiting">⏳ WAITING</span></td>
                        <td>Awaiting test completion for audit</td>
                        <td class="last-active">—</td>
                    </tr>
                    <tr>
                        <td><span class="agent-name">/ux</span></td>
                        <td class="agent-role">User Advocate</td>
                        <td><span class="status status-waiting">⏳ WAITING</span></td>
                        <td>Awaiting security clearance for UAT</td>
                        <td class="last-active">—</td>
                    </tr>
                    <tr>
                        <td><span class="agent-name">/deploy</span></td>
                        <td class="agent-role">DevOps Engineer</td>
                        <td><span class="status status-waiting">⏳ WAITING</span></td>
                        <td>Pending all gates for release</td>
                        <td class="last-active">—</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <!-- Session History -->
        <div class="card">
            <h2 class="collapsible" onclick="toggleCollapse(this)">📜 Session History</h2>
            <div class="collapse-content">
                <table class="squad-table session-table">
                    <thead>
                        <tr>
                            <th>Timestamp</th>
                            <th>Agent</th>
                            <th>Action</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="timestamp">2026-01-15 22:00</td>
                            <td><span class="agent-badge">/test</span></td>
                            <td>Started v1.1 feature test execution</td>
                            <td><span class="status status-active">🛠️ IN PROGRESS</span></td>
                        </tr>
                        <tr>
                            <td class="timestamp">2026-01-15 20:30</td>
                            <td><span class="agent-badge">/build</span></td>
                            <td>Completed v1.1 schema fixes</td>
                            <td><span class="status status-done">✅ DONE</span></td>
                        </tr>
                        <tr>
                            <td class="timestamp">2026-01-15 18:00</td>
                            <td><span class="agent-badge">/architect</span></td>
                            <td>Updated SPECS.md for v1.1</td>
                            <td><span class="status status-done">✅ DONE</span></td>
                        </tr>
                        <tr>
                            <td class="timestamp">2026-01-14 16:00</td>
                            <td><span class="agent-badge">/analyst</span></td>
                            <td>Finalized v1.1 requirements</td>
                            <td><span class="status status-done">✅ DONE</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        <!-- Quick Stats -->
        <div class="card">
            <h2>📊 Agent Statistics</h2>
            <div class="grid-4">
                <div class="metric-card">
                    <div class="metric-icon">🔄</div>
                    <div class="metric-value">1</div>
                    <div class="metric-label">Active Agents</div>
                </div>
                <div class="metric-card">
                    <div class="metric-icon">✅</div>
                    <div class="metric-value">3</div>
                    <div class="metric-label">Completed Tasks</div>
                </div>
                <div class="metric-card">
                    <div class="metric-icon">⏳</div>
                    <div class="metric-value">3</div>
                    <div class="metric-label">Waiting</div>
                </div>
                <div class="metric-card">
                    <div class="metric-icon">📈</div>
                    <div class="metric-value">7</div>
                    <div class="metric-label">Total Handoffs</div>
                </div>
            </div>
        </div>
    </div>
    `;
}

export function initSquadTab() {
    // Session history data could be loaded dynamically
}
