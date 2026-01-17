---
name: Research Business
description: Strategy, Pricing, Compliance, and Business Process Logic
---

# Research Business

## Purpose
To ensure the product makes sense **commercially** and **operationally**.
Focuses on Monetization (Pricing), Business Process Logic (How the industry works), and Strategic Risks.

## When to Use
- "How should we price this?"
- "What are the standard accounting/legal rules for this?"
- "What is the business model?"
- "Are there regulatory risks (GDPR, HIPAA, etc.)?"

---

## Tool Interface

### Inputs
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `focus` | enum | ✅ | `"pricing"` \| `"process"` \| `"risk"` |
| `industry` | string | ✅ | "Fintech", "E-commerce", "SaaS" |

### Outputs
- **Type:** Markdown
- **File:** `/research/BUSINESS_LOGIC.md`

---

## 1. Pricing & Monetization Logic
> "How do we capture value?"

1. **Analysis Targets:**
   - Competitor Pricing Pages (Look for the "middle" tier).
   - "Gate" Analysis: What features are locked behind Pro/Enterprise?
   - Unit Economics: Cost per API call vs Price per user.

## 2. Process Logic (BPMN)
> "How does the real world work?"

1. **Analysis Targets:**
   - Industry Standards (GAAP for finance, FHIR for health).
   - "Happy Path" vs "Exception Path" in real-world operations.
   - Compliance requirements (Data retention, audit logs).

## 3. SWOT / Risk Analysis
> "What kills us?"

1. **Platform Risk:** Dependency on OpenAI/Google/Apple APIs?
2. **Legal Risk:** Copyright, Data Privacy.
3. **Churn Risk:** High switching costs? Low engagement?

---

## 3. Output Template
See `templates/BUSINESS_LOGIC_TEMPLATE.md`

---

## How to Verify
- [ ] Pricing model clearly defined (Free/Pro/Ent).
- [ ] At least one Industry Standard cited (e.g. "ISO 27001").
- [ ] Key Business Risks identified.
