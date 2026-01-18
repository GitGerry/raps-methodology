---
name: Research Toolkit
description: Evidence standards, source quality ratings, and research output templates
---

# Research Toolkit

## Purpose
Define standards for gathering, evaluating, and documenting research findings. Ensures all research is evidence-based, properly cited, and actionable.

## When to Use
- Conducting any research task
- Evaluating source quality
- Validating research from another persona
- Creating research deliverables

---

## Tool Interface

### Inputs
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `action` | enum | ✅ | `"evaluate_source"` \| `"rate_evidence"` \| `"create_output"` |
| `source_url` | string | ❌ | URL to evaluate |
| `research_type` | enum | ❌ | `"api"` \| `"competitor"` \| `"market"` \| `"technology"` \| `"feasibility"` |

### Outputs
- **Type:** Markdown
- **Structure:** Research document with citations and ratings

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
- **Major claims:** Require 3+ independent sources
- **Minor claims:** Require 1-2 sources
- **Contradictions:** Flag explicitly, present both sides
- **Single source:** Note "Limited evidence" warning

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

## 5. Validation Checklist

Before handing off research:
- [ ] All claims have source citations
- [ ] Quality ratings assigned to all sources
- [ ] Executive summary written
- [ ] Gaps documented (what couldn't be found)
- [ ] Recommendations are actionable
- [ ] No placeholder content

---

## How to Verify

- [ ] Every finding has a source citation
- [ ] Sources are rated with ⭐ system
- [ ] Gaps are explicitly documented
- [ ] Output matches research type template
