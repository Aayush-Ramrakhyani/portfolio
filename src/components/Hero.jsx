import { useEffect, useState } from 'react'

const lines = [
  'Building cross-platform mobile apps...',
  'Flutter & Python developer...',
  'Turning ideas into polished apps...',
  'Clean code. Great UX. Every time.',
]

export default function Hero() {
  const [display, setDisplay] = useState('')
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const cur = lines[lineIdx]
    let timer

    if (!deleting && charIdx === cur.length) {
      timer = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setLineIdx(i => (i + 1) % lines.length)
    } else {
      const next = deleting ? charIdx - 1 : charIdx + 1
      timer = setTimeout(() => {
        setCharIdx(next)
        setDisplay(cur.slice(0, next))
      }, deleting ? 45 : 65)
    }

    return () => clearTimeout(timer)
  }, [charIdx, deleting, lineIdx])

  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero">
      <div className="hero-inner">
        <p className="hero-label">
          Mobile App Developer &nbsp;·&nbsp; Flutter &nbsp;·&nbsp; Python &nbsp;·&nbsp; Android
        </p>

        <h1 className="hero-name">
          Aayush<br />Ramrakhyani<span className="period">.</span>
        </h1>

        <div className="hero-typing">
          <span>{display}</span>
          <span className="cursor" />
        </div>

        <p className="hero-sub">
          I build clean, high-performance mobile applications — from cross-platform Flutter apps
          to Python-powered backends. I turn ideas into polished products, end to end.
        </p>

        <div className="hero-actions">
          <button onClick={() => scrollTo('projects')} className="btn-dark">
            View My Work
          </button>
          <button onClick={() => scrollTo('about')} className="btn-ghost">
            About me <i className="fas fa-arrow-right" />
          </button>
        </div>

        <div className="hero-scroll">
          <div className="scroll-line" />
          <span>scroll down</span>
        </div>
      </div>
    </section>
  )
}
