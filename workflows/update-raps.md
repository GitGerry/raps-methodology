---
description: Synchronize RAPS methodology between Brain, Repo, and GitHub
---

# /update-raps - RAPS Synchronization

## Context
This workflow synchronizes your local Antigravity environment (Brain) with the master RAPS methodology repository and GitHub.

## Usage
- **Auto (Smart Sync)**: `// turbo` enabled for one-click synchronization.
  - Now includes a **visual timestamp graph** comparing Brain vs. Repo.
  - Displays a **detailed summary** of all synced files.
- **Interactive**: Run the script manually if you need to choose a specific sync direction.

## Workflow

1. **Execute Synchronization**
   - Run the updated PowerShell script.
   
```powershell
// turbo
powershell -File "c:\Users\gerry\.gemini\antigravity\scripts\update_raps.ps1" auto
```

> [!TIP]
> To run interactively (select mode 1, 2, or 3), simply run the command without 'auto' in your terminal.
