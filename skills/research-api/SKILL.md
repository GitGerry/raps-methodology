---
name: API Research
description: Deep-dive investigation of APIs, SDKs, and integration services
---

# API Research Skill

## Purpose
Conduct thorough API investigations including authentication, rate limits, pricing, reliability, and integration complexity assessment.

## When to Use
- Evaluating third-party API for integration
- Comparing multiple API providers
- Documenting API for /architect handoff
- Assessing integration feasibility

---

## Tool Interface

### Inputs
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `api_name` | string | ✅ | Name of the API to research |
| `provider` | string | ✅ | Company providing the API |
| `purpose` | string | ✅ | Why we're considering this API |
| `depth` | enum | ❌ | `"quick"` \| `"standard"` \| `"deep"` (default: standard) |
| `output_file` | path | ❌ | Custom output path (default: `/research/API_[NAME].md`) |

### Outputs
- **Type:** Markdown file
- **Structure:** Executive summary, auth details, rate limits, pricing, reliability, integration complexity, gotchas
- **Location:** `/research/API_[NAME].md` or custom path

### Implementation

Uses `mcp_firecrawl-mcp_firecrawl_scrape` for official docs:
```json
{
  "url": "{api_docs_url}",
  "formats": ["markdown"],
  "onlyMainContent": true
}
```

Uses `mcp_firecrawl-mcp_firecrawl_search` for community intelligence:
```json
{
  "query": "{api_name} integration issues site:stackoverflow.com OR site:reddit.com",
  "limit": 10
}
```

### Example
> **Input:** `api_name="Stripe"`, `provider="Stripe Inc"`, `purpose="Payment processing"`, `depth="deep"`
> **Output:** `/research/API_STRIPE.md` with full auth flow, pricing tiers, rate limits, and 10+ community sources

---

## Instructions

### 1. Identify Research Scope
Document:
- API name and provider
- Purpose (what does this API do?)
- Why we're considering it

### 2. Gather Official Documentation
Sources to find:
- [ ] Official API documentation
- [ ] OpenAPI/Swagger spec (if available)
- [ ] Changelog / release notes
- [ ] Status page

### 3. Evaluate Core Aspects

#### Authentication
| Method | Details |
|--------|---------|
| Type | OAuth 2.0 / API Key / JWT / Basic Auth |
| Token Lifetime | [Duration] |
| Refresh Mechanism | [How to refresh] |
| Scopes | [Available permission scopes] |

#### Rate Limits
| Tier | Requests | Period | Burst |
|------|----------|--------|-------|
| Free | X | /minute | Y |
| Paid | X | /minute | Y |

#### Endpoints Relevant to Project
| Endpoint | Method | Purpose | Response Time | Limits |
|----------|--------|---------|---------------|--------|
| /resource | GET | Fetch data | ~200ms | 100/page |

### 4. Pricing Analysis

| Tier | Monthly Cost | Included | Overage |
|------|--------------|----------|---------|
| Free | $0 | X requests | N/A |
| Starter | $X | Y requests | $Z per 1000 |
| Pro | $X | Unlimited | - |

**Cost Projection:**
- Estimated monthly usage: X requests
- Recommended tier: [Tier]
- Monthly cost: $X

### 5. Reliability Assessment

| Metric | Value | Source |
|--------|-------|--------|
| Uptime SLA | X% | Official docs |
| Historical Uptime | X% | Status page |
| Support Response | X hours | Docs |
| Community Activity | High/Med/Low | Forums |

### 6. Integration Complexity

| Factor | Rating | Notes |
|--------|--------|-------|
| Documentation Quality | ⭐⭐⭐ | [Notes] |
| SDK Availability | ⭐⭐ | [Languages available] |
| Sandbox Environment | ⭐⭐⭐ | [Free/Paid] |
| Error Handling | ⭐⭐ | [Quality of error messages] |
| Webhooks Support | ⭐⭐⭐ | [If applicable] |

**Overall Complexity:** S / M / L / XL
**Estimated Integration Time:** X days

### 7. Community Intelligence

Search and document:
- Stack Overflow issues/solutions
- GitHub issues on official SDK
- Reddit/HN discussions
- Blog posts with real experiences

| Issue | Frequency | Severity | Source |
|-------|-----------|----------|--------|
| [Common problem] | High | Medium | SO |

### 8. Known Gotchas

> [!WARNING]
> Document issues found in community research

- [Gotcha 1] — Source: [URL]
- [Gotcha 2] — Source: [URL]

---

## Output Template

```markdown
# 🔌 API Research: [API Name]

**Researcher:** /research
**Date:** [TIMESTAMP]
**Status:** Complete / In Progress

---

## Executive Summary

**Provider:** [Company Name]
**Purpose:** [What this API does]
**Recommendation:** ✅ Recommended / ⚠️ Caution / ❌ Not Recommended

| Aspect | Rating | Notes |
|--------|--------|-------|
| Documentation | ⭐⭐⭐ | [Brief] |
| Pricing | ⭐⭐ | [Brief] |
| Reliability | ⭐⭐⭐ | [Brief] |
| Integration | ⭐⭐ | [Brief] |

---

## Quick Reference

| Property | Value |
|----------|-------|
| Base URL | `https://api.example.com/v1` |
| Auth Method | [OAuth 2.0 / API Key] |
| Rate Limit | [X requests/minute] |
| Sandbox | [Yes/No] |
| SDK | [Languages] |

---

## Authentication

### Method: [OAuth 2.0 / API Key / etc.]

**Setup Steps:**
1. [Step 1]
2. [Step 2]
3. [Step 3]

**Headers Required:**
```
Authorization: Bearer <token>
X-API-Version: 2024-01
```

**Token Lifetime:** [Duration]
**Refresh:** [How to refresh]

---

## Rate Limits

| Tier | Limit | Period | Burst Allowed |
|------|-------|--------|---------------|
| Free | X | /minute | No |
| Pro | X | /minute | Yes (2x) |

**Handling Rate Limits:**
- Response Code: 429
- Retry-After Header: Yes/No
- Recommended: Exponential backoff

---

## Pricing

| Tier | Monthly | Requests Included | Overage |
|------|---------|-------------------|---------|
| Free | $0 | 1,000 | N/A |
| Starter | $29 | 10,000 | $0.01/req |
| Pro | $99 | 100,000 | $0.005/req |
| Enterprise | Contact | Unlimited | - |

### Cost Projection for [Project Name]

| Usage Scenario | Monthly Requests | Tier Needed | Cost |
|----------------|------------------|-------------|------|
| MVP | 5,000 | Free | $0 |
| Production | 50,000 | Pro | $99 |
| Scale | 200,000 | Enterprise | TBD |

---

## Relevant Endpoints

### GET /[resource]
**Purpose:** [What it does]

**Request:**
```bash
curl -X GET "https://api.example.com/v1/resource" \
  -H "Authorization: Bearer TOKEN"
```

**Response:**
```json
{
  "data": [...],
  "meta": {
    "total": 100,
    "page": 1
  }
}
```

**Notes:**
- Pagination: cursor-based
- Max per page: 100

---

## Reliability

| Metric | Value | Evidence |
|--------|-------|----------|
| SLA | 99.9% | [Docs link] |
| Historical (90 days) | 99.95% | [Status page] |
| Avg Response Time | 150ms | [Tests] |
| Support | 24/7 (Pro+) | [Docs] |

### Incident History (Last 6 Months)
| Date | Duration | Impact |
|------|----------|--------|
| [Date] | 2 hours | Degraded |

---

## Integration Complexity

**Overall: MEDIUM (M)**

| Factor | Score | Notes |
|--------|-------|-------|
| Documentation | 8/10 | Comprehensive, examples |
| SDK Quality | 7/10 | Official JS, Python |
| Error Messages | 6/10 | Sometimes vague |
| Sandbox | 9/10 | Free, full-featured |
| Webhooks | 8/10 | Well-documented |

**Estimated Integration Time:** 3-5 days

---

## Community Intelligence

### Stack Overflow (X questions)
| Topic | Frequency | Solution Available |
|-------|-----------|-------------------|
| [Topic 1] | Common | Yes |
| [Topic 2] | Rare | Partial |

### GitHub Issues
- [Issue 1] — [Status]
- [Issue 2] — [Status]

### Real User Feedback
> "[Quote from user experience]" — Source

---

## Gotchas & Warnings

> [!WARNING]
> Critical issues found during research

1. **[Issue 1]**
   - Problem: [Description]
   - Workaround: [Solution]
   - Source: [URL]

2. **[Issue 2]**
   - Problem: [Description]
   - Impact: [Effect on integration]

---

## Dependencies & Requirements

| Dependency | Version | Purpose |
|------------|---------|---------|
| [SDK] | ^2.0.0 | Official client |
| [Auth lib] | ^1.5.0 | OAuth handling |

---

## Recommendation

### Verdict: ✅ RECOMMENDED

**Strengths:**
- [Strength 1]
- [Strength 2]

**Weaknesses:**
- [Weakness 1]
- [Weakness 2]

**Next Steps for /architect:**
1. Design integration layer
2. Plan error handling strategy
3. Set up sandbox environment

---

## Evidence Sources

| Claim | Source | Quality | Date |
|-------|--------|---------|------|
| [Claim 1] | [URL] | ⭐⭐⭐ | [Date] |
| [Claim 2] | [URL] | ⭐⭐ | [Date] |

---

## Gaps & Follow-Up

- [ ] Need to verify: [Unclear aspect]
- [ ] Could not find: [Missing information]
- [ ] Question for vendor: [Unanswered question]
```

---

## How to Verify
- All sections completed or marked N/A
- Pricing projection relevant to project
- At least 3 community sources checked
- Gotchas documented with workarounds
- Clear recommendation with evidence
