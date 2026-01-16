---
name: Debug Assist
description: Structured debugging workflow for identifying and resolving issues
---

# Debug Assist Skill

## Purpose
Provide a structured approach to debugging issues, from reproduction through root cause analysis to resolution verification.

## When to Use
- Build failing
- Tests failing
- Runtime errors
- Unexpected behavior
- Performance issues
- `/test` rejection

---

## Instructions

### 1. Issue Intake
Gather information about the issue:
- Error message (exact text)
- Steps to reproduce
- Expected vs actual behavior
- Environment details
- When it started
- Recent changes

### 2. Reproduce the Issue

#### Reproduction Checklist
- [ ] Can reproduce locally
- [ ] Consistent reproduction
- [ ] Identified minimal reproduction steps
- [ ] Documented environment

### 3. Isolate the Problem

#### Isolation Techniques
| Technique | When to Use |
|-----------|-------------|
| Binary search | Identify which commit introduced |
| Comment out | Isolate specific code block |
| Logging | Trace execution flow |
| Breakpoints | Step through logic |
| Mock dependencies | Eliminate external factors |

### 4. Analyze Root Cause

#### Common Root Causes
| Category | Examples |
|----------|----------|
| Data | Null/undefined, wrong type, missing field |
| Logic | Off-by-one, wrong condition, race condition |
| State | Stale state, incorrect initialization |
| Integration | API changes, contract mismatch |
| Environment | Config, dependencies, permissions |

### 5. Implement Fix

#### Fix Checklist
- [ ] Addresses root cause (not symptom)
- [ ] Doesn't introduce regression
- [ ] Includes test for the bug
- [ ] Documents the issue

### 6. Verify Resolution
- [ ] Original issue no longer occurs
- [ ] Related functionality still works
- [ ] New test passes
- [ ] No new errors in logs

### 7. Document and Update RAPS

---

## Debug Report Template

```markdown
# 🐛 BUG REPORT: [Brief Description]

**ID:** BUG#######
**Reported:** [TIMESTAMP]
**Severity:** Critical / High / Medium / Low
**Status:** Open / In Progress / Resolved / Won't Fix

---

## Issue Summary

### Description
[Clear description of the bug]

### Expected Behavior
[What should happen]

### Actual Behavior
[What actually happens]

### Error Message
```
[Exact error message or stack trace]
```

---

## Reproduction

### Environment
| Aspect | Value |
|--------|-------|
| OS | [e.g., Windows 11] |
| Node Version | [e.g., 20.x] |
| Browser | [e.g., Chrome 120] |
| Relevant Config | [e.g., NODE_ENV=prod] |

### Steps to Reproduce
1. [Step 1]
2. [Step 2]
3. [Step 3]
4. Observe: [What happens]

### Reproduction Rate
- [ ] Always (100%)
- [ ] Often (>50%)
- [ ] Sometimes (<50%)
- [ ] Rare (<10%)

---

## Investigation

### Hypothesis 1: [Theory]
**Test:** [How to verify]
**Result:** ✅ Confirmed / ❌ Ruled out

### Hypothesis 2: [Theory]
**Test:** [How to verify]
**Result:** ✅ Confirmed / ❌ Ruled out

### Root Cause
[Clear explanation of why the bug occurs]

### Code Location
| File | Line | Issue |
|------|------|-------|
| [path] | [line] | [description] |

---

## Resolution

### Fix Description
[What was changed to fix the issue]

### Code Changes
```diff
- [old code]
+ [new code]
```

### Files Modified
- [file 1]
- [file 2]

### Test Added
```
[test case description]
```

---

## Verification

- [ ] Bug no longer reproduces
- [ ] Existing tests pass
- [ ] New test for bug added
- [ ] No regression in related areas
- [ ] Reviewed by another developer

---

## Lessons Learned

### How to Prevent Similar Bugs
- [Prevention measure 1]
- [Prevention measure 2]

### Documentation Updates Needed
- [ ] [Doc to update]

---

## Related Items
| Type | ID | Relationship |
|------|-----|--------------|
| Requirement | FREQ####### | Bug violates this |
| Test Case | TC####### | Should have caught this |
| Commit | [hash] | Introduced the bug |
```

---

## Quick Debug Commands

### Node.js
```bash
# Debug mode
node --inspect index.js

# Verbose logging
DEBUG=* node index.js
```

### React/Next.js
```bash
# Development with source maps
npm run dev

# Check bundle
npm run analyze
```

### Database
```sql
-- Check recent entries
SELECT * FROM [table] ORDER BY created_at DESC LIMIT 10;

-- Check for nulls
SELECT * FROM [table] WHERE [column] IS NULL;
```

---

## How to Verify
- Issue documented with ID
- Root cause identified
- Fix implemented and tested
- No regressions introduced
- Lesson learned documented
