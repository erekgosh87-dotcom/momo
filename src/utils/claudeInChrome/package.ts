type BrowserTool = { name: string }

type MomoForChromePackage = {
  BROWSER_TOOLS?: BrowserTool[]
  createMomoForChromeMcpServer?: (...args: any[]) => any
}

let cachedPackage: MomoForChromePackage | null | undefined

function loadMomoForChromePackage(): MomoForChromePackage | null {
  if (cachedPackage !== undefined) {
    return cachedPackage
  }

  try {
    /* eslint-disable @typescript-eslint/no-require-imports */
    cachedPackage = require('@ant/claude-for-chrome-mcp') as MomoForChromePackage
    /* eslint-enable @typescript-eslint/no-require-imports */
  } catch {
    cachedPackage = null
  }

  return cachedPackage
}

export function getChromeBrowserTools(): BrowserTool[] {
  return loadMomoForChromePackage()?.BROWSER_TOOLS ?? []
}

export async function importMomoForChromePackage(): Promise<MomoForChromePackage> {
  return (await import('@ant/claude-for-chrome-mcp')) as MomoForChromePackage
}
