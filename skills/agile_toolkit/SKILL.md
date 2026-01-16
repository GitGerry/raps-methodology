---
name: Agile Toolkit
description: The single source of truth for Agile methodology in RAPS. Defines Epics, Stories, Sprints, and Quality Gates.
---

# 🏎️ Agile Toolkit

This toolkit defines **HOW** we work. It separates the "Process" from the "Persona".
All RAPS Personas must adhere to these definitions to ensure smooth handoffs.

## 1. The RAPS Hierarchy

We use a strict 3-tier hierarchy to organize work.

| Level | Type | Owner | Scope | Example |
| :--- | :--- | :--- | :--- | :--- |
| **Tier 1** | **EPIC** | Founder / Product | Large feature set (1-3 Sprints) | "User Authentication System" |
| **Tier 2** | **STORY** | Analyst | Customer value unit (1-3 Days) | "As a user, I want to login with Google..." |
| **Tier 3** | **TASK** | Build / Test / Design | Technical step (< 1 Day) | "Install NextAuth", "Create Login UI" |

### 🛑 Rules
1.  **Epics** must be broken down into Stories. You cannot "work" on an Epic directly.
2.  **Stories** must meet INVEST criteria (see below).
3.  **Tasks** are for implementation detail. They live inside the Active Sprint.

---

## 2. The RAPS Sprint Cycle

RAPS uses **Micro-Sprints** focused on shipping tangible value quickly.

### Stage 1: Planning (The "Ready" Gate)
*   **Input**: Product Backlog (Epics).
*   **Action**: Select Stories for the sprint.
*   **Gate**: Stories must satisfy the **Sprint Readiness Checklist** (see `templates.md`).
*   **Output**: Active Sprint Backlog in `PLAN.md`.

### Stage 2: Execution (The Build Loop)
*   **Action**: Personas (`/build`, `/design`, `/test`) pick up Tasks.
*   **Coordination**: Handoffs occur via `HANDOFF_NOTES.md`.

### Stage 3: Review (The "Done" Gate)
*   **Gate**: Stories must satisfy the **Definition of Done (DoD)** (see `templates.md`).
*   **Output**: Shipped features or v1.1 Backlog items.

---

## 3. Quality Standards

### 💎 INVEST Criteria (For User Stories)
The **Analyst** must ensure every User Story is:

*   **I**ndependent (Can be built in isolation)
*   **N**egotiable (Open to flexibility during build)
*   **V**aluable (Provides clear user benefit)
*   **E**stimable (Clear enough to size)
*   **S**mall (Fit in one sprint)
*   **T**estable (Has strict Acceptance Criteria)

### 🧹 Definition of Done (DoD)
See the full checklist in [templates.md](./templates.md#2-definition-of-done-dod).

---

## 4. Decomposing Stories into Tasks

When a Story enters the Active Sprint, the assigned Persona (`/build`, `/design`, `/test`) must:

1.  **Break Down**: Split the story into ≤4-hour chunks.
2.  **Create Tasks**: Add tasks to `PLAN.md` under the Active Sprint section.
3.  **Link to Story**: Prefix each Task with the Story ID:
    ```
    - [ ] [TASK-XXX] Create Draft Mode API (STRY-005) <!-- owner: /build -->
    ```
4.  **Update Status**: Move Story to `🛠️ In Progress` once first Task begins.

---

## 5. Story Sizing (T-Shirt Estimation)

Use relative sizing to estimate effort. This enables velocity tracking without false precision.

| Size | Effort | Guideline | Example |
|:----:|:------:|:----------|:--------|
| **XS** | ~1h | Trivial fix, config change | "Fix typo in error message" |
| **S** | ~2-4h | Single component, clear scope | "Add loading spinner to button" |
| **M** | ~1 day | Multiple components, some unknowns | "Implement password reset flow" |
| **L** | ~2-3 days | Cross-cutting, requires coordination | "Add audit logging to all APIs" |
| **XL** | >3 days | **Too big — break it down!** | — |

### 🛑 Rules
1.  **XL = Not Ready**: If a Story is XL, send back to Analyst for decomposition.
2.  **Size in PLAN.md**: Add size after the Story ID: `[STRY-005][M]`
3.  **Track Velocity**: Sum completed sizes per sprint in the Sprint Archive.

### 📈 Velocity Calculation
At sprint close, calculate velocity by summing completed story sizes:

```
Sprint Velocity = Σ (Completed Story Sizes)

Example:
  Completed: 2×S + 3×M + 1×L
  Velocity = 2(2) + 3(4) + 1(8) = 24 points

Size Point Values:
  XS=1, S=2, M=4, L=8
```

Track velocity over time to improve sprint planning accuracy.
