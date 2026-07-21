import { useEffect, useRef } from 'react'
import './Services.css'

export default function Services() {
  const particlesRef = useRef<HTMLDivElement | null>(null)

  // Particle background generator — ported 1:1 from the export's inline script
  // (keyframes renamed to sec-services-particle-float, see Services.css).
  useEffect(() => {
    const container = particlesRef.current
    if (!container) return
    const particleCount = 20

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle'

      const size = Math.random() * 3 + 1
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`

      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`

      const duration = Math.random() * 15 + 10
      const delay = Math.random() * 10
      particle.style.animation = `sec-services-particle-float ${duration}s linear ${delay}s infinite`

      container.appendChild(particle)
    }

    return () => {
      container.innerHTML = ''
    }
  }, [])

  return (
    <section
      id="services"
      className="sec-services relative overflow-hidden pt-xl pb-xl px-margin-mobile md:px-gutter"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg z-0"></div>
      <div className="aurora-blur bg-primary w-[600px] h-[600px] -top-40 -left-40 rounded-full"></div>
      <div className="aurora-blur bg-tertiary-container w-[500px] h-[500px] bottom-0 -right-40 rounded-full"></div>
      {/* Floating Particles Container */}
      <div className="absolute inset-0 pointer-events-none z-0" ref={particlesRef}></div>
      <div className="max-w-container-max mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-lg">
          <span className="inline-block py-1 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-caps text-label-caps mb-6">
            WHAT WE OFFER
          </span>
          <h2 className="font-section-title text-section-title-mobile md:text-section-title text-text-high mb-8 tracking-tight max-w-4xl mx-auto">
            Complete Digital Solutions for Modern Businesses
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            From intelligent automation to high-performance cloud infrastructure, we build the technical foundations that power industry leaders.
          </p>
        </div>
        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-xl">
          {/* Service 1: AI Solutions */}
          <div className="glass-card p-8 rounded-3xl flex flex-col group">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
              <span className="material-symbols-outlined text-primary text-3xl service-icon" data-icon="neurology">neurology</span>
            </div>
            <h3 className="font-heading-md text-heading-md text-text-high mb-4">AI Solutions</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-grow">
              Harness the power of machine learning and LLMs to automate complex decision-making and derive actionable insights.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 rounded-full bg-surface-container-high border border-white/5 text-[10px] font-bold text-primary uppercase tracking-wider">OpenAI</span>
              <span className="px-3 py-1 rounded-full bg-surface-container-high border border-white/5 text-[10px] font-bold text-primary uppercase tracking-wider">PyTorch</span>
              <span className="px-3 py-1 rounded-full bg-surface-container-high border border-white/5 text-[10px] font-bold text-primary uppercase tracking-wider">TensorFlow</span>
            </div>
          </div>
          {/* Service 2: Custom Software Development */}
          <div className="glass-card p-8 rounded-3xl flex flex-col group">
            <div className="w-14 h-14 rounded-2xl bg-tertiary-container/10 flex items-center justify-center mb-6 border border-tertiary-container/20">
              <span className="material-symbols-outlined text-tertiary text-3xl service-icon" data-icon="code_blocks">code_blocks</span>
            </div>
            <h3 className="font-heading-md text-heading-md text-text-high mb-4">Custom Software Development</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-grow">
              Tailor-made software architectures built from the ground up to solve your unique business challenges with precision.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 rounded-full bg-surface-container-high border border-white/5 text-[10px] font-bold text-primary uppercase tracking-wider">Python</span>
              <span className="px-3 py-1 rounded-full bg-surface-container-high border border-white/5 text-[10px] font-bold text-primary uppercase tracking-wider">Go</span>
              <span className="px-3 py-1 rounded-full bg-surface-container-high border border-white/5 text-[10px] font-bold text-primary uppercase tracking-wider">Rust</span>
            </div>
          </div>
          {/* Service 3: Web Applications */}
          <div className="glass-card p-8 rounded-3xl flex flex-col group">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
              <span className="material-symbols-outlined text-primary text-3xl service-icon" data-icon="web">web</span>
            </div>
            <h3 className="font-heading-md text-heading-md text-text-high mb-4">Web Applications</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-grow">
              Ultra-fast, responsive web interfaces designed for seamless user experiences across every device and browser.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 rounded-full bg-surface-container-high border border-white/5 text-[10px] font-bold text-primary uppercase tracking-wider">React</span>
              <span className="px-3 py-1 rounded-full bg-surface-container-high border border-white/5 text-[10px] font-bold text-primary uppercase tracking-wider">Next.js</span>
              <span className="px-3 py-1 rounded-full bg-surface-container-high border border-white/5 text-[10px] font-bold text-primary uppercase tracking-wider">TypeScript</span>
            </div>
          </div>
          {/* Service 4: Cloud Solutions */}
          <div className="glass-card p-8 rounded-3xl flex flex-col group">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
              <span className="material-symbols-outlined text-primary text-3xl service-icon" data-icon="cloud">cloud</span>
            </div>
            <h3 className="font-heading-md text-heading-md text-text-high mb-4">Cloud Solutions</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-grow">
              Scalable cloud migration and infrastructure management that ensures 99.9% uptime and global accessibility.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 rounded-full bg-surface-container-high border border-white/5 text-[10px] font-bold text-primary uppercase tracking-wider">AWS</span>
              <span className="px-3 py-1 rounded-full bg-surface-container-high border border-white/5 text-[10px] font-bold text-primary uppercase tracking-wider">Azure</span>
              <span className="px-3 py-1 rounded-full bg-surface-container-high border border-white/5 text-[10px] font-bold text-primary uppercase tracking-wider">Kubernetes</span>
            </div>
          </div>
          {/* Service 5: Business Automation */}
          <div className="glass-card p-8 rounded-3xl flex flex-col group">
            <div className="w-14 h-14 rounded-2xl bg-tertiary-container/10 flex items-center justify-center mb-6 border border-tertiary-container/20">
              <span className="material-symbols-outlined text-tertiary text-3xl service-icon" data-icon="smart_toy">smart_toy</span>
            </div>
            <h3 className="font-heading-md text-heading-md text-text-high mb-4">Business Automation</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-grow">
              Eliminate manual bottlenecks and optimize workflows with intelligent RPA and custom integration engines.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 rounded-full bg-surface-container-high border border-white/5 text-[10px] font-bold text-primary uppercase tracking-wider">Node.js</span>
              <span className="px-3 py-1 rounded-full bg-surface-container-high border border-white/5 text-[10px] font-bold text-primary uppercase tracking-wider">Zapier</span>
              <span className="px-3 py-1 rounded-full bg-surface-container-high border border-white/5 text-[10px] font-bold text-primary uppercase tracking-wider">Python</span>
            </div>
          </div>
          {/* Service 6: Enterprise Applications */}
          <div className="glass-card p-8 rounded-3xl flex flex-col group">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
              <span className="material-symbols-outlined text-primary text-3xl service-icon" data-icon="corporate_fare">corporate_fare</span>
            </div>
            <h3 className="font-heading-md text-heading-md text-text-high mb-4">Enterprise Applications</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-grow">
              Complex ERP, CRM, and internal portal systems built to handle massive data loads and multi-departmental logic.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 rounded-full bg-surface-container-high border border-white/5 text-[10px] font-bold text-primary uppercase tracking-wider">Java</span>
              <span className="px-3 py-1 rounded-full bg-surface-container-high border border-white/5 text-[10px] font-bold text-primary uppercase tracking-wider">C#</span>
              <span className="px-3 py-1 rounded-full bg-surface-container-high border border-white/5 text-[10px] font-bold text-primary uppercase tracking-wider">PostgreSQL</span>
            </div>
          </div>
          {/* Service 7: API Development */}
          <div className="glass-card p-8 rounded-3xl flex flex-col group">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
              <span className="material-symbols-outlined text-primary text-3xl service-icon" data-icon="hub">hub</span>
            </div>
            <h3 className="font-heading-md text-heading-md text-text-high mb-4">API Development</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-grow">
              Secure, well-documented, and high-concurrency API endpoints that enable your ecosystem to talk to the world.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 rounded-full bg-surface-container-high border border-white/5 text-[10px] font-bold text-primary uppercase tracking-wider">GraphQL</span>
              <span className="px-3 py-1 rounded-full bg-surface-container-high border border-white/5 text-[10px] font-bold text-primary uppercase tracking-wider">gRPC</span>
              <span className="px-3 py-1 rounded-full bg-surface-container-high border border-white/5 text-[10px] font-bold text-primary uppercase tracking-wider">REST</span>
            </div>
          </div>
          {/* Service 8: Mobile Solutions */}
          <div className="glass-card p-8 rounded-3xl flex flex-col group">
            <div className="w-14 h-14 rounded-2xl bg-tertiary-container/10 flex items-center justify-center mb-6 border border-tertiary-container/20">
              <span className="material-symbols-outlined text-tertiary text-3xl service-icon" data-icon="phone_iphone">phone_iphone</span>
            </div>
            <h3 className="font-heading-md text-heading-md text-text-high mb-4">Mobile Solutions</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-grow">
              Native-grade performance for iOS and Android, leveraging modern frameworks for rapid, consistent cross-platform deployment.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 rounded-full bg-surface-container-high border border-white/5 text-[10px] font-bold text-primary uppercase tracking-wider">React Native</span>
              <span className="px-3 py-1 rounded-full bg-surface-container-high border border-white/5 text-[10px] font-bold text-primary uppercase tracking-wider">Flutter</span>
              <span className="px-3 py-1 rounded-full bg-surface-container-high border border-white/5 text-[10px] font-bold text-primary uppercase tracking-wider">Swift</span>
            </div>
          </div>
          {/* Service 9: Maintenance & Support */}
          <div className="glass-card p-8 rounded-3xl flex flex-col group">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
              <span className="material-symbols-outlined text-primary text-3xl service-icon" data-icon="support_agent">support_agent</span>
            </div>
            <h3 className="font-heading-md text-heading-md text-text-high mb-4">Maintenance &amp; Support</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-grow">
              Proactive monitoring, security patching, and iterative feature updates to keep your technical assets future-proof.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 rounded-full bg-surface-container-high border border-white/5 text-[10px] font-bold text-primary uppercase tracking-wider">24/7 SLA</span>
              <span className="px-3 py-1 rounded-full bg-surface-container-high border border-white/5 text-[10px] font-bold text-primary uppercase tracking-wider">DevOps</span>
              <span className="px-3 py-1 rounded-full bg-surface-container-high border border-white/5 text-[10px] font-bold text-primary uppercase tracking-wider">CI/CD</span>
            </div>
          </div>
        </div>
        {/* Bottom CTA Card */}
        <div className="relative rounded-3xl p-12 overflow-hidden glass-card border border-white/10 group">
          {/* Inner glow effect */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px] group-hover:bg-primary/20 transition-all duration-700"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-tertiary-container/10 rounded-full blur-[100px] group-hover:bg-tertiary-container/20 transition-all duration-700"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="font-heading-md text-heading-md md:text-[48px] text-text-high mb-4 leading-tight">
                Need a Custom Solution?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Tell us about your project challenges. Our senior engineering team is ready to architect a solution that scales with your ambition.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a
                href="#contact"
                className="glow-button-primary px-8 py-4 rounded-2xl text-text-high font-bold text-body-sm tracking-wide transition-all active:scale-95 whitespace-nowrap text-center"
              >
                Start Your Project
              </a>
              <a
                href="#contact"
                className="px-8 py-4 rounded-2xl border border-primary/40 bg-primary/5 text-primary font-bold text-body-sm tracking-wide hover:bg-primary/10 transition-all active:scale-95 whitespace-nowrap text-center"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
