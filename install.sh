#!/usr/bin/env bash

# Momo Installer for Linux/macOS
set -e

# Colors
CYAN='\033[0;36m'
BOLD='\033[1m'
NC='\033[0m'

echo -e "${CYAN}${BOLD}"
echo "   ███╗   ███╗ ██████╗ ███╗   ███╗ ██████╗ "
echo "   ████╗ ████║██╔═══██╗████╗ ████║██╔═══██╗"
echo "   ██╔████╔██║██║   ██║██╔████╔██║██║   ██║"
echo "   ██║╚██╔╝██║██║   ██║██║╚██╔╝██║██║   ██║"
echo "   ██║ ╚═╝ ██║╚██████╔╝██║ ╚═╝ ██║╚██████╔╝"
echo "   ╚═╝     ╚═╝ ╚═════╝ ╚═╝     ╚═╝ ╚═════╝ "
echo -e "${NC}"
echo "Installing Momo AI Agent..."

# Detect OS
OS="$(uname -s)"
case "${OS}" in
    Linux*)     FILE="momo-linux";;
    Darwin*)    FILE="momo-macos";;
    *)          echo "Unsupported OS: ${OS}"; exit 1;;
esac

# Download and install (Placeholder for real release)
# curl -L -o momo https://github.com/paoloanzn/momo/releases/latest/download/${FILE}
# chmod +x momo
# sudo mv momo /usr/local/bin/momo

echo "Momo installed successfully! Run it with 'momo'"
