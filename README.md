# ðŸš€ RAPS Framework v2.1

> **R**esearch â€¢ **A**rchitect â€¢ **P**rogramming â€¢ **S**tyling

A structured methodology for AI-assisted software development with clear handoffs, audit trails, and quality gates.

---

## ðŸ“– Table of Contents

- [Overview](#-overview)
- [Quick Start](#-quick-start)
- [The Ten Personas](#-the-ten-personas)
- [Utility Workflows](#-utility-workflows)
- [Visual Dashboard](#-visual-dashboard)
- [Core Artifacts](#-core-artifacts)
- [Feature Reference](#-feature-reference)
- [Workflow Commands](#-workflow-commands)
- [Best Practices](#-best-practices)

---

## ðŸŽ¯ Overview

RAPS is a **persona-based development framework** where each AI agent has a specific role, **powered by a dedicated Skill Toolkit**, lane restrictions, and explicit handoff protocols. This ensures:

| Benefit | How |
|---------|-----|
| **Traceability** | Every action logged to `SESSION_LOG.md` |
| **Clear Handoffs** | Explicit "next agent" recommendations |
| **Quality Gates** | Checklists before any handoff |
| **Context Preservation** | Notes passed via `HANDOFF_NOTES.md` |
| **Conflict Resolution** | Priority order when multiple agents active |

### The Complete RAPS Development Flow

```
                              â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
                              â”‚                        RAPS DEVELOPMENT FLOW                        â”‚
                              â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜

  â•”â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•—
  â•‘                                        PLANNING PHASE                                              â•‘
  â•šâ•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  
       /initialize          /research              /analyst              /architect
    â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”          â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”       â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”        â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
    â”‚ ðŸ—ï¸ Setup â”‚â”€â”€â”€â”€â”€â”€â”€â”€â–¶â”‚ ðŸ” Research  â”‚â”€â”€â”€â”€â”€â”€â–¶â”‚ ðŸ“‹ Stories  â”‚â”€â”€â”€â”€â”€â”€â”€â–¶â”‚ ðŸ“ Specs    â”‚
    â”‚ PLAN.md â”‚          â”‚ APIs, Tech  â”‚       â”‚ User Flows  â”‚        â”‚ Tech Design â”‚
    â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜          â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜       â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜        â””â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”˜
                                                                              â”‚
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•§â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  
  â•”â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•—
  â•‘                                        BUILDING PHASE                                              â•‘
  â•šâ•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  
                                    â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
                           â”Œâ”€â”€â”€â”€â”€â”€â”€â–¶â”‚ ðŸ’» /build   â”‚â”€â”€â”€â”€â”€â”€â”€â”
                           â”‚        â”‚ Backend API â”‚       â”‚
           â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤        â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜       â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â–¶
                           â”‚        â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”       â”‚
                           â””â”€â”€â”€â”€â”€â”€â”€â–¶â”‚ ðŸŽ¨ /design  â”‚â”€â”€â”€â”€â”€â”€â”€â”˜
                                    â”‚ Frontend UI â”‚
                                    â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                                    
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  
  â•”â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•—
  â•‘                                        QUALITY PHASE                                               â•‘
  â•šâ•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  
       /review               /test                /security              /ux
    â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”      â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”      â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”      â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
    â”‚ ðŸ‘€ Code     â”‚â”€â”€â”€â”€â”€â–¶â”‚ ðŸ§ª QA +     â”‚â”€â”€â”€â”€â”€â–¶â”‚ ðŸ”’ Vuln     â”‚â”€â”€â”€â”€â”€â–¶â”‚ ðŸŽ­ User     â”‚
    â”‚ Review      â”‚      â”‚ Performance â”‚      â”‚ Scanning    â”‚      â”‚ Acceptance  â”‚
    â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜      â””â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”˜      â””â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”˜      â””â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”˜
                                â”‚                    â”‚                    â”‚
                                â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                                â”‚  â”‚
                                â–¼  â–¼
                         â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
                         â”‚   ISSUE FOUND?      â”‚
                         â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                                    â”‚
                    â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
                    â”‚               â”‚               â”‚
                    â–¼               â–¼               â–¼
             ðŸ”´ CRITICAL      ðŸŸ¡ MEDIUM        ðŸŸ¢ LOW
             â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”    â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”   â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
             â”‚ FIX NOW â”‚    â”‚ Document as â”‚   â”‚ Add to v1.1 â”‚
             â”‚(loop)   â”‚    â”‚ known issue â”‚   â”‚ backlog     â”‚
             â””â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”˜    â””â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”˜   â””â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”˜
                  â”‚                â”‚                 â”‚
                  â–¼                â””â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”˜
            Back to                         â”‚
            /build or                       â–¼
            /design                    PROCEED
                    
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  
  â•”â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•—
  â•‘                                     ðŸš¦ RELEASE GATES                                               â•‘
  â•šâ•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  
    Run `/release` before deployment:
    
    â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
    â”‚ Gate 1       â”‚ Gate 2       â”‚ Gate 3       â”‚ Gate 4       â”‚ Gate 5       â”‚ Gate 6       â”‚
    â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
    â”‚ âœ… Feature   â”‚ âœ… Code      â”‚ âœ… Test      â”‚ âœ… Security  â”‚ âœ… UAT       â”‚ âœ… Go-Live   â”‚
    â”‚ Complete     â”‚ Complete     â”‚ Complete     â”‚ Cleared      â”‚ Approved     â”‚              â”‚
    â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
    â”‚ /architect   â”‚ /build       â”‚ /test        â”‚ /security    â”‚ /ux          â”‚ /deploy      â”‚
    â””â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”˜
           â”‚              â”‚              â”‚              â”‚              â”‚              â”‚
           â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                                                  â”‚
                                                  â–¼
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  
  â•”â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•—
  â•‘                                        RELEASE PHASE                                               â•‘
  â•šâ•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  
                                          /deploy
                                       â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
                                       â”‚ ðŸš€ Deploy   â”‚â”€â”€â”€â”€â”€â”€â”€â”€â–¶  âœ… DONE!
                                       â”‚ Production  â”‚           v1.0 SHIPPED
                                       â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

---

## âš¡ Quick Start

### 1. Initialize a New Project
```
/initialize
```
This scaffolds folders, creates `PLAN.md`, and sets up tracking files.

### 2. Check Project Status Anytime
```
/status
```
Shows current active agent, task, blockers, and next recommended action.

### 3. Follow the Flow
After `/initialize`, the workflow will guide you:
- `/research` â†’ gather data
- `/analyst` â†’ define requirements
- `/architect` â†’ write specs
- `/build` â†’ implement backend
- `/design` â†’ implement UI
- `/test` â†’ verify technical QA
- `/ux` â†’ validate usability

### 4. View the Dashboard
Open in your browser:
```
C:\Users\gerry\.gemini\antigravity\global_workflows\templates\dashboard.html
```
Or copy to your project and customize!

### 5. Understand the Agile Workflow
RAPS uses an **Agile-first** approach with Epics, Stories, and Sprints:
- **Epics** = Large feature sets (1-3 Sprints)
- **Stories** = User-value units (1-3 days), must pass INVEST criteria
- **Tasks** = Technical steps (<1 day)

See the [Agile Toolkit](../skills/agile_toolkit/SKILL.md) for sizing, velocity tracking, and quality gates.

---

## ðŸ‘¥ The Ten Personas

### ðŸ—ï¸ /initialize - The Founder
**Mission:** Initialize project structure (powered by **Project Scaffolding Skill**)

| Aspect | Details |
|--------|---------|
| **Command** | `/initialize` |
| **Lane** | Creates all folders, `PLAN.md` |
| **Outputs** | Folder structure, `PLAN.md`, `SESSION_LOG.md`, `HANDOFF_NOTES.md` |
| **Hands off to** | `/research` or `/architect` |

**When to use:**
- Starting a new project
- Resetting a project from scratch

---

### ðŸ” /research - The Data Strategist
**Mission:** Gather market intelligence and technical feasibility data

| Aspect | Details |
|--------|---------|
| **Command** | `/research` |
| **Lane** | Owner of `/research` folder |
| **Outputs** | Research files (`COMPETITORS.md`, `TECH_FEASIBILITY.md`) |
| **Hands off to** | `/architect` |

**When to use:**
- Competitor analysis needed
- API/library documentation research
- Unclear technical requirements

**Prohibitions:**
- âŒ No code writing
- âŒ No spec writing (provide data only)

---

### ðŸ“‹ /analyst - The Requirements Specialist
**Mission:** Translate business requirements into structured stories (powered by **Analyst Toolkit Skill**)

| Aspect | Details |
|--------|--------|
| **Command** | `/analyst` |
| **Lane** | Owner of `/docs/requirements/` |
| **Outputs** | `REQUIREMENTS.md`, user stories, acceptance criteria |
| **Hands off to** | `/architect` |

**When to use:**
- Complex requirements need clarification
- User stories and acceptance criteria needed
- Gap analysis between research and specs

**Key Outputs:**
- Functional & non-functional requirements
- User stories with acceptance criteria
- Out of scope documentation
- Open questions list

**Prohibitions:**
- âŒ No technical specs (that's architect)
- âŒ No code
- âŒ No assumptions without documenting

---

### ðŸ“ /architect - The System Designer
**Mission:** Convert requirements into executable specifications (powered by **Architecture Toolkit Skill**)

| Aspect | Details |
|--------|---------|
| **Command** | `/architect` |
| **Lane** | Owner of `/docs` and `PLAN.md` |
| **Outputs** | `/docs/SPECS.md` with logic, schemas, edge cases |
| **Hands off to** | `/build` or `/design` |

**When to use:**
- Need technical specifications
- Promoting tasks from backlog
- Clarifying requirements

**Special Feature - AI-Generated Specs:**
```
/architect --auto
```
Generates a draft spec from `/research` files. Human review required!

**Prohibitions:**
- âŒ No production code
- âŒ No visual design decisions

---

### âš™ï¸ /build - The Lead Developer
**Mission:** Implement backend logic and APIs

| Aspect | Details |
|--------|---------|
| **Command** | `/build` |
| **Lane** | Owner of `/backend`, `/api`, `/lib` |
| **Outputs** | Backend code, API endpoints |
| **Hands off to** | `/review` (suggested) or `/test` or `/design` |

**When to use:**
- Implementing server-side logic
- Creating API endpoints
- Writing utility functions

**Prohibitions:**
- âŒ No CSS/UI work
- âŒ No spec changes (escalate to `/architect`)

---

### ðŸŽ¨ /design - The Design Lead
**Mission:** Implement visual layer and user interaction

| Aspect | Details |
|--------|---------|
| **Command** | `/design` |
| **Lane** | Owner of `/frontend`, `/components`, `/style` |
| **Outputs** | UI components, styling, frontend code |
| **Hands off to** | `/test` |

**When to use:**
- Building UI components
- Styling and CSS work
- Frontend functionality

**Tip:** If backend isn't ready, use mock data and continue!

**Prohibitions:**
- âŒ No backend logic modifications

---

### ðŸ§ª /test - The QA Engineer
**Mission:** Verify implementations match specifications (powered by **QA Toolkit Skill**)

| Aspect | Details |
|--------|---------|
| **Command** | `/test` |
| **Lane** | Owner of `/tests` |
| **Outputs** | Test reports, coverage reports |
| **Hands off to** | âœ… Done (pass) or `/build`/`/design` (fail) |

**When to use:**
- Task marked `[READY FOR TEST]`
- Final verification before closing

**Special Features:**
- **Auto-Archive:** Passed tasks move to Completed Archive
- **Test Coverage Report:** Documents what was tested vs. specs

**Prohibitions:**
- âŒ No code fixes (identify bugs; others fix them)
- âŒ No spec changes

---

### ðŸŽ­ /ux - The User Advocate
**Mission:** Validate usability and user experience (powered by **UX Toolkit Skill**)

| Aspect | Details |
|--------|---------|
| **Command** | `/ux` |
| **Lane** | Read-only, writes to `/docs/ux_feedback/` |
| **Outputs** | UAT reports, usability findings, accessibility audits |
| **Hands off to** | âœ… Done (pass) or `/analyst`/`/design` (issues found) |

**When to use:**
- After `/test` passes technical QA
- Need to validate real-world usability
- User acceptance testing required

**What it tests:**
- Can users complete their tasks intuitively?
- Are buttons/flows working as expected?
- Is the UI accessible and clear?
- Does it match user stories from requirements?

**Prohibitions:**
- âŒ No code fixes (identify UX issues; `/design` or `/build` fixes them)
- âŒ No design decisions that change scope

**Issue Severity Guide:**

| Severity | Definition | Example | Action |
|----------|------------|---------|--------|
| ðŸ”´ **CRITICAL** | User CANNOT complete core task | Submit button doesn't work, Login fails, Data loss | **Fix before release** |
| ðŸŸ¡ **MEDIUM** | User CAN complete but with friction | No loading indicator, Unclear error, Double-click issues | Ship with known issues |
| ðŸŸ¢ **LOW** | Nice-to-have, cosmetic | Button styling off, Missing tooltip, No keyboard shortcut | Backlog for v1.1 |

**The Critical Test:** If there's NO alternative path to complete a MUST-HAVE feature, it's critical.

---

### ðŸ”’ /security - The Security Auditor
**Mission:** Identify security vulnerabilities (powered by **Security Toolkit Skill**)

| Aspect | Details |
|--------|---------|
| **Command** | `/security` |
| **Lane** | Read-only, writes to `/docs/security/` |
| **Outputs** | Security audit reports, vulnerability findings |
| **Hands off to** | `/deploy` (pass) or `/build` (issues found) |

**When to use:**
- After `/test` passes technical QA
- Before any production deployment
- When handling sensitive data (auth, payments, PII)

**What it checks:**
- OWASP Top 10 vulnerabilities
- Dependency vulnerabilities (npm audit)
- Hardcoded secrets
- Authentication/authorization flaws
- SQL injection, XSS, CSRF

**Prohibitions:**
- âŒ No code fixes (identify vulnerabilities; `/build` fixes them)
- âŒ No deployment approval if critical issues found

---

### ðŸš€ /deploy - The DevOps Engineer
**Mission:** Manage deployments, infrastructure, and monitoring

| Aspect | Details |
|--------|---------|
| **Command** | `/deploy` |
| **Lane** | Owner of `/infrastructure`, `/docker`, `.github/workflows` |
| **Outputs** | Deployment runbooks, monitoring dashboards |
| **Hands off to** | âœ… Done (success) or `/build` (failure) |

**When to use:**
- After `/test`, `/security`, and `/ux` all pass
- Deploying to staging or production
- Setting up monitoring and alerts

**Responsibilities:**
- Deploy to staging/production
- Configure CI/CD pipelines
- Set up monitoring and alerting
- Handle rollbacks if issues occur
- Document deployment procedures

**Prohibitions:**
- âŒ No deployment of untested code
- âŒ No deployment with critical security vulnerabilities
- âŒ No direct production pushes (staging first)

---

## ðŸ› ï¸ Utility Workflows

### ðŸ“Š /status - Quick Check
**Get an instant project snapshot without modifying anything.**

```
/status
```

**Output includes:**
- Current active agent
- Task in progress
- **Governance Check:** `PLAN.md` & `CHARTER.md` freshness
- Any blockers
- Recent activity (last 3 entries)
- Next recommended action

**Use anytime** to understand project state at a glance.

---

### ðŸ¥ /health - Project Validator
**Validate project health and catch issues early.**

```
/health
```

**Checks performed:**
| Category | What's Checked |
|----------|----------------|
| Structure | All RAPS folders exist |
| PLAN.md | Tables valid, no duplicates |
| Consistency | Active agents have specs |
| Staleness | No old in-progress tasks |
| Logs | SESSION_LOG synced with PLAN.md |
| Blockers | All blockers documented |

**Severity Levels:**
- âœ… **Healthy** - All good
- âš ï¸ **Needs Attention** - Minor issues
- âŒ **Critical** - Stop and fix

**Run regularly**, especially after making changes!

---

### ðŸ“ /retro - Retrospective
**Capture lessons learned after milestones.**

```
/retro
```

**Creates documentation of:**
- Summary metrics
- **Governance Audit:** `CHARTER.md` (Scope) & `PLAN.md` (Decisions)
- What went well (wins)
- What could be improved
- Action items for next time
- Lessons learned

**When to use:**
- Project completed
- Major feature shipped
- Sprint/phase end
- After resolving major blockers

**Output:** `/docs/RETROSPECTIVE.md`

---

### ðŸš¦ /release - Release Gates
**Determine when a version is ready for go-live.**

```
/release
```

> ðŸŽ¯ Prevents endless iteration by defining **clear ship criteria**.

**The 6 Gates:**
| Gate | Owner | Key Question |
|------|-------|--------------|
| Feature Complete | `/architect` | All MUST-HAVEs implemented? |
| Code Complete | `/build` | No build errors, dependencies locked? |
| Test Complete | `/test` | No Critical/High bugs? |
| Security Cleared | `/security` | No critical vulnerabilities? |
| UAT Approved | `/ux` | Users accept (with known issues)? |
| Go-Live | `/deploy` | Deployment ready and safe? |

**Issue Handling:**
| Severity | Action |
|----------|--------|
| **Critical/High** | Must fix before release |
| **Medium/Low** | Document, ship, fix in next version |

**The Golden Rule:**
> Perfect is the enemy of good. Ship when MUST-HAVEs work and no critical bugs exist. Everything else is v1.1.

### ðŸ‘€ /review - Code Review (Suggested)
**Quality check between build and test.**

```
/review
```

> âš¡ This is a **suggested step**, not required for every change.

**Review Checklist:**
| Category | Checks |
|----------|--------|
| Security | No secrets, input validation, auth |
| Code Quality | Docstrings, naming, DRY |
| Error Handling | Try/catch, descriptive messages |
| Architecture | Follows patterns, matches specs |
| Testability | Injectable dependencies |

**Outcomes:**
- âœ… **Approved** â†’ Proceed to `/test`
- ðŸ”„ **Changes Requested** â†’ Back to `/build`

**When to use /review:**
- Complex new features
- Security-sensitive code (auth, payments)
- New patterns being introduced
- Critical production code

**When to skip:**
- Simple bug fixes
- Hotfixes/emergencies
- Trivial changes

---

## ðŸ“º Visual Dashboard

A beautiful glassmorphism dashboard to visualize your project state!

### How to Access

**Option 1: Direct Open**
```
file:///C:/Users/gerry/.gemini/antigravity/global_workflows/templates/dashboard.html
```
Open this path in any browser.

**Option 2: Copy to Project**
```powershell
# Copy to your project root
copy "C:\Users\gerry\.gemini\antigravity\global_workflows\templates\dashboard.html" ".\dashboard.html"

# Open in browser
start dashboard.html
```

**Option 3: VS Code**
1. Open `dashboard.html` in VS Code
2. Right-click â†’ "Open with Live Server" (if extension installed)
3. Or just open the file path in browser

### Dashboard Features

| Section | What It Shows |
|---------|---------------|
| **Current Focus** | Active task and agent |
| **Project Health** | Quick health indicator |
| **Squad Status** | All 6 personas with status badges |
| **Task Board** | Kanban-style view (Backlog â†’ In Progress â†’ Review â†’ Done) |
| **Recent Activity** | Last 4 session log entries |
| **Quick Actions** | Buttons for `/status`, `/health`, `/retro` |

### Customizing the Dashboard

The dashboard is a static template. To reflect your actual project:

1. Open `dashboard.html` in your editor
2. Update the Squad Status badges
3. Update the Kanban items
4. Update the Activity list

**Future enhancement:** A script could auto-parse `PLAN.md` and `SESSION_LOG.md`!

---

## ðŸ“ Core Artifacts

### PLAN.md - The Master Ledger
**The single source of truth for project state.**

```markdown
# ðŸ—ºï¸ MASTER LEDGER: [Project Name]

## 1. Project Overview
## 2. Squad Status (table with all agents)
## 3. Current Trajectory (active milestone)
## 4. Unified Task Backlog
## 5. Artifact Registry
## 6. Completed Archive
```

---

### CHARTER.md - Project Charter
**Scope, Vision, and Governance.**

- **Executive Summary** & Business Case
- **Scope Boundary** (In/Out)
- **Living Risk Register**
- **Change Control Log**

---

### /docs/decisions/ - Decision Log (ADRs)
**Architectural Decision Records.**

- Why we chose X over Y
- Alternatives considered
- Consequences of the decision

---

### SESSION_LOG.md - Audit Trail
**Every action logged with timestamp.**

```markdown
| Timestamp | Persona | Action | Status | Files | Notes |
|-----------|---------|--------|--------|-------|-------|
| 2026-01-14 15:30 | /build | Started auth API | ðŸ› ï¸ ACTIVE | - | - |
| 2026-01-14 16:00 | /build | Completed auth API | âœ… DONE | /backend/auth.ts | Ready for test |
```

---

### HANDOFF_NOTES.md - Context Preservation
**Notes passed between personas.**

```markdown
## /research â†’ /architect
Key findings...

## /architect â†’ /build
Spec summary, important edge cases...

## /build â†’ /test
What was built, how to test...
```

---

### /docs/SPECS.md - Specifications
**Detailed technical specs from `/architect`.**

Includes: Logic flow, data schema, edge cases, API contracts.

---

### /tests/COVERAGE_*.md - Test Coverage
**What was tested vs. what's in specs.**

Generated by `/test` on pass.

---

## ðŸ“‹ Feature Reference

### Status Emojis
| Emoji | Status | Meaning |
|-------|--------|---------|
| ðŸ’¤ | IDLE | No current assignment |
| ðŸ› ï¸ | ACTIVE | Currently working |
| â³ | WAITING | Blocked on another |
| âœ… | DONE | Completed |
| âŒ | FAILED | Task failed |
| ðŸš¨ | BLOCKED | Needs human input |
| ðŸ”„ | CHANGES | Review requested changes |

### Priority Order
When multiple agents are active:
1. `/test` â€” Highest priority (unblock QA)
2. `/build` â€” Code blocks design
3. `/design` â€” UI blocks testing
4. `/architect` â€” Specs block build/design
5. `/analyst` â€” Requirements block specs
6. `/research` â€” Data blocks requirements
7. `/initialize` â€” Only at project start

### Task Tags
| Tag | Meaning |
|-----|--------|
| `[RESEARCH]` | Assigned to /research |
| `[ANALYST]` | Assigned to /analyst |
| `[ARCHITECT]` | Assigned to /architect |
| `[BUILD]` | Assigned to /build |
| `[DESIGN]` | Assigned to /design |
| `[READY FOR TEST]` | Ready for /test |
| `[READY FOR REVIEW]` | Optional /review step |
| `[COMPLETED]` | Task done and archived |
| `[BLOCKED: reason]` | Cannot proceed |
| `[REJECTED: bug]` | Failed QA, needs fix |

---

## ðŸŽ® Workflow Commands

### Starting a Project
```
/initialize
```

### Checking State
```
/status          # Quick snapshot
/health          # Full validation
```

### Main Workflows
```
/research        # Gather data
/analyst         # Define requirements
/architect       # Write specs
/architect --auto # AI-generated draft spec
/build           # Backend code
/design          # Frontend/UI
/review          # Code review (optional)
/test            # QA verification
```

### After Milestones
```
/retro           # Capture lessons
```

---

## âœ¨ Best Practices

### 1. Always Check Status First
```
/status
```
Know where you are before taking action.

### 2. Run Health Regularly
```
/health
```
Catch issues before they grow.

### 3. Use Entry Checklists
Every workflow has an entry checklist. Complete it before starting.

### 4. Log Everything
`SESSION_LOG.md` is your audit trail. Don't skip logging.

### 5. Leave Context in Handoff Notes
The next persona shouldn't need to ask questions. Document decisions.

### 6. Use /review for Critical Code
Security, payments, auth â€” always review before test.

### 7. Run Retrospectives
After each milestone, capture what you learned with `/retro`.

### 8. Keep PLAN.md Clean
Use auto-archive. Move completed tasks out of the backlog.

---

## ðŸŽ‰ You're Ready!

Start with `/initialize` for new projects, or `/status` to check an existing one.

Happy coding! ðŸš€

---

*RAPS Framework v2.1 - Enhanced with Skills, Governance, and Lifecycle Management*
