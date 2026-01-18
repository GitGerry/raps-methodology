# ðŸ“œ RAPS Methodology Changelog

> Governance log for the evolution of the RAPS Framework.

| 2026-01-18 19:26 | v2.8 | **Standardization** | Final Verification: Restored config and verified execution | User |
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
