---
description: Unified Dashboard for Project Status and RAPS Health Integrity.
---

# /raps-status - Mission Control

## Context
This workflow combines **Project Status Reporting** (Progress/Roadmap) with **RAPS System Integrity** (Health Checks).
Use this to get an instant snapshot of "Where we are" and "Is the system broken?".

## 1. 🔍 System Integrity Check (The "Health" Pass)
> Verify the RAPS engine is running cleanly.

### A. Environment Scan
- [ ] **Ledger:** `PLAN.md` exists and is readable?
- [ ] **Memory:** `.raps/MEMORY.md` exists?
- [ ] **Docs:** `/docs` folder structure exists?
- [ ] **Logs:** `SESSION_LOG.md` is active?

### B. Git Hygiene
- [ ] No `index.lock` errors?
- [ ] Working tree clean? (Run `git status`).

### C. Persona Check
- [ ] Are active personas logged in `PLAN.md` (Squad Status)?
- [ ] Is there a clear "Next Step" assigned?

**🚨 IF FAILED:** Stop and fix the integrity issue (e.g., Run `/initialize` to repair).

---

## 2. 📊 Project Status Report (The "Progress" Pass)
> Report on the actual work being done.

### A. Squad Status (Who is doing what?)
1.  **Read `PLAN.md` Section 3 (Squad Status).**
2.  Report currently `🛠️ ACTIVE` agents.
3.  identify any `🚨 BLOCKED` agents.

### B. Task Roadmap
1.  **Read `PLAN.md` Section 4 (Current Sprint).**
2.  List items marked `[IN-PROGRESS]`.
3.  List items `[DONE - Awaiting Test]`.
4.  **Calculate Velocity:** Are we stuck on one task too long?

### C. Recent Activity
1.  **Read `SESSION_LOG.md` (Last 5 entries).**
2.  Summarize the last major action taken.

---

## 3. Output Format
Generate a summary block:

```markdown
# 🟢 RAPS STATUS REPORT: [Date]

## ❤️ Health: [PASS/FAIL]
- Key files present.
- Git clean.

## 🚀 Velocity
- **Active Persona:** [/analyst]
- **Current Task:** [Task Name]
- **Blockers:** [None]

## 📋 Next Action
- [ ] [The explicit next step from PLAN.md]
```
