---
name: Analyst Toolkit
description: Requirements standards, traceability IDs, and requirement templates
---

# Analyst Toolkit

## Purpose
Provide standards for writing requirements, user stories, and maintaining traceability across the project lifecycle. Defines the ID conventions and templates for all requirement artifacts.

## When to Use
- Writing or reviewing requirements
- Creating user stories
- Defining use cases
- Establishing traceability
- Validating requirement quality

---

## Tool Interface

### Inputs
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `action` | enum | ✅ | `"create_requirement"` \| `"validate"` \| `"trace"` |
| `type` | enum | ❌ | Requirement type: `"STRY"` \| `"FREQ"` \| `"NFRQ"` \| `"UCSE"` |
| `id` | string | ❌ | Existing ID to validate or trace |

### Outputs
- **Type:** Markdown
- **Structure:** Formatted requirement or validation report

---

## 1. Traceability ID Standards

> Every artifact gets a unique, searchable ID enabling full traceability.

### ID Format Reference

| Type | Format | Regex | Example |
|------|--------|-------|---------|
| User Story | STRY####### | `^STRY\d{7}$` | STRY0000001 |
| Functional Req | FREQ####### | `^FREQ\d{7}$` | FREQ0000042 |
| Non-Functional | NFRQ####### | `^NFRQ\d{7}$` | NFRQ0000003 |
| Use Case | UCSE####### | `^UCSE\d{7}$` | UCSE0000010 |
| Actor | ACTR####### | `^ACTR\d{7}$` | ACTR0000001 |
| Persona | PRSN####### | `^PRSN\d{7}$` | PRSN0000005 |
| Entity | ENTY####### | `^ENTY\d{7}$` | ENTY0000100 |
| Stakeholder | STKH####### | `^STKH\d{7}$` | STKH0000002 |
| Risk | RISK####### | `^RISK\d{7}$` | RISK0000015 |
| Test Case | TC####### | `^TC\d{7}$` | TC0000201 |
| Change Request | CHNG####### | `^CHNG\d{7}$` | CHNG0000001 |
| Question | QSTN####### | `^QSTN\d{7}$` | QSTN0000033 |
| Dependency | DPND####### | `^DPND\d{7}$` | DPND0000007 |
| Assumption | ASUM####### | `^ASUM\d{7}$` | ASUM0000012 |

### ID Ownership
- **Analyst** creates: STRY, FREQ, NFRQ, UCSE, ACTR, PRSN, ENTY, STKH, QSTN, ASUM, DPND
- **Test** creates: TC
- **Any persona** can create: RISK, CHNG

---

## 2. User Story Standards

### Format
```markdown
### STRY0000001: [Title]

**As a** [Actor/Persona],
**I want to** [action/feature],
**So that** [benefit/value].

#### Acceptance Criteria
- [ ] Given [context], when [action], then [result]
- [ ] Given [context], when [action], then [result]

#### Notes
- [Additional context]

#### Links
- Parent Epic: [ID]
- Related: FREQ0000001, FREQ0000002
```

### Story Quality Checklist
- [ ] Follows "As a... I want... So that..." format
- [ ] Actor/Persona is defined (not "user")
- [ ] Benefit is clear (not just restating the action)
- [ ] Has 2+ acceptance criteria
- [ ] Criteria are testable (Given/When/Then)
- [ ] Estimated with story points
- [ ] Fits in one sprint

---

## 3. Functional Requirement Standards

### Format
```markdown
### FREQ0000001: [Title]

**The system shall** [specific, testable behavior].

| Attribute | Value |
|-----------|-------|
| Priority | MUST / SHOULD / COULD / WONT |
| Source | STRY0000001 |
| Rationale | [Why this is needed] |
| Acceptance | [How to verify] |
```

### Requirement Quality Checklist
- [ ] Starts with "The system shall"
- [ ] Single, atomic behavior (not compound)
- [ ] Testable and measurable
- [ ] Priority assigned (MoSCoW)
- [ ] Linked to source story or stakeholder

---

## 4. Non-Functional Requirement Standards

### Categories
| Category | Examples |
|----------|----------|
| **Performance** | Response time, throughput, latency |
| **Scalability** | Users, data volume, concurrent connections |
| **Reliability** | Uptime, MTBF, recovery time |
| **Security** | Authentication, encryption, audit |
| **Usability** | Accessibility, learning curve |
| **Compliance** | GDPR, SOC2, HIPAA |

### Format
```markdown
### NFRQ0000001: [Title]

**Category:** [Performance/Scalability/etc.]

**Requirement:** The system shall [measurable quality attribute].

| Attribute | Value |
|-----------|-------|
| Target | [Specific metric] |
| Measurement | [How to measure] |
| Priority | MUST / SHOULD |
```

---

## 5. Use Case Standards

### Format
```markdown
### UCSE0000001: [Title]

**Primary Actor:** ACTR0000001 (Administrator)
**Preconditions:** [What must be true before]
**Postconditions:** [What is true after success]

#### Main Flow (Happy Path)
1. Actor [action]
2. System [response]
3. Actor [action]
4. System [response]

#### Alternate Flows
**A1: [Condition]**
1. At step [X], if [condition]
2. System [alternative response]
3. Return to step [X+1] / End use case

#### Exception Flows
**E1: [Error condition]**
1. At step [X], if [error]
2. System displays error message
3. Use case ends
```

---

## 6. Traceability Matrix

### Forward Traceability (Requirements → Implementation)
| Requirement | Stories | Specs | Code | Tests |
|-------------|---------|-------|------|-------|
| FREQ0000001 | STRY0000001 | SPECS.md §3.1 | auth.ts | TC0000001 |
| FREQ0000002 | STRY0000001 | SPECS.md §3.2 | user.ts | TC0000002 |

### Backward Traceability (Tests → Requirements)
| Test | Requirement | Story | Status |
|------|-------------|-------|--------|
| TC0000001 | FREQ0000001 | STRY0000001 | ✅ Pass |

---

## 7. RBAC Permissions Matrix

### Actor-Permission Mapping
| Permission | Guest | User | Admin | System |
|------------|-------|------|-------|--------|
| View public content | ✅ | ✅ | ✅ | ✅ |
| Create account | ✅ | ❌ | ❌ | ❌ |
| Edit own profile | ❌ | ✅ | ✅ | ❌ |
| Delete any user | ❌ | ❌ | ✅ | ❌ |

---

## How to Verify

- [ ] All requirements have valid IDs matching regex
- [ ] User stories follow standard format
- [ ] Acceptance criteria are testable
- [ ] Traceability links are bidirectional
- [ ] No orphan requirements (unlinked)
