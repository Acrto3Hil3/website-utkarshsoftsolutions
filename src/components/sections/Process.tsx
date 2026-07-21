import { useEffect, useRef } from 'react'
import { assets } from '../../lib/assets'
import './Process.css'

/**
 * Development Process section.
 * Pixel-faithful conversion of the Stitch export
 * "utkarsh_soft_solutions_development_process_clean_refined".
 */
export default function Process() {
  const sectionRef = useRef<HTMLElement | null>(null)

  /* Replicates the export's inline script: on hovering a glass card the
     first material icon inside scales up and tilts, resetting on leave. */
  useEffect(() => {
    const root = sectionRef.current
    if (!root) return
    const cards = Array.from(root.querySelectorAll<HTMLElement>('.glass-card'))
    const cleanups = cards.map((card) => {
      const onEnter = (): void => {
        const icon = card.querySelector<HTMLElement>('.material-symbols-outlined')
        if (icon) {
          icon.style.transform = 'scale(1.1) rotate(-5deg)'
          icon.style.transition = 'transform 0.5s ease'
        }
      }
      const onLeave = (): void => {
        const icon = card.querySelector<HTMLElement>('.material-symbols-outlined')
        if (icon) {
          icon.style.transform = 'scale(1) rotate(0deg)'
        }
      }
      card.addEventListener('mouseenter', onEnter)
      card.addEventListener('mouseleave', onLeave)
      return () => {
        card.removeEventListener('mouseenter', onEnter)
        card.removeEventListener('mouseleave', onLeave)
      }
    })
    return () => cleanups.forEach((cleanup) => cleanup())
  }, [])

  return (
    <section
      ref={sectionRef}
      id="process"
      className="sec-process min-h-[1000px] py-xl px-margin max-w-max-width mx-auto flex flex-col justify-center"
    >
      {/* Header Group */}
      <div className="mb-lg max-w-4xl">
        <span className="inline-block px-4 py-1.5 mb-sm rounded-full bg-primary/10 text-primary font-label-caps text-label-caps border border-primary/20 tracking-widest">OUR PROCESS</span>
        <h2 className="font-hero-display text-hero-display text-text-high mb-md leading-tight">
          A Proven Development Process Built Around Your Success
        </h2>
        <p className="font-body-lg text-body-lg text-text-muted max-w-2xl">
          We combine rigorous engineering standards with agile flexibility to transform complex ideas into scalable, production-ready enterprise solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-center">
        {/* Horizontal Timeline Container */}
        <div className="lg:col-span-8 order-2 lg:order-1">
          <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Step 1: Discovery */}
            <div className="glass-card p-lg rounded-[24px] relative group overflow-hidden" style={{ background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div className="process-dot w-3 h-3 bg-primary rounded-full mb-md" />
              <h3 className="font-heading-md text-heading-md text-text-high mb-sm">Discovery</h3>
              <ul className="space-y-xs font-body-sm text-body-sm text-text-muted">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full" /> Business analysis</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full" /> Requirements</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full" /> Consultation</li>
              </ul>
              <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-8xl" style={{ fontVariationSettings: "'FILL' 1" }}>search</span>
              </div>
            </div>
            {/* Step 2: Planning */}
            <div className="glass-card p-lg rounded-[24px] relative group overflow-hidden" style={{ background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div className="process-dot w-3 h-3 bg-primary rounded-full mb-md" />
              <h3 className="font-heading-md text-heading-md text-text-high mb-sm">Planning</h3>
              <ul className="space-y-xs font-body-sm text-body-sm text-text-muted">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full" /> Architecture</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full" /> Technology Selection</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full" /> Roadmap</li>
              </ul>
              <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-8xl" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
              </div>
            </div>
            {/* Step 3: Design */}
            <div className="glass-card p-lg rounded-[24px] relative group overflow-hidden" style={{ background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div className="process-dot w-3 h-3 bg-primary rounded-full mb-md" />
              <h3 className="font-heading-md text-heading-md text-text-high mb-sm">Design</h3>
              <ul className="space-y-xs font-body-sm text-body-sm text-text-muted">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full" /> UX &amp; UI Design</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full" /> Wireframes</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full" /> Prototype</li>
              </ul>
              <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-8xl" style={{ fontVariationSettings: "'FILL' 1" }}>palette</span>
              </div>
            </div>
            {/* Step 4: Development */}
            <div className="glass-card p-lg rounded-[24px] relative group overflow-hidden" style={{ background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div className="process-dot w-3 h-3 bg-primary rounded-full mb-md" />
              <h3 className="font-heading-md text-heading-md text-text-high mb-sm">Development</h3>
              <ul className="space-y-xs font-body-sm text-body-sm text-text-muted">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full" /> Frontend &amp; Backend</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full" /> Database &amp; API</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full" /> Cloud Infrastructure</li>
              </ul>
              <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-8xl" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
              </div>
            </div>
            {/* Step 5: Testing */}
            <div className="glass-card p-lg rounded-[24px] relative group overflow-hidden" style={{ background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div className="process-dot w-3 h-3 bg-primary rounded-full mb-md" />
              <h3 className="font-heading-md text-heading-md text-text-high mb-sm">Testing</h3>
              <ul className="space-y-xs font-body-sm text-body-sm text-text-muted">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full" /> QA &amp; Security</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full" /> Performance</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full" /> Bug Fixes</li>
              </ul>
              <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-8xl" style={{ fontVariationSettings: "'FILL' 1" }}>biotech</span>
              </div>
            </div>
            {/* Step 6: Deployment */}
            <div className="glass-card p-lg rounded-[24px] relative group overflow-hidden" style={{ background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div className="process-dot w-3 h-3 bg-primary rounded-full mb-md" />
              <h3 className="font-heading-md text-heading-md text-text-high mb-sm">Deployment</h3>
              <ul className="space-y-xs font-body-sm text-body-sm text-text-muted">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full" /> Cloud Monitoring</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full" /> Maintenance</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full" /> Long-term Support</li>
              </ul>
              <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-8xl" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
              </div>
            </div>
          </div>
        </div>
        {/* Futuristic Illustration Side */}
        <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center relative">
          <div className="relative w-full aspect-square max-w-[500px]">
            {/* Floating Glass UI Elements */}
            <div className="absolute top-0 right-0 w-48 h-32 glass-card rounded-xl p-4 flex flex-col justify-between shadow-2xl animate-bounce" style={{ background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                <div className="w-2 h-2 rounded-full bg-green-500" />
              </div>
              <div className="h-2 w-full bg-primary/20 rounded" />
              <div className="h-2 w-2/3 bg-primary/20 rounded" />
            </div>
            <div className="absolute bottom-10 left-0 w-56 h-40 glass-card rounded-xl p-4 flex flex-col gap-3 shadow-2xl animate-pulse" style={{ background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-secondary text-sm">bolt</span>
                </div>
                <div className="font-label-caps text-label-caps text-text-high">SYSTEM STATUS</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-[10px]">
                  <span>Latency</span>
                  <span className="text-secondary">12ms</span>
                </div>
                <div className="w-full bg-surface-container-highest h-1 rounded overflow-hidden">
                  <div className="bg-secondary w-3/4 h-full" />
                </div>
              </div>
            </div>
            {/* Main Illustration Placeholder */}
            <div className="w-full h-full rounded-full border-2 border-dashed border-primary/20 flex items-center justify-center p-8">
              <div className="w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full relative flex items-center justify-center overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center opacity-80"
                  data-alt="A high-tech, futuristic 3D visualization of a software development lifecycle represented by glowing interconnected neural network nodes and floating holographic code fragments. The scene is set in a deep navy void with vibrant orange and electric blue lighting. Minimalist enterprise aesthetic with sharp cinematic depth of field and soft glassmorphic textures."
                  style={{ backgroundImage: `url('${assets.processVisual}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom CTA Section */}
      <div className="mt-xl flex flex-col md:flex-row items-center justify-between p-lg glass-card rounded-[32px] border-glow" style={{ background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div>
          <h2 className="font-heading-md text-heading-md text-text-high">Ready to Start Your Project?</h2>
          <p className="font-body-sm text-body-sm text-text-muted">Schedule a free 30-minute consultation with our senior architects.</p>
        </div>
        <div className="mt-md md:mt-0 flex items-center gap-sm">
          <a href="#contact" className="primary-btn px-lg py-sm text-white font-bold text-body-lg flex items-center gap-xs">
            Book Discovery Call
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
          <a href="#projects" className="px-lg py-sm border border-primary/30 rounded-[16px] text-primary hover:bg-primary/5 transition-colors font-bold text-center">
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  )
}
