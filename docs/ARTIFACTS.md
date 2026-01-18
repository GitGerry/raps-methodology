# 📚 RAPS Artifact Index

This document provides a comprehensive overview of all documentation, diagrams, matrices, and logs generated within the RAPS methodology. It serves as the master guide for understanding *what* to create, *who* creates it, and *why* it exists.

## 🔑 Legend
*   **Living**: Continuously updated throughout the project lifecycle.
*   **Static**: Created once or updated only at specific milestones (e.g., releases).
*   **Stages**: `Init` (Project Setup), `Plan` (Strategy/Design), `Build` (Implementation), `Test` (QA), `Rel` (Release), `Retro` (Post-Release).

---

## 🏗️ Core Scaffolding & Management
*Foundational documents that govern the project structure and status.*

| Artifact | Responsible | Stage | Type | Purpose | Audience |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`PLAN.md`**<br>(Master Ledger) | **Founder** / Any | Init → Retro | **Living** | The Single Source of Truth for project status, active tasks, squad assignment, and backlog. | Team, Managers, Stakeholders |
| **`CHARTER.md`** | **Founder** | Init | Static | Defines high-level project goals, scope, success metrics, and budget/resources. | Executive Sponsors, Stakeholders |
| **`README.md`** | **Founder** | Init → Rel | **Living** | Project entry point, setup instructions, and high-level architectural overview. | Developers, Users |
| **`SECURITY.md`** | **Security** | Init → Rel | **Living** | Security policies, vulnerability reporting process, and compliance standards. | External Researchers, Developers |
| **`DECISION_LOG.md`** | **Architect** / Product | Plan → Build | **Living** | Central log of key product and technical decisions (Why we did X instead of Y). | Team, Future Maintainers |
| **`RAID_LOG.md`** | **Founder** / Product | Plan → Rel | **Living** | Tracks **R**isks, **A**ssumptions, **I**ssues, and **D**ependencies. | Project Managers, Sponsors |
| **`CONTRIBUTING.md`** | **Founder** | Init | Static | Guidelines for code contribution, PR standards, and community behavior. | Open Source Contributors |

---

## 💼 Business & Strategy
*Defining the "Why" and "What" from a market perspective.*

| Artifact | Responsible | Stage | Type | Purpose | Audience |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`BRD.md`**<br>(Business Req. Doc) | **Analyst** | Plan | Static | Details high-level business goals, problem statements, and success criteria. | Business Stakeholders, Product |
| **`MARKET_ANALYSIS.md`** | **Researcher** | Plan | Static | Analysis of market size (TAM/SAM/SOM), trends, and customer demographics. | Product Managers, Strategy |
| **`BUSINESS_RULES.md`** | **Analyst** | Plan | **Living** | Detailed list of logical constraints (e.g., "Users < 18 cannot purchase"). | Developers, QA, Legal |
| **`PRODUCT_BENCHMARKS.md`** | **Researcher** | Plan | Static | Feature-by-feature comparison matrix against competitors. | Product Managers, Sales |

---

## 🕵️ Analysis & Requirements
*Translating business needs into systemic behaviors.*

| Artifact | Responsible | Stage | Type | Purpose | Audience |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`FRD.md`**<br>(Functional Req. Doc) | **Analyst** | Plan | Static | Detailed specifications of system inputs, outputs, processes, and behaviors. | Architects, Developers |
| **`USER_STORIES.md`** | **Analyst** | Plan | Static | Agile stories ("As a X, I want Y") with specific Acceptance Criteria. | Developers, QA |
| **`USE_CASES.md`** | **Analyst** | Plan | Static | Formal step-by-step flows for system interactions (Happy Path + Alternates). | QA, Logic Implementation |
| **`REQUIREMENTS_INDEX.md`** | **Analyst** | Plan → Test | **Living** | Traceability matrix linking Business Reqs → Functional Reqs → Test Cases. | QA, Compliance Audit |
| **`PROCESS_MAP.md`** | **Analyst** | Plan | Static | Visual flowcharts (Mermaid) of business processes and workflows. | Stakeholders, Developers |

---

## 🏛️ Architecture & Design
*Technical specifications and visual blueprints.*

| Artifact | Responsible | Stage | Type | Purpose | Audience |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`SPECS.md`** | **Architect** | Plan | **Living** | Technical design specifications, schema definitions, and implementation guide. | Developers |
| **`ICD.md`**<br>(Interface Control Doc) | **Architect** | Plan | **Living** | API contracts, endpoints, request/response formats, and headers. | Frontend/Backend Devs, Integrators |
| **`ADR-[xxx].md`** | **Architect** | Plan/Build | Static | Architecture Decision Record. Detailed context for a single significant technical choice. | Team, Future Maintainers |
| **`Architecture Diagrams`**<br>(Context/Container) | **Architect** | Plan | **Living** | System C4 diagrams ensuring understanding of component relationships. | Team, Ops |

---

## 🧪 Quality Assurance & UX
*Validation and user advocacy.*

| Artifact | Responsible | Stage | Type | Purpose | Audience |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`TEST_PLAN.md`** | **QA** | Plan/Test | Static | Strategy document defining scope, approach, environment, and schedule for testing. | Managers, Release Board |
| **`TEST_CASE.md`** | **QA** | Test | Static | Step-by-step instructions for verifying specific requirements. | Testers, Automators |
| **`DEFECT_REPORT.md`** | **QA** | Test | Static | Detailed bug report with reproduction steps, severity, and priority. | Developers |
| **`HEURISTIC_EVAL.md`** | **Designer** | Plan/Retro | Static | Usability audit based on Nielsen's 10 Heuristics. | UI/UX Designers, Product |
| **`ACCESSIBILITY_AUDIT.md`** | **Designer** | Test | Static | WCAG 2.1 AA compliance report and remediation plan. | Compliance, Developers |
| **`SUS_SCORE.md`** | **Designer** | Retro | Static | System Usability Scale results from user testing sessions. | Stakeholders, Product |

---

## 🔬 Research & Evidence
*Supporting intelligence and feasibility.*

| Artifact | Responsible | Stage | Type | Purpose | Audience |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`RESEARCH_SUMMARY.md`** | **Researcher** | Init/Plan | Static | Executive summary of investigation into a specific topic or technology. | Decision Makers |
| **`EVIDENCE_TABLE.md`** | **Researcher** | Plan | Static | Catalog of sources with quality ratings (Primary/Secondary/Tertiary). | Analyst, Architect |
| **`GAP_ANALYSIS.md`** | **Researcher** | Plan | Static | Documented unknowns, assumptions, and missing information risks. | Project Managers, Architect |
