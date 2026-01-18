# 🚀 RAPS Framework v2.1

> **R**equirements • **A**rchitecture • **P**roduction • **S**hipping

A structured methodology for AI-assisted software development with clear handoffs, audit trails, and quality gates.

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Quick Start](#-quick-start)
- [The Ten Personas](#-the-ten-personas)
- [Utility Workflows](#-utility-workflows)

- [Core Artifacts](#-core-artifacts)
- [Feature Reference](#-feature-reference)
- [Workflow Commands](#-workflow-commands)
- [Best Practices](#-best-practices)

---

## 🎯 Overview

RAPS is a **persona-based development framework** where each AI agent has a specific role, **powered by a dedicated Skill Toolkit**, lane restrictions, and explicit handoff protocols. This ensures:

| Benefit | How |
|---------|-----|
| **Traceability** | Every action logged to `SESSION_LOG.md` |
| **Clear Handoffs** | Explicit "next agent" recommendations |
| **Quality Gates** | Checklists before any handoff |
| **Context Preservation** | Notes passed via `HANDOFF_NOTES.md` |
| **Conflict Resolution** | Priority order when multiple agents active |

### The Complete RAPS Development Flow

```
                              ┌─────────────────────────────────────────────────────────────────────┐
                              │                        RAPS DEVELOPMENT FLOW                        │
                              └─────────────────────────────────────────────────────────────────────┘

  ╔═══════════════════════════════════════════════════════════════════════════════════════════════════╗
  ║                                        PLANNING PHASE                                              ║
  ╚═══════════════════════════════════════════════════════════════════════════════════════════════════╝
  
       /initialize          /analyst              /architect
    ┌─────────┐          ┌─────────────┐        ┌─────────────┐
    │ 🏗️ Setup │────────▶│ 📋 Stories  │───────▶│ 📐 Specs    │
    │ PLAN.md │          │ & Research  │        │ Tech Design │
    └─────────┘          └─────────────┘        └──────┬──────┘
                                                                              │
  ════════════════════════════════════════════════════════════════════════════╧════════════════════════
  
  ╔═══════════════════════════════════════════════════════════════════════════════════════════════════╗
  ║                                        BUILDING PHASE                                              ║
  ╚═══════════════════════════════════════════════════════════════════════════════════════════════════╝
  
                                    ┌─────────────┐
                           ┌───────▶│ 💻 /build   │───────┐
                           │        │ Backend API │       │
           ────────────────┤        └─────────────┘       ├──────────────▶
                           │        ┌─────────────┐       │
                           └───────▶│ 🎨 /design  │───────┘
                                    │ Frontend UI │
                                    └─────────────┘
                                    
  ════════════════════════════════════════════════════════════════════════════════════════════════════
  
  ╔═══════════════════════════════════════════════════════════════════════════════════════════════════╗
  ║                                        QUALITY PHASE                                               ║
  ╚═══════════════════════════════════════════════════════════════════════════════════════════════════╝
  
       /review               /test                /security              /ux
    ┌─────────────┐      ┌─────────────┐      ┌─────────────┐      ┌─────────────┐
    │ 👀 Code     │─────▶│ 🧪 QA +     │─────▶│ 🔒 Vuln     │─────▶│ 🎭 User     │
    │ Review      │      │ Performance │      │ Scanning    │      │ Acceptance  │
    └─────────────┘      └──────┬──────┘      └──────┬──────┘      └──────┬──────┘
                                │                    │                    │
                                │  ┌─────────────────┴────────────────────┘
                                │  │
                                ▼  ▼
                         ┌─────────────────────┐
                         │   ISSUE FOUND?      │
                         └──────────┬──────────┘
                                    │
                    ┌───────────────┼───────────────┐
                    │               │               │
                    ▼               ▼               ▼
             🔴 CRITICAL      🟡 MEDIUM        🟢 LOW
             ┌─────────┐    ┌─────────────┐   ┌─────────────┐
             │ FIX NOW │    │ Document as │   │ Add to v1.1 │
             │(loop)   │    │ known issue │   │ backlog     │
             └────┬────┘    └──────┬──────┘   └──────┬──────┘
                  │                │                 │
                  ▼                └────────┬────────┘
            Back to                         │
            /build or                       ▼
            /design                    PROCEED
                    
  ════════════════════════════════════════════════════════════════════════════════════════════════════
  
  ╔═══════════════════════════════════════════════════════════════════════════════════════════════════╗
  ║                                     🚦 RELEASE GATES                                               ║
  ╚═══════════════════════════════════════════════════════════════════════════════════════════════════╝
  
    Run `/release` before deployment:
    
    ┌──────────────┬──────────────┬──────────────┬──────────────┬──────────────┬──────────────┐
    │ Gate 1       │ Gate 2       │ Gate 3       │ Gate 4       │ Gate 5       │ Gate 6       │
    ├──────────────┼──────────────┼──────────────┼──────────────┼──────────────┼──────────────┤
    │ ✅ Feature   │ ✅ Code      │ ✅ Test      │ ✅ Security  │ ✅ UAT       │ ✅ Go-Live   │
    │ Complete     │ Complete     │ Complete     │ Cleared      │ Approved     │              │
    ├──────────────┼──────────────┼──────────────┼──────────────┼──────────────┼──────────────┤
    │ /architect   │ /build       │ /test        │ /security    │ /ux          │ /deploy      │
    └──────┬───────┴──────┬───────┴──────┬───────┴──────┬───────┴──────┬───────┴──────┬───────┘
           │              │              │              │              │              │
           └──────────────┴──────────────┴──────────────┴──────────────┴──────────────┘
                                                  │
                                                  ▼
  ════════════════════════════════════════════════════════════════════════════════════════════════════
  
  ╔═══════════════════════════════════════════════════════════════════════════════════════════════════╗
  ║                                        RELEASE PHASE                                               ║
  ╚═══════════════════════════════════════════════════════════════════════════════════════════════════╝
  
                                          /deploy
                                       ┌─────────────┐
                                       │ 🚀 Deploy   │────────▶  ✅ DONE!
                                       │ Production  │           v1.0 SHIPPED
                                       └─────────────┘
```

---

## ⚡ Quick Start

### 1. Initialize a New Project
```
/initialize
```
This scaffolds folders, creates `PLAN.md`, and sets up tracking files.

### 2. Check Project Status Anytime
```
/raps-status
```
Shows current active agent, task, blockers, project health, and next recommended action.

### 3. Follow the Flow
After `/initialize`, the workflow will guide you:
- `/analyst` → gather requirements & research
- `/architect` → write specs
- `/build` → implement backend
- `/design` → implement UI
- `/test` → verify technical QA
- `/ux` → validate usability



### 5. Understand the Agile Workflow
RAPS uses an **Agile-first** approach with Epics, Stories, and Sprints:
- **Epics** = Large feature sets (1-3 Sprints)
- **Stories** = User-value units (1-3 days), must pass INVEST criteria
- **Tasks** = Technical steps (<1 day)

See the [Sprint Planning Skill](skills/sprint-plan/SKILL.md) for sprint planning, and check the [Skills README](skills/README.md) for all available toolkits.

---

## 👥 The Nine Personas

### 🏗️ /initialize - The Founder
**Mission:** Initialize project structure (powered by **Project Scaffolding Skill**)

| Aspect | Details |
|--------|---------|
| **Command** | `/initialize` |
| **Lane** | **Root Scaffolding**, `PLAN.md`, `.editorconfig`, `.gitignore`, `check_integrity.ps1` |
| **Outputs** | Folder structure, `PLAN.md`, `SESSION_LOG.md`, `HANDOFF_NOTES.md` |
| **Hands off to** | `/analyst` or `/architect` |

**When to use:**
- Starting a new project
- Resetting a project from scratch

---

### 📋 /analyst - The Requirements Specialist
**Mission:** Translate business requirements into structured stories (powered by **Analyst & Research Toolkits**)

| Aspect | Details |
|--------|--------|
| **Command** | `/analyst` |
| **Lane** | **Owner:** `/docs/business/`, `/docs/product/`, `/docs/functional/`, `/docs/diagrams/`, `/research/` |
| **Outputs** | `BRD_BUSINESS_RULES.md`, `UX_BENCHMARKS.md`, `FRD_USER_STORIES.md`, `FRD_FUNCTIONAL_REQUIREMENTS.md`, `logical_erd.mmd` |
| **Hands off to** | `/architect` |

**When to use:**
- Complex requirements need clarification
- Researching API feasibility or competitors
- User stories and acceptance criteria needed

**Key Outputs:**
- Functional & non-functional requirements
- User stories with acceptance criteria
- Out of scope documentation
- Open questions list

**Prohibitions:**
- ❌ No technical specs (that's architect)
- ❌ No code
- ❌ No assumptions without documenting

---

### 📐 /architect - The System Designer
**Mission:** Convert requirements into executable specifications (powered by **Architecture Toolkit Skill**)

| Aspect | Details |
|--------|---------|
| **Command** | `/architect` |
| **Lane** | **Owner:** `/docs/technical/`, `/docs/api/`, `/docs/decisions/`, `DECISION_LOG.md`, `PLAN.md` (Backlog), `/types`, `/schemas` |
| **Outputs** | `/docs/technical/SPECS.md`, `/docs/technical/SDD.md`, `/docs/decisions/ADR-###.md`, `DECISION_LOG.md` |
| **Hands off to** | `/build` or `/design` |

**When to use:**
- Need technical specifications
- Promoting tasks from backlog
- Clarifying requirements

**Special Feature - AI-Generated Specs:**
```
/architect --auto
```
Generates a draft spec from `/research` files. Human review required!

**Prohibitions:**
- ❌ No production code
- ❌ No visual design decisions

---

### ⚙️ /build - The Lead Developer
**Mission:** Implement backend logic and APIs

| Aspect | Details |
|--------|---------|
| **Command** | `/build` |
| **Lane** | **Owner:** `/backend`, `/api`, `/lib`, `/db` (Migrations), `/services`, `/utils`, `/scripts`, `/models`, `server config` |
| **Outputs** | Backend code, API endpoints, Database schemas, Utility scripts |
| **Hands off to** | `/review` (suggested) or `/test` or `/design` |

**When to use:**
- Implementing server-side logic
- Creating API endpoints
- Writing utility functions

**Prohibitions:**
- ❌ No CSS/UI work
- ❌ No spec changes (escalate to `/architect`)

---

### 🎨 /design - The Design Lead
**Mission:** Implement visual layer and user interaction

| Aspect | Details |
|--------|---------|
| **Command** | `/design` |
| **Lane** | **Owner:** `/frontend`, `/components`, `/style`, `/public`, `/assets`, `/hooks`, `/layouts`, `/stores`, `tailwind config` |
| **Outputs** | UI components, styling, frontend code, assets |
| **Hands off to** | `/test` |

**When to use:**
- Building UI components
- Styling and CSS work
- Frontend functionality

**Tip:** If backend isn't ready, use mock data and continue!

**Prohibitions:**
- ❌ No backend logic modifications

---

### 🧪 /test - The QA Engineer
**Mission:** Verify implementations match specifications (powered by **QA Toolkit Skill**)

| Aspect | Details |
|--------|---------|
| **Command** | `/test` |
| **Lane** | **Owner:** `/tests`, `/e2e`, `/mocks`, `jest.config.js`, `playwright.config.ts` |
| **Outputs** | Test reports, coverage reports |
| **Hands off to** | ✅ Done (pass) or `/build`/`/design` (fail) |

**When to use:**
- Task marked `[READY FOR TEST]`
- Final verification before closing

**Special Features:**
- **Auto-Archive:** Passed tasks move to Completed Archive
- **Test Coverage Report:** Documents what was tested vs. specs

**Prohibitions:**
- ❌ No code fixes (identify bugs; others fix them)
- ❌ No spec changes

---

### 🎭 /ux - The User Advocate
**Mission:** Validate usability and user experience (powered by **UX Toolkit Skill**)

| Aspect | Details |
|--------|---------|
| **Command** | `/ux` |
| **Lane** | **Read-only**, writes to `/docs/ux_feedback/` |
| **Outputs** | UAT reports, usability findings, accessibility audits |
| **Hands off to** | ✅ Done (pass) or `/analyst`/`/design` (issues found) |

**When to use:**
- After `/test` passes technical QA
- Need to validate real-world usability
- User acceptance testing required

**What it tests:**
- Can users complete their tasks intuitively?
- Are buttons/flows working as expected?
- Is the UI accessible and clear?
- Does it match user stories from requirements?

**Prohibitions:**
- ❌ No code fixes (identify UX issues; `/design` or `/build` fixes them)
- ❌ No design decisions that change scope

**Issue Severity Guide:**

| Severity | Definition | Example | Action |
|----------|------------|---------|--------|
| 🔴 **CRITICAL** | User CANNOT complete core task | Submit button doesn't work, Login fails, Data loss | **Fix before release** |
| 🟡 **MEDIUM** | User CAN complete but with friction | No loading indicator, Unclear error, Double-click issues | Ship with known issues |
| 🟢 **LOW** | Nice-to-have, cosmetic | Button styling off, Missing tooltip, No keyboard shortcut | Backlog for v1.1 |

**The Critical Test:** If there's NO alternative path to complete a MUST-HAVE feature, it's critical.

---

### 🔒 /security - The Security Auditor
**Mission:** Identify security vulnerabilities (powered by **Security Toolkit Skill**)

| Aspect | Details |
|--------|---------|
| **Command** | `/security` |
| **Lane** | **Read-only**, writes to `/docs/security/`, `SECURITY.md`, `.env.example` |
| **Outputs** | Security audit reports, vulnerability findings |
| **Hands off to** | `/deploy` (pass) or `/build` (issues found) |

**When to use:**
- After `/test` passes technical QA
- Before any production deployment
- When handling sensitive data (auth, payments, PII)

**What it checks:**
- OWASP Top 10 vulnerabilities
- Dependency vulnerabilities (npm audit)
- Hardcoded secrets
- Authentication/authorization flaws
- SQL injection, XSS, CSRF

**Prohibitions:**
- ❌ No code fixes (identify vulnerabilities; `/build` fixes them)
- ❌ No deployment approval if critical issues found

---

### 🚀 /deploy - The DevOps Engineer
**Mission:** Manage deployments, infrastructure, and monitoring

| Aspect | Details |
|--------|---------|
| **Command** | `/deploy` |
| **Lane** | **Owner:** `/infrastructure`, `/docker`, `/k8s`, `/terraform`, `.github/workflows`, `nginx.conf` |
| **Outputs** | Deployment runbooks, monitoring dashboards |
| **Hands off to** | ✅ Done (success) or `/build` (failure) |

**When to use:**
- After `/test`, `/security`, and `/ux` all pass
- Deploying to staging or production
- Setting up monitoring and alerts

**Responsibilities:**
- Deploy to staging/production
- Configure CI/CD pipelines
- Set up monitoring and alerting
- Handle rollbacks if issues occur
- Document deployment procedures

**Prohibitions:**
- ❌ No deployment of untested code
- ❌ No deployment with critical security vulnerabilities
- ❌ No direct production pushes (staging first)

---

## 🛠️ Utility Workflows

### 📊 /raps-status - Unified Dashboard
**Get an instant project snapshot and health validation.**

```
/raps-status
```

**What it does:**
1.  **Status Check**: Shows active agent, current task, and blockers.
2.  **Health Scan**: Validates folder structure and `PLAN.md` integrity.
3.  **Governance Check**: Ensures `CHARTER.md` freshness.

**Use anytime** to understand project state and health at a glance.

---

---

### 📝 /retro - Retrospective
**Capture lessons learned after milestones.**

```
/retro
```

**Creates documentation of:**
- Summary metrics
- **Governance Audit:** `CHARTER.md` (Scope) & `PLAN.md` (Decisions)
- What went well (wins)
- What could be improved
- Action items for next time
- Lessons learned

**When to use:**
- Project completed
- Major feature shipped
- Sprint/phase end
- After resolving major blockers

**Output:** `/docs/RETROSPECTIVE.md`

---

### 🚦 /release - Release Gates
**Determine when a version is ready for go-live.**

```
/release
```

> 🎯 Prevents endless iteration by defining **clear ship criteria**.

**The 6 Gates:**
| Gate | Owner | Key Question |
|------|-------|--------------|
| Feature Complete | `/architect` | All MUST-HAVEs implemented? |
| Code Complete | `/build` | No build errors, dependencies locked? |
| Test Complete | `/test` | No Critical/High bugs? |
| Security Cleared | `/security` | No critical vulnerabilities? |
| UAT Approved | `/ux` | Users accept (with known issues)? |
| Go-Live | `/deploy` | Deployment ready and safe? |

**Issue Handling:**
| Severity | Action |
|----------|--------|
| **Critical/High** | Must fix before release |
| **Medium/Low** | Document, ship, fix in next version |

**The Golden Rule:**
> Perfect is the enemy of good. Ship when MUST-HAVEs work and no critical bugs exist. Everything else is v1.1.

### 👀 /review - Code Review (Suggested)
**Quality check between build and test.**

```
/review
```

> ⚡ This is a **suggested step**, not required for every change.

**Review Checklist:**
| Category | Checks |
|----------|--------|
| Security | No secrets, input validation, auth |
| Code Quality | Docstrings, naming, DRY |
| Error Handling | Try/catch, descriptive messages |
| Architecture | Follows patterns, matches specs |
| Testability | Injectable dependencies |

**Outcomes:**
- ✅ **Approved** → Proceed to `/test`
- 🔄 **Changes Requested** → Back to `/build`

**When to use /review:**
- Complex new features
- Security-sensitive code (auth, payments)
- New patterns being introduced
- Critical production code

**When to skip:**
- Simple bug fixes
- Hotfixes/emergencies
- Trivial changes

---

### 📂 /move-replays - Replay Organizer
**Utility to organize downloaded game replays.**

```
/move-replays
```

**Use when:**
- Organzing downloaded .rec/.rep files
- Archiving game replays for analysis

---


## 📺 Visual Dashboard

A beautiful glassmorphism dashboard to visualize your project state!

### How to Access

**Option 1: Mission Control (Vite App)**
The modern dashboard is in the `/dashboard` folder. Clone the repo and run:
```bash
cd dashboard
npm install
npm run dev
```



### Dashboard Features

| Section | What It Shows |
|---------|---------------|
| **Current Focus** | Active task and agent |
| **Project Health** | Quick health indicator |
| **Squad Status** | All 6 personas with status badges |
| **Task Board** | Kanban-style view (Backlog → In Progress → Review → Done) |
| **Recent Activity** | Last 4 session log entries |
| **Quick Actions** | Buttons for `/raps-status`, `/retro` |

### Customizing the Dashboard

The dashboard is a static template. To reflect your actual project:

1. Open the RAPS Dashboard (Vite App)
2. Update the Squad Status badges
3. Update the Kanban items
4. Update the Activity list

**Future enhancement:** A script could auto-parse `PLAN.md` and `SESSION_LOG.md`!

---

## 📁 Core Artifacts

### PLAN.md - The Master Ledger
**The single source of truth for project state.**

```markdown
# 🗺️ MASTER LEDGER: [Project Name]

## 1. Project Overview
## 2. Squad Status (table with all agents)
## 3. Current Trajectory (active milestone)
## 4. Unified Task Backlog
## 5. Artifact Registry
## 6. Completed Archive
```

---

### CHARTER.md - Project Charter
**Scope, Vision, and Governance.**

- **Executive Summary** & Business Case
- **Scope Boundary** (In/Out)
- **Living Risk Register**
- **Change Control Log**

---

### /docs/decisions/ - Decision Log (ADRs)
**Architectural Decision Records.**

- Why we chose X over Y
- Alternatives considered
- Consequences of the decision

---

### SESSION_LOG.md - Audit Trail
**Every action logged with timestamp.**

```markdown
| Timestamp | Persona | Action | Status | Files | Notes |
|-----------|---------|--------|--------|-------|-------|
| 2026-01-14 15:30 | /build | Started auth API | 🛠️ ACTIVE | - | - |
| 2026-01-14 16:00 | /build | Completed auth API | ✅ DONE | /backend/auth.ts | Ready for test |
```

---

### HANDOFF_NOTES.md - Context Preservation
**Notes passed between personas.**

```markdown
## /research → /architect
Key findings...

## /architect → /build
Spec summary, important edge cases...

## /build → /test
What was built, how to test...
```

---

### /docs/SPECS.md - Specifications
**Detailed technical specs from `/architect`.**

Includes: Logic flow, data schema, edge cases, API contracts. (Managed via `architecture-toolkit`).
See also: `docs/technical/SDD.md`.

---

### /tests/COVERAGE_*.md - Test Coverage
**What was tested vs. what's in specs.**

Generated by `/test` on pass.

---

## 📋 Feature Reference

### Status Emojis
| Emoji | Status | Meaning |
|-------|--------|---------|
| 💤 | IDLE | No current assignment |
| 🛠️ | ACTIVE | Currently working |
| ⏳ | WAITING | Blocked on another |
| ✅ | DONE | Completed |
| ❌ | FAILED | Task failed |
| 🚨 | BLOCKED | Needs human input |
| 🔄 | CHANGES | Review requested changes |

### Priority Order
When multiple agents are active:
1. `/test` — Highest priority (unblock QA)
2. `/build` — Code blocks design
3. `/design` — UI blocks testing
4. `/architect` — Specs block build/design
5. `/analyst` — Requirements block specs
6. `/initialize` — Only at project start

### Task Tags
| Tag | Meaning |
|-----|--------|
| `[ANALYST]` | Assigned to /analyst |
| `[ARCHITECT]` | Assigned to /architect |
| `[BUILD]` | Assigned to /build |
| `[DESIGN]` | Assigned to /design |
| `[READY FOR TEST]` | Ready for /test |
| `[READY FOR REVIEW]` | Optional /review step |
| `[COMPLETED]` | Task done and archived |
| `[BLOCKED: reason]` | Cannot proceed |
| `[REJECTED: bug]` | Failed QA, needs fix |

---

## 🎮 Workflow Commands

### Starting a Project
```
/init
```

### Checking State
```
/raps-status     # Full status and health snapshot
```

### Main Workflows
```
/analyst         # Define requirements & Research
/architect       # Write specs
/architect --auto # AI-generated draft spec
/build           # Backend code
/design          # Frontend/UI
/review          # Code review (optional)
/test            # QA verification
```

### After Milestones
```
/retro           # Capture lessons
```

---

## ✨ Best Practices

### 1. Always Check RAPS Status First
```
/raps-status
```
Know where you are and verify system health before taking action.

### 3. Use Entry Checklists
Every workflow has an entry checklist. Complete it before starting.

### 4. Log Everything
`SESSION_LOG.md` is your audit trail. Don't skip logging.

### 5. Leave Context in Handoff Notes
The next persona shouldn't need to ask questions. Document decisions.

### 6. Use /review for Critical Code
Security, payments, auth — always review before test.

### 7. Run Retrospectives
After each milestone, capture what you learned with `/retro`.

### 8. Keep PLAN.md Clean
Use auto-archive. Move completed tasks out of the backlog.

---

## 🎉 You're Ready!

Start with `/init` for new projects, or `/raps-status` to check an existing one.

Happy coding! 🚀

---

*RAPS Framework v2.1 - Enhanced with Skills, Governance, and Lifecycle Management*
