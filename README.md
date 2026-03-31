# 🍑 Momo AI Agent

Momo is a high-performance, **unlocked**, and **telemetry-free** AI coding agent. It is a feature-enhanced fork of Claude Code, designed for developers who want full control and access to all experimental internal features without guardrails or tracking.

---

## 🔥 Features
- 🔓 **Fully Unlocked**: `ULTRATHINK`, `ULTRAPLAN`, and `VOICE_MODE` enabled by default.
- 🚀 **Lightning Fast**: Powered by Bun for maximum performance.
- 🛡️ **Zero Telemetry**: No tracking, no phone-home.
- 🌍 **Cross-Platform**: Windows (`.exe`), Linux, and macOS compatible.
- 🎨 **Premium Terminal UI**: Custom high-tech splash screen and optimized interaction.

---

## 🛠️ Installation

### Windows (PowerShell)
```powershell
irm https://raw.githubusercontent.com/paoloanzn/momo/main/install.ps1 | iex
```

### Linux / macOS (Bash)
```bash
curl -fsSL https://raw.githubusercontent.com/paoloanzn/momo/main/install.sh | bash
```

---

## 🏗️ Build from Source

### Prerequisites
- [Bun](https://bun.sh) >= 1.3.11

### Commands
```bash
# Install dependencies
bun install

# Build for your platform
bun run build:momo
```

---

## 🚀 Usage

Set your API key:
```bash
# Windows
set ANTHROPIC_API_KEY=sk-ant-api...
# Linux/macOS
export ANTHROPIC_API_KEY=sk-ant-api...
```

Run Momo:
```bash
momo
```

---

> [!IMPORTANT]
> This is an experimental, independent project. Use responsibly.
