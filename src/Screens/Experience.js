import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Experience.css'

const experiences = [
  {
    company: 'Polymerize',
    role: 'Artificial Intelligence Intern',
    period: 'March 2025',
    periodEnd: 'Present',
    isPresent: true,
    logo: require('./static/Polymerize Logo.png'),
    letterUrl: 'https://drive.google.com/file/d/1gR1qgRGKsVniMH39uD29ysqeGGAkguLh/view?usp=sharing',
    letterLabel: 'Offer Letter',
    stack: ['Python', 'LangChain', 'FastAPI', 'MongoDB', 'Redis'],
    bullets: [
      <>Developed an intelligent <strong>PDF processing pipeline</strong> that extracts, processes, and indexes content from documents — including text, tables, and images.</>,
      <>Built a scalable <strong>Document QA API</strong> with FastAPI, enabling PDF uploads, <strong>RAG-based contextual answers</strong>, and modular chat history with async background tasks and <strong>Redis vector indexing</strong>.</>,
    ],
  },
  {
    company: 'Envigo',
    role: 'Machine Learning Intern',
    period: 'Sep 2024',
    periodEnd: 'April 2025',
    isPresent: false,
    logo: require('./static/envigo_ltd_logo.jpeg'),
    letterUrl: 'https://drive.google.com/file/d/1RSonnje4_WK_BbmnMDNuTk4od-e6RcfH/view?usp=sharing',
    letterLabel: 'Experience Letter',
    stack: ['FastAPI', 'MongoDB', 'LangChain', 'Python', 'React.js'],
    bullets: [
      <>Engineered a <strong>RAG application</strong> with LangChain powering chatbots for Envigo and Hertz — dynamic, context-aware responses with <strong>30% reduced response time</strong>.</>,
      <>Architected <strong>FastAPI APIs</strong> for LLM data handling, integrated MongoDB, and built an <strong>SMTP email feature</strong> with AWS S3 Email Service.</>,
      <>Developed an <strong>AI-driven sentiment analysis system</strong> using GPT-4o for accurate media classification and content moderation.</>,
      <>Received a <strong>Pre-Placement Offer</strong> for outstanding performance during the internship.</>,
    ],
  },
  {
    company: 'NeetPrep',
    role: 'Machine Learning Intern',
    period: 'May 2024',
    periodEnd: 'July 2024',
    isPresent: false,
    logo: require('./static/NeetPrep.jpg'),
    letterUrl: 'https://drive.google.com/file/d/1UkJf-rtb4FzEQ8S9kH1mdB3dLJ1Jh7EC/view?usp=sharing',
    letterLabel: 'Experience Letter',
    stack: ['Python', 'LangChain', 'Flask', 'PostgreSQL'],
    bullets: [
      <>Integrated <strong>OpenAI GPT-3.5-turbo</strong> with LangChain and Interakt's chatbot for real-time user interactions via webhooks and API endpoints.</>,
      <>Developed an <strong>AI-based question evaluator</strong> using Gemini 1.5 Pro to grade, correct, and explain answers.</>,
      <>Engineered a <strong>real-time question recommender</strong> using Gemini 1.5 Pro and PostgreSQL for adaptive suggestions based on student performance analytics.</>,
    ],
  },
]

export default function Experience() {
  return (
    <div className="experience-page">
      <div className="experience-inner">

        {/* ── Header ──────────────────────────────────── */}
        <div className="exp-header">
          <p className="exp-eyebrow">Career</p>
          <h2 className="exp-heading">
            Work <span>Experience</span>
          </h2>
        </div>

        {/* ── Timeline ────────────────────────────────── */}
        <div className="exp-timeline">
          {experiences.map((exp, i) => (
            <div className="exp-entry" key={i}>

              {/* Dot */}
              <div className={`exp-dot${exp.isPresent ? ' active' : ''}`} />

              {/* Card */}
              <div className="exp-card">

                {/* Header: logo + meta */}
                <div className="exp-card-header">
                  <div className="exp-logo-wrap">
                    <img src={exp.logo} alt={exp.company} />
                  </div>
                  <div className="exp-meta">
                    <p className="exp-role">{exp.role}</p>
                    <p className="exp-company">{exp.company}</p>
                    <p className="exp-period">
                      {exp.period} – {exp.periodEnd}
                      {exp.isPresent && <span className="exp-present-badge">Live</span>}
                    </p>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="exp-bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j}><span>{b}</span></li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="exp-stack">
                  {exp.stack.map((t) => (
                    <span className="stack-tag" key={t}>{t}</span>
                  ))}
                </div>

                {/* Letter link */}
                <Link
                  to={exp.letterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="exp-letter-btn"
                >
                  ↗ {exp.letterLabel}
                </Link>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}