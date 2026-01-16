---
name: Competitive Analysis
description: SWOT analysis and feature comparison for competitive intelligence
---

# Competitive Analysis Skill

## Purpose
Conduct structured competitive analysis including SWOT, feature matrices, pricing comparison, and market positioning.

## When to Use
- Evaluating market landscape before building
- Identifying differentiation opportunities
- Pricing strategy research
- Feature prioritization based on competition

---

## Instructions

### 1. Identify Competitors
| Category | Description |
|----------|-------------|
| Direct | Same product, same market |
| Indirect | Different product, same problem |
| Potential | Could pivot into space |

### 2. Gather Intelligence

#### Sources to Check
- [ ] Competitor websites
- [ ] G2, Capterra, TrustRadius reviews
- [ ] LinkedIn company pages
- [ ] Crunchbase / funding data
- [ ] Product Hunt launches
- [ ] News articles
- [ ] Social media presence
- [ ] Job postings (shows priorities)

### 3. Feature Matrix

| Feature | Us | Comp A | Comp B | Comp C |
|---------|:--:|:------:|:------:|:------:|
| Feature 1 | ✅ | ✅ | ❌ | ✅ |
| Feature 2 | 🔄 | ✅ | ✅ | ❌ |
| Feature 3 | ❌ | ✅ | ✅ | ✅ |

Legend: ✅ Has | ❌ Doesn't have | 🔄 Planned | ⭐ Best-in-class

### 4. SWOT Analysis (Per Competitor)

| | Positive | Negative |
|---|----------|----------|
| **Internal** | Strengths | Weaknesses |
| **External** | Opportunities | Threats |

### 5. Pricing Comparison

| Tier | Us | Comp A | Comp B |
|------|:--:|:------:|:------:|
| Free | ✅ | ❌ | ✅ |
| Starter | $X | $Y | $Z |
| Pro | $X | $Y | $Z |
| Enterprise | Contact | Contact | $Z |

### 6. Market Positioning Map

```
                    High Price
                        │
         Premium ───────┼─────── Enterprise
                        │
    Low ────────────────┼──────────────── High
    Features            │              Features
                        │
         Budget ────────┼─────── Value
                        │
                    Low Price
```

---

## Output Template

```markdown
# 🎯 Competitive Analysis: [Market/Product]

**Researcher:** /research
**Date:** [TIMESTAMP]
**Competitors Analyzed:** X

---

## Executive Summary

**Market Landscape:** [Brief overview of competitive environment]

**Our Position:** [Where we fit / plan to fit]

**Key Insight:** [Most important takeaway]

---

## Competitor Overview

### [Competitor A]
| Aspect | Details |
|--------|---------|
| Company | [Name] |
| Founded | [Year] |
| Funding | [Amount / Stage] |
| Employees | [Range] |
| HQ | [Location] |
| Target Market | [Who they serve] |

**Tagline:** "[Their positioning statement]"

**Strengths:**
- [Strength 1]
- [Strength 2]

**Weaknesses:**
- [Weakness 1]
- [Weakness 2]

---

### [Competitor B]
[Same structure...]

---

## Feature Matrix

| Feature | Priority | Us | Comp A | Comp B | Comp C |
|---------|:--------:|:--:|:------:|:------:|:------:|
| [Feature 1] | 🔴 MUST | 🔄 | ✅ | ✅ | ✅ |
| [Feature 2] | 🔴 MUST | ✅ | ✅ | ❌ | ✅ |
| [Feature 3] | 🟡 SHOULD | ❌ | ⭐ | ✅ | ❌ |
| [Feature 4] | 🟢 COULD | ❌ | ❌ | ✅ | ❌ |

**Legend:**
- ✅ Has feature
- ⭐ Best-in-class implementation
- 🔄 Planned / In development
- ❌ Doesn't have

### Feature Gap Analysis

**We have, they don't:**
- [Unique feature 1]
- [Unique feature 2]

**They have, we don't (opportunities):**
- [Gap 1] — Priority: High/Med/Low
- [Gap 2] — Priority: High/Med/Low

**Table stakes (everyone has):**
- [Common feature 1]
- [Common feature 2]

---

## SWOT Analysis

### [Competitor A] SWOT

| Strengths | Weaknesses |
|-----------|------------|
| [S1] | [W1] |
| [S2] | [W2] |

| Opportunities | Threats |
|---------------|---------|
| [O1] | [T1] |
| [O2] | [T2] |

---

## Pricing Comparison

### Pricing Tiers

| Tier | Us | Comp A | Comp B | Comp C |
|------|:--:|:------:|:------:|:------:|
| Free | ✅ Y/N | ✅ Y/N | ✅ Y/N | ✅ Y/N |
| Entry | $X/mo | $Y/mo | $Z/mo | $W/mo |
| Pro | $X/mo | $Y/mo | $Z/mo | $W/mo |
| Enterprise | Custom | $Y/mo | Custom | $W/mo |

### Value Comparison (What you get for $X/mo)

| Included at $50/mo | Us | Comp A | Comp B |
|--------------------|:--:|:------:|:------:|
| Users | 10 | 5 | Unlimited |
| Storage | 50GB | 10GB | 25GB |
| API Calls | 10K | 5K | 1K |
| Support | Email | None | Chat |

### Pricing Strategy Insight
[Analysis of competitors' pricing strategies and where opportunity exists]

---

## Market Positioning

```
                    High Price
                        │
         [Comp A] ──────┼─────── [Comp C]
                        │
    Low ────────────────┼──────────────── High
    Features            │★ US           Features
                        │
         [Comp B] ──────┼─────── [Comp D]
                        │
                    Low Price
```

**Our Target Position:** [Where we aim to be and why]

---

## User Reviews Analysis

### Sentiment Summary
| Competitor | Overall | NPS | # Reviews |
|------------|---------|-----|-----------|
| Comp A | 4.2/5 | +45 | 500 |
| Comp B | 3.8/5 | +20 | 200 |

### Common Praise
- [What users love about competitors]

### Common Complaints
- [What users hate — opportunity for us]

---

## Differentiation Opportunities

### Must-Have Differentiators
1. **[Differentiator 1]** — No one does this well
2. **[Differentiator 2]** — Common complaint, we can solve

### Nice-to-Have Differentiators
1. [Opportunity 1]
2. [Opportunity 2]

---

## Threats & Risks

| Threat | Probability | Impact | Mitigation |
|--------|-------------|--------|------------|
| [Threat 1] | High | High | [Strategy] |
| [Threat 2] | Medium | High | [Strategy] |

---

## Recommendations

### For Product (/analyst, /architect)
1. [Product recommendation]
2. [Feature priority suggestion]

### For Positioning
1. [Market positioning recommendation]
2. [Messaging suggestion]

### For Pricing
1. [Pricing strategy recommendation]

---

## Evidence Sources

| Claim | Source | Quality | Date |
|-------|--------|---------|------|
| [Claim] | [URL] | ⭐⭐⭐ | [Date] |

---

## Gaps & Follow-Up
- [ ] Need more info on: [Topic]
- [ ] Could not find: [Missing data]
```

---

## How to Verify
- At least 3 competitors analyzed
- Feature matrix complete
- SWOT for each competitor
- Pricing comparison accurate
- Evidence sources documented
