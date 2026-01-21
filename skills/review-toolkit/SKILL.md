---
name: Review Toolkit
description: Code review standards, PR checklist, and merge criteria for quality gates.
---

# 📝 Review Toolkit

> [!IMPORTANT]
> **ANTI-HALLUCINATION PROTOCOL**
> 1. You cannot approve code without running the checklist.
> 2. Every rejection requires specific line references.
> 3. You must verify against SPECS.md, not assumptions.

## Purpose
Provide structured code review protocols, PR approval criteria, and merge readiness checks.
**Philosophy:** "Catch it in review, not in production."

## When to Use
- Before merging any PR
- After `/build` completes a feature
- When introducing new patterns
- For security-sensitive changes

---

## 1. PR Review Checklist

### Security (/10)
| Check | Description | Weight |
|-------|-------------|--------|
| No secrets | No hardcoded API keys, passwords, tokens | 3 |
| Input validation | All user inputs sanitized | 2 |
| Auth checks | Protected routes require authentication | 2 |
| Injection safe | No SQL/XSS/command injection vectors | 2 |
| Data protection | Sensitive data encrypted at rest/transit | 1 |

### Code Quality (/10)
| Check | Description | Weight |
|-------|-------------|--------|
| Docstrings | All functions documented (params + returns) | 2 |
| Naming | Variables/functions are descriptive | 2 |
| No dead code | No commented-out code or TODOs | 1 |
| DRY | No unnecessary duplication | 2 |
| Single responsibility | Functions do one thing well | 2 |
| Line length | No lines > 100 chars | 1 |

### Error Handling (/5)
| Check | Description | Weight |
|-------|-------------|--------|
| Try/catch | All async operations wrapped | 2 |
| Descriptive errors | No generic "Something went wrong" | 1 |
| Logging | Errors logged with context | 1 |
| Graceful degradation | Failures don't crash the system | 1 |

### Architecture (/5)
| Check | Description | Weight |
|-------|-------------|--------|
| Pattern compliance | Follows established project patterns | 2 |
| No circular deps | Clean dependency graph | 1 |
| Separation of concerns | Business logic separate from UI/API | 1 |
| Spec compliance | Matches SPECS.md requirements | 1 |

**Pass Threshold:** Score ≥ 24/30

---

## 2. Review Severity Levels

| Level | Symbol | Action | Example |
|-------|--------|--------|---------|
| **Critical** | 🔴 | Block merge | Security vulnerability, data loss risk |
| **Major** | 🟠 | Must fix before merge | Logic error, missing validation |
| **Minor** | 🟡 | Should fix, can merge | Code style, naming |
| **Nit** | ⚪ | Optional | Preference, micro-optimization |

---

## 3. Review Comment Template

```markdown
### 🔴/🟠/🟡/⚪ [File:Line] — [Short Title]

**Issue:** [What's wrong]

**Why it matters:** [Impact if not fixed]

**Suggestion:**
```[language]
// Proposed fix
```
```

---

## 4. PR Merge Criteria

### Must Have (All Required)
- [ ] PR review score ≥ 24/30
- [ ] No 🔴 Critical issues
- [ ] No 🟠 Major issues (unless explicitly waived)
- [ ] CI/CD pipeline passes
- [ ] At least 1 approval
- [ ] No merge conflicts

### Should Have
- [ ] Tests cover new functionality
- [ ] Documentation updated
- [ ] CHANGELOG entry added

### Merge Method Decision Tree
```
Is it a feature branch?
├─ Yes → Squash merge (clean history)
└─ No, release/main
   └─ Merge commit (preserve history)
```

---

## 5. Self-Review Protocol

Before requesting review, `/build` should:
1. Run linter: `npm run lint` or equivalent
2. Run tests: `npm test`
3. Check for secrets: `grep -r "API_KEY\|SECRET\|PASSWORD"`
4. Review own diff: `git diff main...HEAD`
5. Add PR description with:
   - What changed
   - Why it changed
   - How to test

---

## 6. Review Response Protocol

### For Reviewers
- Respond within 24 hours
- Be constructive, not critical
- Ask questions if unclear
- Approve with minor issues noted

### For Authors
- Don't take feedback personally
- Respond to all comments
- Mark resolved when fixed
- Re-request review when ready

---

## 📂 Templates
- `./templates/PR_TEMPLATE.md`: Standard PR description format
- `./templates/REVIEW_RESPONSE.md`: Review output format

---

## How to Verify
- [ ] Review checklist completed with scores
- [ ] All critical/major issues addressed
- [ ] CI/CD passes
- [ ] At least 1 approval recorded
- [ ] Merge criteria checklist complete
