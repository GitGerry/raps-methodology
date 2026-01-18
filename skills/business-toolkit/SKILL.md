---
name: Business Analyst Toolkit
description: Strategic Analysis, Process Mapping, and ROI Calculation.
---

# 💼 Business Analyst Toolkit (The Strategy Engine)

> [!IMPORTANT]
> **ANTI-HALLUCINATION PROTOCOL**
> 1. **NO GUESSING:** You cannot "infer" a business process or pricing model.
> 2. **NO FAKE DATA:** Do not invent competitors or market trends.
> 3. **EVIDENCE FIRST:** If you lack data (e.g., "Current Process"), you MUST trigger the `INTERVIEW_QUESTIONNAIRE` or `research-toolkit`.
> 4. **INTELLIGENCE INGESTION:** You MUST read `RSRCH_SYNTHESIS.md` and map findings to strategy.

## Purpose
To define the **Commercial & Operational Logic** of the product.
Combines "Market Context" (External) with "Business Rules" (Internal).

## When to Use
- Determining pricing strategy
- Mapping business logic
- Analyzing market fit

---

## Tool Interface

### Inputs
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `action` | enum | ✅ | `"analyze_market"` \| `"define_rules"` \| `"map_process"` |
| `focus_area` | string | ✅ | Specific domain (e.g., "Subscription Pricing", "Refund Flow") |
| `source_evidence` | string | ✅ | **REQUIRED.** Path to `QUESTIONNAIRE_*.md` or `research/` file. |

### Outputs
| Artifact | Path Pattern | Validated By |
| :--- | :--- | :--- |
| **Business Rules** | `docs/business/BRD_BUSINESS_RULES.md` | User Review |
| **Market Analysis** | `docs/business/BRD_MARKET_ANALYSIS.md` | User Review |
| **Process Map** | `docs/business/BRD_PROCESS_MAP.md` | User Review / `/architect` |
| **Domain Glossary** | `docs/business/BRD_DOMAIN_GLOSSARY.md` | User Review / `/architect` |

---

## 🧠 Thinking Logic (How to Execute)

### 🔍 Intelligence Ingestion (The Research Bridge)
Before drafting strategy:
1. **Extract Competitive Edge**: Map `RS-####` findings to Section 1 of `BRD_MARKET_ANALYSIS.md`.
2. **Extract Market Risks**: Map `RS-####` findings directly to `RAID_LOG.md` (RISK ID).
3. **Extract Pricing Data**: Use `RSRCH_EVIDENCE_LOG.md` to define the "Competitive Baseline" in `BRD_BUSINESS_RULES.md`.

### A. Pricing & Monetization
1.  **Identify Model:** Is this SaaS (Recurring), Marketplace (Take-rate), or One-time?
2.  **Benchmark:** Find 3 *real* competitors using `/research-toolkit`. Quote their actual pricing.
3.  **Find the Gate:** What feature forces the upgrade from Free to Pro?
4.  **Recommend:** Define Feature Gating logic.
    *   **Action:** Fill out `Feature Gate` Matrix in `BRD_BUSINESS_RULES.md` (e.g. "Free = 3 Projects").

### B. Business Process Logic (As-Is vs To-Be)
1.  **Map Current State:** Use `INTERVIEW_QUESTIONNAIRE` data. *If no data exists, STOP and ask the user.*
2.  **Highlight Friction:** Mark steps that are "Manual" or "Slow".
3.  **Design Future State:** Remove the friction steps using software automation.
4.  **Verify Compliance:** Does this new flow break any rules (GAAP, HIPAA)?
5.  **Calculate ROI:** Quantify the improvement.
    *   *Prompt:* "How much faster is To-Be?" -> Fill Section 5 of `BRD_PROCESS_MAP.md`.

### C. Market Analysis (The "Why")
1.  **Size the Prize:** Is this a niche or a mass market?
2.  **Identify Trends:** Use `/research-toolkit` to find valid citations (e.g. "Gartner says...").

### D. Domain Language Analysis (Ubiquitous Language)
1.  **Extract Nouns:** Scan the `source_evidence` (Questionnaire/Research) for recurring nouns (e.g., "Member", "Cart", "Deal").
2.  **Define:** Create rigid definitions in `BRD_DOMAIN_GLOSSARY.md`.
3.  **Banish Synonyms:** Explicitly list forbidden terms (e.g., "Do not use 'User', use 'Member'").

### E. Business Rules Definition (The Contract)
1.  **RBAC Matrix:** Define permissions for EVERY User Role.
    *   *Prompt:* "Can a [Role] perform [Action]?" -> Fill Section 2 of `BRD_BUSINESS_RULES.md`.
2.  **Invariant Logic (Golden Rules):** Define constraints that are ALWAYS true.
    *   *Example:* "Wallet Balance >= 0". This drives DB Constraints.
3.  **Compliance:** Map legal constraints (GDPR, Tax) to technical retention policies.

---

## ✅ Definition of Done (DOD)
- [ ] `BRD_BUSINESS_RULES` defines RBAC and Invariant Logic.
- [ ] `BRD_PROCESS_MAP` includes To-Be flow and ROI logic.
- [ ] `BRD_DOMAIN_GLOSSARY` defines ubiquitous language.
- [ ] Evidence cited for all market claims.
- [ ] Handed off to Product/Analyst.

---

## 📂 Output Modules

| Module | Template | Purpose |
| :--- | :--- | :--- |
| **Business Rules** | `./templates/BRD_BUSINESS_RULES.md` | Pricing, Compliance, Legal constraints. |
| **Market Analysis** | `./templates/BRD_MARKET_ANALYSIS.md` | TAM, Competitors, SWOT. |
| **Process Map** | `./templates/BRD_PROCESS_MAP.md` | Mermaid diagrams of workflows. |
| **Domain Glossary** | `./templates/BRD_DOMAIN_GLOSSARY.md` | Ubiquitous Language definitions. |
