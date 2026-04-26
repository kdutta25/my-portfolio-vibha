import { PROFILE } from '../data/constants'
import { useI18n } from '../i18n/I18nContext'
import {
  BtnGhost,
  BtnPrimary,
  HeroActions,
  HeroGlow,
  HeroInner,
  HeroMuted,
  HeroRoot,
  HeroTagline,
  HeroTitle,
  HeroEyebrow,
} from '../styled/layout'

export function Hero() {
  const { t } = useI18n()

  return (
    <HeroRoot id="top" data-cy="hero">
      <HeroGlow id="component-hero-glow" aria-hidden />
      <HeroInner id="component-hero-inner">
        <HeroEyebrow id="component-hero-eyebrow">{t.hero.role}</HeroEyebrow>
        <HeroTitle id="component-hero-title" role="heading" aria-level={1}>
          {PROFILE.name}
        </HeroTitle>
        <HeroMuted id="component-hero-location">{t.hero.location}</HeroMuted>
        <HeroTagline id="component-hero-tagline">{t.hero.tagline}</HeroTagline>
        <HeroActions id="component-hero-actions">
          <BtnPrimary
            id="component-hero-cta-experience"
            href="#experience"
            data-cy="hero-cta-experience"
          >
            {t.hero.ctaPrimary}
          </BtnPrimary>
          <BtnGhost id="component-hero-cta-contact" href="#contact" data-cy="hero-cta-contact">
            {t.hero.ctaSecondary}
          </BtnGhost>
        </HeroActions>
      </HeroInner>
    </HeroRoot>
  )
}
