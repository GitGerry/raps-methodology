// RAPS Mission Control - Dashboard Tab Component (Redesigned)
// Combines: Overview + Reports + Release Gates into one actionable view

import { config } from '../../data/config.js';

export function renderDashboardTab() {
    const { currentFocus } = config;

    return `
    <div id="dashboard" class="tab-content active">
        <div class="grid-2">
            <!-- Current Focus Banner -->
            <div class="card focus-card">
                <div class="focus-header">
                    <span class="focus-icon">🎯</span>
                    <h2>Current Focus</h2>
                </div>
                <h3 class="focus-title">${currentFocus.title}</h3>
                <p class="focus-description">${currentFocus.description}</p>
                <div class="focus-agents">
                    <div class="active-agent">
                        <span class="agent-label">Active Agent</span>
                        <span class="agent-badge active">${currentFocus.activeAgent}</span>
                    </div>
                    <div class="next-agents">
                        <span class="agent-label">Next Up</span>
                        <div class="agent-flow">
                            ${currentFocus.nextAgents.map(a => `<span class="agent-badge">${a}</span>`).join('<span class="flow-arrow">→</span>')}
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Release Gates -->
            <div class="card">
                <h2>🚀 Release Gates</h2>
                <div class="gates-grid">
                    <div class="gate gate-passed">
                        <div class="gate-icon">✓</div>
                        <div class="gate-label">1. Feature Complete</div>
                    </div>
                    <div class="gate gate-passed">
                        <div class="gate-icon">✓</div>
                        <div class="gate-label">2. Code Complete</div>
                    </div>
                    <div class="gate gate-active">
                        <div class="gate-icon">⏳</div>
                        <div class="gate-label">3. Test Complete</div>
                    </div>
                    <div class="gate gate-pending">
                        <div class="gate-icon">○</div>
                        <div class="gate-label">4. Security Cleared</div>
                    </div>
                    <div class="gate gate-pending">
                        <div class="gate-icon">○</div>
                        <div class="gate-label">5. UAT Approved</div>
                    </div>
                    <div class="gate gate-pending">
                        <div class="gate-icon">○</div>
                        <div class="gate-label">6. Go-Live Safe</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="grid-2">
            <!-- Sprint Progress -->
            <div class="card">
                <h2>📊 Sprint Progress</h2>
                <div class="stats-grid">
                    <div class="stat-card blue">
                        <div class="value">3</div>
                        <div class="label">Active</div>
                    </div>
                    <div class="stat-card green">
                        <div class="value">8</div>
                        <div class="label">Done</div>
                    </div>
                    <div class="stat-card yellow">
                        <div class="value">1</div>
                        <div class="label">Blocked</div>
                    </div>
                    <div class="stat-card purple">
                        <div class="value">12</div>
                        <div class="label">Backlog</div>
                    </div>
                </div>
                <div class="progress-bar" style="margin-top: 1rem;">
                    <div class="progress-fill" style="width: 75%;"></div>
                </div>
                <div style="display: flex; justify-content: space-between; margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                    <span>75% Complete</span>
                    <span>4 Days Left</span>
                </div>
            </div>
            
            <!-- Recent Activity -->
            <div class="card">
                <h2>📋 Recent Activity</h2>
                <div class="timeline">
                    <div class="timeline-item active">
                        <div class="timeline-date">Today, 10:15 AM</div>
                        <div class="timeline-title"><strong>/test</strong> executing v1.1 feature tests</div>
                    </div>
                    <div class="timeline-item done">
                        <div class="timeline-date">Yesterday, 4:30 PM</div>
                        <div class="timeline-title"><strong>/build</strong> completed v1.1 schema fixes</div>
                    </div>
                    <div class="timeline-item done">
                        <div class="timeline-date">Yesterday, 2:00 PM</div>
                        <div class="timeline-title"><strong>/architect</strong> updated SPECS.md for v1.1</div>
                    </div>
                    <div class="timeline-item done">
                        <div class="timeline-date">Jan 14, 6:00 PM</div>
                        <div class="timeline-title"><strong>/analyst</strong> defined v1.1 requirements</div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Quality Metrics -->
        <div class="card">
            <h2>📈 Quality Metrics</h2>
            <div class="grid-4">
                <div class="metric-card">
                    <div class="metric-icon">🧪</div>
                    <div class="metric-value">85%</div>
                    <div class="metric-label">Test Coverage</div>
                    <div class="metric-trend up">↑ 5%</div>
                </div>
                <div class="metric-card">
                    <div class="metric-icon">🔒</div>
                    <div class="metric-value">Pending</div>
                    <div class="metric-label">Security Audit</div>
                    <div class="metric-trend neutral">Scheduled</div>
                </div>
                <div class="metric-card">
                    <div class="metric-icon">⚡</div>
                    <div class="metric-value">142ms</div>
                    <div class="metric-label">Avg Response</div>
                    <div class="metric-trend up">↓ 23ms</div>
                </div>
                <div class="metric-card">
                    <div class="metric-icon">🐛</div>
                    <div class="metric-value">0</div>
                    <div class="metric-label">Critical Bugs</div>
                    <div class="metric-trend up">Stable</div>
                </div>
            </div>
        </div>
    </div>
    `;
}
