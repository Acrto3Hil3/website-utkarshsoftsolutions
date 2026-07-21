import { siteConfig } from '../../lib/site-config'
import { assets } from '../../lib/assets'
import { trackEvent } from '../../lib/analytics'

/**
 * Fixed top navigation — extracted verbatim from the
 * `utkarsh_soft_solutions_premium_refined_hero` Stitch export.
 * Links come from siteConfig.nav; "Home" keeps the export's active styling.
 */
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-[100] bg-surface/60 backdrop-blur-[32px] border-b border-white/20 shadow-[0_1px_15px_rgba(255,255,255,0.1)]">
      <div className="flex justify-between items-center px-margin py-4 max-w-max-width mx-auto">
        <div className="flex items-center gap-4">
          <img
            alt="UTKARSH Logo"
            className="h-[86px] w-auto transition-transform hover:scale-105"
            src={assets.logo}
          />
          <span className="font-hero-display-mobile text-heading-md font-bold text-on-surface tracking-tight">
            UTKARSH
          </span>
        </div>
        <div className="hidden md:flex items-center gap-lg">
          {siteConfig.nav.map((item, index) => (
            <a
              key={item.href}
              className={
                index === 0
                  ? 'font-body-sm text-body-sm uppercase tracking-wider text-primary font-bold border-b-2 border-primary pb-1'
                  : 'font-body-sm text-body-sm uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors'
              }
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          className="bg-secondary-container text-white px-8 py-3 rounded-[16px] font-bold text-body-sm uppercase tracking-widest btn-primary-hover shadow-lg shadow-secondary-container/20"
          href="#contact"
          onClick={() => trackEvent('cta_click', { cta: 'navbar_get_started' })}
        >
          Get Started
        </a>
      </div>
    </nav>
  )
}
