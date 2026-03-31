# Momo Installer for Windows (ADMIN MODE OPTIMIZED)
Write-Host @"
      ________   _____  ________   _____  
     |_   __  | |_   _||_   __  | |_   _| 
       | |_ \\_|   | |    | |_ \\_|   | |   
       |  _| _    | |    |  _| _    | |   
      _| |__/ |  _| |_  _| |__/ |  _| |_  
     |________| |_____||________| |_____|
"@ -ForegroundColor Cyan

# Check for Admin Rights
$isAdmin = ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
if (-not $isAdmin) {
    Write-Host "⚠️  Warning: You are not running as Administrator. Installation may not fully update the SYSTEM path." -ForegroundColor Yellow
}

Write-Host ">>> MOMO: THE ULTIMATE UNLOCKED AI AGENT <<<" -ForegroundColor White
Write-Host "Starting premium installation for Windows..." -ForegroundColor Cyan

# 1. Check for Bun
$BunPath = Get-Command bun -ErrorAction SilentlyContinue
if (-not $BunPath) {
    Write-Host ">>> Bun not found. Installing the Bun runtime..." -ForegroundColor Yellow
    # Try through npm
    npm install -g bun
}

# 2. Setup Momo Directory
$MomoPath = "$env:LOCALAPPDATA\momo"
if (-not (Test-Path $MomoPath)) {
    New-Item -Path $MomoPath -ItemType Directory | Out-Null
}

# 3. Add to PATH (User + System if Admin)
$CurrentPath = [Environment]::GetEnvironmentVariable("Path", "User")
if ($CurrentPath -notlike "*$MomoPath*") {
    [Environment]::SetEnvironmentVariable("Path", "$CurrentPath;$MomoPath", "User")
    Write-Host "✅ User PATH configured." -ForegroundColor Green
}

if ($isAdmin) {
    $SystemPath = [Environment]::GetEnvironmentVariable("Path", "Machine")
    if ($SystemPath -notlike "*$MomoPath*") {
        [Environment]::SetEnvironmentVariable("Path", "$SystemPath;$MomoPath", "Machine")
        Write-Host "✅ System PATH configured (Admin)." -ForegroundColor Green
    }
}

# 4. Final Info
Write-Host "--------------------------------------------------------" -ForegroundColor Cyan
Write-Host "🎉 Momo installation complete!" -ForegroundColor Green
Write-Host "👉 To start, open a NEW CMD or PowerShell window and type 'momo'." -ForegroundColor White
Write-Host "👉 Your API Key will be saved persistently to '$HOME\.momo\config.json'." -ForegroundColor Cyan
Write-Host "--------------------------------------------------------" -ForegroundColor Cyan
