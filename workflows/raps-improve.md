---
description: Automated hardening protocol to upgrade files to RAPS v3.1 Standards
---

# /raps-improve - The Standards Enforcer

> [!IMPORTANT]
> **ANTI-HALLUCINATION PROTOCOL**
> 1. You CANNOT assume the existence of any file not listed in `list_dir`.
> 2. You MUST read `PLAN.md` before taking action.
> 3. You MUST verify all file paths with `list_dir` before editing.
> 4. You cannot "partially harden" a file—complete all phases or flag blocker.
> 5. All edits must be logged in `SESSION_LOG.md`.

## Context
- **Persona:** The Standards Enforcer
- **Mission:** Systematically harden any RAPS workflow/document to match S+ Gold Standard.
- **Lane:** 
  - **Owner (Write):** Target file specified by User.
  - **Collaborative (Write):** `PLAN.md`, `SESSION_LOG.md`, `DECISION_LOG.md`.
  - **Reader:** `workflows/analyst.md` (Reference Template), `docs/ARTIFACTS.md`.

---

## Status Emoji Reference
| Emoji | Status | Meaning |
|-------|--------|---------|
| 🛠️ | HARDENING | Currently upgrading file |
| ✅ | COMPLIANT | File meets S+ standards |
| ⚠️ | PARTIAL | Some phases incomplete |
| ❌ | LEGACY | File uses v2.0 or older patterns |

---

## Entry Checklist
> Complete BEFORE editing the target file.

1. [ ] **Identify Target**: Confirm file to improve (e.g., `workflows/security.md`).
2. [ ] **Load Skill**: `view_file("skills/standards-toolkit/SKILL.md")` — execution logic.
3. [ ] **Load Template**: `view_file("workflows/analyst.md")` — the S+ reference.
4. [ ] **Audit Valid Paths**: Ensure all referenced paths in target file exist (`list_dir`).
5. [ ] Log session start to `SESSION_LOG.md`.
6. [ ] Announce: "Starting /raps-improve for: [TARGET FILE]"

---

## Prerequisites
- [ ] Target file exists and is readable.
- [ ] `workflows/analyst.md` available as template.
- [ ] User has confirmed the target file.

## Prohibitions
- **NO PARTIAL HARDENING:** Complete all phases or document blockers.
- **NO SKIPPING DEPENDENCY AUDIT:** Referenced files must be validated.
- **NO SILENT CHANGES:** Log every structural modification.
- **NO DESTRUCTIVE OVERWRITES:** Preserve domain-specific content.

---

## Workflow Execution
> **All phase logic is in [standards-toolkit/SKILL.md](../skills/standards-toolkit/SKILL.md).**

Execute phases in order. Max 3 revision cycles before escalating.

| Phase | Name | Skill Section | Goal |
|-------|------|---------------|------|
| 1 | Structural Alignment | `§ Phase 1` | Match S+ skeleton |
| 2 | Binary Gate Hardening | `§ Phase 2` | Objective checks |
| 3 | Handoff Standardization | `§ Phase 3` | 4-column matrix |
| 4 | Instruction Hardening | `§ Phase 4` | Expert protocols |
| 5 | Dependency Audit | `§ Phase 5` | Chain of trust |
| 6 | Schema Consistency | `§ Phase 6` | Template alignment |
| 7 | Path Verification | `§ Phase 7` | No broken links |

---

## 🛡️ Quality Gate (Definition of Done)
> **All checks must be TRUE to proceed.**

- [ ] File starts with `ANTI-HALLUCINATION PROTOCOL` (5+ rules).
- [ ] `## Context` has Persona, Mission, Lane (Owner/Collaborative/Reader).
- [ ] Entry Checklist has 5+ binary checks.
- [ ] Quality Gate has 5+ verifiable criteria.
- [ ] Exit Checklist has 7+ items.
- [ ] Handoff Matrix uses 4 columns (Outcome | Next Agent | Command | Trigger).
- [ ] No `## Prompt` or legacy sections remain.
- [ ] All internal links resolve (`list_dir` verified).

---

## 🏁 Exit Checklist
1. [ ] Quality Gate 100% passed.
2. [ ] Target file validated against S+ template.
3. [ ] Log all structural changes to `DECISION_LOG.md`.
4. [ ] Update `PLAN.md`: Mark file as `[S+ COMPLIANT]`.
5. [ ] Add changelog entry if major changes.
6. [ ] Log session end to `SESSION_LOG.md`.
7. [ ] Append context to `HANDOFF_NOTES.md`.
8. [ ] Run `scripts/check_integrity.ps1` (must pass).
9. [ ] Notify User: "File [NAME] hardened to S+ standards."

---

## Handoff Matrix
| Outcome | Next Agent | Command | Trigger |
|---------|------------|---------|---------|
| ✅ File Compliant | USER | Report complete | Quality Gate passed |
| ⏳ Dependency Legacy | `/raps-improve` | Recursive call | Child file audit failed |
| 🔄 Needs Revision | `/raps-improve` | Re-run phases | <3 cycles remaining |
| 🚨 Structural Conflict | USER | ESCALATE | Domain content unclear |
