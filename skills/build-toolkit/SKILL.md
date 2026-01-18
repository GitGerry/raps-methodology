---
name: Build Toolkit
description: The "Engine Lab" Manual. Standard operating procedures for implementing logic, APIs, and databases in the RAPS framework.
---

# 🏗️ Build Toolkit Skill

## 1. Description
The **Build Toolkit** is the "Code of Conduct" for the RAPS Engine Room. It transforms the `/build` persona from a generic coder into an Enterprise Engineer. It enforces strict standards for **Logic Bridge Ingestion**, **Database Management**, and **Code Quality**, ensuring that the "Build" phase respects the architecture defined in preceding phases.

## 2. Capabilities

### 🌉 Visual Bridge Ingestion
*   **Trigger:** Entry Checklist.
*   **Action:** You MUST locate and "materialize" the Architect's diagrams into code.
*   **Mapping:**
    *   **Logical ERD** (`docs/diagrams/*.mermaid`) → **Database Schema / Migrations**.
    *   **Decision Tree** (`docs/diagrams/*.mermaid`) → **Business Logic / State Machines**.
    *   **RBAC Matrix** (`docs/diagrams/*.mermaid`) → **Middleware / Policy Guards**.
*   **Validation:** If the code deviates from the diagram, you MUST flag it as a risk or request an update.

### 🧹 The "Premium Engine" Standard (Means & Methods)
*   **Tech Stack Enforcement:**
    *   **Backend:** Node.js / TypeScript / Next.js API Routes (unless specified otherwise in `SPECS.md`).
    *   **Safety:** strict mode enabled, no `any` types.
    *   **Environment:** Use `process.env` validation (e.g., Zod or Envalid) on startup.
*   **Docstring Protocol:**
    *   **Format:** JSDoc (TS/JS) or equivalent.
    *   **Requirement:** Every public function/API handler MUST have:
        *   `@description`: What it does.
        *   `@param`: Input definitions.
        *   `@returns`: Output definitions.
        *   `@throws`: Explicit error cases.

### 🗣️ Ubiquitous Language Enforcement
*   **Trigger:** Naming a new variable, table, column, or API field.
*   **Action:** Check `docs/business/GLOSSARY.md`.
*   **Rule:** If the business calls it `client`, you CANNOT call it `customer`. If they call it `claim`, you CANNOT call it `case`.
*   **Drift:** If you need a term not in the Glossary, add it to `HANDOFF_NOTES.md` for the Analyst to retro-fit.

### 🛡️ RAID Seeding (Implementation Risks)
*   **Trigger:** Discovering a technical reality that impacts the plan.
*   **Action:** You are the "eyes on the ground." You must report hidden risks.
*   **Mechanism:** Add entries to `RAID_LOG.md` (or `SESSION_LOG.md` if read-only) with tag `[BUILD-RISK]`.
    *   *Example:* "The proposed library `xyz` is unmaintained. Risk of security drift."

## 3. Usage & Workflows

### Database Migration Workflow
1.  **Read:** `docs/diagrams/*_ERD.mermaid` + `docs/technical/SPECS.md`.
2.  **Plan:** Draft the SQL/Schema change.
3.  **Check:** Does this break existing data? (Impact Analysis).
4.  **Implement:** Write the migration file.
5.  **Verify:** Update `docs/technical/SPECS.md` if schema details were refined during build.

### API Implementation Workflow
1.  **Read:** `docs/technical/ICD.md` (Interface Control Document).
2.  **Stub:** Create the route handler with inputs/outputs matching the contract.
3.  **Implement:** Write the logic, referencing `docs/diagrams/*_Logic.mermaid`.
4.  **Secure:** Apply RBAC middleware referencing `docs/diagrams/*_RBAC.mermaid`.
5.  **Document:** Add JSDoc and update `HANDOFF_NOTES.md` with "How to Test".

## 4. How to Verify (Definition of Done)
*   [ ] **Spec Alignment:** Code matches `SPECS.md` and `ICD.md`.
*   [ ] **Visual Fidelity:** Logic matches the flowcharts in `docs/diagrams/`.
*   [ ] **Language Match:** Naming coventions align with `GLOSSARY.md`.
*   [ ] **Documentation:** 100% Docstring coverage on public interfaces.
*   [ ] **Safety:** Zero hardcoded secrets; Zero swallowed errors.
