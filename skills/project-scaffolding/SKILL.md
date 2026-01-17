---
name: Project Scaffolding
description: Project initialization templates and folder structure standards
---

# Project Scaffolding

## Purpose
Provide templates and standards for initializing new RAPS projects, including folder structure, initial artifacts, and setup checklists.

## When to Use
- Starting a new project
- Initializing project structure
- Creating initial documentation
- Setting up RAPS artifacts

---

## Tool Interface

### Inputs
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project_name` | string | ✅ | Name of the new project |
| `project_type` | enum | ❌ | `"web_app"` \| `"api"` \| `"library"` \| `"full_stack"` |

### Outputs
- **Type:** Folder structure + files
- **Structure:** Standard RAPS project scaffold

---

## 1. Standard Folder Structure

```
project-root/
├── .raps/                  # System Files (AI Brain)
│   ├── MEMORY.md           # Cross-session context
│   ├── SESSION_LOG.md      # Activity log
│   └── HANDOFF_NOTES.md    # Persona transitions
├── .agent/
│   └── workflows/          # Symlink or copy from raps-methodology
├── docs/
│   ├── business/           # BRD artifacts
│   ├── functional/         # FRD artifacts
│   ├── technical/          # SDD/ADR artifacts
│   ├── management/         # Plans, Risks, Retros
│   └── qa/                 # Test Plans
├── research/               # Research outputs
├── frontend/               # UI code (/design lane)
├── backend/                # Server code (/build lane)
├── tests/                  # Test files (/test lane)
├── PLAN.md                 # Master Ledger
└── README.md               # Project overview
```

---

## 2. Initial Artifact Templates

### PLAN.md (Master Ledger)
See `templates/PLAN_TEMPLATE.md` for full template.

### SESSION_LOG.md
```markdown
# Session Log

| Timestamp | Persona | Action | Status | Files | Notes |
|-----------|---------|--------|--------|-------|-------|
| [DATE] | /initialize | Project scaffolded | ✅ DONE | - | Initial setup |
```

### HANDOFF_NOTES.md
```markdown
# Handoff Notes

## /initialize → /research
**Date:** [TIMESTAMP]

### Project Setup Complete
- Folder structure created
- Initial artifacts in place
- Ready for research phase

### Recommended Research
- [Topic 1]
- [Topic 2]

### Files Created
- `PLAN.md`
- `SESSION_LOG.md`
- `HANDOFF_NOTES.md`
```

### MEMORY.md
See `templates/MEMORY.md` for full template.

---

## 3. Additional Templates
The following templates are available in the `templates/` directory:
- `CHARTER_TEMPLATE.md` (Project Charter)
- `CONTRIBUTING_TEMPLATE.md` (Contribution Guidelines)
- `SECURITY_TEMPLATE.md` (Security Policy)
- `PULL_REQUEST_TEMPLATE.md` (PR Description)
- `ADR_TEMPLATE.md` (Architecture Decision Record)
- `ENV_TEMPLATE.example` (.env example)
- `CONFIG_TEMPLATE.json` (raps.config.json)
- `CI_TEMPLATE.yml` (GitHub Actions CI)

---

## 2. Project Sizing & Documentation Tiers

> **CRITICAL:** Before generating artifacts, determine the **Project Tier**. Do not over-document prototypes or under-document enterprise systems.

### 🏁 Step 1: Determine Tier

| Tier | Profile | Characteristics | Duration | Examples |
|------|---------|-----------------|----------|----------|
| **Tier 1** | **Prototype** | Solo dev, throwaway code, speed is everything. | < 2 weeks | Hackathon entry, script, POC |
| **Tier 2** | **Project** | Small team, production use, long-term maintenance. | 1-6 mos | Internal tool, feature add-on, MVP |
| **Tier 3** | **Product** | Public facing, paying users, reliability critical. | 6-12 mos | SaaS app, mobile app, core service |
| **Tier 4** | **Enterprise** | Mission critical, compliance reqs, distributed teams. | > 1 year | Banking system, healthcare platform, OS |

### 📑 Step 2: Select Documentation Profile

| Document | Tier 1 | Tier 2 | Tier 3 | Tier 4 |
|----------|:------:|:------:|:------:|:------:|
| `README.md` | ✅ | ✅ | ✅ | ✅ |
| `PLAN.md` | ✅ | ✅ | ✅ | ✅ |
| `SESSION_LOG.md` | ✅ | ✅ | ✅ | ✅ |
| `REQUIREMENTS.md` | ❌ | Simplified | ✅ | ✅ |
| `SPECS.md` | ❌ | ✅ | ✅ | ✅ |
| `DECISION_LOG.md` | ❌ | ⚠️ | ✅ | ✅ |
| **Diagrams** | ❌ | Core Flows | Architecture | Full UML/BPMN |
| **Security Risk Assessment** | ❌ | ❌ | ⚠️ | ✅ |
| **Test Plan** | ❌ | ❌ | ✅ | ✅ |
| **Disaster Recovery Plan** | ❌ | ❌ | ❌ | ✅ |
| **SLA / SLO Definitions** | ❌ | ❌ | ❌ | ✅ |
| **Change Management Log** | ❌ | ❌ | ⚠️ | ✅ |

---

## 3. Project Initialization Checklist

### Pre-Initialization
- [ ] Project name defined
- [ ] High-level goal understood
- [ ] Stakeholders identified
- [ ] Timeline expectations set

### Initialization Steps
1. [ ] Create project root folder
2. [ ] Create folder structure (see above)
3. [ ] Create `PLAN.md` from template
4. [ ] Create `.raps` directory (Hidden)
5. [ ] Create `SESSION_LOG.md` in `.raps/`
6. [ ] Create `HANDOFF_NOTES.md` in `.raps/`
7. [ ] Create `CHARTER.md` in root from `CHARTER.md` template
8. [ ] Create `RAID_LOG.md` in `/docs/management/` from `RAID_LOG.md` template
9. [ ] Create `DECISION_LOG.md` from template in `/docs/management/`
10. [ ] Create `MEMORY.md` in `.raps/`
8. [ ] Create project `README.md`
9. [ ] Initialize git repository
10. [ ] Log session to `SESSION_LOG.md`
11. [ ] **Register project in Dashboard:**
    ```bash
    # Run from project root
    # Ensure $RAPS_ROOT is defined (e.g. C:\Users\gerry\OneDrive\Desktop\LLM\RAPS\raps-methodology)
    node "$RAPS_ROOT/skills/project-scaffolding/scripts/register-project.js" "$RAPS_ROOT/dashboard/projects.json" "[project-id]" "[Project Name]" "$(pwd)"
    ```

### Post-Initialization
- [ ] Update `PLAN.md` with initial tasks
- [ ] Log any initial decisions to `DECISION_LOG.md`
- [ ] Set Squad Status (/initialize → ✅ DONE)
- [ ] Handoff to next persona (/research or /analyst)

---

## 4. README.md Template

See `templates/README_TEMPLATE.md` for full template.

---

## 5. Git Initialization

```bash
# Initialize repo
git init

# Create .gitignore
# Copy .gitignore from template
cp "$RAPS_ROOT/skills/project-scaffolding/templates/GITIGNORE_TEMPLATE.gitignore" .gitignore

# Initial commit
git add -A
git commit -m "chore: Initialize project with RAPS scaffolding"
```

---

## 6. Technology-Specific Additions

### Web App (Next.js)
```
frontend/
├── src/
│   ├── app/
│   ├── components/
│   └── lib/
├── public/
├── package.json
└── tailwind.config.js
```

### API (Node/Express)
```
backend/
├── src/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   └── services/
├── package.json
└── tsconfig.json
```

---

## How to Verify

- [ ] All required folders created
- [ ] PLAN.md and CHARTER.md exist
- [ ] SESSION_LOG.md has initialization entry
- [ ] Git repository initialized
- [ ] Handoff notes written
