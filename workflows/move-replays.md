---
description: Move the latest downloaded CoH3 replays to the playback directory
---

# Move CoH3 Replays

This workflow moves the most recent '.rec' files from the Downloads folder to the Company of Heroes 3 playback directory.

1. Move the files:
```powershell
$source = "C:\Users\gerry\Downloads"
$dest = "C:\Users\gerry\Documents\My Games\Company of Heroes 3\playback"
Get-ChildItem -Path $source -Filter *.rec | Sort-Object LastWriteTime -Descending | Select-Object -First 5 | Move-Item -Destination $dest -Force -Verbose
```
