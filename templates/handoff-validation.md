# Handoff Validation Checklist

> Ensure handoff quality before persona transitions

This standalone checklist can be used to validate any handoff before it's finalized.

---

## Universal Validation (All Handoffs)

### Content Completeness
- [ ] All required sections are present
- [ ] No placeholder text (`[TBD]`, `[TODO]`, `...`)
- [ ] Dates are filled in correctly
- [ ] Task/feature name matches PLAN.md

### Source Quality
- [ ] All claims have source citations
- [ ] URLs are clickable and valid
- [ ] Evidence ratings assigned where applicable

### Actionability
- [ ] Next steps are specific and clear
- [ ] Receiving persona knows what to do first
- [ ] Blockers or concerns are flagged

### File References
- [ ] All referenced files exist
- [ ] File paths are accurate
- [ ] New files added to Artifact Registry

---

## Transition-Specific Validation

### /research → /analyst or /architect

| Check | Status |
|-------|--------|
| Key findings summarized (5+ items) | ☐ |
| Sources table with quality ratings | ☐ |
| Gaps documented (what wasn't found) | ☐ |
| Recommendations for next persona | ☐ |

### /analyst → /architect

| Check | Status |
|-------|--------|
| Requirements summary with counts | ☐ |
| Priority breakdown (MUST/SHOULD/COULD) | ☐ |
| User verification notes | ☐ |
| Out of scope documented | ☐ |
| Open questions with impact | ☐ |

### /architect → /build

| Check | Status |
|-------|--------|
| Implementation order specified | ☐ |
| Technical decisions documented | ☐ |
| Data schema highlights | ☐ |
| Edge cases listed with solutions | ☐ |
| Integration points documented | ☐ |

### /build → /test

| Check | Status |
|-------|--------|
| Components listed with file paths | ☐ |
| Test instructions provided | ☐ |
| Known limitations documented | ☐ |
| Environment requirements listed | ☐ |
| What's NOT included specified | ☐ |

### /design → /test

| Check | Status |
|-------|--------|
| UI components listed | ☐ |
| Visual verification checklist | ☐ |
| Interaction flows described | ☐ |
| Mock data usage documented | ☐ |
| Browser compatibility notes | ☐ |

---

## Exception Handling

When a required section cannot be completed:

### 1. Mark as Incomplete
```markdown
### [Section Name]
**INCOMPLETE:** [Reason why this couldn't be completed]
```

### 2. Add to Open Questions
```markdown
### Open Questions
- [ ] [Question about incomplete section] — Affects: [What]
```

### 3. Flag in Summary
```markdown
> ⚠️ **Note:** [Section] is incomplete due to [reason]. 
> Suggested action: [What receiving persona should do]
```

---

## Quality Levels

### ✅ Ready for Handoff
- All required sections complete
- No placeholder content
- Clear next steps

### ⚠️ Handoff with Caveats
- Most sections complete
- Known gaps are documented
- Receiving persona informed of limitations

### ❌ Not Ready for Handoff
- Missing required sections
- Placeholder content remains
- Unclear next steps
- Undocumented blockers

---

## Quick Validation Command

Before any handoff, mentally run through:

1. **CONTENT** — Is everything there?
2. **SOURCES** — Is it backed by evidence?
3. **ACTIONS** — Does the next persona know what to do?
4. **FILES** — Are all paths correct?
5. **GAPS** — Are unknowns documented?

If any answer is "no," fix it before handoff.
