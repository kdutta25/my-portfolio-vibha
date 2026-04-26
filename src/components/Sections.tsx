import { CERT_LINKS, PORTRAIT_SRC, PROFILE } from '../data/constants'
import { useI18n } from '../i18n/I18nContext'
import {
  AboutGrid,
  BulletItem,
  BulletList,
  Card,
  CardBody,
  CardGrid,
  CardPeriod,
  CardTags,
  CardTitle,
  CertChip,
  CertMuted,
  CertRow,
  CertStrong,
  ContentColumn,
  ContactCard,
  ContactGrid,
  ContactLabel,
  ContactValue,
  EduCard,
  EduGrid,
  EduSpan,
  EduStrong,
  FooterInner,
  FooterLine,
  FooterRoot,
  Hint,
  InlineLink,
  JobCard,
  JobHeader,
  JobMeta,
  JobOrg,
  JobTitle,
  Portrait,
  Prose,
  ProseBlock,
  Section,
  SectionHead,
  SectionLead,
  SectionTitle,
  StackCol,
  StatCard,
  StatLabel,
  StatsGrid,
  StatSub,
  Strong,
  Subsection,
  SubTitle,
  Timeline,
} from '../styled/layout'

const JOB_ORDER = ['aafc_ds', 'aafc_bi', 'tc', 'wipro'] as const
const PROJECT_ORDER = ['aafc', 'transport', 'wipro'] as const

export function AboutSection() {
  const { t } = useI18n()
  return (
    <Section id="about" data-cy="section-about">
      <SectionHead id="component-about-head">
        <SectionTitle id="component-about-title" role="heading" aria-level={2}>
          {t.about.title}
        </SectionTitle>
      </SectionHead>
      <AboutGrid id="component-about-grid">
        <Portrait
          id="component-about-portrait"
          $src={PORTRAIT_SRC}
          role="img"
          aria-label={t.about.portraitAlt}
          data-cy="portrait"
        />
        <ContentColumn id="component-about-content">
          <Prose id="component-about-prose">
            <ProseBlock id="component-about-lead">{t.about.lead}</ProseBlock>
            <ProseBlock id="component-about-p1">{t.about.p1}</ProseBlock>
            <ProseBlock id="component-about-p2">{t.about.p2}</ProseBlock>
            <ProseBlock id="component-about-clearance-block">
              <Strong id="component-about-clearance">{t.about.clearance}</Strong>
            </ProseBlock>
          </Prose>
          <StatsGrid id="component-about-stats">
            <StatCard id="component-about-stat-experience">
              <StatLabel id="component-about-stat-experience-label">{t.about.stats.years}</StatLabel>
              <StatSub id="component-about-stat-experience-sub">{t.about.stats.domains}</StatSub>
            </StatCard>
            <StatCard id="component-about-stat-clearance">
              <StatLabel id="component-about-stat-clearance-label">{t.about.stats.clearanceLabel}</StatLabel>
              <StatSub id="component-about-stat-clearance-sub">2030</StatSub>
            </StatCard>
          </StatsGrid>
        </ContentColumn>
      </AboutGrid>
    </Section>
  )
}

export function ProjectsSection() {
  const { t } = useI18n()
  return (
    <Section id="projects" $alt data-cy="section-projects" style={{ paddingTop: '2rem' }}>
      <SectionHead id="component-projects-head">
        <SectionTitle id="component-projects-title" role="heading" aria-level={2}>
          {t.projects.title}
        </SectionTitle>
        <SectionLead id="component-projects-subtitle">{t.projects.subtitle}</SectionLead>
      </SectionHead>
      <CardGrid id="component-projects-grid">
        {PROJECT_ORDER.map((key) => {
          const item = t.projects.items[key]
          return (
            <Card key={key} id={`component-project-card-${key}`} data-cy={`project-${key}`}>
              <CardPeriod id={`component-project-${key}-period`}>{item.period}</CardPeriod>
              <CardTitle id={`component-project-${key}-title`}>{item.title}</CardTitle>
              <CardBody id={`component-project-${key}-body`}>{item.summary}</CardBody>
              <CardTags id={`component-project-${key}-tags`}>{item.tags}</CardTags>
            </Card>
          )
        })}
      </CardGrid>
    </Section>
  )
}

export function ExperienceSection() {
  const { t } = useI18n()
  return (
    <Section id="experience" data-cy="section-experience">
      <SectionHead id="component-experience-head">
        <SectionTitle id="component-experience-title" role="heading" aria-level={2}>
          {t.experience.title}
        </SectionTitle>
      </SectionHead>

      <Subsection id="component-experience-workhistory-sub" $tightTop>
        <SubTitle id="component-experience-workhistory-title" role="heading" aria-level={3}>
          {t.experience.workHistory}
        </SubTitle>
      </Subsection>
      <Timeline id="component-experience-timeline">
        {JOB_ORDER.map((key) => {
          const job = t.experience.jobs[key]
          return (
            <JobCard key={key} id={`component-experience-job-${key}`} data-cy={`job-${key}`}>
              <JobHeader id={`component-experience-job-${key}-header`}>
                <StackCol id={`component-experience-job-${key}-titles`}>
                  <JobTitle id={`component-experience-job-${key}-title`}>{job.title}</JobTitle>
                  <JobOrg id={`component-experience-job-${key}-org`}>{job.org}</JobOrg>
                </StackCol>
                <JobMeta id={`component-experience-job-${key}-meta`}>
                  {job.period}
                  {job.location ? ` · ${job.location}` : ''}
                </JobMeta>
              </JobHeader>
              <BulletList id={`component-experience-job-${key}-bullets`} role="list">
                {job.bullets.map((b, i) => (
                  <BulletItem
                    key={`${key}-${i}`}
                    id={`component-experience-job-${key}-bullet-${i}`}
                    role="listitem"
                  >
                    {b}
                  </BulletItem>
                ))}
              </BulletList>
            </JobCard>
          )
        })}
      </Timeline>

      <Subsection id="component-experience-education-sub">
        <SubTitle id="component-experience-education-title" role="heading" aria-level={3}>
          {t.experience.education}
        </SubTitle>
        <EduGrid id="component-experience-edu-grid">
          <EduCard id="component-experience-edu-masters">
            <EduStrong id="component-experience-edu-masters-degree">
              {t.experience.edu.masters.degree}
            </EduStrong>
            <EduSpan id="component-experience-edu-masters-meta">
              {t.experience.edu.masters.school} · {t.experience.edu.masters.period}
              {t.experience.edu.masters.detail ? ` · ${t.experience.edu.masters.detail}` : ''}
            </EduSpan>
          </EduCard>
          <EduCard id="component-experience-edu-bachelors">
            <EduStrong id="component-experience-edu-bachelors-degree">
              {t.experience.edu.bachelors.degree}
            </EduStrong>
            <EduSpan id="component-experience-edu-bachelors-meta">
              {t.experience.edu.bachelors.school} · {t.experience.edu.bachelors.period}
            </EduSpan>
          </EduCard>
        </EduGrid>
      </Subsection>

      <Subsection id="component-experience-certs-sub">
        <SubTitle id="component-experience-certs-title" role="heading" aria-level={3}>
          {t.experience.certifications}
        </SubTitle>
        <CertRow id="component-experience-certs-row">
          <CertChip
            id="component-experience-cert-pbi"
            href={CERT_LINKS.powerBi}
            target="_blank"
            rel="noreferrer"
            data-cy="cert-pbi"
          >
            <CertStrong id="component-experience-cert-pbi-name">{t.experience.certs.pbi.name}</CertStrong>
            <CertMuted id="component-experience-cert-pbi-meta">
              {t.experience.certs.pbi.issuer} · {t.experience.certs.pbi.issued}
            </CertMuted>
          </CertChip>
          <CertChip
            id="component-experience-cert-ssis"
            href={CERT_LINKS.ssis}
            target="_blank"
            rel="noreferrer"
            data-cy="cert-ssis"
          >
            <CertStrong id="component-experience-cert-ssis-name">{t.experience.certs.ssis.name}</CertStrong>
            <CertMuted id="component-experience-cert-ssis-meta">
              {t.experience.certs.ssis.issuer} · {t.experience.certs.ssis.issued}
            </CertMuted>
          </CertChip>
        </CertRow>
      </Subsection>
    </Section>
  )
}

export function ContactSection() {
  const { t } = useI18n()
  return (
    <Section id="contact" data-cy="section-contact">
      <SectionHead id="component-contact-head">
        <SectionTitle id="component-contact-title" role="heading" aria-level={2}>
          {t.contact.title}
        </SectionTitle>
        <SectionLead id="component-contact-subtitle">{t.contact.subtitle}</SectionLead>
      </SectionHead>
      <Hint id="component-contact-hint">{t.contact.formNote}</Hint>
      <ContactGrid id="component-contact-grid">
        <ContactCard id="component-contact-card-email">
          <ContactLabel id="component-contact-label-email">{t.contact.emailLabel}</ContactLabel>
          <ContactValue id="component-contact-value-email">
            <InlineLink id="component-contact-link-email" href={`mailto:${PROFILE.email}`}>
              {PROFILE.email}
            </InlineLink>
          </ContactValue>
        </ContactCard>
        <ContactCard id="component-contact-card-linkedin">
          <ContactLabel id="component-contact-label-linkedin">{t.contact.linkedinLabel}</ContactLabel>
          <ContactValue id="component-contact-value-linkedin">
            <InlineLink
              id="component-contact-link-linkedin"
              href={PROFILE.linkedInUrl}
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/vibha-sharma-94725183
            </InlineLink>
          </ContactValue>
        </ContactCard>
        <ContactCard id="component-contact-card-location">
          <ContactLabel id="component-contact-label-location">{t.contact.locationLabel}</ContactLabel>
          <ContactValue id="component-contact-value-location">{t.hero.location}</ContactValue>
        </ContactCard>
      </ContactGrid>
    </Section>
  )
}

export function SiteFooter() {
  const { t } = useI18n()
  return (
    <FooterRoot id="component-footer-root" data-cy="footer">
      <FooterInner id="component-footer-inner">
        <FooterLine id="component-footer-rights">{t.footer.rights}</FooterLine>
        <FooterLine id="component-footer-built">{t.footer.builtWith}</FooterLine>
      </FooterInner>
    </FooterRoot>
  )
}
