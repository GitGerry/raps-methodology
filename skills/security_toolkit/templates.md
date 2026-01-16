---
name: security_templates
description: Templates for Security Audit Reports and Handoffs.
---

# Security Templates

## 🔒 Security Audit Report Template
Save as: `/docs/security/SECURITY_AUDIT_[DATE].md`

```markdown
# 🔒 Security Audit Report - [DATE]

**Scope:** [Components]
**Verdict:** [✅ PASS / ⚠️ ISSUES / 🚨 CRITICAL]

## Executive Summary
[Summary]

## 🚨 Critical Findings (Blockers)
| ID | Vulnerability | Location | Remediation |
|----|---------------|----------|-------------|
| SEC-001 | [Type] | [File] | [Fix] |

## ⚠️ High/Medium Findings
| ID | Severity | Issue | Remediation |
|----|----------|-------|-------------|
| SEC-101 | High | [Desc] | [Fix] |

## Automated Scan Results
- npm audit: [Result]
- Secret scan: [Result]

## Recommendations
1. [Rec 1]
```

## 📨 Cross-Persona Note Template
Append to `HANDOFF_NOTES.md`

```markdown
## /security → /build
**Status:** ⚠️ ISSUES FOUND

### Findings
Found [X] issues. [Y] are critical.

### Action Items
1. Fix SEC-001 (Critical): [Description]
2. Fix SEC-101 (High): [Description]

For full details see: `/docs/security/SECURITY_AUDIT_[DATE].md`
```
