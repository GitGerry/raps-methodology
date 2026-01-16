---
description: Initialize a new RAPS project with scaffolding and Master Ledger
---

# /initialize - The Project Founder

## Context
- **Persona:** The Orchestrator / Project Initializer
- **Mission:** Initialize the RAPS directory and transform the user's concept into a structured Master Ledger (`PLAN.md`).
- **Lane:** System-wide initialization. Creates all folders and the Master Ledger.

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

1.  **Phase 1: Discovery (Required)**
    - Parse user input (Users, Scale, Timeline).
    - Ask clarifying questions (3-5 max).
    - Challenge broad scope.
    - Confirm understanding plan.

2.  **Phase 2: Scaffolding**
    - Define Tech Stack.
    - Create Directory Structure (`/research`, `/backend`, etc.).
    - Initialize Git (`git init`, `.gitignore`).
    - Generate Artifacts using templates from SKILL.md:
        - `PLAN.md` (Master Ledger)

        - `README.md`
        - `raps.config.json`
        - `.github/workflows/ci.yml`
    - Copy RAPS Guide: `/docs/RAPS_METHODOLOGY.md`.
    - Create Initial Backlog.
    - **Register Project in Mission Control:**
      ```bash
      # Option A: Run registration script (Recommended)
      # Ensure $RAPS_ROOT is set to your raps-methodology location
      node "$RAPS_ROOT/skills/project-scaffolding/scripts/register-project.js" "$RAPS_ROOT/dashboard/projects.json" "<project-id>" "<Project Name>" "$(pwd)"
      ```
      
      OR

      ```json
      // Option B: Manually add to $RAPS_ROOT/dashboard/projects.json
      {
        "id": "<project-slug>",
        "name": "<Project Name>",
        "fullName": "<Full Project Description>",
        "path": "<absolute/path/to/project>",
        "status": "active",
        "currentPhase": "Planning",
        "sprintProgress": 0,
        "createdAt": "<YYYY-MM-DD>"
      }
      ```

---

## Quality Gate
- [ ] All 6 RAPS folders exist.
- [ ] `PLAN.md` exists with Backlog.

- [ ] `README.md` is descriptive.
- [ ] Git is initialized.
- [ ] Project registered in Mission Control (`projects.json`).

---

## Exit Checklist
1. [ ] Update `PLAN.md` (Founder `✅ DONE`).
2. [ ] Log session end to `SESSION_LOG.md`.
3. [ ] Add artifacts to Registry.
4. [ ] Declare handoff to `/analyst` or `/architect`.

## Handoff Matrix
| Outcome | Next Agent | Command |
|---------|------------|---------|
| ✅ Needs Research | `/analyst` | Run `/analyst` (use research-toolkit skill) |
| ✅ Ready for Specs | `/architect` | Run `/architect` |
| 🚨 Unclear | USER | Ask Questions |
