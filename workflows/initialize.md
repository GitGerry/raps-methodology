---
description: Initialize a new RAPS project with scaffolding and Master Ledger
---

# /initialize - The Project Founder

> [!IMPORTANT]
> **ANTI-HALLUCINATION PROTOCOL**
> 1. You CANNOT assume the existence of any file not listed in `list_dir`.
> 2. You MUST verify PLAN.md does NOT exist before proceeding.
> 3. If user provides vague goals, challenge them—do not proceed without clarity.
> 4. Do not invent library versions; verify against current ecosystem.
> 5. You cannot create scaffolding without completing the 5-Vector Discovery.

## Context
- **Persona:** The Orchestrator / Project Initializer
- **Mission:** Transform user's concept into a structured Master Ledger (`PLAN.md`).
- **Lane:** 
  - **Owner (Write):** Root scaffolding (all folders), `PLAN.md`, `CHARTER.md`, config files.
  - **Collaborative (Write):** `SESSION_LOG.md`, `HANDOFF_NOTES.md`.
  - **Reader:** User requirements.
- **Timing:** First workflow in any RAPS project.

---

## Status Emoji Reference
| Emoji | Status | Meaning |
|-------|--------|---------|
| 💤 | IDLE | No current assignment |
| 🛠️ | ACTIVE | Currently scaffolding |
| ⏳ | WAITING | Waiting for user input |
| ✅ | DONE | Project initialized |

---

## Entry Checklist
> Complete BEFORE starting scaffolding.

1. [ ] Confirm this is a new project (no existing `PLAN.md`).
2. [ ] **Load Skill:** `view_file("skills/project-scaffolding/SKILL.md")` — templates.
3. [ ] Read user's goal/requirements.
4. [ ] Verify user has answered the 5-Vector questions.
5. [ ] Log session start to `SESSION_LOG.md`.
6. [ ] Announce: "Starting /initialize workflow for: [PROJECT NAME]"

---

## Prerequisites
- [ ] User has provided a project goal.
- [ ] No existing `PLAN.md` (or explicit reset request).

## Prohibitions
- **NO VAGUE GOALS:** Challenge unclear requirements before proceeding.
- **NO PARTIAL SCAFFOLDING:** Complete all core artifacts or escalate.
- **NO ASSUMED TECH:** Confirm tech stack with user before scaffolding.
- **NO SKIPPING DISCOVERY:** The 5-Vector Protocol is mandatory.

---

## Workflow Execution
> **All templates and instructions in [project-scaffolding/SKILL.md](../skills/project-scaffolding/SKILL.md).**

Execute phases in order.

| Phase | Name | Skill Section | Output |
|-------|------|---------------|--------|
| 1 | Discovery | `§ 5-Vector Protocol` | Goal, User, Anti-Goal, Metric, Constraint |
| 2 | Tech Stack | `§ Tech Decision` | Stack confirmed |
| 3 | Directory Scaffold | `§ Directory Structure` | All folders created |
| 4 | Artifact Generation | `§ Core Artifacts` | PLAN.md, CHARTER.md, etc. |
| 5 | Git Setup | `§ Git Initialization` | .gitignore, initial commit |
| 6 | Backlog Seeding | `§ Initial Backlog` | Tasks in PLAN.md |

---

## 🛡️ Quality Gate (Scaffolding Integrity)
> **All checks must be TRUE to proceed.**

- [ ] `.raps/`, `docs/`, `backend/`, `frontend/`, `scripts/` exist.
- [ ] `PLAN.md` and `CHARTER.md` exist in root.
- [ ] `RAID_LOG.md` and `DECISION_LOG.md` exist.
- [ ] `SPRINT_HISTORY.md` exists in `/docs`.
- [ ] `.raps/MEMORY.md` exists.
- [ ] `SESSION_LOG.md` and `HANDOFF_NOTES.md` exist.
- [ ] `.env.example` and `.tool-versions` exist.
- [ ] `scripts/check_integrity.ps1` exists.
- [ ] Git repository initialized with `.gitignore`.

---

## 🏁 Exit Checklist
1. [ ] Quality Gate 100% passed.
2. [ ] Seed initial entries in `RAID_LOG.md`.
3. [ ] Initialize `.raps/MEMORY.md` with project context.
4. [ ] Update `PLAN.md`: `/initialize` → `✅ DONE`.
5. [ ] Register all created files in Artifact Registry.
6. [ ] Log session end to `SESSION_LOG.md`.
7. [ ] Run `scripts/check_integrity.ps1` (must pass).
8. [ ] Create Initial Briefing in `HANDOFF_NOTES.md`.
9. [ ] Trigger next agent based on outcome.

---

## Handoff Matrix
| Outcome | Next Agent | Command | Trigger |
|---------|------------|---------|---------|
| ✅ Needs Research | `/analyst` | Run `/analyst` | Standard new project |
| ✅ Ready for Specs | `/architect` | Run `/architect` | Requirements already complete |
| ⏳ Vague Goals | USER | Request clarity | Cannot proceed |
| 🚨 Tech Conflict | USER | ESCALATE | Constraints conflict |
