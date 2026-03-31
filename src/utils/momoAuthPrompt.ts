import readline from 'readline';
import chalk from 'chalk';

export async function ensureApiKey(): Promise<void> {
  if (process.env.ANTHROPIC_API_KEY) {
    return;
  }

  // Check if we are in a terminal
  if (!process.stdin.isTTY) {
    return;
  }

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log(chalk.yellow('\n⚠️  No Anthropic API Key found.'));
  console.log(chalk.cyan('Please enter your API key to start Momo:'));
  
  return new Promise((resolve) => {
    rl.question('> ', (answer) => {
      const key = answer.trim();
      if (key) {
        process.env.ANTHROPIC_API_KEY = key;
        console.log(chalk.green('✅ API Key set for this session.\n'));
      } else {
        console.log(chalk.red('❌ No API key provided. Momo may fail to connect.\n'));
      }
      rl.close();
      resolve();
    });
  });
}
