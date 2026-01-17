---
name: Research Product
description: Voice of Customer, UX Benchmarks, and Product Excellence research
---

# Research Product

## Purpose
To move beyond "functional requirements" and ensure Product Excellence.
Focuses on **Voice of Customer (VoC)** (what users actually say) and **UX Patterns** (how the best apps solve problems).

## When to Use
- "How do we make this easier to use?"
- "Why do users hate Competitor X?"
- "What is the best way to design this flow?"
- "We need a 'Delighter' feature."

---

## Tool Interface

### Inputs
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `focus` | enum | ✅ | `"voc"` (Sentiment) \| `"ux_pattern"` (Benchmarks) |
| `topic` | string | ✅ | "Onboarding flow", "Checkout", "Dark mode" |
| `competitor` | string | ❌ | Specific competitor to analyze for pain points |

### Outputs
- **Type:** Markdown
- **File:** `/research/PRODUCT_BENCHMARKS.md`

---

## 1. Voice of Customer (VoC) Logic
> "Find the wedge."

1. **Search Targets:**
   - Reddit (r/[industry], r/startups, r/saas)
   - G2 / Capterra / TrustPilot (filter by 1-star and 2-star)
   - App Store / Play Store Reviews
   - Twitter/X Advanced Search (`"I hate [Competitor]"` or `"Why is [Competitor] so..."`)

2. **Analysis Goal:**
   - Identify specific *recurring* friction points.
   - Ignore generic support complaints ("servers down").
   - Focus on feature gaps or complex workflows ("why can't I just export to PDF?").

## 2. UX Pattern Logic
> "Don't reinvent the wheel, make it rounder."

1. **Search Targets:**
   - Mobbin / PageFlows (Search for "Best [Flow] examples")
   - Dribbble / Behance (Visual polish inspiration)
   - Competitor Screenshots

2. **Analysis Goal:**
   - Identify the "Standard" flow (what users expect).
   - Identify the "Delighter" (micro-interactions, copy, speed).

---

## 3. Output Template
See `templates/PRODUCT_BENCHMARKS_TEMPLATE.md`

---

## How to Verify
- [ ] At least 3 direct user quotes (VoC) cited.
- [ ] At least 2 "Best in Class" visual examples referenced.
- [ ] "Opportunity Wedge" identified (What we will do better).
