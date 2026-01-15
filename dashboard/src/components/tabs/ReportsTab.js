// TAPAS Dashboard - Reports Tab Component

export function renderReportsTab() {
    return `
    <div id="reports" class="tab-content">
        <div class="grid-2">
            <!-- Test Coverage -->
            <div class="card">
                <h2>📊 Test Coverage</h2>
                <div class="stats-grid" style="grid-template-columns: repeat(2, 1fr);">
                    <div class="stat-card green">
                        <div class="value">85%</div>
                        <div class="label">Unit Test Coverage</div>
                    </div>
                    <div class="stat-card blue">
                        <div class="value">12/15</div>
                        <div class="label">E2E Tests Passing</div>
                    </div>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 85%"></div>
                </div>
            </div>

            <!-- Security Status -->
            <div class="card">
                <h2>🔒 Security Status</h2>
                <div class="stats-grid" style="grid-template-columns: repeat(2, 1fr);">
                    <div class="stat-card yellow">
                        <div class="value">⏳</div>
                        <div class="label">Pending Audit</div>
                    </div>
                    <div class="stat-card green">
                        <div class="value">0</div>
                        <div class="label">Known Vulnerabilities</div>
                    </div>
                </div>
            </div>

            <!-- Performance Metrics -->
            <div class="card">
                <h2>📈 Performance Metrics</h2>
                <table class="backlog-table">
                    <thead>
                        <tr>
                            <th>Metric</th>
                            <th>Target</th>
                            <th>Current</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>API Response Time</td>
                            <td>&lt; 200ms</td>
                            <td>145ms</td>
                            <td><span class="status status-done">✅ Pass</span></td>
                        </tr>
                        <tr>
                            <td>Page Load Time</td>
                            <td>&lt; 2s</td>
                            <td>1.8s</td>
                            <td><span class="status status-done">✅ Pass</span></td>
                        </tr>
                        <tr>
                            <td>Database Query Time</td>
                            <td>&lt; 50ms</td>
                            <td>38ms</td>
                            <td><span class="status status-done">✅ Pass</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Release Gates -->
            <div class="card">
                <h2>🚦 Release Gate Status</h2>
                <table class="backlog-table">
                    <thead>
                        <tr>
                            <th>Gate</th>
                            <th>Owner</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1. Feature Complete</td>
                            <td>/architect</td>
                            <td><span class="status status-done">✅ Passed</span></td>
                        </tr>
                        <tr>
                            <td>2. Code Complete</td>
                            <td>/build</td>
                            <td><span class="status status-done">✅ Passed</span></td>
                        </tr>
                        <tr>
                            <td>3. Test Complete</td>
                            <td>/test</td>
                            <td><span class="status status-active">🛠️ In Progress</span></td>
                        </tr>
                        <tr>
                            <td>4. Security Cleared</td>
                            <td>/security</td>
                            <td><span class="status status-waiting">⏳ Pending</span></td>
                        </tr>
                        <tr>
                            <td>5. UAT Approved</td>
                            <td>/ux</td>
                            <td><span class="status status-idle">💤 Not Started</span></td>
                        </tr>
                        <tr>
                            <td>6. Go-Live Safe</td>
                            <td>/deploy</td>
                            <td><span class="status status-idle">💤 Not Started</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    `;
}
