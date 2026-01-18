# 📚 RAPS Artifact Index

This document provides a comprehensive overview of all documentation, diagrams, matrices, and logs generated within the RAPS methodology. It is the master guide for understanding *what* to create, *who* creates it, *why* it exists, and *when* it is used.

## 🔑 Legend
*   **Living**: Continuously updated throughout the project lifecycle.
*   **Static**: Created once or updated only at specific milestones (e.g., releases).
*   **Lifecycle Stages**:
    *   `Init` (Project Setup)
    *   `Plan` (Strategy/Design)
    *   `Build` (Implementation)
    *   `Test` (QA)
    *   `Rel` (Release)
    *   `Retro` (Post-Release)

---

## 🏗️ Core Scaffolding & Management
*Foundational documents that govern the project structure and status.*

### `PLAN.md` (Master Ledger)
*   **Responsible:** **Founder** / Any
*   **Type:** **Living**
*   **Purpose:** The Single Source of Truth for project status, active tasks, squad assignment, and backlog.
*   **Audience:** Team, Managers, Stakeholders
*   **Lifecycle:**
    *   **Created:** `Init` - During project kickoff & scaffolding.
    *   **Updated:** `Continuously` - Daily by every agent to check tasks, backlog, and status. Updated upon task completion.

### `CHARTER.md`
*   **Responsible:** **Founder**
*   **Type:** Static
*   **Purpose:** Defines high-level project goals, scope, success metrics, and budget/resources.
*   **Audience:** Executive Sponsors, Stakeholders
*   **Lifecycle:**
    *   **Created:** `Init` - Before any work begins.
    *   **Used:** `Plan` - Referenced during scope creep discussions or budget reviews.

### `README.md`
*   **Responsible:** **Founder**
*   **Type:** **Living**
*   **Purpose:** Project entry point, setup instructions, and high-level architectural overview.
*   **Audience:** Developers, Users
*   **Lifecycle:**
    *   **Created:** `Init` - Upon repository creation.
    *   **Updated:** `All Stages` - Updated when setup steps change; Referenced by new developers onboarding.

### `SECURITY.md`
*   **Responsible:** **Security**
*   **Type:** **Living**
*   **Purpose:** Security policies, vulnerability reporting process, and compliance standards.
*   **Audience:** External Researchers, Developers
*   **Lifecycle:**
    *   **Created:** `Init` - During initial compliance setup.
    *   **Updated:** `Build/Test` - Updated if new vulnerabilities are found or policies change. Referenced during audits.

### `sync-raps.ps1`
*   **Responsible:** Human & AI
*   **Type:** Living
*   **Purpose:** **Synchronization transport.** Ensures `Brain` = `Repo` = `GitHub`. Run before/after sessions to avoid drift.
*   **Audience:** Human & AI
*   **Lifecycle:**
    *   **Created:** `Init` - During initial setup.
    *   **Updated:** `Continuously` - Run before/after sessions.

### `set_status.ps1`
*   **Responsible:** AI & Human
*   **Type:** Living
*   **Purpose:** **Active State Writer.** Programmatically updates `PLAN.md` status table to prevent broken regex/tables.
*   **Audience:** AI & Human
*   **Lifecycle:**
    *   **Created:** `Init` - During initial setup.
    *   **Updated:** `Continuously` - Run as needed to update `PLAN.md`.

### `DECISION_LOG.md`
*   **Responsible:** **Architect**
*   **Type:** **Living**
*   **Purpose:** Central log of key product and technical decisions (Why we did X instead of Y).
*   **Audience:** Team, Future Maintainers
*   **Lifecycle:**
    *   **Created:** `Plan` - When the first major architectural choice is made.
    *   **Updated:** `Build` - Updated whenever a significant technical or product trade-off is decided.

### `RAID_LOG.md`
*   **Responsible:** **Product**
*   **Type:** **Living**
*   **Purpose:** Tracks **R**isks, **A**ssumptions, **I**ssues, and **D**ependencies.
*   **Audience:** Project Managers, Sponsors
*   **Lifecycle:**
    *   **Created:** `Plan` - During risk assessment.
    *   **Updated:** `All Stages` - Updated weekly to track risks and blockers. Referenced during status meetings.

### `CONTRIBUTING.md`
*   **Responsible:** **Founder**
*   **Type:** Static
*   **Purpose:** Guidelines for code contribution, PR standards, and community behavior.
*   **Audience:** Open Source Contributors
*   **Lifecycle:**
    *   **Created:** `Init` - During repository setup.
    *   **Used:** `Build` - Referenced by contributors when submitting PRs.

---

## 💼 Business & Strategy
*Defining the "Why" and "What" from a market perspective.*

### `BRD.md` (Business Req. Doc)
*   **Responsible:** **Analyst**
*   **Type:** Static
*   **Purpose:** Details high-level business goals, problem statements, and success criteria.
*   **Audience:** Business Stakeholders, Product
*   **Lifecycle:**
    *   **Created:** `Plan` - After initial stakeholder interviews.
    *   **Used:** `Plan/Test` - Referenced to validate if the final product meets business goals.

### `MARKET_ANALYSIS.md`
*   **Responsible:** **Analyst**
*   **Type:** Static
*   **Purpose:** Analysis of market size (TAM/SAM/SOM), trends, and customer demographics.
*   **Audience:** Product Managers, Strategy
*   **Lifecycle:**
    *   **Created:** `Init/Plan` - During feasibility study.
    *   **Used:** `Plan` - Referenced to define product differentiation strategy.

### `BUSINESS_RULES.md`
*   **Responsible:** **Analyst**
*   **Type:** **Living**
*   **Purpose:** Detailed list of logical constraints (e.g., "Users < 18 cannot purchase").
*   **Audience:** Developers, QA, Legal
*   **Lifecycle:**
    *   **Created:** `Plan` - During requirements gathering.
    *   **Updated:** `Build/Test` - Updated as new logic is discovered. Referenced by Devs implementing logic & QA writing tests.

### `PRODUCT_BENCHMARKS.md`
*   **Responsible:** **Analyst**
*   **Type:** Static
*   **Purpose:** Feature-by-feature comparison matrix against competitors.
*   **Audience:** Product Managers, Sales
*   **Lifecycle:**
    *   **Created:** `Plan` - During competitive analysis.
    *   **Used:** `Plan` - Referenced to prioritize feature roadmap against competitors.

---

## 🕵️ Analysis & Requirements
*Translating business needs into systemic behaviors.*

### `FRD.md` (Functional Req. Doc)
*   **Responsible:** **Analyst**
*   **Type:** Static
*   **Purpose:** Detailed specifications of system inputs, outputs, processes, and behaviors.
*   **Audience:** Architects, Developers
*   **Lifecycle:**
    *   **Created:** `Plan` - After BRD approval.
    *   **Used:** `Build/Test` - The "Bible" for developers and testers to understand exact system behavior.

### `USER_STORIES.md`
*   **Responsible:** **Analyst**
*   **Type:** Static
*   **Purpose:** Agile stories ("As a X, I want Y") with specific Acceptance Criteria.
*   **Audience:** Developers, QA
*   **Lifecycle:**
    *   **Created:** `Plan` - During backlog grooming/sprint planning.
    *   **Used:** `Build` (Referenced by Devs); `Test` (Referenced by QA).

### `USE_CASES.md`
*   **Responsible:** **Analyst**
*   **Type:** Static
*   **Purpose:** Formal step-by-step flows for system interactions (Happy Path + Alternates).
*   **Audience:** QA, Logic Implementation
*   **Lifecycle:**
    *   **Created:** `Plan` - When defining complex user flows.
    *   **Used:** `Build/Test` - Referenced to ensure all edge cases and alternate paths are handled.

### `REQUIREMENTS_INDEX.md`
*   **Responsible:** **Analyst**
*   **Type:** **Living**
*   **Purpose:** Traceability matrix linking Business Reqs → Functional Reqs → Test Cases.
*   **Audience:** QA, Compliance Audit
*   **Lifecycle:**
    *   **Created:** `Plan` - As requirements are finalized.
    *   **Updated:** `Test` - Updated to link Test Cases to Requirements. Used for compliance audits.

### `PROCESS_MAP.md`
*   **Responsible:** **Analyst**
*   **Type:** Static
*   **Purpose:** Visual flowcharts (Mermaid) of business processes and workflows.
*   **Audience:** Stakeholders, Developers
*   **Lifecycle:**
    *   **Created:** `Plan` - To visualize complex workflows.
    *   **Used:** `Build` - Referenced to understand state transitions.

---

## 🏛️ Architecture & Design
*Technical specifications and visual blueprints.*

### `SPECS.md`
*   **Responsible:** **Architect**
*   **Type:** **Living**
*   **Purpose:** Technical design specifications, schema definitions, and implementation guide.
*   **Audience:** Developers
*   **Lifecycle:**
    *   **Created:** `Plan` - During technical design.
    *   **Updated:** `Build` - Updated if implementation details change. Referenced daily by developers.

### `ICD.md` (Interface Control Doc)
*   **Responsible:** **Architect**
*   **Type:** **Living**
*   **Purpose:** API contracts, endpoints, request/response formats, and headers.
*   **Audience:** Frontend/Backend Devs, Integrators
*   **Lifecycle:**
    *   **Created:** `Plan` - Before API development begins.
    *   **Updated:** `Build` - Updated when API signatures change. Referenced by Front/Back-end teams for integration.

### `ADR-[xxx].md`
*   **Responsible:** **Architect**
*   **Type:** Static
*   **Purpose:** Architecture Decision Record. Detailed context for a single significant technical choice.
*   **Audience:** Team, Future Maintainers
*   **Lifecycle:**
    *   **Created:** `Plan/Build` - When a critical tech choice is made (e.g., "Use Postgres vs Mongo").
    *   **Used:** `Build/Maint` - Referenced to understand historical context of design choices.

### `Architecture Diagrams`
*   **Responsible:** **Architect**
*   **Type:** **Living**
*   **Purpose:** System C4 diagrams ensuring understanding of component relationships.
*   **Audience:** Team, Ops
*   **Lifecycle:**
    *   **Created:** `Plan` - During high-level design.
    *   **Updated:** `Build` - Updated if system boundaries change. Referenced for onboarding.

---

## 🧪 Quality Assurance & UX
*Validation and user advocacy.*

### `TEST_PLAN.md`
*   **Responsible:** **QA**
*   **Type:** Static
*   **Purpose:** Strategy document defining scope, approach, environment, and schedule for testing.
*   **Audience:** Managers, Release Board
*   **Lifecycle:**
    *   **Created:** `Plan` - Start of a sprint or release cycle.
    *   **Used:** `Test` - Referenced to track progress against the plan.

### `TEST_CASE.md`
*   **Responsible:** **QA**
*   **Type:** Static
*   **Purpose:** Step-by-step instructions for verifying specific requirements.
*   **Audience:** Testers, Automators
*   **Lifecycle:**
    *   **Created:** `Plan/Build` - Before testing begins.
    *   **Updated:** `Test` - Updated with results (Pass/Fail) during execution.

### `DEFECT_REPORT.md`
*   **Responsible:** **QA**
*   **Type:** Static
*   **Purpose:** Detailed bug report with reproduction steps, severity, and priority.
*   **Audience:** Developers
*   **Lifecycle:**
    *   **Created:** `Test` - Relationships to failed test cases.
    *   **Used:** `Build` - Referenced by devs to reproduce and fix bugs.

### `HEURISTIC_EVAL.md`
*   **Responsible:** **Designer**
*   **Type:** Static
*   **Purpose:** Usability audit based on Nielsen's 10 Heuristics.
*   **Audience:** UI/UX Designers, Product
*   **Lifecycle:**
    *   **Created:** `Plan` - Reviewing existing interface.
    *   **Used:** `Build` - Referenced to prioritize UX debt fixes.

### `ACCESSIBILITY_AUDIT.md`
*   **Responsible:** **Designer**
*   **Type:** Static
*   **Purpose:** WCAG 2.1 AA compliance report and remediation plan.
*   **Audience:** Compliance, Developers
*   **Lifecycle:**
    *   **Created:** `Test` - Pre-release compliance check.
    *   **Used:** `Build` - Referenced to fix accessibility violations.

### `SUS_SCORE.md`
*   **Responsible:** **Designer**
*   **Type:** Static
*   **Purpose:** System Usability Scale results from user testing sessions.
*   **Audience:** Stakeholders, Product
*   **Lifecycle:**
    *   **Created:** `Retro` - After user testing sessions.
    *   **Used:** `Plan` - Referenced to benchmark improvements for the next version.

---

## 🔬 Research & Evidence
*Supporting intelligence and feasibility.*

### `RESEARCH_SUMMARY.md`
*   **Responsible:** **Analyst**
*   **Type:** Static
*   **Purpose:** Executive summary of investigation into a specific topic or technology.
*   **Audience:** Decision Makers
*   **Lifecycle:**
    *   **Created:** `Init/Plan` - During initial investigation.
    *   **Used:** `Plan` - Referenced to make go/no-go decisions.

### `EVIDENCE_TABLE.md`
*   **Responsible:** **Analyst**
*   **Type:** Static
*   **Purpose:** Catalog of sources with quality ratings (Primary/Secondary/Tertiary).
*   **Audience:** Analyst, Architect
*   **Lifecycle:**
    *   **Created:** `Plan` - While gathering data.
    *   **Used:** `Plan` - Referenced to validate the credibility of findings.

### `GAP_ANALYSIS.md`
*   **Responsible:** **Analyst**
*   **Type:** Static
*   **Purpose:** Documented unknowns, assumptions, and missing information risks.
*   **Audience:** Project Managers, Architect
*   **Lifecycle:**
    *   **Created:** `Plan` - After initial research phase.
    *   **Used:** `Plan` - Referenced to identify risks or areas needing more research.
