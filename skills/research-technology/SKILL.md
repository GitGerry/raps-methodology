---
name: Technology Evaluation
description: Weighted scorecard evaluation for technology and framework decisions
---

# Technology Evaluation Skill

## Purpose
Conduct systematic technology evaluations using weighted criteria to make defensible, evidence-based decisions.

## When to Use
- Choosing between frameworks (React vs Vue vs Svelte)
- Selecting databases (PostgreSQL vs MongoDB vs Supabase)
- Evaluating SaaS tools
- Build vs Buy decisions
- Any technical decision with multiple options

---

## Instructions

### 1. Define Evaluation Context
- What decision are we making?
- What constraints exist?
- What's the timeline?
- Who are the stakeholders?

### 2. Identify Candidates
List all viable options (typically 2-5):
- Option A: [Name]
- Option B: [Name]
- Option C: [Name]

### 3. Define Criteria

#### Standard Criteria Set
| Category | Criteria | Typical Weight |
|----------|----------|----------------|
| **Technical** | Performance | 10-20% |
| **Technical** | Scalability | 10-15% |
| **Technical** | Security | 10-15% |
| **Ecosystem** | Community Size | 5-10% |
| **Ecosystem** | Documentation | 5-10% |
| **Ecosystem** | Third-Party Integrations | 5-10% |
| **Operational** | Learning Curve | 5-10% |
| **Operational** | Maintenance Burden | 5-10% |
| **Operational** | Hiring Pool | 5-10% |
| **Business** | Cost | 10-20% |
| **Business** | Vendor Lock-in Risk | 5-10% |
| **Business** | Maturity/Stability | 5-10% |

### 4. Weight Criteria
- Weights must sum to 100%
- Higher weight = more important
- Justify weight allocation

### 5. Score Each Option
- Score 1-10 (1=poor, 10=excellent)
- Document evidence for each score
- Be consistent across options

### 6. Calculate Weighted Scores
For each option: Σ(score × weight)

### 7. Sensitivity Analysis
- What if weights changed?
- How robust is the winner?

---

## Output Template

```markdown
# 🔬 Technology Evaluation: [Decision]

**Researcher:** /research
**Date:** [TIMESTAMP]
**Decision Required By:** [Date]

---

## Executive Summary

| Rank | Option | Weighted Score | Recommendation |
|:----:|--------|:--------------:|----------------|
| 1 | [Winner] | 8.2 | ✅ Recommended |
| 2 | [Runner-up] | 7.5 | ⚠️ Alternative |
| 3 | [Third] | 6.8 | ❌ Not recommended |

**Recommendation:** [Winner] — [One-line justification]

---

## Context

### Decision
[What are we deciding?]

### Constraints
- [Constraint 1: e.g., budget < $X]
- [Constraint 2: e.g., must support TypeScript]
- [Constraint 3: e.g., team experience with X]

### Timeline
[When do we need to decide and why?]

---

## Candidates

### Option A: [Name]
| Aspect | Details |
|--------|---------|
| Description | [What it is] |
| Website | [URL] |
| License | [Open source / Commercial] |
| Current Version | [Version] |
| First Release | [Year] |

### Option B: [Name]
[Same structure...]

### Option C: [Name]
[Same structure...]

---

## Evaluation Criteria

| # | Criterion | Weight | Justification |
|:-:|-----------|:------:|---------------|
| 1 | Performance | 20% | Critical for user experience |
| 2 | Scalability | 15% | Must handle 10x growth |
| 3 | Learning Curve | 15% | Small team, quick delivery |
| 4 | Community/Support | 10% | Need help when stuck |
| 5 | Documentation | 10% | Reduces onboarding time |
| 6 | Cost | 15% | Startup budget constraints |
| 7 | Maturity | 10% | Avoid bleeding edge |
| 8 | Integration | 5% | Must work with [tools] |
| | **TOTAL** | **100%** | |

---

## Detailed Scoring

### 1. Performance (20%)

| Option | Score | Evidence |
|--------|:-----:|----------|
| Option A | 8/10 | Benchmarks show X ops/sec [source] |
| Option B | 9/10 | 20% faster in tests [source] |
| Option C | 6/10 | Known to be slower [source] |

### 2. Scalability (15%)

| Option | Score | Evidence |
|--------|:-----:|----------|
| Option A | 9/10 | Used by [large company] at scale |
| Option B | 7/10 | Horizontal scaling requires work |
| Option C | 8/10 | Auto-scaling built in |

[Continue for each criterion...]

---

## Score Matrix

| Criterion | Weight | Option A | Option B | Option C |
|-----------|:------:|:--------:|:--------:|:--------:|
| Performance | 20% | 8 | 9 | 6 |
| Scalability | 15% | 9 | 7 | 8 |
| Learning Curve | 15% | 7 | 8 | 9 |
| Community | 10% | 9 | 6 | 8 |
| Documentation | 10% | 8 | 7 | 9 |
| Cost | 15% | 6 | 8 | 9 |
| Maturity | 10% | 9 | 5 | 7 |
| Integration | 5% | 8 | 8 | 7 |
| **Weighted Total** | 100% | **7.85** | **7.35** | **7.80** |

---

## Winner Analysis

### Why [Option A] Wins

**Key Strengths:**
1. [Strength 1 with evidence]
2. [Strength 2 with evidence]
3. [Strength 3 with evidence]

**Acceptable Trade-offs:**
1. [Trade-off 1] — Why it's acceptable
2. [Trade-off 2] — Mitigation strategy

### Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| [Risk 1] | Low | Medium | [Strategy] |
| [Risk 2] | Medium | Low | [Strategy] |

---

## Sensitivity Analysis

### What If Weights Changed?

| Scenario | Winner | Score Δ |
|----------|--------|---------|
| Cost weight +10% | Option C | +0.3 |
| Performance weight +10% | Option B | +0.2 |
| Current weights | Option A | - |

**Conclusion:** Option A wins in most scenarios. Only if [condition] would Option [X] win.

---

## Comparison Summary

### Option A: [Name]
| Pros | Cons |
|------|------|
| [Pro 1] | [Con 1] |
| [Pro 2] | [Con 2] |

### Option B: [Name]
| Pros | Cons |
|------|------|
| [Pro 1] | [Con 1] |
| [Pro 2] | [Con 2] |

### Option C: [Name]
| Pros | Cons |
|------|------|
| [Pro 1] | [Con 1] |

---

## Recommendation

### Primary: [Option A]
[2-3 sentence justification with key evidence]

### Fallback: [Option B]
[When to consider this instead]

### Not Recommended: [Option C]
[Why it was eliminated]

---

## Implementation Notes for /architect

1. [Key consideration 1]
2. [Key consideration 2]
3. [Setup/migration notes]

---

## Evidence Sources

| Claim | Source | Quality | Date |
|-------|--------|---------|------|
| [Claim] | [URL] | ⭐⭐⭐ | [Date] |

---

## Gaps & Assumptions
- **Assumption:** [Assumption made]
- **Gap:** [Information not found]
```

---

## How to Verify
- All candidates evaluated fairly
- Weights sum to 100%
- Each score has evidence
- Sensitivity analysis performed
- Clear recommendation with justification
