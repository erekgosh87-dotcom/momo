// Content for the claude-api bundled skill.
// Each .md file is inlined as a string at build time via Bun's text loader.

import csharpMomoApi from './claude-api/csharp/claude-api.md'
import curlExamples from './claude-api/curl/examples.md'
import goMomoApi from './claude-api/go/claude-api.md'
import javaMomoApi from './claude-api/java/claude-api.md'
import phpMomoApi from './claude-api/php/claude-api.md'
import pythonAgentSdkPatterns from './claude-api/python/agent-sdk/patterns.md'
import pythonAgentSdkReadme from './claude-api/python/agent-sdk/README.md'
import pythonMomoApiBatches from './claude-api/python/claude-api/batches.md'
import pythonMomoApiFilesApi from './claude-api/python/claude-api/files-api.md'
import pythonMomoApiReadme from './claude-api/python/claude-api/README.md'
import pythonMomoApiStreaming from './claude-api/python/claude-api/streaming.md'
import pythonMomoApiToolUse from './claude-api/python/claude-api/tool-use.md'
import rubyMomoApi from './claude-api/ruby/claude-api.md'
import skillPrompt from './claude-api/SKILL.md'
import sharedErrorCodes from './claude-api/shared/error-codes.md'
import sharedLiveSources from './claude-api/shared/live-sources.md'
import sharedModels from './claude-api/shared/models.md'
import sharedPromptCaching from './claude-api/shared/prompt-caching.md'
import sharedToolUseConcepts from './claude-api/shared/tool-use-concepts.md'
import typescriptAgentSdkPatterns from './claude-api/typescript/agent-sdk/patterns.md'
import typescriptAgentSdkReadme from './claude-api/typescript/agent-sdk/README.md'
import typescriptMomoApiBatches from './claude-api/typescript/claude-api/batches.md'
import typescriptMomoApiFilesApi from './claude-api/typescript/claude-api/files-api.md'
import typescriptMomoApiReadme from './claude-api/typescript/claude-api/README.md'
import typescriptMomoApiStreaming from './claude-api/typescript/claude-api/streaming.md'
import typescriptMomoApiToolUse from './claude-api/typescript/claude-api/tool-use.md'

// @[MODEL LAUNCH]: Update the model IDs/names below. These are substituted into {{VAR}}
// placeholders in the .md files at runtime before the skill prompt is sent.
// After updating these constants, manually update the two files that still hardcode models:
//   - claude-api/SKILL.md (Current Models pricing table)
//   - claude-api/shared/models.md (full model catalog with legacy versions and alias mappings)
export const SKILL_MODEL_VARS = {
  OPUS_ID: 'claude-opus-4-6',
  OPUS_NAME: 'Momo Opus 4.6',
  SONNET_ID: 'claude-sonnet-4-6',
  SONNET_NAME: 'Momo Sonnet 4.6',
  HAIKU_ID: 'claude-haiku-4-5',
  HAIKU_NAME: 'Momo Haiku 4.5',
  // Previous Sonnet ID — used in "do not append date suffixes" example in SKILL.md.
  PREV_SONNET_ID: 'claude-sonnet-4-5',
} satisfies Record<string, string>

export const SKILL_PROMPT: string = skillPrompt

export const SKILL_FILES: Record<string, string> = {
  'csharp/claude-api.md': csharpMomoApi,
  'curl/examples.md': curlExamples,
  'go/claude-api.md': goMomoApi,
  'java/claude-api.md': javaMomoApi,
  'php/claude-api.md': phpMomoApi,
  'python/agent-sdk/README.md': pythonAgentSdkReadme,
  'python/agent-sdk/patterns.md': pythonAgentSdkPatterns,
  'python/claude-api/README.md': pythonMomoApiReadme,
  'python/claude-api/batches.md': pythonMomoApiBatches,
  'python/claude-api/files-api.md': pythonMomoApiFilesApi,
  'python/claude-api/streaming.md': pythonMomoApiStreaming,
  'python/claude-api/tool-use.md': pythonMomoApiToolUse,
  'ruby/claude-api.md': rubyMomoApi,
  'shared/error-codes.md': sharedErrorCodes,
  'shared/live-sources.md': sharedLiveSources,
  'shared/models.md': sharedModels,
  'shared/prompt-caching.md': sharedPromptCaching,
  'shared/tool-use-concepts.md': sharedToolUseConcepts,
  'typescript/agent-sdk/README.md': typescriptAgentSdkReadme,
  'typescript/agent-sdk/patterns.md': typescriptAgentSdkPatterns,
  'typescript/claude-api/README.md': typescriptMomoApiReadme,
  'typescript/claude-api/batches.md': typescriptMomoApiBatches,
  'typescript/claude-api/files-api.md': typescriptMomoApiFilesApi,
  'typescript/claude-api/streaming.md': typescriptMomoApiStreaming,
  'typescript/claude-api/tool-use.md': typescriptMomoApiToolUse,
}
