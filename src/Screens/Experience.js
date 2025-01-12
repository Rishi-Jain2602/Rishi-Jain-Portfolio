import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Experience.css'

export default function Experience() {
  return (
    <>
      <div className="container py-5" style={{ backgroundColor: '#f5f5f5', color: '#333' }}>
        {/* First Experience Card */}
        <div
          className="card shadow-sm mb-5"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '20px',
            borderRadius: '15px',
            backgroundColor: '#fff',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
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
            src="https://media.licdn.com/dms/image/v2/D4D0BAQEwrOXWtF5msA/company-logo_200_200/company-logo_200_200/0/1699512860946/envigo_ltd_logo?e=2147483647&v=beta&t=M-f5mu6rRLlaS5gUvfhowuwbGQCnhHgaIcj8yHtiGi8"
            alt="Envigo"
            className="card-img-left mx-4"
            style={{
              width: '100px',
              height: '100px',
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
            <p className="card-subtitle mb-2 text-muted">23rd September 2024 - Present</p>
            <p className="card-text" style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#666' }}>
              • Developed Link Retrieval-Augmented Generation (RAG) application using LangChain to enhance Envigo’s chatbot with context-aware responses.
              <br />
              • Built APIs with FastAPI for data uploading to feed the LLM and prompts for instruction.
              <br />
              • Integrated MongoDB to store user details, bot conversations, LLM data, and prompts.
              <br />
              <strong>Tech Stack:</strong> FastAPI, MongoDB, LangChain, Python
            </p>
          </div>
        </div>

        {/* Second Experience Card */}
        <div
          className="card shadow-sm"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '20px',
            borderRadius: '15px',
            backgroundColor: '#fff',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
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
            src="https://yt3.googleusercontent.com/w-EB_6TPOqSfp6riGh3EPneWBg2ymTj_9p7VKrlTBQNWhuIN1Lrkvpv1zKiZCW2kcmJn0yiT5vk=s900-c-k-c0x00ffffff-no-rj"
            alt="NEETPrep"
            className="card-img-left mx-4"
            style={{
              width: '100px',
              height: '100px',
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
              • Integrated OpenAI’s GPT-3.5-turbo with LangChain and Interakt’s chatbot to enhance real-time user interactions via webhooks and API endpoints.
              <br />
              • Developed an AI-based question evaluator using Gemini 1.5 Pro to grade, correct, and explain questions, improving clarity and correctness for users.
              <br />
              • Engineered real-time question recommender using Gemini 1.5 Pro and PostgreSQL to provide adaptive suggestions based on student performance analytics.
              <br />
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
