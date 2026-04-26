import 'react'

declare module 'react' {
  interface AnchorHTMLAttributes<T> {
    'data-print-hide'?: boolean | string
    'data-cy'?: string
  }
  interface HTMLAttributes<T> {
    'data-print-hide'?: boolean | string
    'data-hero-inner'?: boolean | string
    'data-print-card'?: boolean | string
    'data-cy'?: string
  }
}
