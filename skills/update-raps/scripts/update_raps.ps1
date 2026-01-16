$ErrorActionPreference = "Stop"

$antigravityRoot = "C:\Users\gerry\.gemini\antigravity"
$repoPath = Join-Path $antigravityRoot "raps-methodology"

Write-Host "Starting RAPS Update..." -ForegroundColor Cyan

# 1. Update Git Repository
if (Test-Path -Path $repoPath) {
    Write-Host "Found repo at $repoPath"
    Push-Location $repoPath
    
    if (Test-Path ".git") {
        Write-Host "Pulling latest changes..." -ForegroundColor Yellow
        try {
            git pull
        }
        catch {
            Write-Warning "Git pull failed. Proceeding with local files. Error: $_"
        }
    }
    else {
        Write-Warning "Not a git repository. Skipping git pull."
    }
    
    Pop-Location
}
else {
    Write-Error "Repository path not found: $repoPath"
    exit 1
}

# 2. Define Copy Operations
$mapping = @{
    "workflows" = "global_workflows"
    "skills"    = "skills"
    "dashboard" = "raps_dashboard"

}

# 3. Execute Updates
foreach ($key in $mapping.Keys) {
    $sourceDir = Join-Path $repoPath $key
    $destDir = Join-Path $antigravityRoot $mapping[$key]

    if (Test-Path $sourceDir) {
        Write-Host "Syncing $($mapping[$key])..." -ForegroundColor Green
        
        # Ensure destination exists
        if (-not (Test-Path $destDir)) {
            New-Item -ItemType Directory -Path $destDir -Force | Out-Null
        }

        # PRUNE: Remove files in Dest that are not in Source (Cleanup old files)
        # Exclude: node_modules, .git, .env, and the destination root itself
        $excludeCommon = @("node_modules", ".git", ".env")
        Get-ChildItem -Path $destDir -Recurse | Where-Object { 
            $relPath = $_.FullName.Substring($destDir.Length + 1)
            # Skip if any part of the path matches an exclusion
            $skip = $false
            foreach ($ex in $excludeCommon) { if ($relPath -match "\\?$ex(\\|$)") { $skip = $true; break } }
            if ($skip) { return $false }

            # Return true if source counterpart does NOT exist
            $sourcePath = Join-Path $sourceDir $relPath
            -not (Test-Path $sourcePath)
        } | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue

        # Copy and Overwrite
        Copy-Item -Path "$sourceDir\*" -Destination $destDir -Recurse -Force
    }
    else {
        Write-Warning "Source directory not found: $sourceDir"
    }
}

Write-Host "RAPS Update Completed Successfully!" -ForegroundColor Cyan
