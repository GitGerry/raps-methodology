// TAPAS Dashboard - Tab Navigation Component
import { config } from '../data/config.js';

export function renderTabNav() {
    return `
    <nav class="nav-tabs">
        ${config.tabs.map(tab => `
            <div class="nav-tab${tab.default ? ' active' : ''}" data-tab="${tab.id}">${tab.label}</div>
        `).join('')}
    </nav>
    `;
}

export function initTabNavigation() {
    const tabs = document.querySelectorAll('.nav-tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.dataset.tab;

            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Update visible content
            contents.forEach(content => {
                content.classList.remove('active');
                if (content.id === targetId) {
                    content.classList.add('active');
                }
            });
        });
    });
}
