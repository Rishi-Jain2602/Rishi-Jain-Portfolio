import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Experience.css'

export default function Experience() {
  return (
    <>
      {/* 1st experience  */}
      <div className="container py-5" style={{ backgroundColor: '#f5f5f5', color: '#333' }}>
        <div
          className="card shadow-sm"

          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
          }}
        >
          <img
            src={require('./static/Polymerize Logo.png')}
            alt="Polymerize"
            className="card-img-left mx-4"
            style={{
              width: '200px',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '10px',
              marginRight: '20px',
              border: '2px solid #ff9800',
            }}
          />

          <div className="card-body">
            <h5 className="card-title" style={{ fontSize: '1.6rem', fontWeight: '600' }}>
              Artificial Intelligence Intern
            </h5>
            <p className="card-subtitle mb-2 text-muted">16th March 2025 - Present</p>
            <p className="card-text" style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#666' }}>
              <ul>
                <li><strong>Developed</strong> an intelligent PDF processing pipeline that <strong>extracts</strong>, <strong>processes</strong>, and <strong>indexes</strong> content from documents including text, tables, and images</li>
                <li><strong>Built</strong> a scalable document QA API with <strong>FastAPI</strong>, enabling PDF uploads, <strong>RAG-based contextual answers</strong>, and modular chat history. <strong>Integrated background tasks</strong> for async table/image extraction and <strong>Redis vector indexing</strong>.</li>

              </ul>
              <strong>Tech Stack:</strong> Python, LangChain, FastAPI, MongoDB, Redis

            </p>

            <Link
              to="https://drive.google.com/file/d/1gR1qgRGKsVniMH39uD29ysqeGGAkguLh/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                backgroundColor: '#00d4ff',
                borderColor: '#00d4ff',
                color: '#fff',
                fontWeight: '600',
                padding: '10px 20px',
                borderRadius: '8px',
                fontSize: '1.1rem',
                transition: 'background-color 0.3s ease',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#0099cc')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#00d4ff')}
            >
              Offer Letter
            </Link>

          </div>
        </div>

        {/* 2nd Experience Card */}
        <div
          className="card shadow-sm mb-5"

          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
          }}
        >
          <img
            src={require('./static/envigo_ltd_logo.jpeg')}
            alt="Envigo"
            className="card-img-left mx-4"
            style={{
              width: '200px',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '10px',
              marginRight: '20px',
              border: '2px solid #00d4ff',
            }}
          />

          <div className="card-body">
            <h5 className="card-title" style={{ fontSize: '1.6rem', fontWeight: '600' }}>
              Machine Learning Intern
            </h5>
            <p className="card-subtitle mb-2 text-muted">23rd September 2024 - 18th April 2025</p>
            <p className="card-text" style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#666' }}>
              <ul>
                <li><strong>Engineered a Retrieval-Augmented Generation (RAG) application</strong> with LangChain, to power chatbots for <strong>Envigo and Hertz</strong>, enabling dynamic, context-aware responses and reducing response time by <strong>30%.</strong></li>
                <li><strong>Architected and implemented FastAPI APIs</strong> for LLM data handling, integrated MongoDB, and implemented an <strong>SMTP email feature </strong> with <strong> AWS S3 Email Service.</strong></li>
                <li><strong>Developed an AI-driven sentiment analysis system</strong> with customized moderation rules, leveraging <strong>GPT-4o</strong> for accurate <strong>media classification and content moderation.</strong></li>
                <li>Received a <strong> Pre-Placement Offer </strong> from Envigo Marketing Pvt. Ltd. for outstanding performance during the internship.</li>
              </ul>
              <strong>Tech Stack:</strong> FastAPI, MongoDB, LangChain, Python, Reactjs

            </p>
            <Link
              to="https://drive.google.com/file/d/1RSonnje4_WK_BbmnMDNuTk4od-e6RcfH/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                backgroundColor: '#00d4ff',
                borderColor: '#00d4ff',
                color: '#fff',
                fontWeight: '600',
                padding: '10px 20px',
                borderRadius: '8px',
                fontSize: '1.1rem',
                transition: 'background-color 0.3s ease',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#0099cc')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#00d4ff')}
            >
              Experience Letter
            </Link>
          </div>
        </div>

        {/* 3rd Experience Card */}
        <div
          className="card shadow-sm"

          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
          }}
        >
          <img
            src={require('./static/NeetPrep.jpg')}
            alt="NEETPrep"
            className="card-img-left mx-4"
            style={{
              width: '200px',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '10px',
              marginRight: '20px',
              border: '2px solid #ff9800',
            }}
          />

          <div className="card-body">
            <h5 className="card-title" style={{ fontSize: '1.6rem', fontWeight: '600' }}>
              Machine Learning Intern
            </h5>
            <p className="card-subtitle mb-2 text-muted">1st May 2024 - 5th July 2024</p>
            <p className="card-text" style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#666' }}>
              <ul>
                <li><strong>Integrated OpenAI’s GPT-3.5-turbo</strong> with LangChain and Interakt’s chatbot to enhance real-time user interactions via webhooks and API endpoints.</li>
                <li><strong>Developed an AI-based question evaluator</strong> using <strong>Gemini 1.5 Pro</strong> to grade, correct, and explain questions, improving clarity and correctness for users.</li>
                <li><strong>Engineered a real-time question recommender</strong> using <strong>Gemini 1.5 Pro  </strong> and PostgreSQL to provide adaptive suggestions based on student performance analytics.</li>
              </ul>
              <strong>Tech Stack:</strong> Python, LangChain, Flask, PostgreSQL

            </p>
            <Link
              to="https://drive.google.com/file/d/1UkJf-rtb4FzEQ8S9kH1mdB3dLJ1Jh7EC/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                backgroundColor: '#00d4ff',
                borderColor: '#00d4ff',
                color: '#fff',
                fontWeight: '600',
                padding: '10px 20px',
                borderRadius: '8px',
                fontSize: '1.1rem',
                transition: 'background-color 0.3s ease',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#0099cc')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#00d4ff')}
            >
              Experience Letter
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
