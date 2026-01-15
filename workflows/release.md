---
description: Release gates checklist for determining when a version is ready for go-live
---

# /release - Release Gate Checklist

## Purpose

This workflow prevents endless iteration loops by providing **clear, objective criteria** for when a version is ready for release. Issues found after gates pass go to the **backlog for future versions**.

> [!TIP]
> **Run `/health` before starting release gates** to ensure project state is clean.

---

## 🚦 The Six Gates

```
Gate 1: Feature Complete ────────────────────────────────────────►
Gate 2: Code Complete ──────────────────────────────────────────►
Gate 3: Test Complete ──────────────────────────────────────────►
Gate 4: Security Cleared ───────────────────────────────────────►
Gate 5: UAT Approved ───────────────────────────────────────────►
Gate 6: Go-Live ────────────────────────────────────────────────► 🚀
```

---

## Gate 1: Feature Complete

**Owner:** `/architect`  
**Question:** Are all MUST-HAVE features implemented?

### Checklist
- [ ] All MUST priority items in REQUIREMENTS.md are implemented
- [ ] API contracts match SPECS.md
- [ ] Database schema matches SPECS.md
- [ ] No placeholder or TODO code in MUST features

### Decision
| Result | Action |
|--------|--------|
| ✅ All MUST done | → Proceed to Gate 2 |
| ❌ Missing MUST | → Return to `/build` |

---

## Gate 2: Code Complete

**Owner:** `/build`  
**Question:** Is the codebase production-ready?

### Checklist
- [ ] All feature branches merged to main
- [ ] No compilation/build errors
- [ ] No TypeScript/lint errors (warnings acceptable)
- [ ] All dependencies locked (package-lock.json)
- [ ] Environment variables documented
- [ ] README updated with setup instructions

### Decision
| Result | Action |
|--------|--------|
| ✅ All checks pass | → Proceed to Gate 3 |
| ❌ Build issues | → Fix before proceeding |

---

## Gate 3: Test Complete

**Owner:** `/test`  
**Question:** Does the application work correctly?

### Checklist
- [ ] Unit test coverage ≥ 80% on critical paths
- [ ] All E2E tests passing
- [ ] API endpoints return expected responses
- [ ] No Critical or High severity bugs open
- [ ] Performance meets minimum thresholds:
  - [ ] API p95 < 1000ms
  - [ ] Page load < 3s

### Bug Severity Guide
| Severity | Definition | Release Blocker? |
|----------|------------|------------------|
| **Critical** | App crashes, data loss, security breach | ✅ YES |
| **High** | Major feature broken, no workaround | ✅ YES |
| **Medium** | Feature impaired but workaround exists | ❌ No (document) |
| **Low** | Minor issue, cosmetic, edge case | ❌ No (backlog) |

### Decision
| Result | Action |
|--------|--------|
| ✅ No blockers | → Proceed to Gate 4 |
| ❌ Critical/High bugs | → Return to `/build`, fix, re-test |

---

## Gate 4: Security Cleared

**Owner:** `/security`  
**Question:** Is the application safe to deploy?

### Checklist
- [ ] No Critical vulnerabilities
- [ ] No High vulnerabilities (or accepted with mitigation plan)
- [ ] OWASP Top 10 review complete
- [ ] No hardcoded secrets in codebase
- [ ] Dependencies scanned (npm audit, Snyk)
- [ ] Authentication/authorization tested

### Vulnerability Handling
| Severity | Action Required |
|----------|-----------------|
| **Critical** | Must fix before release |
| **High** | Fix or document mitigation + timeline |
| **Medium** | Document, fix in next version |
| **Low** | Backlog |

### Decision
| Result | Action |
|--------|--------|
| ✅ No critical/high | → Proceed to Gate 5 |
| ❌ Critical vulns | → Return to `/build`, fix |

---

## Gate 5: UAT Approved

**Owner:** `/ux`  
**Question:** Do users accept this release?

### Checklist
- [ ] All acceptance criteria in user stories marked PASS
- [ ] Key user flows tested by stakeholder
- [ ] No Critical usability issues
- [ ] Known issues documented and communicated

### Issue Handling at UAT
| Issue Type | This Version? | Action |
|------------|---------------|--------|
| Broken feature | ✅ Fix now | → Back to `/build` |
| Confusing UX | ❌ v1.1 | → Add to backlog |
| "Nice to have" | ❌ Future | → Add to backlog |
| Scope creep | ❌ Reject | → Separate feature request |

### Decision
| Result | Action |
|--------|--------|
| ✅ User signs off | → Proceed to Gate 6 |
| ❌ Critical issues | → Triage: fix now or defer |

---

## Gate 6: Go-Live

**Owner:** `/deploy`  
**Question:** Is deployment ready and safe?

### Pre-Deployment Checklist
- [ ] All previous gates passed
- [ ] Deployment runbook documented
- [ ] Rollback procedure tested
- [ ] Monitoring/alerts configured
- [ ] Database migrations tested on staging
- [ ] Production environment configured

### Release Artifacts
- [ ] Release notes written
- [ ] CHANGELOG updated
- [ ] Version number tagged (e.g., v1.0.0)
- [ ] Known issues document published

### Decision
| Result | Action |
|--------|--------|
| ✅ All ready | → **DEPLOY** 🚀 |
| ❌ Issues found | → Fix before deploy |

---

## 📋 Release Summary Template

```markdown
# Release: v[X.Y.Z]
**Date:** [YYYY-MM-DD]
**Release Manager:** [Name/Agent]

## Gate Status
| Gate | Owner | Status | Date |
|------|-------|--------|------|
| Feature Complete | /architect | ✅ | |
| Code Complete | /build | ✅ | |
| Test Complete | /test | ✅ | |
| Security Cleared | /security | ✅ | |
| UAT Approved | /ux | ✅ | |
| Go-Live | /deploy | ✅ | |

## What's Included
- Feature 1
- Feature 2

## Known Issues (Deferred to v[X.Y+1.Z])
- Issue 1 (Medium) - workaround: [description]
- Issue 2 (Low) - cosmetic

## Rollback Plan
[Description of how to rollback if issues arise]
```

---

## 🔄 When to Loop vs. When to Ship

```
Issue Found
    │
    ▼
Is it CRITICAL or HIGH severity?
    │
    ├── YES → Fix in THIS version
    │         (loop back to /build)
    │
    └── NO → Add to BACKLOG for next version
             (proceed with release)
```

**The Golden Rule:** 
> Perfect is the enemy of good. Ship when MUST-HAVEs work and no critical bugs exist. Everything else is v1.1.
