---
name: QA Toolkit
description: Test protocols, test case templates, and quality assurance standards
---

# QA Toolkit

## Purpose
Provide standards for test planning, test case creation, defect tracking, and quality assurance processes.

## When to Use
- Writing test plans
- Creating test cases
- Executing test runs
- Tracking and reporting defects
- Validating quality gates

---

## Tool Interface

### Inputs
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `action` | enum | ✅ | `"create_test_plan"` \| `"create_test_case"` \| `"log_defect"` |
| `requirement_id` | string | ❌ | Requirement to test (e.g., FREQ0000001) |

### Outputs
- **Type:** Markdown
- **Structure:** Test plan, test case, or defect report

---

## 1. Test Case Template

```markdown
### TC0000001: [Test Case Title]

| Attribute | Value |
|-----------|-------|
| **Priority** | High / Medium / Low |
| **Type** | Functional / Integration / E2E / Performance |
| **Requirement** | FREQ0000001, STRY0000001 |
| **Preconditions** | [What must be true before test] |

#### Steps
| # | Action | Expected Result |
|---|--------|-----------------|
| 1 | [User action] | [System response] |
| 2 | [User action] | [System response] |
| 3 | [User action] | [System response] |

#### Test Data
- Input: [Test data needed]
- Environment: [Environment requirements]

#### Result
| Run Date | Tester | Status | Notes |
|----------|--------|--------|-------|
| [Date] | /test | ✅ Pass / ❌ Fail | [Notes] |
```

---

## 2. Test Plan Template

```markdown
# Test Plan: [Feature/Release Name]

## Overview
| Attribute | Value |
|-----------|-------|
| Version | 1.0 |
| Author | /test |
| Date | [TIMESTAMP] |
| Scope | [What is being tested] |

## Test Scope

### In Scope
- [Feature 1]
- [Feature 2]

### Out of Scope
- [Excluded items]

## Test Strategy

### Test Levels
| Level | Coverage | Owner |
|-------|----------|-------|
| Unit | 80%+ code coverage | /build |
| Integration | API contracts | /test |
| E2E | Critical paths | /test |
| UAT | User acceptance | /ux |

### Test Types
- [ ] Functional testing
- [ ] Regression testing
- [ ] Performance testing
- [ ] Security testing

## Test Cases

| TC ID | Title | Priority | Status |
|-------|-------|----------|--------|
| TC0000001 | [Title] | High | Not Run |
| TC0000002 | [Title] | Medium | Not Run |

## Entry Criteria
- [ ] Code complete and deployed to test environment
- [ ] All unit tests passing
- [ ] Test data available
- [ ] DoR met for all stories

## Exit Criteria
- [ ] All High priority tests passed
- [ ] No Critical or High severity defects open
- [ ] Test coverage targets met
- [ ] DoD met for all stories

## Risks
| Risk | Mitigation |
|------|------------|
| [Risk] | [Mitigation] |

## Schedule
| Phase | Start | End |
|-------|-------|-----|
| Test Prep | [Date] | [Date] |
| Execution | [Date] | [Date] |
| Reporting | [Date] | [Date] |
```

---

## 3. Defect Report Template

```markdown
### DEFECT-[NUMBER]: [Title]

| Attribute | Value |
|-----------|-------|
| **Severity** | Critical / High / Medium / Low |
| **Priority** | P1 / P2 / P3 / P4 |
| **Status** | Open / In Progress / Fixed / Closed |
| **Found In** | [Version/Environment] |
| **Reporter** | /test |
| **Assignee** | /build |

#### Description
[Clear description of the defect]

#### Steps to Reproduce
1. [Step 1]
2. [Step 2]
3. [Step 3]

#### Expected Result
[What should happen]

#### Actual Result
[What actually happens]

#### Evidence
- Screenshot: [Link]
- Logs: [Relevant error]

#### Related
- Test Case: TC0000001
- Requirement: FREQ0000001
```

---

## 4. Severity & Priority Matrix

### Severity (Impact)
| Level | Description | Example |
|-------|-------------|---------|
| **Critical** | System unusable, data loss | App crashes, security breach |
| **High** | Major function broken, no workaround | Cannot complete checkout |
| **Medium** | Function impaired, workaround exists | Slow performance |
| **Low** | Minor issue, cosmetic | Typo, alignment |

### Priority (Urgency)
| Level | Description | Response Time |
|-------|-------------|---------------|
| **P1** | Fix immediately | < 4 hours |
| **P2** | Fix before release | < 2 days |
| **P3** | Fix when possible | Next sprint |
| **P4** | Fix if time permits | Backlog |

---

## 5. Test Coverage Requirements

| Requirement Type | Coverage Standard |
|------------------|-------------------|
| FREQ (Functional) | 1+ test case per requirement |
| STRY (User Story) | 1+ test per acceptance criterion |
| UCSE (Use Case) | 1+ test per flow (main + alternates) |
| NFRQ (Non-Functional) | Specific measurement tests |

---

## How to Verify

- [ ] Test plan created with scope and strategy
- [ ] Test cases link to requirements
- [ ] All high priority tests executed
- [ ] Defects logged with full details
- [ ] Exit criteria met before handoff
