// RAPS Mission Control - RAPS Guide Tab Component
// Full whitepaper/technical manual on the RAPS methodology

export function renderRapsGuideTab() {
    return `
    <div id="raps-guide" class="tab-content">
        <div class="guide-container">
            <!-- Header -->
            <div class="guide-header">
                <h1>📖 RAPS Methodology</h1>
                <p class="guide-subtitle">Research • Architect • Programming • Styling</p>
                <p class="guide-version">Technical Manual v1.0</p>
            </div>
            
            <!-- Table of Contents -->
            <nav class="guide-toc">
                <h3>Table of Contents</h3>
                <ol>
                    <li><a href="#what-is-raps">What is RAPS?</a></li>
                    <li><a href="#core-principles">Core Principles</a></li>
                    <li><a href="#production-line">Feature Production Line</a></li>
                    <li><a href="#personas">Persona Reference</a></li>
                    <li><a href="#release-gates">Release Gates</a></li>
                    <li><a href="#artifacts">Key Artifacts</a></li>
                    <li><a href="#workflows">Workflow Reference</a></li>
                </ol>
            </nav>
            
            <!-- Section 1: What is RAPS -->
            <section id="what-is-raps" class="guide-section">
                <h2>1. What is RAPS?</h2>
                <p>
                    <strong>RAPS</strong> (Research, Architect, Programming, Styling) is an integrated framework 
                    designed to streamline the entire software development lifecycle. It focuses on four key pillars:
                </p>
                <div class="pillar-grid">
                    <div class="pillar-card research">
                        <div class="pillar-icon">🔍</div>
                        <h4>Research</h4>
                        <p>Market intelligence, feasibility studies, competitor analysis, and technical evaluations before any code is written.</p>
                    </div>
                    <div class="pillar-card architect">
                        <div class="pillar-icon">📐</div>
                        <h4>Architect</h4>
                        <p>System design, API contracts, data modeling, and technical specifications that serve as the blueprint.</p>
                    </div>
                    <div class="pillar-card programming">
                        <div class="pillar-icon">💻</div>
                        <h4>Programming</h4>
                        <p>Backend development, API implementation, database management, and business logic execution.</p>
                    </div>
                    <div class="pillar-card styling">
                        <div class="pillar-icon">🎨</div>
                        <h4>Styling</h4>
                        <p>Frontend development, UI/UX design, visual aesthetics, and user experience optimization.</p>
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
                            <tr><td>/init</td><td>PLAN.md</td><td>Scaffolding, Roadmap</td></tr>
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
            
            <!-- Section 3: Feature Production Line -->
            <section id="production-line" class="guide-section">
                <h2>3. Feature Production Line</h2>
                <p>
                    Features flow through the RAPS pipeline in a structured sequence. Each phase has designated 
                    personas who execute specific responsibilities.
                </p>
                
                <div class="production-line">
                    <div class="phase-block planning">
                        <div class="phase-header">📋 Planning Phase</div>
                        <div class="phase-flow">
                            <span class="flow-node">/init</span>
                            <span class="flow-arrow">→</span>
                            <span class="flow-node">/research</span>
                            <span class="flow-arrow">→</span>
                            <span class="flow-node">/analyst</span>
                            <span class="flow-arrow">→</span>
                            <span class="flow-node">/architect</span>
                        </div>
                        <p class="phase-desc">
                            Project initialization, market research, requirements gathering, and technical specifications.
                        </p>
                    </div>
                    
                    <div class="phase-arrow">↓</div>
                    
                    <div class="phase-block building">
                        <div class="phase-header">🔨 Building Phase</div>
                        <div class="phase-flow">
                            <span class="flow-node">/build</span>
                            <span class="flow-arrow">⟷</span>
                            <span class="flow-node">/design</span>
                        </div>
                        <p class="phase-desc">
                            Backend and frontend development work in parallel, with continuous integration.
                        </p>
                    </div>
                    
                    <div class="phase-arrow">↓</div>
                    
                    <div class="phase-block quality">
                        <div class="phase-header">✅ Quality Phase</div>
                        <div class="phase-flow">
                            <span class="flow-node">/review</span>
                            <span class="flow-arrow">→</span>
                            <span class="flow-node">/test</span>
                            <span class="flow-arrow">→</span>
                            <span class="flow-node">/security</span>
                            <span class="flow-arrow">→</span>
                            <span class="flow-node">/ux</span>
                        </div>
                        <p class="phase-desc">
                            Code review, automated testing, security audits, and user acceptance testing.
                        </p>
                    </div>
                    
                    <div class="phase-arrow">↓</div>
                    
                    <div class="phase-block release">
                        <div class="phase-header">🚀 Release Phase</div>
                        <div class="phase-flow">
                            <span class="flow-node">/deploy</span>
                        </div>
                        <p class="phase-desc">
                            Deployment to staging, production release, and post-deployment monitoring.
                        </p>
                    </div>
                </div>
            </section>
            
            <!-- Section 4: Persona Reference -->
            <section id="personas" class="guide-section">
                <h2>4. Persona Reference</h2>
                <p>Each persona is an AI agent specialized for a specific role in the development process.</p>
                
                <div class="persona-table-section">
                    <h4>📋 Planning Phase Personas</h4>
                    <table class="persona-ref-table">
                        <thead>
                            <tr><th>Persona</th><th>Role</th><th>Key Responsibilities</th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>/init</code></td>
                                <td>Project Founder</td>
                                <td>Scaffolding, directory structure, PLAN.md creation, Git initialization</td>
                            </tr>
                            <tr>
                                <td><code>/research</code></td>
                                <td>Data Strategist</td>
                                <td>Market intelligence, competitor analysis, feasibility studies, API research</td>
                            </tr>
                            <tr>
                                <td><code>/analyst</code></td>
                                <td>Business Analyst</td>
                                <td>User stories, acceptance criteria, INVEST compliance, requirements documentation</td>
                            </tr>
                            <tr>
                                <td><code>/architect</code></td>
                                <td>Solution Architect</td>
                                <td>SPECS.md, API contracts, database schema, system design</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div class="persona-table-section">
                    <h4>🔨 Building Phase Personas</h4>
                    <table class="persona-ref-table">
                        <thead>
                            <tr><th>Persona</th><th>Role</th><th>Key Responsibilities</th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>/build</code></td>
                                <td>Lead Developer</td>
                                <td>Backend implementation, API routes, database migrations, middleware</td>
                            </tr>
                            <tr>
                                <td><code>/design</code></td>
                                <td>UI/UX Engineer</td>
                                <td>Frontend components, styling, animations, responsive design</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div class="persona-table-section">
                    <h4>✅ Quality Phase Personas</h4>
                    <table class="persona-ref-table">
                        <thead>
                            <tr><th>Persona</th><th>Role</th><th>Key Responsibilities</th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>/review</code></td>
                                <td>Code Reviewer</td>
                                <td>Pull request review, code standards, best practices enforcement</td>
                            </tr>
                            <tr>
                                <td><code>/test</code></td>
                                <td>QA Engineer</td>
                                <td>Unit tests, integration tests, edge case validation, regression testing</td>
                            </tr>
                            <tr>
                                <td><code>/security</code></td>
                                <td>Security Analyst</td>
                                <td>OWASP compliance, vulnerability scanning, penetration testing</td>
                            </tr>
                            <tr>
                                <td><code>/ux</code></td>
                                <td>UX Specialist</td>
                                <td>User acceptance testing, accessibility audits, usability feedback</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div class="persona-table-section">
                    <h4>🚀 Release Phase Personas</h4>
                    <table class="persona-ref-table">
                        <thead>
                            <tr><th>Persona</th><th>Role</th><th>Key Responsibilities</th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>/deploy</code></td>
                                <td>DevOps Engineer</td>
                                <td>CI/CD pipelines, infrastructure, staging/production deployment, monitoring</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div class="persona-table-section">
                    <h4>🔧 Support Personas</h4>
                    <table class="persona-ref-table">
                        <thead>
                            <tr><th>Persona</th><th>Role</th><th>Key Responsibilities</th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>/sprint</code></td>
                                <td>Scrum Master</td>
                                <td>Sprint planning, velocity tracking, retrospectives, backlog grooming</td>
                            </tr>
                            <tr>
                                <td><code>/health</code></td>
                                <td>Project Doctor</td>
                                <td>Health checks, documentation audits, consistency validation</td>
                            </tr>
                            <tr>
                                <td><code>/retro</code></td>
                                <td>Retrospective Lead</td>
                                <td>Sprint retrospectives, lessons learned, process improvements</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            
            <!-- Section 5: Release Gates -->
            <section id="release-gates" class="guide-section">
                <h2>5. Release Gates</h2>
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
            
            <!-- Section 6: Key Artifacts -->
            <section id="artifacts" class="guide-section">
                <h2>6. Key Artifacts</h2>
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
            
            <!-- Section 7: Workflows -->
            <section id="workflows" class="guide-section">
                <h2>7. Workflow Reference</h2>
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
