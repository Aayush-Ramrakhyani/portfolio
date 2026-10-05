import { useState, useEffect } from 'react'

const links = ['about', 'services', 'projects', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <button onClick={() => scrollTo('hero')} className="nav-logo">
        aayush<span className="dot">.</span>
      </button>

      <div className="nav-right">
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(s => (
            <li key={s}>
              <button onClick={() => scrollTo(s)}>{s}</button>
            </li>
          ))}
        </ul>
        <button onClick={() => scrollTo('contact')} className="nav-cta">Let's Talk.</button>
      </div>

      <button className="hamburger" onClick={() => setOpen(o => !o)} aria-label="Menu">
        <span /><span /><span />
      </button>
    </nav>
  )
}
