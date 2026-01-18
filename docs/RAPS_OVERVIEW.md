# 🌍 The RAPS Methodology: A Comprehensive Overview

> **"Everything is relevant. Each agent, each action, each interaction."**

This document serves as the **definitive encyclopedic guide** to the RAPS (Requirements, Architecture, Production, Shipping) framework. It goes beyond the high-level summary in the `README` to explain the *physics* of the RAPS universe: how data flows, how quality is enforced, and how agents interact to ship software.

---

## 🧭 1. Core Philosophy & Architecture

RAPS is not just a list of tasks; it is a **Persona-Based State Machine**.

### The "Brain" vs. The "Repo"
*   **The Repository (`/raps-methodology`)**: The "Code." It contains the static definitions of workflows, skills, and documentation.
*   **The Brain (`.gemini/antigravity`)**: The "Runtime." This is where the AI lives.
*   **Synchronization (`update-raps`)**: The heartbeat. A PowerShell script ensures that what the AI knows (Brain) is always identical to what is stored in version control (Repo).
    *   *Visual Timestamp Graph*: Determines "Truth" based on the latest modification.
    *   *Smart Sync*: Automatically resolves conflicts by trusting the newest file.
    *   *Unified Status (`raps-status`)**: A single dashboard workflow that combines project status checking with health validation.

### Lane Discipline
To prevent hallucination and context bleeding, RAPS enforces strictly isolated **Lanes**:
*   A `/build` agent cannot change `SPECS.md`.
*   A `/test` agent cannot fix the code it breaks.
*   An `/analyst` cannot write SQL.
*   *Why?* To force explicit **Handoffs**. You cannot fix a bug without understanding why it failed. You cannot write code without a spec.

---

## 📜 2. The Spine of Governance

Before any code is written, RAPS establishes a "Spine" of living documents that hold the project upright.

### `PLAN.md` - The Master Ledger
*   **Concept**: If it's not in `PLAN.md`, it doesn't exist.
*   **Structure**:
    *   *Squad Status*: Real-time state of every agent (e.g., `🛠️ ACTIVE`, `💤 IDLE`).
    *   *Task Backlog*: The unified queue of work.
    *   *Artifact Registry*: A dynamic list of every file generated.
*   **Interaction**: Every agent *reads* this file at startup (`/raps-status`) and *updates* it upon completion.

### `SESSION_LOG.md` - The Black Box
*   **Concept**: An immutable audit trail of every significant action.
*   **Granularity**: Every major tool call, every file created, every state change.
*   **Purpose**: Recovery. If the AI crashes, it re-reads the log to resume exactly where it left off.

---

## 🔄 3. End-to-End Workflow Drill-Down

### Phase 1: Inception (`/init`)
*   **Agent**: **The Founder**
*   **Trigger**: A blank folder or distinct new project Idea.
*   **Action**:
    1.  Checks for existing RAPS structure (`/raps-status` check).
    2.  Deploys the "Skeleton": `PLAN.md`, `CHARTER.md`, `README.md`.
    3.  Initializes the hidden `.agent` folder for brain storage.
*   **Critical Output**: A "Healthy" project structure ready for intake.

### Phase 2: Intelligence (`/analyst`, `/research`)
*   **Agents**: **The Analyst** & **The Researcher**
*   **Interaction Loop**:
    1.  **Analyst** identifies a vague requirement (e.g., "We need AI search").
    2.  **Analyst** triggers **Researcher** (`/research`) to find feasibility.
    3.  **Researcher** scrapes web/docs, creates `EVIDENCE_TABLE.md`, and returns `GAP_ANALYSIS.md`.
    4.  **Analyst** consumes this to write definitive `USER_STORIES.md` and `FRD.md`.
*   **Handoff**: `[READY FOR ARCHITECT]` tag in `PLAN.md`.

### Phase 3: Blueprinting (`/architect`)
*   **Agent**: **The Architect**
*   **Input**: `FRD.md`, `USER_STORIES.md`.
*   **Action**: Translates user desire (Stories) into engineering reality (Specs).
*   **The "Spec Lock"**:
    *   Defines Database Schema (SQL).
    *   Defines API Contracts (`ICD.md`).
    *   Writes `DECISION_LOG.md` (ADRs) for *why* choices were made.
*   **Critical Rule**: The Architect does not write implementation code. They write the *instruction manual* for the Builder.

### Phase 4: Construction (`/build`, `/design`)
*   **Agents**: **The Builder** (Backend) & **The Designer** (Frontend)
*   **Parallel Execution**: Because the Architect defined the API contract (`ICD.md`):
    *   **Builder** implements the real API.
    *   **Designer** mocks the API and builds the UI.
    *   *They do not need to wait for each other.*
*   **Constraint**: If they hit a logical blocker, they *must* stop and summon the **Architect** to update the Spec. They naturally cannot "wing it."

### Phase 5: The Triangle of Quality (`/test`, `/ux`, `/security`)
*   **Concept**: Three distinct agents attack the product from three angles.
    1.  **The Tester (`/test`)**: "Does it work?"
        *   Runs unit/integration tests against `SPECS.md`.
        *   Generates `COVERAGE_REPORT.md`.
    2.  **The User Advocate (`/ux`)**: "Is it usable?"
        *   Simulates user behavior (Heuristics).
        *   Generates `SUS_SCORE.md`.
    3.  **The Auditor (`/security`)**: "Is it safe?"
        *   Scans for hardcoded secrets, injection flaws.
        *   Generates `VULNERABILITY_REPORT.md`.
*   **The Gate**: Code cannot ship until **ALL THREE** pass.

### Phase 6: Release (`/release`, `/deploy`, `/retro`)
*   **Agent**: **The Release Manager** & **DevOps**
*   **The 6-Gate Check**:
    *   Are Features Done? (Arch check)
    *   Is Code Stable? (Build check)
    *   Are Bugs Zero? (Test check)
    *   Is Security Clear? (Sec check)
    *   Is UX Approved? (UX check)
    *   Is Staging Ready? (Deploy check)
*   **Action**: Tag git version, push to prod, announce.
*   **Closure**: Run `/retro` to generate `RETROSPECTIVE.md`. Update `PLAN.md` to archive tasks.

---

## 🤖 4. Persona Reference

| Persona | Command | Primary Artifacts Created | Handoff To |
| :--- | :--- | :--- | :--- |
| **Founder** | `/init` | `PLAN.md`, `CHARTER.md` | Analyst |
| **Analyst** | `/analyst` | `FRD.md`, `USER_STORIES.md` | Architect |
| **Researcher**| `/research`| `MARKET_ANALYSIS.md`, `EVIDENCE.md` | Analyst/Arch |
| **Architect** | `/architect`| `SPECS.md`, `ICD.md`, `DECISION.md` | Build/Design |
| **Builder** | `/build` | Source Code (`/src`), `API.md` | Test/Review |
| **Designer** | `/design` | Components, `STYLEGUIDE.md` | Test/UX |
| **Tester** | `/test` | `TEST_PLAN.md`, `DEFECTS.md` | Build (if fail) |
| **User Adv.** | `/ux` | `HEURISTIC_EVAL.md` | Design (if fail) |
| **Security** | `/security`| `SECURITY_AUDIT.md` | Build (if fail) |
| **DevOps** | `/deploy` | `RUNBOOK.md`, `DOCKERFILE` | Retro |

---

## 🔮 5. The "Antigravity" Factor
*How the AI maintains continuity.*

*   **Recursive Self-Correction**: If a tool fails (e.g., file not found), the agent is trained to read the directory structure, find the correct path, and retry *without user intervention*.
*   **Synchronization (`/sync-raps`)**:
    *   **Purpose:** Synchronize Antigravity Brain ↔ Local Repo ↔ GitHub.
    *   **Workflow:** `/sync-raps`
    *   **Script:** `scripts/sync_raps.ps1`
    *   **Logic:**
        *   "Smart Sync" algorithm that compares timestamps.
        *   If Brain is newer -> Pushes to Repo -> Pushes to Git.
        *   If Repo is newer -> Pushes to Git -> Syncs to Brain.
        *   Keeps the "Master Ledger" consistent across environments.
*   **Project Health Monitoring**: The `/raps-status` workflow is not just a script; it is a sanity check that ensures the "Spine" (Plan/Charter/Logs) is intact.
*   **Episodic Memory**: By reading `SESSION_LOG.md` and `HANDOFF_NOTES.md` at the start of every turn, the agent "remembers" context even across disconnects or restarts.

---
*End of Overview. Welcome to RAPS.*
