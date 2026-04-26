import { useEffect, useRef, useState, type MouseEvent } from 'react'

import { PROFILE } from '../data/constants'
import { LOCALES, type LocaleCode } from '../i18n/locales'
import { useI18n } from '../i18n/I18nContext'
import {
  BrandLink,
  MenuButton,
  MenuItem,
  MenuPanel,
  MenuRoot,
  NavControls,
  NavInner,
  NavLinks,
  NavMobile,
  NavMobileLink,
  NavRoot,
  NavTextLink,
} from '../styled/layout'
import { useTheme } from '../theme/ThemeContext'

type MenuId = 'theme' | 'lang' | null

export function NavBar() {
  const { t, locale, setLocale } = useI18n()
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState<MenuId>(null)
  const themeRef = useRef<HTMLDivElement>(null)
  const langRef = useRef<HTMLDivElement>(null)
  const nameParts = PROFILE.name.split(/\s+/)
  const brandFirst = nameParts[0] ?? PROFILE.name
  const brandRest = nameParts.slice(1).join(' ')

  useEffect(() => {
    function onDocClick(e: globalThis.MouseEvent) {
      const tgt = e.target as Node
      if (themeRef.current?.contains(tgt) || langRef.current?.contains(tgt)) return
      setOpen(null)
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [])

  const stop = (e: MouseEvent) => e.stopPropagation()

  const themeLabel =
    theme === 'light'
      ? t.controls.themeLight
      : theme === 'dark'
        ? t.controls.themeDark
        : t.controls.themeEnhanced

  return (
    <NavRoot id="component-nav-root" data-cy="nav">
      <NavInner id="component-nav-inner">
        <BrandLink id="component-nav-brand" href="#top">
          {brandFirst}
          {brandRest ? (
            <span id="component-nav-brand-accent">{` ${brandRest}`}</span>
          ) : null}
        </BrandLink>
        <NavLinks id="component-nav-desktop-links" data-cy="nav-desktop-links">
          <NavTextLink id="component-nav-link-about" href="#about">
            {t.nav.about}
          </NavTextLink>
          <NavTextLink id="component-nav-link-projects" href="#projects">
            {t.nav.projects}
          </NavTextLink>
          <NavTextLink id="component-nav-link-experience" href="#experience">
            {t.nav.experience}
          </NavTextLink>
          <NavTextLink id="component-nav-link-contact" href="#contact">
            {t.nav.contact}
          </NavTextLink>
        </NavLinks>
        <NavControls id="component-nav-controls">
          <MenuRoot id="component-nav-theme-menu-root" ref={themeRef} onClick={stop} data-cy="theme-menu">
            <MenuButton
              id="component-nav-theme-trigger"
              type="button"
              aria-expanded={open === 'theme'}
              aria-haspopup="true"
              onClick={() => setOpen((v) => (v === 'theme' ? null : 'theme'))}
              data-cy="theme-trigger"
            >
              {t.controls.theme}: {themeLabel}
            </MenuButton>
            <MenuPanel id="component-nav-theme-panel" $open={open === 'theme'} role="menu">
              {(['light', 'dark', 'enhanced-dark'] as const).map((name) => (
                <MenuItem
                  key={name}
                  id={`component-nav-theme-option-${name}`}
                  type="button"
                  role="menuitem"
                  $active={theme === name}
                  data-cy={`theme-${name}`}
                  onClick={() => {
                    setTheme(name)
                    setOpen(null)
                  }}
                >
                  {name === 'light'
                    ? t.controls.themeLight
                    : name === 'dark'
                      ? t.controls.themeDark
                      : t.controls.themeEnhanced}
                </MenuItem>
              ))}
            </MenuPanel>
          </MenuRoot>
          <MenuRoot id="component-nav-lang-menu-root" ref={langRef} onClick={stop} data-cy="lang-menu">
            <MenuButton
              id="component-nav-lang-trigger"
              type="button"
              aria-expanded={open === 'lang'}
              aria-haspopup="true"
              onClick={() => setOpen((v) => (v === 'lang' ? null : 'lang'))}
              data-cy="lang-trigger"
            >
              {t.controls.language}
            </MenuButton>
            <MenuPanel id="component-nav-lang-panel" $open={open === 'lang'} role="menu">
              {LOCALES.map(({ code, label }) => (
                <MenuItem
                  key={code}
                  id={`component-nav-lang-option-${code}`}
                  type="button"
                  role="menuitem"
                  $active={locale === code}
                  data-cy={`lang-${code}`}
                  onClick={() => {
                    setLocale(code as LocaleCode)
                    setOpen(null)
                  }}
                >
                  {label}
                </MenuItem>
              ))}
            </MenuPanel>
          </MenuRoot>
        </NavControls>
      </NavInner>
      <NavMobile id="component-nav-mobile" data-cy="nav-mobile">
        <NavMobileLink id="component-nav-mobile-about" href="#about">
          {t.nav.about}
        </NavMobileLink>
        <NavMobileLink id="component-nav-mobile-projects" href="#projects">
          {t.nav.projects}
        </NavMobileLink>
        <NavMobileLink id="component-nav-mobile-experience" href="#experience">
          {t.nav.experience}
        </NavMobileLink>
        <NavMobileLink id="component-nav-mobile-contact" href="#contact">
          {t.nav.contact}
        </NavMobileLink>
      </NavMobile>
    </NavRoot>
  )
}
