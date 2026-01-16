---
name: Update RAPS
description: Synchronizes the local Antigravity environment with the master `raps-methodology` repository.
---

# Update RAPS Skill

This skill automates the process of pulling the latest RAPS methodology, workflows, skills, and dashboard components from your local git repository and deploying them to your active Antigravity environment.

## Usage

This skill performs the following actions:
1.  **Git Pull**: Updates the `raps-methodology` repository from its remote origin.
2.  **Deploy Workflows**: Copies files from `workflows/` to `Antigravity/global_workflows`.
3.  **Deploy Skills**: Copies files from `skills/` to `Antigravity/skills`. **NOTE**: This overwrites existing skills.


### Instructions

1.  Run the update script:
    ```powershell
    ./scripts/update_raps.ps1
    ```

2.  Review the output to ensure the git pull was successful and files were copied.

### Requirements

- `git` must be installed and available in your PATH.
- The `raps-methodology` folder must be a valid git repository (or the script will just skip the pull and copy local files).
