// TAPAS Dashboard - Persona Data
// All persona modal definitions extracted from dashboard.html

export const personaData = {
    initialize: {
        emoji: '🏗️',
        name: '/initialize',
        subtitle: 'Project Founder',
        phase: 'planning',
        description: 'The Founder persona (powered by Project Scaffolding Skill) is responsible for project initialization, establishing the foundational structure, and creating the Master Ledger (PLAN.md).',
        responsibilities: [
            'Create project scaffolding and directory structure',
            'Generate PLAN.md Master Ledger with initial roadmap',
            'Define project vision and high-level requirements',
            'Set up SESSION_LOG.md for tracking all agent activity',
            'Establish HANDOFF_NOTES.md for context preservation',
            'Configure version control and initial commit'
        ],
        lanes: ['PLAN.md'],
        handoff: 'After scaffolding is complete, hands off to /analyst for requirements analysis.',
        entryChecklist: [
            'User has provided project requirements or vision',
            'Working directory is available and writable',
            'No existing conflicting project structure'
        ]
    },
    analyst: {
        emoji: '📋',
        name: '/analyst',
        subtitle: 'Requirements Analyst',
        phase: 'planning',
        description: 'The Analyst (powered by Analyst Toolkit Skill) transforms business needs into actionable user stories and acceptance criteria. Bridging the gap between stakeholders and developers.',
        responsibilities: [
            'Write detailed user stories with acceptance criteria',
            'Define functional and non-functional requirements',
            'Create user flow diagrams',
            'Document edge cases and error scenarios',
            'Prioritize features (MUST-HAVE, SHOULD-HAVE, COULD-HAVE)',
            'Facilitate requirements clarification with stakeholders'
        ],
        lanes: ['/docs', '/requirements'],
        handoff: 'After requirements are finalized, hands off to /architect for technical specification.',
        entryChecklist: [
            'Research findings are available (use research-toolkit skill if needed)',
            'Stakeholder input has been gathered',
            'Project scope is understood'
        ]
    },
    architect: {
        emoji: '📐',
        name: '/architect',
        subtitle: 'Solution Architect',
        phase: 'planning',
        description: 'The Solution Architect (powered by Architecture Toolkit Skill) synthesizes logic and UI requirements into comprehensive technical specifications, ADRs, and schema designs.',
        responsibilities: [
            'Create SPECS.md with complete technical design',
            'Design database schema and relationships',
            'Define API endpoints and contracts',
            'Establish coding standards and patterns',
            'Document state machines and business logic',
            'Review and approve technical approaches'
        ],
        lanes: ['PLAN.md', '/docs', '/strategy'],
        handoff: 'After specifications are approved, hands off to /build and /design for parallel implementation.',
        entryChecklist: [
            'Requirements document is complete',
            'All user stories have acceptance criteria',
            'Technical constraints are understood'
        ]
    },
    build: {
        emoji: '💻',
        name: '/build',
        subtitle: 'Lead Developer',
        phase: 'building',
        description: 'The Lead Developer focuses on backend implementation, API development, database operations, and serverless functions. They write the core business logic.',
        responsibilities: [
            'Implement API endpoints per SPECS.md',
            'Write database migrations and queries',
            'Create serverless functions (Modal, AWS Lambda)',
            'Implement authentication and authorization',
            'Write unit tests for backend logic',
            'Handle error logging and monitoring'
        ],
        lanes: ['/backend', '/api', '/lib'],
        handoff: 'After implementation is complete, hands off to /review for code review, then /test for QA.',
        entryChecklist: [
            'SPECS.md is approved and complete',
            'Development environment is configured',
            'Database access is available'
        ],
        prohibitions: [
            'DO NOT touch CSS, styling, or visual layouts',
            'DO NOT modify frontend components without coordination'
        ]
    },
    design: {
        emoji: '🎨',
        name: '/design',
        subtitle: 'UI/UX Designer',
        phase: 'building',
        description: 'The UI/UX Designer creates the visual layer and user interaction patterns. They implement responsive layouts, animations, and ensure accessibility.',
        responsibilities: [
            'Implement UI components with Next.js/React',
            'Apply glassmorphism and modern design patterns',
            'Create responsive layouts with Tailwind CSS',
            'Implement Framer Motion animations',
            'Ensure WCAG accessibility compliance',
            'Build design system with reusable components'
        ],
        lanes: ['/frontend', '/components', '/styles'],
        handoff: 'After UI is complete, hands off to /review for code review, then runs parallel with /build.',
        entryChecklist: [
            'Wireframes or mockups are available',
            'Design system tokens are defined',
            'API contracts are known for data binding'
        ],
        prohibitions: [
            'DO NOT modify backend logic or API routes',
            'DO NOT change database schemas'
        ]
    },
    review: {
        emoji: '👀',
        name: '/review',
        subtitle: 'Code Reviewer',
        phase: 'quality',
        description: 'The Code Reviewer performs thorough code quality checks between build and test phases. They ensure code follows standards, is maintainable, and free of obvious bugs.',
        responsibilities: [
            'Review pull requests for code quality',
            'Check adherence to coding standards',
            'Identify potential bugs and edge cases',
            'Verify proper error handling',
            'Ensure adequate test coverage',
            'Document review findings in REVIEW.md'
        ],
        lanes: ['/reviews'],
        handoff: 'After code review approval, hands off to /test for comprehensive QA testing.',
        entryChecklist: [
            'Code is committed and ready for review',
            'Build passes without errors',
            'Developer has self-reviewed the code'
        ]
    },
    test: {
        emoji: '🧪',
        name: '/test',
        subtitle: 'QA Engineer',
        phase: 'quality',
        description: 'The QA Engineer (powered by QA Toolkit Skill) performs comprehensive testing including unit tests, integration tests, performance tests, and end-to-end validation.',
        responsibilities: [
            'Execute test suites (Jest, Playwright, etc.)',
            'Perform integration testing',
            'Run performance and load tests',
            'Document bugs in structured format',
            'Verify acceptance criteria are met',
            'Create regression test cases'
        ],
        lanes: ['/tests'],
        handoff: 'After QA passes, hands off to /security for vulnerability scanning.',
        entryChecklist: [
            'Code review is approved',
            'Test environment is configured',
            'Test data is available'
        ],
        issueClassification: {
            critical: 'Blocks core functionality → Loop back to /build or /design',
            medium: 'Causes friction but workaround exists → Document and ship',
            low: 'Cosmetic or nice-to-have → Add to v1.1 backlog'
        }
    },
    security: {
        emoji: '🔒',
        name: '/security',
        subtitle: 'Security Auditor',
        phase: 'quality',
        description: 'The Security Auditor (powered by Security Toolkit Skill) performs vulnerability assessments, penetration testing, and compliance verification to ensure the application is secure.',
        responsibilities: [
            'Run OWASP ZAP or similar security scanners',
            'Check for SQL injection vulnerabilities',
            'Verify XSS prevention measures',
            'Audit authentication and authorization',
            'Review secrets management',
            'Ensure HTTPS and secure headers'
        ],
        lanes: ['/security'],
        handoff: 'After security clearance, hands off to /ux for user acceptance testing.',
        entryChecklist: [
            'Application is deployed to staging',
            'All endpoints are accessible',
            'Security tools are configured'
        ],
        issueClassification: {
            critical: 'Data breach risk, auth bypass → MUST FIX before release',
            medium: 'Information disclosure, missing headers → Document and fix soon',
            low: 'Best practice improvements → Backlog for v1.1'
        }
    },
    ux: {
        emoji: '🎭',
        name: '/ux',
        subtitle: 'User Advocate',
        phase: 'quality',
        description: 'The User Advocate (powered by UX Toolkit Skill) performs usability testing and user acceptance testing (UAT). They ensure the application is intuitive and validate it against the "Core Tasks".',
        responsibilities: [
            'Identify Core Tasks (Must-Haves) from /analyst User Stories',
            'Conduct usability testing sessions',
            'Verify user flows work as expected',
            'Test accessibility with screen readers',
            'Document UX issues with severity levels',
            'Validate against acceptance criteria',
            'Provide final user sign-off'
        ],
        lanes: ['/ux'],
        handoff: 'After UAT approval, hands off to /deploy for production release.',
        entryChecklist: [
            'Security scan has passed',
            'Application is stable on staging',
            'Test users are available'
        ],
        issueClassification: {
            critical: 'User CANNOT complete core task → FIX NOW (e.g., Submit button broken)',
            medium: 'User CAN complete but with friction → Document as known issue',
            low: 'Nice-to-have improvements → Backlog for v1.1'
        }
    },
    deploy: {
        emoji: '🚀',
        name: '/deploy',
        subtitle: 'DevOps Engineer',
        phase: 'release',
        description: 'The DevOps Engineer handles deployment, infrastructure, monitoring, and release management. They ensure smooth production rollouts.',
        responsibilities: [
            'Run /release gate checklist',
            'Configure CI/CD pipelines',
            'Deploy to production environment',
            'Set up monitoring and alerting',
            'Configure backups and disaster recovery',
            'Document deployment runbook'
        ],
        lanes: ['/infrastructure', '/deploy'],
        handoff: 'After successful deployment, project is complete. Hands off to /retro for retrospective.',
        entryChecklist: [
            'All 6 release gates have passed',
            'UAT approval is documented',
            'Rollback plan is ready',
            'Production environment is configured'
        ]
    },
    sprint: {
        emoji: '🏃',
        name: '/sprint',
        subtitle: 'Sprint Orchestrator',
        phase: 'agent-bot',
        description: 'The Sprint Orchestrator is an automated agent that manages sprint transitions. It archives completed sprints, calculates velocity, and plans the next iteration by pulling stories from the backlog.',
        responsibilities: [
            'Archive completed sprint with velocity summary',
            'Calculate sprint velocity (sum of story sizes)',
            'Pull stories from Product Backlog to Active Sprint',
            'Validate Sprint Readiness Checklist for each story',
            'Set sprint goal in PLAN.md',
            'Hand off to /analyst or /architect'
        ],
        lanes: ['PLAN.md'],
        handoff: 'After sprint planning, hands off to /analyst for requirements or /architect for technical spec.',
        entryChecklist: [
            'Current sprint stories are complete or moved',
            'Product Backlog has available stories',
            'Previous sprint retrospective done (if applicable)'
        ],
        note: '🤖 This is an Agent Bot - typically invoked automatically by /ux, /retro, or /deploy at sprint boundaries.'
    },
    status: {
        emoji: '📊',
        name: '/status',
        subtitle: 'Project Pulse',
        phase: 'utility',
        description: 'Get an instant snapshot of the project\'s current state without modifying anything. Useful for quick orientation.',
        responsibilities: [
            'Identify current active agent',
            'Show task in progress',
            'Highlight blockers',
            'List recent activity',
            'Recommend next actions'
        ],
        lanes: ['Read-only'],
        handoff: 'Use anytime to orient yourself.',
        entryChecklist: [
            'Project initialized',
            'PLAN.md exists'
        ]
    },
    health: {
        emoji: '🏥',
        name: '/health',
        subtitle: 'Project Validator',
        phase: 'utility',
        description: 'Validates the project structure and documents to ensure RAPS compliance and catch issues early.',
        responsibilities: [
            'Verify directory structure',
            'Validate PLAN.md tables',
            'Check for stale tasks',
            'Ensure log consistency',
            'Flag documented blockers'
        ],
        lanes: ['Read-only report'],
        handoff: 'Run after manual edits or before major phase changes.',
        entryChecklist: [
            'Basic scaffold exists'
        ]
    },
    retro: {
        emoji: '📝',
        name: '/retro',
        subtitle: 'Retrospective',
        phase: 'utility',
        description: 'Captures lessons learned, wins, and areas for improvement after milestones.',
        responsibilities: [
            'Document "What went well"',
            'Document "What could be improved"',
            'Create action items for next sprint',
            'Update project metrics'
        ],
        lanes: ['/docs/RETROSPECTIVE.md'],
        handoff: 'Run after shipping a milestone or resolving major incidents.',
        entryChecklist: [
            'Milestone completed'
        ]
    },
    release: {
        emoji: '🚦',
        name: '/release',
        subtitle: 'Release Gates',
        phase: 'utility',
        description: 'Enforces the 6 Release Gates to determine if the project is ready for deployment.',
        responsibilities: [
            'Gate 1: Feature Complete (Architect)',
            'Gate 2: Code Complete (Build)',
            'Gate 3: Test Complete (Test)',
            'Gate 4: Security Cleared (Security)',
            'Gate 5: UAT Approved (UX)',
            'Gate 6: Go-Live Safe (Deploy)'
        ],
        lanes: ['Release Decision'],
        handoff: 'Run before ANY staging or production deployment.',
        entryChecklist: [
            'All MUST-HAVE features implemented',
            'No CRITICAL bugs'
        ]
    }
};

// Phase configuration for persona grouping
export const phaseConfig = {
    planning: { label: '📋 Planning Phase', color: 'purple' },
    building: { label: '🔨 Building Phase', color: 'blue' },
    quality: { label: '✅ Quality Phase', color: 'yellow' },
    release: { label: '🚀 Release Phase', color: 'green' },
    'agent-bot': { label: '🤖 Agent Bots', color: 'gray' },
    utility: { label: '🔧 Utility Workflows', color: 'gray' }
};

// Order of personas for display
export const personaOrder = [
    // Planning
    'initialize', 'analyst', 'architect',
    // Building
    'build', 'design',
    // Quality
    'review', 'test', 'security', 'ux',
    // Release
    'deploy',
    // Agent Bots
    'sprint',
    // Utility
    'status', 'health', 'retro', 'release'
];
