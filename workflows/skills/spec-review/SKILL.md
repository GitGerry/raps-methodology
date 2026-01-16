---
name: Spec Review
description: Review and validate technical specifications against requirements
---

# Spec Review Skill

## Purpose
Systematically review technical specifications to ensure they accurately translate requirements, are technically sound, and are implementable.

## When to Use
- After `/architect` completes SPECS.md
- Before handoff to `/build` or `/design`
- When requirements change significantly
- During `/review` workflow

---

## Instructions

### 1. Load Documents
Read and cross-reference:
- `/docs/requirements/REQUIREMENTS.md`
- `/docs/SPECS.md`
- `PLAN.md` for context

### 2. Validate Coverage

#### Requirement Mapping
For each requirement, verify:
- [ ] Corresponding spec section exists
- [ ] All acceptance criteria addressed
- [ ] Edge cases covered
- [ ] Error handling defined

### 3. Technical Review

#### API Review
- [ ] Endpoints follow REST conventions
- [ ] Request/response schemas complete
- [ ] Authentication/authorization specified
- [ ] Error responses documented
- [ ] Rate limiting considered

#### Data Model Review
- [ ] All entities defined
- [ ] Relationships correct
- [ ] Constraints specified
- [ ] Indexes suggested for performance
- [ ] Migration strategy (if updating)

#### Logic Review
- [ ] Algorithms clearly described
- [ ] State transitions defined
- [ ] Concurrency handled
- [ ] Idempotency considered

### 4. Implementability Check
- [ ] No ambiguous requirements
- [ ] Dependencies available
- [ ] Estimated complexity reasonable
- [ ] No over-engineering
- [ ] No under-specification

### 5. Generate Review Report

---

## Spec Review Template

```markdown
# 📋 SPEC REVIEW: [Feature Name]

**Reviewer:** /architect or /review
**Date:** [TIMESTAMP]
**Spec Version:** [Version]
**Status:** ✅ Approved / ⚠️ Changes Requested / ❌ Rejected

---

## Review Summary

| Category | Status | Issues |
|----------|--------|--------|
| Requirement Coverage | ✅/⚠️/❌ | X |
| API Design | ✅/⚠️/❌ | X |
| Data Model | ✅/⚠️/❌ | X |
| Logic & Algorithms | ✅/⚠️/❌ | X |
| Error Handling | ✅/⚠️/❌ | X |
| Security | ✅/⚠️/❌ | X |
| Performance | ✅/⚠️/❌ | X |
| Implementability | ✅/⚠️/❌ | X |

---

## Coverage Matrix

| Requirement | Spec Section | Coverage | Notes |
|-------------|--------------|----------|-------|
| FREQ0000001 | §3.1 | ✅ Complete | - |
| FREQ0000002 | §3.2 | ⚠️ Partial | Missing error case |
| FREQ0000003 | - | ❌ Missing | Not addressed in spec |

---

## Detailed Findings

### ✅ Strengths
- [Positive finding 1]
- [Positive finding 2]

### ⚠️ Issues to Address

#### Issue 1: [Title]
| Field | Value |
|-------|-------|
| Severity | High/Medium/Low |
| Section | §X.X |
| Problem | [Description] |
| Impact | [What happens if not fixed] |
| Suggestion | [How to fix] |

#### Issue 2: [Title]
| Field | Value |
|-------|-------|
| Severity | High/Medium/Low |
| Section | §X.X |
| Problem | [Description] |
| Suggestion | [How to fix] |

---

## Security Review

| Check | Status | Notes |
|-------|--------|-------|
| Authentication required | ✅/❌ | [Details] |
| Authorization rules defined | ✅/❌ | [Details] |
| Input validation specified | ✅/❌ | [Details] |
| Sensitive data handling | ✅/❌ | [Details] |
| Rate limiting | ✅/❌ | [Details] |

---

## Performance Considerations

| Aspect | Addressed | Notes |
|--------|-----------|-------|
| Query optimization | ✅/❌ | [Details] |
| Caching strategy | ✅/❌ | [Details] |
| Pagination | ✅/❌ | [Details] |
| Async operations | ✅/❌ | [Details] |

---

## Questions for Architect

| # | Question | Context |
|---|----------|---------|
| 1 | [Question] | [Why asking] |
| 2 | [Question] | [Why asking] |

---

## Recommendation

### Verdict: ⚠️ CHANGES REQUESTED

**Blocking Issues:** X
**Non-Blocking Issues:** X

### Required Before Implementation
1. [Must fix 1]
2. [Must fix 2]

### Suggested Improvements
1. [Nice to have 1]
2. [Nice to have 2]

---

## Sign-Off

| Role | Name | Decision | Date |
|------|------|----------|------|
| Reviewer | [Name] | Changes Requested | [Date] |
| Architect | [Name] | Pending | - |
```

---

## How to Verify
- All requirements traced to spec sections
- All issues documented with suggestions
- Security and performance reviewed
- Clear verdict and action items
