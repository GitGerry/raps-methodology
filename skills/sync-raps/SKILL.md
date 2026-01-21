---
name: Sync RAPS
description: Synchronize RAPS methodology between Brain, Repository, and GitHub.
---

# 🔄 Sync RAPS Skill

> [!IMPORTANT]
> **ANTI-HALLUCINATION PROTOCOL**
> 1. You must verify sync direction before executing (Brain→Repo or Repo→Brain).
> 2. You cannot claim "synced" without checking for conflicts.
> 3. Always commit with descriptive message referencing what changed.

## Purpose
Ensure the Agent's Brain stays synchronized with the repository codebase. Manages two-way flow of RAPS methodology files, templates, and documentation.

## When to Use
- After manually editing files in the repository
- When Agent generates artifacts that need to be committed
- Before starting a new session (refresh context)
- After major methodology updates

---

## Sync Directions

### Brain → Repository (Export)
Push Agent-generated changes to the repo:
- New templates created
- Workflow improvements
- Documentation updates

### Repository → Brain (Import)
Pull human-made changes into Agent context:
- User edited PLAN.md manually
- External contributor added files
- Configuration changes

---

## Sync Workflow

### 1. Pre-Sync Check
```powershell
# Check for uncommitted changes
git status

# Check for remote changes
git fetch origin
git log HEAD..origin/main --oneline
```

### 2. Conflict Detection
| Scenario | Action |
|----------|--------|
| No conflicts | Proceed with sync |
| Local-only changes | Commit and push |
| Remote-only changes | Pull and merge |
| **Both have changes** | Manual resolution required |

### 3. Execute Sync
```powershell
.\scripts\sync_raps.ps1
```

### 4. Post-Sync Verification
- [ ] `git status` shows clean working directory
- [ ] `audit_results.log` has no errors
- [ ] `RAPS_CHANGELOG.md` updated if methodology changed

---

## Conflict Resolution

### When Conflicts Occur
1. **Identify conflicting files:**
   ```powershell
   git diff --name-only --diff-filter=U
   ```

2. **For each conflict:**
   - Open file and locate `<<<<<<<` markers
   - Decide: Keep local, keep remote, or merge both
   - Remove conflict markers
   - Stage resolved file: `git add <file>`

3. **Complete resolution:**
   ```powershell
   git commit -m "Resolved sync conflicts in [files]"
   ```

### Prevention Tips
- Sync frequently (don't let changes pile up)
- Use clear commit messages
- Communicate before editing shared files

---

## Rollback Procedure

### If Sync Goes Wrong
```powershell
# Undo last commit (keep changes)
git reset --soft HEAD~1

# OR hard reset to remote state
git fetch origin
git reset --hard origin/main
```

---

## Files Synced

| Category | Files |
|----------|-------|
| **Methodology** | `workflows/*.md`, `skills/*/SKILL.md` |
| **Templates** | `skills/*/templates/*.md` |
| **Documentation** | `docs/*.md`, `README.md` |
| **Configuration** | `PLAN.md`, `.raps/` |
| **Scripts** | `scripts/*.ps1` |

---

## How to Verify
- [ ] `git status` returns clean
- [ ] No untracked RAPS files in repo
- [ ] `RAPS_CHANGELOG.md` reflects changes
- [ ] Agent context matches repo state
