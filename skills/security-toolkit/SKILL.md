---
name: Security Toolkit
description: Security checklists, vulnerability assessment, and compliance standards
---

# Security Toolkit

## Purpose
Provide security assessment checklists, vulnerability testing guidance, and compliance verification standards for the /security persona.

## When to Use
- Security review of new features
- Pre-deployment security audit
- Vulnerability assessment
- Compliance verification
- Incident response

---

## Tool Interface

### Inputs
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `action` | enum | ✅ | `"audit"` \| `"pen_test"` \| `"compliance_check"` |
| `scope` | string | ❌ | Feature or system to assess |

### Outputs
- **Type:** Markdown
- **Structure:** Security report with findings

---

## 1. OWASP Top 10 Checklist

### A01:2021 – Broken Access Control
- [ ] Verify principle of least privilege
- [ ] Check for IDOR vulnerabilities
- [ ] Test authorization on all endpoints
- [ ] Verify JWT validation
- [ ] Check for privilege escalation paths

### A02:2021 – Cryptographic Failures
- [ ] All data in transit uses TLS 1.2+
- [ ] Sensitive data encrypted at rest
- [ ] No hardcoded secrets
- [ ] Strong password hashing (bcrypt/Argon2)
- [ ] Secure random number generation

### A03:2021 – Injection
- [ ] Parameterized queries (no string concatenation)
- [ ] Input validation on all endpoints
- [ ] Output encoding for XSS prevention
- [ ] Command injection prevention

### A04:2021 – Insecure Design
- [ ] Threat modeling completed
- [ ] Security requirements in specs
- [ ] Rate limiting implemented
- [ ] Defense in depth

### A05:2021 – Security Misconfiguration
- [ ] Default credentials changed
- [ ] Unnecessary features disabled
- [ ] Error messages don't leak info
- [ ] Security headers configured

### A06:2021 – Vulnerable Components
- [ ] Dependencies up to date
- [ ] No known CVEs in dependencies
- [ ] Dependency scanning enabled
- [ ] SBOM maintained

### A07:2021 – Authentication Failures
- [ ] Strong password policy
- [ ] Brute force protection
- [ ] Secure session management
- [ ] MFA available/required

### A08:2021 – Software and Data Integrity Failures
- [ ] CI/CD pipeline secured
- [ ] Code signing implemented
- [ ] Integrity verification for updates

### A09:2021 – Security Logging Failures
- [ ] Security events logged
- [ ] Logs protected from tampering
- [ ] Monitoring and alerting configured

### A10:2021 – Server-Side Request Forgery
- [ ] URL validation
- [ ] Allowlist for external requests
- [ ] Network segmentation

---

## 2. Security Review Checklist

### Authentication
| Check | Status | Notes |
|-------|--------|-------|
| Secure password storage | ☐ | |
| Session timeout configured | ☐ | |
| CSRF protection | ☐ | |
| Secure cookie flags | ☐ | |

### Authorization
| Check | Status | Notes |
|-------|--------|-------|
| RBAC implemented | ☐ | |
| Endpoints protected | ☐ | |
| Horizontal privilege checked | ☐ | |

### Data Protection
| Check | Status | Notes |
|-------|--------|-------|
| PII identified and protected | ☐ | |
| Data retention policy | ☐ | |
| Backup encryption | ☐ | |

### Infrastructure
| Check | Status | Notes |
|-------|--------|-------|
| Firewall rules reviewed | ☐ | |
| No public database access | ☐ | |
| Secrets management | ☐ | |

---

## 3. Security Finding Template

```markdown
### FINDING-[NUMBER]: [Title]

| Attribute | Value |
|-----------|-------|
| **Severity** | Critical / High / Medium / Low / Info |
| **Category** | [OWASP Category] |
| **Status** | Open / Mitigated / Accepted / Fixed |
| **Found** | [Date] |
| **Fixed** | [Date or N/A] |

#### Description
[Clear description of the vulnerability]

#### Impact
[What could happen if exploited]

#### Proof of Concept
[Steps to reproduce or evidence]

#### Recommendation
[How to fix]

#### References
- [CVE/CWE links if applicable]
```

---

## 4. Compliance Checklists

### GDPR (Data Protection)
- [ ] Privacy policy published
- [ ] Consent mechanisms for data collection
- [ ] Data subject rights implemented (access, delete)
- [ ] Data processing records maintained
- [ ] Data breach notification process

### SOC 2 Type II
- [ ] Access controls documented
- [ ] Change management process
- [ ] Incident response plan
- [ ] Vendor management
- [ ] Security awareness training

---

## 5. Security Headers

### Required Headers
```
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Content-Security-Policy: default-src 'self'
Referrer-Policy: strict-origin-when-cross-origin
```

---

## How to Verify

- [ ] OWASP Top 10 checklist completed
- [ ] All critical/high findings addressed
- [ ] Security headers configured
- [ ] Penetration test passed
- [ ] Compliance requirements met
