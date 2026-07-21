import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import { useMouseGlow } from './hooks/useMouseGlow'

// Below-the-fold sections are code-split and loaded lazily.
const TrustOverview = lazy(() => import('./components/sections/TrustOverview'))
const Services = lazy(() => import('./components/sections/Services'))
const WhyChooseUs = lazy(() => import('./components/sections/WhyChooseUs'))
const Projects = lazy(() => import('./components/sections/Projects'))
const Technology = lazy(() => import('./components/sections/Technology'))
const Industries = lazy(() => import('./components/sections/Industries'))
const Process = lazy(() => import('./components/sections/Process'))
const Founder = lazy(() => import('./components/sections/Founder'))
const Testimonials = lazy(() => import('./components/sections/Testimonials'))
const ContactFooter = lazy(() => import('./components/sections/ContactFooter'))

function HomePage() {
  useMouseGlow()
  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <TrustOverview />
          <Services />
          <WhyChooseUs />
          <Projects />
          <Technology />
          <Industries />
          <Process />
          <Founder />
          <Testimonials />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <ContactFooter />
      </Suspense>
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
