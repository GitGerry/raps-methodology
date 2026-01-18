# 🛠️ RAPS Skills

Specialized instruction sets that extend AI capabilities for RAPS workflows.

## Available Skills

### General Skills
| Skill | Command | Description |
|-------|---------|-------------|
| [**Import Requirements**](import-requirements/SKILL.md) | `/import-requirements` | Convert external docs (PRDs, Jira) to RAPS format |
| [**Generate Tests**](generate-tests/SKILL.md) | `/generate-tests` | Auto-create test cases from requirements |
| [**Sprint Planning**](sprint-plan/SKILL.md) | `/sprint-plan` | Create sprint plans with effort estimation |
| [**Impact Analysis**](impact-analysis/SKILL.md) | `/impact-analysis` | Assess ripple effects of changes |
| [**Sync RAPS**](sync-raps/SKILL.md) | `/sync-raps` | Sync Brain ↔ Repo |
| [**Agile Toolkit**](agile-toolkit/SKILL.md) | `/agile-toolkit` | Agile ceremonies & artifacts |
| [**UX Toolkit**](ux-toolkit/SKILL.md) | `/ux-toolkit` | User Experience design & research |
| [**Business Analyst Toolkit**](business-toolkit/SKILL.md) | `/business-toolkit` | Business Rules, ROI, Domain Glossary, Market Analysis |
| [**Product Manager Toolkit**](product-toolkit/SKILL.md) | `/product-toolkit` | Product Vision, VoC Benchmarking, UX Patterns |
| [**Build Toolkit**](build-toolkit/SKILL.md) | `/build-toolkit` | Code Standards, Logic Bridges, RAID Seeding |

| [**Memory Update**](memory-update/SKILL.md) | `/memory-update` | Update RAPS Brain with new information |
| [**Spec Review**](spec-review/SKILL.md) | `/spec-review` | Review specifications against requirements |
| [**Debug Assist**](debug-assist/SKILL.md) | `/debug-assist` | Structured debugging workflow |



### Research Skills
| Skill | Command | Description |
|-------|---------|-------------|
| **API Research** | `/research-api` | Deep-dive API investigation (auth, rate limits, pricing) |
| **Competitor Analysis** | `/research-competitor` | SWOT, feature matrix, pricing comparison |
| **Technology Evaluation** | `/research-technology` | Weighted scorecard for tech decisions |
| **Market Research** | `/research-market` | TAM/SAM/SOM, trends, user demographics |
| **Feasibility Study** | `/research-feasibility` | Technical, operational, economic assessment |
| **Summarize** | `/research-summarize` | Condense documents into structured findings |
| **Research Toolkit** | `/research-toolkit` | Evidence standards & quality ratings |

### Persona Toolkits
| Skill | Used By | Description |
|-------|---------|-------------|
| [**Agile Toolkit**](agile-toolkit/SKILL.md) | `/build`, `/design`, `/review`, `/sprint`, `/retro`, `/test` | DoR/DoD, sprint planning, retrospectives |
| [**Project Scaffolding**](project-scaffolding/SKILL.md) | `/initialize` | Project structure templates |
| [**Analyst Toolkit**](analyst-toolkit/SKILL.md) | `/analyst` | Functional Analyst Toolkit: Stories, Specs, Registry |
| [**Architecture Toolkit**](architecture-toolkit/SKILL.md) | `/architect` | Spec templates, ADR format, auto-mode |
| [**QA Toolkit**](qa-toolkit/SKILL.md) | `/test` | Test protocols & coverage standards |
| [**Security Toolkit**](security-toolkit/SKILL.md) | `/security` | OWASP checklists & vulnerability templates |
| [**UX Toolkit**](ux-toolkit/SKILL.md) | `/ux` | Heuristics, UAT templates |
| [**Deploy Toolkit**](deploy-toolkit/SKILL.md) | `/deploy` | Deployment runbooks, rollback procedures |

## How to Use

1. Invoke the skill by name when relevant
2. The AI reads the `SKILL.md` file for instructions
3. Follow the skill's workflow

## Skill Structure

```
skills/
└── [skill-name]/
    ├── SKILL.md       # Main instructions (required)
    ├── scripts/       # Helper utilities (optional)
    ├── examples/      # Reference implementations (optional)
    └── resources/     # Templates, assets (optional)
```

### Required SKILL.md Sections

Every SKILL.md should include these sections in order:

1. **YAML Frontmatter** — `name` and `description`
2. **Purpose** — What this skill does and when to use it
3. **Tool Interface** (NEW) — Standardized inputs, outputs, and implementation
4. **Instructions** — Step-by-step workflow
5. **How to Verify** — Validation checklist

See `project-scaffolding/SKILL.md` for a reference implementation of the Tool Interface format.

## Adding New Skills

1. Create a folder in `skills/[skill-name]/`
2. Add `SKILL.md` with YAML frontmatter:
   ```yaml
   ---
   name: Skill Name
   description: What this skill does
   ---
   ```
3. Document instructions, templates, and verification steps

## Skill Best Practices

- ✅ Clear, actionable instructions
- ✅ Templates for output
- ✅ Verification checklist
- ✅ Examples when complex
- ❌ Don't assume context — be explicit
- ❌ Don't overlap with existing workflows
