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
│   └── MEMORY.md           # Cross-session context
├── SESSION_LOG.md          # Activity log
├── HANDOFF_NOTES.md        # Persona transitions
├── .agent/
│   └── workflows/          # Symlink or copy from raps-methodology
├── docs/
│   ├── business/           # BRD artifacts
│   ├── functional/         # FRD artifacts
│   ├── technical/          # SDD artifacts
│   ├── api/                # OpenAPI/Swagger Specs
│   ├── decisions/          # Architecture Decision Records (ADRs)
│   ├── diagrams/           # Analyst "Visual Bridges" (ERDs, trees)
│   ├── management/         # Plans, Risks, Retros
│   └── qa/                 # Test Plans
├── types/                  # Shared TypeScript/State types
├── schemas/                # Database/JSON schemas
├── research/               # Research outputs
├── frontend/               # UI code (/design lane)
├── backend/                # Server code (/build lane)
├── tests/                  # Test files (/test lane)
├── scripts/                # Utility scripts
│   └── check_integrity.ps1 # RAPS Self-Healing
├── PLAN.md                 # Master Ledger
├── README.md               # Project overview
├── .tool-versions          # Deterministic Runtime
└── CONTRIBUTING.md         # Developer Guidelines
```

---

## 2. Initial Artifact Templates

### PLAN.md (Master Ledger)
See `./templates/PLAN_TEMPLATE.md` for full template.

### SESSION_LOG.md
See `./templates/SESSION_LOG_TEMPLATE.md` for full template.

### HANDOFF_NOTES.md
See `./templates/HANDOFF_NOTES_TEMPLATE.md` for full template.

### MEMORY.md
See `./templates/MEMORY_TEMPLATE.md` for full template.

---

## 3. Additional Templates
The following templates are available in the `./templates/` directory:
- `CHARTER_TEMPLATE.md` (Project Charter)
- `CONTRIBUTING_TEMPLATE.md` (Contribution Guidelines)
- `SECURITY_TEMPLATE.md` (Security Policy)
- `PULL_REQUEST_TEMPLATE.md` (PR Description)
- `ADR_TEMPLATE.md` (Architecture Decision Record)
- `ENV_TEMPLATE.example` (.env example)
- `CONFIG_TEMPLATE.json` (raps.config.json)
- `CI_TEMPLATE.yml` (GitHub Actions CI)

---

## 4. Documentation Standards
> **CRITICAL:** RAPS enforces **Enterprise Rigor** for all projects, regardless of size. This ensures auditability, scalability, and AI context retention.

### 📑 Mandatory Documentation Profile (Enterprise Standard)

| Document | Requirement | Purpose |
|----------|:-----------:|---------|
| `README.md` | ✅ REQUIRED | Project overview and setup. |
| `PLAN.md` | ✅ REQUIRED | One-truth ledger of all tasks. |
| `SESSION_LOG.md` | ✅ REQUIRED | Audit trail of all AI actions. |
| `MEMORY.md` | ✅ REQUIRED | Persistent cross-session context (RAM). |
| `DECISION_LOG.md` | ✅ REQUIRED | Hard log of architectural decisions (Audit). |
| `RAID_LOG.md` | ✅ REQUIRED | Risks, Assumptions, Issues, Dependencies. |
| `CHARTER.md` | ✅ REQUIRED | Project boundaries and scope. |
| `BRD / UX / FRD` | ✅ REQUIRED | Strategic (BRD), Experience (UX), and Functional (FRD) specs. |
| `SDD` | ✅ REQUIRED | System design documents. |
| **Security Assessment** | ✅ REQUIRED | Security posture and risk analysis. |
| **Test Plan** | ✅ REQUIRED | Strategy for QA and verification. |
| **Disaster Recovery** | ✅ REQUIRED | Plan for system failure/data loss. |

---

## 5. Project Initialization Checklist

### Pre-Initialization
- [ ] Project name defined
- [ ] High-level goal understood
- [ ] Stakeholders identified
- [ ] Timeline expectations set

### Initialization Steps
1.  [ ] Create project root folder
2.  [ ] Create folder structure (Business, Functional, Technical, API, Decisions, Diagrams, Management, QA)
3.  [ ] Create `/types/` and `/schemas/` directories
4.  [ ] Create `PLAN.md` from template
5.  [ ] Create `.raps/` directory (System Files)
6.  [ ] Create `SESSION_LOG.md` in root
7.  [ ] Create `HANDOFF_NOTES.md` in root
8.  [ ] Create `MEMORY.md` in `.raps/`
9.  [ ] Create `CHARTER.md` in root from `CHARTER_TEMPLATE.md`
10. [ ] Create `RAID_LOG.md` in root from `RAID_LOG_TEMPLATE.md`
11. [ ] Create `DECISION_LOG.md` in root from `DECISION_LOG_TEMPLATE.md`
12. [ ] Create project `README.md` from template
13. [ ] Initialize git repository
14. [ ] Copy `scripts/check_integrity.ps1` from RAPS root
15. [ ] Log session to `SESSION_LOG.md`

### Post-Initialization
- [ ] Update `PLAN.md` with initial tasks
- [ ] Log any initial decisions to `DECISION_LOG.md`
- [ ] Set Squad Status (/initialize → ✅ DONE)
- [ ] Handoff to next persona (/research or /analyst)

---

## 6. README.md Template

See `templates/README_TEMPLATE.md` for full template.

---

## 7. Git Initialization

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
- [ ] RAID_LOG.md and DECISION_LOG.md exist
- [ ] SESSION_LOG.md has initialization entry
- [ ] Git repository initialized
- [ ] Handoff notes written
