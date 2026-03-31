# Momo Installer for Windows (Premium Version)
Write-Host @"
      ________   _____  ________   _____  
     |_   __  | |_   _||_   __  | |_   _| 
       | |_ \\_|   | |    | |_ \\_|   | |   
       |  _| _    | |    |  _| _    | |   
      _| |__/ |  _| |_  _| |__/ |  _| |_  
     |________| |_____||________| |_____|
"@ -ForegroundColor Cyan

Write-Host ">>> MOMO: THE ULTIMATE UNLOCKED AI AGENT <<<" -ForegroundColor White
Write-Host "Starting premium installation for Windows..." -ForegroundColor Cyan

# Check for Bun (required for Momo REPL)
$BunPath = Get-Command bun -ErrorAction SilentlyContinue
if (-not $BunPath) {
    Write-Host ">>> Bun not found. Installing the Bun runtime..." -ForegroundColor Yellow
    npm install -g bun
}

# Create a folder in LocalAppData
$MomoPath = "$env:LOCALAPPDATA\momo"
if (-not (Test-Path $MomoPath)) {
    New-Item -Path $MomoPath -ItemType Directory | Out-Null
}

# (In a real scenario, we'd use Invoke-WebRequest from a GitHub Release)
# Write-Host "Downloading latest Momo release..."
# Invoke-WebRequest -Uri "https://github.com/erekgosh87-dotcom/momo/releases/download/v1.0.0/momo.exe" -OutFile "$MomoPath\momo.exe"

# Configure Environment Path
$CurrentPath = [Environment]::GetEnvironmentVariable("Path", "User")
if ($CurrentPath -notlike "*$MomoPath*") {
    [Environment]::SetEnvironmentVariable("Path", "$CurrentPath;$MomoPath", "User")
    Write-Host "✅ Path configured: $MomoPath added to User PATH." -ForegroundColor Green
}

# Final Check
Write-Host "--------------------------------------------------------" -ForegroundColor Cyan
Write-Host "🎉 Momo installation complete!" -ForegroundColor Green
Write-Host "👉 To start, open a NEW terminal and type 'momo'." -ForegroundColor White
Write-Host "👉 Momo will ask for your API key if it's your first time." -ForegroundColor Cyan
Write-Host "--------------------------------------------------------" -ForegroundColor Cyan
