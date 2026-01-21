# 🛠️ RAPS Skills

Specialized instruction sets that extend AI capabilities for RAPS workflows.

## Persona Toolkits (Primary)

| Skill | Used By | Description |
|-------|---------|-------------|
| [**Analyst Toolkit**](analyst-toolkit/SKILL.md) | `/analyst` | Requirements, User Stories, Traceability |
| [**Architecture Toolkit**](architecture-toolkit/SKILL.md) | `/architect` | Spec templates, ADR format |
| [**Build Toolkit**](build-toolkit/SKILL.md) | `/build` | Backend standards, defensive coding |
| [**Design Toolkit**](design-toolkit/SKILL.md) | `/design` | UI patterns, responsive standards |
| [**QA Toolkit**](qa-toolkit/SKILL.md) | `/test` | Test protocols, coverage standards |
| [**Security Toolkit**](security-toolkit/SKILL.md) | `/security` | OWASP checklists, vulnerability templates |
| [**UX Toolkit**](ux-toolkit/SKILL.md) | `/ux` | Nielsen heuristics, UAT templates |
| [**Deploy Toolkit**](deploy-toolkit/SKILL.md) | `/deploy` | Deployment runbooks, rollback procedures |
| [**Standards Toolkit**](standards-toolkit/SKILL.md) | `/raps-improve` | S+ compliance enforcement |
| [**Project Scaffolding**](project-scaffolding/SKILL.md) | `/initialize` | Project structure templates |

## Supporting Toolkits

| Skill | Command | Description |
|-------|---------|-------------|
| [**Agile Toolkit**](agile-toolkit/SKILL.md) | `/sprint`, `/retro` | DoR, DoD, Sprint Planning, Story Points |
| [**Business Toolkit**](business-toolkit/SKILL.md) | `/analyst` | Business Rules, ROI, Domain Glossary |
| [**Product Toolkit**](product-toolkit/SKILL.md) | `/analyst` | Product Vision, Benchmarking |
| [**Research Toolkit**](research-toolkit/SKILL.md) | `/analyst` | Evidence standards, intelligence gathering |
| [**Review Toolkit**](review-toolkit/SKILL.md) | `/review` | PR checklist, merge criteria |
| [**Release Toolkit**](release-toolkit/SKILL.md) | `/release` | SemVer, changelog, rollback |

## Utility Skills

| Skill | Command | Description |
|-------|---------|-------------|
| [**Import Requirements**](import-requirements/SKILL.md) | `/import-requirements` | Convert external docs to RAPS format |
| [**Generate Tests**](generate-tests/SKILL.md) | `/generate-tests` | Auto-create test cases |
| [**Impact Analysis**](impact-analysis/SKILL.md) | `/impact-analysis` | Assess ripple effects of changes |
| [**Sync RAPS**](sync-raps/SKILL.md) | `/sync-raps` | Sync Brain ↔ Repo |
| [**Memory Update**](memory-update/SKILL.md) | `/memory-update` | Update RAPS Brain |
| [**Spec Review**](spec-review/SKILL.md) | `/spec-review` | Review specs against requirements |
| [**Debug Assist**](debug-assist/SKILL.md) | `/debug-assist` | Structured debugging workflow |
| [**Estimate**](estimate/SKILL.md) | `/estimate` | Effort estimation |
| [**Document Gen**](document-gen/SKILL.md) | `/document-gen` | Generate documentation |
| [**Handoff**](handoff/SKILL.md) | `/handoff` | Cross-persona handoff templates |
| [**Compliance Check**](compliance-check/SKILL.md) | `/compliance` | Regulatory compliance audits |

---

## Skill Structure

```
skills/
└── [skill-name]/
    ├── SKILL.md       # Main instructions (required)
    ├── templates/     # Output templates (optional)
    ├── scripts/       # Helper utilities (optional)
    └── examples/      # Reference implementations (optional)
```

## Adding New Skills

1. Create folder: `skills/[skill-name]/`
2. Copy `SKILL_TEMPLATE.md` as starting point
3. Add `SKILL.md` with YAML frontmatter:
   ```yaml
   ---
   name: Skill Name
   description: What this skill does
   ---
   ```
4. Include: Purpose, Instructions, How to Verify
5. Update this README with the new skill

> See [SKILL_TEMPLATE.md](SKILL_TEMPLATE.md) for gold standard format.
> See [SKILL_GRAPH.md](../docs/SKILL_GRAPH.md) for dependency mapping.

## Best Practices

- ✅ Clear, actionable instructions
- ✅ Templates for outputs
- ✅ Verification checklist
- ❌ Don't overlap with existing skills
- ❌ Don't assume context — be explicit
