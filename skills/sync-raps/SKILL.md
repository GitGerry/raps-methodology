---
name: Sync RAPS
description: Synchronize RAPS methodology (Brain) with the Repository.
---

# 🔄 Sync RAPS Skill (/sync-raps)

## 1. Description
The **Sync RAPS** skill ensures that the state in the Agent's Brain is synchronized with the actual codebase in the repository, and vice versa. It manages the two-way flow of information and artifacts.

## 2. Usage
Use this skill when:
*   You have manually edited files in the repository and want the Agent to be aware.
*   The Agent has generated artifacts that need to be committed to the repo.
*   You want to ensure `PLAN.md` and RAPS documentation are up to date.

## 3. Implementation
The logic is handled by the `scripts/sync_raps.ps1` script.

### Command
```powershell
.\scripts\sync_raps.ps1
```

## 4. Verification
*   Check `audit_results.log` for any sync errors.
*   Verify that `RAPS_CHANGELOG.md` is updated.
