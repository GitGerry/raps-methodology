---
name: Design Toolkit
description: UI/UX patterns, responsive standards, and frontend component guidelines.
---

# 🎨 Design Toolkit (The Visual Engine)

> [!IMPORTANT]
> **ANTI-HALLUCINATION PROTOCOL**
> 1. You cannot claim "responsive" without testing at 320px, 768px, 1024px.
> 2. You must verify component doesn't already exist before creating.
> 3. You cannot use CSS frameworks without checking `package.json`.

## Purpose
Provide standards for UI/UX implementation, component patterns, and responsive design. Defines the execution logic for `/design` workflow.

## When to Use
- Building frontend components
- Implementing responsive layouts
- Creating interaction states
- Following design system patterns

---

## 🧠 Thinking Logic (How to Execute)

> **Called from:** [/design workflow](../../workflows/design.md)

### § Flow Mapping
Before designing:
1. Read `docs/business/BRD_PROCESS_MAP.md` for user journeys
2. Read `docs/diagrams/decision_tree_*.mmd` for logic forks
3. Identify the "Happy Path" the UI must support

### § Component Patterns

#### Atomic Design Hierarchy
| Level | Examples | Reuse |
|-------|----------|-------|
| **Atoms** | Button, Input, Label | High reuse |
| **Molecules** | FormField, SearchBar | Medium reuse |
| **Organisms** | Header, Card, Modal | Feature-specific |
| **Templates** | PageLayout, DashboardLayout | App-wide |
| **Pages** | HomePage, SettingsPage | Unique |

#### Component Creation Rules
1. **Check First:** Search `/components` before creating
2. **Props-First:** Define `interface Props {}` before implementation
3. **State-Agnostic:** Components should be pure where possible
4. **Export Types:** Co-locate types with components

### § Page Assembly
1. **Mock Data First:** Hardcode data inside page initially
2. **State Wiring:** Connect to hooks/stores once layout proven
3. **Error States:** Implement loading, empty, and error states

### § Responsive Standards

#### Breakpoints (Mobile-First)
| Breakpoint | Width | Target |
|------------|-------|--------|
| Base | < 640px | Mobile portrait |
| `sm` | ≥ 640px | Mobile landscape |
| `md` | ≥ 768px | Tablet |
| `lg` | ≥ 1024px | Desktop |
| `xl` | ≥ 1280px | Large desktop |

#### Verification Checklist
- [ ] Test at 320px (minimum mobile)
- [ ] Test at 768px (tablet breakpoint)
- [ ] Test at 1024px (desktop breakpoint)
- [ ] Touch targets ≥ 44px on mobile

### § Interaction States

Every interactive element MUST have:
| State | Required | Example |
|-------|----------|---------|
| Default | ✅ | Base appearance |
| Hover | ✅ | `:hover` style |
| Active | ✅ | `:active` / pressed |
| Focus | ✅ | `:focus-visible` ring |
| Disabled | If applicable | Grayed, no pointer |
| Loading | If applicable | Spinner/skeleton |

### § A11y Standards
- [ ] All images have `alt` text
- [ ] Form inputs have labels
- [ ] Color contrast ≥ 4.5:1 (WCAG AA)
- [ ] Focus order is logical
- [ ] Interactive elements keyboard-accessible

### § Documentation

#### Component Documentation Template
```markdown
## ComponentName

### Usage
\`\`\`tsx
<ComponentName prop="value" />
\`\`\`

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| prop | string | - | What it does |

### States
- Default, Hover, Active, Disabled

### Accessibility
- Keyboard: Tab to focus, Enter to activate
- Screen reader: Announces [what]
```

---

## Definition of Done
- [ ] Component matches spec in `SPECS.md`
- [ ] Responsive at all breakpoints
- [ ] All interaction states implemented
- [ ] No duplicate components created
- [ ] `npm run build` passes
