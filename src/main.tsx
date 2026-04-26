import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { I18nProvider } from './i18n/I18nContext'
import { ThemeProvider } from './theme/ThemeContext'
import './index.css'
import App from './App.tsx'

const faviconHref = `${import.meta.env.BASE_URL}images/vibha.png`
let faviconLink = document.querySelector<HTMLLinkElement>("link[rel='icon']")
if (!faviconLink) {
  faviconLink = document.createElement('link')
  faviconLink.rel = 'icon'
  document.head.appendChild(faviconLink)
}
faviconLink.type = 'image/png'
faviconLink.href = faviconHref

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <I18nProvider>
        <App />
      </I18nProvider>
    </ThemeProvider>
  </StrictMode>,
)
