// TAPAS Dashboard - Diagram Modal Component
import { diagramData, diagramTitles } from '../data/diagrams.js';

export function renderDiagramModal() {
    return `
    <div id="diagramModal" class="modal">
        <div class="modal-content modal-large">
            <div class="modal-header">
                <div class="modal-title">
                    <h2 id="diagramTitle"></h2>
                </div>
                <button class="modal-close" onclick="closeDiagramModal()">&times;</button>
            </div>
            <div id="diagramBody" style="padding: 0 2rem 2rem 2rem;"></div>
        </div>
    </div>
    `;
}

export function openDiagramModal(key, title) {
    const modal = document.getElementById('diagramModal');
    const body = document.getElementById('diagramBody');
    const titleEl = document.getElementById('diagramTitle');

    titleEl.textContent = title || diagramTitles[key] || 'Diagram';
    body.innerHTML = `<div class="mermaid">${diagramData[key]}</div>`;
    modal.style.display = 'flex';

    // Re-render mermaid diagram
    setTimeout(() => {
        if (window.mermaid) {
            mermaid.run({
                nodes: [body.querySelector('.mermaid')]
            });
        }
    }, 50);
}

export function closeDiagramModal() {
    document.getElementById('diagramModal').style.display = 'none';
}

export function initDiagramModal() {
    const modal = document.getElementById('diagramModal');
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeDiagramModal();
        }
    });

    // Make functions globally available
    window.openDiagramModal = openDiagramModal;
    window.closeDiagramModal = closeDiagramModal;
}
