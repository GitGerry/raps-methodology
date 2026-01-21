---
name: Security Toolkit
description: Red Teaming, Penetration Testing, Vulnerability Assessment, and OWASP Top 10 Compliance.
---

# 🛡️ Security Toolkit (The Red Team)

> [!IMPORTANT]
> **ANTI-HALLUCINATION PROTOCOL**
> 1. You cannot claim "secure" without running the OWASP checklist.
> 2. You must verify CVE databases before approving dependencies.
> 3. Every finding requires reproduction steps.

## Purpose
Actively attack, exploit, and audit the application to uncover weaknesses before deploying.
**Philosophy:** "If we don't break it, the hackers will."

## When to Use
- Before production deployment
- After adding authentication/authorization
- When integrating third-party APIs
- During code review of security-sensitive components

---

## 1. OWASP Top 10 Checklist (2021)

### A01: Broken Access Control
- [ ] Verify users cannot access unauthorized resources
- [ ] Test IDOR (Insecure Direct Object References)
- [ ] Check CORS policy is restrictive
- [ ] Verify JWT tokens are validated server-side

### A02: Cryptographic Failures
- [ ] No sensitive data transmitted over HTTP
- [ ] Passwords hashed with bcrypt/argon2 (NOT MD5/SHA1)
- [ ] Secrets stored in environment variables (not code)
- [ ] TLS 1.2+ enforced

### A03: Injection
- [ ] All user input parameterized (no string concatenation in SQL)
- [ ] XSS prevented via output encoding
- [ ] Command injection prevented (no shell exec with user input)

### A04: Insecure Design
- [ ] Rate limiting on authentication endpoints
- [ ] Account lockout after failed attempts
- [ ] CAPTCHA on public forms

### A05: Security Misconfiguration
- [ ] Debug mode disabled in production
- [ ] Default credentials changed
- [ ] Error messages don't expose stack traces
- [ ] Unnecessary features disabled

### A06: Vulnerable Components
- [ ] `npm audit` or `pip-audit` returns 0 critical
- [ ] Dependencies are up-to-date
- [ ] No abandoned packages (>2 years inactive)

### A07: Authentication Failures
- [ ] Password policy enforced (length, complexity)
- [ ] MFA available for sensitive operations
- [ ] Session timeout implemented
- [ ] Secure cookie flags set (HttpOnly, Secure, SameSite)

### A08: Software & Data Integrity Failures
- [ ] CI/CD pipeline secured
- [ ] Dependency integrity verified (checksums)
- [ ] No unsigned code in production

### A09: Logging & Monitoring Failures
- [ ] Authentication failures logged
- [ ] Access control failures logged
- [ ] Logs don't contain sensitive data (PII, tokens)

### A10: Server-Side Request Forgery (SSRF)
- [ ] User-provided URLs validated/sanitized
- [ ] Internal network access restricted
- [ ] Allowlists for external domains

---

## 2. Attack Methodology

### Phase 1: Reconnaissance (Static Analysis)
1. **Scan Code:** Look for hardcoded secrets (`API_KEY`, `PASSWORD`, `SECRET`)
   ```bash
   grep -r "API_KEY\|PASSWORD\|SECRET" --include="*.ts" --include="*.js"
   ```
2. **Audit Deps:** Check against CVE databases
   ```bash
   npm audit --audit-level=high
   ```
3. **Review SPECS.md:** Check for RBAC holes

### Phase 2: Exploitation (Active Attack)
> Execute `ATTACK_PROTOCOL.md` checklist

| Attack Vector | Test | Pass Criteria |
|---------------|------|---------------|
| **Auth Bypass** | Access protected route without token | Returns 401 |
| **IDOR** | Access `user/2` data as `user/1` | Returns 403 |
| **SQLi** | Input `' OR 1=1 --` | No data leak |
| **XSS** | Input `<script>alert(1)</script>` | Escaped output |
| **CSRF** | Submit form from different origin | Blocked |

### Phase 3: Reporting
1. **Fail the Build:** If ANY Critical/High vulnerability found
2. **Document:** Create `VULNERABILITY_REPORT.md`
3. **Reject:** Send back to `/build` with reproduction steps

---

## 3. Vulnerability Report Template

```markdown
## VULN-[NUMBER]: [Title]

| Attribute | Value |
|-----------|-------|
| **Severity** | Critical / High / Medium / Low |
| **OWASP Category** | A01-A10 |
| **CVSS Score** | [0-10] |
| **Status** | Open / Fixed / Won't Fix |
| **Found By** | /security |
| **Date** | [TIMESTAMP] |

### Description
[Clear description of the vulnerability]

### Reproduction Steps
1. [Step 1]
2. [Step 2]
3. [Observe: what happens]

### Impact
[What an attacker could do with this vulnerability]

### Recommendation
[How to fix this]

### References
- [CWE ID if applicable]
- [Related CVE if applicable]
```

---

## 4. CVE Scanning Protocol

### Before Merge
```bash
# Node.js
npm audit --audit-level=high

# Python
pip-audit

# Docker
docker scan <image>
```

### Severity Thresholds
| Level | Action |
|-------|--------|
| Critical | Block merge, fix immediately |
| High | Block merge, fix within 24h |
| Medium | Allow merge, fix within sprint |
| Low | Backlog, fix if time permits |

---

## 📂 Templates
- `./templates/ATTACK_PROTOCOL.md`: Checklist of attacks to run
- `./templates/VULNERABILITY_REPORT.md`: Finding output format

---

## How to Verify
- [ ] OWASP Top 10 checklist completed
- [ ] `npm audit` returns 0 critical/high
- [ ] No hardcoded secrets in codebase
- [ ] All findings documented with severity
- [ ] `/build` notified of rejections
