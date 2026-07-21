import { motion } from 'framer-motion'
import { assets } from '../../lib/assets'
import { trackEvent } from '../../lib/analytics'
import ShaderBackground from '../common/ShaderBackground'

/**
 * Hero section — `utkarsh_soft_solutions_premium_refined_hero` Stitch export,
 * converted verbatim (nav and noise-overlay are rendered globally).
 * The export's mousemove glass-card script is handled by useMouseGlow in App.
 */
export default function Hero() {
  return (
    <motion.section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden grid-pattern"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* WebGL shader animation (from the `shader` export), beneath the auroras */}
        <div className="absolute inset-0 -z-20 opacity-40" aria-hidden="true">
          <ShaderBackground />
        </div>
        <div className="aurora aurora-1"></div>
        <div className="aurora aurora-2"></div>
        {/* Ambient Particles (Simulated with CSS) */}
        <div className="absolute top-[15%] left-[20%] w-2 h-2 bg-primary rounded-full blur-[1px] animate-ambient opacity-40"></div>
        <div
          className="absolute top-[60%] left-[10%] w-1 h-1 bg-secondary rounded-full blur-[1px] animate-ambient opacity-30"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute top-[30%] right-[30%] w-2 h-2 bg-primary rounded-full blur-[1px] animate-ambient opacity-40"
          style={{ animationDelay: '4s' }}
        ></div>
        <div
          className="absolute bottom-[20%] right-[15%] w-1.5 h-1.5 bg-secondary rounded-full blur-[1px] animate-ambient opacity-30"
          style={{ animationDelay: '1s' }}
        ></div>
        <div className="absolute top-[40%] left-[40%] w-1.5 h-1.5 bg-primary/20 rounded-full blur-[1px] animate-float"></div>
        <div className="absolute top-[70%] right-[25%] w-1 h-1 bg-secondary/20 rounded-full blur-[1px] animate-float-delayed"></div>
        <div className="absolute top-[40%] left-[40%] w-1.5 h-1.5 bg-primary/20 rounded-full blur-[1px] animate-float"></div>
        <div className="absolute top-[70%] right-[25%] w-1 h-1 bg-secondary/20 rounded-full blur-[1px] animate-float-delayed"></div>
      </div>
      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-max-width px-margin pt-xl pb-xl flex flex-col items-center lg:items-start text-center lg:text-left py-lg py-xl">
        <div className="flex flex-col lg:flex-row items-center w-full gap-gutter">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            {/* Branding Chip */}
            <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full border-glow animate-float backdrop-blur-[32px]">
              <span className="material-symbols-outlined text-primary text-[18px]">bolt</span>
              <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest">
                Pioneering AI Excellence
              </span>
            </div>
            {/* Massive Heading */}
            <h1 className="font-hero-display text-hero-display-mobile md:text-hero-display text-text-high max-w-[1200px] lg:max-w-none leading-[0.95] mb-md text-glow">
              Engineering the Future <br /> of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Enterprise AI
              </span>
            </h1>
            {/* Subheading */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[700px] mb-lg leading-relaxed">
              Utkarsh Soft Solutions delivers next-generation technical architecture and scalable
              AI automation. We don't just build software; we engineer intelligent ecosystems that
              redefine industry standards.
            </p>
            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-gutter">
              <a
                href="#contact"
                className="bg-secondary-container text-white px-10 py-5 rounded-[16px] font-bold text-body-lg flex items-center gap-3 btn-primary-hover group shadow-2xl shadow-secondary-container/30"
                onClick={() => trackEvent('cta_click', { cta: 'hero_get_started' })}
              >
                Get Started
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>
              <a
                href="#projects"
                className="border-2 border-primary/40 text-primary px-10 py-5 rounded-[16px] font-bold text-body-lg hover:bg-primary/10 transition-all duration-300 backdrop-blur-sm"
                onClick={() => trackEvent('cta_click', { cta: 'hero_view_projects' })}
              >
                View Projects
              </a>
            </div>
          </div>
          {/* Right Side Visual */}
          <div className="hidden lg:block flex-1 relative min-h-[500px]">
            <div className="absolute inset-0 -z-10 overflow-visible">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 blur-[120px] rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-secondary/10 blur-[80px] rounded-full"></div>
            </div>
            <div className="absolute inset-0 -z-10 overflow-visible">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 blur-[120px] rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-secondary/10 blur-[80px] rounded-full"></div>
            </div>
            <img
              alt="AI Architecture Visualization"
              className="w-full h-auto object-contain rounded-2xl animate-float-delayed drop-shadow-[0_20px_50px_rgba(77,142,255,0.15)]"
              src={assets.heroVisualization}
            />
          </div>
        </div>
        {/* Floating Stats Cards */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-visible">
          {/* Card 1 */}
          {/* Card 2 */}
          <div className="absolute bottom-[20%] right-[10%] glass-card p-6 rounded-[24px] border-glow animate-float-delayed max-w-[220px] pointer-events-auto backdrop-blur-[24px] border-white/20 shadow-2xl hover:scale-105 transition-all duration-300 backdrop-blur-[32px]">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-xl bg-secondary/20">
                <span className="material-symbols-outlined text-secondary text-[24px]">
                  workspace_premium
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-heading-md text-heading-md text-secondary font-bold">10+</span>
                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest leading-tight">
                  Years of Domain Expertise
                </span>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="absolute top-[10%] right-[5%] glass-card p-4 rounded-full border-glow animate-float-delayed flex items-center gap-3 pr-6 pointer-events-auto backdrop-blur-[24px] border-white/20 shadow-2xl hover:scale-105 transition-all duration-300 backdrop-blur-[32px]">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-[20px]">verified</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-caps text-label-caps text-on-surface uppercase leading-none">
                ISO Certified
              </span>
              <span className="text-[9px] text-primary uppercase font-bold tracking-tighter">
                Security Grade A
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">
          Explore
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent"></div>
      </div>
    </motion.section>
  )
}
