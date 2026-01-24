# 🎤 Stakeholder Interview Questionnaire

**Project:** [Project Name]
**Stakeholder:** [Name/Role]
**Date:** [Date]

## 1. Context & Role
- **Q:** What is your official role? (e.g. Admin, Editor, Viewer)
- **Q:** Who else uses the system, and what should they start *forbidden* from doing?
  - *Response:* [e.g. "Interns should not see financials"] -> **Source for RBAC Matrix**

## 2. Limits & Monetization (The "Gates")
- **Q:** Is there a "Free" version? What is the limitation?
  - *Response:* [e.g. "Yes, max 3 projects"] -> **Source for Feature Gates**
- **Q:** What triggers an upgrade to "Pro"?

## 3. The "As-Is" (Current State)
> Goal: Understand the current mess.
- **Q:** Walk me through the process step-by-step. How do you do X today?
- **Q:** What tools/files (Excel, Email, SaaS) do you use?
- **Q:** What is the biggest pain point/bottleneck right now?
  - *Response:* [e.g. "I have to manually copy-paste data"]

## 4. The "To-Be" (Wishlist)
> Goal: Define the success metrics.
- **Q:** If you could wave a magic wand, what would this process look like?
- **Q:** What data MUST be captured for this to be compliant/useful?

## 5. Compliance & Invariants
- **Q:** Are there any "Golden Rules" we can never break? (e.g. "Balance < 0")
- **Q:** Are there legal/compliance rules? (GDPR, Tax Retention)
  - *Response:* [e.g. "Keep logs for 7 years"] -> **Source for Compliance Section**
