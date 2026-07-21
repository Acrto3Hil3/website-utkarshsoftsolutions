import { motion } from 'framer-motion'
import { assets } from '../../lib/assets'
import { siteConfig } from '../../lib/site-config'
import './Founder.css'

export default function Founder() {
  return (
    <motion.section
      id="founder"
      className="sec-founder relative"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      {/* Aurora Accents */}
      <div className="aurora-bg top-[-20%] left-[-10%] bg-primary" />
      <div className="aurora-bg top-[20%] right-[-10%] bg-tertiary" />
      {/* Founder & Introduction Section */}
      <div className="max-w-max-width mx-auto px-margin py-lg grid grid-cols-1 md:grid-cols-[40%_60%] gap-xl items-start transition-all duration-1000 opacity-100 translate-y-0">
        {/* Left: Portrait */}
        <div className="flex flex-col items-center md:items-start space-y-md">
          <div className="relative p-base glass-card rounded-[32px] portrait-glow overflow-hidden group">
            <img
              alt="Subhash Yadav"
              className="w-full h-auto rounded-[28px] object-cover aspect-[4/5] transition-all duration-700"
              src={assets.founderPortrait}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-deep via-transparent to-transparent opacity-60" />
          </div>
          <div className="text-center md:text-left pt-sm">
            <h2 className="font-heading-md text-heading-md text-text-high">Subhash Yadav</h2>
            <p className="font-body-lg text-body-lg text-primary opacity-80 mb-sm">Founder &amp; CTO</p>
            <div className="flex justify-center md:justify-start gap-sm">
              <a
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-primary"
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <span className="material-symbols-outlined">share</span>
              </a>
              <a
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-primary"
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <span className="material-symbols-outlined">code</span>
              </a>
              <a
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-primary"
                href={siteConfig.social.email}
                aria-label="Email"
              >
                <span className="material-symbols-outlined">mail</span>
              </a>
              <a
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-primary"
                href={siteConfig.social.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Portfolio"
              >
                <span className="material-symbols-outlined">account_circle</span>
              </a>
            </div>
          </div>
        </div>
        {/* Right: Story */}
        <div className="space-y-md">
          <div className="inline-flex items-center px-sm py-xs rounded-full bg-primary/10 border border-primary/20">
            <span className="font-label-caps text-label-caps text-primary uppercase">Meet the Founder</span>
          </div>
          <h1 className="font-section-title text-section-title md:text-section-title text-text-high leading-tight">
            Building Software That Creates Real Business Impact.
          </h1>
          <p className="font-body-lg text-body-lg text-text-muted max-w-2xl">
            With over a decade of experience in engineering high-scale distributed systems, I founded Utkarsh Soft
            Solutions to bridge the gap between complex engineering and business profitability. My vision is to
            democratize advanced AI architectures for enterprise-level growth, ensuring that technology serves as a
            multiplier, not a bottleneck.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter pt-md">
            <div className="glass-card p-lg rounded-xl">
              <span
                className="material-symbols-outlined text-primary mb-sm text-heading-md"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                visibility
              </span>
              <h3 className="font-heading-md text-heading-md text-text-high mb-xs">Our Vision</h3>
              <p className="font-body-sm text-body-sm text-text-muted">
                To become the global architectural anchor for businesses transiting into the AI-first economy.
              </p>
            </div>
            <div className="glass-card p-lg rounded-xl">
              <span
                className="material-symbols-outlined text-tertiary mb-sm text-heading-md"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                rocket_launch
              </span>
              <h3 className="font-heading-md text-heading-md text-text-high mb-xs">Our Mission</h3>
              <p className="font-body-sm text-body-sm text-text-muted">
                Accelerating innovation by delivering scalable, secure, and intelligent software infrastructures.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Core Values Section */}
      <div className="max-w-max-width mx-auto px-margin py-xl transition-all duration-1000 opacity-100 translate-y-0">
        <div className="text-center mb-lg">
          <h2 className="font-section-title text-section-title text-text-high">Core Values</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <div className="glass-card p-lg rounded-xl text-center group">
            <div className="w-16 h-16 mx-auto mb-md glass-card rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-heading-md">lightbulb</span>
            </div>
            <h4 className="font-heading-md text-heading-md text-text-high mb-sm">Innovation</h4>
            <p className="font-body-sm text-body-sm text-text-muted">
              Pushing boundaries with cutting-edge AI and cloud-native solutions.
            </p>
          </div>
          <div className="glass-card p-lg rounded-xl text-center group">
            <div className="w-16 h-16 mx-auto mb-md glass-card rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-heading-md">verified_user</span>
            </div>
            <h4 className="font-heading-md text-heading-md text-text-high mb-sm">Integrity</h4>
            <p className="font-body-sm text-body-sm text-text-muted">
              Transparent communication and ethical engineering at every step.
            </p>
          </div>
          <div className="glass-card p-lg rounded-xl text-center group">
            <div className="w-16 h-16 mx-auto mb-md glass-card rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-heading-md">diamond</span>
            </div>
            <h4 className="font-heading-md text-heading-md text-text-high mb-sm">Quality</h4>
            <p className="font-body-sm text-body-sm text-text-muted">
              Meticulous attention to code performance and user experience.
            </p>
          </div>
          <div className="glass-card p-lg rounded-xl text-center group">
            <div className="w-16 h-16 mx-auto mb-md glass-card rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-heading-md">handshake</span>
            </div>
            <h4 className="font-heading-md text-heading-md text-text-high mb-sm">Partnership</h4>
            <p className="font-body-sm text-body-sm text-text-muted">
              Your success is our success. We build for the long-term journey.
            </p>
          </div>
        </div>
      </div>
      {/* Leadership Principles Timeline */}
      <div className="max-w-max-width mx-auto px-margin py-xl overflow-hidden transition-all duration-1000 opacity-100 translate-y-0">
        <h2 className="font-section-title text-section-title text-text-high text-center mb-xl">
          Leadership Principles
        </h2>
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-lg md:gap-0">
          <div className="timeline-line hidden md:block" />
          <div className="relative z-10 flex flex-col items-center group">
            <div className="w-12 h-12 bg-surface glass-card rounded-full border-2 border-primary/40 flex items-center justify-center mb-sm group-hover:glow-icon transition-all">
              <span className="font-body-lg font-bold text-primary">01</span>
            </div>
            <h5 className="font-heading-md text-body-lg text-text-high">Think</h5>
            <p className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity text-primary font-label-caps whitespace-nowrap">
              Conceptualize
            </p>
          </div>
          <div className="relative z-10 flex flex-col items-center group">
            <div className="w-12 h-12 bg-surface glass-card rounded-full border-2 border-primary/40 flex items-center justify-center mb-sm group-hover:glow-icon transition-all">
              <span className="font-body-lg font-bold text-primary">02</span>
            </div>
            <h5 className="font-heading-md text-body-lg text-text-high">Discover</h5>
            <p className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity text-primary font-label-caps whitespace-nowrap">
              Research
            </p>
          </div>
          <div className="relative z-10 flex flex-col items-center group">
            <div className="w-12 h-12 bg-surface glass-card rounded-full border-2 border-primary/40 flex items-center justify-center mb-sm group-hover:glow-icon transition-all">
              <span className="font-body-lg font-bold text-primary">03</span>
            </div>
            <h5 className="font-heading-md text-body-lg text-text-high">Design</h5>
            <p className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity text-primary font-label-caps whitespace-nowrap">
              Architect
            </p>
          </div>
          <div className="relative z-10 flex flex-col items-center group">
            <div className="w-12 h-12 bg-surface glass-card rounded-full border-2 border-primary/40 flex items-center justify-center mb-sm group-hover:glow-icon transition-all">
              <span className="font-body-lg font-bold text-primary">04</span>
            </div>
            <h5 className="font-heading-md text-body-lg text-text-high">Build</h5>
            <p className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity text-primary font-label-caps whitespace-nowrap">
              Engineer
            </p>
          </div>
          <div className="relative z-10 flex flex-col items-center group">
            <div className="w-12 h-12 bg-surface glass-card rounded-full border-2 border-primary/40 flex items-center justify-center mb-sm group-hover:glow-icon transition-all">
              <span className="font-body-lg font-bold text-primary">05</span>
            </div>
            <h5 className="font-heading-md text-body-lg text-text-high">Scale</h5>
            <p className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity text-primary font-label-caps whitespace-nowrap">
              Optimize
            </p>
          </div>
          <div className="relative z-10 flex flex-col items-center group">
            <div className="w-12 h-12 bg-surface glass-card rounded-full border-2 border-primary/40 flex items-center justify-center mb-sm group-hover:glow-icon transition-all">
              <span className="font-body-lg font-bold text-primary">06</span>
            </div>
            <h5 className="font-heading-md text-body-lg text-text-high">Support</h5>
            <p className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity text-primary font-label-caps whitespace-nowrap">
              Maintain
            </p>
          </div>
        </div>
      </div>
      {/* Quote Section */}
      <div className="max-w-max-width mx-auto px-margin py-xl transition-all duration-1000 opacity-100 translate-y-0">
        <div className="glass-card p-xl rounded-[40px] relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="w-full h-full bg-gradient-to-br from-primary to-transparent" />
          </div>
          <span
            className="material-symbols-outlined text-primary text-hero-display opacity-20 mb-md"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            format_quote
          </span>
          <blockquote className="font-heading-md text-heading-md md:text-section-title text-text-high max-w-4xl leading-snug mb-lg z-10">
            "We don't just build software. We build technology that helps businesses grow, automate and innovate."
          </blockquote>
          <div className="flex flex-col items-center z-10">
            <p className="font-heading-md text-heading-md text-primary font-bold italic tracking-widest">
              Subhash Yadav
            </p>
            <div className="h-1 w-24 bg-primary mt-sm rounded-full" />
          </div>
        </div>
      </div>
      {/* Bottom CTA */}
      <div className="max-w-max-width mx-auto px-margin py-xl transition-all duration-1000 opacity-100 translate-y-0">
        <div className="glass-card p-xl rounded-[32px] border-glow flex flex-col md:flex-row justify-between items-center gap-lg">
          <div className="text-center md:text-left">
            <h2 className="font-section-title text-section-title-mobile md:text-heading-md text-text-high mb-sm">
              Let's Build the Future Together.
            </h2>
            <p className="font-body-lg text-body-lg text-text-muted">Ready to transform your technical architecture?</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-sm w-full md:w-auto">
            <a
              className="bg-secondary text-on-secondary-container px-lg py-sm rounded-xl font-bold hover:opacity-90 active:scale-95 transition-all text-center"
              href="#contact"
            >
              Schedule a Discovery Call
            </a>
            <a
              className="border border-primary text-primary px-lg py-sm rounded-xl font-bold hover:bg-primary/10 active:scale-95 transition-all text-center"
              href="#contact"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
