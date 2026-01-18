---
description: Utility workflow to organize and move replay files.
---

# 📂 /move-replays

## Context
Use this workflow to organize downloaded replay files into a structured directory for analysis or archiving.

## Usage
```
/move-replays
```

## Steps
1.  **Identify Source:** Scan default download folders or specified source paths.
2.  **Filter:** Select files matching replay extensions (e.g., `.rec`, `.rep`).
3.  **Move:** Transfer files to the target replay directory (e.g., `replays/`).
4.  **Log:** Record the operation in `SESSION_LOG.md`.

## Automation
This workflow is typically automated by the `move-replays` script if configured.
