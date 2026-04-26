/** Nested message tree — all locales must mirror this shape */

export type Messages = {
  meta: { title: string; description: string }
  nav: {
    about: string
    projects: string
    experience: string
    contact: string
    skipToContent: string
  }
  hero: {
    role: string
    location: string
    tagline: string
    ctaPrimary: string
    ctaSecondary: string
  }
  about: {
    title: string
    portraitAlt: string
    lead: string
    p1: string
    p2: string
    clearance: string
    stats: { years: string; domains: string; clearanceLabel: string }
  }
  projects: {
    title: string
    subtitle: string
    items: Record<
      'aafc' | 'transport' | 'wipro',
      { title: string; period: string; summary: string; tags: string }
    >
  }
  experience: {
    title: string
    workHistory: string
    education: string
    certifications: string
    jobs: Record<
      'aafc_ds' | 'aafc_bi' | 'tc' | 'wipro',
      { title: string; org: string; period: string; location?: string; bullets: string[] }
    >
    edu: Record<
      'masters' | 'bachelors',
      { degree: string; school: string; period: string; detail?: string }
    >
    certs: Record<'pbi' | 'ssis', { name: string; issuer: string; issued: string }>
  }
  contact: {
    title: string
    subtitle: string
    emailLabel: string
    linkedinLabel: string
    locationLabel: string
    formNote: string
  }
  footer: { rights: string; builtWith: string }
  controls: {
    theme: string
    themeLight: string
    themeDark: string
    themeEnhanced: string
    language: string
  }
}
