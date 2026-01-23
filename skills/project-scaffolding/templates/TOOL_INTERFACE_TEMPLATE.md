# Tool Interface Template

> Standard format for documenting skill/tool interfaces in RAPS

This template should be added to all SKILL.md files to provide a consistent, discoverable interface specification.

---

## Tool Interface Section

Add this section after "Purpose" and "When to Use" in every SKILL.md:

```markdown
## Tool Interface

### Inputs
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `param_name` | string/integer/enum/path/boolean | ✅/❌ | What this parameter does |

### Outputs
- **Type:** Markdown / JSON / File / Console
- **Structure:** [Brief description of output format]
- **Location:** [Where output is written, if applicable]

### Implementation
Uses `[tool/MCP server name]` with:
```json
{
  "parameter": "{value}"
}
```

### Example
> **Input:** "[Example input description]"
> **Output:** "[Example output summary]"
```

---

## Parameter Types

| Type | Description | Example |
|------|-------------|---------|
| `string` | Free text input | `"search query"` |
| `integer` | Whole number | `10` |
| `boolean` | True/false flag | `true` |
| `enum` | Fixed choices | `"high" \| "medium" \| "low"` |
| `path` | File system path | `/docs/SPECS.md` |
| `url` | Web URL | `https://api.example.com` |
| `array` | List of values | `["a", "b", "c"]` |

---

## Complete Example

Here's a full Tool Interface section for a research skill:

```markdown
## Tool Interface

### Inputs
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `topic` | string | ✅ | Subject to research |
| `depth` | enum | ❌ | `"quick"` \| `"standard"` \| `"deep"` (default: standard) |
| `sources` | integer | ❌ | Minimum sources to consult (default: 3) |
| `output_file` | path | ❌ | Custom output path (default: `/data/research/[TOPIC].md`) |

### Outputs
- **Type:** Markdown file
- **Structure:** Executive summary, key findings, source table, gaps
- **Location:** `/data/research/[TOPIC].md` or custom path

### Implementation

Uses `mcp_firecrawl-mcp_firecrawl_search` for web search:
```json
{
  "query": "{topic}",
  "limit": 10
}
```

Uses `mcp_firecrawl-mcp_firecrawl_scrape` for deep content:
```json
{
  "url": "{discovered_url}",
  "formats": ["markdown"],
  "onlyMainContent": true
}
```

### Example
> **Input:** `topic="OAuth 2.0 best practices"`, `depth="deep"`
> **Output:** `/data/research/OAUTH_BEST_PRACTICES.md` with 15+ sources, security analysis, implementation recommendations
```

---

## Why This Matters

1. **Discoverability** — AI can understand how to call the skill
2. **Consistency** — All skills follow the same pattern
3. **Validation** — Clear expectations for inputs/outputs
4. **Documentation** — Humans understand the skill quickly

---

## Checklist for New Skills

When creating a new skill, ensure the Tool Interface includes:

- [ ] All parameters documented with types
- [ ] Required vs optional clearly marked
- [ ] Default values noted for optional params
- [ ] Output type and structure described
- [ ] Implementation method specified
- [ ] At least one example provided
