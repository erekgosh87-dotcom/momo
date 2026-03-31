import chalk from 'chalk';

export function printSplash(): void {
  const logoTop = chalk.cyan.bold(`
      ________   _____  ________   _____  
     |_   __  | |_   _||_   __  | |_   _| 
       | |_ \\_|   | |    | |_ \\_|   | |   
       |  _| _    | |    |  _| _    | |   
      _| |__/ |  _| |_  _| |__/ |  _| |_  
     |________| |_____||________| |_____|
  `);

  const logo3d = `
     ${chalk.blue.bold('        _  _  ____  _  _  ____ ')}
     ${chalk.blue.bold('       ( \\/ )(  _ \\/ \\/ )(  _ \\')}
     ${chalk.blue.bold('        )  (  )   /\\    /  )   /')}
     ${chalk.blue.bold('       (_/\\_)(_)\\_) \\__/  (_)\\_)')}
  `;

  console.log(logoTop);
  console.log(logo3d);
  console.log(chalk.white.bold('   --- Momo AI Agent (Unlocked Version 1.0.0) ---'));
  console.log(chalk.gray('   [ SYSTEM STATUS: UNLOCKED | NO TELEMETRY | HIGH-PERFORMANCE ]'));
  console.log(chalk.cyan('   ------------------------------------------------------------\n'));
}
