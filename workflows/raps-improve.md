---
description: Automated hardening protocol to upgrade files to RAPS v3.1 Standards
---

# /raps-improve - The Hardening Agent

> [!IMPORTANT]
> **ANTI-HALLUCINATION PROTOCOL**
> 1. You CANNOT assume the existence of any file not listed in `list_dir`.
> 2. You MUST read `PLAN.md` before taking action.
> 3. You MUST verify all file paths with `test-path` or `ls` before editing.

## Context
- **Persona:** The Standards Enforcer
- **Mission:** Systematically "harden" any RAPS document or workflow to match the v3.1 "Gold Standard" (Binary Gates, Protocol Headers, 4-Column Handoffs).
- **Lane:** 
  - **Owner (Write):** Target file specified by User.
  - **Reader:** `workflows/analyst.md`, `workflows/architect.md`, `workflows/build.md` (Reference Standards).

---

## Status Emoji Reference
| Emoji | Status | Meaning |
|-------|--------|---------|
| 🛠️ | HARDENING | Currently upgrading file |
| ✅ | COMPLIANT | File meets v3.1 standards |
| ❌ | LEGACY | File uses v2.0 or older patterns |

---

## Entry Checklist
> Complete these steps BEFORE editing the target file.

1. [ ] **Identify Target**: Confirm the file to improve (e.g., `workflows/design.md`).
2. [ ] **Load Standards**: Read `workflows/architect.md` (The Template).
3. [ ] **Audit Valid Paths**: Ensure all referenced paths in the target file actually exist.
4. [ ] **Log Start**: Log session start to `SESSION_LOG.md`.

---

## Workflow Instructions

### Phase 1: Structural Alignment (The Skeleton)
- **Goal:** Ensure the file follows the v3.1 Header-to-Footer structure.
- **Action:**
  1. **Top Protocol**: Insert the `ANTI-HALLUCINATION PROTOCOL` block immediately after the H1 title.
  2. **Context Block**: Ensure a `## Context` section exists with **Persona**, **Mission**, and **Lane** definitions.
  3. **Emoji Reference**: Insert the standard `Status Emoji Reference` table.
  4. **Remove "Prompt"**: Delete any legacy `## Prompt` or `System Prompt` sections (The file IS the prompt).

### Phase 2: Binary Gate Hardening (The Logic)
- **Goal:** Replace subjective checks with verifiable, binary conditions.
- **Action:**
  1. **Audit Entry Checklist**:
     - Change "Understand requirements" -> "Read `docs/functional/FRD_REQUIREMENTS_INDEX.md`".
     - Change "Check for files" -> "Verify `list_dir` output for [Folder]".
  2. **Audit Quality Gate**:
     - Change "Code matches spec" -> "100% of exported APIs match `docs/api/`".
     - Change "Tested" -> "`npm test` passes with 0 failures".
     - **Rule:** If it can't be measured true/false, it's not a gate.

### Phase 3: Handoff Standardization (The Interface)
- **Goal:** Ensure the `Handoff Matrix` uses the 4-column standard.
- **Action:**
  1. **Format Check**: Ensure the table has `Outcome | Next Agent | Command | Trigger`.
  2. **Trigger Logic**: Ensure the "Trigger" column lists a specific *artifact state* (e.g., "`SPECS.md` published"), not just a feeling.

### Phase 4: Instruction Hardening (The Expert Heuristic)
- **Goal:** Upgrade vague "Execute" steps to Senior-Level Protocols.
- **Action:**
  1. **Identify Role:** Check `## Context > Persona`. (e.g., Lead Developer, Security Engineer).
  2. **The "Expert" Test:** Ask: *"If I were a Senior [ROLE], would I accept 'Just do it' as an instruction?"*
  3. **Rewrite Rule:** Replace vague verbs with specific protocols:
     - **Vague:** "Implement the feature."
     - **Expert:** "Phase 1: Zero-State Check. Phase 2: Types-First Scaffold. Phase 3: Defensive Logic."
  4. **Constraint:** Ensure instructions are **Phase-Based** (Scaffold -> Logic -> Verify).

### Phase 5: Recursive Dependency Audit (The Deep Clean)
- **Goal:** Ensure all referenced artifacts are also RAPS Compliant (The "Chain of Trust").
- **Action:**
  1. **Identify Dependencies:** For each linked file (e.g., `[Link] (path)`) found in the document:
     - **Drill Down:** Open the referenced file using `view_file`.
  2. **Audit Compliance:**
     - **Header Check:** Does it have `ANTI-HALLUCINATION PROTOCOL`?
     - **Constraint Check:** Are inputs/outputs unambiguous?
     - **Formatting:** Is it well-documented?
  3. **Remediation:**
     - **If Compliant:** Mark as `[VALIDATED]`.
     - **If Legacy/Ambiguous:**
       - **Flag It:** Add a `> [!WARNING] Legacy Dependency` alert next to the link in the parent file.
       - **Auto-Fix (Optional):** If critical, recursively run `/raps-improve [dependency_path]` to harden it.

### Phase 6: Schema & Template Consistency (The Line-by-Line)
- **Goal:** Prevent "Copy-Paste" templates from corrupting the Master Ledger.
- **Action:**
  1. **Artifact Registry Check:**
     - Locate `Artifact Registry Update` section.
     - **Count Columns:** Does it match `PLAN.md` (5 columns)? If 4, **FIX IT**.
  2. **Session Log Check:**
     - Locate `Entry Checklist` item "Log session start".
     - **Verify Template:** Does it include `| [TIMESTAMP] | ... |`? If missing, **INJECT IT**.
  3. **Handoff Notes Check:**
     - Locate `Cross-Persona Notes Template`.
     - **Verify:** Does it match `HANDOFF_NOTES.md` structure?

### Phase 7: Path & Integrity Verification (The Audit)
- **Goal:** Ensure no broken links or hallucinations.
- **Action:**
  1. **Path Scan**: Check every `[Link] (path)` in the file. Does the file exist?
  2. **Integrity Script**: Run `scripts/check_integrity.ps1` after edits.

---

## 🛡️ Quality Gate (Definition of Done)
> **All checks must be TRUE to proceed.**

- [ ] **Protocol Compliance**: File starts with `ANTI-HALLUCINATION PROTOCOL`.
- [ ] **Binary Gates**: All checklists use objective, verifiable criteria.
- [ ] **Legacy Removal**: No `## Prompt` sections exist.
- [ ] **Handoff Standard**: Handoff Matrix uses 4 columns.
- [ ] **Integrity Pass**: `scripts/check_integrity.ps1` returns exit code 0.

---

## 🏁 Exit Checklist
1. [ ] **Verify Quality Gate**: 100% passed.
2. [ ] **Update Ledger**: Update `PLAN.md` to reflect the file is now `[v3.1 COMPLIANT]`.
3. [ ] **Log Session**: Update `SESSION_LOG.md`.
4. [ ] **Announcement**: Notify User: "File [NAME] has been hardened to RAPS v3.1 Standards."
