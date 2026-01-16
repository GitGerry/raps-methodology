// TAPAS Dashboard - Persona Modal Component
import { personaData } from '../data/personas.js';

let currentModal = null;

export function renderPersonaModal() {
    return `
    <div id="personaModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <span class="modal-emoji" id="modalEmoji"></span>
                <div class="modal-title">
                    <h2 id="modalName"></h2>
                    <div class="persona-subtitle" id="modalSubtitle"></div>
                </div>
                <button class="modal-close" onclick="closePersonaModal()">&times;</button>
            </div>
            <div id="modalBody"></div>
        </div>
    </div>
    `;
}

export function openPersonaModal(personaId) {
    const persona = personaData[personaId];
    if (!persona) return;

    document.getElementById('modalEmoji').textContent = persona.emoji;
    document.getElementById('modalName').textContent = persona.name;
    document.getElementById('modalSubtitle').textContent = persona.subtitle;

    let bodyHtml = `
        <div class="modal-section">
            <span class="modal-badge ${persona.phase}">${persona.phase.charAt(0).toUpperCase() + persona.phase.slice(1)} Phase</span>
        </div>
        <div class="modal-section">
            <h3>📝 Description</h3>
            <p>${persona.description}</p>
        </div>
        <div class="modal-section">
            <h3>✅ Responsibilities</h3>
            <ul>
                ${persona.responsibilities.map(r => `<li>${r}</li>`).join('')}
            </ul>
        </div>
        <div class="modal-section">
            <h3>🛤️ Lane Access (Write Permissions)</h3>
            <div class="lane-list">
                ${persona.lanes.map(l => `<span class="lane-item">${l}</span>`).join('')}
            </div>
        </div>
    `;

    if (persona.prohibitions) {
        bodyHtml += `
            <div class="modal-section">
                <h3>🚫 Prohibitions</h3>
                <ul>
                    ${persona.prohibitions.map(p => `<li style="color: #f87171;">${p}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    if (persona.issueClassification) {
        bodyHtml += `
            <div class="modal-section">
                <h3>🚦 Issue Classification</h3>
                <div style="margin-top: 0.5rem;">
                    <div style="background: rgba(239, 68, 68, 0.2); border-left: 3px solid #ef4444; padding: 0.5rem; margin-bottom: 0.5rem; border-radius: 0.25rem;">
                        <strong style="color: #ef4444;">🔴 Critical:</strong> ${persona.issueClassification.critical}
                    </div>
                    <div style="background: rgba(234, 179, 8, 0.2); border-left: 3px solid #eab308; padding: 0.5rem; margin-bottom: 0.5rem; border-radius: 0.25rem;">
                        <strong style="color: #eab308;">🟡 Medium:</strong> ${persona.issueClassification.medium}
                    </div>
                    <div style="background: rgba(34, 197, 94, 0.2); border-left: 3px solid #22c55e; padding: 0.5rem; border-radius: 0.25rem;">
                        <strong style="color: #22c55e;">🟢 Low:</strong> ${persona.issueClassification.low}
                    </div>
                </div>
            </div>
        `;
    }

    if (persona.note) {
        bodyHtml += `
            <div class="modal-section">
                <p style="color: var(--accent-blue); font-style: italic; background: var(--glass); padding: 0.75rem; border-radius: 0.5rem;">${persona.note}</p>
            </div>
        `;
    }

    bodyHtml += `
        <div class="modal-section">
            <h3>🔄 Handoff</h3>
            <p>${persona.handoff}</p>
        </div>
        <div class="modal-section" style="padding-bottom: 1.5rem;">
            <h3>📋 Entry Checklist</h3>
            <ul>
                ${persona.entryChecklist.map(c => `<li>${c}</li>`).join('')}
            </ul>
        </div>
    `;

    document.getElementById('modalBody').innerHTML = bodyHtml;
    document.getElementById('personaModal').classList.add('active');
    currentModal = 'persona';
}

export function closePersonaModal() {
    document.getElementById('personaModal').classList.remove('active');
    currentModal = null;
}

export function initPersonaModal() {
    const modal = document.getElementById('personaModal');
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closePersonaModal();
        }
    });

    // Make functions globally available
    window.openPersonaModal = openPersonaModal;
    window.closePersonaModal = closePersonaModal;
}
