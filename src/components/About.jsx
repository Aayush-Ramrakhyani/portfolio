import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'

export default function About() {
  const [r1, v1] = useReveal()
  const [r2, v2] = useReveal()
  const [r3, v3] = useReveal()

  return (
    <section id="about">
      <div className="about-inner">
        <div ref={r1} className={`reveal ${v1 ? 'in' : ''}`}>
          <SectionHeading title="About Me" />
        </div>

        <div className="about-grid">
          <div ref={r2} className={`reveal ${v2 ? 'in' : ''}`}>
            {/*
              Replace this placeholder with your actual photo:
              <img src="/photo.jpg" alt="Aayush Ramrakhyani" className="about-photo" />
              Place your photo in the /public folder as photo.jpg
            */}
            <div className="photo-placeholder">Your Photo</div>
          </div>

          <div ref={r3} className={`reveal delay-2 ${v3 ? 'in' : ''}`}>
            <div className="about-text">
              <h3>A brief intro,<br />who am I?</h3>
              <p>
                I'm a passionate <strong>Software Developer</strong> based in Ahmedabad, Gujarat,
                with hands-on experience building cross-platform mobile apps, full-stack web applications,
                and automation tools using <strong>Flutter</strong>, <strong>Python</strong>, <strong>React</strong>, and <strong>Node.js</strong>.
              </p>
              <p>
                I specialize in crafting clean, high-performance solutions — from AI-powered finance apps
                and real-time trading dashboards to government compliance portals and Aadhaar authentication systems.
                I care deeply about clean architecture, smooth UX, and code that scales.
              </p>
              <p>
                When I'm not building, I'm exploring <strong>Generative AI</strong>,
                experimenting with new frameworks, and sharpening my craft.
              </p>

              <div className="about-meta">
                <div className="meta-row">
                  <i className="fas fa-map-marker-alt" />
                  <span>Ahmedabad, Gujarat, India</span>
                </div>
                <div className="meta-row">
                  <i className="fas fa-envelope" />
                  <a href="mailto:aayushr7777@gmail.com">aayushr7777@gmail.com</a>
                </div>
                <div className="meta-row">
                  <i className="fas fa-phone" />
                  <a href="tel:+919409096117">+91-9409096117</a>
                </div>
                <div className="meta-row">
                  <i className="fab fa-github" />
                  <a href="https://github.com/Aayush-Ramrakhyani" target="_blank" rel="noreferrer">
                    github.com/Aayush-Ramrakhyani
                  </a>
                </div>
                <div className="meta-row">
                  <i className="fab fa-linkedin-in" />
                  <a href="https://www.linkedin.com/in/aayush-ramrakhyani-496a65212/" target="_blank" rel="noreferrer">
                    LinkedIn Profile
                  </a>
                </div>
              </div>

              <div className="edu-block">
                <p className="edu-label">Experience</p>

                <div className="exp-entry">
                  <div className="exp-header">
                    <h4>Software Developer — Freelancer</h4>
                    <span className="exp-date">Apr 2026 – Sep 2026</span>
                  </div>
                  <p className="exp-company">Technowire Data Science</p>
                  <p>Built full-stack solutions including an Aadhaar OTP authentication system, MCA document downloader, DIR-12 corporate compliance portal, real-time stock trading dashboard, and email-unmasking automation tool.</p>
                </div>

                <div className="exp-entry">
                  <div className="exp-header">
                    <h4>Python Developer</h4>
                    <span className="exp-date">Jun 2024 – Nov 2025</span>
                  </div>
                  <p className="exp-company">Enercomp</p>
                  <p>Built the Maharashtra State Land Record Portal with the state Land Minister's office, enabling farmers to digitally register land with geo-location and boundary data. Architected the government approval workflow and maintained the internal website for 100+ employees.</p>
                </div>

                <div className="exp-entry">
                  <div className="exp-header">
                    <h4>Mobile App Developer</h4>
                    <span className="exp-date">Dec 2023 – May 2024</span>
                  </div>
                  <p className="exp-company">TOPS Technology</p>
                  <p>Contributed to multiple Flutter and Android client projects including Digital Society — a community management app adopted by 500+ residential societies across Ahmedabad. Handled feature development, API integration, bug resolution, and ongoing technical support.</p>
                </div>
              </div>

              <div className="edu-block">
                <p className="edu-label">Education</p>
                <h4>Bachelor of Science in Information Technology</h4>
                <p>GLS University, Ahmedabad &nbsp;·&nbsp; 2017 – 2020 &nbsp;·&nbsp; CGPA 8.3 / 10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
