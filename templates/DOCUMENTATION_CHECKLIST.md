# Documentation Checklist

> **Tier Legend:**
> 🟢 **T1+**: All Projects | 🔵 **T2+**: Production Apps | 🟣 **T3+**: Products | 🔴 **T4**: Enterprise

---

## Phase 1: Initialization (/initialize)

| Document | Tier | Required | Status |
|----------|------|----------|--------|
| PLAN.md | 🟢 | ✅ Yes | [ ] |
| SESSION_LOG.md | 🟢 | ✅ Yes | [ ] |
| README.md | 🟢 | ✅ Yes | [ ] |
| DECISION_LOG.md | 🔵 | ⚠️ T2+ | [ ] |
| MEMORY.md | 🔵 | ⚠️ T2+ | [ ] |

---

## Phase 2: Requirements (/analyst)

| Document | Tier | Required | Status |
|----------|------|----------|--------|
| REQUIREMENTS.md | 🔵 | ✅ T2+ | [ ] |
| Use Case Diagram | 🔵 | ✅ T2+ | [ ] |
| Process Flows (BPMN) | 🟣 | ✅ T3+ | [ ] |
| Traceability Matrix | 🔴 | ✅ T4 | [ ] |

---

## Phase 3: Architecture (/architect)

| Document | Tier | Required | Status |
|----------|------|----------|--------|
| SPECS.md | 🔵 | ✅ T2+ | [ ] |
| ER Diagram | 🔵 | ✅ T2+ | [ ] |
| Architecture Diagram | 🟣 | ✅ T3+ | [ ] |
| Sequence Diagrams | 🟣 | ✅ T3+ | [ ] |
| ADRs | 🔵 | ⚠️ As needed | [ ] |
| **System Architecture Doc (SAD)** | 🔴 | ✅ T4 | [ ] |

---

## Phase 4: Implementation (/build)

| Document | Tier | Required | Status |
|----------|------|----------|--------|
| Code Docstrings | 🟢 | ✅ Yes | [ ] |
| API Docs (OpenAPI) | 🟣 | ✅ T3+ | [ ] |
| **Change Management Log** | 🔴 | ✅ T4 | [ ] |

---

## Phase 5: Quality & Ops (/test, /deploy)

| Document | Tier | Required | Status |
|----------|------|----------|--------|
| Test Cases | 🔵 | ✅ T2+ | [ ] |
| Test Plan | 🟣 | ✅ T3+ | [ ] |
| Security Assessment | 🔴 | ✅ T4 | [ ] |
| Deployment Runbook | 🟣 | ✅ T3+ | [ ] |
| Disaster Recovery Plan | 🔴 | ✅ T4 | [ ] |
| SLA/SLO Definitions | 🔴 | ✅ T4 | [ ] |
| Release Notes | 🔵 | ✅ T2+ | [ ] |

---

## Phase 8: Retrospective (/retro)

| Document | Required | Path | Status |
|----------|----------|------|--------|
| Retrospective Report | ✅ Required | `docs/retrospectives/RETRO_Sprint_N.md` | [ ] |
| MEMORY.md Update | ✅ Required | `./MEMORY.md` | [ ] |

---

## Living Documents (Update Throughout)

| Document | Updated By | Trigger |
|----------|------------|---------|
| PLAN.md | All personas | Every session |
| SESSION_LOG.md | All personas | Every session |
| HANDOFF_NOTES.md | All personas | Every handoff |
| DECISION_LOG.md | All personas | Every major decision |
| MEMORY.md | All personas | Significant learnings |

---

## /health Validation

Run `/health` to verify:
- [ ] All required documents exist
- [ ] Living documents have recent updates
- [ ] No stale documentation (>30 days without update on active project)
- [ ] Cross-references are valid (no broken links)
