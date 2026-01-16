$ErrorActionPreference = "Stop"

# --- CONFIGURATION ---
$antigravityRoot = "C:\Users\gerry\.gemini\antigravity"
$repoPath = "C:\Users\gerry\OneDrive\Desktop\LLM\RAPS\raps-methodology"

# Directories to sync (Source Folder Name -> Destination Folder Name)
# Note: Source is relative to the "From" location, Dest is relative to "To" location
$mapping = @{
    "workflows" = "global_workflows"
    "skills"    = "skills"
    "docs"      = "docs"
    "scripts"   = "scripts"
}
# ---------------------

function Show-Header {
    Clear-Host
    Write-Host "==========================================" -ForegroundColor Cyan
    Write-Host "      RAPS 3-Way Sync Manager" -ForegroundColor Cyan
    Write-Host "==========================================" -ForegroundColor Cyan
    Write-Host "Repo Path: $repoPath" -ForegroundColor Gray
    Write-Host "Brain Path: $antigravityRoot" -ForegroundColor Gray
    Write-Host "------------------------------------------" -ForegroundColor Gray
}

function Sync-Files {
    param (
        [string]$FromRoot,
        [string]$ToRoot,
        [string]$DirectionLabel
    )

    Write-Host "`n[$DirectionLabel] Synchronizing files..." -ForegroundColor Yellow
    $changeCount = 0

    foreach ($key in $mapping.Keys) {
        if ($DirectionLabel -eq "Brain -> Repo") {
            $srcBase = Join-Path $FromRoot $mapping[$key]
            $destBase = Join-Path $ToRoot $key
        }
        else {
            $srcBase = Join-Path $FromRoot $key
            $destBase = Join-Path $ToRoot $mapping[$key]
        }

        if (Test-Path $srcBase) {
            Write-Host "  Scanning $key..." -ForegroundColor DarkGray
            
            # Get all files in source
            $files = Get-ChildItem -Path $srcBase -Recurse -File

            foreach ($file in $files) {
                # Calculate relative path
                # Ensure we handle potential trailing slashes in base path for substring
                $cleanSrcBase = $srcBase.TrimEnd('\')
                $relativePath = $file.FullName.Substring($cleanSrcBase.Length + 1)
                $destFile = Join-Path $destBase $relativePath

                $shouldCopy = $false
                $status = ""

                if (-not (Test-Path $destFile)) {
                    $shouldCopy = $true
                    $status = "[NEW]"
                }
                else {
                    $destItem = Get-Item $destFile
                    # Compare timestamps (Source > Dest)
                    if ($file.LastWriteTime -gt $destItem.LastWriteTime) {
                        $shouldCopy = $true
                        $status = "[UPD]"
                    }
                }

                if ($shouldCopy) {
                    $changeCount++
                    $destDir = Split-Path $destFile
                    if (-not (Test-Path $destDir)) {
                        New-Item -ItemType Directory -Path $destDir -Force | Out-Null
                    }
                    
                    Copy-Item -Path $file.FullName -Destination $destFile -Force
                    Write-Host "    $status $relativePath ($($file.LastWriteTime))" -ForegroundColor Cyan
                }
            }
        }
        else {
            Write-Warning "  Source not found: $srcBase"
        }
    }
    
    if ($changeCount -eq 0) {
        Write-Host "    No file changes detected." -ForegroundColor Gray
    }
    else {
        Write-Host "    Total files synced: $changeCount" -ForegroundColor Green
    }
}

function Run-BrainToRepo {
    # 1. Sync Files Brain -> Repo
    Sync-Files -FromRoot $antigravityRoot -ToRoot $repoPath -DirectionLabel "Brain -> Repo"
    
    # 2. Commit and Push
    Push-Location $repoPath
    try {
        Write-Host "`n[Git] Checking status..." -ForegroundColor Yellow
        git status
        
        Write-Host "`n[Git] Staging all changes..." -ForegroundColor Yellow
        git add .
        
        $changes = git status --porcelain
        if ($changes) {
            Write-Host "[Git] Committing..." -ForegroundColor Yellow
            git commit -m "chore(sync): Update from Antigravity Brain"
            
            Write-Host "[Git] Pushing to origin..." -ForegroundColor Yellow
            git push
            Write-Host "SUCCESS: Changes pushed to GitHub." -ForegroundColor Green
        }
        else {
            Write-Host "No changes to commit." -ForegroundColor Green
        }
    }
    catch {
        Write-Error "Git operation failed: $_"
    }
    finally {
        Pop-Location
    }
}

function Run-RepoToBrain {
    # 1. Commit and Push Local Repo changes first (Optional but requested "also online repo")
    Push-Location $repoPath
    try {
        Write-Host "`n[Git] Checking local repo status..." -ForegroundColor Yellow
        $changes = git status --porcelain
        if ($changes) {
            Write-Host "[Git] Uncommitted changes detected. Committing and Pushing..." -ForegroundColor Yellow
            git add .
            git commit -m "chore(sync): Update from Local Repo"
            git push
            Write-Host "SUCCESS: Local changes pushed to GitHub." -ForegroundColor Green
        }
        else {
            Write-Host "[Git] Clean working tree. Ensuring we are pushed..." -ForegroundColor Yellow
            git push
        }
    }
    catch {
        Write-Error "Git operation failed: $_"
    }
    finally {
        Pop-Location
    }

    # 2. Sync Files Repo -> Brain
    Sync-Files -FromRoot $repoPath -ToRoot $antigravityRoot -DirectionLabel "Repo -> Brain"
    Write-Host "SUCCESS: Brain updated from Local Repo." -ForegroundColor Green
}

function Run-RemoteToBrain {
    Push-Location $repoPath
    try {
        # 1. Pull from Remote
        Write-Host "`n[Git] Pulling from origin..." -ForegroundColor Yellow
        git pull
        
        # 2. Sync files Repo -> Brain
        Pop-Location # Need to pop before calling Sync-Files just to be safe with pointers, though Sync uses absolute paths
        Sync-Files -FromRoot $repoPath -ToRoot $antigravityRoot -DirectionLabel "Remote -> Brain"
        Write-Host "SUCCESS: Brain updated from Remote (via Local Repo)." -ForegroundColor Green
    }
    catch {
        Pop-Location
        Write-Error "Git Pull failed: $_"
    }
}

function Get-LatestTimestamp {
    param ([string]$rootPath)
    $latest = [DateTime]::MinValue
    
    foreach ($key in $mapping.Keys) {
        $path = Join-Path $rootPath $key
        # Check if mapped path exists for Brain/Repo structure difference
        if (-not (Test-Path $path)) {
            $path = Join-Path $rootPath $mapping[$key]
        }

        if (Test-Path $path) {
            $item = Get-ChildItem -Path $path -Recurse -ErrorAction SilentlyContinue | 
            Sort-Object LastWriteTime -Descending | 
            Select-Object -First 1
            
            if ($item -and $item.LastWriteTime -gt $latest) {
                $latest = $item.LastWriteTime
            }
        }
    }
    return $latest
}

function Run-SmartSync {
    Write-Host "`n[Smart Sync] Analyzing timestamps..." -ForegroundColor Cyan
    
    # Check Remote Status
    Push-Location $repoPath
    try {
        git fetch
        $status = git status -uno
        if ($status -match "Your branch is behind") {
            Write-Host "[Smart Sync] Remote is ahead. Pulling changes..." -ForegroundColor Yellow
            Run-RemoteToBrain
            return
        }
    }
    finally {
        Pop-Location
    }

    $brainTime = Get-LatestTimestamp -rootPath $antigravityRoot
    $repoTime = Get-LatestTimestamp -rootPath $repoPath
    
    Write-Host "  Brain Last Modified: $brainTime" -ForegroundColor Gray
    Write-Host "  Repo  Last Modified: $repoTime" -ForegroundColor Gray

    if ($brainTime -gt $repoTime) {
        Write-Host "[Smart Sync] Brain is newer. Pushing to detailed repo..." -ForegroundColor Green
        Run-BrainToRepo
    }
    elseif ($repoTime -gt $brainTime) {
        Write-Host "[Smart Sync] Repo is newer. Pushing to Brain..." -ForegroundColor Green
        Run-RepoToBrain
    }
    else {
        Write-Host "[Smart Sync] Timestamps match or no changes detected." -ForegroundColor Gray
    }
}

# --- MAIN MENU ---
if ($args[0] -eq "auto") {
    Run-SmartSync
    exit
}

Show-Header
Write-Host "Select Synchronization Direction:"
Write-Host "[0] Smart Sync (Auto-Detect)" -ForegroundColor Green
Write-Host "    Automatically detects newest changes and syncs."
Write-Host "[1] Push Brain Changes (Brain -> Repo -> GitHub)" -ForegroundColor Cyan
Write-Host "    Use when you modified files in Antigravity properties."
Write-Host "[2] Push Local Repo (Repo -> GitHub & Brain)" -ForegroundColor Cyan
Write-Host "    Use when you modified files in OneDrive folder."
Write-Host "[3] Pull Remote (GitHub -> Repo -> Brain)" -ForegroundColor Cyan
Write-Host "    Use when updates are on GitHub."
Write-Host "[Q] Quit" -ForegroundColor Gray

$selection = Read-Host "`nEnter Selection"

switch ($selection) {
    "0" { Run-SmartSync }
    "1" { Run-BrainToRepo }
    "2" { Run-RepoToBrain }
    "3" { Run-RemoteToBrain }
    "Q" { exit }
    "q" { exit }
    Default { Write-Warning "Invalid selection." }
}
