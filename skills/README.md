# 🛠️ RAPS Skills

Specialized instruction sets that extend AI capabilities for RAPS workflows.

## Available Skills

### General Skills
| Skill | Command | Description |
|-------|---------|-------------|
| **Import Requirements** | `/import-requirements` | Convert external docs (PRDs, Jira) to RAPS format |
| **Generate Tests** | `/generate-tests` | Auto-create test cases from requirements |
| **Compliance Check** | `/compliance-check` | Validate RAPS documents against conventions |
| **Sprint Planning** | `/sprint-plan` | Create sprint plans with effort estimation |
| **Handoff Summary** | `/handoff` | Generate handoff notes between personas |
| **Impact Analysis** | `/impact-analysis` | Assess ripple effects of changes |
| **Spec Review** | `/spec-review` | Review specifications against requirements |
| **Debug Assist** | `/debug-assist` | Structured debugging workflow |
| **Estimate** | `/estimate` | Effort estimation using story points |
| **Document Gen** | `/document-gen` | Auto-generate documentation |
| **Onboard** | `/onboard` | Create onboarding docs for new team members |


### Research Skills
| Skill | Command | Description |
|-------|---------|-------------|
| **API Research** | `/research-api` | Deep-dive API investigation (auth, rate limits, pricing) |
| **Competitor Analysis** | `/research-competitor` | SWOT, feature matrix, pricing comparison |
| **Technology Evaluation** | `/research-technology` | Weighted scorecard for tech decisions |
| **Market Research** | `/research-market` | TAM/SAM/SOM, trends, user demographics |
| **Feasibility Study** | `/research-feasibility` | Technical, operational, economic assessment |
| **Summarize** | `/research-summarize` | Condense documents into structured findings |

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
