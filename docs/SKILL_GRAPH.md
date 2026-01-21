# 🗺️ RAPS Skill Dependency Graph

Visual mapping of skill-to-workflow relationships.

---

## Workflow → Skill Dependencies

```mermaid
flowchart LR
    subgraph Personas["Persona Workflows"]
        INIT["/initialize"]
        ANALYST["/analyst"]
        ARCH["/architect"]
        BUILD["/build"]
        DESIGN["/design"]
        TEST["/test"]
        REVIEW["/review"]
        SECURITY["/security"]
        UX["/ux"]
        DEPLOY["/deploy"]
    end

    subgraph Primary["Primary Toolkits"]
        PS["project-scaffolding"]
        AT["analyst-toolkit"]
        ARCHT["architecture-toolkit"]
        BT["build-toolkit"]
        DT["design-toolkit"]
        QT["qa-toolkit"]
        ST["security-toolkit"]
        UXT["ux-toolkit"]
        DEPT["deploy-toolkit"]
    end

    subgraph Supporting["Supporting Toolkits"]
        RT["research-toolkit"]
        PT["product-toolkit"]
        BUS["business-toolkit"]
        AGT["agile-toolkit"]
        STD["standards-toolkit"]
        REV["review-toolkit"]
        REL["release-toolkit"]
    end

    INIT --> PS
    ANALYST --> AT
    ANALYST --> RT
    ANALYST --> PT
    ANALYST --> BUS
    ARCH --> ARCHT
    ARCH --> RT
    BUILD --> BT
    BUILD --> AGT
    DESIGN --> DT
    DESIGN --> AGT
    TEST --> QT
    TEST --> AGT
    REVIEW --> REV
    SECURITY --> ST
    UX --> UXT
    DEPLOY --> DEPT
    DEPLOY --> REL
```

---

## Skill Categories

### Persona Toolkits (9)
Primary skills loaded by persona Entry Checklists.

| Skill | Workflow | Lines |
|-------|----------|-------|
| `project-scaffolding` | /initialize | 212 |
| `analyst-toolkit` | /analyst | 185 |
| `architecture-toolkit` | /architect | 145 |
| `build-toolkit` | /build | 95 |
| `design-toolkit` | /design | 115 |
| `qa-toolkit` | /test | 142 |
| `security-toolkit` | /security | 170 |
| `ux-toolkit` | /ux | 130 |
| `deploy-toolkit` | /deploy | 125 |

### Supporting Toolkits (8)
Shared skills loaded by multiple workflows.

| Skill | Used By | Purpose |
|-------|---------|---------|
| `research-toolkit` | /analyst, /architect | Intelligence gathering |
| `product-toolkit` | /analyst | PM/UX direction |
| `business-toolkit` | /analyst | BA strategy |
| `agile-toolkit` | /build, /design, /test | DoR/DoD |
| `standards-toolkit` | /raps-improve | Quality enforcement |
| `review-toolkit` | /review | PR standards |
| `release-toolkit` | /deploy, /release | Versioning |
| `handoff` | All personas | Transition templates |

### Utility Skills (10)
Standalone capabilities invoked on demand.

| Skill | Purpose |
|-------|---------|
| `compliance-check` | Regulatory validation |
| `debug-assist` | Troubleshooting protocols |
| `document-gen` | Documentation automation |
| `estimate` | Effort estimation |
| `generate-tests` | Test case generation |
| `impact-analysis` | Change assessment |
| `import-requirements` | External req ingestion |
| `memory-update` | Context persistence |
| `spec-review` | Specification validation |
| `sync-raps` | Brain↔Repo sync |

---

## Cross-Skill Dependencies

```mermaid
flowchart TD
    RT["research-toolkit"] --> AT["analyst-toolkit"]
    RT --> ARCHT["architecture-toolkit"]
    BUS["business-toolkit"] --> AT
    PT["product-toolkit"] --> AT
    AGT["agile-toolkit"] --> BT["build-toolkit"]
    AGT --> DT["design-toolkit"]
    AGT --> QT["qa-toolkit"]
    STD["standards-toolkit"] --> ALL["All Workflows"]
    HO["handoff"] --> ALL
```

---

## Quick Reference

### Loading a Skill
```markdown
**Load Skill:** `view_file("skills/[skill-name]/SKILL.md")`
```

### Skill Entry Checklist Pattern
1. Read PLAN.md
2. Load primary skill
3. Load supporting skills (if applicable)
4. Load agile-toolkit for DoD (build/design/test)
