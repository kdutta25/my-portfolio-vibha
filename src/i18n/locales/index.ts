import type { Messages } from '../messages'
import { bn } from './bn'
import { en } from './en'
import { fr } from './fr'
import { hi } from './hi'
import { pa } from './pa'

export type LocaleCode = 'en' | 'fr' | 'hi' | 'pa' | 'bn'

export const LOCALES: { code: LocaleCode; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'pa', label: 'ਪੰਜਾਬੀ' },
  { code: 'bn', label: 'বাংলা' },
]

export const messagesByLocale: Record<LocaleCode, Messages> = {
  en,
  fr,
  hi,
  pa,
  bn,
}
