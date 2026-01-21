# Deployment Runbook: [Project Name]

> Standard operating procedure for deploying to staging and production environments.

---

## 1. Environment Matrix

| Environment | URL | Branch | Deploy Method |
|-------------|-----|--------|---------------|
| Development | localhost:3000 | `develop` | Local |
| Staging | staging.example.com | `staging` | CI/CD |
| Production | app.example.com | `main` | CI/CD |

---

## 2. Pre-Deployment Checklist

### Gate Verification
- [ ] `/test` is `✅ DONE` — All tests passing
- [ ] `/security` is `✅ DONE` — No critical vulnerabilities  
- [ ] `/ux` is `✅ DONE` (if applicable) — UAT approved
- [ ] Code review approved (if `/review` was run)

### Environment Preparation
- [ ] Environment variables configured
- [ ] Database migrations tested on staging
- [ ] Feature flags configured
- [ ] Third-party services accessible

---

## 3. Deployment Commands

### Frontend (Vercel/Netlify)
```bash
# Build
npm run build

# Deploy to staging
vercel --target staging

# Deploy to production (after staging verification)
vercel --prod
```

### Backend (Supabase)
```bash
# Apply migrations
supabase db push

# Deploy edge functions
supabase functions deploy [function-name]
```

### Docker/Kubernetes
```bash
# Build and tag
docker build -t [app-name]:v[X.X.X] .

# Push to registry
docker push [registry]/[app-name]:v[X.X.X]

# Deploy
kubectl apply -f k8s/deployment.yaml
```

---

## 4. Post-Deployment Verification

### Smoke Tests
- [ ] Application loads without errors
- [ ] Authentication works
- [ ] Core user flows functional
- [ ] API endpoints responding
- [ ] Database connections healthy

### Monitoring Activation
- [ ] Error tracking active (Sentry/LogRocket)
- [ ] Performance monitoring enabled
- [ ] Alerts configured for critical errors
- [ ] Health check endpoints responding

---

## 5. Rollback Procedure

### Immediate Rollback (< 5 min)
```bash
# Vercel
vercel rollback

# Kubernetes
kubectl rollout undo deployment/[app-name]

# Docker Compose
docker-compose down && docker-compose -f docker-compose.previous.yml up -d
```

### Rollback Decision Matrix
| Symptom | Severity | Action |
|---------|----------|--------|
| App won't start | 🔴 Critical | Immediate rollback |
| Data corruption | 🔴 Critical | Rollback + DB restore |
| Performance degraded | 🟡 High | Monitor, prepare rollback |
| Minor UI bug | 🟢 Low | Hotfix forward |

---

## 6. Communication Template

### Deployment Announcement
```
🚀 DEPLOYMENT: [Project v X.X.X]
Environment: [Staging/Production]
Time: [TIMESTAMP]
Changes: [Brief summary]
Status: ✅ Successful / ❌ Rolled back
```

### Incident Notification
```
🚨 INCIDENT: [Project] Deployment Issue
Severity: [Critical/High/Medium]
Impact: [User impact description]
Status: [Investigating/Mitigating/Resolved]
ETA: [Estimated resolution time]
```

---

## 7. Monitoring URLs

| Service | URL | Purpose |
|---------|-----|---------|
| Error Tracking | [Sentry URL] | Exception monitoring |
| APM | [Datadog/New Relic URL] | Performance |
| Logs | [CloudWatch/Papertrail] | Application logs |
| Health | [/api/health] | Uptime monitoring |

---

*Last Updated: YYYY-MM-DD*
*Owner: /deploy*
