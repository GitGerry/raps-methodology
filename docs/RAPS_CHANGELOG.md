# 📜 RAPS Methodology Changelog

## [3.3.0] - 2026-01-21

### Sprint 1: Foundation Improvements

#### P0: Critical Fixes
- **`security-toolkit`:** Expanded from 34→170 lines
  - Added OWASP Top 10 checklist (A01-A10)
  - Added attack methodology with test matrix
  - Added vulnerability report template
  - Added CVE scanning protocol with severity thresholds
- **`sync-raps`:** Expanded from 28→105 lines
  - Added conflict detection and resolution procedures
  - Added rollback procedures
  - Added sync direction guidance (Brain↔Repo)

#### P1: High Priority Enhancements
- **Agile Integration:** Wired `agile-toolkit` into core persona Entry Checklists
  - `/build` now loads DoD checklist (Section 2)
  - `/design` now loads DoD checklist (Section 2)
  - `/test` now loads DoD checklist (Section 2)
- **`SKILL_TEMPLATE.md`:** Created gold standard template for new skills
  - Includes anti-hallucination protocol structure
  - Includes "How to Verify" section requirement
  - Includes authoring guidelines in comments

### Sprint 2: Features

#### P2: New Skills & Integrations
- **`review-toolkit`:** New skill (125 lines) for code review standards
  - PR checklist with weighted scoring
  - Severity levels (Critical/Major/Minor/Nit)
  - Merge criteria and self-review protocol
- **`release-toolkit`:** New skill (185 lines) for release management
  - SemVer protocol with decision tree
  - Changelog generation format
  - Git tagging, rollback, and hotfix procedures
- **Context7 Integration:** Added to `research-toolkit` tool inventory
  - Priority 1 for library/framework documentation
  - Updated priority logic (now 5 levels)
- **`docs/DIAGRAM_STANDARDS.md`:** Mermaid diagram conventions
  - Quoting rules, node naming standards
  - Type-by-use-case matrix
  - Anti-patterns documentation

### Sprint 3: Cleanup

#### P3: Technical Debt
- **Handoff Skill Decision:** Kept `handoff` skill (307 lines) as it provides detailed templates for HANDOFF_NOTES.md generation, complementing 4-column workflow matrices
- **Deprecated /research References:** Fixed 6 files
  - `README.md`, `workflows/README.md` - clarified `/data/research/` path
  - `project-scaffolding` - removed /research persona from handoff
  - `set_status.ps1` - removed from ValidateSet
  - `memory-update` - updated to reference research-toolkit
  - `estimate` - removed from persona table

### Backlog Completion

- **`docs/SKILL_GRAPH.md`:** Created skill dependency visualization
  - Mermaid flowcharts for workflow→skill mapping
  - Skill categories (Persona/Supporting/Utility)
  - Cross-skill dependency diagram
- **`skills/README.md`:** Updated with new skills
  - Added review-toolkit and release-toolkit to Supporting Toolkits
  - Added SKILL_TEMPLATE.md and SKILL_GRAPH.md references
  - Updated "Adding New Skills" instructions

---

## [3.2.0] - 2026-01-21

### Architecture
- **Thin Workflow Pattern:** Refactored `/analyst` from 201 lines to 110 lines
  - Workflow now acts as orchestrator only
  - All phase execution logic delegated to `analyst-toolkit/SKILL.md`
  - Added phase table mapping workflow phases to skill sections

### Added
- 4-column Handoff Matrix with Trigger column
- Architect rejection handling in Handoff Matrix
- `.raps/MEMORY.md` seeding in Exit Checklist
- Iteration guard (max 3 loopback cycles)
- Bidirectional references between workflow and skill

### Changed
- Entry Checklist reduced to 7 items (from 8)
- Quality Gate simplified with clearer binary checks

### /raps-improve Refactor
- Applied thin workflow pattern (130→110 lines)
- Created new `skills/standards-toolkit/` with 7-phase execution logic
- Added Expert Heuristic questions to each phase
- Added recursive dependency audit protocol

### All Personas Hardened to S+ Standard
Thin workflow pattern applied to all 9 personas:

| Persona | Before | After | Key Improvements |
|---------|--------|-------|------------------|
| `/analyst` | 201 | 110 | Phase table, 4-col handoff, MEMORY seeding |
| `/raps-improve` | 130 | 110 | New standards-toolkit skill |
| `/security` | 94 | 108 | Full S+ structure, 6-phase table |
| `/ux` | 105 | 115 | Prohibitions, 6-phase table |
| `/deploy` | 232 | 125 | Thin pattern, removed inline logic |
| `/test` | 162 | 115 | 6-phase table, flaky test handling |
| `/design` | 203 | 115 | Thin pattern, 6-phase table |
| `/build` | 226 | 125 | Thin pattern, 6-rule anti-hallucination |
| `/initialize` | 134 | 110 | 5-rule anti-hallucination, prohibitions |

### Skills Folder Cleanup
- **Created:** `design-toolkit` (was missing, breaking `/design` workflow)
- **Deleted:** `update-dashboard` (deprecated - dashboard removed in v2.3.2)
- **Deleted:** `raps-integrity` (overlaps with `standards-toolkit`)
- **Merged:** `sprint-plan` → `agile-toolkit` (now includes DoR, DoD, story points)
- **Updated:** `skills/README.md` with clear categories (Persona/Supporting/Utility)
- **Net change:** 27 → 25 skills

### Skills Integrity Audit
- **Fixed:** `/retro` broken anchor (#3 → #7-sprint-retrospective)
- **Added:** Velocity tracking section to `agile-toolkit`
- **Audited:** All 25 skills for content quality and workflow integration
- **Identified:** `security-toolkit` needs expansion (34 lines, sparse)

> Governance log for the evolution of the RAPS Framework.

| 2026-01-21 21:57 | v3.1.6 | **Standardization** | auto | User |
| 2026-01-21 21:13 | v3.1.5 | **Consolidation** | **Template Consolidation**: Merged root `/templates/` (8 files) into `project-scaffolding/templates/` (now 20 files). Removed 5 duplicates, moved 3 unique methodology templates. Single source of truth for templates. | User |
| 2026-01-21 21:07 | v3.1.4 | **Governance** | **Document Governance Audit**: Fixed 4 workflows (`deploy`, `ux`, `analyst`, `security`), removed legacy Prompt sections, fixed deprecated `/research` refs, added `deploy-toolkit/templates/DEPLOYMENT_RUNBOOK.md`. | User |
| 2026-01-21 20:55 | v3.1.3 | **Maintenance** | **Documentation Alignment**: Fixed 5 formatting bugs in `workflows/README.md`, removed stale `/research` persona from `PLAN.md`, created `CHARTER.md` template, corrected persona count to "Nine". | User |
| 2026-01-18 21:36 | v3.1.2 | **Standardization** | Hardened workflows/build, design, test to v3.2 (Deep Schema Audit + Lead Protocols) | User |
| 2026-01-18 20:46 | v3.1.1 | **Feature** | **Hardening Agent**: Released `/raps-improve` workflow to automate v3.1 standards upgrades. | User |
| 2026-01-18 19:54 | v3.0.3 | **Standardization** | v3.1 Build Persona Hardening | User |
| 2026-01-18 19:51 | v3.0.2 | **Standardization** | Release v3.1.0: Build Persona Hardening & Toolkit Integration | User |
| 2026-01-18 19:30 | v3.0.1 | **Standardization** | Release v3.0.0: The Enterprise Excellence Release | User |
| 2026-01-18 19:30 | v3.0.0 | **Release** | **The Enterprise Excellence Release**: Hardened Analyst/Architect logic bridges, Intelligence Engine (Exa/Tavily), Governance Standardization, and Automated Sync. | User |
| 2026-01-18 17:45 | v2.7 | **Standardization** | **Intelligence Engine Hardening**: Transformed `research-toolkit` into a structured evidence engine, reassigned to Analyst, and purged all ghost persona references. | User |
| 2026-01-18 15:50 | v2.6 | **Standardization** | **Clean Mirror**: Implemented "Mirror Mode" in `sync_raps` (destructive sync), deprecated `/research` persona, standardized all artifacts with Templates, and removed 12+ shelfware files. | User |
| 2026-01-18 15:00 | v2.5 | **Governance** | **Rigor Upgrade**: Enforced Anti-Hallucination headers, mandated `MEMORY.md`, removed Project Tiers (Standardized on Enterprise), and implemented 5-Vector Discovery Protocol. | User |
| 2026-01-18 12:15 | v2.4 | **Simplification** | Removed Dashboard application (`/dashboard`) and all related tooling. RAPS now focuses purely on files and CLI. | User |
| 2026-01-18 12:05 | v2.3.2 | **Deprecation** | Removed deprecated `/research` persona references. Research is now exclusively a Skill Toolkit used by Analyst/Architect. | User |
| 2026-01-18 11:45 | v2.3.1 | **Maintenance** | Resolved 15+ integrity issues (Dead Links, Orphans, Deprecated Terms). Standardized `sync-raps` and `move-replays` workflows. | User |
| 2026-01-18 11:35 | v2.3 | **Integrity** | Implemented Holistic Integrity Scanner (v2.0). Added Persona Consistency, Content Drift, Dashboard Command checks. Expanded Ghost Change scope. | User |
| 2026-01-18 10:15 | v2.2 | **Refactor** | Renamed `/update-raps` to `/sync-raps` to clarify single responsibility. Removed Integrity/Health logic from transport layer. | User |
| 2026-01-16 19:17 | v2.1.2| **Cleanup** | Removed legacy dashboard references from documentation. | User |
| 2026-01-16 07:36 | v2.1.1| **Feature** | Added comprehensive Skill Toolkits (compliance, debug, doc-gen) and templates. | User |
| 2026-01-15 22:12 | v2.1 | **Release** | RAPS Methodology v2.1 Initial Release. | User |

---

## ðŸ“ Detailed Release Notes

### v3.0.0: The Enterprise Excellence Release
**Date:** 2026-01-18 19:30
**Author:** User

**Why This Change?**
To achieve "Enterprise Grade" precision, we had to bridge the logic gap between requirements (Analyst) and implementation (Architect). RAPS v3.0.0 introduces formal **Visual Bridges** (ERDs, Decision Trees, RBAC) and hardens the research loop to prevent hallucination-driven development.

**What Changed?**
- **Analyst Lane Hardening**: 
  - Integrated **Exa**, **Tavily**, and **BuiltWith** into the Discovery Loop.
  - Mandated **Visual Bridges** (Logical ERDs, Decision Logic Trees, RBAC Matrices) in `/docs/diagrams/`.
  - Hardened the "Warm Handoff" protocol with defined Context-First Briefings.
- **Architect Lane Hardening**:
  - Implemented the **"Golden Thread Audit"** in the Quality Gate for total traceability to `(Ref: RS-####)`.
  - Standardized technical artifacts (`SPECS.md`, `ADR.md`) with explicit link requirements.
- **Governance & Automation**:
  - **Automated Sync**: Rewrote `sync_raps.ps1` for robust environment handling and auto-logging.
  - **Shared Ownership**: Formally codified `PLAN.md` and `SESSION_LOG.md` as collaborative/writeable by all active personas.
  - **Root Governance**: Standardized root-level `RAID_LOG.md` and `DECISION_LOG.md` indices.

### v2.7: Research Toolkit Hardening (The Intelligence Engine)
**Date:** 2026-01-18 17:45
**Author:** User

**Why This Change?**
The "Researcher" persona was a legacy ghostâ€”cited in docs but missing a workflow. Furthermore, research was often unstructured and prone to hallucination. v2.7 formally integrates research into the **Analyst** lane and enforces strict evidence standards.

**What Changed?**
-   **Intelligence Engine:** Rebranded `research-toolkit` as "The Intelligence Engine".
-   **Analyst Alignment:** Updated `analyst.md` and `docs/` to reflect that the Analyst drives research using the toolkit.
-   **Strict Evidence Rules:** Implemented a "Multi-Source Rule" (Min 3 sources for high-impact claims) and â­ quality ratings.
-   **New Templates:**
    -   `RSRCH_EVIDENCE_LOG.md` (Raw source tracking).
    -   `RSRCH_SYNTHESIS.md` (Intelligence handoff for BA/PM/Arch phases).
-   **Ghost Purge:** Removed all remaining "Researcher" persona references from `ARTIFACTS.md` and `RAPS_OVERVIEW.md`.

### v2.6: The "Clean Mirror" & Template Standardization
**Date:** 2026-01-18 15:50
**Author:** User

**Why This Change?**
To achieve "True GitOps" for the methodology, the local Brain must act as an exact mirror of the remote repository. Previous syncs were additive, leaving behind "Ghost Files" (deleted workflows/skills that persisted locally). Additionally, we found that key artifacts (`MEMORY.md`, `SESSION_LOG.md`) were being inconsistent generated from inline code rather than authoritative templates.

**What Changed?**
-   **Mirror Mode:** Updated `scripts/sync_raps.ps1` to detect and **DELETE** files in the Destination (Brain) that do not exist in the Source (Repo).
-   **Template Standardization:**
    -   Created `MEMORY_TEMPLATE.md`, `SESSION_LOG_TEMPLATE.md`, and `HANDOFF_NOTES_TEMPLATE.md`.
    -   Updated `initialize.md` and `project-scaffolding` skills to use these templates exclusively.
-   **Researcher Deprecation:**
    -   Removed the "Zombie" `/research` persona from `PLAN_TEMPLATE.md` and `initialize.md`.
    -   Clarified that Research is a toolkit used by the **Analyst**.
-   **Shelfware Cleanup:**
    -   Deleted 12+ obsolete files including `skills/compliance-check`, `skills/estimate`, and `workflows/research.md`.

### v2.5: The Governance & Rigor Update
**Date:** 2026-01-18 15:00
**Author:** User

**Why This Change?**
RAPS projects were suffering from "Agent Drift" (hallucinations) and inconsistent scaffolding (Protoypes vs Enterprise). v2.5 establishes strict "guardrails" to force AI agents to act with Senior Engineering discipline rather than unchecked enthusiasm.

**What Changed?**
-   **Anti-Hallucination Protocol:** Injected strict headers into **all 7 workflows** preventing agents from assuming file existence or inventing versions.
-   **Memory Mandate:** `MEMORY.md` is now **Required** for all projects to prevent context loss.
-   **Tier Abolition:** Removed "Project Tiers". All projects now default to **Enterprise Standard**.
-   **Discovery Protocol:** Replaced generic "/initialize" questioning with a **5-Vector Protocol** (Goal, User, Anti-Goal, Metric, Constraint).
-   **Enterprise Scaffolding:** `initialize` now auto-generates `.tool-versions` (Deterministic Runtime), `CONTRIBUTING.md`, and `check_integrity.ps1`.

### v2.4: Dashboard Removal (Simplification)
**Date:** 2026-01-18 12:15
**Author:** User

**Why This Change?**
The Dashboard application (Vite app) introduced unnecessary complexity and confusion for AI agents ("another place to look"). RAPS v2.4 returns to its core philosophy: **Everything as Code (Files)**. Status is driven by `PLAN.md` and CLI tools, not a separate web UI.

**What Changed?**
-   **Deleted:** `dashboard/` directory.
-   **Deleted:** `skills/update-dashboard/` toolkit.
-   **Deleted:** `skills/project-scaffolding/scripts/register-project.js`.
-   **Updated:** `scripts/check_integrity.ps1` removed content drift and dashboard integrity checks.
-   **Updated:** All documentation stripped of "View Dashboard" instructions.

### v2.3.2: Deprecation of Research Persona
**Date:** 2026-01-18 12:05
**Author:** User

**Why This Change?**
The `/research` persona was creating confusion. Research is a **capability** (Skill) used by Architects and Analysts, not a standalone agent that sits in a silo. By converting it to a Toolkit, we encourage "Research-Driven Development" across all planning personas.

**What Changed?**
-   **Deleted:** `workflows/research.md` (The Persona definition).
-   **Updated:** `workflows/README.md` removed from "The Nine Personas" and flow diagrams.
-   **Updated:** `templates/PLAN_TEMPLATE.md` removed from Squad Status table.
-   **Refactored:** 
    -   `skills/research-toolkit/SKILL.md` removed "Researcher" role assignment.
    -   `skills/sprint-plan/SKILL.md` genericized "Research tasks".
    -   `workflows/analyst.md` clarified usage of `research-toolkit` skill instead of handoffs.

### v2.3.1: Maintenance & Integrity Clean Sweep
**Date:** 2026-01-18 11:45
**Author:** User

**Why This Change?**
The newly upgraded Integrity Scanner (v2.0) flagged 15+ integrity violations, including broken links, orphaned workflows, and deprecated terms. To trust the scanner as a gatekeeper, we needed to reach a "Clean State" where valid code isn't flagged.

**What Changed?**
-   **Orphan Resolution:**
    -   Created `workflows/move-replays.md` to document the previously unreferenced utility workflow.
    -   Created `skills/sync-raps/SKILL.md` to properly document the synchronization logic, replacing the missing `update-raps` reference.
    -   Linked these new documents in `workflows/README.md` and `skills/README.md`.
-   **Link Hygiene:**
    -   Corrected relative paths in `workflows/analyst.md`, `workflows/security.md`, and `workflows/README.md` (changed `skills/` references to `../skills/`).
    -   Escaped example code blocks in `skills/raps-integrity/SKILL.md` (e.g., `\[Link]`) to prevent them from being detected as dead links.
-   **Deprecated Terms:**
    -   Removed legacy references to `/health` and `/status` in `compliance-check/SKILL.md` and `raps-integrity/SKILL.md`, replacing them with the standard `/raps-status`.

### v2.3: Holistic Integrity Scanner (v2.0)
**Date:** 2026-01-18 11:35
**Author:** User

**Why This Change?**
The previous integrity checks were fragmented (scattered across `update-raps` and manual checks) and failed to detect "Ghost Changes"â€”code modifications that weren't logged in the changelog. We needed a centralized, authoritative tool to enforce **Atomic Governance**.

**What Changed?**
-   **New Script:** `scripts/check_integrity.ps1` was heavily refactored to v2.0.
-   **New Capabilities:**
    -   **Persona Consistency:** Verifies that personas defined in `personas.js` exist in `README.md` and have corresponding workflows.
    -   **Content Drift:** Detects desynchronization between `PLAN.md` milestones and `SESSION_LOG.md`.
    -   **Dashboard Integrity:** Scans the React dashboard codebase to ensure buttons trigger valid RAPS commands.
    -   **Advanced Ghost Change Detection:** Now recursively scans `scripts/`, `workflows/`, `templates/`, and `dashboard/src/` for unlogged modifications.
-   **Logic Fixes:**
    -   Excluded `node_modules` and `templates` from scanning to improve performance and accuracy.

### v2.2: Sync vs. Audit Separation
**Date:** 2026-01-18 10:15
**Author:** User

**Why This Change?**
The `/update-raps` workflow combined two distinct responsibilities: "Transport" (copying files) and "Validation" (checking integrity). This violated the Single Responsibility Principle and made it hard to run integrity checks without triggering a sync.

**What Changed?**
-   **Renaming:** Renamed the transport mechanism to `/sync-raps` (`scripts/sync_raps.ps1`).
-   **Decoupling:** Stripped the integrity checking logic out of the sync script. Integrity is now solely the domain of `/raps-integrity` (`scripts/check_integrity.ps1`).
-   **Documentation:** Updated `skills/README.md` to reflect the new separation of concerns.
