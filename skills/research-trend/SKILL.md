---
name: Research Trend
description: State of the Art (SOTA), Emerging Tech, and Innovation Radar
---

# Research Trend

## Purpose
To ensure the solution is **State of the Art (SOTA)** and not "Building Legacy Code".
Focuses on identifying the newest libraries, AI models, and architectural patterns released in the last 6-12 months.

## When to Use
- "What is the best AI model for this today?"
- "Is there a new library for this?"
- "Make it modern / innovative."
- "What is the 'State of the Art'?"

---

## Tool Interface

### Inputs
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `focus` | enum | ✅ | `"sota"` (Best performance) \| `"emerging"` (New tools) |
| `domain` | string | ✅ | "Frontend", "AI", "Database", "Styling" |

### Outputs
- **Type:** Markdown
- **File:** `/research/TREND_REPORT.md`

---

## 1. SOTA Analysis Logic
> "What is the absolute best confirmed method?"

1. **Search Targets:**
   - arXiv (for AI/Algo)
   - "State of JS/CSS" Survey Results
   - GitHub Trending (This Month)
   - ProductHunt (Top of Month)
   - Vercel/Supabase Blogs (Infrastructure trends)

## 2. Recommendation Logic
- **Adopt:** Proven SOTA, stable (e.g. Next.js App Router).
- **Trial:** Promising, high value, low risk component (e.g. a specific shadcn component).
- **Avoid:** "Hype trains" without documentation.

---

## 3. Output Template
See `templates/TREND_REPORT_TEMPLATE.md`

---

## How to Verify
- [ ] At least 2 tools released in the last 6 months identified.
- [ ] Clear distinction between "Stable" and "Experimental".
- [ ] "Legacy Trap" avoided (e.g. recommending Create React App in 2026).
