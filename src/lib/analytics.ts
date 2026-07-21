/**
 * Opt-in analytics: Google Analytics 4 + Microsoft Clarity.
 * Nothing loads unless the corresponding VITE_ env var is set at build time —
 * the site ships zero third-party trackers by default.
 */

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export function initAnalytics(): void {
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined
  const clarityId = import.meta.env.VITE_CLARITY_PROJECT_ID as string | undefined

  if (gaId) {
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

  if (clarityId) {
    const s = document.createElement('script')
    s.async = true
    s.src = `https://www.clarity.ms/tag/${encodeURIComponent(clarityId)}`
    document.head.appendChild(s)
  }
}
