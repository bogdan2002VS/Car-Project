import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

export type Theme = 'light' | 'dark'

interface ThemeValue {
  theme: Theme
  setTheme: (t: Theme) => void
  toggle: () => void
}

const ThemeContext = createContext<ThemeValue | null>(null)

function detectInitial(): Theme {
  if (typeof window === 'undefined') return 'light'
  const stored = window.localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') return stored
  // Default to light (per product decision), regardless of OS preference.
  return 'light'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(detectInitial)

  useEffect(() => {
    window.localStorage.setItem('theme', theme)
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const value: ThemeValue = {
    theme,
    setTheme: setThemeState,
    toggle: () => setThemeState((p) => (p === 'light' ? 'dark' : 'light')),
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
