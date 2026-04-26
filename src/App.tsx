import { useEffect } from 'react'

import { NavBar } from './components/NavBar'
import { Hero } from './components/Hero'
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  ProjectsSection,
  SiteFooter,
} from './components/Sections'
import { useI18n } from './i18n/I18nContext'
import { Main, Shell, SkipLink } from './styled/layout'

function DocumentMeta() {
  const { t } = useI18n()
  useEffect(() => {
    document.title = t.meta.title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', t.meta.description)
  }, [t])
  return null
}

function SkipLinkBlock() {
  const { t } = useI18n()
  return (
    <SkipLink id="component-skip-link" href="#about">
      {t.nav.skipToContent}
    </SkipLink>
  )
}

export default function App() {
  return (
    <Shell id="component-app-shell" data-cy="app-shell">
      <SkipLinkBlock />
      <DocumentMeta />
      <NavBar />
      <Main id="component-app-main">
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </Main>
      <SiteFooter />
    </Shell>
  )
}
