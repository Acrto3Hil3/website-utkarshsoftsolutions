# Conversion conventions — Stitch → React (STRICT)

Source of truth: `E:\Utkarsh\website\stitch_utkarsh_soft_solutions_enterprise_portal\stitch_utkarsh_soft_solutions_enterprise_portal\<section>\code.html` (+ `screen.png` reference render).

## Prime directive
PIXEL-FAITHFUL. Do NOT redesign, restyle, "improve", or modernize anything. Copy the markup structure and Tailwind classes from `code.html` verbatim (adapted to JSX). All colors/spacing/typography tokens already exist in `tailwind.config.js` (identical to the export config).

## Mechanical rules
1. `class` → `className`; self-close `<img/>`, `<br/>`, `<input/>`; `style="a: b"` → `style={{a: 'b'}}`; strip HTML comments or convert to `{/* */}`.
2. Drop from each section's `code.html`: `<script src=tailwind>`, the `tailwind.config` script block, font `<link>`s, `<body>` wrapper, the `.noise-overlay` div (rendered once globally in App), and any `<nav>` (Navbar is a separate layout component) unless the section IS the nav/footer.
3. Section-specific `<style>` rules:
   - If a class already exists in `src/styles/globals.css` with IDENTICAL rules (glass-card, border-glow, noise-overlay, grid-pattern, aurora, aurora-1/2, text-glow, btn-primary-hover, float/ambient keyframes) → use the global class, do not re-declare.
   - If the section defines a DIFFERENT version of a shared class name, or its own custom classes → put them in a co-located `<SectionName>.css`, scoped under a wrapper class `sec-<kebab-name>` (e.g. `.sec-services .glass-card { ... }`). Add `sec-<kebab-name>` to the section's root element. Import the css file from the component.
   - `animate-float`, `animate-float-delayed`, `animate-ambient` are Tailwind utilities now (configured) — use them directly.
4. Remote images (`https://lh3.googleusercontent.com/...`): import from `src/lib/assets.ts` — use the `asset(url, localName)` helper entries already mapped there. Never hardcode the URL in the component.
5. Local assets: `src/assets/images/{logo.png, founder-portrait.png, hero-visualization.png, enterprise-illustration.png}` — import via ES imports.
6. Links: nav/social/CTA links use `siteConfig` from `src/lib/site-config.ts`. Section root elements get an `id` for anchor navigation: home, about (trust/why-choose-us area), services, projects, technology, industries, process, founder, testimonials, contact.
7. Inline `<script>` behaviors (e.g. mouse-glow on .glass-card) → use the shared hook `useMouseGlow()` from `src/hooks/useMouseGlow.ts` (already implemented; call it once in the section component if the section's script used the glass-card mouse tracking).
8. Every `<img>` keeps its exact alt text (or gets a descriptive one if missing). Non-hero images get `loading="lazy"`.
9. Component per section: `src/components/sections/<Name>.tsx`, default export, no props. TypeScript strict — no `any`, no unused vars.
10. Text content: copy verbatim. Do not rewrite copy.
11. Buttons/links that are pure UI in the design ("Get Started", "View Projects") become `<a>` to the matching anchor (`#contact`, `#projects`) with the same classes.
12. Framer Motion: ONLY a subtle fade/slide-in on section entry is allowed (`motion.section` with `initial={{opacity: 0, y: 24}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, margin: '-80px'}} transition={{duration: 0.6}}`). Nothing else. Never animate individual design elements beyond what the export's CSS already does.
