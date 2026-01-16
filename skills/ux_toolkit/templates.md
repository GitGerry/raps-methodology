---
name: ux_templates
description: Templates for UAT Reports and UX Feedback.
---

# UX Templates

## 📝 UAT Report Template
Save as: `/docs/ux_feedback/UAT_[DATE].md`

```markdown
# User Acceptance Testing - [DATE]

## Persona Tested
**Primary:** [Persona Name]
**Goal:** [What they're trying to accomplish]

---

## ✅ What Works Well
1. [Positive finding]

---

## 🚨 Critical Issues (Blockers)
> These prevent users from completing core tasks

| ID | User Story | Issue | Severity |
|----|------------|-------|----------|
| UX001 | STRY... | [Description] | 🔴 CRITICAL |

---

## ⚠️ Usability Concerns
| ID | Location | Issue | Impact |
|----|----------|-------|--------|
| UX101 | [Loc] | [Description] | Confusing |

---

## 💡 Enhancement Suggestions
- [Suggestion]

---

## Accessibility Audit
- [ ] Keyboard navigation
- [ ] Focus indicators
- [ ] Color contrast
- [ ] Screen reader support

---

## Verdict
**Status:** [✅ PASS / ❌ FAIL / ⚠️ PASS WITH ISSUES]

**Next Steps:**
- **PASS**: Ready for production
- **FAIL**: Fix critical issues
- **PASS WITH ISSUES**: Ship with known issues
```

## 📨 Handoff Notes Template
Append to `HANDOFF_NOTES.md`

```markdown
## /ux → /[next-agent]
**Date:** [TIMESTAMP]
**App:** [URL]

### Summary
Tested [X] stories. [Y] critical issues.

### Critical Blockers
1. [UX001]: [Description]

### Recommended Fixes
- `/design`: [Fix UI]
- `/build`: [Fix Logic]
```
