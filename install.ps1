# Momo Installer for Windows
Write-Host @"
   ███╗   ███╗ ██████╗ ███╗   ███╗ ██████╗ 
   ████╗ ████║██╔═══██╗████╗ ████║██╔═══██╗
   ██╔████╔██║██║   ██║██╔████╔██║██║   ██║
   ██║╚██╔╝██║██║   ██║██║╚██╔╝██║██║   ██║
   ██║ ╚═╝ ██║╚██████╔╝██║ ╚═╝ ██║╚██████╔╝
   ╚═╝     ╚═╝ ╚═════╝ ╚═╝     ╚═╝ ╚═════╝ 
"@ -ForegroundColor Cyan

Write-Host "Installing Momo AI Agent for Windows..." -ForegroundColor White

# Create a folder in LocalAppData
$MomoPath = "$env:LOCALAPPDATA\momo"
if (-not (Test-Path $MomoPath)) {
    New-Item -Path $MomoPath -ItemType Directory
}

# Copy the executable (assuming download/build result)
# Copy-Item "./momo.exe" -Destination "$MomoPath\momo.exe"

# Add to PATH
$CurrentPath = [Environment]::GetEnvironmentVariable("Path", "User")
if ($CurrentPath -notlike "*$MomoPath*") {
    [Environment]::SetEnvironmentVariable("Path", "$CurrentPath;$MomoPath", "User")
    Write-Host "Added $MomoPath to user PATH. Please restart your terminal." -ForegroundColor Green
}

Write-Host "Momo installed successfully! Restart your terminal and run 'momo'." -ForegroundColor Green
