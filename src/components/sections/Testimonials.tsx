import './Testimonials.css'

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="sec-testimonials relative min-h-screen py-xl overflow-hidden grid-bg"
    >
      {/* Atmospheric Visual Elements */}
      <div className="aurora-blur top-[-10%] left-[-10%] bg-primary" />
      <div className="aurora-blur bottom-[20%] right-[-10%] bg-tertiary" />
      <div className="max-w-[1440px] mx-auto px-md lg:px-lg">
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-xl">
          <span className="inline-flex px-sm py-xs rounded-full bg-primary/10 border border-primary/20 text-primary font-label-caps text-label-caps mb-sm tracking-[0.2em]">
            CLIENT SUCCESS
          </span>
          <h1 className="font-section-title text-section-title-mobile md:text-section-title text-text-high mb-md max-w-[1000px] leading-tight">
            Trusted by Businesses.
            <br />
            Built for Long-Term Partnerships.
          </h1>
          <p className="font-body-lg text-body-lg text-text-muted max-w-[720px]">
            Our success is measured by the success of our clients. Every project is built to solve real business
            challenges while creating long-term value.
          </p>
        </div>
        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-xl">
          <div className="glass-card p-lg rounded-[24px] group">
            <div className="flex justify-between items-start mb-md">
              <span
                className="material-symbols-outlined text-primary text-[40px] opacity-80 group-hover:opacity-100 transition-opacity"
                data-icon="deployed_code"
              >
                deployed_code
              </span>
              <div className="w-12 h-12 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-sm" data-icon="north_east">
                  north_east
                </span>
              </div>
            </div>
            <div className="counter-value font-hero-display-mobile text-hero-display-mobile font-bold leading-none mb-xs" data-target="250">
              250+
            </div>
            <div className="font-body-sm text-body-sm text-text-muted uppercase tracking-widest">Projects Delivered</div>
          </div>
          <div className="glass-card p-lg rounded-[24px] group">
            <div className="flex justify-between items-start mb-md">
              <span
                className="material-symbols-outlined text-tertiary text-[40px] opacity-80 group-hover:opacity-100 transition-opacity"
                data-icon="sentiment_very_satisfied"
              >
                sentiment_very_satisfied
              </span>
              <div className="w-12 h-12 rounded-full bg-tertiary/5 border border-tertiary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-tertiary text-sm" data-icon="verified">
                  verified
                </span>
              </div>
            </div>
            <div className="counter-value font-hero-display-mobile text-hero-display-mobile font-bold leading-none mb-xs" data-target="150">
              150+
            </div>
            <div className="font-body-sm text-body-sm text-text-muted uppercase tracking-widest">Happy Clients</div>
          </div>
          <div className="glass-card p-lg rounded-[24px] group">
            <div className="flex justify-between items-start mb-md">
              <span
                className="material-symbols-outlined text-primary text-[40px] opacity-80 group-hover:opacity-100 transition-opacity"
                data-icon="domain"
              >
                domain
              </span>
              <div className="w-12 h-12 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-sm" data-icon="explore">
                  explore
                </span>
              </div>
            </div>
            <div className="counter-value font-hero-display-mobile text-hero-display-mobile font-bold leading-none mb-xs" data-target="15">
              15+
            </div>
            <div className="font-body-sm text-body-sm text-text-muted uppercase tracking-widest">Industries Served</div>
          </div>
          <div className="glass-card p-lg rounded-[24px] group">
            <div className="flex justify-between items-start mb-md">
              <span
                className="material-symbols-outlined text-tertiary text-[40px] opacity-80 group-hover:opacity-100 transition-opacity"
                data-icon="handshake"
              >
                handshake
              </span>
              <div className="w-12 h-12 rounded-full bg-tertiary/5 border border-tertiary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-tertiary text-sm" data-icon="all_inclusive">
                  all_inclusive
                </span>
              </div>
            </div>
            <div className="counter-value font-hero-display-mobile text-hero-display-mobile font-bold leading-none mb-xs" data-target="95">
              95%
            </div>
            <div className="font-body-sm text-body-sm text-text-muted uppercase tracking-widest">
              Long-Term Partnerships
            </div>
          </div>
        </div>
        {/* Client Logo Strip */}
        <div className="mb-xl overflow-hidden marquee-container py-md border-y border-white/5">
          <div className="flex whitespace-nowrap animate-scroll gap-xl items-center">
            {/* First Set */}
            <span className="text-text-muted font-heading-md text-heading-md px-md opacity-40 hover:opacity-100 transition-opacity cursor-default">
              Nature Touch Nutrition
            </span>
            <span className="text-text-muted font-heading-md text-heading-md px-md opacity-40 hover:opacity-100 transition-opacity cursor-default">
              Weboapp Discovery Pvt. Ltd.
            </span>
            <span className="text-text-muted font-heading-md text-heading-md px-md opacity-40 hover:opacity-100 transition-opacity cursor-default">
              Digital Engineering Excellence
            </span>
            <span className="text-text-muted font-heading-md text-heading-md px-md opacity-40 hover:opacity-100 transition-opacity cursor-default">
              eQuasar Solutions
            </span>
            <span className="text-text-muted font-heading-md text-heading-md px-md opacity-40 hover:opacity-100 transition-opacity cursor-default">
              Malik Printers
            </span>
            <span className="text-text-muted font-heading-md text-heading-md px-md opacity-40 hover:opacity-100 transition-opacity cursor-default">
              Gupta Spare Parts
            </span>
            {/* Duplicate for seamless scroll */}
            <span className="text-text-muted font-heading-md text-heading-md px-md opacity-40 hover:opacity-100 transition-opacity cursor-default">
              Nature Touch Nutrition
            </span>
            <span className="text-text-muted font-heading-md text-heading-md px-md opacity-40 hover:opacity-100 transition-opacity cursor-default">
              Weboapp Discovery Pvt. Ltd.
            </span>
            <span className="text-text-muted font-heading-md text-heading-md px-md opacity-40 hover:opacity-100 transition-opacity cursor-default">
              Digital Engineering Excellence
            </span>
            <span className="text-text-muted font-heading-md text-heading-md px-md opacity-40 hover:opacity-100 transition-opacity cursor-default">
              eQuasar Solutions
            </span>
            <span className="text-text-muted font-heading-md text-heading-md px-md opacity-40 hover:opacity-100 transition-opacity cursor-default">
              Malik Printers
            </span>
            <span className="text-text-muted font-heading-md text-heading-md px-md opacity-40 hover:opacity-100 transition-opacity cursor-default">
              Gupta Spare Parts
            </span>
          </div>
        </div>
        {/* Testimonials Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter mb-xl">
          {/* Card 1 */}
          <div className="glass-card p-md lg:p-lg rounded-[24px] flex flex-col h-full">
            <div className="flex justify-between items-start mb-md">
              <span className="material-symbols-outlined text-primary/40 text-[48px]" data-icon="format_quote">
                format_quote
              </span>
              <span className="bg-secondary/10 text-secondary border border-secondary/20 font-label-caps text-[10px] px-2 py-1 rounded">
                LIVE PLATFORM
              </span>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface mb-lg flex-grow italic">
              "Client testimonial available upon request. Our collaborative approach ensures that specific performance
              metrics and platform outcomes are discussed in confidence."
            </p>
            <div className="flex items-center gap-sm mb-sm text-tertiary">
              <span className="material-symbols-outlined" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <div className="border-t border-white/5 pt-md">
              <div className="font-heading-md text-[18px] text-text-high">Enterprise Retail Partner</div>
              <div className="font-body-sm text-body-sm text-text-muted">Supply Chain Optimization Project</div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="glass-card p-md lg:p-lg rounded-[24px] flex flex-col h-full border-primary/20 bg-surface-container-high/40">
            <div className="flex justify-between items-start mb-md">
              <span className="material-symbols-outlined text-primary/40 text-[48px]" data-icon="format_quote">
                format_quote
              </span>
              <span className="bg-primary/10 text-primary border border-primary/20 font-label-caps text-[10px] px-2 py-1 rounded">
                CONFIDENTIAL
              </span>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface mb-lg flex-grow italic">
              "Reference available during business discussions. We respect the privacy of our high-stake enterprise
              transformations while maintaining documented success stories."
            </p>
            <div className="flex items-center gap-sm mb-sm text-tertiary">
              <span className="material-symbols-outlined" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <div className="border-t border-white/5 pt-md">
              <div className="font-heading-md text-[18px] text-text-high">Healthcare Tech Provider</div>
              <div className="font-body-sm text-body-sm text-text-muted">AI-Driven Diagnostics Implementation</div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="glass-card p-md lg:p-lg rounded-[24px] flex flex-col h-full">
            <div className="flex justify-between items-start mb-md">
              <span className="material-symbols-outlined text-primary/40 text-[48px]" data-icon="format_quote">
                format_quote
              </span>
              <span className="bg-success text-on-primary-container border border-white/10 font-label-caps text-[10px] px-2 py-1 rounded bg-[#10b98120] text-[#10b981]">
                DELIVERED
              </span>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface mb-lg flex-grow italic">
              "Detailed case study highlighting 40% efficiency gains is available for review under NDA. Our commitment
              to excellence is reflected in every line of code."
            </p>
            <div className="flex items-center gap-sm mb-sm text-tertiary">
              <span className="material-symbols-outlined" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <div className="border-t border-white/5 pt-md">
              <div className="font-heading-md text-[18px] text-text-high">FinTech Disruption Group</div>
              <div className="font-body-sm text-body-sm text-text-muted">Global Payments Gateway Re-architecture</div>
            </div>
          </div>
        </div>
        {/* Success Highlights */}
        <div className="mb-xl">
          <h2 className="font-heading-md text-heading-md text-center text-text-high mb-xl">Key Strategic Outcomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            <div className="glass-card p-md rounded-[16px] text-center hover:bg-primary/5">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-md">
                <span className="material-symbols-outlined text-primary text-[32px]" data-icon="automation">
                  automation
                </span>
              </div>
              <h3 className="font-heading-md text-[20px] text-text-high mb-xs">Business Process Automation</h3>
              <p className="font-body-sm text-body-sm text-text-muted">
                Eliminating manual bottlenecks through intelligent workflows.
              </p>
            </div>
            <div className="glass-card p-md rounded-[16px] text-center hover:bg-secondary/5">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-md">
                <span className="material-symbols-outlined text-secondary text-[32px]" data-icon="database">
                  database
                </span>
              </div>
              <h3 className="font-heading-md text-[20px] text-text-high mb-xs">Enterprise ERP</h3>
              <p className="font-body-sm text-body-sm text-text-muted">
                Consolidating disparate systems into a unified command center.
              </p>
            </div>
            <div className="glass-card p-md rounded-[16px] text-center hover:bg-primary/5">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-md">
                <span className="material-symbols-outlined text-primary text-[32px]" data-icon="neurology">
                  neurology
                </span>
              </div>
              <h3 className="font-heading-md text-[20px] text-text-high mb-xs">AI Solutions</h3>
              <p className="font-body-sm text-body-sm text-text-muted">
                Leveraging predictive analytics for data-driven decisions.
              </p>
            </div>
            <div className="glass-card p-md rounded-[16px] text-center hover:bg-secondary/5">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-md">
                <span className="material-symbols-outlined text-secondary text-[32px]" data-icon="cloud_done">
                  cloud_done
                </span>
              </div>
              <h3 className="font-heading-md text-[20px] text-text-high mb-xs">Cloud Infrastructure</h3>
              <p className="font-body-sm text-body-sm text-text-muted">
                Scalable architectures built for 99.9% uptime and security.
              </p>
            </div>
          </div>
        </div>
        {/* Bottom CTA */}
        <div className="relative glass-card rounded-[32px] p-md lg:p-xl overflow-hidden text-center group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-50" />
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="font-heading-md text-heading-md text-text-high mb-md">
              Want to See More Client Success Stories?
            </h2>
            <p className="font-body-lg text-body-lg text-text-muted max-w-[800px] mb-lg">
              We'd be happy to walk you through our enterprise projects, live platforms and confidential case studies
              during a discovery call.
            </p>
            <div className="flex flex-col sm:flex-row gap-md">
              <a
                className="px-lg py-sm rounded-full bg-secondary text-on-secondary font-heading-md text-[18px] hover:brightness-110 hover:scale-[1.02] transition-all duration-300 text-center"
                href="#contact"
              >
                Book Discovery Call
              </a>
              <a
                className="px-lg py-sm rounded-full border border-primary text-primary font-heading-md text-[18px] hover:bg-primary/10 transition-all duration-300 text-center"
                href="#contact"
              >
                Request Capability Deck
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
