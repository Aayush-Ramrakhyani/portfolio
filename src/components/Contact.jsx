import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'

/*
  HOW TO RECEIVE EMAILS FROM THIS FORM:
  ──────────────────────────────────────
  1. Go to https://formspree.io and sign up with aayushr7777@gmail.com
  2. Click "New Form" → give it a name → copy your form endpoint URL
     It looks like: https://formspree.io/f/xabc1234
  3. Replace "YOUR_FORMSPREE_ID" below with that ID (just the letters/numbers part)
  4. Every submission will arrive directly in aayushr7777@gmail.com
  Free plan allows 50 submissions/month — more than enough.
*/
const FORMSPREE_ID = 'YOUR_FORMSPREE_ID'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const [r1, v1] = useReveal()
  const [r2, v2] = useReveal()
  const [r3, v3] = useReveal()

  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact">
      <div className="contact-inner">
        <div ref={r1} className={`reveal ${v1 ? 'in' : ''}`}>
          <SectionHeading title="Contact" />
        </div>

        <div className="contact-body">
          <div ref={r2} className={`contact-left reveal ${v2 ? 'in' : ''}`}>
            <h2>Have an awesome idea?<br />Let's bring it to life.</h2>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-field form-field-full">
                <textarea
                  name="message"
                  placeholder="Your message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="form-submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="form-success">✓ Message sent! I'll get back to you soon.</p>
              )}
              {status === 'error' && (
                <p className="form-error">
                  Something went wrong. Please email me at{' '}
                  <a href="mailto:aayushr7777@gmail.com">aayushr7777@gmail.com</a>
                </p>
              )}
            </form>
          </div>

          <div ref={r3} className={`contact-right reveal delay-2 ${v3 ? 'in' : ''}`}>
            <div className="cr-block">
              <h3>Contact Details</h3>
              <div className="cr-row">
                <i className="fas fa-envelope" />
                <a href="mailto:aayushr7777@gmail.com">aayushr7777@gmail.com</a>
              </div>
              <div className="cr-row">
                <i className="fas fa-phone" />
                <a href="tel:+919409096117">+91-9409096117</a>
              </div>
              <div className="cr-row">
                <i className="fas fa-map-marker-alt" />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
            </div>

            <div className="cr-block">
              <h3>My Digital Spaces</h3>
              <div className="cr-row">
                <i className="fab fa-github" />
                <a href="https://github.com/Aayush-Ramrakhyani" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
              <div className="cr-row">
                <i className="fab fa-linkedin-in" />
                <a href="https://www.linkedin.com/in/aayush-ramrakhyani-496a65212/" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
