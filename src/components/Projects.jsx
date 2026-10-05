import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'

const featured = [
  {
    name: 'Trading Dashboard',
    year: '2026',
    stack: 'React · Python · FastAPI · PostgreSQL · WebSocket',
    cats: ['FinTech', 'Real-time', 'Full Stack'],
    desc: 'Real-time Indian stock market dashboard with live WebSocket tick streaming and 10+ technical indicators (EMA, Supertrend, RSI, MACD). Automated buy/sell signal generation with broker integrations for Zerodha and Dhan, Telegram alerts, and backtesting.',
    img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80&auto=format&fit=crop',
    github: 'https://github.com/Aayush-Ramrakhyani',
  },
  {
    name: 'Personal Finance Intelligence',
    year: '2026',
    stack: 'Flutter · FastAPI · PostgreSQL · Redis · AI',
    cats: ['Finance', 'AI-Powered', 'Full Stack'],
    desc: 'Full-stack personal finance manager with an AI assistant (GPT-4/Gemini) for conversational insights. Features CSV bank statement import, automated expense categorisation, budget tracking, and an analytics dashboard — built for Indian users (₹ INR, UPI).',
    img: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80&auto=format&fit=crop',
    github: 'https://github.com/Aayush-Ramrakhyani',
  },
  {
    name: 'DIR-12 Compliance Portal',
    year: '2026',
    stack: 'React · TypeScript · Node.js · PostgreSQL · Prisma',
    cats: ['Compliance', 'Full Stack', 'Government'],
    desc: "Corporate compliance portal for filing DIR-12 forms with India's Ministry of Corporate Affairs. 6-step guided form wizard, director and KMP management, PDF report generation, admin dashboard, audit logging, and a complete submission status workflow.",
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format&fit=crop',
    github: 'https://github.com/Aayush-Ramrakhyani',
  },
  {
    name: 'MCA Downloader',
    year: '2026',
    stack: 'React · TypeScript · Node.js · Electron',
    cats: ['Desktop App', 'Automation', 'Full Stack'],
    desc: 'Cross-platform desktop and web application for searching and downloading MCA company documents via the Finanvo API. Multi-account management with encrypted credential storage, JWT sessions, and a concurrent download queue with status tracking.',
    img: 'https://images.unsplash.com/photo-1484788984921-03950022c38b?w=800&q=80&auto=format&fit=crop',
    github: 'https://github.com/Aayush-Ramrakhyani',
  },
  {
    name: 'Aadhaar Auth System',
    year: '2026',
    stack: 'React · Node.js · Express · JWT',
    cats: ['Authentication', 'Security', 'Full Stack'],
    desc: 'Secure Aadhaar OTP authentication web application with SVG CAPTCHA protection, Verhoeff checksum validation, and rate limiting. Pluggable provider architecture supporting mock and official UIDAI integrations with full OTP attempt, expiry, and resend tracking.',
    img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80&auto=format&fit=crop',
    github: 'https://github.com/Aayush-Ramrakhyani',
  },
  {
    name: 'Cricket Scoreboard',
    year: 'Jul 2026',
    stack: 'Flutter · SQLite · Material 3',
    cats: ['Mobile App', 'Offline-First', 'Freelance'],
    desc: 'Offline-first cricket scoring app supporting T10, T20, ODI, The Hundred, Test, series, and tournament formats. Implements complex rules including follow-on logic, strike rotation, extras, NRR, and partnerships. Actively used by students for college cricket matches.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop',
    github: 'https://github.com/Aayush-Ramrakhyani',
  },
  {
    name: 'Money Tracker',
    year: 'Jan 2026',
    stack: 'Flutter · Python · Firebase · AI',
    cats: ['Finance', 'AI-Powered', 'Freelance'],
    desc: 'Freelance-built personal finance app delivered for a client and adopted by students for daily expense tracking. Integrated an AI-powered expense-waste analyser that identifies unnecessary spending patterns and recommends redirecting funds into productive investments.',
    img: 'https://images.unsplash.com/photo-1707157284454-553ef0a4ed0d?w=800&q=80&auto=format&fit=crop',
    github: 'https://github.com/Aayush-Ramrakhyani',
  },
  {
    name: 'Digital Society',
    year: 'Apr 2024',
    stack: 'Flutter · Firebase',
    cats: ['Community', 'Management', 'Flutter'],
    desc: 'Community management platform actively used by 500+ residential societies across Ahmedabad, covering member management, notices, events, and complaint resolution. Implemented a committee-facing dashboard for reviewing and resolving resident feedback.',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80&auto=format&fit=crop',
    github: 'https://github.com/Aayush-Ramrakhyani',
  },
]

const others = [
  { name: 'Email Verifier',          year: '2026',     stack: 'Node.js · Automation',         github: 'https://github.com/Aayush-Ramrakhyani' },
  { name: 'Your Journal',            year: 'Apr 2026', stack: 'Flutter · Python · SQLite · AI', github: 'https://github.com/Aayush-Ramrakhyani' },
  { name: 'POS Application',         year: 'May 2025', stack: 'Flutter · Python · Firebase',    github: 'https://github.com/Aayush-Ramrakhyani' },
  { name: 'E-Commerce App',          year: 'Mar 2025', stack: 'Flutter · Python',               github: 'https://github.com/Aayush-Ramrakhyani' },
  { name: 'Messaging App',           year: 'Mar 2024', stack: 'Flutter · Firebase',             github: 'https://github.com/Aayush-Ramrakhyani' },
  { name: 'Sales Forecasting',       year: 'Dec 2022', stack: 'Python · Machine Learning',      github: 'https://github.com/Aayush-Ramrakhyani' },
  { name: 'Body Movement Tracking',  year: 'Dec 2021', stack: 'Python · OpenCV · ML',           github: 'https://github.com/Aayush-Ramrakhyani' },
  { name: 'Sportify',                year: 'Mar 2020', stack: 'Android · Kotlin',               github: 'https://github.com/Aayush-Ramrakhyani' },
]

function ProjectItem({ project }) {
  const [ref, visible] = useReveal()

  return (
    <div ref={ref} className={`project-item reveal ${visible ? 'in' : ''}`}>
      <div className="proj-img-wrap">
        <img
          src={project.img}
          className="proj-img"
          alt={project.name}
          loading="lazy"
        />
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="proj-arrow-btn"
          title="View on GitHub"
        >
          <i className="fas fa-arrow-up-right-from-square" />
        </a>
      </div>

      <div className="proj-details">
        <div className="proj-meta">
          <span className="tag-year">{project.year}</span>
          <span className="tag-stack">{project.stack}</span>
        </div>
        <h3 className="proj-title">{project.name}</h3>
        <p className="proj-cats">{project.cats.join(' · ')}</p>
        <p className="proj-desc">{project.desc}</p>
        <a href={project.github} target="_blank" rel="noreferrer" className="proj-link">
          <i className="fab fa-github" />&nbsp; View on GitHub
        </a>
      </div>
    </div>
  )
}

export default function Projects() {
  const [ref, visible] = useReveal()
  const [refOther, visibleOther] = useReveal()

  return (
    <section id="projects">
      <div className="projects-inner">
        <div ref={ref} className={`reveal ${visible ? 'in' : ''}`}>
          <SectionHeading title="Projects" dark />
        </div>

        {featured.map(p => (
          <ProjectItem key={p.name} project={p} />
        ))}

        <div ref={refOther} className={`other-projects reveal ${visibleOther ? 'in' : ''}`}>
          <p className="other-label">Other Projects</p>
          <div className="other-grid">
            {others.map(p => (
              <a
                key={p.name}
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="other-item"
              >
                <div className="other-item-top">
                  <span className="other-item-name">{p.name}</span>
                  <i className="fas fa-arrow-up-right-from-square other-item-icon" />
                </div>
                <span className="other-item-stack">{p.stack}</span>
                <span className="other-item-year">{p.year}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
