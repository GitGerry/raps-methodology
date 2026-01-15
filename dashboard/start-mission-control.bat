@echo off
title RAPS Mission Control
cd /d "C:\Users\gerry\.gemini\antigravity\raps_dashboard"
start "" http://localhost:5173/
npm run dev
