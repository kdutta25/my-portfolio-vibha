import type { Messages } from '../messages'

export const fr: Messages = {
  meta: {
    title: 'Vibha Sharma — Portfolio',
    description:
      'Scientifique des données — Power BI, SQL, Python, analyses dans le secteur public et l’industrie.',
  },
  nav: {
    about: 'À propos',
    projects: 'Projets',
    experience: 'Expérience',
    contact: 'Contact',
    skipToContent: 'Aller au contenu',
  },
  hero: {
    role: 'Scientifique des données',
    location: 'Ottawa, Ontario, Canada',
    tagline:
      'Transformer les données en décisions — Power BI, SQL et NoSQL, Python, statistiques et préparation des données dans la finance, la santé, l’agriculture et le secteur public.',
    ctaPrimary: 'Voir l’expérience',
    ctaSecondary: 'Me contacter',
  },
  about: {
    title: 'À propos',
    portraitAlt: 'Portrait professionnel de Vibha Sharma',
    lead:
      'Avec cinq années d’expérience pratique sur Microsoft Power BI, SAP BusinessObjects et la suite Microsoft BI, je transforme des données brutes en insights exploitables dans plusieurs secteurs.',
    p1:
      'J’ai travaillé dans la finance, la santé et l’agriculture, et je comprends les enjeux métiers en tant que scientifique des données. Mes forces incluent les bases relationnelles et multidimensionnelles, l’intégration système et données, la reporting, l’analytique et une gestion rigoureuse des données.',
    p2:
      'Des missions chez Transports Canada, Agriculture et Agroalimentaire Canada et Wipro Limited ont renforcé mon goût pour la décision fondée sur les données dans les organisations publiques et privées.',
    clearance:
      'Habilitation canadienne « Fiabilité » valide jusqu’en 2030 — engagement envers la sécurité et la confidentialité.',
    stats: {
      years: 'Plus de 6 ans d’expérience',
      domains: 'Finance · Santé · Agriculture · Secteur public',
      clearanceLabel: 'Habilitation Fiabilité',
    },
  },
  projects: {
    title: 'Projets et temps forts',
    subtitle:
      'Thèmes représentatifs de mes missions — tableaux de bord, intégration et livraison analytique.',
    items: {
      aafc: {
        title: 'Agriculture et analytique publique',
        period: '2023 — Présent',
        summary:
          'Science des données et business intelligence pour Agriculture et Agroalimentaire Canada — analytique alignée sur la recherche, reporting et solutions data pour une grande agence fédérale.',
        tags: 'Power BI · Intégration de données · Secteur public',
      },
      transport: {
        title: 'Transports Canada — livraison Power BI',
        period: '2020 — 2022',
        summary:
          'DAX avancé dans Power BI et Power Pivot, modèles de données, publication vers Power BI Service et Report Server avec SharePoint, rafraîchissements automatisés via PowerShell et planification.',
        tags: 'DAX · Power Query · SharePoint · Automatisation',
      },
      wipro: {
        title: 'Wipro — BI multi-secteurs',
        period: '2015 — 2018',
        summary:
          'Rapports Power BI et Webi sur des données variées dont géospatiales et santé, PoC clients, univers SAP BusinessObjects et profilage de données pour les pipelines BI.',
        tags: 'SAP BO · Santé · Géospatial · Webi',
      },
    },
  },
  experience: {
    title: 'Expérience',
    workHistory: 'Parcours professionnel',
    education: 'Formation',
    certifications: 'Certifications',
    jobs: {
      aafc_ds: {
        title: 'Scientifique des données (indéterminé)',
        org: 'Agriculture et Agroalimentaire Canada',
        period: 'avr. 2024 — Présent',
        location: 'Ottawa, Canada',
        bullets: [
          'Science des données et analytique dans un contexte de recherche et de politiques publiques.',
          'Poursuite de la livraison sur l’écosystème Microsoft BI et plateformes data associées.',
        ],
      },
      aafc_bi: {
        title: 'Scientifique des données — Spécialiste en intelligence d’affaires',
        org: 'Agriculture et Agroalimentaire Canada',
        period: 'juil. 2023 — avr. 2024',
        location: 'Ottawa, Canada',
        bullets: ['BI et analytique de niveau spécialiste au sein de la direction Recherche.'],
      },
      tc: {
        title: 'Analyste-programmeur',
        org: 'Transports Canada',
        period: 'juin 2020 — mars 2022',
        location: 'Ottawa, Canada',
        bullets: [
          'DAX avancé pour Power BI et Power Pivot ; tables calculées et visualisations.',
          'Publication vers Power BI Service et Report Server ; accès via SharePoint Online.',
          'Rafraîchissement automatisé de Power Query via PowerShell et le Planificateur de tâches.',
        ],
      },
      wipro: {
        title: 'Scientifique des données',
        org: 'Wipro Limited',
        period: 'déc. 2015 — août 2018',
        location: 'Gurgaon, Inde',
        bullets: [
          'Power BI et Webi sur des données variées, dont géospatiales et santé.',
          'PoC clients, univers SAP BO depuis l’entrepôt et profilage pour la BI.',
        ],
      },
    },
    edu: {
      masters: {
        degree: 'Maîtrise en technologies de l’information',
        school: 'Université d’Ottawa',
        period: '2018 — 2020',
        detail: 'Canada',
      },
      bachelors: {
        degree: 'Baccalauréat en technologies de l’information',
        school: 'Chandigarh Engineering College, Landran',
        period: '2011 — 2015',
      },
    },
    certs: {
      pbi: {
        name: 'Formation essentielle sur Power BI',
        issuer: 'LinkedIn Learning',
        issued: 'oct. 2022',
      },
      ssis: {
        name: 'SQL Server Integration Services',
        issuer: 'LinkedIn Learning',
        issued: 'oct. 2022',
      },
    },
  },
  contact: {
    title: 'Contact',
    subtitle:
      'Je serais ravie d’échanger sur la data, l’analytique ou des opportunités de collaboration.',
    emailLabel: 'Courriel',
    linkedinLabel: 'LinkedIn',
    locationLabel: 'Lieu',
    formNote: 'De préférence par courriel ou LinkedIn — je réponds dès que possible.',
  },
  footer: {
    rights: '© Vibha Sharma.',
    builtWith: 'Réalisé avec React et Vite',
  },
  controls: {
    theme: 'Thème',
    themeLight: 'Clair',
    themeDark: 'Sombre',
    themeEnhanced: 'Sombre renforcé',
    language: 'Langue',
  },
}
