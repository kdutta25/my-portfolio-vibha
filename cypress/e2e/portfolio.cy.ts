describe('Portfolio', () => {
  beforeEach(() => {
    cy.viewport(1280, 800)
  })

  it('loads shell, hero, portrait, and footer', () => {
    cy.visit('/')
    cy.get('[data-cy=app-shell]').should('exist')
    cy.get('[data-cy=hero]').should('be.visible')
    cy.get('[data-cy=portrait]')
      .should('be.visible')
      .and('have.css', 'background-image')
      .and('not.have.css', 'background-image', 'none')
    cy.get('[data-cy=footer]').should('be.visible')
  })

  it('navigates to each section via desktop nav', () => {
    cy.visit('/')
    cy.get('[data-cy=nav-desktop-links] a[href="#about"]').click()
    cy.url().should('include', '#about')
    cy.get('[data-cy=section-about]').should('be.visible')

    cy.get('[data-cy=nav-desktop-links] a[href="#projects"]').click()
    cy.url().should('include', '#projects')

    cy.get('[data-cy=nav-desktop-links] a[href="#experience"]').click()
    cy.url().should('include', '#experience')
    cy.get('[data-cy=section-experience]').should('be.visible')

    cy.get('[data-cy=nav-desktop-links] a[href="#contact"]').click()
    cy.url().should('include', '#contact')
  })

  it('hero CTAs scroll to experience and contact', () => {
    cy.visit('/')
    cy.get('[data-cy=hero-cta-experience]').click()
    cy.url().should('include', '#experience')
    cy.get('[data-cy=hero-cta-contact]').click()
    cy.url().should('include', '#contact')
  })

  it('cycles all themes', () => {
    cy.visit('/')
    cy.get('[data-cy=theme-trigger]').click()
    cy.get('[data-cy=theme-light]').click()
    cy.document().its('documentElement.dataset.theme').should('eq', 'light')
    cy.get('[data-cy=theme-trigger]').click()
    cy.get('[data-cy=theme-dark]').click()
    cy.document().its('documentElement.dataset.theme').should('eq', 'dark')
    cy.get('[data-cy=theme-trigger]').click()
    cy.get('[data-cy=theme-enhanced-dark]').click()
    cy.document().its('documentElement.dataset.theme').should('eq', 'enhanced-dark')
  })

  it('switches all languages', () => {
    cy.visit('/')
    const codes = ['fr', 'hi', 'pa', 'bn', 'en'] as const
    for (const code of codes) {
      cy.get('[data-cy=lang-trigger]').click()
      cy.get(`[data-cy=lang-${code}]`).click()
      cy.document().its('documentElement.lang').should('not.be.empty')
    }
  })

  it('exposes certification links', () => {
    cy.visit('/#experience')
    cy.get('[data-cy=cert-pbi]').should('have.attr', 'href').and('include', 'linkedin.com')
    cy.get('[data-cy=cert-ssis]').should('have.attr', 'href').and('include', 'linkedin.com')
  })

  it('focuses skip link', () => {
    cy.visit('/')
    cy.get('[data-cy=skip-link]').focus()
    cy.focused().should('have.attr', 'href', '#about')
  })

  it('uses mobile nav on small screens', () => {
    cy.viewport(390, 844)
    cy.visit('/')
    cy.get('[data-cy=nav-mobile] a[href="#experience"]').click()
    cy.url().should('include', '#experience')
  })
})
