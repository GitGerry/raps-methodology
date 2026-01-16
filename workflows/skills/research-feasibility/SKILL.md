---
name: Feasibility Study
description: Assess technical, operational, and economic feasibility of proposed solutions
---

# Feasibility Study Skill

## Purpose
Conduct comprehensive feasibility assessments including technical viability, operational capability, economic justification, and schedule feasibility.

## When to Use
- Before committing to build a feature
- Evaluating new technology adoption
- Build vs Buy decisions
- Major architecture changes
- Resource-intensive initiatives

---

## Instructions

### 1. Define Scope
- What are we assessing?
- What's the proposed solution?
- What are the success criteria?

### 2. Assess Four Feasibility Dimensions

| Dimension | Key Questions |
|-----------|---------------|
| **Technical** | Can we build this? Do we have the skills? |
| **Operational** | Can we run this? Do we have processes? |
| **Economic** | Is it worth it? What's the ROI? |
| **Schedule** | Can we deliver on time? |

### 3. Document Findings
- For each dimension, rate feasibility
- Identify risks and mitigations
- Provide evidence for assessments

### 4. Make Recommendation
- Overall feasibility verdict
- Conditions for success
- Alternative approaches if not feasible

---

## Output Template

```markdown
# 🔎 Feasibility Study: [Proposal Name]

**Researcher:** /research
**Date:** [TIMESTAMP]
**Requested By:** [Stakeholder]

---

## Executive Summary

**Proposal:** [One-line description of what we're assessing]

### Feasibility Verdict

| Dimension | Feasibility | Confidence |
|-----------|:-----------:|:----------:|
| Technical | ✅ High | High |
| Operational | ⚠️ Medium | Medium |
| Economic | ✅ High | High |
| Schedule | ⚠️ Medium | Low |
| **Overall** | **⚠️ CONDITIONALLY FEASIBLE** | Medium |

**Recommendation:** PROCEED with conditions
- Condition 1: [Required mitigation]
- Condition 2: [Required mitigation]

---

## Proposal Overview

### What We're Proposing
[Clear description of the proposed solution]

### Business Need
[Why are we considering this?]

### Success Criteria
- [ ] [Criterion 1]
- [ ] [Criterion 2]
- [ ] [Criterion 3]

---

## Technical Feasibility

### Assessment: ✅ HIGH FEASIBILITY

**Core Question:** Can we build this with available technology and skills?

### Technology Analysis

| Component | Technology | Maturity | Our Experience |
|-----------|------------|----------|----------------|
| [Component 1] | [Tech] | Mature/Emerging/Bleeding Edge | Expert/Familiar/New |
| [Component 2] | [Tech] | [Level] | [Experience] |

### Skills Assessment

| Required Skill | Current Capability | Gap |
|----------------|-------------------|-----|
| [Skill 1] | Strong/Moderate/None | None/Learning/Hire |
| [Skill 2] | [Level] | [Action] |

### Technical Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| [Risk 1] | High/Med/Low | [Effect] | [Strategy] |

### Proof of Concept
- [ ] POC needed: [Yes/No]
- [ ] POC scope: [What to validate]
- [ ] POC timeline: [Duration]

### Technical Verdict
**✅ TECHNICALLY FEASIBLE** — [Summary justification]

---

## Operational Feasibility

### Assessment: ⚠️ MEDIUM FEASIBILITY

**Core Question:** Can we operate this within our current processes and capabilities?

### Process Impact

| Process | Impact | Change Required |
|---------|--------|-----------------|
| [Process 1] | High/Med/Low | [What changes] |
| [Process 2] | [Level] | [What changes] |

### Training Needs

| Audience | Training Required | Duration | Cost |
|----------|-------------------|----------|------|
| [Team 1] | [Topic] | [Hours] | $X |
| [Team 2] | [Topic] | [Hours] | $X |

### Support Requirements

| Aspect | Current | Proposed | Gap |
|--------|---------|----------|-----|
| Support Hours | [Current] | [Needed] | [Delta] |
| On-call | [Current] | [Needed] | [Delta] |

### Operational Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| [Risk 1] | High/Med/Low | [Effect] | [Strategy] |

### Operational Verdict
**⚠️ OPERATIONALLY FEASIBLE WITH CONDITIONS**
- Condition: [Required change 1]
- Condition: [Required change 2]

---

## Economic Feasibility

### Assessment: ✅ HIGH FEASIBILITY

**Core Question:** Is the investment justified by expected returns?

### Cost Analysis

#### One-Time Costs
| Category | Cost | Notes |
|----------|------|-------|
| Development | $X | [Details] |
| Infrastructure Setup | $X | [Details] |
| Training | $X | [Details] |
| Licenses | $X | [Details] |
| **Total One-Time** | **$X** | |

#### Recurring Costs (Annual)
| Category | Year 1 | Year 2 | Year 3 |
|----------|--------|--------|--------|
| Infrastructure | $X | $X | $X |
| Maintenance | $X | $X | $X |
| Licenses | $X | $X | $X |
| Support | $X | $X | $X |
| **Total Annual** | **$X** | **$X** | **$X** |

### Benefit Analysis

#### Quantifiable Benefits (Annual)
| Benefit | Year 1 | Year 2 | Year 3 |
|---------|--------|--------|--------|
| Revenue increase | $X | $X | $X |
| Cost savings | $X | $X | $X |
| Efficiency gains | $X | $X | $X |
| **Total Benefits** | **$X** | **$X** | **$X** |

#### Non-Quantifiable Benefits
- [Benefit 1: e.g., improved user experience]
- [Benefit 2: e.g., competitive positioning]

### ROI Calculation

| Metric | Value |
|--------|-------|
| Total Investment (3-year) | $X |
| Total Benefits (3-year) | $Y |
| Net Benefit | $Y - $X = $Z |
| ROI | (Z / X) × 100 = X% |
| Payback Period | X months |

### Break-Even Analysis
```
     ▲ Cumulative Value
     │
     │                    ╱ Benefits
     │               ╱
     │          ╱
Break-even ──●───────────────────
     │   ╲
     │    ╲ Costs
     │
     └────────────────────────▶ Time
          Month 6  Month 12
```

### Economic Verdict
**✅ ECONOMICALLY FEASIBLE** — ROI of X% exceeds threshold of Y%

---

## Schedule Feasibility

### Assessment: ⚠️ MEDIUM FEASIBILITY

**Core Question:** Can we deliver within the required timeframe?

### Timeline Analysis

| Phase | Duration | Start | End |
|-------|----------|-------|-----|
| Planning | X weeks | [Date] | [Date] |
| Development | X weeks | [Date] | [Date] |
| Testing | X weeks | [Date] | [Date] |
| Deployment | X weeks | [Date] | [Date] |
| **Total** | **X weeks** | | |

**Required Deadline:** [Date]
**Projected Completion:** [Date]
**Buffer:** [X days / -X days]

### Resource Availability

| Resource | Required | Available | Gap |
|----------|----------|-----------|-----|
| Developers | X | Y | [Delta] |
| Designers | X | Y | [Delta] |
| QA | X | Y | [Delta] |

### Schedule Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Resource contention | High | Delay | [Strategy] |
| Scope creep | Medium | Delay | [Strategy] |

### Schedule Verdict
**⚠️ SCHEDULE FEASIBLE WITH RISKS**
- Risk: [Key risk]
- Mitigation: [What we'll do]

---

## Alternatives Analysis

| Option | Description | Pros | Cons |
|--------|-------------|------|------|
| Option A (Proposed) | [Current proposal] | [Pros] | [Cons] |
| Option B | [Alternative] | [Pros] | [Cons] |
| Option C: Do Nothing | Status quo | [Pros] | [Cons] |

---

## Recommendation

### Verdict: ⚠️ CONDITIONALLY FEASIBLE

**Proceed:** Yes, with conditions below

### Required Conditions
1. **[Condition 1]** — Must address [risk/gap]
2. **[Condition 2]** — Must complete by [date]

### Success Factors
- [Factor 1]
- [Factor 2]

### Next Steps
1. [Immediate action 1]
2. [Immediate action 2]
3. [Decision checkpoint]

---

## Evidence Sources

| Claim | Source | Quality | Date |
|-------|--------|---------|------|
| [Claim] | [URL] | ⭐⭐⭐ | [Date] |

---

## Assumptions & Gaps
- **Assumption:** [Key assumption]
- **Gap:** [Missing information]
```

---

## How to Verify
- All four dimensions assessed
- Costs and benefits quantified where possible
- ROI calculated
- Risks identified with mitigations
- Clear verdict with conditions
