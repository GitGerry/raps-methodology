name: Research Toolkit
description: Evidence standards & Intelligence Gathering (Analyst Research Mode)
---

# Research Toolkit (The Intelligence Engine)

## Purpose
Define standards for gathering, evaluating, and documenting research findings. Ensures all research is evidence-based, properly cited, and actionable.

## When to Use
- **Analyst [Phase 1.5]**: Gathering evidence for BRD/FRD.
- **Architect**: Validating technical feasibility/API sanity.
- Evaluating source quality and rating evidence.

- Evaluating source quality and rating evidence.

---

## Technical Tool Inventory
The Intelligence Engine utilizes a tiered toolset to ensure depth, accuracy, and anti-hallucination.

| Tool | Primary Purpose | Priority | Limitations |
|:---|:---|:---:|:---|
| **Context7 (MCP)** | Up-to-date library/framework documentation. | 1 | Best for coding questions; call `resolve-library-id` first. |
| **Exa.ai (Neural)** | Finding high-fidelity docs & "needle-in-haystack" tech. | 1 | Best for developers; search by meaning, not keyword. |
| **BuiltWith API** | Technology stack fingerprinting & Competitive Intel. | 1 | Critical for Architect feasibility checks. |
| **Crunchbase API** | Market sizing, funding trends, corporate health. | 1 | Best for BA Strategy Phase. |
| **Tavily (Agent)** | Multi-site autonomous deep research loops. | 2 | Ideal for synthesizing across disparate sources. |
| **Firecrawl** | Broad web scraping & autonomous navigation. | 2 | High token usage; best when specific APIs are not available. |
| **read_url_content** | Fast extraction of known static documentation. | 2 | No JS support; fails on complex SPAs. |

### 🚨 Priority Logic (v2.8)
1. **Introspection**: Use GitHub/Supabase MCP for RAPS-internal state.
2. **Library Docs**: Use **Context7** for "How to use React hooks" or "Next.js routing".
3. **Specialized Intelligence**:
   - Use **Exa** for "How to use Library X" or "Finding whitepapers".
   - Use **BuiltWith** for "What is Competitor Y's backend?".
   - Use **Crunchbase** for "Is Market Z growing?".
4. **Deep Synthesis**: Use **Tavily** for "Explain the pros/cons of Stack A vs B".
5. **General Crawling**: Use **Firecrawl** or **read_url_content** as fallback for general sites.

## Tool Interface

### Inputs
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `action` | enum | ✅ | `"evaluate_source"` \| `"rate_evidence"` \| `"create_output"` |
| `source_url` | string | ❌ | URL to evaluate |
| `research_type` | enum | ❌ | `"api"` \| `"competitor"` \| `"market"` \| `"technology"` \| `"feasibility"` |

### Outputs
- **Type:** Structured Markdown Artifacts
- **Paths:** `/data/research/`
- **Prefix:** `RSRCH#######`

| Artifact | Purpose | Consumer Personas |
|:---|:---|:---|
| `RSRCH_EVIDENCE_LOG.md` | Raw source tracking & verification. | Analyst, Architect |
| `RSRCH_SYNTHESIS.md` | Strategic & technical recommendations. | Analyst (BA/PM), Architect |

---

## Thinking Logic: The Intelligence Loop

### A. Discovery Loop (v2.8)
1.  **Introspection**: Check local repo/db via MCP first.
2.  **Neural Pulse (Exa)**: Find authoritative documentation or peer-reviewed content.
3.  **Tech Footprinting (BuiltWith)**: Map the target's stack to identify constraints or advantages.
4.  **Market Pulse (Crunchbase)**: Verify financial health and strategic timing.
5.  **Autonomous Deep Research (Tavily)**: Synthesize findings across multiple high-quality sources.

---

## 1. Evidence Quality Standards

### Quality Ratings

| Rating | Criteria | Examples |
|--------|----------|----------|
| ⭐⭐⭐ **Primary** | Official source, verified, current | API docs, vendor site, peer-reviewed |
| ⭐⭐ **Secondary** | Reputable, verified author, < 2 years old | Tech blogs, industry publications |
| ⭐ **Tertiary** | User-generated, unverified, > 2 years old | Forums, old blog posts, comments |

### Citation Requirements

Every claim must include:
```markdown
**Evidence:**
- "[Exact quote or data point]" — [Source URL] — ⭐⭐⭐
```

### Source Triangulation Rule
- **Major claims:** Require 3+ independent sources.
- **Diversity Index:** Require varied source types (e.g., Doc + Code + Community).
- **RAID Mapping:** Every risk or constraint found MUST be mapped to a RAID Log ID (`RISK...`, `DPND...`).
- **Single source:** Note "Limited evidence" warning.

---

## 2. Source Evaluation Checklist

### For Any Source
- [ ] **Authority:** Who wrote it? Are they credible?
- [ ] **Accuracy:** Can claims be verified elsewhere?
- [ ] **Currency:** When was it published/updated?
- [ ] **Relevance:** Does it apply to our context?
- [ ] **Bias:** Is there a commercial or ideological motive?

### Red Flags
- ❌ No author attribution
- ❌ No publication date
- ❌ Affiliate links or sponsored content
- ❌ Extreme claims without evidence
- ❌ Outdated (> 2 years for tech topics)

---

## 3. Research Output Templates

### Executive Summary Template
```markdown
## Executive Summary

**Topic:** [What was researched]
**Date:** [TIMESTAMP]

**Confidence:** High / Medium / Low

### Key Findings
1. [Finding 1] ⭐⭐⭐
2. [Finding 2] ⭐⭐
3. [Finding 3] ⭐⭐

### Recommendation
[Clear recommendation with rationale]

### Gaps
- [What couldn't be found]
```

### Evidence Table Template
```markdown
## Evidence Sources

| # | Claim | Source | Quality | Date |
|---|-------|--------|---------|------|
| 1 | [Claim] | [URL] | ⭐⭐⭐ | [Date] |
| 2 | [Claim] | [URL] | ⭐⭐ | [Date] |
```

### Gap Documentation Template
```markdown
## Gaps & Assumptions

### Information Not Found
| Topic | Sources Checked | Impact |
|-------|-----------------|--------|
| [Topic] | [Sources] | [What this blocks] |

### Assumptions Made
| Assumption | Based On | Risk if Wrong |
|------------|----------|---------------|
| [Assumption] | [Limited evidence] | [Impact] |
```

---

## 4. Research Type Frameworks

### API Research
Focus areas: Auth, rate limits, pricing, SDKs
Skill: `product-toolkit` (Technical Feasibility)

### Competitor Analysis
Focus areas: Features, UX, gaps, user sentiment
Skill: `product-toolkit` (Product Strategy)

### Market Research
Focus areas: TAM/SAM/SOM, trends, demographics
Skill: `business-toolkit` (Market Analysis)

### Technology Evaluation
Focus areas: Capabilities, trade-offs, maturity
Skill: `product-toolkit` (Technical Feasibility)

### Feasibility Study
Focus areas: Technical, operational, economic
Skill: `product-toolkit` (Feasibility) | `business-toolkit` (Viability)

---

## 5. Intelligence Validation Checklist
Before moving to BA or PM phases:
- [ ] **Anti-Hallucination**: 100% of URLs verified via `Method` column.
- [ ] **Diversity Index**: Multiple source types used for high-impact claims.
- [ ] **Bias Reconciled**: Conflicting evidence explicitly resolved with rationale.
- [ ] **RAID Synced**: All risks/assumptions found are logged in `RAID_LOG.md`.
- [ ] **Traceability**: All claims in `SYNTHESIS` link to `EVIDENCE_LOG` IDs.
- [ ] **Staleness Check**: Data is not expired or marked for imminent review.

---

## 👥 Persona Consumption Flow
The "Intelligence Engine" provides the foundation for the following phases:

1.  **Analyst (Business Analyst Strategy)**:
    -   *Input*: `RSRCH_SYNTHESIS.md` -> 💼 Business Strategy.
    -   *Action*: Defines `BRD_BUSINESS_RULES.md` and `BRD_MARKET_ANALYSIS.md`.
2.  **Analyst (Product Manager Vision)**:
    -   *Input*: `RSRCH_SYNTHESIS.md` -> 🎨 Product Vision.
    -   *Action*: Defines `UX_BENCHMARKS.md` and `UX_JOURNEY_MAP.md`.
3.  **Architect (Technical Blueprint)**:
    -   *Input*: `RSRCH_SYNTHESIS.md` -> ⚙️ Technical Constraints.
    -   *Action*: Validates feasibility before starting `SPECS.md`.

---

## How to Verify

- [ ] Every finding has a source citation
- [ ] Sources are rated with ⭐ system
- [ ] Gaps are explicitly documented
- [ ] Output matches research type template
