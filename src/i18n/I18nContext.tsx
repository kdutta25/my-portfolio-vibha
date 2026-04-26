import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

import type { Messages } from './messages'
import { messagesByLocale, type LocaleCode } from './locales'

const STORAGE_KEY = 'portfolio-vibha-locale'

type I18nContextValue = {
  locale: LocaleCode
  setLocale: (l: LocaleCode) => void
  t: Messages
}

const I18nContext = createContext<I18nContextValue | null>(null)

function readStoredLocale(): LocaleCode | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    if (v === 'en' || v === 'fr' || v === 'hi' || v === 'pa' || v === 'bn') return v
  } catch {
    /* ignore */
  }
  return null
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<LocaleCode>(() => readStoredLocale() ?? 'en')

  const setLocale = useCallback((l: LocaleCode) => {
    setLocaleState(l)
    try {
      localStorage.setItem(STORAGE_KEY, l)
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang =
      locale === 'en'
        ? 'en-CA'
        : locale === 'fr'
          ? 'fr-CA'
          : locale === 'hi'
            ? 'hi'
            : locale === 'pa'
              ? 'pa'
              : 'bn'
  }, [locale])

  const t = messagesByLocale[locale]

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (ctx) return ctx
  /* istanbul ignore next */
  throw new Error('useI18n must be used within I18nProvider')
}
