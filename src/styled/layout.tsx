import styled, { css } from 'styled-components'

const mediaMd = (inner: ReturnType<typeof css>) => css`
  @media (min-width: 768px) {
    ${inner}
  }
`

const mediaSm = (inner: ReturnType<typeof css>) => css`
  @media (min-width: 640px) {
    ${inner}
  }
`

export const Shell = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const SkipLink = styled.a.attrs({
  'data-print-hide': true,
  'data-cy': 'skip-link',
})`
  position: absolute;
  left: -999px;
  top: 0.75rem;
  padding: 0.5rem 1rem;
  background: var(--accent);
  color: var(--bg);
  border-radius: 8px;
  z-index: 1000;
  font-weight: 600;
  &:focus {
    left: 0.75rem;
  }
`

export const NavRoot = styled.div.attrs({ 'data-print-hide': true })`
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  background: var(--nav-bg);
  border-bottom: 1px solid var(--border);
`

export const NavInner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0.85rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`

export const BrandLink = styled.a`
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.15rem;
  letter-spacing: -0.02em;
  color: var(--text);
  white-space: nowrap;
  & span {
    background: linear-gradient(120deg, var(--accent), var(--accent-2));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`

export const NavLinks = styled.div`
  display: none;
  align-items: center;
  gap: 0.25rem;
  ${mediaMd(css`
    display: flex;
  `)}
`

export const InlineLink = styled.a`
  color: var(--accent);
`

export const NavTextLink = styled.a`
  color: var(--text-muted);
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.45rem 0.75rem;
  border-radius: 8px;
  transition:
    background 0.15s ease,
    color 0.15s ease;
  &:hover {
    color: var(--text);
    background: var(--surface-2);
    opacity: 1;
  }
`

export const NavControls = styled.div.attrs({ 'data-print-hide': true })`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const MenuRoot = styled.div`
  position: relative;
`

export const MenuButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 0.65rem;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  font-family: inherit;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  transition:
    border-color 0.15s ease,
    transform 0.12s ease;
  &:hover {
    border-color: var(--accent);
  }
  &:active {
    transform: scale(0.98);
  }
`

export const MenuPanel = styled.div<{ $open: boolean }>`
  position: absolute;
  right: 0;
  top: calc(100% + 6px);
  min-width: 11rem;
  padding: 0.35rem;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--bg-elevated);
  box-shadow: var(--shadow);
  display: ${({ $open }) => ($open ? 'flex' : 'none')};
  flex-direction: column;
  gap: 2px;
`

export const MenuItem = styled.button<{ $active?: boolean }>`
  width: 100%;
  text-align: left;
  padding: 0.5rem 0.65rem;
  border: none;
  border-radius: 8px;
  background: ${({ $active }) => ($active ? 'var(--code-bg)' : 'transparent')};
  color: ${({ $active }) => ($active ? 'var(--accent)' : 'var(--text)')};
  font-family: inherit;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.12s ease;
  &:hover {
    background: var(--surface-2);
  }
`

export const NavMobile = styled.div.attrs({ 'data-print-hide': true })`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  padding: 0.65rem 1.25rem 1rem;
  border-bottom: 1px solid var(--border);
  background: var(--nav-bg);
  ${mediaMd(css`
    display: none;
  `)}
`

export const NavMobileLink = styled.a`
  font-size: 0.82rem;
  font-weight: 600;
  padding: 0.4rem 0.65rem;
  border-radius: 8px;
  color: var(--text-muted);
  background: var(--surface);
  border: 1px solid var(--border);
`

export const Main = styled.div`
  flex: 1;
`

export const HeroRoot = styled.div`
  position: relative;
  overflow: hidden;
  background: var(--gradient-hero);
`

export const HeroGlow = styled.div`
  pointer-events: none;
  position: absolute;
  width: 55%;
  max-width: 480px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(107, 76, 230, 0.22) 0%,
    transparent 70%
  );
  top: -20%;
  right: -10%;
  filter: blur(2px);
  [data-theme='dark'] &,
  [data-theme='enhanced-dark'] & {
    background: radial-gradient(
      circle,
      rgba(167, 139, 250, 0.18) 0%,
      transparent 70%
    );
  }
`

export const HeroInner = styled.div.attrs({ 'data-hero-inner': true })`
  position: relative;
  max-width: 1120px;
  margin: 0 auto;
  padding: 4.5rem 1.25rem 4rem;
  ${mediaMd(css`
    padding: 5.5rem 1.5rem 4.5rem;
  `)}
`

export const HeroEyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--accent);
  margin-bottom: 1rem;
  &::before {
    content: '';
    width: 28px;
    height: 2px;
    border-radius: 2px;
    background: linear-gradient(90deg, var(--accent), var(--accent-2));
  }
`

export const HeroTitle = styled.div`
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(2.25rem, 5vw, 3.35rem);
  line-height: 1.12;
  letter-spacing: -0.03em;
  margin: 0 0 0.75rem;
  color: var(--text);
`

export const HeroMuted = styled.div`
  font-size: 0.95rem;
  color: var(--text-muted);
  margin: 0 0 1.5rem;
`

export const HeroTagline = styled.div`
  max-width: 38rem;
  font-size: 1.05rem;
  color: var(--text-muted);
  margin: 0 0 2rem;
  line-height: 1.65;
`

export const HeroActions = styled.div.attrs({ 'data-print-hide': true })`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`

export const BtnPrimary = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.35rem;
  border-radius: 12px;
  font-family: inherit;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #fff;
  box-shadow: 0 10px 28px rgba(107, 76, 230, 0.35);
  transition:
    transform 0.12s ease,
    box-shadow 0.15s ease;
  &:active {
    transform: scale(0.98);
  }
  [data-theme='dark'] & {
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.4);
  }
`

export const BtnGhost = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.35rem;
  border-radius: 12px;
  font-family: inherit;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  background: var(--surface);
  color: var(--text);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
  transition: transform 0.12s ease;
  &:active {
    transform: scale(0.98);
  }
`

export const Section = styled.div<{ $alt?: boolean }>`
  max-width: 1120px;
  margin: 0 auto;
  padding: 4rem 1.25rem;
  ${({ $alt }) =>
    $alt
      ? css`
          background: linear-gradient(
            180deg,
            transparent 0%,
            var(--surface-2) 12%,
            var(--surface-2) 88%,
            transparent 100%
          );
        `
      : ''}
`

export const SectionHead = styled.div`
  margin-bottom: 2rem;
`

export const SectionTitle = styled.div`
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 3vw, 2.1rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  margin: 0 0 0.5rem;
  color: var(--text);
`

export const SectionLead = styled.div`
  margin: 0;
  color: var(--text-muted);
  max-width: 40rem;
  font-size: 1.02rem;
`

export const StackCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`

export const ContentColumn = styled.div`
  min-width: 0;
`

export const FooterLine = styled.div``

export const AboutGrid = styled.div`
  display: grid;
  gap: 2rem;
  align-items: start;
  ${mediaMd(css`
    grid-template-columns: minmax(200px, 280px) 1fr;
  `)}
`

export const Portrait = styled.div<{ $src: string }>`
  width: min(280px, 100%);
  max-width: 280px;
  margin: 0 auto;
  aspect-ratio: 1;
  border-radius: 50%;
  background-image: url(${({ $src }) => $src});
  background-size: 118%;
  background-position: center 12%;
  border: 4px solid var(--border);
  box-shadow: var(--shadow);
`

export const Prose = styled.div`
  font-size: 1.02rem;
  color: var(--text-muted);
  line-height: 1.75;
  max-width: 48rem;
`

export const ProseBlock = styled.div`
  margin: 0 0 1.1rem;
`

export const Strong = styled.span`
  font-weight: 700;
`

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`

export const StatCard = styled.div`
  padding: 1rem 1.15rem;
  border-radius: 14px;
  background: var(--surface-2);
  border: 1px solid var(--border);
`

export const StatLabel = styled.div`
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 0.25rem;
`

export const StatSub = styled.div`
  font-size: 0.8rem;
  color: var(--text-muted);
`

export const CardGrid = styled.div`
  display: grid;
  gap: 1.25rem;
  ${mediaMd(css`
    grid-template-columns: repeat(3, 1fr);
  `)}
`

export const Card = styled.div.attrs({ 'data-print-card': true })`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 1.35rem 1.4rem;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition:
    border-color 0.2s ease,
    transform 0.2s ease;
  &:hover {
    border-color: rgba(107, 76, 230, 0.28);
    transform: translateY(-2px);
  }
  [data-theme='enhanced-dark'] &:hover {
    border-color: rgba(94, 234, 212, 0.35);
  }
`

export const CardPeriod = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.06em;
`

export const CardTitle = styled.div`
  margin: 0;
  font-size: 1.08rem;
  font-weight: 700;
  color: var(--text);
`

export const CardBody = styled.div`
  font-size: 0.92rem;
  color: var(--text-muted);
  flex: 1;
  line-height: 1.6;
`

export const CardTags = styled.div`
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--text-muted);
  padding-top: 0.25rem;
  border-top: 1px dashed var(--border);
`

export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const JobCard = styled.div.attrs({ 'data-print-card': true })`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 1.35rem 1.5rem;
  box-shadow: var(--shadow-sm);
`

export const JobHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-bottom: 0.85rem;
  ${mediaSm(css`
    flex-direction: row;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: 0.5rem 1rem;
  `)}
`

export const JobTitle = styled.div`
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text);
`

export const JobOrg = styled.div`
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--accent);
`

export const JobMeta = styled.div`
  font-size: 0.85rem;
  color: var(--text-muted);
`

export const BulletList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin: 0;
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
`

export const BulletItem = styled.div`
  position: relative;
  padding-left: 1rem;
  &::before {
    content: '•';
    position: absolute;
    left: 0;
  }
`

export const Subsection = styled.div<{ $tightTop?: boolean }>`
  margin-top: ${({ $tightTop }) => ($tightTop ? '0' : '2.5rem')};
`

export const SubTitle = styled.div`
  font-family: var(--font-display);
  font-size: 1.25rem;
  margin: 0 0 1rem;
  color: var(--text);
`

export const EduGrid = styled.div`
  display: grid;
  gap: 1rem;
  ${mediaSm(css`
    grid-template-columns: 1fr 1fr;
  `)}
`

export const EduCard = styled.div`
  padding: 1.15rem 1.25rem;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: var(--surface-2);
`

export const EduStrong = styled.div`
  color: var(--text);
  font-size: 0.95rem;
  margin-bottom: 0.35rem;
  font-weight: 700;
`

export const EduSpan = styled.div`
  font-size: 0.88rem;
  color: var(--text-muted);
`

export const CertRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`

export const CertChip = styled.a`
  display: inline-flex;
  flex-direction: column;
  gap: 0.15rem;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--surface);
  font-size: 0.85rem;
  transition: border-color 0.15s ease;
  &:hover {
    border-color: var(--accent);
    opacity: 1;
  }
`

export const CertStrong = styled.span`
  color: var(--text);
  font-weight: 700;
`

export const CertMuted = styled.span`
  color: var(--text-muted);
  font-size: 0.78rem;
`

export const Hint = styled.div`
  font-size: 0.85rem;
  color: var(--text-muted);
  margin: 0 0 1.5rem;
`

export const ContactGrid = styled.div`
  display: grid;
  gap: 1rem;
  ${mediaSm(css`
    grid-template-columns: repeat(3, 1fr);
  `)}
`

export const ContactCard = styled.div`
  padding: 1.25rem;
  border-radius: 16px;
  border: 1px solid var(--border);
  background: var(--surface);
  box-shadow: var(--shadow-sm);
`

export const ContactLabel = styled.div`
  margin: 0 0 0.35rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
`

export const ContactValue = styled.div`
  margin: 0;
  font-size: 0.95rem;
  font-weight: 600;
  word-break: break-word;
`

export const FooterRoot = styled.div`
  margin-top: auto;
  padding: 2rem 1.25rem;
  border-top: 1px solid var(--border);
  background: var(--surface-2);
`

export const FooterInner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
  font-size: 0.82rem;
  color: var(--text-muted);
`
