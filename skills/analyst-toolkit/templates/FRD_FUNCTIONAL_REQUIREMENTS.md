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
> Detailed system behaviors. **(Ref: RS-####)** for Research, **(Ref: [ROLE])** for Stakeholder.

| ID | Requirement | Priority | Source Traceability |
|----|-------------|----------|---------------------|
| FREQ[#######] | The system shall... | MUST | (Ref: RS-####) |
| FREQ[#######] | The system shall... | SHOULD | (Ref: [ROLE]) |

---

## 4. Non-Functional Requirements (NFRs)
> Performance, Security, Reliability. **Must use numeric thresholds.**

| ID | Category | Requirement | Metric/Threshold | Source |
|----|----------|-------------|------------------|--------|
| NFRQ[#######] | Performance | System shall respond within... | < 200ms | (Ref: RS-####) |

---

## 5. Use Cases & Visual Bridges
> Diagrams in `/docs/diagrams/` following `DIAGRAM_GUIDE.md`.

### UCSE[#######]: [Use Case Name]
**Actor:** [Name]
**Logic Bridge:** [Link to decision_tree.mmd]
**Data Bridge:** [Link to logical_erd.mmd]
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
