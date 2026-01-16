---
name: Compliance Check
description: Validate RAPS documents follow conventions and standards
---

# Compliance Check Skill

## Purpose
Audit RAPS project documents for compliance with conventions, completeness, and consistency. Identify violations and provide remediation guidance.

## When to Use
- Before major handoffs between personas
- After batch updates to requirements
- As part of `/health` workflow
- Before project milestones
- During code review (`/review`)

---

## Instructions

### 1. Scan Project Files
Check the following locations:
- `PLAN.md` - Master Ledger
- `/docs/requirements/*.md` - Requirements documents
- `/docs/SPECS.md` - Technical specifications
- `/tests/*.md` - Test documentation
- `SESSION_LOG.md` - Audit trail
- `HANDOFF_NOTES.md` - Handoff context

### 2. Validate ID Formats

#### Required Formats
| Type | Pattern | Regex |
|------|---------|-------|
| User Story | STRY####### | `^STRY\d{7}$` |
| Functional Req | FREQ####### | `^FREQ\d{7}$` |
| Non-Functional | NFRQ####### | `^NFRQ\d{7}$` |
| Use Case | UCSE####### | `^UCSE\d{7}$` |
| Actor | ACTR####### | `^ACTR\d{7}$` |
| Persona | PRSN####### | `^PRSN\d{7}$` |
| Entity | ENTY####### | `^ENTY\d{7}$` |
| Stakeholder | STKH####### | `^STKH\d{7}$` |
| Risk | RISK####### | `^RISK\d{7}$` |
| Test Case | TC####### | `^TC\d{7}$` |
| Change Request | CHNG####### | `^CHNG\d{7}$` |
| Question | QSTN####### | `^QSTN\d{7}$` |
| Dependency | DPND####### | `^DPND\d{7}$` |
| Assumption | ASUM####### | `^ASUM\d{7}$` |

### 3. Check Completeness

#### Requirements Document Checks
- [ ] Every FREQ has acceptance criteria
- [ ] Every FREQ has priority (MUST/SHOULD/COULD)
- [ ] Every FREQ has status (Draft/Approved)
- [ ] Every STRY has acceptance criteria
- [ ] Every STRY follows "As a... I want... So that..." format
- [ ] Every UCSE has actors defined
- [ ] Every UCSE has preconditions and postconditions
- [ ] Out of Scope section exists and is not empty
- [ ] Assumptions are documented with IDs

#### PLAN.md Checks
- [ ] Project Overview section exists
- [ ] Squad Status table exists with all 7 personas
- [ ] Backlog has tasks with proper tags
- [ ] Artifact Registry populated
- [ ] No orphaned tasks (no owner)

#### Traceability Checks
- [ ] Every FREQ links to at least one STRY or UCSE
- [ ] Every TC links to a requirement
- [ ] No orphaned test cases

### 4. Check Consistency

#### Cross-Document Validation
- [ ] IDs referenced in one doc exist in source doc
- [ ] Status in PLAN.md matches SESSION_LOG.md
- [ ] Stakeholder names consistent across documents
- [ ] Entity definitions match data dictionary

#### Duplicate Detection
- [ ] No duplicate IDs within same type
- [ ] No conflicting requirements (same ID, different content)

### 5. Check Freshness

#### Staleness Rules
| Item | Stale If |
|------|----------|
| In-Progress task | No SESSION_LOG entry in 48 hours |
| Draft requirement | Not approved in 7 days |
| Open question | No response in 5 days |
| Blocked task | No escalation in 24 hours |

---

## Output Report

```markdown
# 🔍 RAPS COMPLIANCE REPORT

**Generated:** [TIMESTAMP]
**Project:** [Project Name]
**Overall Status:** ✅ Compliant / ⚠️ Needs Attention / ❌ Critical Issues

---

## Summary

| Category | Status | Issues |
|----------|--------|--------|
| ID Formats | ✅/⚠️/❌ | X issues |
| Completeness | ✅/⚠️/❌ | X issues |
| Traceability | ✅/⚠️/❌ | X issues |
| Consistency | ✅/⚠️/❌ | X issues |
| Freshness | ✅/⚠️/❌ | X issues |

---

## Critical Issues ❌
> Must fix before proceeding

| # | File | Line | Issue | Remediation |
|---|------|------|-------|-------------|
| 1 | [file] | [line] | [description] | [how to fix] |

---

## Warnings ⚠️
> Should fix soon

| # | File | Line | Issue | Remediation |
|---|------|------|-------|-------------|
| 1 | [file] | [line] | [description] | [how to fix] |

---

## Suggestions 💡
> Nice to have

| # | File | Issue | Suggestion |
|---|------|-------|------------|
| 1 | [file] | [description] | [improvement] |

---

## Traceability Gaps

### Orphaned Requirements (No Tests)
- FREQ0000003 - [Title]

### Orphaned Tests (No Requirement)
- TC0000005 - [Title]

---

## Recommended Actions
1. [Priority 1 action]
2. [Priority 2 action]
3. [Priority 3 action]

---

## Appendix: Full Scan Results

### Files Scanned
| File | Items | Issues |
|------|-------|--------|
| PLAN.md | 25 | 2 |
| REQUIREMENTS.md | 40 | 5 |
| SPECS.md | 15 | 0 |
```

---

## Severity Levels

| Level | Criteria | Action |
|-------|----------|--------|
| ❌ Critical | Missing required fields, broken IDs, orphaned items | Must fix before handoff |
| ⚠️ Warning | Stale items, incomplete sections, minor inconsistencies | Fix within 24 hours |
| 💡 Suggestion | Style improvements, optional enhancements | Nice to have |

---

## How to Verify
- Compliance report generated
- All critical issues have remediation steps
- Traceability gaps identified
- Report saved to `/docs/COMPLIANCE_REPORT.md`
