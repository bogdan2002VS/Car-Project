import { useOutletContext } from 'react-router-dom'
import type { Engine, Generation } from '@/model/generation'

export interface EngineCtx {
  gen: Generation
  engine: Engine
}

export function useEngineCtx() {
  return useOutletContext<EngineCtx>()
}
