# 📚 RAPS Project Documentation Guide

> **The Definitive Guide to RAPS Artifacts**
> This document defines every artifact produced by the RAPS methodology, who owns it, and when it is updated.

---

## 1. Core Principles
1.  **Code-Colocation:** Documentation lives with the code, not in a wiki.
2.  **Living Documents:** Documents are updated *during* work, not after.
3.  **Tier-Aware:** Only generate what the project scale requires (T1-T4).

---

## 2. The Master Ledger (Governance)
*These documents govern the entire project lifecycle.*

| Document | Emoji | Persona | Purpose | Location | Updates When... | Audience |
|:---|:---:|:---|:---|:---|:---|:---|
| **PLAN.md** | 📋 | **All** | Single source of truth. Tracks tasks, backlog, and squad status. | Root | Task starts, completes, or changes status. | Devs, PMs |
| **SESSION_LOG.md** | ⏱️ | **All** | Immutable history of work sessions. "Clock-in/Clock-out". | Root | Start/End of every session. | Devs, Audit |
| **HANDOFF_NOTES.md** | 🤝 | **All** | Context transfer between personas. The "baton" pass. | Root | Switching personas (e.g., /architect → /build). | Next Dev |
| **DECISION_LOG.md** | 🧠 | **All** | Records architectural decision records (ADRs) and major choices. | Root | A non-reversible decision is made. | Stakeholders |
| **MEMORY.md** | 🧠 | **System** | Long-term context and preferences for the AI agent. | Root | User clarifies a preference or rule. | AI Agent |

---

## 3. Product & Requirements (Phase 1-2)
*Defining "What" we are building.*

| Document | Emoji | Persona | Purpose | Location | Updates When... | Audience |
|:---|:---:|:---|:---|:---|:---|:---|
| **REQUIREMENTS.md** | 📝 | **/analyst** | Functional & non-functional requirements. The "contract". | `docs/requirements/` | Requirements gathering or scope change. | Stakeholders |
| **Use Case Diagrams** | 👤 | **/analyst** | Visualizes user interactions with the system. | `docs/diagrams/` | New features involving userflows. | Designers, QA |
| **Process Flows (BPMN)** | 🔄 | **/analyst** | Maps complex business logic or workflows. | `docs/diagrams/` | Complex logic is defined. | Devs, Business |
| **User Stories** | 📖 | **/analyst** | Granular units of work in the PLAN.md backlog. | `PLAN.md` | Sprint planning. | Devs |

---

## 4. Architecture & Design (Phase 3)
*Defining "How" we build it.*

| Document | Emoji | Persona | Purpose | Location | Updates When... | Audience |
|:---|:---:|:---|:---|:---|:---|:---|
| **SPECS.md** | 🏗️ | **/architect** | Technical specification. Data schemas, API contracts, interfaces. | `docs/` | Architecture phase or schema change. | Devs |
| **EXECUTIVE_SUMMARY.md**| 💼 | **/architect** | High-level overview for non-technical stakeholders. | `docs/` | Major milestones or board reviews. | Executives |
| **Architecture Diagram** | 🏛️ | **/architect** | System component & container view (C4 Model). | `docs/diagrams/` | Architecture changes. | Devs, Ops |
| **ER Diagram** | 🗃️ | **/architect** | Entity-Relationship database schema visualization. | `docs/diagrams/` | Schema modifications. | Devs |
| **Sequence Diagrams** | ⏱️ | **/architect** | Visualizes complex message passing/API calls. | `docs/diagrams/` | Designing complex integrations. | Devs |

---

## 5. Quality & Operations (Phase 4-5)
*Ensuring it works and stays running.*

| Document | Emoji | Persona | Purpose | Location | Updates When... | Audience |
|:---|:---:|:---|:---|:---|:---|:---|
| **TEST_PLAN.md** | 🧪 | **/test** | Strategy for testing (Unit, Integration, E2E). | `docs/` | Test strategy formulation. | QA, Devs |
| **SECURITY_ASSESSMENT.md**| 🛡️ | **/security** | Threat model (STRIDE), risk register, and privacy review. | `docs/` | Security audit or sensitive feature add. | Security, Legal |
| **OPERATIONAL_READINESS.md**| 🚦 | **/deploy** | Go/No-Go checklist, rollback plans, support tiers. | `docs/` | Before production release. | Ops, Support |
| **ROADMAP.md** | 🛣️ | **/founder** | Strategic future vision and quarterly goals. | `docs/` | Strategic planning sessions. | Stakeholders |
| **RETROSPECTIVE.md** | 🔙 | **/retro** | Lessons learned from sprints or milestones. | `docs/retrospectives/` | End of Sprint/Milestone. | Team |

---

## 6. Living vs. Static
- **Living (Constant Updates):** `PLAN.md`, `SESSION_LOG.md`, `HANDOFF_NOTES.md`
- **Milestone-Based (Versioned):** `REQUIREMENTS.md`, `SPECS.md`, `TEST_PLAN.md`
- **Static (Point-in-Time):** `RETROSPECTIVE.md`, `SECURITY_ASSESSMENT.md` (audit snapshots)
