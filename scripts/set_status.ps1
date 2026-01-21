param (
    [Parameter(Mandatory=$true)]
    [ValidateSet("/initialize", "/analyst", "/architect", "/build", "/design", "/review", "/test", "/ux", "/security", "/deploy")]
    [string]$Persona,

    [Parameter(Mandatory=$true)]
    [ValidateSet("IDLE", "ACTIVE", "WAITING", "DONE", "BLOCKED")]
    [string]$Status,

    [Parameter(Mandatory=$false)]
    [string]$Task = "-",

    [Parameter(Mandatory=$false)]
    [string]$PlanPath = "PLAN.md"
)

$ErrorActionPreference = "Stop"

# Resolve absolute path
if (-not (Test-Path $PlanPath)) {
    # Try looking in the current directory if just filename provided
    $PlanPath = Join-Path (Get-Location) $PlanPath
    if (-not (Test-Path $PlanPath)) {
        Write-Error "Could not find PLAN.md at specified path: $PlanPath"
    }
}

Write-Host "Updating $Persona to '$Status' in $PlanPath..." -ForegroundColor Cyan

# Read file content
$content = Get-Content -Path $PlanPath -Raw

# Define emoji map for status
$emojiMap = @{
    "IDLE"    = "💤 IDLE"
    "ACTIVE"  = "🛠️ ACTIVE"
    "WAITING" = "⏳ WAITING"
    "DONE"    = "✅ DONE"
    "BLOCKED" = "🚨 BLOCKED"
}

$statusStr = $emojiMap[$Status]
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm"

# Regex Explanation:
# \| \s* [Persona] \s* \| .*? \| .*? \| .*? \|
# We match the specific line starting with the Persona in the table
$pattern = "(\| \s*" + [Regex]::Escape($Persona) + " \s*\|) (.*?) (\|) (.*?) (\|) (.*?) (\|)"

# Replacement:
# Group 1 (Persona col) + Status + Group 3 (Sep) + Task + Group 5 (Sep) + Timestamp + Group 7 (End)
# We need to construct the new line carefully preserving alignment is hard with regex replace alone,
# but we will just ensure it is valid markdown table syntax.
# To keep it pretty, we can pad, but functionality comes first.

# Let's simple-replace the line.
# Note: This regex assumes the standard table format in PLAN.md
# Line format: | 🏗️ /initialize | 💤 IDLE | - | - |

$lines = $content -split "`r`n"
$newLines = @()
$found = $false

foreach ($line in $lines) {
    if ($line -match "^\|\s*.*\Q$Persona\E\s*\|") {
        # Construct new line
        # We can try to preserve the icon if it's there
        $parts = $line.Split('|')
        # parts[0] is empty (before first |)
        # parts[1] is Persona " 🏗️ /initialize "
        # parts[2] is Status
        # parts[3] is Task
        # parts[4] is Last Updated
        
        if ($parts.Count -ge 5) {
            $found = $true
            # reconstruct
            $p_persona = $parts[1] # Keep original persona cell with spacing
            $p_status = " $statusStr "
            $p_task = " $Task "
            $p_time = " $timestamp "
            
            $newLine = "|$p_persona|$p_status|$p_task|$p_time|"
            $newLines += $newLine
            Write-Host "  Updated line: $newLine" -ForegroundColor Green
        } else {
            $newLines += $line
        }
    }
    else {
        $newLines += $line
    }
}

if (-not $found) {
    Write-Warning "Persona '$Persona' not found in Squad Status table."
} else {
    $newContent = $newLines -join "`r`n"
    Set-Content -Path $PlanPath -Value $newContent -NoNewline
    Write-Host "SUCCESS: Squad Status updated." -ForegroundColor Green
}
