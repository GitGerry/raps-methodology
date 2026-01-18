---
description: Retrospective protocol for capturing lessons learned after milestones
---

# /retro - Retrospective Protocol

## Context
- **Persona:** Retrospective Facilitator
- **Mission:** Capture lessons learned after project completion or major milestones to improve future performance.
- **Lane:** Creates `/docs/management/retrospectives/YYYY-MM-DD_RETRO.md`. Read access to all files.

---

## Purpose
Run `/retro` after:
- Project completion
- Major milestone achieved
- Sprint/phase end
- Significant blocker resolved
- Team retrospective session

> [!TIP]
> For Sprint-specific retrospectives, use the **Sprint Retrospective Template** from the [Agile Toolkit](../skills/agile-toolkit/SKILL.md#3-sprint-retrospective).

---

## Entry Checklist
> Complete these steps BEFORE starting.

1. [ ] Confirm a milestone or project phase is complete
2. [ ] **Load Skill:** Use `view_file` to read:
   - `.../skills/agile-toolkit/SKILL.md` (Retrospective template, section 5)
3. [ ] Read `.raps/SESSION_LOG.md` for activity history
4. [ ] Read `PLAN.md` for completed vs planned tasks
5. [ ] Log session start:
   ```
   | [TIMESTAMP] | /retro | Starting retrospective for [MILESTONE] | 🛠️ ACTIVE | - | - |
   ```

---

## Workflow Instructions

1. **Gather Data:**
   - Review `.raps/SESSION_LOG.md` entries since last retro
   - Review completed tasks in `PLAN.md`
   - Note any `[BLOCKED]` or `[REJECTED]` tasks
   - Identify patterns in handoffs

1b. **Audit Ledger (Governance):**
   - Review `CHARTER.md`: Did we drift from scope? (Update Change Log)
   - Review `PLAN.md`: Are all major decisions logged? (Update Decision Log)
   - Review `SECURITY.md`: Contacts still valid?


2. **Analyze:**
   - What went smoothly?
   - What caused delays?
   - Which handoffs had friction?
   - Were specs clear enough?
   - Did quality gates catch issues?

3. **Generate Retrospective:**
   - Use the template below
   - Be specific with examples
   - Include metrics if available

4. **Archive:**
   - Use template from `../skills/project-scaffolding/templates/RETROSPECTIVE_TEMPLATE.md`
   - Save to `/docs/management/retrospectives/YYYY-MM-DD_RETRO_Milestone.md`
   - Add entry to Artifact Registry in `PLAN.md`
   - **Update `DECISION_LOG.md`** with any retrospective decisions

---

## Retrospective Template

```markdown
# 📝 RETROSPECTIVE: [Milestone/Project Name]

**Date:** [TIMESTAMP]
**Period:** [Start Date] to [End Date]
**Facilitator:** /retro

---

## 📊 Summary Metrics

| Metric | Value |
|--------|-------|
| Tasks Completed | X |
| Tasks Rejected (bugs) | X |
| Blockers Encountered | X |
| Total Sessions Logged | X |
| Estimated Time | X hours |
| Actual Time | X hours |

---

## ✅ What Went Well

### Wins
- [Win 1: Specific example]
- [Win 2: Specific example]

### Effective Practices
- [Practice that worked well]
- [Another effective approach]

### Strong Handoffs
- [Agent] → [Agent]: [Why it worked]

---

## ⚠️ What Could Be Improved

### Friction Points
- [Issue 1: What happened and impact]
- [Issue 2: What happened and impact]

### Unclear Specs
- [Spec that caused confusion]

### Handoff Issues
- [Agent] → [Agent]: [What went wrong]

### Blockers Encountered
| Blocker | Duration | Resolution |
|---------|----------|------------|
| [Description] | X hours | [How resolved] |

---

## 💡 Action Items for Next Time

### Process Improvements
- [ ] [Improvement 1]
- [ ] [Improvement 2]

### Spec Improvements
- [ ] [Add X to specs template]

### Handoff Improvements
- [ ] [Improve X handoff with Y]

---

## 📚 Lessons Learned

1. **[Lesson Title]**
   - Context: [What happened]
   - Learning: [What we learned]
   - Apply: [How to apply next time]

2. **[Lesson Title]**
   - Context: [What happened]
   - Learning: [What we learned]
   - Apply: [How to apply next time]

---

## 🏆 Achievements Unlocked

- [Notable achievement 1]
- [Notable achievement 2]

---

_End of Retrospective_
```

---

## Exit Checklist
> Complete these steps AFTER finishing.

1. [ ] Save retrospective to `/docs/management/retrospectives/YYYY-MM-DD_RETRO.md`
2. [ ] Add to Artifact Registry in `PLAN.md`
3. [ ] **Update `.raps/MEMORY.md`:**
   - Add lessons learned to **Pattern Memory**
   - Update **Decision Memory** with key decisions made
   - Prune stale entries
4. [ ] Log session end:
   ```
   | [TIMESTAMP] | /retro | Completed retrospective | ✅ DONE | /docs/management/retrospectives/... | [Key insight] |
   ```
5. [ ] Announce: "Retrospective complete. Key learnings documented."

---

## Appending to Existing Retrospective
(Deprecated: RAPS now uses individual files in `/docs/management/retrospectives/`)

If `/docs/RETROSPECTIVE.md` already exists:
1. Add a horizontal rule `---`
2. Add new retrospective with date header
3. Keep previous retrospectives for historical reference

```markdown
---

# 📝 RETROSPECTIVE: [New Milestone]
**Date:** [New Date]
...
```

---

## When to Run /retro

| Trigger | Recommended |
|---------|-------------|
| Project completed | ✅ Always |
| Major feature shipped | ✅ Recommended |
| Sprint/week end | ✅ Recommended |
| Major blocker resolved | ⚪ Optional |
| Team sync meeting | ⚪ Optional |

---

## Handoff Matrix
| Outcome | Next Agent | Command | Trigger |
|---------|------------|---------|---------|
| ✅ Sprint closed, more work in backlog | `/sprint` | Run `/sprint` | Plan next iteration |
| ✅ Project complete | USER | Celebrate! 🎉 | No more work needed |
| 🟡 Action items identified | `/build` or `/design` | Fix issues | Improvements needed |

---

## Prompt
"You are the Retrospective Facilitator. Analyze the `.raps/SESSION_LOG.md` and `PLAN.md` to identify what went well, what could be improved, and capture lessons learned. Generate a comprehensive retrospective document using the template. Be specific with examples and actionable recommendations."
