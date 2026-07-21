/**
 * Central company configuration — EVERYTHING editable from one place.
 * VITE_* env vars (see .env.example) override the literals at build time.
 */

const env = (key: string): string | undefined => {
  const v = import.meta.env[key] as string | undefined
  return v && v.trim() !== '' ? v : undefined
}

export const companyConfig = {
  company: {
    name: env('VITE_APP_NAME') ?? 'Utkarsh Soft Solutions',
    shortName: 'UTKARSH',
    tagline: 'Build · Automate · Scale',
    description:
      'Custom Software Development, AI Solutions, ERP, Cloud Infrastructure, Automation & Digital Transformation.',
    url: env('VITE_APP_URL') ?? 'https://utkarshsoftsolutions.com', // TODO: final production domain
    email: 'utkarshsoftsolutions@gmail.com',
    founderEmail: 'subhashyadav98146@gmail.com',
    phone: '+91 62838 44258',
    location: 'Remote · Serving Clients Across India & Worldwide',
  },

  businessHours: {
    weekdays: 'Mon–Fri 09:00–17:00 IST',
    saturday: 'Sat 10:00–16:00 IST',
    responseTime: 'Within 24 business hours',
  },

  seo: {
    defaultTitle: 'Utkarsh Soft Solutions — Enterprise AI, ERP & Cloud Engineering',
    defaultDescription:
      'Custom Software Development, AI Solutions, ERP, Cloud Infrastructure, Automation & Digital Transformation.',
  },

  social: {
    linkedin: env('VITE_LINKEDIN') ?? 'https://www.linkedin.com/company/utkarsh-soft-solutions/',
    founderLinkedin:
      env('VITE_FOUNDER_LINKEDIN') ?? 'https://www.linkedin.com/in/subhash-yadav-backdev',
    facebook: env('VITE_FACEBOOK') ?? 'https://www.facebook.com/share/14e2ZaufKDh/',
    github: env('VITE_GITHUB') ?? 'https://github.com/Acrto3Hil3/website-utkarshsoftsolutions',
    whatsapp: env('VITE_WHATSAPP') ?? 'https://wa.me/916283844258',
    portfolio: env('VITE_PORTFOLIO') ?? 'https://utkarshsoftsolutions.com', // TODO: portfolio URL
    email: 'mailto:utkarshsoftsolutions@gmail.com',
    phone: 'tel:+916283844258',
  },

  nav: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Portfolio', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
} as const

export type CompanyConfig = typeof companyConfig
