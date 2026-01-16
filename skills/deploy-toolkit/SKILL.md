---
name: Deploy Toolkit
description: Deployment runbooks, environment configuration, rollback procedures
---

# Deploy Toolkit

## Purpose
Provide standardized deployment checklists, environment configuration templates, and rollback procedures for consistent, safe deployments.

## When to Use
- Deploying to any environment (staging/production)
- Setting up new environments
- Documenting deployment procedures
- Creating rollback plans

---

## Tool Interface

### Inputs
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `action` | enum | ✅ | `"pre_deploy"` \| `"deploy"` \| `"post_deploy"` \| `"rollback"` |
| `environment` | enum | ❌ | `"staging"` \| `"production"` |
| `version` | string | ❌ | Semantic version being deployed |

### Outputs
- **Type:** Markdown checklist
- **Structure:** Environment-specific deployment guide

---

## 1. Pre-Deployment Checklist

```markdown
## 📋 Pre-Deployment Checklist

**Version:** [X.X.X]
**Environment:** [staging/production]
**Date:** [TIMESTAMP]
**Deployer:** /deploy

### Gate Checks
- [ ] `/test` status is ✅ DONE
- [ ] `/security` status is ✅ DONE
- [ ] `/ux` UAT approved (if applicable)
- [ ] CI/CD pipeline passes
- [ ] Code review approved

### Environment Ready
- [ ] Environment variables configured
- [ ] Database migrations ready
- [ ] Dependencies updated
- [ ] Feature flags configured

### Rollback Ready
- [ ] Previous version tagged
- [ ] Rollback procedure documented
- [ ] Database backup completed (if applicable)
```

---

## 2. Environment Configuration Template

```markdown
## Environment: [Name]

### URLs
| Service | URL |
|---------|-----|
| Application | [URL] |
| API | [URL] |
| Database | [Connection string - DO NOT COMMIT] |

### Environment Variables
| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | Postgres connection | ✅ |
| `SUPABASE_URL` | Supabase project URL | ✅ |
| `SUPABASE_ANON_KEY` | Supabase anon key | ✅ |
| `NEXT_PUBLIC_API_URL` | Public API URL | ✅ |

### Deployment Commands
```bash
# Build
npm run build

# Deploy Frontend
vercel --prod

# Deploy Database
supabase db push

# Deploy Edge Functions
supabase functions deploy [name]
```
```

---

## 3. Deployment Runbook Template

```markdown
# Deployment Runbook: [App Name]

**Last Updated:** [DATE]
**Owner:** /deploy

---

## Quick Deploy

### Staging
```bash
git checkout develop
npm run build && vercel
```

### Production
```bash
git checkout main
npm run build && vercel --prod
```

---

## Detailed Steps

### 1. Pre-Deploy
- [ ] Run pre-deploy checklist
- [ ] Notify team of deployment window

### 2. Database Migrations
- [ ] Backup current data (if destructive migration)
- [ ] Run: `supabase db push`
- [ ] Verify migrations applied

### 3. Application Deploy
- [ ] Run: `npm run build`
- [ ] Run: `vercel --prod`
- [ ] Capture deployment URL

### 4. Post-Deploy Verification
- [ ] Run smoke tests
- [ ] Check error monitoring
- [ ] Verify key user flows

### 5. Notification
- [ ] Update SESSION_LOG.md
- [ ] Notify stakeholders
```

---

## 4. Rollback Procedure

```markdown
## 🚨 Rollback Procedure

**Trigger:** [What went wrong]
**Target Version:** [Previous stable version]

### Immediate Actions (< 5 minutes)

1. **Revert Application**
   ```bash
   # Vercel - instant rollback
   vercel rollback [deployment-url]
   
   # OR manual
   git checkout v[X.X.X]
   npm run build && vercel --prod
   ```

2. **Revert Database (if needed)**
   ```bash
   # Apply down migration
   supabase db reset --to [migration-version]
   ```

3. **Notify Team**
   - Update SESSION_LOG.md with rollback reason
   - Create bug ticket in PLAN.md

### Post-Rollback

- [ ] Verify stable version is live
- [ ] Notify stakeholders
- [ ] Investigate root cause
- [ ] Document in retrospective
```

---

## 5. Smoke Test Checklist

```markdown
## ✅ Smoke Tests

**Environment:** [staging/production]
**Version:** [X.X.X]

### Critical Paths
- [ ] Application loads without errors
- [ ] Login/authentication works
- [ ] Primary user flow completes
- [ ] API endpoints respond (200 OK)
- [ ] Database queries return data

### Performance
- [ ] Page load < 3 seconds
- [ ] API response < 500ms
- [ ] No console errors

### Monitoring
- [ ] Error tracking receiving events
- [ ] Performance metrics updating
- [ ] Alerts configured
```

---

## How to Verify

- [ ] Pre-deploy checklist completed
- [ ] Deployment commands documented for all environments
- [ ] Rollback procedure tested at least once
- [ ] Smoke tests pass in target environment
