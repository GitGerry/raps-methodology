---
name: Functional Analyst Toolkit
description: Requirements Engineering, User Stories, and System Specifications.
---

# 📐 Functional Analyst Toolkit (The Spec Engine)

> [!IMPORTANT]
> **ANTI-HALLUCINATION PROTOCOL**
> 1. **Evidence Required:** You cannot write a User Story without a supporting `INTERVIEW_QUESTIONNAIRE` or `Transcript`.
> 2. **No Implied Requirements:** If it's not in the source, it doesn't exist. Ask the user.
> 3. **Traceability:** Every Story must trace back to a specific Stakeholder Quote or Business Rule.
> 4. **INTELLIGENCE INGESTION:** You MUST ingest `RSRCH_SYNTHESIS.md` and map logic bridges to system constraints.

## Purpose
Provide standards for writing requirements, user stories, and maintaining traceability across the project lifecycle. Defines the ID conventions and templates for all requirement artifacts.

## When to Use
- Writing or reviewing requirements
- Creating user stories
- Defining use cases
- Establishing traceability
- Validating requirement quality

## Template Decision Matrix
| Artifact | Template | Use When... |
| :--- | :--- | :--- |
| **User Story** | `FRD_USER_STORIES.md` | Defining a feature from a user's perspective (Agile). |
| **Functional Req** | `FRD_FUNCTIONAL_REQUIREMENTS.md` | Defining precise system behavior ("The System Shall..."). |
| **Use Case** | `FRD_USE_CASES.md` | Detailing complex user-system interactions or flows. |
| **NFR** | `FRD_NFR_SPECS.md` | Defining constraints (Speed, Security, Scale). |
| **Questionnaire** | `INTERVIEW_QUESTIONNAIRE.md` | Gathering initial requirements from stakeholders. |

---

## Tool Interface

### Inputs
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `action` | enum | ✅ | `"create_requirement"` \| `"validate"` \| `"trace"` |
| `type` | enum | ❌ | Requirement type: `"STRY"` \| `"FREQ"` \| `"NFRQ"` \| `"UCSE"` |
| `id` | string | ❌ | Existing ID to validate or trace |

### Outputs
| Artifact | Path Pattern | Validated By |
| :--- | :--- | :--- |
| **Requirements Index** | `docs/functional/FRD_REQUIREMENTS_INDEX.md` | Master Registry |
| **User Stories** | `docs/functional/FRD_USER_STORIES.md` | `/architect` / `/test` |
| **Functional Specs** | `docs/functional/FRD_FUNCTIONAL_REQUIREMENTS.md` | `/architect` / `/build` |
| **Use Cases** | `docs/functional/FRD_USE_CASES.md` | `/test` |
| **NFRs** | `docs/functional/FRD_NFR_SPECS.md` | `/architect` |

---

## 🧠 Thinking Logic (How to Execute)

### 🔍 Intelligence Ingestion (System Constraints)
Before breaking down features:
1. **Map Logic Bridges**: Review `🔗 Logic Bridges` in `RSRCH_SYNTHESIS.md`.
2. **Stakeholder Sync**: Review `QUESTIONNAIRE_[ROLE].md` files.
3. **Loopback Enrichment**: Update Phase 1 BRDs (Rules, **Glossary, Market Analysis**) with stakeholder data.
   - *Assumptions -> Facts*: Move verified RAID items to the permanent BRD.
   - *Terminology Proxy*: Replace research terms with the stakeholder's "Ubiquitous Language" in the Glossary.
4. **Constraint Enforcement**: Extract `Technical Constraints` and `Stakeholder Invariants` into `FRD_NFR_SPECS.md`.
5. **Traceability**: Link requirements that solve a researched gap using `(Ref: RS-####)` or a stakeholder need using `(Ref: [ROLE])`.

### A. Discovery (The "What" and "Why")
1.  **Ingest Evidence (The Triad):**
    *   Read `INTERVIEW_QUESTIONNAIRE.md` (User Needs).
    *   Read `docs/business/BRD_BUSINESS_RULES.md` (Logic Constraints).
    *   Read `docs/product/UX_BENCHMARKS.md` (Visual Requirements).
    *   *If any are missing, STOP and request them.*
2.  **Extract Entities:** Identify the Nouns (e.g. "Order", "Customer").
3.  **Map Roles:** specific Actors (e.g. "Admin", "Customer Support").

### B. Requirement Definition (The User Story Trinity)
User Stories in RAPS are generated from three distinct sources to ensure 100% coverage:

1.  **Direct Needs:** Derived from `QUESTIONNAIRE` (Wishlist).
    *   *Example:* "I want to export reports."
2.  **Business Enforcement:** Derived from `BRD_BUSINESS_RULES.md` (Monetization/RBAC).
    *   *Example:* "I want the system to block non-Pro users from exporting."
3.  **System Integrity:** Derived from `RSRCH_SYNTHESIS.md` (Constraints/Logic Bridges).
    *   *Example:* "I want the system to handle 10k concurrent exports without crashing."

**Steps:**
1.  **Draft User Stories:** Convert Friction Points and Rules into Stories.
2.  **Enforce Format:** Use the configured ID Standard (`STRY0000001`).
3.  **Validate:** Check against the "Quality Checklist" in this Skill.

### C. Traceability Check
1.  **Linkage:** Ensure every `STRY` maps to a `FREQ` (Functional Req).
2.  **Inverse Check:** Ensure every `FREQ` has a corresponding `TC` (Test Case) placeholder.

### D. Logic Collision Check (The Truth Engine)
Before finalizing the FRD, you MUST audit the requirement set for internal consistency:
1. **Rule Violation**: Check if any User Story violates a constraint in `BRD_BUSINESS_RULES.md`.
   - *Example:* Story allows deletion, but Rule says "All logs are immutable."
2. **Resource Conflict**: Check if two features compete for the same state in a lifecycle.
3. **Ambiguity Audit**: Scan for words like "Easy," "Fast," or "Scalable."
   - *Action*: Replace with measurable thresholds (e.g., "Load time < 500ms").

### E. Risk Management (The RAID Bridge)
Any ambiguity found during Phase 1-3 MUST be classified:
- **Risk:** Potential issue (e.g., "API uptime is 99%"). -> Add to `RAID_LOG.md`.
- **Assumption:** Logic that hasn't been verified. -> Add to `RAID_LOG.md`.
- **Issue:** Active blocker. -> Trigger `/scrum` or `/analyst` clarification.
- **Dependency:** Requirement relies on external data. -> Add to `RAID_LOG.md`.

### E. Advanced Logic Visualization (Mermaid Standards)
> **Master Guide:** `templates/DIAGRAM_GUIDE.md` (Mandated Standard)

1. **Logical ERD**: Map conceptual entities and relationships.
2. **Decision Logic Tree**: Unpack complex business forks.
3. **Security/RBAC Matrix**: Visualize permission boundaries.
4. **Lifecycle Diagram**: Track object state transitions.

### F. Tactical Handoff (The Warm Protocol)
1. **The Context Briefing**: Provide a "Mental Model" of the feature in 3 sentences (The Why, The What, The ROI).
2. **The Intelligence Handoff**: Explicitly walk the Architect through the `🔗 Logic Bridges` (`RS-####`) that forced specific constraints.
3. **The Law of Friction Check**: Ask the Architect to identify any functional flow that is technically "high friction" (e.g., synchronous calls to legacy APIs).
4. **The RBAC Matrix**: Review the permission boundaries in `BRD_BUSINESS_RULES.md` to ensure data isolation is designed correctly.

---

## 1. Traceability ID Standards

> Every artifact gets a unique, searchable ID enabling full traceability.

### ID Format Reference

| Type | Format | Regex | Example |
|------|--------|-------|---------|
| User Story | STRY####### | `^STRY\d{7}$` | STRY0000001 |
| Functional Req | FREQ####### | `^FREQ\d{7}$` | FREQ0000042 |
| Non-Functional | NFRQ####### | `^NFRQ\d{7}$` | NFRQ0000003 |
| Use Case | UCSE####### | `^UCSE\d{7}$` | UCSE0000010 |
| Actor | ACTR####### | `^ACTR\d{7}$` | ACTR0000001 |
| Persona | PRSN####### | `^PRSN\d{7}$` | PRSN0000005 |
| Entity | ENTY####### | `^ENTY\d{7}$` | ENTY0000100 |
| Stakeholder | STKH####### | `^STKH\d{7}$` | STKH0000002 |
| Risk | RISK####### | `^RISK\d{7}$` | RISK0000015 |
| Test Case | TC####### | `^TC\d{7}$` | TC0000201 |
| Change Request | CHNG####### | `^CHNG\d{7}$` | CHNG0000001 |
| Question | QSTN####### | `^QSTN\d{7}$` | QSTN0000033 |
| Dependency | DPND####### | `^DPND\d{7}$` | DPND0000007 |
| Assumption | ASUM####### | `^ASUM\d{7}$` | ASUM0000012 |

### ID Ownership
- **Analyst** creates: STRY, FREQ, NFRQ, UCSE, ACTR, PRSN, ENTY, STKH, QSTN, ASUM, DPND
- **Test** creates: TC
- **Any persona** can create: RISK, CHNG

---

## 2. User Story Standards

### Format
See `./templates/FRD_USER_STORIES.md`

### Story Quality Checklist
- [ ] Follows "As a... I want... So that..." format
- [ ] Actor/Persona is defined (not "user")
- [ ] Benefit is clear (not just restating the action)
- [ ] Has 2+ acceptance criteria
- [ ] Criteria are testable (Given/When/Then)
- [ ] Estimated with story points
- [ ] Fits in one sprint

---

## 3. Functional Requirement Standards

### Format
See `./templates/FRD_FUNCTIONAL_REQUIREMENTS.md`

### Requirement Quality Checklist
- [ ] Starts with "The system shall"
- [ ] Single, atomic behavior (not compound)
- [ ] Testable and measurable
- [ ] Priority assigned (MoSCoW)
- [ ] Linked to source story or stakeholder

---

## 4. Non-Functional Requirement Standards

### Categories
| Category | Examples |
|----------|----------|
| **Performance** | Response time, throughput, latency |
| **Scalability** | Users, data volume, concurrent connections |
| **Reliability** | Uptime, MTBF, recovery time |
| **Security** | Authentication, encryption, audit |
| **Usability** | Accessibility, learning curve |
| **Compliance** | GDPR, SOC2, HIPAA |

### Format
See `./templates/FRD_NFR_SPECS.md`

---

## 5. State Machine Diagram Standards

> **REQUIRED** for any entity with multiple states (e.g., Order, Lead, Ticket)

### When to Create
- Entity has a `status` or `state` field
- Transitions between states have conditions
- Different actions available per state

### Format (Mermaid)
```mermaid
stateDiagram-v2
    [*] --> Draft: Create
    Draft --> Pending: Submit
    Pending --> Approved: Approve
    Pending --> Rejected: Reject
    Approved --> [*]: Complete
    Rejected --> Draft: Revise
```

### State Definition Table
| State | Description | Allowed Transitions | Triggers |
|-------|-------------|---------------------|----------|
| Draft | Initial state | Submit | User action |
| Pending | Awaiting review | Approve, Reject | Reviewer |
| Approved | Accepted | Complete | System |
| Rejected | Declined | Revise | System |

### Checklist
- [ ] All states documented with descriptions
- [ ] All transitions have triggers defined
- [ ] Guard conditions specified (if applicable)
- [ ] Entry/exit actions noted (if applicable)
- [ ] Terminal states marked

---

## 6. Use Case Standards

### Format
See `./templates/FRD_USE_CASES.md`

---

## 7. Traceability Matrix

### Forward Traceability (Requirements → Implementation)
| Requirement | Stories | Specs | Code | Tests |
|-------------|---------|-------|------|-------|
| FREQ0000001 | STRY0000001 | SPECS.md §3.1 | auth.ts | TC0000001 |
| FREQ0000002 | STRY0000001 | SPECS.md §3.2 | user.ts | TC0000002 |

### Backward Traceability (Tests → Requirements)
| Test | Requirement | Story | Status |
|------|-------------|-------|--------|
| TC0000001 | FREQ0000001 | STRY0000001 | ✅ Pass |

---

## 8. RBAC Permissions Matrix

### Actor-Permission Mapping
| Permission | Guest | User | Admin | System |
|------------|-------|------|-------|--------|
| View public content | ✅ | ✅ | ✅ | ✅ |
| Create account | ✅ | ❌ | ❌ | ❌ |
| Edit own profile | ❌ | ✅ | ✅ | ❌ |
| Delete any user | ❌ | ❌ | ✅ | ❌ |

---

## ✅ Definition of Done (DOD)
- [ ] All `STRY` IDs trace to a `FREQ` ID.
- [ ] Every `FREQ` ID is linked to a Business Rule (`BRD_`).
- [ ] Every requirement follows the "Triple Ingest" (Quest + Rules + UX).
- [ ] No orphan requirements.
- [ ] Master Index Updated.

## How to Verify

- [ ] All requirements have valid IDs matching regex
- [ ] User stories follow standard format
- [ ] Acceptance criteria are testable
- [ ] Traceability links are bidirectional
- [ ] No orphan requirements (unlinked)
