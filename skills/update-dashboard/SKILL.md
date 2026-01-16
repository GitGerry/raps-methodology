---
name: Update Dashboard
description: Updates the static dashboard.html with real-time project status from PLAN.md
---

# /update-dashboard

## Context
- **Persona:** Status Reporter
- **Goal:** Keep `dashboard.html` in sync with `PLAN.md` Master Ledger.
- **Trigger:** End of major milestones, weekly updates, or user request.

---

## Workflow Instructions

### 1. Read Data Source
- Read `PLAN.md` to extract:
  - **Squad Status**: Which agents are `✅ DONE`, `🛠️ ACTIVE`, or `💤 IDLE`.
  - **Current Trajectory**: "Current Focus", "Active Agent", "Next Agent".
  - **Task Backlog**: Count `[x]` vs `[ ]` items to calculate completion %.

### 2. Calculate Stats
- **Total Tasks**: Count all checkboxes in "Unified Task Backlog" (excluding the "Artifact Registry").
- **Completed**: Count all `[x]`.
- **Backlog**: Count `[ ]` in active/future milestones.
- **In Progress**: 1 (Active Agent's task).
- **Percentage**: `(Completed / Total) * 100` (round to integer).

### 3. Read Target File
- Read `dashboard.html` in the project root.

### 4. Update HTML Sections
Use `replace_file_content` to update these specific blocks. **Do not rewrite the whole file** to avoid breaking styles or custom scripts.

#### A. Squad Status Table
Target the `<!-- Squad Status -->` section. Update the status spans for each agent:
- `✅ DONE` -> `<span class="status status-done">✅ Done</span>`
- `🛠️ ACTIVE` -> `<span class="status status-active">🛠️ Active</span>`
- `💤 IDLE` -> `<span class="status status-idle">💤 Idle</span>`
- `🚨 BLOCKED` -> `<span class="status status-blocked">🚨 Blocked</span>`

#### B. Project Stats
Target the `<!-- Project Stats -->` section values:
- Update "Complete" percentage: `<div class="stat-value">XX%</div>`
- Update "Backlog Tasks" count: `<div class="stat-value">XX</div>`
- Update "In Progress" count: `<div class="stat-value">X</div>`
- Update Progress Bar width: `<div class="progress-fill" style="width: XX%"></div>`

#### C. Current Focus
Target the `<!-- Current Focus -->` section:
- Update the main focus title (from "Current Trajectory" > "Focus").
- Update the description/Next steps.
- Update "Recommended workflow".

### 5. Verify
- Ensure HTML syntax is valid.
- Ensure no CSS classes were removed.

---

## Example Update
If `PLAN.md` says:
> **Focus:** Backend Implementation
> **Active Agent:** /build

Update HTML to:
```html
<div class="card wide-card">
    <h2>🎯 Current Focus</h2>
    <div style="padding: 1rem; background: var(--glass); border-radius: 0.75rem; margin-bottom: 1rem;">
        <p style="color: var(--accent-blue); font-weight: 600; margin-bottom: 0.5rem;">Backend Implementation</p>
        <p style="color: var(--text-secondary); font-size: 0.9rem;">
            🛠️ Active Agent: /build<br>
            ➡️ Next: /test for verification
        </p>
    </div>
    <!-- ... -->
</div>
```
