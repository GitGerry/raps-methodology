# 📝 REQUIREMENTS.md: [Feature Name]

## 1. Overview
**Traceability ID:** [FREQ/UCSE ID]
**Feature:** [Name]
**Status:** [DRAFT | REVIEW | APPROVED]
**Analyst:** [/analyst]

> **Goal:** [Brief description of what this feature achieves]

---

## 2. User Stories (Functional)
> Source: `skills/analyst-toolkit/templates/FRD_USER_STORIES.md`

### STRY[#######]: [Title]
**As a** [Actor],
**I want to** [Action],
**So that** [Benefit].

#### Acceptance Criteria
- [ ] Given [Context], When [Action], Then [Result]
- [ ] Given [Context], When [Action], Then [Result]

---

## 3. Functional Requirements
> Detailed system behaviors derived from stories.

| ID | Requirement | Priority | Source |
|----|-------------|----------|--------|
| FREQ[#######] | The system shall... | MUST | STRY... |
| FREQ[#######] | The system shall... | SHOULD | STRY... |

---

## 4. Non-Functional Requirements (NFRs)
> Performance, Security, Reliability, Compliance.
> For complex NFRs, use `skills/analyst-toolkit/templates/NFR_TEMPLATE.md`

| ID | Category | Requirement | Metric |
|----|----------|-------------|--------|
| NFRQ[#######] | Performance | The system shall respond within... | < 200ms |
| NFRQ[#######] | Security | Data at rest must be encrypted... | AES-256 |

---

## 5. Use Cases & Flows
> Diagrams located in `/docs/diagrams/`

### UCSE[#######]: [Use Case Name]
**Actor:** [Name]
**Trigger:** [Event]

**Main Flow:**
1. Step 1
2. Step 2

**Alternates:**
- A1: [Condition] -> Step...

---

## 6. Open Questions & Assumptions
- [ ] **Q1:** [Question?]
- [ ] **A1:** [Assumption]

---

## 7. Approval
| Role | Name | Date | Signature |
|------|------|------|-----------|
| Product | [Name] | [Date] | [Sign] |
| Lead Dev | [/build] | [Date] | [Sign] |
