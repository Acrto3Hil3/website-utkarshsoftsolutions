import { useEffect } from 'react'

/**
 * Replicates the Stitch export's inline script: tracks the pointer and sets
 * --mouse-x/--mouse-y CSS variables on every .glass-card element so the
 * frosted cards can render a subtle positional glow.
 */
export function useMouseGlow(): void {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const cards = document.querySelectorAll<HTMLElement>('.glass-card')
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect()
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
      })
    }
    window.addEventListener('mousemove', handler, { passive: true })
    return () => window.removeEventListener('mousemove', handler)
  }, [])
}
