/** Public profile & contact — sourced from LinkedIn summary */
export const PROFILE = {
  name: 'Vibha Sharma',
  linkedInUrl: 'https://www.linkedin.com/in/vibha-sharma-94725183/',
  email: 'sharmavibha56@gmail.com',
} as const

/** Resolves under Vite `base` (e.g. GitHub Pages /my-portfolio-vibha/) */
export const PORTRAIT_SRC = `${import.meta.env.BASE_URL}images/vibha.png`

export const CERT_LINKS = {
  powerBi:
    'https://linkedin.com/learning/certificates/734dce9842ad7751ab8f8ed19830f37c1abdb272194bc8b981f94620669f8158',
  ssis: 'https://linkedin.com/learning/certificates/c8c0f4df4784bcdc64579a76115f941faea67e46dcff020178c527f8e17f1e1f',
} as const
