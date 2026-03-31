import readline from 'readline';
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import os from 'os';

const CONFIG_DIR = path.join(os.homedir(), '.momo');
const CONFIG_FILE = path.join(CONFIG_DIR, 'config.json');

function saveKey(key: string): void {
  if (!fs.existsSync(CONFIG_DIR)) {
    fs.mkdirSync(CONFIG_DIR, { recursive: true });
  }
  fs.writeFileSync(CONFIG_FILE, JSON.stringify({ ANTHROPIC_API_KEY: key }, null, 2));
}

function loadKey(): string | null {
  if (fs.existsSync(CONFIG_FILE)) {
    try {
      const config = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf-8'));
      return config.ANTHROPIC_API_KEY || null;
    } catch {
      return null;
    }
  }
  return null;
}

export async function ensureApiKey(): Promise<void> {
  // 1. Check process.env first
  if (process.env.ANTHROPIC_API_KEY) {
    return;
  }

  // 2. Check saved config
  const savedKey = loadKey();
  if (savedKey) {
    process.env.ANTHROPIC_API_KEY = savedKey;
    return;
  }

  // 3. Prompt user if in TTY
  if (!process.stdin.isTTY) {
    return;
  }

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log(chalk.yellow('\n⚠️  No Anthropic API Key found.'));
  console.log(chalk.cyan('Please enter your API key (it will be saved to ~/.momo/config.json):'));
  
  return new Promise((resolve) => {
    rl.question('> ', (answer) => {
      const key = answer.trim();
      if (key) {
        process.env.ANTHROPIC_API_KEY = key;
        saveKey(key);
        console.log(chalk.green('✅ API Key saved for future sessions.\n'));
      } else {
        console.log(chalk.red('❌ No API key provided. Momo may fail to connect.\n'));
      }
      rl.close();
      resolve();
    });
  });
}
