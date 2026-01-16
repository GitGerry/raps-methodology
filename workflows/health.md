---
description: Project health validator - checks for issues and inconsistencies
---

# /health - Project Health Check

## Context
- **Persona:** Health Inspector (Utility)
- **Mission:** Validate project state, catch inconsistencies, and identify potential issues before they cause problems.
- **Lane:** Read-only access to all files. No modifications (only reports issues).

---

## Status Emoji Reference
| Emoji | Status | Meaning |
|-------|--------|---------|
| 💤 | IDLE | Not running health check |
| 🛠️ | ACTIVE | Running health check |
| ✅ | HEALTHY | All checks passed |
| ⚠️ | ISSUES | Non-blocking issues found |
| ❌ | CRITICAL | Blocking issues found |

---

## When to Run `/health`
> [!TIP]
> Run `/health` in these situations:

| Trigger | Why |
|---------|-----|
| Starting session after >24 hours | Reorient and catch drift |
| Before `/sprint` planning | Ensure clean slate |
| Before `/release` gates | Pre-flight validation |
| After resolving blockers | Confirm resolution |
| Feeling lost in project | Quick status snapshot |
| After complex multi-file changes | Validate consistency |

---

## Entry Checklist
> Complete these steps BEFORE running health check.

1. [ ] Identify project root directory
2. [ ] Confirm `PLAN.md` location is known
3. [ ] Announce: "Running /health check..."

---

## Purpose
Run `/health` to validate:
- File structure integrity
- `PLAN.md` consistency
- Orphaned or stale tasks
- Missing prerequisites
- Log synchronization
- Agile artifact health

---

## Health Checks

### 1. 📁 Structure Validation
- [ ] `/research` folder exists
- [ ] `/docs` folder exists
- [ ] `/docs/requirements` folder exists
- [ ] `/backend` folder exists (if applicable)
- [ ] `/frontend` folder exists (if applicable)
- [ ] `/tests` folder exists
- [ ] `PLAN.md` exists
- [ ] `SESSION_LOG.md` exists
- [ ] `HANDOFF_NOTES.md` exists

### 2. 📋 PLAN.md Integrity
- [ ] Squad Status table exists with all personas
- [ ] Current Trajectory section exists
- [ ] Active Sprint section exists with Stories
- [ ] Product Backlog section exists with Epics
- [ ] Sprint Archive section exists
- [ ] No duplicate task entries
- [ ] All `[ACTIVE]` tasks have an agent assigned

### 3. 🔗 Consistency Checks
- [ ] If `/build` is `🛠️ ACTIVE`, `/docs/SPECS.md` exists
- [ ] If `/design` is `🛠️ ACTIVE`, `/docs/SPECS.md` has UI requirements
- [ ] If `/test` is `🛠️ ACTIVE`, tasks are marked `[READY FOR TEST]`
- [ ] If `/analyst` is `🛠️ ACTIVE`, `/research` folder has files (or analyst is gathering via research-toolkit)
- [ ] No agent is `🛠️ ACTIVE` without a task in Current Trajectory

### 4. ⏰ Staleness Detection
- [ ] No `[IN-PROGRESS]` tasks older than 24 hours without activity
- [ ] No `🛠️ ACTIVE` agents without recent `SESSION_LOG.md` entries
- [ ] No `[BLOCKED]` tasks older than 48 hours (needs escalation)

### 5. 📝 Log Synchronization
- [ ] Last `SESSION_LOG.md` entry matches current `PLAN.md` state
- [ ] No gaps in activity (long periods without logs)
- [ ] All status changes are logged

### 6. 🚨 Blocker Audit
- [ ] All `[BLOCKED]` tasks have a reason documented
- [ ] All `🚨 BLOCKED` agents have an entry in `SESSION_LOG.md`
- [ ] Blockers have assigned owners (USER, specific agent)

### 7. 🏃 Agile Health (Sprint Status)
- [ ] Active Sprint section exists in `PLAN.md`
- [ ] Sprint has a clear Goal statement
- [ ] All Stories have size tags (`[XS]`, `[S]`, `[M]`, `[L]`)
- [ ] All Stories have IDs (`STRY-XXX`)
- [ ] No orphaned Tasks (all linked to Stories)
- [ ] Sprint Archive has velocity summaries for completed sprints
- [ ] Product Backlog has prioritized Epics

### 8. 📚 Documentation Health
- [ ] `README.md` exists (if project is initialized)
- [ ] `/docs/SPECS.md` exists if in Build phase
- [ ] `/docs/requirements/REQUIREMENTS.md` exists if past Analyst phase
- [ ] No "TBD" or "TODO" in critical docs

---

## Output Format

```
═══════════════════════════════════════════════════════
🏥 PROJECT HEALTH CHECK: [Project Name]
    Date: [TIMESTAMP]
═══════════════════════════════════════════════════════

📁 STRUCTURE          [✅ PASS / ⚠️ ISSUES: X]
   [List any missing folders/files]

📋 PLAN.MD INTEGRITY  [✅ PASS / ⚠️ ISSUES: X]
   [List any problems]

🔗 CONSISTENCY        [✅ PASS / ⚠️ ISSUES: X]
   [List any mismatches]

⏰ STALENESS          [✅ PASS / ⚠️ ISSUES: X]
   [List any stale items]

📝 LOG SYNC           [✅ PASS / ⚠️ ISSUES: X]
   [List any sync issues]

🚨 BLOCKERS           [✅ NONE / ⚠️ X ACTIVE]
   [List any blockers]

🏃 AGILE HEALTH       [✅ PASS / ⚠️ ISSUES: X]
   [List sprint/story issues]

📚 DOCS HEALTH        [✅ PASS / ⚠️ ISSUES: X]
   [List documentation gaps]

═══════════════════════════════════════════════════════
OVERALL HEALTH: [✅ HEALTHY / ⚠️ NEEDS ATTENTION / ❌ CRITICAL]
═══════════════════════════════════════════════════════

📊 SCORE: X/8 categories passed

🔧 RECOMMENDED FIXES (Priority Order):
   1. [Most critical fix]
   2. [Second priority fix]
   3. [Third priority fix]

⏭️ SUGGESTED NEXT STEP: [Command to run]
```

---

## Severity Levels

| Level | Meaning | Action |
|-------|---------|--------|
| ✅ HEALTHY | All checks pass (8/8) | Continue normally |
| ⚠️ NEEDS ATTENTION | Minor issues (5-7/8) | Address before next major task |
| ❌ CRITICAL | Blocking issues (<5/8) | Stop and fix immediately |

---

## Common Issues & Fixes

| Issue | Severity | Fix |
|-------|----------|-----|
| Missing `SPECS.md` but `/build` active | ❌ Critical | Run `/architect` first |
| `SESSION_LOG.md` not found | ⚠️ Warning | Create from template |
| Stale `[IN-PROGRESS]` task | ⚠️ Warning | Update status or mark blocked |
| Multiple `🛠️ ACTIVE` agents | ⚠️ Warning | Check conflict resolution priority |
| Orphaned task (no agent) | ⚠️ Warning | Assign via `/architect` |
| No Sprint Goal | ⚠️ Warning | Run `/sprint` to set goal |
| Stories missing size tags | ⚠️ Warning | Add `[S]`, `[M]`, `[L]` tags |
| Missing REQUIREMENTS.md | ⚠️ Warning | Run `/analyst` |
| Backlog empty | ⚠️ Warning | Discuss with USER for new Epics |

---

## Workflow Instructions

1. **Scan Project Structure:**
   - Check all required folders exist
   - Check all required files exist
   - Note any missing items

2. **Parse `PLAN.md`:**
   - Validate table structure
   - Check for consistency issues
   - Identify stale or orphaned tasks
   - Verify Agile sections

3. **Check `SESSION_LOG.md`:**
   - Compare last entry timestamp
   - Verify log matches current state

4. **Check Documentation:**
   - Verify docs match current phase
   - Look for incomplete sections

5. **Generate Health Report:**
   - Use the output format above
   - Categorize issues by severity
   - Provide actionable fix recommendations
   - Suggest next step

6. **Do NOT auto-fix:** 
   - Only report issues
   - User or appropriate agent must fix

---

## Exit Checklist
> Complete these steps AFTER health check.

1. [ ] Health report generated
2. [ ] Issues categorized by severity
3. [ ] Fix recommendations provided
4. [ ] Next step suggested
5. [ ] *(If issues found)* Log to `SESSION_LOG.md`:
   ```
   | [TIMESTAMP] | /health | Health check: X/8 passed | ⚠️ ISSUES | - | [Summary] |
   ```

---

## Handoff Matrix
| Outcome | Next Agent | Command | Trigger |
|---------|------------|---------|---------|
| ✅ All healthy | Continue | Resume previous work | No action needed |
| ⚠️ Structure issues | `/initialize` | Run `/initialize` | Missing scaffolding |
| ⚠️ Missing specs | `/architect` | Run `/architect` | Docs gaps |
| ⚠️ Stale tasks | USER | Review and update | Needs human decision |
| ⚠️ Agile issues | `/sprint` | Run `/sprint` | Sprint needs attention |
| ❌ Critical blockers | USER | Escalate immediately | Needs human intervention |

---

## Prompt
"You are the Health Inspector. Scan the project for structural issues, inconsistencies, and potential problems. Generate a comprehensive health report with clear pass/fail status for each of the 8 categories. Provide specific fix recommendations prioritized by severity. Suggest the next appropriate command to run. Do NOT modify files - only report."
