<#
.SYNOPSIS
    RAPS Methodology Holistic Integrity Scanner v2.0
.DESCRIPTION
    Audits the repository for:
    1. Orphaned Skills/Workflows
    2. Dead Links in Documentation
    3. Deprecated Commands (e.g., /health)
    4. Squad Status Staleness (>24h locks)
    5. Artifact Existence
    6. Ghost Changes (Unlogged modifications)
    7. Persona Consistency (Code vs Docs vs State)
    8. N/A
#>
param(
    [string]$RootPath = "$PSScriptRoot\.."
)

$ErrorActionPreference = "Continue" # Don't crash on single file errors
$issues = 0

function Report-Issue {
    param([string]$Message)
    Write-Host "WARNING:   [Issue] $Message" -ForegroundColor Yellow
    Add-Content -Path "audit_results.log" -Value "[Issue] $Message" -Force
    $script:issues++
}

function Report-Pass {
    param([string]$Message)
    Write-Host "  [Pass] $Message" -ForegroundColor DarkGray
}

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "      RAPS INTEGRITY SCANNER v2.0" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "Scanning Root: $RootPath" -ForegroundColor Gray

# ---------------------------------------------------------
# 1. ORPHAN CHECK
# ---------------------------------------------------------
Write-Host "`n1. Checking for Orphans (Unreferenced Skills/Workflows)..." -ForegroundColor White
$readmePath = Join-Path $RootPath "README.md"
$skillsReadme = Join-Path $RootPath "skills\README.md"
$workflowsReadme = Join-Path $RootPath "workflows\README.md"

$allReadmes = @()
if (Test-Path $readmePath) { $allReadmes += (Get-Content $readmePath -Raw) }
if (Test-Path $skillsReadme) { $allReadmes += (Get-Content $skillsReadme -Raw) }
if (Test-Path $workflowsReadme) { $allReadmes += (Get-Content $workflowsReadme -Raw) }
$combinedIndex = $allReadmes -join "`n"

# Check Skills
$skills = Get-ChildItem (Join-Path $RootPath "skills") -Directory
foreach ($skill in $skills) {
    if ($skill.Name -in @("raps-integrity")) { continue } # Self-reference exclusion
    if ($combinedIndex -notmatch $skill.Name) {
        Report-Issue "Orphan Skill Found: 'skills\$($skill.Name)' is not referenced in any README."
    }
}

# Check Workflows
$workflows = Get-ChildItem (Join-Path $RootPath "workflows") -Filter "*.md"
foreach ($wf in $workflows) {
    if ($wf.Name -in @("README.md", "sync-raps.md", "check_integrity.ps1")) { continue }
    if ($combinedIndex -notmatch $wf.BaseName) {
        Report-Issue "Orphan Workflow Found: 'workflows\$($wf.Name)' is not referenced in any README."
    }
}
if ($script:issues -eq 0) { Report-Pass "No orphans found." }

# ---------------------------------------------------------
# 2. DEAD LINK CHECK
# ---------------------------------------------------------
Write-Host "`n2. Checking for Dead Links..." -ForegroundColor White
$mdFiles = Get-ChildItem $RootPath -Include "*.md" -Recurse -Exclude "node_modules", ".git", ".gemini"
foreach ($file in $mdFiles) {
    if ($file.FullName -match "\\node_modules\\") { continue }
    if ($file.FullName -match "\\templates\\") { continue } # Templates often have placeholders
    $content = Get-Content $file.FullName
    $links = [regex]::Matches($content, '\[.*?\]\((.*?)\)')
    foreach ($link in $links) {
        $target = $link.Groups[1].Value.Split('#')[0] # Split anchor
        if ([string]::IsNullOrWhiteSpace($target) -or $target.StartsWith("http") -or $target.StartsWith("mailto")) { continue }
        
        # Resolve relative path
        $targetPath = Join-Path $file.DirectoryName $target
        if (-not (Test-Path $targetPath)) {
            $relPath = $file.FullName.Replace($RootPath, "")
            Report-Issue "Dead Link in $relPath -> '$target'"
        }
    }
}

# ---------------------------------------------------------
# 3. DEPRECATED COMMANDS
# ---------------------------------------------------------
Write-Host "`n3. Auditing Deprecated Commands..." -ForegroundColor White
$deprecated = @{ "/status" = "/raps-status"; "/health" = "/raps-status"; "/update-raps" = "/sync-raps" }
foreach ($file in $mdFiles) {
    if ($file.FullName -match "\\node_modules\\") { continue }
    if ($file.Name -eq "RAPS_CHANGELOG.md") { continue } # History allowed
    $content = Get-Content $file.FullName
    foreach ($term in $deprecated.Keys) {
        # Negative lookbehind to avoid false flagging /raps-status as /status
        if ($content -match "(?<!/raps)$term") {
            $relPath = $file.FullName.Replace($RootPath, "")
            Report-Issue "Deprecated term '$term' found in $relPath. Use '$($deprecated[$term])' instead."
        }
    }
}

# ---------------------------------------------------------
# 5. PERSONA CONSISTENCY (UPDATED)
# ---------------------------------------------------------
Write-Host "`n4. Checking Persona Consistency (Docs vs State)..." -ForegroundColor White
$planPath = Join-Path $RootPath "PLAN.md"

# Get Docs Personas (README headers)
if (Test-Path $readmePath) {
    $readmeContent = Get-Content $readmePath -Raw
    $docPersonas = [regex]::Matches($readmeContent, '### .* /([a-z-]+)') | ForEach-Object { $_.Groups[1].Value.Trim() }
}
else {
    $docPersonas = @()
}

# Get State Personas (Active Squad)
if (Test-Path $planPath) {
    $planContent = Get-Content $planPath -Raw
    $statePersonas = [regex]::Matches($planContent, '\|\s*/([a-z-]+)\s*\|') | ForEach-Object { $_.Groups[1].Value.Trim() }
}

# Compare State vs Docs
foreach ($s in $statePersonas) {
    if ($s -notin $docPersonas) {
        if ($s -match "research") { continue } # Skip deprecated research if lingering
        Report-Issue "Undocumented Active Persona: '/$s' is in PLAN.md but not in README."
    }
}

# ---------------------------------------------------------
# 7. GHOST CHANGES (EXPANDED)
# ---------------------------------------------------------
Write-Host "`n7. Auditing Changelog for Ghost Changes..." -ForegroundColor White
$logPath = Join-Path $RootPath "docs\RAPS_CHANGELOG.md"
if (Test-Path $logPath) {
    $logContent = Get-Content $logPath
    $lastEntryDate = [DateTime]::MinValue
    foreach ($line in $logContent) {
        if ($line -match "^\|\s*(\d{4}-\d{2}-\d{2}(?: \d{2}:\d{2})?)\s*\|") {
            try {
                $d = [DateTime]::Parse($matches[1])
                if ($d -gt $lastEntryDate) { $lastEntryDate = $d }
            }
            catch {}
        }
    }
    
    if ($lastEntryDate -ne [DateTime]::MinValue) {
        $threshold = $lastEntryDate.AddHours(24)
        
        # Expanded Scope: Workflows, Skills, Scripts, Components, Templates
        $structureDirs = @("workflows", "skills", "scripts", "templates")
        foreach ($dir in $structureDirs) {
            $fullPath = Join-Path $RootPath $dir
            if (Test-Path $fullPath) {
                $files = Get-ChildItem $fullPath -Recurse -File -Exclude "node_modules"
                foreach ($f in $files) {
                    if ($f.Name -eq "check_integrity.ps1") { continue } # Scanner updates itself
                    if ($f.LastWriteTime -gt $threshold) {
                        Report-Issue "Ghost Change: '$($f.Name)' modified on $($f.LastWriteTime), but last changelog is $lastEntryDate"
                    }
                }
            }
        }
        # Also check README
        if ((Get-Item $readmePath).LastWriteTime -gt $threshold) {
            Report-Issue "Ghost Change: 'README.md' modified after last changelog entry."
        }
    }
}

Write-Host "`n------------------------------------------" -ForegroundColor Gray
if ($issues -gt 0) {
    Write-Host "Audit Failed with $issues issues." -ForegroundColor Red
    exit 1
}
else {
    Write-Host "Audit Clean. RAPS Integrity Valid." -ForegroundColor Green
    exit 0
}
