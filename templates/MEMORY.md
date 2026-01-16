# 🧠 Project Memory

> Persistent cross-session context for AI-assisted development

This template provides a structured way to retain information across work sessions, inspired by CrewAI's memory system but adapted for human-readable markdown.

---

## Entity Memory

Track key entities (people, companies, technologies, concepts) mentioned across sessions.

| Entity | Type | First Seen | Key Facts |
|--------|------|------------|-----------|
| _[Name]_ | Person/Company/Tech/Concept | _[Date]_ | _[Important facts]_ |

**Example:**
| Entity | Type | First Seen | Key Facts |
|--------|------|------------|-----------|
| Stripe | Company | 2026-01-15 | Payment API, 2.9% + $0.30 per transaction, webhook-based |
| OAuth 2.0 | Tech | 2026-01-14 | Auth standard, using PKCE flow, tokens expire in 1hr |

---

## Decision Memory

Key architectural and design decisions with rationale (distilled from ADRs and session logs).

| Decision | Date | Rationale | Persona | Impact |
|----------|------|-----------|---------|--------|
| _[What was decided]_ | _[Date]_ | _[Why]_ | _[Who]_ | _[What it affects]_ |

**Example:**
| Decision | Date | Rationale | Persona | Impact |
|----------|------|-----------|---------|--------|
| Use PostgreSQL over MongoDB | 2026-01-10 | Strong relations, ACID needed | /architect | Database layer |
| JWT for auth tokens | 2026-01-12 | Stateless, works with microservices | /architect | Auth system |

---

## Pattern Memory

What worked and what didn't work—populated by `/retro` and ongoing observations.

### ✅ What Worked Well
| Pattern | Context | Date |
|---------|---------|------|
| _[Approach that succeeded]_ | _[When/where it worked]_ | _[Date]_ |

### ❌ What Didn't Work
| Anti-Pattern | Context | Lesson Learned | Date |
|--------------|---------|----------------|------|
| _[Approach that failed]_ | _[When/where]_ | _[What to do instead]_ | _[Date]_ |

---

## Cross-Session Context

Important context to carry forward that doesn't fit the above categories.

### Current Sprint/Phase
- **Sprint:** _[Sprint number/name]_
- **Focus:** _[Main objective]_
- **Blockers:** _[Active blockers]_

### Open Questions
| ID | Question | Raised By | Affects |
|----|----------|-----------|---------|
| Q1 | _[Question]_ | _[Persona]_ | _[What it blocks]_ |

### Assumptions in Play
| Assumption | Made By | Date | Validation Status |
|------------|---------|------|-------------------|
| _[Assumption]_ | _[Persona]_ | _[Date]_ | Unvalidated/Validated/Invalidated |

---

## How to Update

### When to Update Entity Memory
- After `/research` discovers new external systems/APIs
- When new stakeholders are mentioned
- When technologies are adopted or rejected

### When to Update Decision Memory
- After `/architect` makes technical decisions
- After ADRs are created
- After significant `/retro` insights

### When to Update Pattern Memory
- After `/retro` captures lessons learned
- When a solution fails or succeeds unexpectedly
- After debugging sessions reveal insights

---

## Usage Notes

1. **Keep it concise** — This is a reference, not a journal
2. **Update regularly** — Stale memory is worse than no memory
3. **Review at session start** — Use `/status` to check memory
4. **Prune periodically** — Remove outdated entries during `/retro`
