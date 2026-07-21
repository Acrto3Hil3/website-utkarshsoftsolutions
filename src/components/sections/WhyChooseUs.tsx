import { assets } from '../../lib/assets'
import './WhyChooseUs.css'

export default function WhyChooseUs() {
  return (
    <section
      className="sec-why-choose-us relative pt-xl pb-xl"
    >
      {/* Background Effects */}
      <div className="aurora-blue top-20 -left-40"></div>
      <div className="aurora-orange bottom-40 -right-20"></div>
      <div className="max-w-max-width mx-auto px-margin">
        {/* Header */}
        <header className="text-center mb-xl max-w-3xl mx-auto">
          <span className="inline-block px-sm py-xs rounded-full bg-primary/10 text-primary font-label-caps text-label-caps mb-sm tracking-widest border border-primary/20 uppercase">WHY CHOOSE US</span>
          <h1 className="font-section-title text-section-title text-high mb-md leading-tight">More Than Developers. Your Long-Term Technology Partner.</h1>
          <p className="font-body-lg text-body-lg text-text-muted leading-relaxed">
            We don't just write code. We understand business problems, design scalable solutions, and become a long-term technology partner focused on measurable business outcomes.
          </p>
        </header>
        {/* Main Content Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center mb-xl">
          {/* Left: Illustration */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-[32px] blur-2xl group-hover:bg-primary/10 transition-all duration-700"></div>
            <div className="relative rounded-[32px] overflow-hidden border border-white/5 aspect-square bg-surface-container-low shadow-2xl">
              <img
                className="w-full h-full object-cover"
                style={{ objectPosition: '90% 50%' }}
                loading="lazy"
                alt="A futuristic and highly detailed 3D digital illustration of a glowing blue holographic human brain integrated with circuit board patterns. Floating around it are sleek white cloud storage icons, digital data streams, and geometric HUD elements. The background is a deep navy space with subtle star-like particles and orange atmospheric light flares. Cinematic lighting and hyper-realistic glass textures define the premium technical aesthetic."
                src={assets.whyChooseUsSecondary}
              />
            </div>
          </div>
          {/* Right: Glass Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Card 1 */}
            <div className="glass-card p-md rounded-[24px]">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-sm">
                <span className="material-symbols-outlined">strategy</span>
              </div>
              <h3 className="font-heading-md text-high mb-xs text-xl">Business First Approach</h3>
              <p className="font-body-sm text-text-muted">We understand business goals before writing code.</p>
            </div>
            {/* Card 2 */}
            <div className="glass-card p-md rounded-[24px]">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-sm">
                <span className="material-symbols-outlined">layers</span>
              </div>
              <h3 className="font-heading-md text-high mb-xs text-xl">Scalable Architecture</h3>
              <p className="font-body-sm text-text-muted">Solutions built to grow with your business.</p>
            </div>
            {/* Card 3 */}
            <div className="glass-card p-md rounded-[24px]">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-sm">
                <span className="material-symbols-outlined">chat_bubble</span>
              </div>
              <h3 className="font-heading-md text-high mb-xs text-xl">Transparent Communication</h3>
              <p className="font-body-sm text-text-muted">Regular updates, milestones and collaborative planning.</p>
            </div>
            {/* Card 4 */}
            <div className="glass-card p-md rounded-[24px]">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-sm">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <h3 className="font-heading-md text-high mb-xs text-xl">Security &amp; Reliability</h3>
              <p className="font-body-sm text-text-muted">Enterprise-grade security and best engineering practices.</p>
            </div>
            {/* Card 5 */}
            <div className="glass-card p-md rounded-[24px]">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-sm">
                <span className="material-symbols-outlined">memory</span>
              </div>
              <h3 className="font-heading-md text-high mb-xs text-xl">Future Ready Tech</h3>
              <p className="font-body-sm text-text-muted">Modern AI, Cloud and scalable engineering solutions.</p>
            </div>
            {/* Card 6 */}
            <div className="glass-card p-md rounded-[24px]">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-sm">
                <span className="material-symbols-outlined">handshake</span>
              </div>
              <h3 className="font-heading-md text-high mb-xs text-xl">Long-Term Partnership</h3>
              <p className="font-body-sm text-text-muted">Support, maintenance and continuous improvement beyond delivery.</p>
            </div>
          </div>
        </section>
        {/* Comparison Panel */}
        <section className="mb-xl">
          <h2 className="font-heading-md text-section-title-mobile text-center text-high mb-lg">What Makes Us Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 rounded-[24px] overflow-hidden border border-white/5 shadow-2xl">
            {/* Column 1 */}
            <div className="bg-surface p-lg">
              <h4 className="font-label-caps text-label-caps text-error mb-md uppercase tracking-widest">Typical Agency</h4>
              <ul className="space-y-sm">
                <li className="flex items-center gap-sm font-body-lg text-on-surface-variant">
                  <span className="material-symbols-outlined text-error">close</span>
                  Generic templates
                </li>
                <li className="flex items-center gap-sm font-body-lg text-on-surface-variant">
                  <span className="material-symbols-outlined text-error">close</span>
                  Limited communication
                </li>
                <li className="flex items-center gap-sm font-body-lg text-on-surface-variant">
                  <span className="material-symbols-outlined text-error">close</span>
                  One-time delivery
                </li>
                <li className="flex items-center gap-sm font-body-lg text-on-surface-variant">
                  <span className="material-symbols-outlined text-error">close</span>
                  Outdated technology
                </li>
                <li className="flex items-center gap-sm font-body-lg text-on-surface-variant">
                  <span className="material-symbols-outlined text-error">close</span>
                  Poor scalability
                </li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="bg-surface-raised p-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
              <h4 className="font-label-caps text-label-caps text-primary mb-md uppercase tracking-widest">Utkarsh Soft Solutions</h4>
              <ul className="space-y-sm relative z-10">
                <li className="flex items-center gap-sm font-body-lg text-high">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Custom-built solutions
                </li>
                <li className="flex items-center gap-sm font-body-lg text-high">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Transparent collaboration
                </li>
                <li className="flex items-center gap-sm font-body-lg text-high">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Long-term partnership
                </li>
                <li className="flex items-center gap-sm font-body-lg text-high">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  AI-powered innovation
                </li>
                <li className="flex items-center gap-sm font-body-lg text-high">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Scalable architecture
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* Trust Metrics */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-gutter mb-xl">
          <div className="stat-card p-lg rounded-[24px] text-center group transition-all duration-500 hover:border-primary/20">
            <div className="font-hero-display-mobile text-primary mb-xs animate-count" data-target="100">100+</div>
            <div className="font-label-caps text-label-caps text-text-muted tracking-widest">PROJECTS DELIVERED</div>
          </div>
          <div className="stat-card p-lg rounded-[24px] text-center group transition-all duration-500 hover:border-secondary/20">
            <div className="font-hero-display-mobile text-secondary mb-xs animate-count" data-target="15">15+</div>
            <div className="font-label-caps text-label-caps text-text-muted tracking-widest">BUSINESS DOMAINS</div>
          </div>
          <div className="stat-card p-lg rounded-[24px] text-center group transition-all duration-500 hover:border-primary/20">
            <div className="font-hero-display-mobile text-primary mb-xs animate-count" data-target="50">50+</div>
            <div className="font-label-caps text-label-caps text-text-muted tracking-widest">TECH EXPERTISE</div>
          </div>
          <div className="stat-card p-lg rounded-[24px] text-center group transition-all duration-500 hover:border-secondary/20">
            <div className="font-hero-display-mobile text-secondary mb-xs animate-count" data-target="100">100%</div>
            <div className="font-label-caps text-label-caps text-text-muted tracking-widest">CLIENT CENTRIC</div>
          </div>
        </section>
        {/* Bottom CTA */}
        <section className="relative">
          <div className="glass-card p-xl rounded-[32px] text-center overflow-hidden border-glow">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 pointer-events-none"></div>
            <h2 className="font-section-title-mobile md:text-section-title text-high mb-md relative z-10">Let's Build Something Extraordinary Together</h2>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-lg relative z-10">
              Whether you're a startup, SME or enterprise, we're ready to transform your ideas into scalable software solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-sm relative z-10">
              <a
                href="#contact"
                className="btn-primary px-lg py-md rounded-full text-high font-body-lg font-bold shadow-lg shadow-secondary/20 text-center"
              >
                Schedule Consultation
              </a>
              <a
                href="#projects"
                className="px-lg py-md rounded-full border border-primary/30 text-primary font-body-lg font-bold hover:bg-primary/10 transition-colors text-center"
              >
                View Our Work
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
