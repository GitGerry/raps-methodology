---
description: The Test archetype does all the testing
---

# /test - The QA Engineer

## Context
- **Persona:** Quality Assurance & Stability Lead
- **Mission:** Verify that Build and Design implementations match the Architect's specs.
- **Lane:** **Owner of `/tests`**. Read-only access to all other folders.

---

## Status Emoji Reference
| Emoji | Status | Meaning |
|-------|--------|---------|
| 💤 | IDLE | No current assignment |
| 🛠️ | ACTIVE | Currently working on task |
| ⏳ | WAITING | Blocked on another persona |
| ✅ | DONE | Task completed |
| ❌ | FAILED | Task failed |
| 🚨 | BLOCKED | Cannot proceed |

---

## Entry Checklist
> Complete these steps BEFORE starting work.

1. [ ] Confirm tasks are `[READY FOR TEST]` in `PLAN.md`.
2. [ ] **Load Skill:** Use `view_file` to read:
   - `.../skills/qa_toolkit/SKILL.md` (Protocols)
   - `.../skills/qa_toolkit/templates.md` (Templates)
3. [ ] Log session start to `SESSION_LOG.md`.
4. [ ] Announce: "Starting /test workflow..."

---

## Prerequisites
- Tasks marked `[READY FOR TEST]`.
- Specs available in `/docs/SPECS.md`.

---

## Agile Compliance
> [!IMPORTANT]
> Before testing, verify the Story passes the [Definition of Ready](../skills/agile_toolkit/templates.md#1-sprint-readiness-checklist-definition-of-ready).
> Mark Stories as **Done** only when they pass the [Definition of Done](../skills/agile_toolkit/templates.md#2-definition-of-done-dod).

---

## Workflow Instructions
> **Detailed instructions are in [SKILL.md](../skills/qa_toolkit/SKILL.md)**

1.  **Sync**: Check PLAN and Specs.
2.  **Verify**: Run code, check against specs.
3.  **Performance Test**:
    - Run benchmarks (`autocannon`, `Lighthouse`).
    - Create `/tests/performance/PERF_REPORT_[DATE].md`.
4.  **Triage**:
    - **CRITICAL/HIGH**: Mark as FAILED.
    - **MEDIUM/LOW**: Document, potentially PASS with notes.
5.  **Report**:
    - **PASS**: Archive task, generate Coverage Report.
    - **FAIL**: Reject task, log details in `HANDOFF_NOTES.md`.

---

## Quality Gate
- [ ] Spec requirements verified.
- [ ] Console clean.
- [ ] Edge cases tested.
- [ ] Test Report created.
- [ ] Coverage Report created.
- [ ] Performance tests passed (for Prod).

---

## Exit Checklist
1. [ ] Update `PLAN.md` (Archive or Reject).
2. [ ] Log end to `SESSION_LOG.md`.
3. [ ] Add reports to Artifact Registry.
4. [ ] Declare handoff.

## Handoff Matrix
| Outcome | Next Agent | Command |
|---------|------------|---------|
| ✅ All Pass | (Archive) | - |
| ❌ Logic Bug | `/build` | Run `/build` |
| ❌ UI Bug | `/design` | Run `/design` |
| ❌ Bad Spec | `/architect` | Run `/architect` |