---
name: Estimate Effort
description: Generate effort estimates for requirements and tasks using structured techniques
---

# Estimate Effort Skill

## Purpose
Provide structured effort estimation for requirements, user stories, and tasks using industry-standard techniques.

## When to Use
- Sprint planning
- Project scoping
- Resource allocation
- Stakeholder communication
- Change request assessment

---

## Instructions

### 1. Gather Items to Estimate
Collect from `PLAN.md` and `/docs/requirements/`:
- User stories (STRY)
- Functional requirements (FREQ)
- Tasks in backlog

### 2. Choose Estimation Technique

#### Story Points (Recommended)
| Points | Complexity | Reference |
|--------|------------|-----------|
| 1 | Trivial | Fix typo, config change |
| 2 | Simple | Single function, basic UI |
| 3 | Standard | Feature with logic |
| 5 | Complex | Multi-component feature |
| 8 | Very Complex | Integration, algorithm |
| 13 | Epic | Should be split |

#### T-Shirt Sizing
| Size | Points Equivalent | Duration |
|------|-------------------|----------|
| XS | 1 | < 2 hours |
| S | 2 | 2-4 hours |
| M | 3 | 4-8 hours |
| L | 5 | 1-2 days |
| XL | 8 | 2-3 days |
| XXL | 13 | 3-5 days |

#### Time-Based (When Required)
| Task Type | Multiplier |
|-----------|------------|
| Known tech, done before | 1.0x |
| Known tech, new approach | 1.5x |
| New tech, experienced dev | 2.0x |
| New tech, learning curve | 2.5x |
| Unknown unknowns | 3.0x |

### 3. Estimate Each Item

For each item, consider:
- **Complexity**: How hard is the logic?
- **Uncertainty**: How much is unknown?
- **Dependencies**: Waiting on others?
- **Testing**: How much testing needed?
- **Documentation**: Docs required?

### 4. Apply Buffers

| Scenario | Buffer |
|----------|--------|
| Standard project | +20% |
| New technology | +30% |
| Tight deadline | +10% (risk acknowledged) |
| Integration heavy | +25% |
| Regulatory/compliance | +40% |

### 5. Generate Estimate Report

---

## Estimation Template

```markdown
# 📊 EFFORT ESTIMATE: [Feature/Sprint Name]

**Estimated By:** [Name]
**Date:** [TIMESTAMP]
**Confidence Level:** High (±10%) / Medium (±25%) / Low (±50%)

---

## Estimation Summary

| Metric | Value |
|--------|-------|
| Total Items | X |
| Total Points | X |
| Estimated Duration | X days |
| Team Size | X |
| Buffer Applied | X% |

---

## Detailed Estimates

### User Stories

| ID | Title | Points | Complexity | Uncertainty | Notes |
|----|-------|--------|------------|-------------|-------|
| STRY0000001 | [Title] | 5 | Medium | Low | [Notes] |
| STRY0000002 | [Title] | 3 | Low | Low | [Notes] |
| STRY0000003 | [Title] | 8 | High | Medium | Consider splitting |

**Subtotal:** X points

### Technical Tasks

| Task | Points | Persona | Notes |
|------|--------|---------|-------|
| [Task 1] | 2 | /build | [Notes] |
| [Task 2] | 3 | /design | [Notes] |

**Subtotal:** X points

---

## By Persona

| Persona | Points | % of Total | Duration |
|---------|--------|------------|----------|
| /research | X | X% | X days |
| /analyst | X | X% | X days |
| /architect | X | X% | X days |
| /build | X | X% | X days |
| /design | X | X% | X days |
| /test | X | X% | X days |
| **Total** | **X** | **100%** | **X days** |

---

## Risk Factors

| Factor | Impact | Mitigation |
|--------|--------|------------|
| [Risk 1] | +X points | [Mitigation] |
| [Risk 2] | +X points | [Mitigation] |

---

## Assumptions

- [Assumption 1]
- [Assumption 2]
- [Assumption 3]

---

## Comparable References

| Past Item | Points | Actual Duration | Notes |
|-----------|--------|-----------------|-------|
| [Similar feature] | 5 | 2 days | Good reference |

---

## Estimate Breakdown

### Optimistic (10th percentile)
- Points to duration: X days
- Assumes: Everything goes smoothly

### Most Likely (50th percentile)
- Points to duration: X days
- Assumes: Normal challenges

### Pessimistic (90th percentile)
- Points to duration: X days
- Assumes: Significant issues arise

### Final Estimate
**X days** (Most Likely + Buffer)

---

## Validation
- [ ] Estimates reviewed by team
- [ ] Historical data referenced
- [ ] Risks accounted for
- [ ] Buffer applied appropriately
```

---

## How to Verify
- All items estimated with points
- Confidence level stated
- Buffer applied appropriately
- Risks documented
- Total matches persona breakdown
