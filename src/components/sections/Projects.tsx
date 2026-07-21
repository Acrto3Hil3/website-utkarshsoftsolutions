import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { siteConfig } from '../../lib/site-config'
import { trackEvent } from '../../lib/analytics'
import './Projects.css'

type ProjectEntry = { url: string | null; confidential?: boolean }

/**
 * Resolves a project card CTA through siteConfig.projects (keyed by the card's
 * exact title). With a live url → real external link; confidential → non-link
 * treatment; no entry yet → non-navigating placeholder. The design's classes
 * and label are used verbatim in every case.
 */
function ProjectCta({
  title,
  className,
  children,
}: {
  title: string
  className: string
  children: ReactNode
}) {
  const entry: ProjectEntry | undefined = siteConfig.projects[title]
  if (entry && entry.url) {
    return (
      <a
        className={className}
        href={entry.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent('project_link_click', { project: title })}
      >
        {children}
      </a>
    )
  }
  if (entry && entry.confidential) {
    return (
      <span className={className} aria-disabled="true" title="Confidential">
        {children}
      </span>
    )
  }
  return (
    <span className={className} aria-disabled="true">
      {children}
    </span>
  )
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement | null>(null)

  // Scroll reveal — ported 1:1 from the export's inline IntersectionObserver script.
  useEffect(() => {
    const root = sectionRef.current
    if (!root) return
    const revealElements = root.querySelectorAll('.scroll-reveal')

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.1 },
    )

    revealElements.forEach((el) => revealObserver.observe(el))
    return () => revealObserver.disconnect()
  }, [])

  return (
    <motion.section
      id="projects"
      ref={sectionRef}
      className="sec-projects relative pt-xl"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      {/* Atmospheric Background Assets */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 blur-[120px] rounded-full opacity-20 opacity-40 opacity-30"></div>
      </div>
      {/* Section 04: Featured Projects */}
      <div className="relative z-10 px-margin max-w-max-width mx-auto py-xl">
        {/* Header */}
        <div className="max-w-3xl mb-lg scroll-reveal">
          <span className="text-primary font-label-caps text-label-caps mb-4 block tracking-widest">FEATURED WORK</span>
          <h2 className="font-section-title text-section-title text-high leading-tight mb-sm">
            Software That Runs <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Real Businesses.</span>
          </h2>
          <p className="font-body-lg text-body-lg text-text-muted max-w-2xl">
            Every project represents a real business problem solved through thoughtful engineering, scalable architecture, and long-term partnership.
          </p>
        </div>
        {/* Filtering */}
        <div className="flex flex-wrap gap-3 mb-lg scroll-reveal" style={{ transitionDelay: '100ms' }}>
          <button type="button" className="px-6 py-2 rounded-full bg-primary text-on-primary font-bold text-sm">All</button>
          <button type="button" className="px-6 py-2 rounded-full border border-white/10 hover:border-primary/50 text-on-surface-variant text-sm transition-all">ERP</button>
          <button type="button" className="px-6 py-2 rounded-full border border-white/10 hover:border-primary/50 text-on-surface-variant text-sm transition-all">AI</button>
          <button type="button" className="px-6 py-2 rounded-full border border-white/10 hover:border-primary/50 text-on-surface-variant text-sm transition-all">Automation</button>
          <button type="button" className="px-6 py-2 rounded-full border border-white/10 hover:border-primary/50 text-on-surface-variant text-sm transition-all">Enterprise</button>
          <button type="button" className="px-6 py-2 rounded-full border border-white/10 hover:border-primary/50 text-on-surface-variant text-sm transition-all">Mobile Apps</button>
          <button type="button" className="px-6 py-2 rounded-full border border-white/10 hover:border-primary/50 text-on-surface-variant text-sm transition-all">Web Apps</button>
          <button type="button" className="px-6 py-2 rounded-full border border-white/10 hover:border-primary/50 text-on-surface-variant text-sm transition-all">Cloud</button>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-xl">
          {/* Project 1: Karma ERP */}
          <div className="glass-card rounded-[24px] p-lg flex flex-col scroll-reveal bg-surface-container/80 backdrop-blur-xl border-white/10">
            <div className="flex justify-between items-start mb-md">
              <div className="flex flex-col gap-2">
                <span className="status-badge bg-green-500/10 text-green-400 border border-green-500/20">LIVE</span>
                <span className="font-label-caps text-[11px] text-primary/80">Healthcare</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center border border-white/5">
                <span className="material-symbols-outlined text-primary">inventory_2</span>
              </div>
            </div>
            <h3 className="text-heading-md font-heading-md text-high mb-2">Karma ERP</h3>
            <p className="text-primary/70 text-sm font-medium mb-4">Client: Nature Touch Nutrition</p>
            <p className="font-body-lg text-body-lg text-text-muted mb-lg flex-grow">
              Architected a full-scale ERP system to handle complex inventory lifecycle and purchasing workflows for a leading nutrition brand.
            </p>
            <div className="flex flex-wrap gap-2 mb-lg">
              <span className="tech-chip px-3 py-1 rounded-md text-[12px] font-mono">Node.js</span>
              <span className="tech-chip px-3 py-1 rounded-md text-[12px] font-mono">React</span>
              <span className="tech-chip px-3 py-1 rounded-md text-[12px] font-mono">Postgres</span>
              <span className="tech-chip px-3 py-1 rounded-md text-[12px] font-mono">AWS</span>
            </div>
            <div className="flex items-center gap-4 pt-6 border-t border-white/5">
              <ProjectCta title="Karma ERP" className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                Visit Website <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </ProjectCta>
              <button type="button" className="text-on-surface-variant font-medium text-sm hover:text-high transition-colors">Case Study</button>
            </div>
          </div>
          {/* Project 2: FieldSathi */}
          <div className="glass-card rounded-[24px] p-lg flex flex-col scroll-reveal bg-surface-container/80 backdrop-blur-xl border-white/10" style={{ transitionDelay: '100ms' }}>
            <div className="flex justify-between items-start mb-md">
              <div className="flex flex-col gap-2">
                <span className="status-badge bg-blue-500/10 text-blue-400 border border-blue-500/20">LIVE</span>
                <span className="font-label-caps text-[11px] text-primary/80">Field Operations</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center border border-white/5">
                <span className="material-symbols-outlined text-primary">groups</span>
              </div>
            </div>
            <h3 className="text-heading-md font-heading-md text-high mb-2">FieldSathi</h3>
            <p className="text-primary/70 text-sm font-medium mb-4">Client: Weboapp Discovery</p>
            <p className="font-body-lg text-body-lg text-text-muted mb-lg flex-grow">
              Unified workforce management platform that tracks field personnel in real-time, optimizing route logistics and reporting accuracy.
            </p>
            <div className="flex flex-wrap gap-2 mb-lg">
              <span className="tech-chip px-3 py-1 rounded-md text-[12px] font-mono">Next.js</span>
              <span className="tech-chip px-3 py-1 rounded-md text-[12px] font-mono">MongoDB</span>
              <span className="tech-chip px-3 py-1 rounded-md text-[12px] font-mono">Flutter</span>
              <span className="tech-chip px-3 py-1 rounded-md text-[12px] font-mono">GCP</span>
            </div>
            <div className="flex items-center gap-4 pt-6 border-t border-white/5">
              <ProjectCta title="FieldSathi" className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                View App <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </ProjectCta>
              <button type="button" className="text-on-surface-variant font-medium text-sm hover:text-high transition-colors">Request Demo</button>
            </div>
          </div>
          {/* Project 3: AutoProof24 */}
          <div className="glass-card rounded-[24px] p-lg flex flex-col scroll-reveal bg-surface-container/80 backdrop-blur-xl border-white/10">
            <div className="flex justify-between items-start mb-md">
              <div className="flex flex-col gap-2">
                <span className="status-badge bg-orange-500/10 text-orange-400 border border-orange-500/20">DELIVERED</span>
                <span className="font-label-caps text-[11px] text-primary/80">Automotive</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center border border-white/5">
                <span className="material-symbols-outlined text-primary">directions_car</span>
              </div>
            </div>
            <h3 className="text-heading-md font-heading-md text-high mb-2">AutoProof24</h3>
            <p className="text-primary/70 text-sm font-medium mb-4">Client: Digital Engineering Excellence</p>
            <p className="font-body-lg text-body-lg text-text-muted mb-lg flex-grow">
              International digital verification platform for the French automotive market, ensuring compliance and secure history tracking.
            </p>
            <div className="flex flex-wrap gap-2 mb-lg">
              <span className="tech-chip px-3 py-1 rounded-md text-[12px] font-mono">React</span>
              <span className="tech-chip px-3 py-1 rounded-md text-[12px] font-mono">Node.js</span>
              <span className="tech-chip px-3 py-1 rounded-md text-[12px] font-mono">Azure</span>
              <span className="tech-chip px-3 py-1 rounded-md text-[12px] font-mono">Prisma</span>
            </div>
            <div className="flex items-center gap-4 pt-6 border-t border-white/5">
              <ProjectCta title="AutoProof24" className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                Visit Website <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </ProjectCta>
              <button type="button" className="text-on-surface-variant font-medium text-sm hover:text-high transition-colors">Case Study</button>
            </div>
          </div>
          {/* Project 4: Filofax */}
          <div className="glass-card rounded-[24px] p-lg flex flex-col scroll-reveal bg-surface-container/80 backdrop-blur-xl border-white/10" style={{ transitionDelay: '100ms' }}>
            <div className="flex justify-between items-start mb-md">
              <div className="flex flex-col gap-2">
                <span className="status-badge bg-purple-500/10 text-purple-400 border border-purple-500/20">CONFIDENTIAL</span>
                <span className="font-label-caps text-[11px] text-primary/80">Enterprise</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center border border-white/5">
                <span className="material-symbols-outlined text-primary">calendar_month</span>
              </div>
            </div>
            <h3 className="text-heading-md font-heading-md text-high mb-2">Filofax</h3>
            <p className="text-primary/70 text-sm font-medium mb-4">Client: eQuasar Solutions</p>
            <p className="font-body-lg text-body-lg text-text-muted mb-lg flex-grow">
              Enterprise-grade meeting scheduler and resource management engine built for massive concurrency and internal security.
            </p>
            <div className="flex flex-wrap gap-2 mb-lg">
              <span className="tech-chip px-3 py-1 rounded-md text-[12px] font-mono">Next.js 14</span>
              <span className="tech-chip px-3 py-1 rounded-md text-[12px] font-mono">PostgreSQL</span>
              <span className="tech-chip px-3 py-1 rounded-md text-[12px] font-mono">Docker</span>
            </div>
            <div className="flex items-center gap-4 pt-6 border-t border-white/5">
              <ProjectCta title="Filofax" className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                Request Demo <span className="material-symbols-outlined text-xs">lock</span>
              </ProjectCta>
            </div>
          </div>
          {/* Project 5: Malik Printers ERP */}
          <div className="glass-card rounded-[24px] p-lg flex flex-col scroll-reveal bg-surface-container/80 backdrop-blur-xl border-white/10">
            <div className="flex justify-between items-start mb-md">
              <div className="flex flex-col gap-2">
                <span className="status-badge bg-gray-500/10 text-gray-400 border border-gray-500/20">PRIVATE</span>
                <span className="font-label-caps text-[11px] text-primary/80">Printing</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center border border-white/5">
                <span className="material-symbols-outlined text-primary">print</span>
              </div>
            </div>
            <h3 className="text-heading-md font-heading-md text-high mb-2">Malik Printers ERP</h3>
            <p className="text-primary/70 text-sm font-medium mb-4">Client: Malik Printers</p>
            <p className="font-body-lg text-body-lg text-text-muted mb-lg flex-grow">
              Bespoke desktop ERP system for industrial printing operations, managing job queues, material waste, and financial ledgering.
            </p>
            <div className="flex flex-wrap gap-2 mb-lg">
              <span className="tech-chip px-3 py-1 rounded-md text-[12px] font-mono">Electron</span>
              <span className="tech-chip px-3 py-1 rounded-md text-[12px] font-mono">React</span>
              <span className="tech-chip px-3 py-1 rounded-md text-[12px] font-mono">SQLite</span>
            </div>
            <div className="flex items-center gap-4 pt-6 border-t border-white/5">
              <ProjectCta title="Malik Printers ERP" className="text-on-surface-variant font-medium text-sm hover:text-high transition-colors">
                Documentation
              </ProjectCta>
            </div>
          </div>
          {/* Project 6: Gupta Spare Parts */}
          <div className="glass-card rounded-[24px] p-lg flex flex-col scroll-reveal bg-surface-container/80 backdrop-blur-xl border-white/10" style={{ transitionDelay: '100ms' }}>
            <div className="flex justify-between items-start mb-md">
              <div className="flex flex-col gap-2">
                <span className="status-badge bg-green-500/10 text-green-400 border border-green-500/20">DELIVERED</span>
                <span className="font-label-caps text-[11px] text-primary/80">Retail</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center border border-white/5">
                <span className="material-symbols-outlined text-primary">point_of_sale</span>
              </div>
            </div>
            <h3 className="text-heading-md font-heading-md text-high mb-2">Gupta Spare Parts</h3>
            <p className="text-primary/70 text-sm font-medium mb-4">Client: Gupta Spare Parts</p>
            <p className="font-body-lg text-body-lg text-text-muted mb-lg flex-grow">
              High-velocity inventory and billing application optimized for retail storefronts with deep search and barcode integration.
            </p>
            <div className="flex flex-wrap gap-2 mb-lg">
              <span className="tech-chip px-3 py-1 rounded-md text-[12px] font-mono">React Native</span>
              <span className="tech-chip px-3 py-1 rounded-md text-[12px] font-mono">Firebase</span>
              <span className="tech-chip px-3 py-1 rounded-md text-[12px] font-mono">Stripe</span>
            </div>
            <div className="flex items-center gap-4 pt-6 border-t border-white/5">
              <ProjectCta title="Gupta Spare Parts" className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                View Demo <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </ProjectCta>
            </div>
          </div>
        </div>
        {/* Client Trust Strip */}
        <div className="marquee-container overflow-hidden py-lg scroll-reveal">
          <div className="animate-marquee">
            <div className="flex items-center gap-xl pr-xl">
              <span className="text-heading-md font-bold text-white/20 whitespace-nowrap">Nature Touch Nutrition</span>
              <span className="text-heading-md font-bold text-white/20 whitespace-nowrap">Weboapp Discovery</span>
              <span className="text-heading-md font-bold text-white/20 whitespace-nowrap">Digital Engineering Excellence</span>
              <span className="text-heading-md font-bold text-white/20 whitespace-nowrap">eQuasar Solutions</span>
              <span className="text-heading-md font-bold text-white/20 whitespace-nowrap">Malik Printers</span>
              <span className="text-heading-md font-bold text-white/20 whitespace-nowrap">Gupta Spare Parts</span>
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex items-center gap-xl pr-xl" aria-hidden="true">
              <span className="text-heading-md font-bold text-white/20 whitespace-nowrap">Nature Touch Nutrition</span>
              <span className="text-heading-md font-bold text-white/20 whitespace-nowrap">Weboapp Discovery</span>
              <span className="text-heading-md font-bold text-white/20 whitespace-nowrap">Digital Engineering Excellence</span>
              <span className="text-heading-md font-bold text-white/20 whitespace-nowrap">eQuasar Solutions</span>
              <span className="text-heading-md font-bold text-white/20 whitespace-nowrap">Malik Printers</span>
              <span className="text-heading-md font-bold text-white/20 whitespace-nowrap">Gupta Spare Parts</span>
            </div>
          </div>
        </div>
        {/* Section CTA */}
        <div className="mt-xl py-lg text-center max-w-4xl mx-auto scroll-reveal">
          <h3 className="font-section-title text-[48px] text-high leading-tight mb-sm">
            Ready to Build the Next <br /> <span className="text-primary">Success Story?</span>
          </h3>
          <p className="font-body-lg text-body-lg text-text-muted mb-lg max-w-2xl mx-auto">
            Whether you're replacing spreadsheets, launching a SaaS platform, automating operations, or modernizing legacy software—we're ready to build with you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-md">
            <a
              href="#contact"
              className="bg-[#ff6b00] hover:bg-[#ff8533] text-white px-lg py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-orange-500/20 glow-button text-center"
            >
              Schedule Discovery Call
            </a>
            <button
              type="button"
              className="border border-white/10 hover:border-white/30 text-high px-lg py-4 rounded-xl font-bold transition-all"
            >
              View Capability Deck
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
