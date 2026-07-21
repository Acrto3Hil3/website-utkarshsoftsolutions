/**
 * Live URLs for the Featured Projects cards, keyed by project title EXACTLY
 * as it appears in the design. Never hardcode project links in components.
 *
 * - `url`: the live URL (card CTA becomes a real link)
 * - `url: null, confidential: true`: renders the design's "Confidential" label
 * - `url: null`: non-navigating placeholder CTA
 */
export interface ProjectLink {
  url: string | null
  confidential?: boolean
}

export const projectLinks: Record<string, ProjectLink> = {
  'Karma ERP': { url: null }, // TODO: live URL or confidential: true
  FieldSathi: { url: null }, // TODO
  AutoProof24: { url: null }, // TODO
  Filofax: { url: null }, // TODO
  'Malik Printers ERP': { url: null }, // TODO
  'Gupta Spare Parts': { url: null }, // TODO
}
