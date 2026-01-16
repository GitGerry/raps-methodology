---
name: Generate Test Cases
description: Auto-create test cases from requirements and user stories
---

# Generate Test Cases Skill

## Purpose
Automatically generate comprehensive test cases from RAPS requirements documents, ensuring full coverage of functional requirements and user stories.

## When to Use
- After `/analyst` completes requirements
- Before handoff to `/test`
- When updating requirements (regenerate affected tests)
- For test planning and estimation

---

## Instructions

### 1. Read Requirements
Load and parse:
- `/docs/requirements/REQUIREMENTS.md`
- Any feature-specific requirements files

### 2. Extract Testable Items
For each item, extract:
- **FREQ** → Functional tests
- **STRY** → User acceptance tests
- **NFRQ** → Performance/security tests
- **UCSE** → End-to-end scenario tests

### 3. Generate Test Cases

#### For Each Functional Requirement (FREQ):
Create test cases covering:
- ✅ **Positive case**: Happy path works as expected
- ❌ **Negative case**: Invalid input handled gracefully
- 🔄 **Edge cases**: Boundary conditions, empty states
- 🔐 **Security case**: Unauthorized access blocked (if applicable)

#### For Each User Story (STRY):
Create acceptance tests:
- Map each acceptance criterion to a test step
- Include setup (Given), action (When), verification (Then)

#### For Each Use Case (UCSE):
Create scenario tests:
- Main flow test
- Alternative flow tests
- Exception flow tests

### 4. Assign Test IDs
Format: `TC#######` (e.g., TC0000001)

### 5. Link to Requirements
Each test case must reference:
- Source requirement (FREQ/STRY/UCSE)
- Acceptance criteria being verified

### 6. Output
Generate `/tests/TEST_CASES_[FEATURE].md`

---

## Test Case Template

```markdown
# 🧪 TEST CASES: [Feature Name]

**Generated:** [TIMESTAMP]
**Source:** /docs/requirements/REQUIREMENTS.md
**Status:** Draft (Pending /test Review)

---

## Summary

| Metric | Count |
|--------|-------|
| Total Test Cases | X |
| Positive Tests | X |
| Negative Tests | X |
| Edge Case Tests | X |
| Security Tests | X |

---

## Test Cases

### TC0000001: [Test Case Name]
| Field | Value |
|-------|-------|
| **ID** | TC0000001 |
| **Type** | Positive / Negative / Edge / Security |
| **Related Requirement** | FREQ0000001 |
| **Related Story** | STRY0000001 |
| **Priority** | High / Medium / Low |

**Preconditions:**
- [System state required before test]

**Test Steps:**
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | [User action] | [System response] |
| 2 | [User action] | [System response] |
| 3 | [Verification] | [Expected state] |

**Test Data:**
- Input: [Specific test values]
- Expected Output: [Expected result]

---

### TC0000002: [Negative Test Case Name]
| Field | Value |
|-------|-------|
| **ID** | TC0000002 |
| **Type** | Negative |
| **Related Requirement** | FREQ0000001 |
| **Priority** | Medium |

**Preconditions:**
- [System state]

**Test Steps:**
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | [Invalid action] | [Error message displayed] |
| 2 | [Verify] | [System remains stable] |

---

## Coverage Matrix

| Requirement | Positive | Negative | Edge | Security | Total |
|-------------|----------|----------|------|----------|-------|
| FREQ0000001 | TC001 | TC002 | TC003 | - | 3 |
| STRY0000001 | TC004 | TC005 | - | - | 2 |

---

## Gaps Identified
- [ ] [Requirement without test coverage]
- [ ] [Edge case not covered]

---

## Next Steps
1. `/test` reviews and refines test cases
2. Implement automated tests where applicable
3. Execute manual tests for UI flows
```

---

## Coverage Rules

### Minimum Coverage Requirements
| Requirement Type | Min Tests | Coverage |
|-----------------|-----------|----------|
| FREQ (MUST) | 3 | Positive + Negative + Edge |
| FREQ (SHOULD) | 2 | Positive + Negative |
| FREQ (COULD) | 1 | Positive only |
| STRY | 1 per acceptance criterion | All AC covered |
| NFRQ | 1 | Performance/load test |

---

## How to Verify
- Test case file created in `/tests/`
- All FREQ have at least one test case
- All STRY acceptance criteria mapped to tests
- Coverage matrix shows no gaps for MUST requirements
- Test IDs follow TC####### format
