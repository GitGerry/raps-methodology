---
name: Handoff Summary
description: Generate comprehensive handoff notes for persona transitions
---

# Handoff Summary Skill

## Purpose
Automatically generate detailed handoff documentation when transitioning work between RAPS personas, ensuring context is preserved and the receiving persona can continue without ambiguity.

## When to Use
- Completing work as any persona
- Transitioning between personas
- End of work session
- When context is complex or nuanced

---

## Instructions

### 1. Identify Transition
Determine:
- **Source Persona:** Who is handing off
- **Target Persona:** Who is receiving
- **Task Context:** What work was done

### 2. Gather Information

#### From SESSION_LOG.md
- Recent entries for current persona
- Actions taken
- Decisions made
- Issues encountered

#### From Current Work
- Files created/modified
- Requirements addressed
- Specs written
- Code implemented
- Tests executed

#### From Open Items
- Blockers
- Open questions
- Assumptions made
- Risks identified

### 3. Generate Handoff Document

Create structured handoff notes with:
- Summary of completed work
- Key decisions and rationale
- Known issues and workarounds
- Open items requiring attention
- Specific guidance for next steps

### 4. Update HANDOFF_NOTES.md

Append the generated handoff to the project's handoff notes file.

---

## Handoff Templates by Transition

### /research → /analyst
```markdown
## /research → /analyst
**Date:** [TIMESTAMP]
**Task:** [Research topic]

### Research Summary
- **Scope:** [What was researched]
- **Sources:** [Tools/sites used]
- **Duration:** [Time spent]

### Key Findings
1. [Finding 1 with evidence]
2. [Finding 2 with evidence]
3. [Finding 3 with evidence]

### Data Quality
| Aspect | Rating | Notes |
|--------|--------|-------|
| Completeness | High/Med/Low | [Details] |
| Reliability | High/Med/Low | [Details] |
| Recency | High/Med/Low | [Details] |

### Recommendations for Requirements
- [Requirement suggestion 1]
- [Requirement suggestion 2]

### Gaps / Unable to Find
- [Information not found]
- [Areas needing more research]

### Files Created
- `/research/[FILE1].md`
- `/research/[FILE2].md`
```

### /analyst → /architect
```markdown
## /analyst → /architect
**Date:** [TIMESTAMP]
**Feature:** [Feature name]

### Requirements Summary
| Type | Count | Priority Breakdown |
|------|-------|-------------------|
| Functional (FREQ) | X | Y MUST, Z SHOULD |
| Non-Functional (NFRQ) | X | - |
| User Stories (STRY) | X | - |
| Use Cases (UCSE) | X | - |

### Key Decisions Made
1. [Decision 1] — Rationale: [Why]
2. [Decision 2] — Rationale: [Why]

### User Verification Notes
- [What user confirmed]
- [What user modified from draft]

### Critical Requirements
> These are the highest priority items

1. FREQ0000001: [Summary]
2. FREQ0000002: [Summary]

### Out of Scope (Important!)
- [What was explicitly excluded]

### Open Questions
| ID | Question | Impact |
|----|----------|--------|
| QSTN0000001 | [Question] | Blocks [what] |

### Suggested Architecture Considerations
- [Technical consideration 1]
- [Technical consideration 2]

### Files
- `/docs/requirements/REQUIREMENTS.md`
```

### /architect → /build
```markdown
## /architect → /build
**Date:** [TIMESTAMP]
**Feature:** [Feature name]

### Spec Summary
- **Total Endpoints:** X
- **Data Models:** Y
- **Key Algorithms:** Z

### Implementation Order
1. [First thing to build] — Why: [Dependency reason]
2. [Second thing to build]
3. [Third thing to build]

### Technical Decisions
| Decision | Choice | Alternatives Considered |
|----------|--------|------------------------|
| [Topic] | [Choice] | [Options rejected] |

### Data Schema Highlights
```
[Key schema or model overview]
```

### Edge Cases to Handle
1. [Edge case 1] — Solution: [How]
2. [Edge case 2] — Solution: [How]

### Integration Points
| System | Type | Notes |
|--------|------|-------|
| [External API] | REST | [Auth details] |

### Files
- `/docs/SPECS.md`
- `/docs/SPECS_[FEATURE].md`
```

### /build → /test (or /design)
```markdown
## /build → /test
**Date:** [TIMESTAMP]
**Feature:** [Feature name]

### What Was Built
| Component | File(s) | Status |
|-----------|---------|--------|
| [Component 1] | [path] | Complete |
| [Component 2] | [path] | Complete |

### How to Test
1. [Setup steps]
2. [Test scenario 1]
3. [Test scenario 2]

### Known Limitations
- [Limitation 1] — Why: [Reason]

### Test Data
- [Required test data or how to generate]

### Environment Requirements
- [Dependencies, versions, config]

### What's NOT Included
- [Deferred items]
- [Out of scope per spec]

### Potential Issues
- [Area that might fail]
- [Edge case not fully tested]

### Files Changed
- `/backend/[file1].ts`
- `/api/[file2].ts`
```

### /design → /test
```markdown
## /design → /test
**Date:** [TIMESTAMP]
**Feature:** [Feature name]

### UI Components Built
| Component | Path | Status |
|-----------|------|--------|
| [Component] | [path] | Complete |

### Visual Verification Needed
- [ ] [Check responsive on mobile]
- [ ] [Check dark mode]
- [ ] [Check accessibility]

### Interaction Flows
1. [User flow 1]
2. [User flow 2]

### Mock Data Used
- [What mock data was used]
- [When real data integration needed]

### Browser Compatibility
| Browser | Tested | Notes |
|---------|--------|-------|
| Chrome | ✅ | Works |
| Firefox | ⚠️ | [Issue] |

### Files Changed
- `/frontend/[file].tsx`
- `/components/[file].tsx`
```

---

## Auto-Generation Rules

### When SESSION_LOG has Recent Entries
1. Extract actions from last N entries
2. Summarize decisions made
3. List files mentioned
4. Identify blockers or issues

### When Files Were Modified
1. List all modified files
2. Summarize changes
3. Highlight areas needing attention

---

## Validation Requirements

Before finalizing any handoff, run through the validation checklist.

### Universal Checks
- [ ] All required sections present (no empty placeholders)
- [ ] Dates are accurate (use current timestamp)
- [ ] File paths exist and are correct
- [ ] Next steps are specific and actionable

### Content Quality
- [ ] No `[TBD]`, `[TODO]`, or `...` placeholders
- [ ] Sources have clickable URLs
- [ ] Evidence ratings assigned where applicable

### Exception Handling
If a required section cannot be completed:
1. Mark as `**INCOMPLETE:** [reason]`
2. Add to Open Questions section
3. Flag in handoff summary

> See `templates/handoff-validation.md` for the complete checklist.

---

## How to Verify
- Handoff appended to HANDOFF_NOTES.md
- All sections filled with specific content
- No placeholder text remaining
- Clear next steps for receiving persona
- Files and decisions documented
