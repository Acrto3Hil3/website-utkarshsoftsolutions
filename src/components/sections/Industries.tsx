import { motion } from 'framer-motion'
import './Industries.css'

/**
 * Industry Solutions section.
 * Pixel-faithful conversion of the Stitch export
 * "utkarsh_soft_solutions_industry_solutions_section".
 */
export default function Industries() {
  return (
    <motion.section
      id="industries"
      className="sec-industries relative py-xl px-margin max-w-max-width mx-auto"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Elements */}
      <div className="aurora-bg">
        <div className="aurora-blue" />
        <div className="aurora-orange" />
      </div>
      {/* Header */}
      <div className="text-center mb-lg space-y-sm">
        <span className="inline-block px-sm py-xs bg-primary/10 text-primary font-label-caps text-label-caps rounded-full border border-primary/20">
          INDUSTRIES
        </span>
        <h2 className="font-section-title text-section-title text-text-high max-w-4xl mx-auto md:text-section-title text-section-title-mobile">
          Technology Solutions Designed for Every Industry.
        </h2>
        <p className="font-body-lg text-body-lg text-text-muted max-w-[720px] mx-auto">
          We combine deep technical expertise with industry-specific insights to architect scalable, high-performance software that drives enterprise evolution.
        </p>
      </div>
      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter mb-xl">
        {/* Healthcare */}
        <div className="glass-card p-md rounded-[24px] flex flex-col h-full">
          <div className="mb-sm">
            <span className="material-symbols-outlined text-text-high text-4xl transition-all duration-300" data-icon="medical_services">medical_services</span>
          </div>
          <h3 className="font-heading-md text-heading-md text-text-high mb-xs">Healthcare</h3>
          <p className="font-body-sm text-body-sm text-text-muted mb-md flex-grow">
            Secure, HIPAA-compliant platforms for telemedicine, patient data management, and AI-driven diagnostic assistance.
          </p>
          <div className="flex flex-wrap gap-xs">
            <span className="px-xs py-[2px] rounded-full bg-primary/5 border border-primary/20 text-[10px] font-bold text-primary uppercase">EHR Systems</span>
            <span className="px-xs py-[2px] rounded-full bg-primary/5 border border-primary/20 text-[10px] font-bold text-primary uppercase">Telehealth</span>
            <span className="px-xs py-[2px] rounded-full bg-primary/5 border border-primary/20 text-[10px] font-bold text-primary uppercase">AI Diagnostics</span>
          </div>
        </div>
        {/* Manufacturing */}
        <div className="glass-card p-md rounded-[24px] flex flex-col h-full">
          <div className="mb-sm">
            <span className="material-symbols-outlined text-text-high text-4xl transition-all duration-300" data-icon="factory">factory</span>
          </div>
          <h3 className="font-heading-md text-heading-md text-text-high mb-xs">Manufacturing</h3>
          <p className="font-body-sm text-body-sm text-text-muted mb-md flex-grow">
            Industry 4.0 solutions leveraging IoT, predictive maintenance, and real-time shop floor orchestration.
          </p>
          <div className="flex flex-wrap gap-xs">
            <span className="px-xs py-[2px] rounded-full bg-primary/5 border border-primary/20 text-[10px] font-bold text-primary uppercase">ERP</span>
            <span className="px-xs py-[2px] rounded-full bg-primary/5 border border-primary/20 text-[10px] font-bold text-primary uppercase">IoT Hub</span>
            <span className="px-xs py-[2px] rounded-full bg-primary/5 border border-primary/20 text-[10px] font-bold text-primary uppercase">Predictive</span>
          </div>
        </div>
        {/* Retail & Ecommerce */}
        <div className="glass-card p-md rounded-[24px] flex flex-col h-full">
          <div className="mb-sm">
            <span className="material-symbols-outlined text-text-high text-4xl transition-all duration-300" data-icon="shopping_bag">shopping_bag</span>
          </div>
          <h3 className="font-heading-md text-heading-md text-text-high mb-xs">Retail &amp; Ecommerce</h3>
          <p className="font-body-sm text-body-sm text-text-muted mb-md flex-grow">
            Omnichannel commerce architectures designed for high-velocity transactions and personalized customer journeys.
          </p>
          <div className="flex flex-wrap gap-xs">
            <span className="px-xs py-[2px] rounded-full bg-primary/5 border border-primary/20 text-[10px] font-bold text-primary uppercase">Inventory</span>
            <span className="px-xs py-[2px] rounded-full bg-primary/5 border border-primary/20 text-[10px] font-bold text-primary uppercase">POS Sync</span>
            <span className="px-xs py-[2px] rounded-full bg-primary/5 border border-primary/20 text-[10px] font-bold text-primary uppercase">Analytics</span>
          </div>
        </div>
        {/* Education */}
        <div className="glass-card p-md rounded-[24px] flex flex-col h-full">
          <div className="mb-sm">
            <span className="material-symbols-outlined text-text-high text-4xl transition-all duration-300" data-icon="school">school</span>
          </div>
          <h3 className="font-heading-md text-heading-md text-text-high mb-xs">Education</h3>
          <p className="font-body-sm text-body-sm text-text-muted mb-md flex-grow">
            LMS and ed-tech platforms focusing on interactive learning, student progress tracking, and remote collaboration.
          </p>
          <div className="flex flex-wrap gap-xs">
            <span className="px-xs py-[2px] rounded-full bg-primary/5 border border-primary/20 text-[10px] font-bold text-primary uppercase">LMS</span>
            <span className="px-xs py-[2px] rounded-full bg-primary/5 border border-primary/20 text-[10px] font-bold text-primary uppercase">V-Class</span>
            <span className="px-xs py-[2px] rounded-full bg-primary/5 border border-primary/20 text-[10px] font-bold text-primary uppercase">Reporting</span>
          </div>
        </div>
        {/* Agriculture */}
        <div className="glass-card p-md rounded-[24px] flex flex-col h-full">
          <div className="mb-sm">
            <span className="material-symbols-outlined text-text-high text-4xl transition-all duration-300" data-icon="agriculture">agriculture</span>
          </div>
          <h3 className="font-heading-md text-heading-md text-text-high mb-xs">Agriculture</h3>
          <p className="font-body-sm text-body-sm text-text-muted mb-md flex-grow">
            Precision farming tools incorporating satellite data, weather forecasting, and supply chain transparency.
          </p>
          <div className="flex flex-wrap gap-xs">
            <span className="px-xs py-[2px] rounded-full bg-primary/5 border border-primary/20 text-[10px] font-bold text-primary uppercase">Agri-IoT</span>
            <span className="px-xs py-[2px] rounded-full bg-primary/5 border border-primary/20 text-[10px] font-bold text-primary uppercase">Logistics</span>
            <span className="px-xs py-[2px] rounded-full bg-primary/5 border border-primary/20 text-[10px] font-bold text-primary uppercase">Financing</span>
          </div>
        </div>
        {/* Automotive */}
        <div className="glass-card p-md rounded-[24px] flex flex-col h-full">
          <div className="mb-sm">
            <span className="material-symbols-outlined text-text-high text-4xl transition-all duration-300" data-icon="directions_car">directions_car</span>
          </div>
          <h3 className="font-heading-md text-heading-md text-text-high mb-xs">Automotive</h3>
          <p className="font-body-sm text-body-sm text-text-muted mb-md flex-grow">
            Telematics, connected vehicle ecosystems, and digital showroom experiences for the next generation of mobility.
          </p>
          <div className="flex flex-wrap gap-xs">
            <span className="px-xs py-[2px] rounded-full bg-primary/5 border border-primary/20 text-[10px] font-bold text-primary uppercase">Connected</span>
            <span className="px-xs py-[2px] rounded-full bg-primary/5 border border-primary/20 text-[10px] font-bold text-primary uppercase">Fleet Management</span>
            <span className="px-xs py-[2px] rounded-full bg-primary/5 border border-primary/20 text-[10px] font-bold text-primary uppercase">AR/VR</span>
          </div>
        </div>
        {/* Finance */}
        <div className="glass-card p-md rounded-[24px] flex flex-col h-full">
          <div className="mb-sm">
            <span className="material-symbols-outlined text-text-high text-4xl transition-all duration-300" data-icon="account_balance">account_balance</span>
          </div>
          <h3 className="font-heading-md text-heading-md text-text-high mb-xs">Finance</h3>
          <p className="font-body-sm text-body-sm text-text-muted mb-md flex-grow">
            Ultra-secure fintech solutions for digital banking, algorithmic trading, and robust regulatory compliance.
          </p>
          <div className="flex flex-wrap gap-xs">
            <span className="px-xs py-[2px] rounded-full bg-primary/5 border border-primary/20 text-[10px] font-bold text-primary uppercase">FinTech</span>
            <span className="px-xs py-[2px] rounded-full bg-primary/5 border border-primary/20 text-[10px] font-bold text-primary uppercase">Compliance</span>
            <span className="px-xs py-[2px] rounded-full bg-primary/5 border border-primary/20 text-[10px] font-bold text-primary uppercase">Ledger</span>
          </div>
        </div>
        {/* Real Estate */}
        <div className="glass-card p-md rounded-[24px] flex flex-col h-full">
          <div className="mb-sm">
            <span className="material-symbols-outlined text-text-high text-4xl transition-all duration-300" data-icon="domain">domain</span>
          </div>
          <h3 className="font-heading-md text-heading-md text-text-high mb-xs">Real Estate</h3>
          <p className="font-body-sm text-body-sm text-text-muted mb-md flex-grow">
            PropTech solutions for automated property management, virtual tours, and data-driven investment analysis.
          </p>
          <div className="flex flex-wrap gap-xs">
            <span className="px-xs py-[2px] rounded-full bg-primary/5 border border-primary/20 text-[10px] font-bold text-primary uppercase">PropTech</span>
            <span className="px-xs py-[2px] rounded-full bg-primary/5 border border-primary/20 text-[10px] font-bold text-primary uppercase">CRM</span>
            <span className="px-xs py-[2px] rounded-full bg-primary/5 border border-primary/20 text-[10px] font-bold text-primary uppercase">Valuation</span>
          </div>
        </div>
        {/* Startups & SaaS */}
        <div className="glass-card p-md rounded-[24px] flex flex-col h-full">
          <div className="mb-sm">
            <span className="material-symbols-outlined text-text-high text-4xl transition-all duration-300" data-icon="rocket_launch">rocket_launch</span>
          </div>
          <h3 className="font-heading-md text-heading-md text-text-high mb-xs">Startups &amp; SaaS</h3>
          <p className="font-body-sm text-body-sm text-text-muted mb-md flex-grow">
            Rapid prototyping and scalable cloud-native architectures for visionary startups aiming for hyper-growth.
          </p>
          <div className="flex flex-wrap gap-xs">
            <span className="px-xs py-[2px] rounded-full bg-primary/5 border border-primary/20 text-[10px] font-bold text-primary uppercase">MVP Development</span>
            <span className="px-xs py-[2px] rounded-full bg-primary/5 border border-primary/20 text-[10px] font-bold text-primary uppercase">Scalability</span>
            <span className="px-xs py-[2px] rounded-full bg-primary/5 border border-primary/20 text-[10px] font-bold text-primary uppercase">Cloud</span>
          </div>
        </div>
      </div>
      {/* Interactive Solution Timeline */}
      <div className="relative py-lg mb-xl hidden md:block">
        <div className="text-center mb-md">
          <h4 className="font-label-caps text-label-caps text-text-muted tracking-widest uppercase">Our Architecture Process</h4>
        </div>
        <div className="relative px-lg">
          {/* Glowing Connector Line */}
          <svg className="absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 overflow-visible" fill="none">
            <line stroke="rgba(173, 198, 255, 0.1)" strokeWidth="1" x1="0" x2="100%" y1="1" y2="1" />
            <line className="glow-line-path" stroke="#4d8eff" strokeWidth="2" style={{ filter: 'drop-shadow(0 0 5px #4d8eff)' }} x1="0" x2="100%" y1="1" y2="1" />
          </svg>
          <div className="flex justify-between relative z-10">
            <div className="flex flex-col items-center group w-40">
              <div className="timeline-node mb-sm" />
              <span className="font-body-sm text-body-sm text-text-high text-center group-hover:text-primary transition-colors">Business Analysis</span>
            </div>
            <div className="flex flex-col items-center group w-40">
              <div className="timeline-node mb-sm" />
              <span className="font-body-sm text-body-sm text-text-high text-center group-hover:text-primary transition-colors">Industry Research</span>
            </div>
            <div className="flex flex-col items-center group w-40">
              <div className="timeline-node mb-sm" />
              <span className="font-body-sm text-body-sm text-text-high text-center group-hover:text-primary transition-colors">Solution Architecture</span>
            </div>
            <div className="flex flex-col items-center group w-40">
              <div className="timeline-node mb-sm" />
              <span className="font-body-sm text-body-sm text-text-high text-center group-hover:text-primary transition-colors">Development</span>
            </div>
            <div className="flex flex-col items-center group w-40">
              <div className="timeline-node mb-sm" />
              <span className="font-body-sm text-body-sm text-text-high text-center group-hover:text-primary transition-colors">Deployment</span>
            </div>
            <div className="flex flex-col items-center group w-40">
              <div className="timeline-node mb-sm" />
              <span className="font-body-sm text-body-sm text-text-high text-center group-hover:text-primary transition-colors">Long-Term Growth</span>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom CTA */}
      <div className="glass-card p-lg rounded-[32px] text-center max-w-5xl mx-auto relative overflow-hidden group">
        {/* Subtle internal glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
        <div className="relative z-10 space-y-md">
          <h3 className="font-section-title text-section-title md:text-section-title text-section-title-mobile text-text-high leading-tight">
            No Matter Your Industry, We Build Software That Solves Real Problems.
          </h3>
          <p className="font-body-lg text-body-lg text-text-muted max-w-2xl mx-auto">
            Ready to transform your operations with custom architecture? Partner with Utkarsh Soft Solutions to build the foundation of your digital future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-sm pt-sm">
            <a href="#contact" className="btn-primary font-body-lg text-body-lg px-lg py-sm rounded-xl w-full sm:w-auto font-bold text-center">
              Discuss Your Project
            </a>
            <a href="#services" className="btn-secondary font-body-lg text-body-lg px-lg py-sm rounded-xl w-full sm:w-auto font-bold text-center">
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
