// RAPS Mission Control - RAPS Guide Tab Component
// Full whitepaper/technical manual on the RAPS methodology

import { personaData, phaseConfig, personaOrder } from '../../data/personas.js';

export function renderRapsGuideTab() {
    return `
    <div id="raps-guide" class="tab-content">
        <div class="guide-container">
            <!-- Header -->
            <div class="guide-header">
                <h1>📖 RAPS Methodology</h1>
                <p class="guide-subtitle">Requirements • Architecture • Production • Shipping</p>
                <p class="guide-version">Technical Manual v1.0</p>
            </div>
            
            <!-- Table of Contents -->
            <nav class="guide-toc">
                <h3>Table of Contents</h3>
                <ol>
                    <li><a href="#what-is-raps">What is RAPS?</a></li>
                    <li><a href="#core-principles">Core Principles</a></li>
                    <li><a href="#production-line">Feature Production Line</a></li>
                    <li><a href="#persona-directory">Persona Directory</a></li>
                    <li><a href="#handoff-matrix">Handoff Matrix</a></li>
                    <li><a href="#release-gates">Release Gates</a></li>
                    <li><a href="#artifacts">Key Artifacts</a></li>
                    <li><a href="#workflows">Workflow Reference</a></li>
                </ol>
            </nav>
            
            <!-- Section 1: What is RAPS -->
            <section id="what-is-raps" class="guide-section">
                <h2>1. What is RAPS?</h2>
                <p>
                    <strong>RAPS</strong> (Requirements, Architecture, Production, Shipping) is an integrated framework 
                    designed to streamline the entire software development lifecycle. It focuses on four key pillars:
                </p>
                <div class="pillar-grid">
                    <div class="pillar-card requirements">
                        <div class="pillar-icon">📋</div>
                        <h4>Requirements</h4>
                        <p>Market research, user feedback analysis, functional requirements, acceptance criteria, and user stories that define what to build.</p>
                    </div>
                    <div class="pillar-card architecture">
                        <div class="pillar-icon">📐</div>
                        <h4>Architecture</h4>
                        <p>System design, API contracts, database schemas, and technical specifications that serve as the blueprint.</p>
                    </div>
                    <div class="pillar-card production">
                        <div class="pillar-icon">🔨</div>
                        <h4>Production</h4>
                        <p>Backend and frontend development, building components, implementing business logic, and creating the working software.</p>
                    </div>
                    <div class="pillar-card shipping">
                        <div class="pillar-icon">🚀</div>
                        <h4>Shipping</h4>
                        <p>Testing, security audits, user acceptance, deployment, and release management – getting quality software to users.</p>
                    </div>
                </div>
                <p>
                    RAPS ensures <strong>structured collaboration</strong>, <strong>rigorous quality control</strong>, 
                    and <strong>efficient feature delivery</strong> from conception to deployment.
                </p>
            </section>
            
            <!-- Section 2: Core Principles -->
            <section id="core-principles" class="guide-section">
                <h2>2. Core Principles</h2>
                
                <div class="principle-card">
                    <h4>🛤️ Lane Discipline</h4>
                    <p>
                        Each persona operates strictly within their designated "lane" - a specific set of folders and responsibilities.
                        This prevents logic pollution where one persona's changes interfere with another's work.
                    </p>
                    <table class="lane-table">
                        <thead>
                            <tr><th>Persona</th><th>Write Access</th><th>Domain Focus</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>/initialize</td><td>PLAN.md</td><td>Scaffolding, Roadmap</td></tr>
                            <tr><td>/research</td><td>/research, /docs</td><td>Intelligence, Benchmarks</td></tr>
                            <tr><td>/architect</td><td>PLAN.md, /docs, SPECS.md</td><td>System Design</td></tr>
                            <tr><td>/build</td><td>/backend, /api, /lib</td><td>API Logic, Database</td></tr>
                            <tr><td>/design</td><td>/frontend, /components</td><td>UI/UX, Styling</td></tr>
                            <tr><td>/test</td><td>/tests</td><td>Quality Assurance</td></tr>
                        </tbody>
                    </table>
                </div>
                
                <div class="principle-card">
                    <h4>📝 Master Ledger (PLAN.md)</h4>
                    <p>
                        <code>PLAN.md</code> is the <strong>single source of truth</strong> for all project state. 
                        Every persona reads from and writes to this file to track:
                    </p>
                    <ul>
                        <li><strong>Squad Status:</strong> Which agent is active, waiting, or complete</li>
                        <li><strong>Active Sprint:</strong> Current sprint stories and their status</li>
                        <li><strong>Product Backlog:</strong> Epics and their associated stories</li>
                        <li><strong>Artifact Registry:</strong> All generated documents and their locations</li>
                    </ul>
                </div>
                
                <div class="principle-card">
                    <h4>🤝 Handoff Protocol</h4>
                    <p>
                        When a persona completes their work, they perform a formal handoff to the next persona in the pipeline.
                        This includes:
                    </p>
                    <ol>
                        <li>Updating their status in PLAN.md to <code>✅ DONE</code></li>
                        <li>Logging the session end to SESSION_LOG.md</li>
                        <li>Declaring the handoff: "Handing off to /next_persona"</li>
                        <li>Updating HANDOFF_NOTES.md with context for the next agent</li>
                    </ol>
                </div>
                
                <div class="principle-card">
                    <h4>🚦 Quality Gates</h4>
                    <p>
                        No feature advances to production without passing through 6 mandatory gates.
                        Each gate has specific criteria that must be met before proceeding.
                    </p>
                </div>
            </section>
            
            <!-- Section 3: Feature Production Line (Interactive) -->
            <section id="production-line" class="guide-section">
                <h2>3. Feature Production Line</h2>
                <p>
                    Features flow through the RAPS pipeline in a structured sequence. <strong>Click any phase</strong> to see 
                    detailed information about the personas and their responsibilities.
                </p>
                
                <div class="production-line interactive">
                    <div class="phase-block planning clickable" onclick="togglePhaseDetails('planning')">
                        <div class="phase-header">📋 Planning Phase <span class="expand-icon">▼</span></div>
                        <div class="phase-flow">
                            <span class="flow-node" onclick="event.stopPropagation(); openPersonaModal('initialize')">/initialize</span>
                            <span class="flow-arrow">→</span>
                            <span class="flow-node" onclick="event.stopPropagation(); openPersonaModal('research')">/research</span>
                            <span class="flow-arrow">→</span>
                            <span class="flow-node" onclick="event.stopPropagation(); openPersonaModal('analyst')">/analyst</span>
                            <span class="flow-arrow">→</span>
                            <span class="flow-node" onclick="event.stopPropagation(); openPersonaModal('architect')">/architect</span>
                        </div>
                        <div id="planning-details" class="phase-details">
                            <table class="phase-table">
                                <tr><td><strong>/initialize</strong></td><td>Project Founder</td><td>Creates PLAN.md, scaffolds directory structure, initializes Git</td></tr>
                                <tr><td><strong>/research</strong></td><td>Data Strategist</td><td>Market research, competitor analysis, API feasibility studies</td></tr>
                                <tr><td><strong>/analyst</strong></td><td>Business Analyst</td><td>User stories, acceptance criteria, functional requirements</td></tr>
                                <tr><td><strong>/architect</strong></td><td>Solution Architect</td><td>SPECS.md, API contracts, database schema, system design</td></tr>
                            </table>
                        </div>
                    </div>
                    
                    <div class="phase-arrow">↓</div>
                    
                    <div class="phase-block building clickable" onclick="togglePhaseDetails('building')">
                        <div class="phase-header">🔨 Building Phase <span class="expand-icon">▼</span></div>
                        <div class="phase-flow">
                            <span class="flow-node" onclick="event.stopPropagation(); openPersonaModal('build')">/build</span>
                            <span class="flow-arrow">⟷</span>
                            <span class="flow-node" onclick="event.stopPropagation(); openPersonaModal('design')">/design</span>
                        </div>
                        <div id="building-details" class="phase-details">
                            <table class="phase-table">
                                <tr><td><strong>/build</strong></td><td>Lead Developer</td><td>Backend API, database migrations, server-side logic, middleware</td></tr>
                                <tr><td><strong>/design</strong></td><td>UI/UX Engineer</td><td>Frontend components, styling, animations, responsive layouts</td></tr>
                            </table>
                            <p class="phase-note">💡 Build and Design work in parallel with continuous integration.</p>
                        </div>
                    </div>
                    
                    <div class="phase-arrow">↓</div>
                    
                    <div class="phase-block quality clickable" onclick="togglePhaseDetails('quality')">
                        <div class="phase-header">✅ Quality Phase <span class="expand-icon">▼</span></div>
                        <div class="phase-flow">
                            <span class="flow-node" onclick="event.stopPropagation(); openPersonaModal('review')">/review</span>
                            <span class="flow-arrow">→</span>
                            <span class="flow-node" onclick="event.stopPropagation(); openPersonaModal('test')">/test</span>
                            <span class="flow-arrow">→</span>
                            <span class="flow-node" onclick="event.stopPropagation(); openPersonaModal('security')">/security</span>
                            <span class="flow-arrow">→</span>
                            <span class="flow-node" onclick="event.stopPropagation(); openPersonaModal('ux')">/ux</span>
                        </div>
                        <div id="quality-details" class="phase-details">
                            <table class="phase-table">
                                <tr><td><strong>/review</strong></td><td>Code Reviewer</td><td>Pull request reviews, code standards, best practices (optional)</td></tr>
                                <tr><td><strong>/test</strong></td><td>QA Engineer</td><td>Unit tests, integration tests, edge cases, regression testing</td></tr>
                                <tr><td><strong>/security</strong></td><td>Security Analyst</td><td>OWASP compliance, vulnerability scanning, penetration testing</td></tr>
                                <tr><td><strong>/ux</strong></td><td>UX Specialist</td><td>User acceptance testing, accessibility audits, usability feedback</td></tr>
                            </table>
                        </div>
                    </div>
                    
                    <div class="phase-arrow">↓</div>
                    
                    <div class="phase-block release clickable" onclick="togglePhaseDetails('release')">
                        <div class="phase-header">🚀 Release Phase <span class="expand-icon">▼</span></div>
                        <div class="phase-flow">
                            <span class="flow-node" onclick="event.stopPropagation(); openPersonaModal('deploy')">/deploy</span>
                        </div>
                        <div id="release-details" class="phase-details">
                            <table class="phase-table">
                                <tr><td><strong>/deploy</strong></td><td>DevOps Engineer</td><td>CI/CD pipelines, staging/production deployment, monitoring</td></tr>
                            </table>
                            <p class="phase-note">🎯 Only proceeds after all 6 Release Gates have passed.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Section 4: Interactive Persona Directory (Merged from old sections 4 and 5) -->
            <section id="persona-directory" class="guide-section">
                <h2>4. Persona Directory</h2>
                <p>Click any persona card to view detailed information about their role, responsibilities, and lane restrictions.</p>
                
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
                                    <div class="persona-card" onclick="openPersonaModal('${name}')">
                                        <div class="persona-emoji">${p.emoji}</div>
                                        <div class="persona-name">${name}</div>
                                        <div class="persona-role">${p.subtitle}</div>
                                    </div>
                                    `;
            }).join('')}
                        </div>
                    </div>
                `).join('')}
                </div>
            </section>
            
            <!-- Section 5: Handoff Matrix -->
            <section id="handoff-matrix" class="guide-section">
                <h2>5. Handoff Matrix</h2>
                <p>
                    The handoff matrix defines the formal transitions between personas. Each handoff includes 
                    context passing via <code>HANDOFF_NOTES.md</code> and status updates in <code>PLAN.md</code>.
                </p>
                
                <table class="handoff-table">
                    <thead>
                        <tr>
                            <th>From</th>
                            <th>To</th>
                            <th>Trigger Condition</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span class="agent-badge">/initialize</span></td>
                            <td><span class="agent-badge">/research</span></td>
                            <td>Project scaffolded, needs market research</td>
                        </tr>
                        <tr>
                            <td><span class="agent-badge">/research</span></td>
                            <td><span class="agent-badge">/analyst</span></td>
                            <td>Research complete, ready for requirements</td>
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
                            <td><span class="agent-badge">/architect</span></td>
                            <td><span class="agent-badge">/design</span></td>
                            <td>SPECS.md approved, UI work can begin</td>
                        </tr>
                        <tr>
                            <td><span class="agent-badge">/build</span></td>
                            <td><span class="agent-badge">/review</span></td>
                            <td>Feature code complete (optional review)</td>
                        </tr>
                        <tr>
                            <td><span class="agent-badge">/build</span></td>
                            <td><span class="agent-badge">/test</span></td>
                            <td>Feature code complete, ready for QA</td>
                        </tr>
                        <tr>
                            <td><span class="agent-badge">/design</span></td>
                            <td><span class="agent-badge">/test</span></td>
                            <td>UI implementation complete, ready for QA</td>
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
            </section>
            
            <!-- Section 6: Release Gates -->
            <section id="release-gates" class="guide-section">
                <h2>6. Release Gates</h2>
                <p>
                    Every feature must pass through 6 quality gates before reaching production. 
                    No exceptions are permitted - each gate has specific pass/fail criteria.
                </p>
                
                <div class="gates-detail">
                    <div class="gate-detail-card">
                        <div class="gate-number">1</div>
                        <div class="gate-content">
                            <h4>Feature Complete</h4>
                            <p>All functionality as specified in REQUIREMENTS.md is implemented and working.</p>
                            <ul>
                                <li>All acceptance criteria met</li>
                                <li>No placeholder code remaining</li>
                                <li>Basic happy-path testing passes</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="gate-detail-card">
                        <div class="gate-number">2</div>
                        <div class="gate-content">
                            <h4>Code Complete</h4>
                            <p>Code review approved with no critical findings.</p>
                            <ul>
                                <li>/review persona approval</li>
                                <li>No critical or high-severity issues</li>
                                <li>Code style guidelines followed</li>
                                <li>Documentation complete</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="gate-detail-card">
                        <div class="gate-number">3</div>
                        <div class="gate-content">
                            <h4>Test Complete</h4>
                            <p>All automated and manual tests pass with acceptable coverage.</p>
                            <ul>
                                <li>Unit test coverage ≥ 80%</li>
                                <li>Integration tests pass</li>
                                <li>Edge cases validated</li>
                                <li>Regression tests green</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="gate-detail-card">
                        <div class="gate-number">4</div>
                        <div class="gate-content">
                            <h4>Security Cleared</h4>
                            <p>Security audit complete with no critical vulnerabilities.</p>
                            <ul>
                                <li>OWASP Top 10 check passed</li>
                                <li>Dependency vulnerabilities resolved</li>
                                <li>Authentication/authorization verified</li>
                                <li>Sensitive data protection confirmed</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="gate-detail-card">
                        <div class="gate-number">5</div>
                        <div class="gate-content">
                            <h4>UAT Approved</h4>
                            <p>User acceptance testing complete with stakeholder sign-off.</p>
                            <ul>
                                <li>Business scenarios validated</li>
                                <li>Accessibility standards met</li>
                                <li>Performance acceptable</li>
                                <li>Stakeholder approval documented</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="gate-detail-card">
                        <div class="gate-number">6</div>
                        <div class="gate-content">
                            <h4>Go-Live Safe</h4>
                            <p>Deployment readiness confirmed with rollback plan in place.</p>
                            <ul>
                                <li>Staging deployment successful</li>
                                <li>Rollback procedure tested</li>
                                <li>Monitoring configured</li>
                                <li>Release notes prepared</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Section 7: Key Artifacts -->
            <section id="artifacts" class="guide-section">
                <h2>7. Key Artifacts</h2>
                <p>Standard documents maintained across all RAPS projects:</p>
                
                <table class="artifacts-table">
                    <thead>
                        <tr><th>Artifact</th><th>Owner</th><th>Purpose</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>PLAN.md</code></td>
                            <td>All personas</td>
                            <td>Master Ledger - single source of truth for project state</td>
                        </tr>
                        <tr>
                            <td><code>REQUIREMENTS.md</code></td>
                            <td>/analyst</td>
                            <td>Functional and non-functional requirements</td>
                        </tr>
                        <tr>
                            <td><code>SPECS.md</code></td>
                            <td>/architect</td>
                            <td>Technical specifications, API contracts, database schema</td>
                        </tr>
                        <tr>
                            <td><code>SESSION_LOG.md</code></td>
                            <td>All personas</td>
                            <td>Chronological record of all agent sessions</td>
                        </tr>
                        <tr>
                            <td><code>HANDOFF_NOTES.md</code></td>
                            <td>All personas</td>
                            <td>Context and notes for the next agent in the pipeline</td>
                        </tr>
                        <tr>
                            <td><code>FIXES.md</code></td>
                            <td>/test, /review</td>
                            <td>Bug tracking and prioritized fixes</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            
            <!-- Section 8: Workflows -->
            <section id="workflows" class="guide-section">
                <h2>8. Workflow Reference</h2>
                <p>Key workflows available via slash commands:</p>
                
                <div class="workflow-grid">
                    <div class="workflow-card">
                        <code>/initialize</code>
                        <p>Bootstrap a new RAPS project with scaffolding and PLAN.md</p>
                    </div>
                    <div class="workflow-card">
                        <code>/sprint</code>
                        <p>Manage sprint transitions, planning, and velocity tracking</p>
                    </div>
                    <div class="workflow-card">
                        <code>/health</code>
                        <p>Run project health checks for documentation and consistency</p>
                    </div>
                    <div class="workflow-card">
                        <code>/release</code>
                        <p>Validate all 6 release gates before go-live</p>
                    </div>
                    <div class="workflow-card">
                        <code>/retro</code>
                        <p>Conduct sprint retrospectives and capture lessons learned</p>
                    </div>
                    <div class="workflow-card">
                        <code>/status</code>
                        <p>Quick snapshot of current project state</p>
                    </div>
                </div>
            </section>
            
            <!-- Footer -->
            <div class="guide-footer">
                <p>RAPS Methodology v1.0 | Built for structured, quality-driven software development</p>
            </div>
        </div>
    </div>
    `;
}

// Initialize RAPS Guide tab interactivity
export function initRapsGuideTab() {
    // Global function to toggle phase details in Feature Production Line
    window.togglePhaseDetails = function (phase) {
        const details = document.getElementById(`${phase}-details`);
        const block = details.closest('.phase-block');
        const icon = block.querySelector('.expand-icon');

        if (details.classList.contains('expanded')) {
            details.classList.remove('expanded');
            icon.textContent = '▼';
        } else {
            // Close all other expanded details first
            document.querySelectorAll('.phase-details.expanded').forEach(el => {
                el.classList.remove('expanded');
                const otherIcon = el.closest('.phase-block').querySelector('.expand-icon');
                if (otherIcon) otherIcon.textContent = '▼';
            });
            // Open this one
            details.classList.add('expanded');
            icon.textContent = '▲';
        }
    };
}
