# ⚖️ Business Rules & Logic

**Module:** Pricing & Compliance

## 1. Monetization Model
| Tier | Price | Key Features | Gateway Trigger |
| :--- | :--- | :--- | :--- |
| **Free** | $0 | Basic Access | N/A |
| **Pro** | $X | Advanced Tools | Need for >5 Projects |

## 2. Compliance Constraints
> Hard rules the software MUST obey.
- [ ] **Data Retention:** Records must be kept 7 years (Tax Law).
- [ ] **Privacy:** User must consent to cookies (GDPR).

## 3. Operational Risks
- **Dependency:** Reliance on Stripe API.
- **Mitigation:** Build abstract payment wrapper.
