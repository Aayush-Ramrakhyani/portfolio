import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'

const skills = [
  'Flutter', 'React', 'Python', 'FastAPI', 'Django',
  'Node.js', 'TypeScript', 'PostgreSQL', 'Firebase',
  'Redis', 'Docker', 'Electron', 'TailwindCSS',
  'Android', 'AWS', 'SQLite', 'Git',
]

export default function Services() {
  const [r1, v1] = useReveal()
  const [r2, v2] = useReveal()
  const [r3, v3] = useReveal()

  return (
    <section id="services">
      <div className="services-inner">
        <div ref={r1} className={`reveal ${v1 ? 'in' : ''}`}>
          <SectionHeading title="Services" />
        </div>

        <div className="services-body">
          <div ref={r2} className={`services-left reveal ${v2 ? 'in' : ''}`}>
            <div className="svc-block">
              <h3>my expertises.</h3>
              <p>
                I focus on mobile app development, backend API design, and AI integration.
                With each project, my goal is to deliver clean, performant, and user-friendly
                solutions that solve real problems.
              </p>
            </div>
            <div className="svc-block">
              <h3>my digital tool box.</h3>
              <p>
                These are my go-to technologies for making any project happen. I'm always
                eager to learn new tools and frameworks that can expand my capabilities
                and improve the products I build.
              </p>
            </div>
          </div>

          <div ref={r3} className={`services-right reveal delay-2 ${v3 ? 'in' : ''}`}>
            {skills.map(s => (
              <div key={s} className="skill-big">{s}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
