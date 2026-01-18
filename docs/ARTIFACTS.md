# 📚 RAPS Artifact Index

This document provides a comprehensive overview of all documentation, diagrams, matrices, and logs generated within the RAPS methodology. It serves as the master guide for understanding *what* to create, *who* creates it, *why* it exists, and *when* it is used.

## 🔑 Legend
*   **Living**: Continuously updated throughout the project lifecycle.
*   **Static**: Created once or updated only at specific milestones (e.g., releases).
*   **Lifecycle**:
    *   `Init`: Project Setup
    *   `Plan`: Strategy & Design
    *   `Build`: Implementation
    *   `Test`: QA & Validation
    *   `Rel`: Release
    *   `Retro`: Post-Release Review

---

## 🏗️ Core Scaffolding & Management
*Foundational documents that govern the project structure and status.*

| Artifact | Responsible | Created When | Updated / Used When | Type | Purpose | Audience |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **`PLAN.md`**<br>(Master Ledger) | **Founder** / Any | **Init**: During project kickoff & scaffolding. | **Continuously**: Daily by every agent to check tasks, backlog, and status. Updated upon task completion. | **Living** | The Single Source of Truth for project status, active tasks, squad assignment, and backlog. | Team, Managers, Stakeholders |
| **`CHARTER.md`** | **Founder** | **Init**: Before any work begins. | **Plan**: Referenced during scope creep discussions or budget reviews. | Static | Defines high-level project goals, scope, success metrics, and budget/resources. | Executive Sponsors, Stakeholders |
| **`README.md`** | **Founder** | **Init**: Upon repository creation. | **All Stages**: Updated when setup steps change; Referenced by new developers onboarding. | **Living** | Project entry point, setup instructions, and high-level architectural overview. | Developers, Users |
| **`SECURITY.md`** | **Security** | **Init**: During initial compliance setup. | **Build/Test**: Updated if new vulnerabilities are found or policies change. Referenced during audits. | **Living** | Security policies, vulnerability reporting process, and compliance standards. | External Researchers, Developers |
| **`DECISION_LOG.md`** | **Architect** | **Plan**: When the first major architectural choice is made. | **Build**: Updated whenever a significant technical or product trade-off is decided. | **Living** | Central log of key product and technical decisions (Why we did X instead of Y). | Team, Future Maintainers |
| **`RAID_LOG.md`** | **Product** | **Plan**: During risk assessment. | **All Stages**: Updated weekly to track risks and blockers. Referenced during status meetings. | **Living** | Tracks **R**isks, **A**ssumptions, **I**ssues, and **D**ependencies. | Project Managers, Sponsors |
| **`CONTRIBUTING.md`** | **Founder** | **Init**: During repository setup. | **Build**: Referenced by contributors when submitting PRs. | Static | Guidelines for code contribution, PR standards, and community behavior. | Open Source Contributors |

---

## 💼 Business & Strategy
*Defining the "Why" and "What" from a market perspective.*

| Artifact | Responsible | Created When | Updated / Used When | Type | Purpose | Audience |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **`BRD.md`**<br>(Business Req. Doc) | **Analyst** | **Plan**: After initial stakeholder interviews. | **Plan/Test**: Referenced to validate if the final product meets business goals. | Static | Details high-level business goals, problem statements, and success criteria. | Business Stakeholders, Product |
| **`MARKET_ANALYSIS.md`** | **Researcher** | **Init/Plan**: During feasibility study. | **Plan**: Referenced to define product differentiation strategy. | Static | Analysis of market size (TAM/SAM/SOM), trends, and customer demographics. | Product Managers, Strategy |
| **`BUSINESS_RULES.md`** | **Analyst** | **Plan**: During requirements gathering. | **Build/Test**: Updated as new logic is discovered. Referenced by Devs implementing logic & QA writing tests. | **Living** | Detailed list of logical constraints (e.g., "Users < 18 cannot purchase"). | Developers, QA, Legal |
| **`PRODUCT_BENCHMARKS.md`** | **Researcher** | **Plan**: During competitive analysis. | **Plan**: Referenced to prioritize feature roadmap against competitors. | Static | Feature-by-feature comparison matrix against competitors. | Product Managers, Sales |

---

## 🕵️ Analysis & Requirements
*Translating business needs into systemic behaviors.*

| Artifact | Responsible | Created When | Updated / Used When | Type | Purpose | Audience |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **`FRD.md`**<br>(Functional Req. Doc) | **Analyst** | **Plan**: After BRD approval. | **Build/Test**: The "Bible" for developers and testers to understand exact system behavior. | Static | Detailed specifications of system inputs, outputs, processes, and behaviors. | Architects, Developers |
| **`USER_STORIES.md`** | **Analyst** | **Plan**: During backlog grooming/sprint planning. | **Build**: Referenced by devs while coding. **Test**: Referenced by QA to verify acceptance criteria. | Static | Agile stories ("As a X, I want Y") with specific Acceptance Criteria. | Developers, QA |
| **`USE_CASES.md`** | **Analyst** | **Plan**: When defining complex user flows. | **Build/Test**: Referenced to ensure all edge cases and alternate paths are handled. | Static | Formal step-by-step flows for system interactions (Happy Path + Alternates). | QA, Logic Implementation |
| **`REQUIREMENTS_INDEX.md`** | **Analyst** | **Plan**: As requirements are finalized. | **Test**: Updated to link Test Cases to Requirements. Used for compliance audits. | **Living** | Traceability matrix linking Business Reqs → Functional Reqs → Test Cases. | QA, Compliance Audit |
| **`PROCESS_MAP.md`** | **Analyst** | **Plan**: To visualize complex workflows. | **Build**: Referenced to understand state transitions. | Static | Visual flowcharts (Mermaid) of business processes and workflows. | Stakeholders, Developers |

---

## 🏛️ Architecture & Design
*Technical specifications and visual blueprints.*

| Artifact | Responsible | Created When | Updated / Used When | Type | Purpose | Audience |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **`SPECS.md`** | **Architect** | **Plan**: During technical design. | **Build**: Updated if implementation details change. Referenced daily by developers. | **Living** | Technical design specifications, schema definitions, and implementation guide. | Developers |
| **`ICD.md`**<br>(Interface Control Doc) | **Architect** | **Plan**: Before API development begins. | **Build**: Updated when API signatures change. Referenced by Front/Back-end teams for integration. | **Living** | API contracts, endpoints, request/response formats, and headers. | Frontend/Backend Devs, Integrators |
| **`ADR-[xxx].md`** | **Architect** | **Plan/Build**: When a critical tech choice is made (e.g., "Use Postgres vs Mongo"). | **Build/Maint**: Referenced to understand historical context of design choices. | Static | Architecture Decision Record. Detailed context for a single significant technical choice. | Team, Future Maintainers |
| **`Architecture Diagrams`**<br>(Context/Container) | **Architect** | **Plan**: During high-level design. | **Build**: Updated if system boundaries change. Referenced for onboarding. | **Living** | System C4 diagrams ensuring understanding of component relationships. | Team, Ops |

---

## 🧪 Quality Assurance & UX
*Validation and user advocacy.*

| Artifact | Responsible | Created When | Updated / Used When | Type | Purpose | Audience |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **`TEST_PLAN.md`** | **QA** | **Plan**: Start of a sprint or release cycle. | **Test**: Referenced to track progress against the plan. | Static | Strategy document defining scope, approach, environment, and schedule for testing. | Managers, Release Board |
| **`TEST_CASE.md`** | **QA** | **Plan/Build**: Before testing begins. | **Test**: Updated with results (Pass/Fail) during execution. | Static | Step-by-step instructions for verifying specific requirements. | Testers, Automators |
| **`DEFECT_REPORT.md`** | **QA** | **Test**: Relationships to failed test cases. | **Build**: Referenced by devs to reproduce and fix bugs. | Static | Detailed bug report with reproduction steps, severity, and priority. | Developers |
| **`HEURISTIC_EVAL.md`** | **Designer** | **Plan**: Reviewing existing interface. | **Build**: Referenced to prioritize UX debt fixes. | Static | Usability audit based on Nielsen's 10 Heuristics. | UI/UX Designers, Product |
| **`ACCESSIBILITY_AUDIT.md`** | **Designer** | **Test**: Pre-release compliance check. | **Build**: Referenced to fix accessibility violations. | Static | WCAG 2.1 AA compliance report and remediation plan. | Compliance, Developers |
| **`SUS_SCORE.md`** | **Designer** | **Retro**: After user testing sessions. | **Plan**: Referenced to benchmark improvements for the next version. | Static | System Usability Scale results from user testing sessions. | Stakeholders, Product |

---

## 🔬 Research & Evidence
*Supporting intelligence and feasibility.*

| Artifact | Responsible | Created When | Updated / Used When | Type | Purpose | Audience |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **`RESEARCH_SUMMARY.md`** | **Researcher** | **Init/Plan**: During initial investigation. | **Plan**: Referenced to make go/no-go decisions. | Static | Executive summary of investigation into a specific topic or technology. | Decision Makers |
| **`EVIDENCE_TABLE.md`** | **Researcher** | **Plan**: While gathering data. | **Plan**: Referenced to validate the credibility of findings. | Static | Catalog of sources with quality ratings (Primary/Secondary/Tertiary). | Analyst, Architect |
| **`GAP_ANALYSIS.md`** | **Researcher** | **Plan**: After initial research phase. | **Plan**: Referenced to identify risks or areas needing more research. | Static | Documented unknowns, assumptions, and missing information risks. | Project Managers, Architect |
