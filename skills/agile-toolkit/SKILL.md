---
name: Agile Toolkit
description: Standard operating procedures for Agile ceremonies - DoR, DoD, Sprint Planning, Reviews, Retros.
---

# 🏃 Agile Toolkit

> [!IMPORTANT]
> **ANTI-HALLUCINATION PROTOCOL**
> 1. You CANNOT assume the existence of any file not listed in `list_dir`.
> 2. You MUST read `PLAN.md` before taking action.
> 3. You cannot claim a story is "Done" without passing the DoD checklist.

## Purpose
The **Agile Toolkit** provides standard rituals, ceremonies, and quality gates for RAPS squads. Referenced by `/build`, `/design`, `/test`, `/sprint`, `/review`, and `/retro`.

---

## 1. Definition of Ready (DoR)

> A story is ready for development when ALL items are checked.

- [ ] **Clear Acceptance Criteria:** GIVEN/WHEN/THEN format
- [ ] **Estimated:** Story points assigned
- [ ] **Dependencies Identified:** No unresolved blockers
- [ ] **Testable:** QA can write test cases from criteria
- [ ] **Small Enough:** Fits in one sprint (≤8 points)
- [ ] **Design Ready:** Wireframes/mockups available (if UI)

---

## 2. Definition of Done (DoD)

> A story is done when ALL items are checked.

### Code Complete
- [ ] Feature implemented per acceptance criteria
- [ ] Code reviewed (or `/review` passed)
- [ ] No critical lint/type errors

### Tested
- [ ] Unit tests passing
- [ ] Integration tests passing (if applicable)
- [ ] Manual testing complete

### Documented
- [ ] Code has JSDoc/docstrings
- [ ] README updated (if public API)
- [ ] HANDOFF_NOTES.md updated

### Deployed
- [ ] Successfully deployed to staging
- [ ] No regressions introduced

---

## 3. Sprint Planning

### Triggers
- Start of new sprint/iteration
- Mid-sprint re-planning
- Scope changes

### Story Point Scale
| Size | Points | Duration | Complexity |
|------|--------|----------|------------|
| XS | 1 | <2 hours | Trivial |
| S | 2 | 2-4 hours | Simple |
| M | 3 | 4-8 hours | Standard |
| L | 5 | 1-2 days | Complex |
| XL | 8 | 2-3 days | Very complex |
| XXL | 13 | 3-5 days | **Should split** |

### Capacity Calculation
```
Sprint Duration: [X days]
Team Velocity: [Y points/sprint]
Buffer (20%): Subtract 20%
Available: X × Y × 0.8
```

### Selection Order
1. All **MUST** items first
2. **SHOULD** items by priority
3. **COULD** items if capacity remains
4. Balance workload across personas

### Velocity Tracking
Track velocity to improve estimation accuracy:
1. **At Sprint End:** Sum completed story points
2. **Rolling Average:** Use last 3 sprints for prediction
3. **Adjustment:** If consistently over/under, recalibrate point scale

```
Sprint 1: 18 pts | Sprint 2: 22 pts | Sprint 3: 20 pts
Average Velocity: 20 pts/sprint
Next Sprint Capacity: 20 × 0.8 = 16 pts (with buffer)
```

---

## 4. Daily Standup

- **Trigger:** Daily at session start
- **Format:** Async via `SESSION_LOG.md`
- **Questions:**
  1. What did I achieve yesterday?
  2. What will I achieve today?
  3. Am I blocked?

---

## 5. Sprint Review

- **Trigger:** End of sprint
- **Owner:** `/ux` or Product
- **Activity:** Demonstrate completed features
- **Output:** Validation of acceptance criteria

---

## 6. Sprint Retrospective

- **Trigger:** After Sprint Review
- **Owner:** `/retro`
- **Template:** See `project-scaffolding/templates/RETROSPECTIVE_TEMPLATE.md`

### Format
| Category | Questions |
|----------|-----------|
| **What went well?** | Celebrate wins |
| **What didn't go well?** | Identify friction |
| **What will we change?** | Actionable improvements |

---

## 7. MoSCoW Prioritization

| Priority | Meaning | Rule |
|----------|---------|------|
| **MUST** | Critical for milestone | Cannot ship without |
| **SHOULD** | Important but not blocking | Ship with workaround |
| **COULD** | Nice to have | If capacity allows |
| **WON'T** | Explicitly out of scope | Document why |

---

## How to Verify
- [ ] Stories have DoR before sprint
- [ ] Stories pass DoD before "Done"
- [ ] Sprint capacity not exceeded
- [ ] SESSION_LOG.md updated daily
