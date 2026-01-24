# 🧠 DECISION LOG
> "If you debate it, Log it."

This log tracks **ALL** decisions: from massive Architecture changes (ADR) to small Library choices (LIB).

## Decision Types
*   **[ADR]:** Architecture (System Patterns, Database) -> Requires `/docs/decisions/ADR-###.md`
*   **[LIB]:** Library/Tool Choice (Axios vs Fetch, Zod vs Yup) -> One-liner below.
*   **[PROD]:** Product Scope (Splitting features, cutting scope) -> One-liner below.
*   **[CODE]:** implementation Trade-off (Refactor vs Patch) -> One-liner below.

---

## 📜 Decision Registry

| ID | Date | Type | Title | Context / Trade-off | Winner |
|:---:|:---:|:---:|:---|:---|:---|
| 000 | 202X-XX-XX | [ADR] | **Project Init** | N/A | Next.js + Node |
| 001 | 202X-XX-XX | [LIB] | **HTTP Client** | Axios (Features) vs Fetch (Native) | **Axios** |
| 002 | 202X-XX-XX | [PROD] | **MVP Scope** | Auth vs No-Auth | **No-Auth** |

---

## 📝 Detailed Records (ADRs Only)
> Only create detailed entries below (or separate files) for **[ADR]** items.
> For [LIB], [PROD], [CODE], the table row above is sufficient.

### [ID-000] Project Initialization
**Context:** Standard RAPS Setup.
**Consequences:** Follows Enterprise Standard.

