/**
 * Aggregated site configuration consumed by components.
 *
 * ▶ EDIT YOUR DATA IN:
 *   - src/config/company.ts   (company, contact, hours, social, SEO, nav)
 *   - src/config/projects.ts  (project live URLs)
 *
 * This module only combines those sources; do not put data here.
 */
import { companyConfig } from '../config/company'
import { projectLinks } from '../config/projects'

export const siteConfig = {
  ...companyConfig,
  projects: projectLinks,
} as const

export type SiteConfig = typeof siteConfig
