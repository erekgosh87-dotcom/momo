import { useEffect, useState } from 'react'
import {
  type MomoAILimits,
  currentLimits,
  statusListeners,
} from './claudeAiLimits.js'

export function useMomoAiLimits(): MomoAILimits {
  const [limits, setLimits] = useState<MomoAILimits>({ ...currentLimits })

  useEffect(() => {
    const listener = (newLimits: MomoAILimits) => {
      setLimits({ ...newLimits })
    }
    statusListeners.add(listener)

    return () => {
      statusListeners.delete(listener)
    }
  }, [])

  return limits
}
