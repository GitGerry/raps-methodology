---
name: Build Toolkit
description: Standard operating procedures for the Build persona (Lead Developer) to ensure technical precision and v3.0.0 compliance.
---

# 🛠️ Build Toolkit Skill

## 1. Description
The **Build Toolkit** provides the technical standards and "Means & Methods" for implementing the RAPS engine. It bridges the gap between the Architect's blueprints and the final source code.

## 2. Capabilities

### 🌉 Logic Bridge Ingestion
*   **Trigger:** Entry into a `[BUILD]` task.
*   **Protocol:**
    1.  **Locate Visual Bridges**: Check `/docs/diagrams/` for Mermaid-based ERDs or Logic Trees.
    2.  **Naming Alignment**: Cross-reference `docs/business/GLOSSARY.md`. Variable/DB names **MUST** match the business nomenclature.
    3.  **Constraint Mapping**: Check `docs/business/BRD_BUSINESS_RULES.md` before implementing edge cases.

### 📐 Implementation Standards
*   **Agentic-Ready Code**:
    *   Explicit error handling with unique error IDs.
    *   Environment variables for all configurations (Zero Secrets).
*   **Docstring Protocol (JSDoc/XML)**:
    *   `@summary`: Concise description.
    *   `@param`: Type + Description + Constraint.
    *   `@returns`: Type + Description.
    *   `@source`: Link to `(Ref: RS-####)` if applicable.

### 📜 Backend Mermaid Templates
*   **Sequence Diagram**: Use for non-obvious API logic.
*   **State Machine**: Use for modeling entity lifecycles (e.g., `Draft` -> `Active` -> `Retired`).

## 3. Workflow Integration

### Step 1: Ingestion
- Load the `build-toolkit`.
- Sync nomenclature with the **Glossary**.
- Review **Visual Bridges** (Logic Trees, ERDs).

### Step 2: Implementation
- Implement logic in `/backend`, `/api`, or `/lib`.
- Follow the **Docstring Protocol**.
- Map implementation to `(Ref: RS-####)` tags.

### Step 3: RAID Seeding
- Identify technical risks discovered during build (e.g., Performance, Latency, Complexity).
- Promote these risks to `RAID_LOG.md`.

## 4. Quality Gate (DOD)
- [ ] Logic matches Visual Bridges (Audit ERDs/Trees).
- [ ] Variables match **Glossary** naming.
- [ ] Docstrings follow the JSDoc/XML protocol.
- [ ] No hardcoded secrets.
- [ ] RAID Log seeded with technical risks.
- [ ] Integrity check (`scripts/check_integrity.ps1`) passes.

## 5. Verification
- Run `scripts/check_integrity.ps1` to verify file paths and naming consistency.
