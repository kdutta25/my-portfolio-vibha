import type { Messages } from '../messages'

export const en: Messages = {
  meta: {
    title: 'Vibha Sharma — Portfolio',
    description:
      'Data Scientist — Power BI, SQL, Python, analytics across public sector and industry.',
  },
  nav: {
    about: 'About',
    projects: 'Projects',
    experience: 'Experience',
    contact: 'Contact',
    skipToContent: 'Skip to content',
  },
  hero: {
    role: 'Data Scientist',
    location: 'Ottawa, Ontario, Canada',
    tagline:
      'Transforming data into decisions — Power BI, SQL & NoSQL, Python, statistics, and data wrangling across finance, healthcare, agriculture, and the public sector.',
    ctaPrimary: 'View experience',
    ctaSecondary: 'Get in touch',
  },
  about: {
    title: 'About',
    portraitAlt: 'Professional portrait of Vibha Sharma',
    lead:
      'With five years of hands-on experience using Microsoft Power BI, SAP BusinessObjects, and the Microsoft BI stack, I turn raw data into actionable insight across diverse sectors.',
    p1:
      'I have worked in finance, healthcare, and agriculture, and I understand domain-specific challenges as a Data Scientist. My strengths include relational and multidimensional databases, system and data integration, reporting, analytics, and robust data management.',
    p2:
      'Past roles with Transport Canada, Agriculture and Agri-Food Canada, and Wipro Limited strengthened my appreciation for data-driven decisions in public and private organizations.',
    clearance:
      'Valid Canadian Reliability clearance until 2030 — committed to security and confidentiality.',
    stats: {
      years: '6+ years experience',
      domains: 'Finance · Healthcare · Agriculture · Public sector',
      clearanceLabel: 'Reliability clearance',
    },
  },
  projects: {
    title: 'Projects & highlights',
    subtitle:
      'Representative work themes from my roles — dashboards, integration, and analytics delivery.',
    items: {
      aafc: {
        title: 'Agriculture & public analytics',
        period: '2023 — Present',
        summary:
          'Data science and business intelligence for Agriculture and Agri-Food Canada — research-aligned analytics, reporting, and data solutions for a large government agency.',
        tags: 'Power BI · Data integration · Public sector',
      },
      transport: {
        title: 'Transport Canada — Power BI delivery',
        period: '2020 — 2022',
        summary:
          'Complex DAX in Power BI and Power Pivot, modeled datasets, published reports to Power BI Service and Report Server with SharePoint integration, and automated refreshes with PowerShell and scheduled tasks.',
        tags: 'DAX · Power Query · SharePoint · Automation',
      },
      wipro: {
        title: 'Wipro — cross-industry BI',
        period: '2015 — 2018',
        summary:
          'Power BI and Webi reporting over varied data including geospatial and healthcare sources, client-facing PoCs, SAP BusinessObjects universes, and data profiling for BI pipelines.',
        tags: 'SAP BO · Healthcare · Geospatial · Webi',
      },
    },
  },
  experience: {
    title: 'Experience',
    workHistory: 'Work history',
    education: 'Education',
    certifications: 'Certifications',
    jobs: {
      aafc_ds: {
        title: 'Data Scientist (Indeterminate)',
        org: 'Agriculture and Agri-Food Canada',
        period: 'Apr 2024 — Present',
        location: 'Ottawa, Canada',
        bullets: [
          'Data science and analytics in a government research and policy context.',
          'Continued delivery across the Microsoft BI ecosystem and related data platforms.',
        ],
      },
      aafc_bi: {
        title: 'Data Scientist — Business Intelligence Specialist',
        org: 'Agriculture and Agri-Food Canada',
        period: 'Jul 2023 — Apr 2024',
        location: 'Ottawa, Canada',
        bullets: [
          'Specialist-level BI and analytics within the Research branch.',
        ],
      },
      tc: {
        title: 'Programmer Analyst',
        org: 'Transport Canada',
        period: 'Jun 2020 — Mar 2022',
        location: 'Ottawa, Canada',
        bullets: [
          'Advanced DAX for Power BI and Power Pivot; computed tables and rich visuals.',
          'Published reports to Power BI Service and Report Server; SharePoint Online access.',
          'Automated Power Query refresh via PowerShell and Windows Task Scheduler.',
        ],
      },
      wipro: {
        title: 'Data Scientist',
        org: 'Wipro Limited',
        period: 'Dec 2015 — Aug 2018',
        location: 'Gurgaon, India',
        bullets: [
          'Power BI and Webi over diverse data including geospatial and healthcare.',
          'Client PoCs, SAP BO universes from the warehouse, and data profiling for BI.',
        ],
      },
    },
    edu: {
      masters: {
        degree: "Master's degree, Information Technology",
        school: 'University of Ottawa',
        period: '2018 — 2020',
        detail: 'Canada',
      },
      bachelors: {
        degree: "Bachelor's degree, Information Technology",
        school: 'Chandigarh Engineering College, Landran',
        period: '2011 — 2015',
      },
    },
    certs: {
      pbi: {
        name: 'Power BI Essential Training',
        issuer: 'LinkedIn Learning',
        issued: 'Oct 2022',
      },
      ssis: {
        name: 'SQL Server Integration Services',
        issuer: 'LinkedIn Learning',
        issued: 'Oct 2022',
      },
    },
  },
  contact: {
    title: 'Contact',
    subtitle: 'I’d welcome a conversation about data, analytics, or collaboration opportunities.',
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
    locationLabel: 'Location',
    formNote: 'Prefer email or LinkedIn — I respond when I can.',
  },
  footer: {
    rights: '© Vibha Sharma.',
    builtWith: 'Built with React & Vite',
  },
  controls: {
    theme: 'Theme',
    themeLight: 'Light',
    themeDark: 'Dark',
    themeEnhanced: 'Enhanced dark',
    language: 'Language',
  },
}
