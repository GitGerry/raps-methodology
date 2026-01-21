---
name: Release Toolkit
description: Version management, changelog generation, and release automation protocols.
---

# 🚀 Release Toolkit

> [!IMPORTANT]
> **ANTI-HALLUCINATION PROTOCOL**
> 1. You cannot release without all 6 gates passing.
> 2. Version numbers must follow SemVer exactly.
> 3. Every release needs rollback documentation.

## Purpose
Provide structured protocols for versioning, changelog generation, and release automation.
**Philosophy:** "Ship when MUST-HAVEs work. Everything else is v1.1."

## When to Use
- When preparing a release candidate
- When bumping version numbers
- When generating release notes
- Before deploying to production

---

## 1. Semantic Versioning (SemVer)

### Format: `MAJOR.MINOR.PATCH`

| Component | When to Increment | Example |
|-----------|-------------------|---------|
| **MAJOR** | Breaking changes (API incompatible) | 1.0.0 → 2.0.0 |
| **MINOR** | New features (backwards compatible) | 1.0.0 → 1.1.0 |
| **PATCH** | Bug fixes only | 1.0.0 → 1.0.1 |

### Pre-Release Tags
| Tag | Usage |
|-----|-------|
| `-alpha.N` | Internal testing |
| `-beta.N` | External testing |
| `-rc.N` | Release candidate |

**Examples:** `2.0.0-alpha.1`, `2.0.0-beta.3`, `2.0.0-rc.1`

### Version Decision Tree
```
Did you break backwards compatibility?
├─ YES → Bump MAJOR
└─ NO
   └─ Did you add new features?
      ├─ YES → Bump MINOR
      └─ NO (bugs only) → Bump PATCH
```

---

## 2. Changelog Generation

### Format: [Keep a Changelog](https://keepachangelog.com/)

```markdown
## [X.Y.Z] - YYYY-MM-DD

### Added
- New feature 1
- New feature 2

### Changed
- Modified behavior of X

### Deprecated
- Feature Y will be removed in next major

### Removed
- Deleted feature Z

### Fixed
- Bug fix 1
- Bug fix 2

### Security
- Security patch for CVE-XXXX
```

### Changelog Categories (in order)
1. **Added** — New features
2. **Changed** — Changes in existing functionality
3. **Deprecated** — Soon-to-be removed features
4. **Removed** — Removed features
5. **Fixed** — Bug fixes
6. **Security** — Vulnerability patches

---

## 3. Git Tag Protocol

### Creating a Release Tag
```bash
# Ensure on main branch
git checkout main
git pull origin main

# Create annotated tag
git tag -a v1.2.0 -m "Release v1.2.0: [Brief description]"

# Push tag
git push origin v1.2.0
```

### Tag Naming Convention
- Always prefix with `v` (e.g., `v1.0.0`)
- Match CHANGELOG version exactly
- Use annotated tags (`-a`) not lightweight

---

## 4. Release Notes Template

```markdown
# Release v[X.Y.Z]

**Release Date:** [YYYY-MM-DD]  
**Release Manager:** [Name]

## Highlights
- [Major feature 1]
- [Major feature 2]

## What's New
[Summarize Added/Changed from changelog]

## Bug Fixes
[Summarize Fixed from changelog]

## Breaking Changes
[List any breaking changes, migration steps]

## Known Issues
| Issue | Severity | Workaround |
|-------|----------|------------|
| [Description] | Medium | [Workaround] |

## Upgrade Instructions
1. [Step 1]
2. [Step 2]

## Contributors
- @contributor1
- @contributor2
```

---

## 5. Pre-Release Checklist

### Before Tagging
- [ ] All 6 release gates passed
- [ ] CHANGELOG.md updated
- [ ] Version bumped in package.json (or equivalent)
- [ ] README.md current
- [ ] No TODO/FIXME in critical paths
- [ ] All tests passing

### Before Deploying
- [ ] Release notes written
- [ ] Rollback procedure documented
- [ ] Monitoring/alerts configured
- [ ] Database migrations tested
- [ ] Environment variables documented

---

## 6. Rollback Protocol

### When to Rollback
- Critical bug discovered post-deploy
- Performance degradation > 50%
- Data integrity issues
- Security breach

### Rollback Steps
```bash
# 1. Identify previous working version
git log --oneline -10

# 2. Deploy previous tag
# (platform-specific)

# 3. Verify rollback
curl -s https://api.example.com/health

# 4. Document incident
# Create INCIDENT_REPORT.md
```

### Post-Rollback
1. Create incident report
2. Identify root cause
3. Fix in hotfix branch
4. Re-release with PATCH version bump

---

## 7. Hotfix Protocol

### For Critical Production Issues
```bash
# Branch from production tag
git checkout v1.2.0
git checkout -b hotfix/1.2.1

# Fix the issue
# ...

# Version bump (PATCH only)
# Update CHANGELOG

# Merge to main AND production
git checkout main
git merge hotfix/1.2.1
git tag -a v1.2.1 -m "Hotfix: [description]"
git push origin main --tags
```

---

## 📂 Templates
- `./templates/RELEASE_NOTES.md`: Release announcement format
- `./templates/INCIDENT_REPORT.md`: Post-incident documentation

---

## How to Verify
- [ ] Version follows SemVer
- [ ] CHANGELOG updated with correct format
- [ ] Git tag created and pushed
- [ ] Release notes published
- [ ] Rollback procedure documented
