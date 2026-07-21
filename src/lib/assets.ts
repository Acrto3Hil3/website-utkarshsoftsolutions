/**
 * Asset manifest — every image used by the Stitch design export.
 *
 * Where the export shipped a local file, we import it (self-hosted, optimized
 * by Vite). Where only the Stitch CDN URL exists, we keep the exact exported
 * URL. Run `node scripts/download-assets.mjs` on your machine to download the
 * remaining remote images into src/assets/images and switch them to imports.
 */
import logoPng from '../assets/images/logo.webp'
import founderPortraitPng from '../assets/images/founder-portrait.webp'
import heroVisualizationPng from '../assets/images/hero-visualization.webp'
import enterpriseIllustrationPng from '../assets/images/enterprise-illustration.webp'

export const assets = {
  /** Company logo (circular badge). Local, from export. */
  logo: logoPng,
  /** Hero right-side "AI Architecture Visualization". Local, from export. */
  heroVisualization: heroVisualizationPng,
  /** Founder portrait — Subhash Yadav. Local, from export. */
  founderPortrait: founderPortraitPng,
  /** Trust section: circuit-pathways workspace visual. Local, from export. */
  trustWorkspace: enterpriseIllustrationPng,

  /** Trust section wordmark/logo variant (as exported). */
  trustLogo:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuASB3huoZOJ2AO8ukW7jlMMh_iUKkW6aLpQjq2w_voP0wyjuLuDC28TP9eWt0UUWXGTgVtCObTzidRRFSZTqLOaMgi3svgurjg1z3dhKMk_RosumuUYf_gsPn6QbaTZrk3KviqG21FoAh72B8xGNhlsi4birLvz08nwy7n9o50P5w6diRm-XWdMVf7yOmGB2pJXwT5tBMENoTSBhUrxFAYXimyN3JZg6QvUFXU6tisUTe13djGFRMwTTB1fcIYQhsFlrXKBFeXK_sA=s1600',
  /** Why Choose Us: decorative noise/background texture (as exported; unused — kept for the download script). */
  whyChooseUsIllustration:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAYXFos5gSFhWmm1fF32GePRe3ry2QV40oIlbNGyni9mBMFu9AZKvoz1hj9YU3c6jwGlLWfeL6DInoCzMQXveLk0XZFl5XhAVQ6QNVo5y6AqBTEdeGP60JG2chC0n8Ma5b_3Vk0mYN6A3iTv5OSmutuLazSRwQTOYi7Bjz17dIuRMUDlFcSbqhZHobC36we6BVNw0VvBykcTORkkzGinHKdNcTG9iMwtsM0aqpe-bvCwEntd0JMjihxINRlHuYLXYaMqp6J-onSJ-g=s1600',
  /** Why Choose Us: holographic brain illustration (as exported). */
  whyChooseUsSecondary:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBMF8J_foLo3WSMgt1jhORnbUvcuwdFSx_0zwIh_cJLJfJIoccyRmQ7i3_aX2IP3x2vj3vzQmK1q1yWrA7wKDE7m7cJH_ldZ6laJ-MSqn3PSaO0YYbrmg4-SfrIyPzhosyo8jJhE0K8ZSLjHDRMjR1eP3h8Rimy5kwg8otAS8Fz8cXyXPUNoMWAtw3lWq4wlOabIT9Im8-Q6Fxs49QxIDJLEjATLnda4uhe_dt2Vvt0G9UesjyximiGPzUftEjLTrtW5xFv83nNcuQ=s1600',
  /** Development process section visual (as exported). */
  processVisual:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDLQkCDb4ytmetVzTMl_4L8FK29DUCJJ1E_wvFtT9fr3NLiRTJbsSrM5SAZIUW73INbLmn8vrjUtEc5z1Pf6bwXUHxvAqRdXXmZ6RLrfTLdFSxYxk78TQx4i38-XeH080hRzX7GlrElTEtpcdy4Nokkvg2iC25e11p4XZ9VZueEElVCWjs1ZmowwV_BUr3CyjwQ6B28Pz2ww1xgbEp2vFmq5BB8quHePLLP8JbTr5LGx8lCsQGOUYBrXpdQjPOzXrsCu-hgZY2nZnE=s1600',
  /** Founder section secondary visual (as exported). */
  founderSecondary:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD1OgVJs67R9_yYufieFj17v4EvTR6lpXgET9FIIx9lP5KythWgFfpaMvYg8mY1xEqFDG2WDyKip_prqYTxeWV4ASUZgHcvF83geZSjcsPvHRUfe-zzfn_sbHcWsBlgGUB8xu04gVuIwOvUU1r3JVq_iI_aMVW6fvd-LSNMuRPfDDstqVufoCGjzHBgZNR4f6s2fKR-RFVGPRECiTqrb4kAyLx-4-jWDY3-ej1G_zXbXZE1nPdbZ9a4F3Nna149UgawCvlbnvHecRY=s1600',
  /**
   * Contact/footer QR code (as exported).
   * TODO: replace with your real QR code image if this exported one does not
   * encode the correct destination.
   */
  qrCode:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAsZgDLR7w1IjYaCaxNv1UqhxcnB0IT04A70Q1JI_IpHkE1KD3vDVhD0D47dRZ_wbwATXIEdm62Se1R5NV0TslHsjoIslgVFaeOaFiLRl7p48SBe7dE-lflWJGtEfPldgDtIKriwcPSfK61V4BwrNvzSYqdLQl6hx2AcaA7x9k9BdFv7AOxKSxq7bxPuv9dm_gx8kBvdxb-tTaymH7N307xXnDbad4DUmGpFWssUq67ncAa3jfA9ilE-4pm_n5nbEMqdcUgQgXt8AU=s1600',
} as const
