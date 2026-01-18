---
name: Security Toolkit
description: Red Teaming, Penetration Testing, and Vulnerability Assessment.
---

# 🛡️ Security Toolkit (The Red Team)

## Purpose
To actively attack, exploit, and audit the application to uncover weaknesses before deploying.
**Philosophy:** "If we don't break it, the hackers will."

## 🧠 Attack Methodology

### Phase 1: Reconnaissance (Static Analysis)
1.  **Scan Code:** Look for hardcoded secrets (`API_KEY`, `PASSWORD`).
2.  **Audit Deps:** Check `package.json` against known CVE databases.
3.  **Review Docs:** Check `SPECS.md` for logical holes in RBAC.

### Phase 2: Exploitation (Active Attack)
> execute the `ATTACK_PROTOCOL.md` checklist.

1.  **Auth Attacks:** Try to access resources without tokens or with invalid tokens.
2.  **Logic Attacks:** Try to perform actions out of order.
3.  **Input Attacks:** Fuzz every input field with malicious payloads.

### Phase 3: Reporting
1.  **Fail the Build:** If ANY Critical/High vulnerability is found.
2.  **Document:** Create `VULNERABILITY_REPORT.md`.
3.  **Reject:** Send back to `/build` with reproduction steps.

## 📂 Templates
- `./templates/ATTACK_PROTOCOL.md`: The checklist of attacks to run.
- `./templates/VULNERABILITY_REPORT.md`: The specific output format for findings.
