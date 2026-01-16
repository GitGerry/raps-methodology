# Research Toolkit Templates

## 1. API Research Template
Save as: `/research/API_[NAME].md`

```markdown
# 🔌 API RESEARCH: [API Name]

**Researcher:** /research
**Date:** [TIMESTAMP]
**Confidence:** [HIGH/MEDIUM/LOW]
**Official Docs:** [URL]

---

## Executive Summary
[2-3 sentences: What is this API? Should we use it?]

---

## 1. Overview
**Provider:** [Company name]
**Type:** REST / GraphQL / SOAP / SDK
**Status:** Production / Beta / Deprecated

---

## 2. Authentication

| Method | Details |
|--------|---------|
| Auth Type | API Key / OAuth 2.0 / JWT |
| Header | `Authorization: Bearer {token}` |
| Scopes | [List of scopes needed] |

**Getting Started:**
1. [Step to get API key]
2. [Step to authenticate]

---

## 3. Key Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/resource` | GET | List all resources |
| `/resource/{id}` | GET | Get single resource |
| `/resource` | POST | Create resource |

**Example Request:**
```bash
curl -X GET "https://api.example.com/resource" \
  -H "Authorization: Bearer {token}"
```

**Example Response:**
```json
{
  "data": [...]
}
```

---

## 4. Rate Limits

| Tier | Requests/min | Requests/day |
|------|--------------|--------------|
| Free | 60 | 1,000 |
| Pro | 600 | 50,000 |
| Enterprise | Unlimited | Unlimited |

**Retry Strategy:** [How to handle 429 errors]

---

## 5. Pricing

| Plan | Cost | Includes |
|------|------|----------|
| Free | $0 | [limits] |
| Pro | $X/mo | [limits] |
| Enterprise | Contact | [limits] |

**Evidence:** "[Quote from pricing page]" — [URL] — ⭐⭐⭐

---

## 6. SDK/Libraries

| Language | Package | Maturity |
|----------|---------|----------|
| JavaScript | `npm install xxx` | Stable |
| Python | `pip install xxx` | Stable |

---

## 7. Gotchas & Limitations
- ⚠️ [Known issue 1]
- ⚠️ [Known issue 2]

---

## 8. Recommendation

**Verdict:** ✅ USE / ⚠️ USE WITH CAUTION / ❌ AVOID

**Reasoning:**
[Why this recommendation]

---

## Evidence Sources

| Source | Type | Rating |
|--------|------|--------|
| [Official Docs URL] | Primary | ⭐⭐⭐ |
| [Blog post URL] | Secondary | ⭐⭐ |
```

---

## 2. Competitor Analysis Template
Save as: `/research/COMPETITORS.md`

```markdown
# 🏆 COMPETITOR ANALYSIS

**Researcher:** /research
**Date:** [TIMESTAMP]
**Competitors Analyzed:** [Count]

---

## Executive Summary
[2-3 sentences: Key competitive insights]

---

## Feature Comparison Matrix

| Feature | Us | Competitor A | Competitor B | Competitor C |
|---------|:--:|:------------:|:------------:|:------------:|
| [Core Feature 1] | ✅ | ✅ | ❌ | ⚠️ |
| [Core Feature 2] | 🚧 | ✅ | ✅ | ✅ |
| [Core Feature 3] | ❌ | ✅ | ✅ | ❌ |

Legend: ✅ Full support | ⚠️ Partial | 🚧 Planned | ❌ Missing

---

## Pricing Comparison

| Plan | Us | Competitor A | Competitor B |
|------|---:|-------------:|-------------:|
| Free Tier | $0 | $0 | $0 |
| Pro | $X/mo | $Y/mo | $Z/mo |
| Enterprise | Contact | Contact | Contact |

---

## Competitor Profiles

### [Competitor A Name]
**Website:** [URL]
**Market Position:** [Leader/Challenger/Niche]

**Strengths:**
- [Strength 1]
- [Strength 2]

**Weaknesses:**
- [Weakness 1]
- [Weakness 2]

**Key Differentiator:** [What makes them unique]

---

## Differentiation Opportunities
1. **[Opportunity 1]:** [How we can win here]
2. **[Opportunity 2]:** [How we can win here]

---

## Evidence Sources

| Source | Competitor | Rating |
|--------|------------|--------|
| [Pricing page URL] | A | ⭐⭐⭐ |
| [Review article] | B | ⭐⭐ |
```

---

## 3. Technology Evaluation Template
Save as: `/research/TECH_EVALUATION.md`

```markdown
# ⚙️ TECHNOLOGY EVALUATION: [Category]

**Researcher:** /research
**Date:** [TIMESTAMP]
**Options Evaluated:** [Count]

---

## Executive Summary
[2-3 sentences: Winner and why]

---

## Decision Matrix

| Criteria | Weight | Option A | Option B | Option C |
|----------|:------:|:--------:|:--------:|:--------:|
| Performance | 3 | 8 | 6 | 9 |
| Cost | 2 | 7 | 9 | 5 |
| Learning Curve | 2 | 6 | 8 | 4 |
| Community/Support | 1 | 9 | 7 | 8 |
| **Weighted Total** | — | **X** | **Y** | **Z** |

---

## Option Details

### Option A: [Name]
**Website:** [URL]
**License:** [MIT/Apache/Commercial]
**Score:** X/40

**Pros:**
- [Pro 1]
- [Pro 2]

**Cons:**
- [Con 1]
- [Con 2]

**Evidence:** "[Quote]" — [URL] — ⭐⭐⭐

---

## Recommendation

**Winner:** [Option Name]

**Reasoning:**
[Why this is the best choice]

**Alternatives if blocked:**
1. [Second choice] — if [condition]
2. [Third choice] — if [condition]
```

---

## 4. Feasibility Study Template
Save as: `/research/FEASIBILITY_[TOPIC].md`

```markdown
# 📊 FEASIBILITY STUDY: [Topic]

**Researcher:** /research
**Date:** [TIMESTAMP]
**Verdict:** GO / NO-GO / MORE RESEARCH NEEDED

---

## Executive Summary
[2-3 sentences: Is this feasible?]

---

## 1. Objective
**What are we assessing?**
[Clear statement of what we're trying to determine]

---

## 2. Technical Feasibility

| Aspect | Status | Notes |
|--------|:------:|-------|
| Tech Stack Compatibility | ✅/⚠️/❌ | [Details] |
| API Availability | ✅/⚠️/❌ | [Details] |
| Performance Requirements | ✅/⚠️/❌ | [Details] |
| Security Requirements | ✅/⚠️/❌ | [Details] |

---

## 3. Resource Requirements

| Resource | Quantity | Available? |
|----------|----------|:----------:|
| Developer time | X hours | ✅/❌ |
| Infrastructure | [Details] | ✅/❌ |
| Third-party services | [Details] | ✅/❌ |
| Budget | $X | ✅/❌ |

---

## 4. Timeline Estimate

| Phase | Duration | Dependencies |
|-------|----------|--------------|
| Research | X days | None |
| Implementation | X days | [Dep] |
| Testing | X days | [Dep] |
| **Total** | **X days** | — |

---

## 5. Risks

| Risk | Probability | Impact | Mitigation |
|------|:-----------:|:------:|------------|
| [Risk 1] | HIGH/MED/LOW | HIGH/MED/LOW | [How to mitigate] |
| [Risk 2] | HIGH/MED/LOW | HIGH/MED/LOW | [How to mitigate] |

---

## 6. Verdict

**Decision:** ✅ GO / ❌ NO-GO / ⚠️ MORE RESEARCH

**Reasoning:**
[Why this decision]

**Next Steps:**
1. [Action 1]
2. [Action 2]
```

---

## 5. Research Request Template
Use when requesting research from /research:

```markdown
## 🔍 Research Request

**From:** [Persona, e.g., /architect]
**Date:** [TIMESTAMP]
**Priority:** HIGH / MEDIUM / LOW

### Topic
[Clear description of what to research]

### Questions to Answer
1. [Specific question 1]
2. [Specific question 2]
3. [Specific question 3]

### Context
[Why this research is needed, what decision it will inform]

### Deadline
[When this is needed by]

### Preferred Output
- [ ] API Research (`API_[NAME].md`)
- [ ] Competitor Analysis (`COMPETITORS.md`)
- [ ] Technology Evaluation (`TECH_EVALUATION.md`)
- [ ] Feasibility Study (`FEASIBILITY_[TOPIC].md`)
- [ ] General Summary (`SUMMARY_[TOPIC].md`)
```
