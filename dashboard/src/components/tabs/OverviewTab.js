// TAPAS Dashboard - Overview Tab Component
import { config } from '../../data/config.js';

export function renderOverviewTab() {
    const focus = config.currentFocus;

    return `
    <div id="overview" class="tab-content active">
        <!-- Current Focus Banner -->
        <div class="focus-banner">
            <h3>🎯 Current Focus: ${focus.title}</h3>
            <p>${focus.description} Active agent: <strong>${focus.activeAgent}</strong></p>
            <p style="margin-top: 0.5rem;">➡️ <strong>Next:</strong> ${focus.nextAgents.join(' → ')}</p>
        </div>
        
        <div class="grid-2">
            <!-- Quick Stats -->
            <div class="card">
                <h2>📊 Sprint Overview</h2>
                <div class="stats-grid" style="grid-template-columns: repeat(2, 1fr);">
                    <div class="stat-card blue">
                        <div class="value">3</div>
                        <div class="label">Active Stories</div>
                    </div>
                    <div class="stat-card green">
                        <div class="value">8</div>
                        <div class="label">Completed</div>
                    </div>
                    <div class="stat-card yellow">
                        <div class="value">1</div>
                        <div class="label">Blocked</div>
                    </div>
                    <div class="stat-card purple">
                        <div class="value">12</div>
                        <div class="label">In Backlog</div>
                    </div>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 75%"></div>
                </div>
            </div>
            
            <!-- Recent Activity -->
            <div class="card">
                <h2>📜 Recent Activity</h2>
                <div class="timeline">
                    <div class="timeline-item active">
                        <div class="timeline-date">Today, 10:15 AM</div>
                        <div class="timeline-title">/test executing v1.1 feature tests</div>
                    </div>
                    <div class="timeline-item done">
                        <div class="timeline-date">Yesterday, 4:30 PM</div>
                        <div class="timeline-title">/build completed v1.1 schema fixes</div>
                    </div>
                    <div class="timeline-item done">
                        <div class="timeline-date">Yesterday, 2:00 PM</div>
                        <div class="timeline-title">/architect updated SPECS.md for v1.1</div>
                    </div>
                    <div class="timeline-item done">
                        <div class="timeline-date">Jan 14, 6:00 PM</div>
                        <div class="timeline-title">/analyst defined v1.1 requirements</div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Workflow Diagram -->
        <div class="card">
            <h2>🔄 RAPS Feature Production Line</h2>
            <div class="workflow-vertical">
                <div class="phase-section">
                    <div class="phase-label">📋 Planning Phase</div>
                    <div class="phase-nodes">
                        <span class="flow-node done">/init</span>
                        <span class="flow-arrow">→</span>
                        <span class="flow-node done">/research</span>
                        <span class="flow-arrow">→</span>
                        <span class="flow-node done">/analyst</span>
                        <span class="flow-arrow">→</span>
                        <span class="flow-node done">/architect</span>
                    </div>
                </div>
                <div class="phase-arrow">↓</div>
                <div class="phase-section">
                    <div class="phase-label">🔨 Building Phase</div>
                    <div class="phase-nodes">
                        <span class="flow-node done">/build</span>
                        <span class="flow-arrow">⟷</span>
                        <span class="flow-node done">/design</span>
                    </div>
                </div>
                <div class="phase-arrow">↓</div>
                <div class="phase-section">
                    <div class="phase-label">✅ Quality Phase</div>
                    <div class="phase-nodes">
                        <span class="flow-node done">/review</span>
                        <span class="flow-arrow">→</span>
                        <span class="flow-node active">/test</span>
                        <span class="flow-arrow">→</span>
                        <span class="flow-node">/security</span>
                        <span class="flow-arrow">→</span>
                        <span class="flow-node">/ux</span>
                    </div>
                </div>
                <div class="phase-arrow">↓</div>
                <div class="phase-section">
                    <div class="phase-label">🚀 Release Phase</div>
                    <div class="phase-nodes">
                        <span class="flow-node">/deploy</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}
