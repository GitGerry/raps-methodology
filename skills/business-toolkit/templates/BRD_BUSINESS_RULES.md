# ⚖️ Business Rules & Logic Definitions
> **Usage:** Defines the "Hard Logic" that must be enforced by Database Constraints and Backend Code.

## 1. Monetization & Feature Gating
> **Goal:** Define exactly what a user gets for their money.

| Feature Gate | Free Tier Limit | Pro Tier Limit | Enterprise Limit | Error Message |
| :--- | :--- | :--- | :--- | :--- |
| **Projects** | 3 Active | Unlimited | Unlimited | "Upgrade to Pro to create more projects." |
| **Team Members** | 1 (Solo) | 5 Seats | Unlimited | "Team full. Add seats?" |
| **API Access** | ❌ No | ✅ 100 req/min | ✅ 10k req/min | "API access requires Pro." |

## 2. Roles & Permissions (RBAC)
> **Goal:** Access Control Matrix (Who can do what).

| Action | Guest | Member | Admin | Super Admin |
| :--- | :--- | :--- | :--- | :--- |
| `payout.trigger` | ❌ | ❌ | ✅ | ✅ |
| `user.invite` | ❌ | ❌ | ✅ | ✅ |
| `project.view` | ✅ (Public only) | ✅ (Own) | ✅ (All) | ✅ (All) |

## 3. Regulatory & Compliance
> **Goal:** Legal constraints that override business logic.

*   **Data Retention:**
    *   **Financial Records:** MUST be kept for 7 years (Tax Law). *Cannot be hard deleted.*
    *   **User PII:** MUST be soft-deleted immediately upon request, hard-deleted after 30 days.
*   **Geofencing:**
    *   Transactions from [Sanctioned Countries] MUST be blocked at the API Gateway level.

## 4. Invariant Logic (Golden Rules)
> **Goal:** Logic state that must NEVER be violated.

1.  **"No Negative Balance":** A wallet balance can never be `< 0`. Implementation: DB `CHECK (balance >= 0)`.
2.  **"Double Spend Prevention":** An Order cannot be placed if the Inventory count is 0. Implementation: Atomic Transaction.
3.  **"Immutable History":** Once an Invoice is `FINALIZED`, it can never be edited, only Voided and Re-issued.

## 5. Input Validation Standards
*   **Password Policy:** Min 12 chars, 1 special, 1 number. (NIST Standard).
*   **Tax IDs:** Must match Regex for user's country (e.g., `^US-\d{9}$`).
