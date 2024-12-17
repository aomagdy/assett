export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  FAQS: '/faqs',
  HOW_IT_WORKS: '/how-it-works',
  MARKETPLACE: '/marketplace',
  FRACTIONALIZE: '/fractionalize',
  LOGIN: '/login',
  REGISTER: '/register',
  PRIVACY_POLICY: '/privacy-policy',
  TERMS: '/terms',
  NOT_FOUND: '/404'
} as const;

export const APP_CONFIG = {
  APP_NAME: 'BRiX Assets',
  CONTACT_EMAIL: 'info@brixasset.com',
  SUPPORT_EMAIL: 'support@brixasset.com',
  MIN_INVESTMENT: 100,
  CURRENCY: 'USD',
  SOCIAL_LINKS: {
    TWITTER: 'https://twitter.com/brixassets',
    LINKEDIN: 'https://linkedin.com/company/brixassets',
    FACEBOOK: 'https://facebook.com/brixassets'
  }
} as const;

export const COMPANY_INFO = {
  NAME: 'BRiX Assets',
  TAGLINE: 'Institutional-Grade Investment Platform',
  FOUNDING_YEAR: 2018,
  ADDRESS: {
    STREET: '1250 Broadway',
    SUITE: 'Suite 3700',
    CITY: 'New York',
    STATE: 'NY',
    ZIP: '10001',
    COUNTRY: 'United States'
  },
  PHONE: '+1 (212) 555-0123'
} as const;