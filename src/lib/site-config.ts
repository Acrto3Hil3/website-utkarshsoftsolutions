/**
 * Central site configuration.
 * All real-world links, contact details, and project URLs live HERE and only here.
 * Replace every value marked TODO before going live.
 */

export const siteConfig = {
  company: {
    name: 'Utkarsh Soft Solutions',
    shortName: 'UTKARSH',
    tagline: 'Build · Automate · Scale',
    description:
      'Utkarsh Soft Solutions delivers next-generation technical architecture and scalable AI automation — ERP, AI development, cloud services, and enterprise software.',
    url: 'https://utkarshsoftsolutions.com', // TODO: replace with the final production domain
    email: 'utkarshsoftsolutions@gmail.com',
    phone: '+91 62838 44258', // from the design export
    location: 'India', // TODO: city / address if desired
  },

  /**
   * Social links: overridable per-environment via VITE_* vars (see
   * .env.example) without touching code; the literals below are fallbacks.
   */
  social: {
    linkedin: (import.meta.env.VITE_LINKEDIN as string) || 'https://www.linkedin.com/company/TODO', // TODO
    github: (import.meta.env.VITE_GITHUB as string) || 'https://github.com/TODO', // TODO
    whatsapp: (import.meta.env.VITE_WHATSAPP as string) || 'https://wa.me/916283844258',
    portfolio: (import.meta.env.VITE_PORTFOLIO as string) || 'https://utkarshsoftsolutions.com', // TODO
    email: 'mailto:utkarshsoftsolutions@gmail.com',
    phone: 'tel:+916283844258',
  },

  /**
   * Live URLs for the Featured Projects cards, keyed by project title as it
   * appears in the design. Set `url` to the live URL, or `url: null` +
   * `confidential: true` for projects that cannot be linked publicly.
   * Cards without a url render a non-navigating CTA.
   */
  projects: {
    'Karma ERP': { url: null }, // TODO: live URL or confidential: true
    FieldSathi: { url: null }, // TODO
    AutoProof24: { url: null }, // TODO
    Filofax: { url: null }, // TODO
    'Malik Printers ERP': { url: null }, // TODO
    'Gupta Spare Parts': { url: null }, // TODO
  } as Record<string, { url: string | null; confidential?: boolean }>,

  nav: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Portfolio', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
} as const

export type SiteConfig = typeof siteConfig
