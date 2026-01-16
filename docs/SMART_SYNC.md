# RAPS Smart Sync

## Overview
Smart Sync is an automated synchronization feature within the **Update RAPS** skill. It intelligently detects the most recently modified environment (Antigravity Brain vs. Local OneDrive Repo) and synchronizes changes in the correct direction.

## How It Works
The system follows a "Last Write Wins" timestamp-based logic:
1.  **Remote Check**: Checks if the local repository is behind the remote GitHub `main` branch. If so, it prioritizes a **Pull**.
2.  **Timestamp Analysis**: Scans all monitored directories (`docs`, `skills`, `workflows`) in both locations for the latest `LastWriteTime`.
3.  **Auto-Execution**:
    - If **Brain is newer**: Automatically pushes Brain changes -> Local Repo -> GitHub.
    - If **Repo is newer**: Automatically pushes Local Repo changes -> GitHub -> Antigravity Brain.

## Usage
### Interactive Mode
Run the update script without arguments and select **Option 0**:
```powershell
./scripts/update_raps.ps1
# Select [0] Smart Sync (Auto-Detect)
```

### Automated Mode
Run the script with the `auto` argument to bypass the menu:
```powershell
./scripts/update_raps.ps1 auto
```

## Conflict Resolution
> [!NOTE]
> Smart Sync operates at the **bulk level** based on the *latest single file change* in a directory tree. It assumes you are working in one environment at a time. If you have modified files in BOTH locations simultaneously, the location with the *most recent* save will overwrite the other. Use manual modes (1 or 2) if you need specific directional control.
