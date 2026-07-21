import { assets } from '../../lib/assets'

/**
 * Trust / overview section (id="about") —
 * `utkarsh_soft_solutions_trust_overview_section` Stitch export, converted
 * verbatim. The export's nav and footer duplicates are dropped (Navbar /
 * ContactFooter are separate components).
 */
export default function TrustOverview() {
  return (
    <section
      id="about"
      className="relative pt-32 pb-xl overflow-hidden"
    >
      {/* Background Elements */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      ></div>
      <div className="max-w-[1400px] mx-auto px-margin md:px-lg space-y-xl relative z-10">
        {/* Block 1: Who We Are */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-lg items-center">
          <div className="space-y-sm">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-caps text-label-caps">
              WHO WE ARE
            </div>
            <h1 className="font-section-title text-section-title text-text-high leading-tight font-bold">
              Building Scalable Digital Solutions for Modern Businesses
            </h1>
            <p className="font-body-lg text-body-lg text-text-muted max-w-xl py-4 text-on-surface">
              At Utkarsh Soft Solutions, we architect the future. Our team blends deep technical
              expertise with innovative AI integration to deliver enterprise-grade software that
              scales with your ambition. From cloud transformation to custom application
              development, we solve the world's most complex digital challenges.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#projects"
                className="px-8 py-4 bg-secondary-container text-white rounded-[16px] font-bold hover:brightness-105 transition-all"
              >
                Explore Our Work
              </a>
              <a
                href="#technology"
                className="px-8 py-4 border border-primary/30 hover:bg-primary/10 text-primary rounded-[16px] font-bold transition-all"
              >
                Our Technical Stack
              </a>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary-container/20 rounded-[24px] blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative rounded-[24px] overflow-hidden border border-white/10 glass-card">
              <img
                className="w-full h-auto object-cover min-h-[500px]"
                alt="A sophisticated, high-tech digital workspace visual showing abstract glowing circuit pathways and data streams in deep blue and vibrant orange tones. The style is ultra-premium cinematic 3D rendering with sharp focus and glassmorphic depth effects, perfectly matching a dark mode enterprise technology aesthetic."
                src={assets.trustWorkspace}
                loading="lazy"
              />
            </div>
          </div>
        </section>
        {/* Block 2: Service Grid */}
        <section className="space-y-md">
          <div className="text-center space-y-base">
            <h2 className="font-heading-md text-heading-md text-text-high">
              Comprehensive Capabilities
            </h2>
            <p className="text-text-muted text-on-surface">
              Tailored solutions for every stage of your digital journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter gap-8">
            {/* AI Solutions */}
            <div className="glass-card p-8 rounded-[24px] flex flex-col justify-between min-h-[280px] bg-surface-container-high p-10 border-white/20">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-4 font-bold">
                  psychology
                </span>
                <h3 className="text-xl font-bold text-text-high mb-2 text-white">AI Solutions</h3>
                <p className="text-body-sm text-text-muted text-on-surface">
                  Integrating generative AI and machine learning models into your core business
                  logic for smarter operations.
                </p>
              </div>
              <div className="mt-6 flex items-center text-primary font-bold text-sm cursor-pointer hover:underline">
                Learn more{' '}
                <span className="material-symbols-outlined text-sm ml-1 font-bold">
                  arrow_forward
                </span>
              </div>
            </div>
            {/* Enterprise Software */}
            <div className="glass-card p-8 rounded-[24px] flex flex-col justify-between min-h-[280px] bg-surface-container-high p-10 border-white/20">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-4 font-bold">
                  corporate_fare
                </span>
                <h3 className="text-xl font-bold text-text-high mb-2 text-white">
                  Enterprise Software
                </h3>
                <p className="text-body-sm text-text-muted text-on-surface">
                  Robust, high-availability systems designed for global scale and complex
                  organizational workflows.
                </p>
              </div>
              <div className="mt-6 flex items-center text-primary font-bold text-sm cursor-pointer hover:underline">
                Learn more{' '}
                <span className="material-symbols-outlined text-sm ml-1 font-bold">
                  arrow_forward
                </span>
              </div>
            </div>
            {/* Cloud Services */}
            <div className="glass-card p-8 rounded-[24px] flex flex-col justify-between min-h-[280px] bg-surface-container-high p-10 border-white/20">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-4 font-bold">
                  cloud_done
                </span>
                <h3 className="text-xl font-bold text-text-high mb-2 text-white">Cloud Services</h3>
                <p className="text-body-sm text-text-muted text-on-surface">
                  Optimizing cloud architecture for performance, cost, and elasticity across AWS,
                  Azure, and Google Cloud.
                </p>
              </div>
              <div className="mt-6 flex items-center text-primary font-bold text-sm cursor-pointer hover:underline">
                Learn more{' '}
                <span className="material-symbols-outlined text-sm ml-1 font-bold">
                  arrow_forward
                </span>
              </div>
            </div>
            {/* Web Applications */}
            <div className="glass-card p-8 rounded-[24px] flex flex-col justify-between min-h-[280px] bg-surface-container-high p-10 border-white/20">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-4 font-bold">
                  web
                </span>
                <h3 className="text-xl font-bold text-text-high mb-2 text-white">
                  Web Applications
                </h3>
                <p className="text-body-sm text-text-muted text-on-surface">
                  Performance-first web platforms built with modern frameworks like React and
                  Next.js for flawless UX.
                </p>
              </div>
              <div className="mt-6 flex items-center text-primary font-bold text-sm cursor-pointer hover:underline">
                Learn more{' '}
                <span className="material-symbols-outlined text-sm ml-1 font-bold">
                  arrow_forward
                </span>
              </div>
            </div>
            {/* Business Automation */}
            <div className="glass-card p-8 rounded-[24px] flex flex-col justify-between min-h-[280px] bg-surface-container-high p-10 border-white/20">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-4 font-bold">
                  settings_suggest
                </span>
                <h3 className="text-xl font-bold text-text-high mb-2 text-white">
                  Business Automation
                </h3>
                <p className="text-body-sm text-text-muted text-on-surface">
                  Eliminating friction by automating repetitive workflows through intelligent
                  software robots and API integrations.
                </p>
              </div>
              <div className="mt-6 flex items-center text-primary font-bold text-sm cursor-pointer hover:underline">
                Learn more{' '}
                <span className="material-symbols-outlined text-sm ml-1 font-bold">
                  arrow_forward
                </span>
              </div>
            </div>
            {/* Digital Transformation */}
            <div className="glass-card p-8 rounded-[24px] flex flex-col justify-between min-h-[280px] bg-surface-container-high p-10 border-white/20">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-4 font-bold">
                  dynamic_form
                </span>
                <h3 className="text-xl font-bold text-text-high mb-2 text-white">
                  Digital Transformation
                </h3>
                <p className="text-body-sm text-text-muted text-on-surface">
                  Consultancy and execution strategy to move legacy businesses into a modern,
                  data-driven digital ecosystem.
                </p>
              </div>
              <div className="mt-6 flex items-center text-primary font-bold text-sm cursor-pointer hover:underline">
                Learn more{' '}
                <span className="material-symbols-outlined text-sm ml-1 font-bold">
                  arrow_forward
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* Block 3: Trust Highlights */}
        <section className="py-lg border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-sm">
            {/* Secure Architecture */}
            <div className="glass-card p-6 rounded-[16px] border-glow p-8 border-white/20 bg-surface-container">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-primary font-bold">shield</span>
                <h4 className="font-bold text-sm text-text-high">Secure Architecture</h4>
              </div>
              <p className="text-xs text-text-muted text-on-surface">
                Military-grade protocols and data protection.
              </p>
            </div>
            {/* Scalable Solutions */}
            <div className="glass-card p-6 rounded-[16px] border-glow p-8 border-white/20 bg-surface-container">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-primary font-bold">
                  trending_up
                </span>
                <h4 className="font-bold text-sm text-text-high">Scalable Solutions</h4>
              </div>
              <p className="text-xs text-text-muted text-on-surface">
                Ready to grow with your user base.
              </p>
            </div>
            {/* Agile Development */}
            <div className="glass-card p-6 rounded-[16px] border-glow p-8 border-white/20 bg-surface-container">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-primary font-bold">bolt</span>
                <h4 className="font-bold text-sm text-text-high">Agile Development</h4>
              </div>
              <p className="text-xs text-text-muted text-on-surface">
                Rapid iteration and transparent delivery.
              </p>
            </div>
            {/* Dedicated Support */}
            <div className="glass-card p-6 rounded-[16px] border-glow p-8 border-white/20 bg-surface-container">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-primary font-bold">
                  headset_mic
                </span>
                <h4 className="font-bold text-sm text-text-high">Dedicated Support</h4>
              </div>
              <p className="text-xs text-text-muted text-on-surface">
                24/7 technical oversight for your systems.
              </p>
            </div>
            {/* Future Ready */}
            <div className="glass-card p-6 rounded-[16px] border-glow p-8 border-white/20 bg-surface-container">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-primary font-bold">
                  auto_awesome
                </span>
                <h4 className="font-bold text-sm text-text-high">Future Ready</h4>
              </div>
              <p className="text-xs text-text-muted text-on-surface">
                Built on top of tomorrow's tech stack.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
