import './Technology.css'

/**
 * Technology Stack & Engineering Excellence section.
 * Pixel-faithful conversion of the Stitch export
 * "utkarsh_soft_solutions_technology_stack_clean_refined".
 */
export default function Technology() {
  return (
    <section
      id="technology"
      className="sec-technology relative overflow-hidden"
    >
      <div className="tech-grid" />
      {/* Global Ambient Auroras - Refined Gradients */}
      <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-primary rounded-full aurora-blur z-0" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[700px] h-[700px] bg-secondary-container rounded-full aurora-blur z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-blue-900/10 rounded-full aurora-blur z-0" />
      <div className="relative z-10 pt-32 pb-xl max-w-max-width mx-auto px-margin">
        {/* Section Header */}
        <header className="text-center mb-xl">
          <div className="inline-block px-sm py-1 mb-md rounded-full bg-primary/5 border border-primary/20">
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest">Our Tech Stack</span>
          </div>
          <h2 className="font-section-title text-section-title text-high mb-sm max-w-4xl mx-auto text-sharp">
            Modern Technologies. Scalable Architecture. <span className="text-primary">Future-Ready Engineering.</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto text-sharp">
            We architect robust digital ecosystems using a curated selection of industry-leading technologies to ensure your enterprise scales without technical debt.
          </p>
        </header>
        {/* Main Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-center mb-xl">
          {/* Left: Technology Ecosystem */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Frontend */}
            <div className="glass-card p-md rounded-2xl">
              <div className="flex items-center gap-sm mb-sm text-primary">
                <span className="material-symbols-outlined">web</span>
                <span className="font-label-caps text-label-caps text-sharp">Frontend</span>
              </div>
              <div className="flex flex-wrap gap-xs">
                <span className="px-xs py-1 rounded-lg tech-pill text-xs font-semibold text-sharp">React</span>
                <span className="px-xs py-1 rounded-lg tech-pill text-xs font-semibold text-sharp">Next.js</span>
                <span className="px-xs py-1 rounded-lg tech-pill text-xs font-semibold text-sharp">TypeScript</span>
                <span className="px-xs py-1 rounded-lg tech-pill text-xs font-semibold text-sharp">Tailwind CSS</span>
              </div>
            </div>
            {/* Backend */}
            <div className="glass-card p-md rounded-2xl">
              <div className="flex items-center gap-sm mb-sm text-secondary">
                <span className="material-symbols-outlined">dns</span>
                <span className="font-label-caps text-label-caps text-sharp">Backend</span>
              </div>
              <div className="flex flex-wrap gap-xs">
                <span className="px-xs py-1 rounded-lg tech-pill text-xs font-semibold text-sharp">Node.js</span>
                <span className="px-xs py-1 rounded-lg tech-pill text-xs font-semibold text-sharp">NestJS</span>
                <span className="px-xs py-1 rounded-lg tech-pill text-xs font-semibold text-sharp">Python</span>
                <span className="px-xs py-1 rounded-lg tech-pill text-xs font-semibold text-sharp">Go</span>
              </div>
            </div>
            {/* AI & Data */}
            <div className="glass-card p-md rounded-2xl">
              <div className="flex items-center gap-sm mb-sm text-primary">
                <span className="material-symbols-outlined">psychology</span>
                <span className="font-label-caps text-label-caps text-sharp">AI &amp; LLMs</span>
              </div>
              <div className="flex flex-wrap gap-xs">
                <span className="px-xs py-1 rounded-lg tech-pill text-xs font-semibold text-sharp">OpenAI</span>
                <span className="px-xs py-1 rounded-lg tech-pill text-xs font-semibold text-sharp">Claude</span>
                <span className="px-xs py-1 rounded-lg tech-pill text-xs font-semibold text-sharp">LangChain</span>
                <span className="px-xs py-1 rounded-lg tech-pill text-xs font-semibold text-sharp">TensorFlow</span>
              </div>
            </div>
            {/* Cloud & Infrastructure */}
            <div className="glass-card p-md rounded-2xl">
              <div className="flex items-center gap-sm mb-sm text-secondary">
                <span className="material-symbols-outlined">cloud</span>
                <span className="font-label-caps text-label-caps text-sharp">Cloud &amp; Infra</span>
              </div>
              <div className="flex flex-wrap gap-xs">
                <span className="px-xs py-1 rounded-lg tech-pill text-xs font-semibold text-sharp">AWS</span>
                <span className="px-xs py-1 rounded-lg tech-pill text-xs font-semibold text-sharp">Docker</span>
                <span className="px-xs py-1 rounded-lg tech-pill text-xs font-semibold text-sharp">Kubernetes</span>
                <span className="px-xs py-1 rounded-lg tech-pill text-xs font-semibold text-sharp">Azure</span>
              </div>
            </div>
            {/* Databases */}
            <div className="glass-card p-md rounded-2xl">
              <div className="flex items-center gap-sm mb-sm text-primary">
                <span className="material-symbols-outlined">database</span>
                <span className="font-label-caps text-label-caps text-sharp">Databases</span>
              </div>
              <div className="flex flex-wrap gap-xs">
                <span className="px-xs py-1 rounded-lg tech-pill text-xs font-semibold text-sharp">Postgres</span>
                <span className="px-xs py-1 rounded-lg tech-pill text-xs font-semibold text-sharp">MongoDB</span>
                <span className="px-xs py-1 rounded-lg tech-pill text-xs font-semibold text-sharp">Redis</span>
                <span className="px-xs py-1 rounded-lg tech-pill text-xs font-semibold text-sharp">Pinecone</span>
              </div>
            </div>
            {/* DevOps */}
            <div className="glass-card p-md rounded-2xl">
              <div className="flex items-center gap-sm mb-sm text-secondary">
                <span className="material-symbols-outlined">terminal</span>
                <span className="font-label-caps text-label-caps text-sharp">Engineering Ops</span>
              </div>
              <div className="flex flex-wrap gap-xs">
                <span className="px-xs py-1 rounded-lg tech-pill text-xs font-semibold text-sharp">GitHub</span>
                <span className="px-xs py-1 rounded-lg tech-pill text-xs font-semibold text-sharp">CI/CD</span>
                <span className="px-xs py-1 rounded-lg tech-pill text-xs font-semibold text-sharp">Terraform</span>
                <span className="px-xs py-1 rounded-lg tech-pill text-xs font-semibold text-sharp">Prometheus</span>
              </div>
            </div>
          </div>
          {/* Right: Futuristic Architecture Illustration */}
          <div className="lg:col-span-6 relative h-[600px] flex items-center justify-center overflow-visible">
            {/* Mock Glass Panel Content */}
            <div className="relative z-10 w-full max-w-md animate-float">
              <div className="glass-card p-lg rounded-3xl relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blur-2xl" />
                <div className="flex flex-col gap-md">
                  <div className="flex justify-between items-center">
                    <span className="font-heading-md text-heading-md text-high text-sharp">System Topology</span>
                    <span className="material-symbols-outlined text-primary" data-weight="fill">settings_input_component</span>
                  </div>
                  {/* Visualization of API Nodes */}
                  <div className="space-y-sm">
                    <div className="h-12 w-full bg-white/5 rounded-xl border border-white/10 flex items-center px-sm gap-sm">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50" />
                      <div className="h-1.5 w-1/2 bg-white/10 rounded" />
                      <div className="ml-auto text-xs text-on-surface-variant font-mono">200 OK</div>
                    </div>
                    <div className="h-12 w-full bg-white/5 rounded-xl border border-white/10 flex items-center px-sm gap-sm">
                      <div className="w-2 h-2 rounded-full bg-primary shadow-sm shadow-primary/50" />
                      <div className="h-1.5 w-1/3 bg-white/10 rounded" />
                      <div className="ml-auto text-xs text-on-surface-variant font-mono">ASYNC</div>
                    </div>
                    <div className="h-12 w-full bg-white/5 rounded-xl border border-white/10 flex items-center px-sm gap-sm">
                      <div className="w-2 h-2 rounded-full bg-secondary shadow-sm shadow-secondary/50" />
                      <div className="h-1.5 w-2/3 bg-white/10 rounded" />
                      <div className="ml-auto text-xs text-on-surface-variant font-mono">BATCH</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -z-10 -bottom-8 -left-8 w-48 h-48 border border-white/10 rounded-full" />
              <div className="absolute -z-10 top-1/2 -right-12 w-32 h-32 border border-white/10 rounded-xl rotate-45" />
            </div>
          </div>
        </div>
        {/* Engineering Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-xl">
          <div className="glass-card p-lg rounded-2xl flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-xl bg-primary/5 flex items-center justify-center mb-md border border-white/10">
              <span className="material-symbols-outlined text-primary text-3xl">bolt</span>
            </div>
            <h3 className="font-heading-md text-xl text-high mb-xs text-sharp">Performance First</h3>
            <p className="font-body-sm text-on-surface-variant text-sharp">Optimized for sub-second latency and smooth high-concurrency handling.</p>
          </div>
          <div className="glass-card p-lg rounded-2xl flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-xl bg-secondary/5 flex items-center justify-center mb-md border border-white/10">
              <span className="material-symbols-outlined text-secondary text-3xl">verified_user</span>
            </div>
            <h3 className="font-heading-md text-xl text-high mb-xs text-sharp">Secure by Design</h3>
            <p className="font-body-sm text-on-surface-variant text-sharp">Zero-trust architecture with end-to-end encryption across all data layers.</p>
          </div>
          <div className="glass-card p-lg rounded-2xl flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-xl bg-primary/5 flex items-center justify-center mb-md border border-white/10">
              <span className="material-symbols-outlined text-primary text-3xl">grid_view</span>
            </div>
            <h3 className="font-heading-md text-xl text-high mb-xs text-sharp">Scalable Architecture</h3>
            <p className="font-body-sm text-on-surface-variant text-sharp">Distributed systems that grow seamlessly with your user base.</p>
          </div>
          <div className="glass-card p-lg rounded-2xl flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-xl bg-secondary/5 flex items-center justify-center mb-md border border-white/10">
              <span className="material-symbols-outlined text-secondary text-3xl">build_circle</span>
            </div>
            <h3 className="font-heading-md text-xl text-high mb-xs text-sharp">Maintainability</h3>
            <p className="font-body-sm text-on-surface-variant text-sharp">Clean code standards and rigorous CI/CD for worry-free evolution.</p>
          </div>
        </div>
        {/* Bottom CTA */}
        <div className="relative group">
          {/* Clean Glow Effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-[32px] opacity-10 group-hover:opacity-20 transition duration-1000" />
          <div className="relative glass-card p-xl rounded-[32px] overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-surface-container/60 to-surface-container/20 z-0" />
            <div className="relative z-10 max-w-2xl text-center lg:text-left">
              <h2 className="font-heading-md text-section-title text-high mb-sm text-sharp">Technology That Powers Business Growth</h2>
              <p className="font-body-lg text-on-surface-variant text-sharp">Ready to modernize your infrastructure? Let's discuss how our tech-first approach can drive your enterprise forward.</p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-md">
              <a href="#projects" className="px-lg py-4 rounded-2xl bg-white text-surface-deep font-bold hover:shadow-xl hover:shadow-white/10 transition-all duration-300 text-sharp text-center">Explore Projects</a>
              <a href="#contact" className="px-lg py-4 rounded-2xl border border-white/20 text-white font-bold hover:bg-white/5 transition-all duration-300 text-sharp backdrop-blur-sm text-center">Schedule Consultation</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
