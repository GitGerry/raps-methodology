// RAPS Mission Control - Main Entry Point
// Redesigned 5-tab structure
import './styles/main.css';

// Components
import { renderHeader, updateHeaderStats } from './components/Header.js';
import { renderTabNav, initTabNavigation } from './components/TabNav.js';
import { renderPersonaModal, initPersonaModal } from './components/PersonaModal.js';
import { renderDiagramModal, initDiagramModal } from './components/DiagramModal.js';
import { initProjectSelector, onProjectChange } from './components/ProjectSelector.js';

// Tab Components - NEW 5-TAB STRUCTURE
import { renderDashboardTab } from './components/tabs/DashboardTab.js';
import { renderWorkTab, initWorkTab } from './components/tabs/WorkTab.js';
import { renderSquadTab, initSquadTab } from './components/tabs/SquadTab.js';
import { renderLibraryTab, initLibraryTab } from './components/tabs/LibraryTab.js';
import { renderRapsGuideTab } from './components/tabs/RapsGuideTab.js';

// Load projects registry
let projectsData = { projects: [], settings: { defaultProject: '' } };

async function loadProjects() {
  try {
    const response = await fetch('/projects.json');
    projectsData = await response.json();
  } catch (e) {
    console.warn('Could not load projects.json, using defaults');
    projectsData = {
      projects: [{
        id: 'default',
        name: 'Default Project',
        fullName: 'Default RAPS Project',
        path: '',
        status: 'active',
        currentPhase: 'Planning',
        sprintProgress: 0
      }],
      settings: { defaultProject: 'default' }
    };
  }
  return projectsData;
}

// Initialize the application
async function initApp() {
  const app = document.getElementById('app');

  // Load projects
  const { projects, settings } = await loadProjects();
  const defaultProjectId = settings.defaultProject || projects[0]?.id;

  // Render the complete dashboard - NEW 5-TAB STRUCTURE
  app.innerHTML = `
        ${renderHeader(projects, defaultProjectId)}
        ${renderTabNav()}
        <main class="main-content">
            ${renderDashboardTab()}
            ${renderWorkTab()}
            ${renderSquadTab()}
            ${renderLibraryTab()}
            ${renderRapsGuideTab()}
        </main>
        <footer class="footer">
            RAPS Mission Control v2.0 | Multi-Project Dashboard | 5-Tab Architecture
        </footer>
        ${renderPersonaModal()}
        ${renderDiagramModal()}
    `;

  // Initialize interactive components
  initTabNavigation();
  initPersonaModal();
  initDiagramModal();
  initWorkTab();
  initSquadTab();
  initLibraryTab();
  initProjectSelector(projects);

  // Global collapse toggle
  window.toggleCollapse = function (element) {
    element.classList.toggle('collapsed');
    const content = element.nextElementSibling;
    if (content) {
      content.classList.toggle('collapsed');
    }
  };

  // Handle project changes
  onProjectChange((project) => {
    console.log('Project changed to:', project.name);
    updateHeaderStats(project);
  });

  // Initialize Mermaid if loaded
  if (window.mermaid) {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'dark',
      themeVariables: {
        primaryColor: '#3b82f6',
        primaryTextColor: '#fff',
        primaryBorderColor: '#1e40af',
        lineColor: '#64748b',
        secondaryColor: '#f1f5f9',
        tertiaryColor: '#e2e8f0'
      }
    });
  }
}

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
