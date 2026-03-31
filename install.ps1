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

# 1. Setup Momo Directory in LocalAppData
$MomoDest = "$env:LOCALAPPDATA\momo"
if (-not (Test-Path $MomoDest)) {
    New-Item -Path $MomoDest -ItemType Directory | Out-Null
}

# 2. Check for the local binary in the current path (if running from repo)
$LocalBinary = "$PWD\momo.exe"
if (Test-Path $LocalBinary) {
    Write-Host ">>> Found local binary. Copying to installation folder..." -ForegroundColor Yellow
    Copy-Item $LocalBinary -Destination "$MomoDest\momo.exe" -Force
} else {
    Write-Host ">>> Local binary not found. You should build it using 'bun run compile'." -ForegroundColor Yellow
}

# 3. Add to PATH (User + System if Admin)
$CurrentPath = [Environment]::GetEnvironmentVariable("Path", "User")
if ($CurrentPath -notlike "*$MomoDest*") {
    [Environment]::SetEnvironmentVariable("Path", "$CurrentPath;$MomoDest", "User")
    Write-Host "✅ User PATH configured." -ForegroundColor Green
}

if ($isAdmin) {
    $SystemPath = [Environment]::GetEnvironmentVariable("Path", "Machine")
    if ($SystemPath -notlike "*$MomoDest*") {
        [Environment]::SetEnvironmentVariable("Path", "$SystemPath;$MomoDest", "Machine")
        Write-Host "✅ System PATH configured (Admin)." -ForegroundColor Green
    }
}

# 4. Final Info
Write-Host "--------------------------------------------------------" -ForegroundColor Cyan
Write-Host "🎉 Momo installation complete!" -ForegroundColor Green
Write-Host "👉 To start, open a NEW CMD window and type 'momo'." -ForegroundColor White
Write-Host "👉 Your binary is located at: $MomoDest\momo.exe" -ForegroundColor Gray
Write-Host "--------------------------------------------------------" -ForegroundColor Cyan
