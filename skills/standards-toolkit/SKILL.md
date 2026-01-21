---
name: Standards Toolkit
description: RAPS S+ Gold Standard enforcement and workflow hardening protocols.
---

# 🛡️ Standards Toolkit (The S+ Enforcer)

> [!IMPORTANT]
> **ANTI-HALLUCINATION PROTOCOL**
> 1. You cannot declare a file "compliant" without checking every gate.
> 2. You must verify paths with `list_dir` before claiming they exist.
> 3. You cannot skip phases—if blocked, log and escalate.

## Purpose
Provide the execution logic for `/raps-improve` workflow. Contains all phase protocols for hardening RAPS workflows to S+ Gold Standard.

## When to Use
- Hardening an existing workflow
- Auditing for S+ compliance
- Standardizing handoff matrices
- Validating dependency chains

## Reference Template
The S+ Gold Standard is defined by [analyst.md](../../workflows/analyst.md). All hardening uses this as the structural template.

---

## S+ Compliance Checklist (Quick Reference)

| Element | S+ Requirement | Check |
|---------|----------------|-------|
| Anti-Hallucination | 5+ rules, scope-aware | `grep "PROTOCOL"` |
| Context Block | Persona, Mission, Lane (3 types) | `grep "## Context"` |
| Entry Checklist | 5+ binary items, skill loading | `grep "Entry Checklist"` |
| Prerequisites | 3+ explicit preconditions | `grep "Prerequisites"` |
| Prohibitions | 4+ "NO" rules | `grep "Prohibitions"` |
| Workflow | Phase table OR skill delegation | `grep "Workflow"` |
| Quality Gate | 5+ objective checks | `grep "Quality Gate"` |
| Exit Checklist | 7+ items, MEMORY + integrity | `grep "Exit Checklist"` |
| Handoff Matrix | 4 columns, 4+ rows | `grep "Handoff Matrix"` |

---

## 🧠 Thinking Logic (Phase Execution)

> **Called from:** [/raps-improve workflow](../../workflows/raps-improve.md)

### Phase 1: Structural Alignment (The Skeleton)
**Goal:** Ensure the file follows S+ Header-to-Footer structure.

**Expert Question:** *"Would a RAPS Governance Officer accept this structure?"*

**Actions:**
1. **Top Protocol**: Insert `ANTI-HALLUCINATION PROTOCOL` block after H1 title.
   - Must have 5+ rules
   - Must include scope creep detection
2. **Context Block**: Ensure `## Context` exists with:
   - **Persona**: Role identity
   - **Mission**: One-sentence purpose
   - **Lane**: Owner (Write) / Collaborative (Write) / Reader
3. **Emoji Reference**: Insert standard `Status Emoji Reference` table.
4. **Remove Legacy**: Delete any `## Prompt` or `System Prompt` sections.

### Phase 2: Binary Gate Hardening (The Logic)
**Goal:** Replace subjective checks with verifiable, binary conditions.

**Expert Question:** *"Can this gate be measured with a script?"*

**Actions:**
1. **Audit Entry Checklist**:
   - ❌ "Understand requirements" → ✅ "Read `docs/functional/FRD_*.md`"
   - ❌ "Check for files" → ✅ "Verify `list_dir` output for [Folder]"
   - ❌ "Ensure quality" → ✅ "Run [specific command] with 0 failures"
2. **Audit Quality Gate**:
   - ❌ "Code matches spec" → ✅ "100% of exported APIs match `docs/api/`"
   - ❌ "Tested" → ✅ "`npm test` passes with 0 failures"
3. **Rule**: If it can't be measured TRUE/FALSE, it's not a gate.

### Phase 3: Handoff Standardization (The Interface)
**Goal:** Ensure Handoff Matrix uses 4-column standard.

**Expert Question:** *"Can the next agent unambiguously determine their trigger?"*

**Actions:**
1. **Format Check**: Ensure table has:
   - Column 1: `Outcome` (emoji + state)
   - Column 2: `Next Agent` (persona or skill)
   - Column 3: `Command` (action to take)
   - Column 4: `Trigger` (artifact state that caused this)
2. **Minimum Rows**: At least 4 outcomes:
   - ✅ Success path
   - ⏳ Waiting/blocked path
   - 🔄 Revision/loop path
   - 🚨 Escalation path

### Phase 4: Instruction Hardening (The Expert Heuristic)
**Goal:** Upgrade vague instructions to Senior-Level Protocols.

**Expert Question:** *"If I were a Senior [ROLE], would I accept 'Just do it' as guidance?"*

**Actions:**
1. **Identify Role**: Check `## Context > Persona`.
2. **The Expert Test**: Find statements like:
   - ❌ "Implement the feature"
   - ❌ "Write tests"
   - ❌ "Deploy to production"
3. **Rewrite to Protocol**:
   ```markdown
   ### Phase N: [Name]
   **Goal:** [One sentence]
   **Expert Question:** *"[Quality check]"*
   **Actions:**
   1. [Specific step]
   2. [Specific step]
   ```
4. **Constraint**: Instructions must be phase-based (Scaffold → Logic → Verify).

### Phase 5: Dependency Audit (The Chain of Trust)
**Goal:** Ensure all referenced artifacts are also RAPS compliant.

**Expert Question:** *"Is every linked file trustworthy?"*

**Actions:**
1. **Extract Links**: Find all `[Link](path)` patterns in document.
2. **Verify Existence**: For each path, run `list_dir` to confirm.
3. **Audit Compliance**: Open each linked file and check:
   - Has `ANTI-HALLUCINATION PROTOCOL`?
   - Inputs/outputs unambiguous?
   - Well-documented?
4. **Remediation**:
   - If Compliant: Mark as `[VALIDATED]`
   - If Legacy: Add `> [!WARNING] Legacy Dependency` alert

### Phase 6: Schema Consistency (The Template Check)
**Goal:** Prevent template corruption and ledger misalignment.

**Expert Question:** *"Will this file break the Master Ledger?"*

**Actions:**
1. **Artifact Registry Check**:
   - Locate any artifact registration sections
   - Verify column count matches `PLAN.md` (5 columns)
2. **Session Log Check**:
   - Verify templates include `| [TIMESTAMP] | ... |`
3. **Handoff Notes Check**:
   - Verify cross-persona templates match `HANDOFF_NOTES.md`

### Phase 7: Path & Integrity Verification (The Audit)
**Goal:** Ensure no broken links or hallucinations.

**Expert Question:** *"Does every path resolve?"*

**Actions:**
1. **Path Scan**: Check every `[Link](path)` in the file.
2. **Integrity Check**: Run `scripts/check_integrity.ps1` after edits.
3. **Final Validation**: Confirm exit code 0.

---

## Definition of Done

- [ ] All 7 phases executed
- [ ] Target file matches S+ template structure
- [ ] All internal links verified
- [ ] Integrity check passes
- [ ] Changes logged

## How to Verify

```powershell
# Quick compliance check
Select-String -Path "workflows/[target].md" -Pattern "ANTI-HALLUCINATION|Context|Entry Checklist|Quality Gate|Exit Checklist|Handoff Matrix"
```
