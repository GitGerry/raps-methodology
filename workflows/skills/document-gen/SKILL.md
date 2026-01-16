---
name: Document Generation
description: Auto-generate documentation from code and specifications
---

# Document Generation Skill

## Purpose
Automatically generate user-facing and technical documentation from code, specifications, and RAPS artifacts.

## When to Use
- Feature complete, needs docs
- API documentation needed
- User guide creation
- README updates
- Release notes

---

## Instructions

### 1. Identify Documentation Type

| Type | Purpose | Source |
|------|---------|--------|
| API Docs | Developer reference | Code + SPECS |
| User Guide | End-user instructions | STRY + UCSE |
| README | Project overview | PLAN.md + Code |
| Release Notes | What's new | Git commits + CHNG |
| Architecture | System overview | SPECS |

### 2. Gather Source Material

#### For API Documentation
- Scan `/backend` and `/api` directories
- Extract function signatures
- Read JSDoc/docstrings
- Reference `/docs/SPECS.md`

#### For User Guide
- Read user stories (STRY)
- Read use cases (UCSE)
- Reference wireframes
- Check personas (PRSN)

#### For README
- Read `PLAN.md` overview
- Check `package.json` / `requirements.txt`
- Reference tech stack in `raps.config.json`

### 3. Generate Documentation

---

## Templates

### API Documentation
```markdown
# 📚 API Documentation: [Service Name]

**Version:** [Version]
**Base URL:** `https://api.example.com/v1`
**Last Updated:** [TIMESTAMP]

---

## Authentication

### Bearer Token
```
Authorization: Bearer <token>
```

### API Key
```
X-API-Key: <key>
```

---

## Endpoints

### [Resource Name]

#### GET /[resource]
**Description:** [What it does]

**Request:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Max results (default: 20) |
| `offset` | integer | No | Pagination offset |

**Response:**
```json
{
  "data": [...],
  "pagination": {
    "total": 100,
    "limit": 20,
    "offset": 0
  }
}
```

**Errors:**
| Code | Description |
|------|-------------|
| 401 | Unauthorized |
| 404 | Not found |

---

#### POST /[resource]
**Description:** [What it does]

**Request Body:**
```json
{
  "field1": "string",
  "field2": 123
}
```

**Response:** `201 Created`
```json
{
  "id": "uuid",
  "field1": "string",
  "field2": 123,
  "created_at": "2024-01-01T00:00:00Z"
}
```
```

### User Guide
```markdown
# 📖 User Guide: [Product Name]

**Version:** [Version]
**Last Updated:** [TIMESTAMP]

---

## Getting Started

### Step 1: [First Action]
[Clear instructions with screenshots if available]

### Step 2: [Next Action]
[Continue with steps]

---

## Features

### [Feature Name]

#### What It Does
[Clear explanation]

#### How to Use
1. [Step 1]
2. [Step 2]
3. [Step 3]

#### Tips
- 💡 [Helpful tip]
- ⚠️ [Important warning]

---

## FAQ

### How do I [common question]?
[Answer]

### Why is [issue] happening?
[Explanation and solution]

---

## Troubleshooting

### [Problem 1]
**Symptom:** [What user sees]
**Solution:** [How to fix]

---

## Getting Help
- 📧 Email: support@example.com
- 💬 Chat: [Link]
- 📚 Docs: [Link]
```

### Release Notes
```markdown
# 🚀 Release Notes: v[Version]

**Release Date:** [Date]
**Type:** Major / Minor / Patch

---

## ✨ New Features

### [Feature Name]
[Description of the feature]

**Related:** STRY0000001, FREQ0000001

---

## 🐛 Bug Fixes

- Fixed [issue description] (#[issue number])
- Resolved [issue description] (#[issue number])

---

## ⚡ Improvements

- [Performance improvement]
- [UX improvement]

---

## 🔧 Technical Changes

- Upgraded [dependency] to v[version]
- Refactored [component]

---

## ⚠️ Breaking Changes

> [!WARNING]
> The following changes may affect existing integrations.

- [Breaking change 1]
- [Breaking change 2]

### Migration Guide
1. [Step 1]
2. [Step 2]

---

## 📊 Stats

| Metric | Value |
|--------|-------|
| Commits | X |
| Contributors | X |
| Files Changed | X |
| Lines Added | +X |
| Lines Removed | -X |

---

## 📝 Full Changelog
[Link to compare view]
```

---

## How to Verify
- Documentation complete and accurate
- All public APIs documented
- Examples provided
- Output saved to appropriate location
