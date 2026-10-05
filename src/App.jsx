import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const DARK_SECTIONS = ['about', 'projects']

export default function App() {
  useEffect(() => {
    const update = () => {
      const mid = window.scrollY + window.innerHeight / 2
      const isDark = DARK_SECTIONS.some(id => {
        const el = document.getElementById(id)
        if (!el) return false
        return mid >= el.offsetTop && mid < el.offsetTop + el.offsetHeight
      })
      document.body.setAttribute('data-theme', isDark ? 'dark' : 'light')
    }

    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
