/**
 * Live URLs for the Featured Projects cards, keyed by project title EXACTLY
 * as it appears in the design.
 *
 * Never hardcode project links in components.
 */

export interface ProjectLink {
  url: string | null;
  appUrl?: string | null;
  confidential?: boolean;
}

export const projectLinks: Record<string, ProjectLink> = {
  /**
   * Nature Touch Nutrition
   */
  'Karma ERP': {
    url: 'http://13.206.135.105',
  },

  /**
   * Nature Touch Nutrition
   */
  FieldSathi: {
    url: 'https://fieldsathi.com/',
    appUrl:
      'https://play.google.com/store/apps/details?id=com.fieldsathi.tms_sathi&pcampaignid=web_share',
  },

  /**
   * AutoProof24
   */
  AutoProof24: {
    url: null,
    appUrl:
      'https://play.google.com/store/apps/details?id=com.autoproof24.app&pcampaignid=web_share',
  },

  /**
   * eQuasar Solutions Client
   */
  Filofax: {
    url: null,
    confidential: true,
  },

  /**
   * Client ERP
   */
  'Malik Printers ERP': {
    url: null,
    confidential: true,
  },

  /**
   * Client Project
   */
  'Gupta Spare Parts': {
    url: null,
    confidential: true,
  },
};
