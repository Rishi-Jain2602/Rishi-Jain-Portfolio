import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/Contact.css'

export default function Contact() {
  const [info, setInfo] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    try {
      const response = await fetch('https://rishi-jain-portfolio-1.onrender.com/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(info),
      })
      if (response.status === 200) {
        const result = await response.text()
        alert(result)
        setInfo({ name: '', email: '', message: '' })
      } else {
        const errorResult = await response.text()
        alert('Failed to send email: ' + errorResult)
      }
    } catch (error) {
      alert('Error sending email: ' + error.message)
    } finally {
      setSending(false)
    }
  }

  const onChange = (e) => setInfo({ ...info, [e.target.name]: e.target.value })

  return (
    <div className="contact-page">
      <div className="contact-inner">

        {/* ── Left column ─────────────────────────────────── */}
        <div className="contact-left">
          <p className="contact-eyebrow">Get in touch</p>

          <h2 className="contact-heading">
            Let's
            <span>Talk.</span>
          </h2>

          <p className="contact-desc">
            Have a project in mind, a question, or just want to say hi?
            Fill out the form and I'll get back to you within 24 hours.
          </p>

          <p className="social-label">Find me on</p>

          <div className="social-icons">
            <Link
              to="https://www.linkedin.com/in/rishi-jain-5a79b7223/"
              target="_blank" rel="noopener noreferrer"
              className="social-icon-link" title="LinkedIn"
            >
              <i className="fab fa-linkedin-in" />
            </Link>
            <Link
              to="mailto:rishijainai262003@gmail.com"
              className="social-icon-link" title="Email"
            >
              <i className="fas fa-envelope" />
            </Link>
            <Link
              to="https://www.instagram.com/rishi_jain_262003/"
              target="_blank" rel="noopener noreferrer"
              className="social-icon-link" title="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            {/* <Link
              to="https://x.com/beingRJ262003"
              target="_blank" rel="noopener noreferrer"
              className="social-icon-link" title="X / Twitter"
            >
              <i className="fab fa-x-twitter" />
            </Link> */}
            <Link
              to="https://github.com/Rishi-Jain2602"
              target="_blank" rel="noopener noreferrer"
              className="social-icon-link" title="GitHub"
            >
              <i className="fab fa-github" />
            </Link>
          </div>
        </div>

        {/* ── Right column: Form ──────────────────────────── */}
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>

            <div className="field-group">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={info.name}
                onChange={onChange}
                placeholder="Your full name"
                required
              />
            </div>

            <div className="field-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={info.email}
                onChange={onChange}
                placeholder="name@example.com"
                required
              />
            </div>

            <div className="field-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                value={info.message}
                onChange={onChange}
                rows="5"
                placeholder="Tell me what's on your mind..."
                required
              />
            </div>

            <div className="submit-btn-container">
              <button
                type="submit"
                className="btn submit-btn"
                disabled={sending}
              >
                {sending ? 'Sending…' : 'Send Message →'}
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  )
}