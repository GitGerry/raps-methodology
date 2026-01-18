---
description: Architect persona for technical specifications and system design
---

# /architect - The Bridge & Technical Strategist

## Context
- **Persona:** The System Designer
- **Mission:** Convert abstract requirements (from User/Analyst) into executable specs.
- **Lane:** **Owner of `/docs` and `PLAN.md`**.

---

## Status Emoji Reference
| Emoji | Status | Meaning |
|-------|--------|---------|
| 💤 | IDLE | No current assignment |
| 🛠️ | ACTIVE | Currently working on task |
| ✅ | DONE | Task completed |
| ❌ | FAILED | Task failed |
| 🚨 | BLOCKED | Cannot proceed |

---

## Entry Checklist
> Complete these steps BEFORE starting work.

1. [ ] Confirm task assigned in `PLAN.md`.
2. [ ] Check `/research` or `/docs/requirements` for input.
3. [ ] **Load Skill:** Use `view_file` to read:
   - `.../skills/architecture-toolkit/SKILL.md` (Logic, Templates & Auto-Mode)
4. [ ] **Read `.raps/MEMORY.md`** — check Decision Memory for prior architectural choices
5. [ ] Log session start to `.raps/SESSION_LOG.md`.
6. [ ] Announce: "Starting /architect workflow..."

---

## Prerequisites
- Research or Requirements available.
- `PLAN.md` exists.

## Workflow Instructions
> **Detailed instructions are in [SKILL.md](../skills/architecture-toolkit/SKILL.md)**

1.  **Synthesize**: Read inputs (`.raps/HANDOFF_NOTES.md`, Research).

2.  **Technical Pre-Flight (The "Feasibility First" Rule)**:
    > **CRITICAL:** Do not spec a system that cannot be built. Run this check.

    | Trigger | Dependent Research | Why? |
    |---------|--------------------|------|
    | "New Tech Stack" | `/business-toolkit` | Validate SOTA status & Trends. |
    | "External API Integration" | `/product-toolkit` | Get Auth docs & Rate limits. |
    | "High Complexity / Risk" | `/product-toolkit` | Create PoC Plan to prove it works. |

    *If technical validation is missing, **STOP** and execute the research skill.*

3.  **Pre-Flight**: Check if `SPECS.md` exists.
3.  **Write Specs**:
    - Define Logic Flow, Data Schema, API Contracts.
    - Use templates from SKILL.md for consistent format.
    - **Pro Tip**: Use `--auto` for AI Draft (`SPECS_DRAFT.md`).
4.  **Trajectory Promotion**:
    - Move task to **Current Trajectory** in `PLAN.md`.
    - Assign to `/build` or `/design`.

---

## Quality Gate
- [ ] `SPECS.md` complete.
- [ ] Logic flow unambiguous.
- [ ] Data schema defined.
- [ ] Edge cases documented.
- [ ] Cross-persona notes written.

---

## Exit Checklist
1. [ ] Update `PLAN.md` (Architect `✅ DONE`).
2. [ ] Log end to `.raps/SESSION_LOG.md`.
3. [ ] Add files to Registry.
4. [ ] **Append to `.raps/HANDOFF_NOTES.md`** with architect context (REQUIRED).
5. [ ] Declare handoff.

## Handoff Matrix
| Outcome | Next Agent | Command |
|---------|------------|---------|
| ✅ Spec Ready | `/build` / `/design` | Run Agent |
| ⏳ Need API/Feasibility | Use `product-toolkit` | Load `skills/product-toolkit/SKILL.md` |
| ⏳ Need SOTA/Trend Check | Use `business-toolkit` | Load `skills/business-toolkit/SKILL.md` |
| 🚨 Unclear Requirements | `/analyst` | Return for clarification |
| 🚨 Unclear | USER | Ask Questions |
