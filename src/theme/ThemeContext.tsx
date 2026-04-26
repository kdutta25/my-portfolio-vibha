import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type ThemeName = 'light' | 'dark' | 'enhanced-dark'

type ThemeContextValue = {
  theme: ThemeName
  setTheme: (t: ThemeName) => void
}

const STORAGE_KEY = 'portfolio-vibha-theme'

const ThemeContext = createContext<ThemeContextValue | null>(null)

function readStoredTheme(): ThemeName | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    if (v === 'light' || v === 'dark' || v === 'enhanced-dark') return v
  } catch {
    /* ignore */
  }
  return null
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>(() => {
    const stored = readStoredTheme()
    if (stored) return stored
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches)
      return 'dark'
    return 'light'
  })

  const setTheme = useCallback((t: ThemeName) => {
    setThemeState(t)
    try {
      localStorage.setItem(STORAGE_KEY, t)
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (ctx) return ctx
  /* istanbul ignore next */
  throw new Error('useTheme must be used within ThemeProvider')
}
