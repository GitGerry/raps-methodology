// TAPAS Dashboard - RAPS Framework Docs Tab Component (Enhanced)

export function renderRapsDocsTab() {
    return `
    <div id="raps-docs" class="tab-content">
        <!-- Introduction -->
        <div class="card">
            <h2>🎯 What is RAPS?</h2>
            <p style="color: var(--text-secondary); line-height: 1.8; font-size: 1.05rem;">
                <strong style="color: var(--accent-blue);">RAPS</strong> (Requirements, Architecture, Production, Shipping) 
                is a structured framework for AI-assisted software development. It ensures <strong>separation of concerns</strong>, 
                <strong>traceability</strong>, <strong>quality assurance</strong>, and <strong>context preservation</strong> 
                across the entire development lifecycle.
            </p>
        </div>
        
        <!-- Core Principles -->
        <div class="card">
            <h2>📋 Core Principles</h2>
            <div class="grid-2">
                <div style="padding: 1rem; background: var(--glass); border-left: 3px solid var(--accent-blue); border-radius: 0.25rem;">
                    <h3 style="color: var(--accent-blue); margin-bottom: 0.5rem;">🛤️ Lane Discipline</h3>
                    <p style="color: var(--text-secondary); font-size: 0.9rem;">Each persona can only write to specific folders. <code>/build</code> can't touch <code>/styles</code>, <code>/design</code> can't touch <code>/backend</code>.</p>
                    <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 0.5rem;"><em>Prevents conflicts, ensures expertise is applied correctly.</em></p>
                </div>
                <div style="padding: 1rem; background: var(--glass); border-left: 3px solid var(--accent-purple); border-radius: 0.25rem;">
                    <h3 style="color: var(--accent-purple); margin-bottom: 0.5rem;">📝 Master Ledger</h3>
                    <p style="color: var(--text-secondary); font-size: 0.9rem;"><code>PLAN.md</code> is the single source of truth for all tasks, status, and decisions.</p>
                    <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 0.5rem;"><em>No scattered notes, one place to understand project state.</em></p>
                </div>
                <div style="padding: 1rem; background: var(--glass); border-left: 3px solid var(--accent-green); border-radius: 0.25rem;">
                    <h3 style="color: var(--accent-green); margin-bottom: 0.5rem;">🤝 Handoff Protocol</h3>
                    <p style="color: var(--text-secondary); font-size: 0.9rem;">Each persona writes handoff notes explaining context for the next agent.</p>
                    <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 0.5rem;"><em>New agent can pick up seamlessly without re-reading everything.</em></p>
                </div>
                <div style="padding: 1rem; background: var(--glass); border-left: 3px solid var(--accent-yellow); border-radius: 0.25rem;">
                    <h3 style="color: var(--accent-yellow); margin-bottom: 0.5rem;">🚦 Quality Gates</h3>
                    <p style="color: var(--text-secondary); font-size: 0.9rem;">6 mandatory checkpoints before any release to production.</p>
                    <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 0.5rem;"><em>Bugs caught early, security verified, UX validated.</em></p>
                </div>
            </div>
        </div>

        <!-- Documentation Standards -->
        <div class="card">
            <h2>📚 Documentation Standards</h2>
            <p style="color: var(--text-secondary); margin-bottom: 1rem;">RAPS uses a <strong>Dynamic Tier System</strong> to right-size documentation overhead.</p>
            <div class="grid-4" style="grid-template-columns: repeat(4, 1fr); gap: 0.5rem;">
                <div style="padding: 0.75rem; background: rgba(34, 197, 94, 0.1); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 4px; text-align: center;">
                    <strong style="color: #22c55e; display: block; font-size: 1.1rem; margin-bottom: 0.25rem;">🟢 Tier 1</strong>
                    <span style="font-size: 0.8rem; color: var(--text-secondary);">Prototype</span>
                </div>
                <div style="padding: 0.75rem; background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 4px; text-align: center;">
                    <strong style="color: #3b82f6; display: block; font-size: 1.1rem; margin-bottom: 0.25rem;">🔵 Tier 2</strong>
                    <span style="font-size: 0.8rem; color: var(--text-secondary);">Project</span>
                </div>
                <div style="padding: 0.75rem; background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.3); border-radius: 4px; text-align: center;">
                    <strong style="color: #a855f7; display: block; font-size: 1.1rem; margin-bottom: 0.25rem;">🟣 Tier 3</strong>
                    <span style="font-size: 0.8rem; color: var(--text-secondary);">Product</span>
                </div>
                <div style="padding: 0.75rem; background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 4px; text-align: center;">
                    <strong style="color: #ef4444; display: block; font-size: 1.1rem; margin-bottom: 0.25rem;">🔴 Tier 4</strong>
                    <span style="font-size: 0.8rem; color: var(--text-secondary);">Enterprise</span>
                </div>
            </div>
        </div>
        
        <!-- Feature Production Line Visual -->
        <div class="card">
            <h2>🏭 Feature Production Line</h2>
            <div class="workflow-vertical">
                <div class="phase-section">
                    <div class="phase-label">📋 Planning Phase</div>
                    <div class="phase-nodes">
                        <span class="flow-node" onclick="openPersonaModal('initialize')">🏗️ /init</span>
                        <span class="flow-arrow">→</span>
                        <span class="flow-node" onclick="openPersonaModal('analyst')">📋 /analyst</span>
                        <span class="flow-arrow">→</span>
                        <span class="flow-node" onclick="openPersonaModal('architect')">📐 /architect</span>
                    </div>
                </div>
                <div class="phase-arrow">↓</div>
                <div class="phase-section">
                    <div class="phase-label">🔨 Building Phase</div>
                    <div class="phase-nodes">
                        <span class="flow-node" onclick="openPersonaModal('build')">💻 /build</span>
                        <span class="flow-arrow">⟷</span>
                        <span class="flow-node" onclick="openPersonaModal('design')">🎨 /design</span>
                    </div>
                    <p style="color: var(--text-muted); font-size: 0.8rem; margin-top: 0.5rem; text-align: center;">Run in parallel • Separate lanes</p>
                </div>
                <div class="phase-arrow">↓</div>
                <div class="phase-section">
                    <div class="phase-label">✅ Quality Phase</div>
                    <div class="phase-nodes">
                        <span class="flow-node" onclick="openPersonaModal('review')">👀 /review</span>
                        <span class="flow-arrow">→</span>
                        <span class="flow-node" onclick="openPersonaModal('test')">🧪 /test</span>
                        <span class="flow-arrow">→</span>
                        <span class="flow-node" onclick="openPersonaModal('security')">🔒 /security</span>
                        <span class="flow-arrow">→</span>
                        <span class="flow-node" onclick="openPersonaModal('ux')">🎭 /ux</span>
                    </div>
                </div>
                <div class="phase-arrow">↓</div>
                <div class="phase-section">
                    <div class="phase-label">🚀 Release Phase</div>
                    <div class="phase-nodes">
                        <span class="flow-node" onclick="openPersonaModal('deploy')">🚀 /deploy</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="grid-2">
            <!-- Planning Phase Personas -->
            <div class="card">
                <h2>📋 Planning Phase Personas</h2>
                <table class="backlog-table">
                    <thead>
                        <tr><th>Persona</th><th>Role</th><th>Outputs</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span class="flow-node small" onclick="openPersonaModal('initialize')">🏗️ /init</span></td>
                            <td>Project Founder</td>
                            <td><code>PLAN.md</code>, folder structure</td>
                        </tr>
                        <tr>
                            <td><span class="flow-node small" onclick="openPersonaModal('analyst')">📋 /analyst</span></td>
                            <td>Requirements Analyst</td>
                            <td>User Stories, <code>REQUIREMENTS.md</code>, research (via research-toolkit)</td>
                        </tr>
                        <tr>
                            <td><span class="flow-node small" onclick="openPersonaModal('architect')">📐 /architect</span></td>
                            <td>Solution Architect</td>
                            <td><code>SPECS.md</code>, schemas, ADRs</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <!-- Building Phase Personas -->
            <div class="card">
                <h2>🔨 Building Phase Personas</h2>
                <table class="backlog-table">
                    <thead>
                        <tr><th>Persona</th><th>Role</th><th>Lane Access</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span class="flow-node small" onclick="openPersonaModal('build')">💻 /build</span></td>
                            <td>Lead Developer</td>
                            <td><code>/backend</code>, <code>/api</code>, <code>/lib</code></td>
                        </tr>
                        <tr>
                            <td><span class="flow-node small" onclick="openPersonaModal('design')">🎨 /design</span></td>
                            <td>UI/UX Designer</td>
                            <td><code>/frontend</code>, <code>/components</code>, <code>/styles</code></td>
                        </tr>
                    </tbody>
                </table>
                <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(239, 68, 68, 0.1); border-radius: 0.5rem;">
                    <strong style="color: var(--accent-red);">🚫 Lane Discipline:</strong>
                    <span style="color: var(--text-secondary); font-size: 0.9rem;">Build can't touch CSS. Design can't touch backend.</span>
                </div>
            </div>
        </div>
        
        <div class="grid-2">
            <!-- Quality Phase Personas -->
            <div class="card">
                <h2>✅ Quality Phase Personas</h2>
                <table class="backlog-table">
                    <thead>
                        <tr><th>Persona</th><th>Role</th><th>What They Check</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span class="flow-node small" onclick="openPersonaModal('review')">👀 /review</span></td>
                            <td>Code Reviewer</td>
                            <td>Code quality, standards, bugs</td>
                        </tr>
                        <tr>
                            <td><span class="flow-node small" onclick="openPersonaModal('test')">🧪 /test</span></td>
                            <td>QA Engineer</td>
                            <td>Unit/E2E tests, acceptance criteria</td>
                        </tr>
                        <tr>
                            <td><span class="flow-node small" onclick="openPersonaModal('security')">🔒 /security</span></td>
                            <td>Security Auditor</td>
                            <td>OWASP, SQL injection, XSS, auth</td>
                        </tr>
                        <tr>
                            <td><span class="flow-node small" onclick="openPersonaModal('ux')">🎭 /ux</span></td>
                            <td>User Advocate</td>
                            <td>Usability, UAT, user flows</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <!-- Utility Workflows -->
            <div class="card">
                <h2>🔧 Utility Workflows</h2>
                <table class="backlog-table">
                    <thead>
                        <tr><th>Persona</th><th>Role</th><th>When to Use</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span class="flow-node small" onclick="openPersonaModal('status')">📊 /status</span></td>
                            <td>Project Pulse</td>
                            <td>Quick state snapshot</td>
                        </tr>
                        <tr>
                            <td><span class="flow-node small" onclick="openPersonaModal('health')">🏥 /health</span></td>
                            <td>Project Validator</td>
                            <td>Structure & compliance check</td>
                        </tr>
                        <tr>
                            <td><span class="flow-node small" onclick="openPersonaModal('retro')">📝 /retro</span></td>
                            <td>Retrospective</td>
                            <td>After milestones</td>
                        </tr>
                        <tr>
                            <td><span class="flow-node small" onclick="openPersonaModal('sprint')">🏃 /sprint</span></td>
                            <td>Sprint Orchestrator</td>
                            <td>Sprint transitions (Agent Bot)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        <!-- Release Gates -->
        <div class="card">
            <h2>🚦 The 6 Release Gates</h2>
            <p style="color: var(--text-secondary); margin-bottom: 1rem;">Before any production deployment, all gates must pass:</p>
            <div class="grid-3">
                <div style="padding: 1rem; background: rgba(139, 92, 246, 0.1); border-left: 3px solid var(--accent-purple); border-radius: 0.25rem;">
                    <strong style="color: var(--accent-purple);">1️⃣ Feature Complete</strong>
                    <p style="color: var(--text-secondary); font-size: 0.85rem;">Owner: /architect</p>
                    <p style="color: var(--text-muted); font-size: 0.8rem;">All MUST-HAVE requirements implemented</p>
                </div>
                <div style="padding: 1rem; background: rgba(59, 130, 246, 0.1); border-left: 3px solid var(--accent-blue); border-radius: 0.25rem;">
                    <strong style="color: var(--accent-blue);">2️⃣ Code Complete</strong>
                    <p style="color: var(--text-secondary); font-size: 0.85rem;">Owner: /build</p>
                    <p style="color: var(--text-muted); font-size: 0.8rem;">All code merged, no WIP branches</p>
                </div>
                <div style="padding: 1rem; background: rgba(234, 179, 8, 0.1); border-left: 3px solid var(--accent-yellow); border-radius: 0.25rem;">
                    <strong style="color: var(--accent-yellow);">3️⃣ Test Complete</strong>
                    <p style="color: var(--text-secondary); font-size: 0.85rem;">Owner: /test</p>
                    <p style="color: var(--text-muted); font-size: 0.8rem;">All tests passing, no critical bugs</p>
                </div>
                <div style="padding: 1rem; background: rgba(239, 68, 68, 0.1); border-left: 3px solid var(--accent-red); border-radius: 0.25rem;">
                    <strong style="color: var(--accent-red);">4️⃣ Security Cleared</strong>
                    <p style="color: var(--text-secondary); font-size: 0.85rem;">Owner: /security</p>
                    <p style="color: var(--text-muted); font-size: 0.8rem;">Security audit passed</p>
                </div>
                <div style="padding: 1rem; background: rgba(249, 115, 22, 0.1); border-left: 3px solid var(--accent-orange); border-radius: 0.25rem;">
                    <strong style="color: var(--accent-orange);">5️⃣ UAT Approved</strong>
                    <p style="color: var(--text-secondary); font-size: 0.85rem;">Owner: /ux</p>
                    <p style="color: var(--text-muted); font-size: 0.8rem;">User acceptance sign-off</p>
                </div>
                <div style="padding: 1rem; background: rgba(34, 197, 94, 0.1); border-left: 3px solid var(--accent-green); border-radius: 0.25rem;">
                    <strong style="color: var(--accent-green);">6️⃣ Go-Live Safe</strong>
                    <p style="color: var(--text-secondary); font-size: 0.85rem;">Owner: /deploy</p>
                    <p style="color: var(--text-muted); font-size: 0.8rem;">Deployment checklist, rollback ready</p>
                </div>
            </div>
        </div>
        
        <!-- Feedback Loops -->
        <div class="card">
            <h2>🔄 Feedback Loops (Return Paths)</h2>
            <p style="color: var(--text-secondary); margin-bottom: 1rem;">When issues are found, the flow loops back to fix them:</p>
            <div class="grid-3">
                <div style="padding: 1rem; background: var(--glass); border-radius: 0.5rem; text-align: center;">
                    <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">👀 → 💻/🎨</div>
                    <div style="color: var(--text-secondary); font-size: 0.9rem; font-weight: 600;">Review Loop</div>
                    <div style="color: var(--accent-red); font-size: 0.8rem;">Critical code issues → back to Build/Design</div>
                </div>
                <div style="padding: 1rem; background: var(--glass); border-radius: 0.5rem; text-align: center;">
                    <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">🧪 → 💻/🎨</div>
                    <div style="color: var(--text-secondary); font-size: 0.9rem; font-weight: 600;">Test Loop</div>
                    <div style="color: var(--accent-red); font-size: 0.8rem;">Critical bugs → back to Build/Design</div>
                </div>
                <div style="padding: 1rem; background: var(--glass); border-radius: 0.5rem; text-align: center;">
                    <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">🎭 → 📋</div>
                    <div style="color: var(--text-secondary); font-size: 0.9rem; font-weight: 600;">UX Loop</div>
                    <div style="color: var(--accent-red); font-size: 0.8rem;">Missing requirements → back to Analyst</div>
                </div>
            </div>
        </div>
        
        <!-- Sprint Cycle -->
        <div class="card">
            <h2>🏃 Agile Sprint Cycle</h2>
            <div style="display: flex; justify-content: center; align-items: center; gap: 1rem; flex-wrap: wrap; padding: 1rem;">
                <span class="flow-node">📋 Sprint Planning</span>
                <span class="flow-arrow">→</span>
                <span class="flow-node">🔨 Development</span>
                <span class="flow-arrow">→</span>
                <span class="flow-node">✅ Quality</span>
                <span class="flow-arrow">→</span>
                <span class="flow-node">🚀 Deploy</span>
                <span class="flow-arrow">→</span>
                <span class="flow-node">📝 Retro</span>
                <span class="flow-arrow">→</span>
                <span style="color: var(--text-muted);">🔁 Repeat</span>
            </div>
            <p style="color: var(--text-muted); text-align: center; font-size: 0.9rem; margin-top: 0.5rem;">
                <code>/sprint</code> orchestrates transitions between cycles
            </p>
        </div>
    </div>
    `;
}
