---
name: qa_templates
description: Templates for Performance Reports, Coverage Reports, and Handoffs.
---

# QA Templates

## 📊 Performance Report Template
Save as: `/tests/performance/PERF_REPORT_[DATE].md`

```markdown
# Performance Test Report - [DATE]

## Summary
| Metric | Target | Actual | Status |
|--------|--------|--------|--------|
| API p95 | < 500ms | XXms | ✅/❌ |
| Lighthouse | > 90 | XX | ✅/❌ |

## Bottlenecks
- [Details]
```

## 📉 Test Coverage Report Template
Save as: `/tests/COVERAGE_[FEATURE].md`

```markdown
# Test Coverage Report: [Feature Name]

**Verdict:** ✅ PASSED / ❌ FAILED

## Spec-to-Test Mapping
| Requirement | Test Case | Status |
|-------------|-----------|--------|
| [Req 1] | [Test] | ✅/❌ |
```

## 🐛 Bug Report Template (Cross-Persona)
Append to `HANDOFF_NOTES.md`

```markdown
## /test → /build (or /design)
**Status:** ❌ REJECTED

### Bug Report
**Summary:** [Description]
**Severity:** [Crit/High/Med/Low]

**Steps to Reproduce:**
1. [Step 1]
2. [Step 2]

**Evidence:**
- [Screenshot/Log]
```
