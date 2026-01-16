# Documentation Checklist

> Ensure all required documentation is created and maintained throughout the project lifecycle.

---

## Phase 1: Initialization (/initialize)

| Document | Required | Path | Status |
|----------|----------|------|--------|
| PLAN.md | ✅ Required | `./PLAN.md` | [ ] |
| SESSION_LOG.md | ✅ Required | `./SESSION_LOG.md` | [ ] |
| HANDOFF_NOTES.md | ✅ Required | `./HANDOFF_NOTES.md` | [ ] |
| DECISION_LOG.md | ✅ Required | `./DECISION_LOG.md` | [ ] |
| MEMORY.md | ⚠️ Recommended | `./MEMORY.md` | [ ] |
| README.md | ✅ Required | `./README.md` | [ ] |
| .gitignore | ✅ Required | `./.gitignore` | [ ] |

---

## Phase 2: Requirements (/analyst)

| Document | Required | Path | Status |
|----------|----------|------|--------|
| REQUIREMENTS.md | ✅ Required | `docs/requirements/REQUIREMENTS.md` | [ ] |
| Use Case Diagram | ✅ Required | `docs/diagrams/use_case_*.mmd` | [ ] |
| State Machine Diagram | ⚠️ If stateful | `docs/diagrams/state_*.mmd` | [ ] |
| BPMN Process Diagrams | ⚠️ Per feature | `docs/diagrams/bpmn_*.mmd` | [ ] |

---

## Phase 3: Architecture (/architect)

| Document | Required | Path | Status |
|----------|----------|------|--------|
| SPECS.md | ✅ Required | `docs/SPECS.md` | [ ] |
| ER Diagram | ✅ Required | `docs/diagrams/entity_relationship.mmd` | [ ] |
| Component Diagram | ✅ Required | `docs/diagrams/architecture_*.mmd` | [ ] |
| Sequence Diagrams | ⚠️ Per complex flow | `docs/diagrams/sequence_*.mmd` | [ ] |
| ADR (if major decision) | ⚠️ Recommended | `docs/adr/ADR-*.md` | [ ] |

---

## Phase 4: Implementation (/build, /design)

| Document | Required | Path | Status |
|----------|----------|------|--------|
| Code Docstrings | ✅ Required | In source files | [ ] |
| API Documentation | ⚠️ If API exists | `docs/API.md` or OpenAPI | [ ] |
| package.json / deps | ✅ Required | `./package.json` | [ ] |

---

## Phase 5: Quality (/test, /security, /review)

| Document | Required | Path | Status |
|----------|----------|------|--------|
| Test Plan | ⚠️ Recommended | `docs/TEST_PLAN.md` | [ ] |
| Test Cases | ✅ Required | `tests/*.test.ts` | [ ] |
| Security Assessment | ⚠️ Recommended | `docs/SECURITY_ASSESSMENT.md` | [ ] |
| Code Review Notes | ⚠️ Per PR | In HANDOFF_NOTES.md | [ ] |

---

## Phase 6: User Acceptance (/ux)

| Document | Required | Path | Status |
|----------|----------|------|--------|
| UAT Report | ⚠️ Recommended | `docs/UAT_REPORT.md` | [ ] |
| User Feedback Log | ⚠️ Recommended | `docs/USER_FEEDBACK.md` | [ ] |

---

## Phase 7: Deployment (/deploy)

| Document | Required | Path | Status |
|----------|----------|------|--------|
| Deployment Runbook | ⚠️ Recommended | `docs/RUNBOOK.md` | [ ] |
| Release Notes | ✅ Required | `CHANGELOG.md` or `docs/RELEASE_NOTES.md` | [ ] |
| Environment Config | ⚠️ Recommended | `docs/ENVIRONMENTS.md` | [ ] |

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
