---
name: Memory Update
description: Update project memory with entities, decisions, and patterns
---

# Memory Update Skill

## Purpose
Maintain the project's memory system by extracting and recording entities, decisions, and patterns from recent work sessions. This enables cross-session context retention.

## When to Use
- End of each work session
- After `/retro` captures lessons learned
- After significant decisions are made
- When new external systems/APIs are researched

---

## Tool Interface

### Inputs
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `memory_file` | path | ✅ | Path to project's `.raps/MEMORY.md` file |
| `session_log` | path | ✅ | Path to `.raps/SESSION_LOG.md` for extraction |
| `update_type` | enum | ✅ | One of: `entity`, `decision`, `pattern`, `context`, `all` |

### Outputs
- **Type:** Markdown (updated MEMORY.md)
- **Structure:** Appended entries to relevant section

### Implementation
Manual process following the instructions below.

### Example
> "Update memory with new entities from today's research on Stripe API"
> Result: New row added to Entity Memory table

---

## Instructions

### 1. Read Current Memory
Open the project's `.raps/MEMORY.md` file and review existing entries to avoid duplicates.

### 2. Scan Recent Session Log
Review `.raps/SESSION_LOG.md` for entries since last memory update:
- Look for new external systems, APIs, or technologies → **Entity Memory**
- Look for architectural choices and rationale → **Decision Memory**
- Look for successes or failures worth remembering → **Pattern Memory**

### 3. Extract Entities

For each new entity discovered:
```markdown
| [Entity Name] | [Type] | [Today's Date] | [Key Facts] |
```

**Entity Types:**
- `Person` — Stakeholder, user, team member
- `Company` — External vendor, partner, client
- `Tech` — Library, framework, API, service
- `Concept` — Domain term, business rule

### 4. Extract Decisions

For significant decisions:
```markdown
| [Decision] | [Date] | [Rationale] | [Persona] | [Impact Area] |
```

**What qualifies as a decision:**
- Technology choices
- Architectural patterns
- Scope in/out determinations
- Trade-off resolutions

### 5. Extract Patterns

From retrospectives or observations:

**For successes:**
```markdown
| [What worked] | [Context] | [Date] |
```

**For failures:**
```markdown
| [What failed] | [Context] | [Lesson learned] | [Date] |
```

### 6. Update Context Section

If relevant:
- Update current sprint/phase
- Add new open questions
- Record new assumptions

### 7. Prune Stale Entries

During memory update, consider removing:
- Entities no longer relevant
- Decisions that were reversed
- Patterns that are now common knowledge

---

## Quality Checklist
- [ ] No duplicate entries added
- [ ] All entries have dates
- [ ] Entity facts are concise (1-2 sentences)
- [ ] Decision rationale is clear
- [ ] Pattern lessons are actionable

---

## Integration with Workflows

### After /research
- Extract discovered APIs, technologies → Entity Memory
- Note any feasibility concerns → Cross-Session Context

### After /architect
- Record major technical decisions → Decision Memory
- Document assumptions made → Assumptions table

### After /retro
- Capture what worked/didn't → Pattern Memory
- Update current phase info → Cross-Session Context

### After /test (failures)
- Document debugging insights → Pattern Memory
- Note workarounds discovered → What Worked

---

## How to Verify
- Memory file updated with new entries
- No placeholder text in entries
- Entries are concise and useful
- Dates are accurate
