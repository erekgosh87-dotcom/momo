import chalk from 'chalk';
import os from 'os';

export function printAbout(): void {
  const logo3d = `
    ${chalk.cyan('        _  _  ____  _  _  ____ ')}
    ${chalk.cyan('       ( \\/ )(  _ \\/ \\/ )(  _ \\')}
    ${chalk.cyan('        )  (  )   /\\    /  )   /')}
    ${chalk.cyan('       (_/\\_)(_)\\_) \\__/  (_)\\_)')}
    ${chalk.blue('       [ UNLOCKED POWER AGENT ]')}
  `;

  console.log(logo3d);
  console.log(chalk.white.bold('   --- MOMO SYSTEM INFO ---'));
  console.log(chalk.gray(`   OS: ${os.platform()} ${os.arch()} | ${os.release()}`));
  console.log(chalk.gray(`   Memory: ${Math.round(os.totalmem() / 1024 / 1024 / 1024)}GB`));
  console.log(chalk.gray(`   CPU: ${os.cpus()[0].model}`));
  console.log(chalk.gray(`   Features: Unlocked (50+ Internal Flags Active)`));
  console.log(chalk.gray(`   Status: Secure (Telemetry Fully Disabled)`));
  console.log(chalk.cyan('\n   Ready to build something amazing?\n'));
}
