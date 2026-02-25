import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Projects.css'

const projects = [
  {
    title: 'LinkRefine: Polish Your LinkedIn Presence',
    image: require('./static/LinkedIn review systemGen AI.webp'),
    stack: ['FastAPI', 'LangChain', 'Mistral LLM', 'LLAMA 3B'],
    bullets: [
      <><strong>LinkRefine</strong> is a web app that refines LinkedIn profiles by fetching and analyzing headline, about, work experience, and skills sections.</>,
      <>Offers <strong>AI-driven suggestions</strong> to improve profile sections and attract recruiters.</>,
      <>Powered by <strong>FastAPI</strong> and <strong>LangChain</strong> — leveraging <strong>Mistral LLM</strong> for optimization and <strong>LLAMA 3B</strong> for image analysis.</>,
    ],
    github: 'https://github.com/Rishi-Jain2602/LinkRefine',
    live: 'https://link-refine-five.vercel.app/',
  },
  {
    title: 'AskSmart: RAG-Powered Intelligent Query System',
    image: require('./static/AskSmart.webp'),
    stack: ['FastAPI', 'Weaviate', 'React.js', 'LangChain'],
    bullets: [
      <>Powerful document retrieval for <strong>PDF, DOCX, JSON, TXT</strong> — generates context-aware answers.</>,
      <>Leveraged <strong>Weaviate</strong> as a vector store for <strong>30% faster</strong> response times.</>,
      <>Full-stack with <strong>FastAPI backend</strong> and responsive <strong>React frontend</strong>.</>,
    ],
    github: 'https://github.com/Rishi-Jain2602/AskSmart',
    live: 'https://ask-smart-git-main-rishi-jain2602s-projects.vercel.app/',
  },
  {
    title: 'ConvAI: Conversational AI Coach',
    image: require('./static/ConvAI.JPG'),
    stack: ['FastAPI', 'Mistral AI', 'React.js', 'WebSockets'],
    bullets: [
      <>Voice-based chat interface integrated with <strong>Mistral AI</strong> for real-time conversation improvement.</>,
      <><strong>LLM-powered feedback</strong> on clarity, tone, and response quality post-conversation.</>,
      <>Full-stack with <strong>FastAPI</strong> backend and <strong>React</strong> frontend.</>,
    ],
    github: 'https://github.com/Rishi-Jain2602/Conversational-AI-Coach',
    live: 'https://conversational-ai-coach.vercel.app/',
  },
  {
    title: 'Wordle Game — Multilingual',
    image: require('./static/wordle game.JPG'),
    stack: ['FastAPI', 'React.js', 'WordNet', 'MistralAPI', 'PostgreSQL'],
    bullets: [
      <>Bilingual word guessing game in <strong>English, Hindi,</strong> and more languages.</>,
      <>Evaluates guesses with similarity scores using <strong>WordNet + MistralAPI</strong>.</>,
      <>5 attempts with hints — powered by <strong>FastAPI + React.js</strong>.</>,
    ],
    github: 'https://github.com/Rishi-Jain2602/Wordle',
    live: null,
  },
  {
    title: 'AI Image Analysis Pipeline',
    image: require('./static/AI Img Analysis pipeline.webp'),
    stack: ['Mask R-CNN', 'YOLO', 'BLIP', 'BART', 'HuggingFace'],
    bullets: [
      <>Automates image processing: <strong>object detection, segmentation, feature extraction</strong>, and captioning.</>,
      <>Uses <strong>YOLO</strong> for detection, <strong>BLIP</strong> for captioning, <strong>BART</strong> for summarization.</>,
    ],
    github: 'https://github.com/Rishi-Jain2602/AI-Image-Analysis-Pipeline',
    live: null,
  },
]

export default function Projects() {
  return (
    <div className="projects-page">
      <div className="projects-inner">

        {/* ── Header ────────────────────────────────── */}
        <div className="proj-header">
          <p className="proj-eyebrow">Selected Work</p>
          <h2 className="proj-heading">
            Pro<span>jects</span>
          </h2>
        </div>

        {/* ── List ──────────────────────────────────── */}
        <div className="proj-list">
          {projects.map((proj, i) => (
            <div className="proj-card" key={i}>

              {/* Image */}
              <div className="proj-img-wrap">
                <img src={proj.image} alt={proj.title} />
              </div>

              {/* Body */}
              <div className="proj-body">
                <p className="proj-number">0{i + 1}</p>
                <h3 className="proj-title">{proj.title}</h3>

                <ul className="proj-bullets">
                  {proj.bullets.map((b, j) => (
                    <li key={j}><span>{b}</span></li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="proj-stack">
                  {proj.stack.map((t) => (
                    <span className="proj-tag" key={t}>{t}</span>
                  ))}
                </div>

                {/* Actions */}
                <div className="proj-actions">
                  <Link
                    to={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-btn proj-btn-primary"
                  >
                    ↗ GitHub
                  </Link>
                  {proj.live && (
                    <Link
                      to={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-btn proj-btn-ghost"
                    >
                      ⬡ Live Demo
                    </Link>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}