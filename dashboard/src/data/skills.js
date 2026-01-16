// RAPS Skills Registry
// Central definition of all available skills and toolkits

export const skillsData = {
    // Core Toolkits
    'research-toolkit': {
        id: 'research-toolkit',
        name: 'Research',
        icon: '🔍',
        description: 'Deep dive research & analysis',
        path: '/skills/research-toolkit/SKILL.md',
        category: 'core'
    },
    'agile-toolkit': {
        id: 'agile-toolkit',
        name: 'Agile',
        icon: '🏃',
        description: 'Sprint & process management',
        path: '/skills/agile-toolkit/SKILL.md',
        category: 'core'
    },
    'project-scaffold': {
        id: 'project-scaffold',
        name: 'Scaffolding',
        icon: '🏗️',
        description: 'Project setup & directory structure',
        path: '/skills/project-scaffolding/SKILL.md',
        category: 'core'
    },

    // Role Toolkits
    'analyst-toolkit': {
        id: 'analyst-toolkit',
        name: 'Analyst',
        icon: '📋',
        description: 'Requirements & User Stories',
        path: '/skills/analyst-toolkit/SKILL.md',
        category: 'role'
    },
    'architecture-toolkit': {
        id: 'architecture-toolkit',
        name: 'Architecture',
        icon: '🏛️',
        description: 'System design & specs',
        path: '/skills/architecture-toolkit/SKILL.md',
        category: 'role'
    },
    'deploy-toolkit': {
        id: 'deploy-toolkit',
        name: 'Deploy',
        icon: '🚀',
        description: 'Ops runbooks & release gates',
        path: '/skills/deploy-toolkit/SKILL.md',
        category: 'role'
    },
    'qa-toolkit': {
        id: 'qa-toolkit',
        name: 'QA Tools',
        icon: '🧪',
        description: 'Testing methodology',
        path: '/skills/qa-toolkit/SKILL.md',
        category: 'role'
    },
    'ux-toolkit': {
        id: 'ux-toolkit',
        name: 'UX Tools',
        icon: '🎭',
        description: 'Design review & UAT',
        path: '/skills/ux-toolkit/SKILL.md',
        category: 'role'
    },
    'security-toolkit': {
        id: 'security-toolkit',
        name: 'Security',
        icon: '🛡️',
        description: 'Vulnerability assessments',
        path: '/skills/security-toolkit/SKILL.md',
        category: 'role'
    },

    // Utility Skills
    'sprint-plan': {
        id: 'sprint-plan',
        name: 'Sprint',
        icon: '📅',
        description: 'Planning & velocity',
        path: '/skills/sprint-plan/SKILL.md',
        category: 'utility'
    },
    'debug-assist': {
        id: 'debug-assist',
        name: 'Debug',
        icon: '🐛',
        description: 'Troubleshooting helper',
        path: '/skills/debug-assist/SKILL.md',
        category: 'utility'
    },
    'estimate': {
        id: 'estimate',
        name: 'Estimate',
        icon: '⏱️',
        description: 'Effort sizing & points',
        path: '/skills/estimate/SKILL.md',
        category: 'utility'
    },
    'handoff': {
        id: 'handoff',
        name: 'Handoff',
        icon: '🤝',
        description: 'Context transfer protocols',
        path: '/skills/handoff/SKILL.md',
        category: 'utility'
    },
    'spec-review': {
        id: 'spec-review',
        name: 'Spec Review',
        icon: '👓',
        description: 'Critique & feedback',
        path: '/skills/spec-review/SKILL.md',
        category: 'utility'
    }
};

export const skillCategories = {
    core: { label: '🧰 Core Toolkits', description: 'Essential frameworks' },
    role: { label: '👤 Role Toolkits', description: 'Persona-specific tools' },
    utility: { label: '🔧 Utilities', description: 'Helper functions' }
};

// Mapping of Personas to the Skills they primarily use
export const personaSkills = {
    'initialize': ['project-scaffold'],
    'analyst': ['analyst-toolkit', 'research-toolkit'],
    'architect': ['architecture-toolkit', 'research-toolkit'],
    'sprint': ['sprint-plan', 'agile-toolkit', 'estimate'],
    'build': ['debug-assist'],
    'design': ['ux-toolkit'],
    'review': ['spec-review'],
    'test': ['qa-toolkit'], // generate-tests removed as it wasn't in list
    'security': ['security-toolkit'],
    'ux': ['ux-toolkit'],
    'release': ['deploy-toolkit'],
    'deploy': ['deploy-toolkit'],
    'retro': ['handoff'],
    'health': ['debug-assist'], // compliance-check removed
    'status': []
};
