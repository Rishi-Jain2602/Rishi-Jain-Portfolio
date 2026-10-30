import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Experience.css'

const experiences = [
  {
    company: 'Polymerize',
    companyPeriod: 'March 2025 – Present',
    location: 'Singapore · Remote',
    logo: require('./static/Polymerize Logo.png'),
    roles: [
      {
        role: 'Artificial Intelligence Engineer',
        employmentType: 'Full-time',
        period: 'July 2025',
        periodEnd: 'Present',
        isPresent: true,
        letterUrl: 'https://drive.google.com/file/d/1Q9GUxzMppgBUiJmODpo3jNMhR0iWl8Cw/view?usp=sharing',
        letterLabel: 'Offer Letter',
        stack: ['Docker','CI/CD Pipeline', 'Amazon Web Services (AWS)', 'Python', 'LLMs', 'React', 'Typescript'],
        groups: [
          {
            title: 'PolyGPT',
            subtitle: 'Document AI Assistant',
            bullets: [
              <>Developed <strong>multi-format document analysis</strong>, enabling seamless processing of PDFs and images.</>,
              <>Integrated <strong>AWS ECS and ECR</strong> to reduce EC2 costs and improve application scalability.</>,
              <>Integrated <strong>AWS GuardDuty</strong> to secure PDF uploads and mitigate potential security risks.</>,
              <>Leveraged <strong>AWS Bedrock</strong> for model hosting, reducing dependencies on external AI providers such as OpenAI, Claude, and Gemini while strengthening data privacy for confidential and sensitive documents.</>,
            ],
          },
          {
            title: 'PIXA',
            subtitle: 'AI Assistant for Polymerize Labs',
            bullets: [
              <>Implemented a <strong>Retrieval-Augmented Generation (RAG)</strong> pipeline with image-aware context, enabling more accurate responses and helping users better understand the Polymerize Labs platform.</>,
            ],
          },
          {
            title: 'Inverse Predictions',
            subtitle: 'ML Job Queue Infrastructure',
            bullets: [
              <>Designed and shipped an <strong>AWS SQS → Lambda → Fargate</strong> job queue for ML inverse predictions, enforcing per-organisation concurrency limits through DB-backed controls, delayed retries, and Dead Letter Queue (DLQ) handling.</>,
              <>Replaced uncontrolled Fargate launches with a <strong>fair, rate-limited dispatch system</strong>, improving cost control and ensuring predictable performance under burst traffic.</>,
              <>Improved <strong>Redis/Celery reliability</strong>, including failover handling and fair FIFO job ordering.</>,
              <>Automated infrastructure provisioning through <strong>CI/CD</strong>, including queues, DLQs, redrive policies, event source mappings, and CloudWatch alarms.</>,
            ],
          },
          {
            title: 'Polymerize Matrix',
            subtitle: 'Supplier Portal & Marketplace',
            bullets: [
              <>Built end-to-end <strong>Supplier Portal workflows</strong> for SDS/TDS uploads, multilingual LLM extraction, review, editing, publishing, document revisions, and PDF previews.</>,
              <>Developed a scalable <strong>document review queue</strong> with pagination, search, document-type/status filters, bulk publishing, and duplicate handling.</>,
              <>Implemented <strong>Marketplace catalog features</strong> displaying CAS numbers, categories, extracted properties, supplier information, documents, and revision details.</>,
              <>Integrated <strong>PIXA with Supplier Marketplace</strong> to enable natural-language marketplace search using structured supplier data and embedding-based matching.</>,
              <>Added <strong>bulk data-claim workflows</strong> while preserving product relationships across TDS and SDS documents.</>,
              <>Implemented <strong>authentication, role-based access control, supplier verification, publishing controls, and admin unpublishing workflows.</strong></>,
            ],
          },
          {
            title: 'Others & Miscellaneous',
            subtitle: 'Additional Contributions to the Polymerize Labs Platform',
            bullets: [
              <>Built an <strong>asynchronous TDS extraction pipeline</strong> using AWS Bedrock models to extract material properties, categories, and other relevant information.</>,
              <>Developed <strong>train/test performance visualization plots</strong> to make model evaluation more consistent, transparent, and understandable for customers.</>,
              <>Implemented data visualization features, including <strong>Distribution and Histogram charts</strong>, to enhance data analysis.</>,
              <>Resolved multiple <strong>backend and frontend issues</strong>, improving platform stability, reliability, and overall user experience.</>,
            ],
          },
        ],
      },
      {
        role: 'Artificial Intelligence Intern',
        employmentType: 'Internship',
        period: 'March 2025',
        periodEnd: 'July 2025',
        isPresent: false,
        letterUrl: 'https://drive.google.com/file/d/1gR1qgRGKsVniMH39uD29ysqeGGAkguLh/view?usp=sharing',
        letterLabel: 'Offer Letter',
        stack: ['Python', 'LangChain', 'FastAPI', 'MongoDB', 'Redis'],
        groups: [
          {
            title: 'PolyGPT',
            subtitle: 'Document AI assistant',
            bullets: [
              <>Worked on the backend development of PolyGPT, designing and building APIs for Polymerize Labs.</>,
              <>Enhanced responses with clear explanations for <strong>images, tables, and structured data</strong> within documents while improving accuracy and reducing operational costs.</>,
              <>Enabled multilingual support for Asian languages such as <strong>Chinese and Japanese</strong>, which are difficult to extract using standard PDF libraries.</>,
              <>Implemented LLM-based text extraction with Gemini 2.5 Flash and stored extracted content in a <strong>Redis Vector Database</strong>, including support for scanned PDFs.</>,
            ],
          },
          {
            title: 'PIXA',
            subtitle: 'AI assistant for Polymerize Labs',
            bullets: [
              <>Integrated <strong>19 specialized tools</strong> into Pixa and ensured precise, reliable tool usage through controlled LLM orchestration.</>,
              <>Connected Pixa with DevRev for human-in-the-loop query resolution and automated conversations while preserving complete user–AI interaction history.</>,
            ],
          },
          {
            title: 'Career progression',
            subtitle: 'Recognition and impact',
            bullets: [
              <>Received a <strong>Full-time Offer</strong> for good performance during the internship.</>,
            ],
          },
        ],
      },
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
      <>Received a <strong>Full-time Offer</strong> for good performance during the internship.</>,
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

function BulletList({ items }) {
  return (
    <ul className="exp-bullets">
      {items.map((bullet, index) => (
        <li key={index}><span>{bullet}</span></li>
      ))}
    </ul>
  )
}

function RoleDetails({ role }) {
  return (
    <>
      {role.groups ? (
        <div className="exp-groups">
          {role.groups.map((group) => (
            <div className="exp-group" key={group.title}>
              <h4 className="exp-group-title">{group.title}</h4>
              <p className="exp-group-subtitle">{group.subtitle}</p>
              <BulletList items={group.bullets} />
            </div>
          ))}
        </div>
      ) : (
        <BulletList items={role.bullets} />
      )}

      <div className="exp-stack">
        {role.stack.map((technology) => (
          <span className="stack-tag" key={technology}>{technology}</span>
        ))}
      </div>

      {role.letterUrl && (
        <Link to={role.letterUrl} target="_blank" rel="noopener noreferrer" className="exp-letter-btn">
          ↗ {role.letterLabel}
        </Link>
      )}
    </>
  )
}

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
          {experiences.map((exp) => (
            <div className="exp-entry" key={exp.company}>

              {/* Dot */}
              <div className={`exp-dot${exp.isPresent || exp.roles?.some((role) => role.isPresent) ? ' active' : ''}`} />

              {/* Card */}
              <div className="exp-card">

                {/* Header: logo + meta */}
                <div className="exp-card-header">
                  <div className="exp-logo-wrap">
                    <img src={exp.logo} alt={`${exp.company} logo`} />
                  </div>
                  <div className="exp-meta">
                    <p className="exp-company-name">{exp.company}</p>
                    <p className="exp-company-period">{exp.companyPeriod || `${exp.period} – ${exp.periodEnd}`}</p>
                    {exp.location && <p className="exp-location">{exp.location}</p>}
                  </div>
                </div>

                {exp.roles ? (
                  <div className="exp-role-history">
                    {exp.roles.map((role, j) => (
                      <div className="exp-role-item" key={role.role}>
                        <div className={`exp-role-marker${role.isPresent ? ' current' : ''}`} />
                        <div className="exp-role-content">
                          <p className="exp-role">{role.role}</p>
                          <p className="exp-employment-type">{role.employmentType}</p>
                          <p className="exp-period">
                            {role.period} – {role.periodEnd}
                            {role.isPresent && <span className="exp-present-badge">Live</span>}
                          </p>
                          <RoleDetails role={role} />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <div className="exp-meta">
                      <p className="exp-role">{exp.role}</p>
                      <p className="exp-period">
                        {exp.period} – {exp.periodEnd}
                        {exp.isPresent && <span className="exp-present-badge">Live</span>}
                      </p>
                    </div>
                    <RoleDetails role={exp} />
                  </>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
