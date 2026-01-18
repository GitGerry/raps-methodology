# 🗺️ MASTER LEDGER: [Project Name]

> Single source of truth for project state and progress

---

## 1. Project Overview

| Attribute | Value |
|-----------|-------|
| **Project Name** | [Name] |
| **Start Date** | [Date] |
| **Target Release** | [Date/Version] |
| **Status:** Use `/raps-status` to update this section. Track / 🔴 At Risk |

### Vision Statement
[One paragraph describing what this project achieves]

### Success Criteria
- [ ] [Measurable outcome 1]
- [ ] [Measurable outcome 2]
- [ ] [Measurable outcome 3]

---

## 2. Squad Status

| Persona | Status | Current Task | Last Updated |
|---------|--------|--------------|--------------|
| 🏗️ /initialize | 💤 IDLE | - | - |
| 🔍 /research | 💤 IDLE | - | - |
| 📋 /analyst | 💤 IDLE | - | - |
| 📐 /architect | 💤 IDLE | - | - |
| ⚙️ /build | 💤 IDLE | - | - |
| 🎨 /design | 💤 IDLE | - | - |
| 👀 /review | 💤 IDLE | - | - |
| 🧪 /test | 💤 IDLE | - | - |
| 🎭 /ux | 💤 IDLE | - | - |
| 🔒 /security | 💤 IDLE | - | - |
| 🚀 /deploy | 💤 IDLE | - | - |

**Status Legend:** 💤 IDLE | 🛠️ ACTIVE | ⏳ WAITING | ✅ DONE | 🚨 BLOCKED

---

## 3. Current Trajectory

### Active Milestone
| Attribute | Value |
|-----------|-------|
| **Milestone** | [Name] |
| **Target Date** | [Date] |
| **Progress** | [X]% |

### Key Deliverables
- [ ] [Deliverable 1]
- [ ] [Deliverable 2]
- [ ] [Deliverable 3]

---

## 4. Unified Task Backlog

> **Dependency Notation:** Use Task IDs (T001, T002) to reference dependencies.
> `-` means no dependencies.

| ID | Task | Status | Owner | Depends On | Feeds Into | Priority |
|----|------|--------|-------|------------|------------|----------|
| T001 | [Task description] | [BACKLOG] | /research | - | T002, T003 | P1-Must |
| T002 | [Task description] | [BACKLOG] | /architect | T001 | T004 | P1-Must |
| T003 | [Task description] | [BACKLOG] | /design | T001 | T005 | P2-Should |
| T004 | [Task description] | [BACKLOG] | /build | T002 | T006 | P1-Must |
| T005 | [Task description] | [BACKLOG] | /design | T003 | T006 | P2-Should |
| T006 | [Task description] | [BACKLOG] | /test | T004, T005 | - | P1-Must |

### Task Status Values
- `[BACKLOG]` — Not started
- `[READY]` — Vetted, ready to start
- `[IN-PROGRESS]` — Actively being worked
- `[BLOCKED: reason]` — Cannot proceed
- `[READY FOR TEST]` — Implementation complete
- `[DONE]` — Verified complete

### Priority Levels
- `P1-Must` — Required for release
- `P2-Should` — Important but not blocking
- `P3-Could` — Nice to have
- `P4-Wont` — Explicitly excluded

### Understanding Dependencies

```
T001 ──┬──▶ T002 ──▶ T004 ──┬──▶ T006
       │                    │
       └──▶ T003 ──▶ T005 ──┘
```

- **Depends On:** Tasks that must complete before this task can start
- **Feeds Into:** Tasks that are waiting for this task's output

---

## 5. Artifact Registry

| Artifact | Path | Owner | Status | Last Updated |
|----------|------|-------|--------|--------------|
| Requirements | `/docs/requirements/REQUIREMENTS.md` | /analyst | Draft | [Date] |
| Specifications | `/docs/SPECS.md` | /architect | Draft | [Date] |
| Session Log | `SESSION_LOG.md` | All | Active | [Date] |
| Handoff Notes | `HANDOFF_NOTES.md` | All | Active | [Date] |
| Memory | `MEMORY.md` | All | Active | [Date] |

---

## 6. Completed Archive

> Tasks moved here after verification by /test

| ID | Task | Completed | Verified By | Notes |
|----|------|-----------|-------------|-------|
| - | - | - | - | - |

---

## 7. Blockers & Risks

### Active Blockers
| ID | Blocker | Affects | Owner | Raised | Status |
|----|---------|---------|-------|--------|--------|
| B001 | [Description] | [Tasks] | [Who] | [Date] | Open |

### Risk Register
| ID | Risk | Probability | Impact | Mitigation | Owner |
|----|------|-------------|--------|------------|-------|
| R001 | [Description] | High/Med/Low | High/Med/Low | [Strategy] | [Who] |

---

## Quick Reference

### Workflow Order
```
/initialize → /research → /analyst → /architect → /build ↔ /design → /review → /test → /ux → /security → /deploy
```

### Priority Order (Conflict Resolution)
1. /test (highest)
2. /build
3. /design
4. /architect
5. /analyst
6. /research
7. /initialize (lowest)

### Key Commands
- `/status` — Check current state
- `/health` — Validate project health
- `/retro` — Capture lessons learned
- `/release` — Check release gates
