// RAPS Mission Control - Squad Tab Component (Redesigned)
// Active agents table + Persona directory grid

import { personaData, phaseConfig, personaOrder } from '../../data/personas.js';

export function renderSquadTab() {
    return `
    <div id="squad" class="tab-content">
        <!-- Active Agents Table -->
        <div class="card">
            <h2>🔄 Active Agents</h2>
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
                </tbody>
            </table>
        </div>
        
        <!-- Persona Directory -->
        <div class="card">
            <h2>👥 Persona Directory</h2>
            <p style="color: var(--text-secondary); margin-bottom: 1rem;">Click any persona to view details</p>
            
            <div class="persona-phases">
                ${Object.entries(phaseConfig).map(([phase, config]) => `
                    <div class="phase-section">
                        <div class="phase-label" style="color: ${config.color};">
                            ${config.label}
                        </div>
                        <div class="persona-row">
                            ${personaOrder
            .filter(name => personaData[name].phase === phase)
            .map(name => {
                const p = personaData[name];
                return `
                                        <div class="persona-card" onclick="showPersonaModal('${name}')">
                                            <div class="persona-emoji">${p.emoji}</div>
                                            <div class="persona-name">${name}</div>
                                            <div class="persona-role">${p.subtitle}</div>
                                        </div>
                                    `;
            }).join('')
        }
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <!-- Handoff Matrix -->
        <div class="card">
            <h2 class="collapsible" onclick="toggleCollapse(this)">🤝 Handoff Matrix</h2>
            <div class="collapse-content">
                <table class="handoff-table">
                    <thead>
                        <tr>
                            <th>From</th>
                            <th>To</th>
                            <th>Trigger</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span class="agent-badge">/init</span></td>
                            <td><span class="agent-badge">/research</span></td>
                            <td>Project scaffolded, needs market research</td>
                        </tr>
                        <tr>
                            <td><span class="agent-badge">/analyst</span></td>
                            <td><span class="agent-badge">/architect</span></td>
                            <td>Requirements complete, ready for specs</td>
                        </tr>
                        <tr>
                            <td><span class="agent-badge">/architect</span></td>
                            <td><span class="agent-badge">/build</span></td>
                            <td>SPECS.md approved, ready for implementation</td>
                        </tr>
                        <tr>
                            <td><span class="agent-badge">/build</span></td>
                            <td><span class="agent-badge">/test</span></td>
                            <td>Feature code complete, ready for QA</td>
                        </tr>
                        <tr>
                            <td><span class="agent-badge">/test</span></td>
                            <td><span class="agent-badge">/security</span></td>
                            <td>All tests passing, ready for security audit</td>
                        </tr>
                        <tr>
                            <td><span class="agent-badge">/security</span></td>
                            <td><span class="agent-badge">/ux</span></td>
                            <td>Security cleared, ready for UAT</td>
                        </tr>
                        <tr>
                            <td><span class="agent-badge">/ux</span></td>
                            <td><span class="agent-badge">/deploy</span></td>
                            <td>UAT approved, ready for deployment</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    `;
}

export function initSquadTab() {
    // Persona modal is handled globally
}
