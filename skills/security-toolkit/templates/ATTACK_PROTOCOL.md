# 🛡️ Security Attack Protocol (Red Team)

**Mission:** Prove the application is insecure.

## 1. 🔑 Authorization & RBAC Attacks
> Goal: Access data I should not see.
- [ ] **Privilege Escalation:** Can a `User` access `/admin` routes?
- [ ] **IDOR (Insecure Direct Object Reference):** Can User A access `GET /api/users/USER_B_ID`?
- [ ] **Vertical Bypass:** Can a `Manager` delete the `CEO` account?

## 2. 💉 Injection & Input Fuzzing
> Goal: Corrupt the database or execute code.
- [ ] **SQL/NoSQL Injection:** Submit `' OR 1=1 --` into login forms.
- [ ] **XSS (Cross-Site Scripting):** Submit `<script>alert(1)</script>` into profile bio.
- [ ] **Overflow:** Submit 10,000 characters into a `VARCHAR(50)` field.
- [ ] **Type Juggling:** Submit JSON `{"role": "admin"}` to update endpoints.

## 3. 🚨 Business Logic Abuse
> Goal: Break the rules of the business.
- [ ] **Race Conditions:** Submit "Pay" button 5 times instantly.
- [ ] **Negative Logic:** Submit "Quantity: -1" to get a refund.
- [ ] **Workflow Skip:** Call `approve_order` API without calling `create_order`.

## 4. 📦 Supply Chain & Config
- [ ] **Secrets:** Are there API keys in `.env` or committed code?
- [ ] **Dependencies:** Run `npm audit` for high-severity CVEs.
- [ ] **Headers:** Are `Helmet` headers active (CSP, HSTS)?
