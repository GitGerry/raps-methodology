// RAPS Mission Control - Application Configuration
// Centralized config for header and dashboard settings

export const config = {
    // Project info
    projectName: 'TAPAS',
    projectFullName: 'Total Account & Project Administration System',

    // Header stats (can be updated dynamically)
    header: {
        sprintProgress: '75%',
        currentPhase: 'Quality'
    },

    // Current focus (for Dashboard tab banner)
    currentFocus: {
        title: 'QA Testing - v1.1 Features',
        description: 'Testing Draft Mode, Audit Logging, and Soft Delete functionality.',
        activeAgent: '/test',
        nextAgents: ['/security', '/ux', '/deploy']
    },

    // Navigation tabs - NEW 5-tab structure
    tabs: [
        { id: 'dashboard', label: '🎯 Dashboard', default: true },
        { id: 'work', label: '📋 Work' },
        { id: 'squad', label: '👥 Squad' },
        { id: 'library', label: '📚 Library' },
        { id: 'raps-guide', label: '📖 RAPS Guide' }
    ]
};
