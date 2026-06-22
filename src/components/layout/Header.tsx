import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useI18n } from '@/i18n/LangContext'
import { useTheme } from '@/theme/ThemeContext'
import { Icon } from '@/components/ui/Icon'
import { BrandMark } from './BrandMark'

export function Header() {
  const { t, lang, toggle } = useI18n()
  const { theme, toggle: toggleTheme } = useTheme()
  const navigate = useNavigate()
  const [q, setQ] = useState('')

  const submit = (e: FormEvent) => {
    e.preventDefault()
    navigate(`/search?q=${encodeURIComponent(q.trim())}`)
  }

  return (
    <header className="sticky top-0 z-30 border-b border-ink-100 bg-white/90 backdrop-blur dark:border-ink-800 dark:bg-ink-950/85">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <Link to="/" className="flex items-center gap-2.5">
          <BrandMark />
          <span className="hidden font-display text-lg font-extrabold sm:block">
            MX-5 <span className="text-mazda-600 dark:text-mazda-400">Encyclopedia</span>
          </span>
        </Link>

        <div className="ml-auto flex items-center gap-2">
          <form onSubmit={submit} className="hidden md:block">
            <div className="relative">
              <Icon
                name="Search"
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400"
              />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={t('search.placeholder')}
                className="w-64 rounded-lg border border-ink-200 bg-white py-2 pl-9 pr-3 text-sm outline-none transition focus:border-mazda-500 lg:w-72 dark:border-ink-700 dark:bg-ink-900"
              />
            </div>
          </form>

          <Link
            to="/search"
            className="btn-ghost px-2.5 py-2 md:hidden"
            aria-label={t('nav.search')}
          >
            <Icon name="Search" className="h-5 w-5" />
          </Link>

          <button
            type="button"
            onClick={toggle}
            className="btn-ghost px-3 py-2"
            title={t('lang.switch')}
          >
            <Icon name="Languages" className="h-4 w-4" />
            <span className="text-sm font-semibold">{lang === 'ro' ? 'EN' : 'RO'}</span>
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className="btn-ghost px-2.5 py-2"
            aria-label={t('theme.toggle')}
          >
            <Icon name={theme === 'dark' ? 'Sun' : 'Moon'} className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  )
}
