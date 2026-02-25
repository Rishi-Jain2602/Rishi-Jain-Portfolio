import React from 'react'
import './styles/Education.css'

export default function Education() {
  return (
    <div className="education-page">
      <div className="education-inner">

        {/* ── Page header ───────────────────────────────── */}
        <div className="edu-header">
          <p className="edu-eyebrow">Background</p>
          <h2 className="edu-heading">
            Edu<span>cation</span>
          </h2>
        </div>

        {/* ── Timeline ──────────────────────────────────── */}
        <div className="edu-timeline">

          {/* ── NITK ────────────────────────────────────── */}
          <div className="edu-entry">
            <div className="edu-dot" />

            <div className="edu-card">
              <div className="edu-logo-wrap invert">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/c/cc/NITK_Emblem.png"
                  alt="NITK"
                />
              </div>

              <div className="edu-content">
                <h3 className="edu-institution">National Institute of Technology, Karnataka</h3>
                <p className="edu-period">Dec 2021 – April 2025</p>
                <p className="edu-degree">
                  <strong>B.Tech in Civil Engineering with AI Minors</strong> — Gaining a strong
                  foundation in both traditional engineering principles and cutting-edge AI technologies.
                </p>

                <p className="edu-activities-label">Activities &amp; Societies</p>
                <ul className="edu-activities">
                  <li>Executive member of IEEE NITK</li>
                  <li>Internship Coordinator at CDC NITK 2023</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ── Happy Hours School ──────────────────────── */}
          <div className="edu-entry">
            <div className="edu-dot" />

            <div className="edu-card">
              <div className="edu-logo-wrap">
                <img
                  src="https://www.schooldekho.org/storage/logo//3ekaidxoyx440skc44w4gg00occc8sk.jpg"
                  alt="Happy Hours School"
                />
              </div>

              <div className="edu-content">
                <h3 className="edu-institution">Happy Hours School, Jodhpur</h3>
                <p className="edu-degree">
                  Completed schooling with a focus on academics, art &amp; craft, and sports —
                  football, badminton and more — maintaining an active and balanced student life.
                </p>

                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                  <span className="score-badge">12th · 91.2%</span>
                  <span className="score-badge">10th · 80%</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}