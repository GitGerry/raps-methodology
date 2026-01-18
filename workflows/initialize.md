---
description: Initialize a new RAPS project with scaffolding and Master Ledger
---

# /initialize - The Project Founder

> [!IMPORTANT]
> **ANTI-HALLUCINATION PROTOCOL**
> 1. You CANNOT assume the existence of any file not listed in `list_dir`.
> 2. You MUST read `PLAN.md` and `HANDOFF_NOTES.md` before taking action.
> 3. If a user request contradicts `CHARTER.md` scope, you MUST flag it as a "Scope Creep" risk.
> 4. Do not invent library versions; verify `package.json`.

## Context
- **Persona:** The Orchestrator / Project Initializer
- **Mission:** Initialize the RAPS directory and transform the user's concept into a structured Master Ledger (`PLAN.md`).
- **Lane:** **Root Scaffolding** (Creates all folders), `PLAN.md`, `.editorconfig`, `.gitignore`, `check_integrity.ps1`.

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

1. [ ] Confirm this is a new project (no existing `PLAN.md`).
2. [ ] Read the user's goal/requirements.
3. [ ] **Load Skill:** Use `view_file` to read:
   - `.../skills/project-scaffolding/SKILL.md` (Instructions & Templates)
4. [ ] Log session start to `SESSION_LOG.md`.
5. [ ] Announce: "Starting /initialize workflow..."

---

## Prerequisites
- User has provided a project goal.
- No existing `PLAN.md` (or request to reset).

## Workflow Instructions
> **Detailed instructions are in [SKILL.md](../skills/project-scaffolding/SKILL.md)**

1.  **Phase 1: Discovery (The 5-Vector Protocol)**
    > **GOAL:** Do not just "ask questions". Interrogate the premise to ensure validity.
    
    You MUST solicit the following 5 vectors if not provided:
    1.  **The Goal:** "What problem are we solving?" (Not "What are we building?")
    2.  **The User:** "Who is firmly accepted as the primary user?"
    3.  **The Anti-Goal:** "What are we explicitly NOT doing?" (Scope Boxing)
    4.  **The Success Metric:** "How will we know this project is compatible with reality?"
    5.  **The Constraint:** "What tech/budget/timeline is hard-coded?"

    *If the user gives vague answers, challenge them. Do not proceed to scaffolding until these 5 vectors are clear.*

2.  **Phase 2: Scaffolding**
    - Define Tech Stack.
    - Create Directory Structure:
      - `/.raps` (Hidden System Folder)
      - `/docs` ({business, functional, technical, management, qa})
      - `/research`, `/backend`, `/frontend`
    - Initialize Git (`git init`, `.gitignore`).
    - Generate Artifacts (Enterprise Standard):
        - `PLAN.md` (Master Ledger) -> Root
        - `CHARTER.md` (Project Charter) -> Root
        - `/docs/management/RAID_LOG.md`
        - `/docs/management/DECISION_LOG.md`
        - `.raps/MEMORY.md` (From `templates/MEMORY_TEMPLATE.md`)
        - `.raps/SESSION_LOG.md`
        - `.raps/HANDOFF_NOTES.md`
        - `README.md`
        - `.env.example` (Security Baseline - prevent secret leakage)
        - `.tool-versions` (Run: `node -v > .tool-versions`)
        - `CONTRIBUTING.md` (Team Standards)
        - `scripts/check_integrity.ps1` (Copy from RAPS)
        - `raps.config.json`
        - `.github/workflows/ci.yml`
    - Copy RAPS Guide: `/docs/RAPS_METHODOLOGY.md`.
    - Create Initial Backlog in `PLAN.md`.

---

## Quality Gate
## Quality Gate
- [ ] **Standard Folders:** `.raps`, `docs`, `research`, `frontend`, `backend`, `scripts` exist.
- [ ] **Master Ledger:** `PLAN.md` and `CHARTER.md` exist in root.
- [ ] **Management Logs:** `RAID_LOG.md` and `DECISION_LOG.md` exist in `/docs/management/`.
- [ ] **Context Memory:** `.raps/MEMORY.md` exists (from Template).
- [ ] **Security:** `.env.example` exists (Baseline).
- [ ] **Runtime:** `.tool-versions` exists (Locked).
- [ ] **Git:** Repository initialized with `.gitignore`.
- [ ] **Integrity:** `scripts/check_integrity.ps1` exists.

---

## Exit Checklist
1. [ ] Update `PLAN.md` (Founder `✅ DONE`).
2. [ ] Log session end to `SESSION_LOG.md`.
3. [ ] Register new files in `PLAN.md` (Section 5: User/Artifacts).
4. [ ] Run `scripts/check_integrity.ps1` (Must Pass).
5. [ ] Declare handoff to `/analyst` or `/architect`.

## Handoff Decision Logic
> **RAPS Philosophy:** Innovation requires intelligence. Research is the default starting point for the Analyst.

### Path A: To /analyst (Standard/Recommended)
**Trigger condition:** Always, unless research is already provided.
- Default path for all new projects.
- Analyst performs necessary research using `research-toolkit`.
- Ensures market fit, competitive analysis, and tech feasibility are validated.
- Generates "Ideas for Improvement" before specs are written.

### Path B: To /architect (Fast Track)
**Trigger condition:** Research is **already complete** AND requirements are fully defined.
- User provides specific requirements AND competitive analysis.
- Project is a simple utility or clone with no need for innovation.

---

## Handoff Matrix
| Outcome | Next Agent | Command |
|---------|------------|---------|
| ✅ Needs Research/Reqs | `/analyst` | Run `/analyst` (uses `research-toolkit`) |
| ✅ Ready for Specs | `/architect` | Run `/architect` |
| 🚨 Unclear | USER | Ask Questions |
