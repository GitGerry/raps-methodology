---
name: Agile Toolkit
description: Sprint ceremonies, Definition of Ready/Done, and story decomposition
---

# Agile Toolkit

## Purpose
Provide standardized Agile/Scrum templates and checklists used across all RAPS workflows including Definition of Ready (DoR), Definition of Done (DoD), sprint planning, and story decomposition.

## When to Use
- Before picking up a Story (check DoR)
- Before marking a Story as Done (check DoD)
- During sprint planning
- When decomposing Stories into Tasks
- During retrospectives

---

## Tool Interface

### Inputs
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ceremony` | enum | ✅ | `"dor"` \| `"dod"` \| `"sprint_planning"` \| `"retrospective"` \| `"decompose"` |
| `story_id` | string | ❌ | Story ID (e.g., STRY0000001) for context |

### Outputs
- **Type:** Checklist or template
- **Structure:** Markdown checklist with items to verify

### Implementation
Manual process following the checklists below.

---

## 1. Definition of Ready (DoR)

> A Story is **Ready** when the team can start working on it without blockers.

### DoR Checklist
- [ ] Story has a clear title and description
- [ ] Story follows "As a... I want... So that..." format
- [ ] Acceptance criteria are defined and testable
- [ ] Story is estimated (story points assigned)
- [ ] Dependencies are identified and resolved (or scheduled)
- [ ] UX mockups are available (if UI-related)
- [ ] Technical approach is discussed with /architect
- [ ] Story fits within one sprint

### DoR Validation Command
```markdown
/health check-dor STRY0000001
```

---

## 2. Definition of Done (DoD)

> A Story is **Done** when it meets all quality criteria and is ready for release.

### DoD Checklist

#### Code Quality
- [ ] Code is written and follows project standards
- [ ] Code is reviewed and approved (PR merged)
- [ ] No critical linting errors
- [ ] No TODO comments left unaddressed

#### Testing
- [ ] Unit tests written and passing
- [ ] Integration tests passing (if applicable)
- [ ] Manual testing completed
- [ ] Edge cases documented and tested

#### Documentation
- [ ] Code is commented where non-obvious
- [ ] README updated (if new feature)
- [ ] API documentation updated (if endpoints changed)
- [ ] HANDOFF_NOTES updated

#### Deployment
- [ ] Works in development environment
- [ ] No breaking changes (or migration documented)
- [ ] Feature flag configured (if applicable)

### DoD Validation Command
```markdown
/health check-dod STRY0000001
```

---

## 3. Sprint Planning

### Sprint Planning Checklist

#### Before Planning
- [ ] Backlog is groomed (top items estimated)
- [ ] Team capacity calculated
- [ ] Previous sprint velocity known
- [ ] Blockers from last sprint resolved

#### During Planning
- [ ] Sprint goal defined
- [ ] Stories selected based on priority and capacity
- [ ] Each story meets DoR
- [ ] Stories decomposed into tasks
- [ ] Task owners assigned

#### After Planning
- [ ] Sprint backlog documented in PLAN.md
- [ ] Sprint goal visible to all
- [ ] Team committed to sprint scope

### Sprint Capacity Template

| Team Member | Available Days | Focus Areas |
|-------------|----------------|-------------|
| [Name] | [X] | /build, /test |
| [Name] | [X] | /design |

**Total Capacity:** [X] story points

---

## 4. Decomposing Stories into Tasks

### Task Decomposition Process

1. **Read the Story** — Understand the goal and acceptance criteria
2. **Identify Components** — What parts need to be built/changed?
3. **Create Tasks** — Each task should be:
   - Completable in < 1 day
   - Owned by one persona
   - Independently verifiable

### Task Template

```markdown
### Task: [Brief description]
- **Story:** STRY0000001
- **Owner:** /build or /design
- **Estimate:** [hours]
- **Acceptance:** [How to verify complete]
```

### Example Decomposition

**Story:** STRY0000001 - User Login
| Task | Owner | Hours |
|------|-------|-------|
| Create login form UI | /design | 4 |
| Implement auth API endpoint | /build | 6 |
| Add JWT token handling | /build | 4 |
| Write login tests | /test | 3 |
| Update user documentation | /build | 2 |

---

## 5. Sprint Retrospective

### Retrospective Template

```markdown
# Sprint [X] Retrospective

**Date:** [TIMESTAMP]
**Facilitator:** [Persona]
**Attendees:** All active personas

## What Went Well ✅
- [Item 1]
- [Item 2]

## What Could Improve ⚠️
- [Item 1]
- [Item 2]

## Action Items 📋
| Action | Owner | Due |
|--------|-------|-----|
| [Action] | [Persona] | [Date] |

## Metrics
- **Velocity:** [X] points
- **Commitment:** [X] points
- **Completion Rate:** [X]%
```

---

## 6. Velocity Tracking

### Velocity Table Template

| Sprint | Committed | Completed | Velocity | Notes |
|--------|-----------|-----------|----------|-------|
| Sprint 1 | 20 | 18 | 18 | Learning phase |
| Sprint 2 | 20 | 20 | 20 | Stable |
| Sprint 3 | 22 | 21 | 21 | One blocker |

**Average Velocity:** [X] points/sprint

---

## How to Verify

- [ ] DoR checklist used before starting stories
- [ ] DoD checklist used before marking done
- [ ] Sprint planning documented
- [ ] Retrospective actions tracked
