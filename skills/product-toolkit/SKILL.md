---
name: Product Manager Toolkit
description: User Experience Vision, Voice of Customer, and Visual Benchmarking.
---

# 💎 Product Manager Toolkit (The Vision Engine)

> [!IMPORTANT]
> **ANTI-HALLUCINATION PROTOCOL**
> 1. **REAL VOICES ONLY:** You cannot invent "user feedback" or "Reddit threads."
> 2. **VALID CITATION:** Every "Theme" (e.g., "Users hate the login") must be backed by a URL or specific search result using `research-toolkit`.
> 3. **NO GENERIC PATTERNS:** Do not recommend "Better UX" without specifying *which* pattern from *which* app (e.g. "Linear's Kbd Shortcuts").

## Purpose
To define the **User Experience** and **Visual Benchmarks**.
Combines "Voice of Customer" (VoC) with "UX Patterns" to inform Design.
**Note:** Does NOT write User Stories (See `/analyst-toolkit`).

## When to Use
- Identifying user pain points
- Benchmarking UX patterns
- Defining the "Vibe" and "Delighters"

---

## Tool Interface

### Inputs
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `action` | enum | ✅ | `"analyze_voc"` \| `"benchmark_ux"` \| `"define_vision"` |
| `feature` | string | ✅ | Feature or flow to analyze |

### Outputs
| Artifact | Path Pattern | Validated By |
| :--- | :--- | :--- |
| **UX Benchmarks** | `docs/product/UX_BENCHMARKS.md` | User Review |
| **UX Journey Map** | `docs/product/UX_JOURNEY_MAP.md` | User Review / `/design` |

---

## 🧠 Thinking Logic (How to Execute)

### A. Voice of Customer (VoC) Analysis
1.  **Ingest Strategy:** Read `BRD_MARKET_ANALYSIS.md`. *Know the Target Audience first.*
2.  **Search:** Use `/research-toolkit` to search G2, Reddit, or App Store reviews. *Example Query:* `"CompetitorName sucks feature"`
2.  **Filter:** Ignore "Support" complaints. Find "Feature" complaints (e.g., "Why can't I export?").
3.  **Synthesize:** Group complaints into "Themes" (e.g., "Friction", "Cost", "Missing Feat").
4.  **Wedge:** Define how We solve this (e.g., "1-click Export").

### B. UX Benchmarking (The "Delighters")
1.  **Identify Flow:** What is the critical path? (e.g., Onboarding).
2.  **Find Best-in-Class:** Use `research-toolkit` to find case studies (e.g. "Linear onboarding case study").
3.  **Isolate Patterns:** Quote the specific mechanic (e.g., "They use optimistic UI for likes").
4.  **Adopt:** Write a requirement to mimic that pattern.

### C. Agile Definition (User Stories)
**STOP.** Do not write User Stories here.
*   **Action:** Pass your "Thematic Analysis" to the Analyst.
*   **Prompt:** "Analyst, create stories for [Theme]".

---

## ✅ Definition of Done (DOD)
- [ ] At least 3 Best-in-Class UX patterns benchmarked.
- [ ] VoC analysis identifies at least 3 "Pain Points" and "Wedges."
- [ ] No "hallucinated" feedback; all themes have cited evidence.
- [ ] Handed off to Functional Analyst for Story generation.

## 📂 Output Modules

| Module | Template | Purpose |
| :--- | :--- | :--- |
| **UX Benchmarks** | `./templates/UX_BENCHMARKS.md` | VoC, Delighters, Competitor UX Patterns. |
| **UX Journey Map** | `./templates/UX_JOURNEY_MAP.md` | Flow states, emotional mapping, and friction analysis. |
