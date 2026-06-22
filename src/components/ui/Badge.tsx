import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Tone = 'neutral' | 'accent' | 'green' | 'amber'

const tones: Record<Tone, string> = {
  neutral: 'bg-ink-100 text-ink-700 dark:bg-ink-800 dark:text-ink-200',
  accent: 'bg-mazda-50 text-mazda-700 dark:bg-mazda-600/20 dark:text-mazda-300',
  green: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300',
  amber: 'bg-amber-50 text-amber-800 dark:bg-amber-500/15 dark:text-amber-300',
}

export function Badge({
  tone = 'neutral',
  className,
  children,
}: {
  tone?: Tone
  className?: string
  children: ReactNode
}) {
  return <span className={cn('badge', tones[tone], className)}>{children}</span>
}
