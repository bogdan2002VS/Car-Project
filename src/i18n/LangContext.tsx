import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Lang, LocalizedString } from '@/model/common'
import { ro } from './ui/ro'
import { en } from './ui/en'

type Dict = typeof ro
export type UiKey = keyof Dict

const dicts: Record<Lang, Dict> = { ro, en }

interface I18nValue {
  lang: Lang
  setLang: (l: Lang) => void
  toggle: () => void
  /** Translate a UI key, with optional `{var}` interpolation. */
  t: (key: UiKey, vars?: Record<string, string | number>) => string
  /** Resolve a bilingual content field for the current language (EN→RO fallback). */
  tx: (s?: LocalizedString | null) => string
}

const I18nContext = createContext<I18nValue | null>(null)

function detectInitial(): Lang {
  if (typeof window === 'undefined') return 'ro'
  const stored = window.localStorage.getItem('lang')
  if (stored === 'ro' || stored === 'en') return stored
  return navigator.language?.toLowerCase().startsWith('ro') ? 'ro' : 'en'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitial)

  useEffect(() => {
    window.localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo<I18nValue>(() => {
    const t = (key: UiKey, vars?: Record<string, string | number>) => {
      const dict = dicts[lang]
      if (import.meta.env.DEV && dict[key] === undefined) {
        console.warn(`[i18n] missing key "${String(key)}" for "${lang}"`)
      }
      let s: string = dict[key] ?? en[key] ?? String(key)
      if (vars) {
        for (const [k, v] of Object.entries(vars)) {
          s = s.split(`{${k}}`).join(String(v))
        }
      }
      return s
    }
    const tx = (str?: LocalizedString | null) => {
      if (!str) return ''
      return str[lang] || str.en || str.ro || ''
    }
    return {
      lang,
      setLang: (l: Lang) => setLangState(l),
      toggle: () => setLangState((p) => (p === 'ro' ? 'en' : 'ro')),
      t,
      tx,
    }
  }, [lang])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
