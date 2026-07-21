/**
 * Opt-in analytics: Google Analytics 4 + Microsoft Clarity.
 *
 * Rules:
 * - Loads ONLY in production builds (import.meta.env.PROD).
 * - Loads only when the corresponding VITE_ id is set at build time.
 * - Can be force-disabled with VITE_ENABLE_ANALYTICS=false /
 *   VITE_ENABLE_CLARITY=false.
 * - trackEvent() is safe to call anywhere — it no-ops when GA is absent.
 */

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const flag = (key: string): boolean =>
  String(import.meta.env[key] ?? 'true').toLowerCase() !== 'false'

export function initAnalytics(): void {
  if (!import.meta.env.PROD) return

  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined
  const clarityId = import.meta.env.VITE_CLARITY_PROJECT_ID as string | undefined

  if (gaId && flag('VITE_ENABLE_ANALYTICS')) {
    const s = document.createElement('script')
    s.async = true
    s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`
    document.head.appendChild(s)
    window.dataLayer = window.dataLayer ?? []
    window.gtag = (...args: unknown[]) => {
      window.dataLayer?.push(args)
    }
    window.gtag('js', new Date())
    window.gtag('config', gaId)
  }

  if (clarityId && flag('VITE_ENABLE_CLARITY')) {
    const s = document.createElement('script')
    s.async = true
    s.src = `https://www.clarity.ms/tag/${encodeURIComponent(clarityId)}`
    document.head.appendChild(s)
  }
}

export type AnalyticsEvent =
  | 'contact_form_submit'
  | 'contact_form_success'
  | 'contact_form_error'
  | 'cta_click'
  | 'social_click'
  | 'whatsapp_click'
  | 'email_click'
  | 'phone_click'
  | 'project_link_click'
  | 'qr_view'
  | 'download'

/** Fire a GA4 event; no-op when analytics is disabled or absent. */
export function trackEvent(name: AnalyticsEvent, params?: Record<string, string>): void {
  window.gtag?.('event', name, params ?? {})
}
