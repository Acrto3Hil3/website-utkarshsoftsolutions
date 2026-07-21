import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { assets } from '../../lib/assets'
import { siteConfig } from '../../lib/site-config'
import { contactSchema, type ContactFormData } from '../../lib/contact-schema'
import { trackEvent } from '../../lib/analytics'
import './ContactFooter.css'

export default function ContactFooter() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      service: 'AI & Machine Learning',
      budget: '$5k - $15k',
      message: '',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('idle')
    trackEvent('contact_form_submit', { service: data.service })
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`)
      }
      const payload = (await res.json().catch(() => null)) as { category?: string } | null
      trackEvent(
        'contact_form_success',
        typeof payload?.category === 'string' ? { category: payload.category } : undefined,
      )
      setStatus('success')
      reset()
    } catch {
      trackEvent('contact_form_error')
      setStatus('error')
    }
  }

  // The QR code image is always rendered in this section — record one view per mount.
  useEffect(() => {
    trackEvent('qr_view')
  }, [])

  return (
    <motion.section
      id="contact"
      className="sec-contact relative"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid-pattern absolute inset-0 z-0" aria-hidden="true" />
      <div className="relative z-10">
        {/* Contact Section Header */}
        <div className="max-w-max-width mx-auto px-margin pt-xl pb-lg relative">
          <div className="aurora-glow absolute -top-20 -left-20 w-96 h-96" />
          <div className="flex flex-col items-start gap-sm max-w-4xl">
            <span className="font-label-caps text-label-caps text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20 tracking-widest uppercase">
              GET IN TOUCH
            </span>
            <h1 className="font-section-title text-section-title text-text-high mt-4">
              Let's Build Software That Moves Your Business Forward.
            </h1>
            <p className="font-body-lg text-body-lg text-text-muted mt-2 max-w-2xl">
              Whether you're building an AI platform, ERP system, automation workflow, enterprise software, cloud
              infrastructure or a custom web application, Utkarsh Soft Solutions is ready to become your long-term
              technology partner.
            </p>
          </div>
        </div>
        {/* Main Layout: Two Columns */}
        <div className="max-w-max-width mx-auto px-margin grid grid-cols-1 lg:grid-cols-12 gap-lg pb-xl">
          {/* Left Column: Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-sm">
            <div className="glass-card p-sm flex items-center gap-md">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <p className="text-text-muted font-label-caps text-[10px] uppercase tracking-tighter">Email Address</p>
                <p className="text-text-high font-medium">utkarshsoftsolutions@gmail.com</p>
              </div>
            </div>
            <div className="glass-card p-sm flex items-center gap-md">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div>
                <p className="text-text-muted font-label-caps text-[10px] uppercase tracking-tighter">Phone Number</p>
                <p className="text-text-high font-medium">+91 62838 44258</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-sm">
              <div className="glass-card p-sm">
                <span className="material-symbols-outlined text-primary mb-2">schedule</span>
                <p className="text-text-muted font-label-caps text-[10px] uppercase tracking-tighter">
                  Operational Hours
                </p>
                <p className="text-text-high font-medium">Mon-Fri 9-5 IST</p>
              </div>
              <div className="glass-card p-sm">
                <span className="material-symbols-outlined text-primary mb-2">public</span>
                <p className="text-text-muted font-label-caps text-[10px] uppercase tracking-tighter">Coverage</p>
                <p className="text-text-high font-medium">Remote • Worldwide</p>
              </div>
            </div>
            <div className="glass-card p-sm flex items-center justify-between">
              <div className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-secondary">bolt</span>
                <div>
                  <p className="text-text-muted font-label-caps text-[10px] uppercase tracking-tighter">
                    Response Time
                  </p>
                  <p className="text-text-high font-medium">{'< 24 Hours'}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <span className="text-emerald-400 text-xs font-semibold">Online</span>
              </div>
            </div>
            {/* QR Code Feature */}
            <div className="glass-card p-md mt-sm border-secondary/20 relative overflow-hidden group">
              <div className="orange-glow absolute -bottom-10 -right-10 w-48 h-48 opacity-50" />
              <div className="flex items-center gap-md relative z-10">
                <div className="w-32 h-32 p-2 bg-white rounded-2xl flex-shrink-0">
                  <img
                    alt="Connect with Utkarsh Soft Solutions QR Code"
                    className="w-full h-full object-contain"
                    src={assets.qrCode}
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="text-text-high font-bold text-xl mb-1">One Scan. Every Connection.</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Scan to instantly access our LinkedIn, GitHub, Portfolio, WhatsApp and all professional profiles
                    from one place.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-md lg:p-lg border-white/10">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-sm" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-text-muted uppercase tracking-wider" htmlFor="contact-name">
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    className="w-full px-4 py-3 rounded-2xl"
                    placeholder="John Doe"
                    type="text"
                    {...register('name')}
                  />
                  {errors.name && (
                    <p className="font-body-sm text-xs text-error" role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-text-muted uppercase tracking-wider" htmlFor="contact-company">
                    Company
                  </label>
                  <input
                    id="contact-company"
                    className="w-full px-4 py-3 rounded-2xl"
                    placeholder="Acme Inc."
                    type="text"
                    {...register('company')}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-text-muted uppercase tracking-wider" htmlFor="contact-email">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    className="w-full px-4 py-3 rounded-2xl"
                    placeholder="john@company.com"
                    type="email"
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="font-body-sm text-xs text-error" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-text-muted uppercase tracking-wider" htmlFor="contact-phone">
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    className="w-full px-4 py-3 rounded-2xl"
                    placeholder="+1 (555) 000-0000"
                    type="tel"
                    {...register('phone')}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-text-muted uppercase tracking-wider" htmlFor="contact-service">
                    Service Required
                  </label>
                  <select
                    id="contact-service"
                    className="w-full px-4 py-3 rounded-2xl appearance-none"
                    {...register('service')}
                  >
                    <option>AI &amp; Machine Learning</option>
                    <option>Custom Web Application</option>
                    <option>ERP/Enterprise Systems</option>
                    <option>Cloud Infrastructure</option>
                    <option>Other</option>
                  </select>
                  {errors.service && (
                    <p className="font-body-sm text-xs text-error" role="alert">
                      {errors.service.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-text-muted uppercase tracking-wider" htmlFor="contact-budget">
                    Budget Range
                  </label>
                  <select
                    id="contact-budget"
                    className="w-full px-4 py-3 rounded-2xl appearance-none"
                    {...register('budget')}
                  >
                    <option>$5k - $15k</option>
                    <option>$15k - $50k</option>
                    <option>$50k+</option>
                    <option>Not Disclosed</option>
                  </select>
                </div>
                <div className="md:col-span-2 flex flex-col gap-2">
                  <label className="text-xs font-semibold text-text-muted uppercase tracking-wider" htmlFor="contact-message">
                    Project Description
                  </label>
                  <textarea
                    id="contact-message"
                    className="w-full px-4 py-3 rounded-2xl"
                    placeholder="Tell us about your project goals and requirements..."
                    rows={4}
                    {...register('message')}
                  />
                  {errors.message && (
                    <p className="font-body-sm text-xs text-error" role="alert">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <div className="md:col-span-2 flex flex-col sm:flex-row gap-sm mt-md">
                  <button
                    className="flex-1 bg-secondary text-white font-bold py-4 px-8 rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-secondary/20 disabled:opacity-50"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Schedule Free Consultation
                  </button>
                  <button
                    className="flex-1 border border-primary/30 bg-primary/5 text-primary font-bold py-4 px-8 rounded-2xl hover:bg-primary/10 transition-all"
                    type="button"
                    onClick={() => trackEvent('download', { item: 'capability_deck' })}
                  >
                    Download Capability Deck
                  </button>
                </div>
                {status === 'success' && (
                  <p className="md:col-span-2 font-body-sm text-body-sm text-primary" role="status">
                    Thank you — your message has been sent. We'll get back to you within 24 hours.
                  </p>
                )}
                {status === 'error' && (
                  <p className="md:col-span-2 font-body-sm text-body-sm text-error" role="alert">
                    Something went wrong while sending your message. Please try again or email us directly.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
        {/* Connect Hub */}
        <div className="max-w-max-width mx-auto px-margin pb-xl">
          <div className="glass-card p-md flex flex-col md:flex-row justify-between items-center gap-md border-white/5">
            <p className="font-label-caps text-text-muted tracking-widest text-xs uppercase">
              Connect Across The Ecosystem
            </p>
            <div className="flex flex-wrap justify-center gap-sm">
              <a
                className="w-12 h-12 glass-card flex items-center justify-center hover:text-primary hover:border-primary/50 transition-all"
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                aria-label="LinkedIn"
                onClick={() => trackEvent('social_click', { network: 'linkedin' })}
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                className="w-12 h-12 glass-card flex items-center justify-center hover:text-primary hover:border-primary/50 transition-all"
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                aria-label="GitHub"
                onClick={() => trackEvent('social_click', { network: 'github' })}
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                className="w-12 h-12 glass-card flex items-center justify-center hover:text-primary hover:border-primary/50 transition-all"
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                aria-label="WhatsApp"
                onClick={() => trackEvent('whatsapp_click')}
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.111 1.462 4.795 1.463 5.405 0 9.803-4.397 9.805-9.802 0-2.618-1.02-5.079-2.872-6.932-1.851-1.853-4.311-2.873-6.93-2.873-5.405 0-9.803 4.397-9.805 9.802 0 1.812.487 3.535 1.411 5.011l-.955 3.486 3.546-.931zm11.387-5.464c-.301-.15-1.779-.878-2.055-.978-.275-.1-.475-.15-.675.15-.2.3-.775 1.002-.95 1.202-.175.2-.35.225-.651.075-.3-.15-1.264-.467-2.408-1.487-.888-.793-1.488-1.773-1.663-2.074-.175-.3-.019-.462.131-.611.135-.134.301-.35.451-.525.149-.175.199-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.628-.925-2.228-.243-.584-.489-.505-.675-.514-.175-.008-.375-.01-.575-.01s-.525.075-.8.375c-.275.3-1.05 1.027-1.05 2.505s1.075 2.903 1.225 3.103c.15.2 2.116 3.229 5.125 4.527.716.309 1.275.493 1.71.632.719.228 1.373.196 1.891.118.577-.087 1.779-.726 2.029-1.428.25-.702.25-1.303.175-1.428-.075-.125-.275-.2-.575-.35z" />
                </svg>
              </a>
              <a
                className="w-12 h-12 glass-card flex items-center justify-center hover:text-primary hover:border-primary/50 transition-all"
                href={siteConfig.social.email}
                title="Email"
                aria-label="Email"
                onClick={() => trackEvent('email_click')}
              >
                <span className="material-symbols-outlined">alternate_email</span>
              </a>
              <a
                className="w-12 h-12 glass-card flex items-center justify-center hover:text-primary hover:border-primary/50 transition-all"
                href={siteConfig.social.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                title="Portfolio"
                aria-label="Portfolio"
                onClick={() => trackEvent('social_click', { network: 'portfolio' })}
              >
                <span className="material-symbols-outlined">work</span>
              </a>
            </div>
          </div>
        </div>
        {/* Final CTA Banner */}
        <div className="max-w-max-width mx-auto px-margin pb-xl">
          <div className="relative rounded-[32px] overflow-hidden p-lg md:p-xl text-center bg-surface-raised border border-white/5">
            <div className="aurora-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30" />
            <div className="relative z-10">
              <h2 className="font-section-title text-section-title text-text-high mb-md max-w-3xl mx-auto">
                Ready to Build the Future Together?
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-sm mt-md">
                <a
                  className="bg-secondary text-white font-bold py-5 px-10 rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-secondary/30 text-center"
                  href="#contact"
                >
                  Start Your Project
                </a>
                <a
                  className="bg-transparent border border-primary text-primary font-bold py-5 px-10 rounded-2xl hover:bg-primary/10 active:scale-95 transition-all text-center"
                  href="#contact"
                >
                  Book Discovery Call
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="bg-surface-deep border-t border-white/5 pt-xl pb-lg relative">
          <div className="max-w-max-width mx-auto px-margin">
            <div className="flex flex-col lg:flex-row justify-between gap-xl">
              <div className="flex flex-col gap-sm max-w-sm">
                <h2 className="text-text-high font-bold text-heading-md">Utkarsh Soft Solutions</h2>
                <p className="text-primary font-medium tracking-widest text-sm">Build • Automate • Scale</p>
                <p className="text-text-muted mt-4">
                  Engineered with Innovation. Built for Growth. Delivering high-performance software architectures for
                  the next generation of business.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-lg">
                <div className="flex flex-col gap-sm">
                  <h4 className="text-text-high font-bold">Company</h4>
                  <nav className="flex flex-col gap-2">
                    <a className="text-text-muted hover:text-primary transition-colors" href="#home">
                      Home
                    </a>
                    <a className="text-text-muted hover:text-primary transition-colors" href="#founder">
                      Founder
                    </a>
                    <a className="text-text-muted hover:text-primary transition-colors" href="#contact">
                      Contact
                    </a>
                  </nav>
                </div>
                <div className="flex flex-col gap-sm">
                  <h4 className="text-text-high font-bold">Services</h4>
                  <nav className="flex flex-col gap-2">
                    <a className="text-text-muted hover:text-primary transition-colors" href="#services">
                      Services
                    </a>
                    <a className="text-text-muted hover:text-primary transition-colors" href="#projects">
                      Projects
                    </a>
                    <a className="text-text-muted hover:text-primary transition-colors" href="#technology">
                      Technology
                    </a>
                  </nav>
                </div>
                <div className="flex flex-col gap-sm">
                  <h4 className="text-text-high font-bold">Industries</h4>
                  <nav className="flex flex-col gap-2">
                    <a className="text-text-muted hover:text-primary transition-colors" href="#industries">
                      FinTech
                    </a>
                    <a className="text-text-muted hover:text-primary transition-colors" href="#industries">
                      HealthTech
                    </a>
                    <a className="text-text-muted hover:text-primary transition-colors" href="#industries">
                      Enterprise
                    </a>
                  </nav>
                </div>
              </div>
            </div>
            <div className="mt-xl pt-lg border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-sm">
              <p className="text-text-muted text-sm">© 2026 Utkarsh Soft Solutions. All Rights Reserved.</p>
              <div className="flex gap-lg">
                <a className="text-text-muted text-xs hover:text-primary transition-colors" href="#">
                  Privacy Policy
                </a>
                <a className="text-text-muted text-xs hover:text-primary transition-colors" href="#">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </motion.section>
  )
}
