import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Home.css'

export default function Home() {
  return (
    <>      
      {/* ── Split Layout ─────────────────────────────────── */}
      <div className="home-split">

        {/* Left: Full-height photo */}
        <div className="photo-panel">
          <img
            src={require('./static/Rishi Jain.jpeg')}
            alt="Rishi Jain"
          />
        </div>

        {/* Right: Content */}
        <div className="content-panel">

          {/* Giant headline — two stacked words like reference */}
          <div className="headline-wrapper">
            <div className="headline-rule" />
            <h1 className="headline">
              My<br />Portfolio
            </h1>
          </div>

          {/* Role / subtitle */}
          <p className="role-line">Developer · AI &amp; Web · NITK</p>

          {/* Bio */}
          <p className="bio">
            👋 Hello! I'm Rishi Jain, a BTech graduate from NITK with a keen interest in Software development and Artificial Intelligence (AI).
          </p>

          {/* CTAs */}
          <div className="cta-row">
            <Link
              to="https://drive.google.com/file/d/1BHAhBFgZS6k1qGypdCfyw-dkF7TgDajR/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              RESUME LINK
            </Link>

            <Link
              to="/contact"
              className="btn-play"
            >
              <svg viewBox="0 0 24 24">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              
              Let's Connect
            </Link>
          </div>

        </div>

      </div>
    </>
  )
}