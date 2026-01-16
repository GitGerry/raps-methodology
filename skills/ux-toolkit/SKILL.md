---
name: UX Toolkit
description: Usability heuristics, accessibility standards, and user testing templates
---

# UX Toolkit

## Purpose
Provide usability evaluation heuristics, accessibility standards, and user testing templates for the /ux persona.

## When to Use
- Evaluating UI designs
- Conducting usability reviews
- Accessibility audits
- User acceptance testing
- Gathering user feedback

---

## Tool Interface

### Inputs
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `action` | enum | ✅ | `"heuristic_eval"` \| `"accessibility_audit"` \| `"user_test"` |
| `scope` | string | ❌ | Feature or screen to evaluate |

### Outputs
- **Type:** Markdown
- **Structure:** UX report with findings and recommendations

---

## 1. Nielsen's 10 Usability Heuristics

### H1: Visibility of System Status
- [ ] System provides feedback within reasonable time
- [ ] User knows what is happening
- [ ] Loading states are clear
- [ ] Progress indicators for long operations

### H2: Match Between System and Real World
- [ ] Uses familiar language (no jargon)
- [ ] Follows real-world conventions
- [ ] Information in natural, logical order
- [ ] Icons are intuitive

### H3: User Control and Freedom
- [ ] Clear "emergency exit" (cancel, back)
- [ ] Undo and redo supported
- [ ] User can abandon tasks easily
- [ ] Confirmation for destructive actions

### H4: Consistency and Standards
- [ ] UI elements behave consistently
- [ ] Follows platform conventions
- [ ] Same words mean same things
- [ ] Visual consistency throughout

### H5: Error Prevention
- [ ] Prevents errors before they occur
- [ ] Confirmation for high-risk actions
- [ ] Good defaults provided
- [ ] Constraints prevent invalid input

### H6: Recognition Rather Than Recall
- [ ] Options visible, not hidden
- [ ] Help information in context
- [ ] Recent items/history shown
- [ ] Reduce memory load

### H7: Flexibility and Efficiency of Use
- [ ] Keyboard shortcuts for power users
- [ ] Personalization options
- [ ] Shortcuts for frequent actions
- [ ] Expert mode available

### H8: Aesthetic and Minimalist Design
- [ ] No irrelevant information
- [ ] Visual hierarchy clear
- [ ] White space used effectively
- [ ] Focus on essential content

### H9: Help Users Recognize and Recover from Errors
- [ ] Error messages in plain language
- [ ] Precisely indicates problem
- [ ] Suggests solution
- [ ] Non-technical language

### H10: Help and Documentation
- [ ] Help available when needed
- [ ] Task-focused documentation
- [ ] Easy to search
- [ ] Concise and actionable

---

## 2. Accessibility Checklist (WCAG 2.1 AA)

### Perceivable
- [ ] Alt text for all images
- [ ] Captions for video/audio
- [ ] Color not sole indicator
- [ ] Sufficient color contrast (4.5:1 text, 3:1 UI)
- [ ] Text resizable to 200%
- [ ] No content loss at zoom

### Operable
- [ ] All functionality via keyboard
- [ ] No keyboard traps
- [ ] Focus visible and logical
- [ ] Skip navigation links
- [ ] Descriptive page titles
- [ ] Multiple ways to find pages

### Understandable
- [ ] Language attribute set
- [ ] Consistent navigation
- [ ] Consistent identification
- [ ] Error identification and suggestion
- [ ] Labels for form inputs

### Robust
- [ ] Valid HTML
- [ ] ARIA used correctly
- [ ] Works with assistive tech
- [ ] Name, role, value accessible

---

## 3. Usability Finding Template

```markdown
### UX-[NUMBER]: [Title]

| Attribute | Value |
|-----------|-------|
| **Severity** | Critical / Major / Minor / Enhancement |
| **Heuristic** | [H1-H10 or WCAG criterion] |
| **Location** | [Screen/Component] |
| **Status** | Open / Fixed |

#### Description
[Clear description of the issue]

#### Impact
[How it affects users]

#### Screenshot
[Image if applicable]

#### Recommendation
[How to fix]

#### Priority
[Based on user impact and fix effort]
```

---

## 4. User Testing Template

```markdown
# User Test: [Feature Name]

## Test Plan
| Attribute | Value |
|-----------|-------|
| Date | [TIMESTAMP] |
| Facilitator | /ux |
| Participants | [Number] |
| Method | Moderated / Unmoderated |

## Tasks
| # | Task | Success Criteria | Time Limit |
|---|------|------------------|------------|
| 1 | [Task description] | [What counts as success] | [Minutes] |
| 2 | [Task description] | [What counts as success] | [Minutes] |

## Participants
| ID | Demographics | Tech Comfort |
|----|--------------|--------------|
| P1 | [Age, role] | High/Med/Low |

## Results
| Participant | Task 1 | Task 2 | SUS Score | Notes |
|-------------|--------|--------|-----------|-------|
| P1 | ✅/❌ | ✅/❌ | [Score] | [Notes] |

## Key Findings
1. [Finding 1]
2. [Finding 2]

## Recommendations
1. [Recommendation]
2. [Recommendation]
```

---

## 5. System Usability Scale (SUS)

### Questions (1-5 scale)
1. I would use this system frequently
2. I found the system unnecessarily complex
3. I thought the system was easy to use
4. I would need support to use this system
5. Functions were well integrated
6. Too much inconsistency
7. Most people would learn quickly
8. System was cumbersome to use
9. I felt confident using the system
10. Needed to learn a lot before using

### Scoring
- Average score > 68 = Above average
- Score < 50 = Serious usability issues

---

## How to Verify

- [ ] Heuristic evaluation completed
- [ ] Accessibility audit passed (WCAG 2.1 AA)
- [ ] User testing conducted
- [ ] Critical UX issues addressed
- [ ] SUS score > 68
