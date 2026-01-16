---
name: Import Requirements  
description: Convert external requirements (PRDs, Jira, meeting notes) into RAPS format
---

# Import Requirements Skill

## Purpose
Transform unstructured or external requirement sources into structured RAPS requirements documents with proper ID conventions.

## When to Use
- User provides a feature description in plain text
- Converting meeting notes to requirements
- Importing from Jira, Confluence, or other tools
- Parsing PRD documents into RAPS format

---

## Instructions

### 1. Accept Input
Accept one of the following input types:
- Plain text description
- URL to a document (use firecrawl to scrape)
- Pasted content from external source
- File path to existing document

### 2. Extract Requirements

#### Functional Requirements (FREQ)
Look for statements that describe:
- "The system must..."
- "Users should be able to..."
- "The application will..."
- Action verbs: create, update, delete, view, export, import

#### Non-Functional Requirements (NFRQ)
Look for statements about:
- Performance (speed, response time)
- Security (authentication, authorization)
- Scalability (users, data volume)
- Reliability (uptime, error handling)

#### User Stories (STRY)
Convert user-centric statements to format:
```
As a [user type]
I want to [action]
So that [benefit]
```

### 3. Assign RAPS IDs
Use sequential 7-digit numbering:
- FREQ0000001, FREQ0000002, ...
- STRY0000001, STRY0000002, ...
- NFRQ0000001, NFRQ0000002, ...

### 4. Generate Acceptance Criteria
For each requirement, create testable acceptance criteria:
- Given [context], when [action], then [result]

### 5. Flag Ambiguities
Create QSTN entries for anything unclear:
- Missing details
- Conflicting requirements
- Undefined terms

### 6. Output
Generate `/docs/requirements/REQUIREMENTS_IMPORT_[SOURCE].md` with:
- All extracted requirements
- Generated user stories
- Open questions for user verification

---

## Output Template

```markdown
# 📋 IMPORTED REQUIREMENTS: [Source Name]

**Import Date:** [TIMESTAMP]
**Source:** [Original source description]
**Status:** Draft (Pending User Verification)

---

## Functional Requirements

### FREQ0000001: [Extracted Requirement]
- **Status:** Draft
- **Priority:** TBD (User to confirm)
- **Description:** [What the system must do]
- **Acceptance Criteria:**
  - [ ] [Generated from content]
- **Source Quote:** "[Original text from source]"

---

## User Stories

### STRY0000001: [Derived Story Title]
**Status:** Draft
**As a** [user type]
**I want to** [extracted action]
**So that** [inferred benefit]

**Acceptance Criteria:**
- [ ] Given [context], when [action], then [result]

**Source Quote:** "[Original text]"

---

## Questions for User Verification

| ID | Question | Source Context |
|----|----------|----------------|
| QSTN0000001 | [Clarifying question] | "[Ambiguous text]" |

---

## Next Steps
1. User reviews and approves/modifies requirements
2. Run `/analyst` to complete full requirements analysis
3. Add approved requirements to main REQUIREMENTS.md
```

---

## How to Verify
- Output file created in `/docs/requirements/`
- All IDs follow RAPS conventions
- Each requirement has acceptance criteria
- Ambiguities flagged as questions
- Source quotes preserved for traceability
