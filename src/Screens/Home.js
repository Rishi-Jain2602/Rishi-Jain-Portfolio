import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Home.css'
export default function Home() {
  return (
    <>
      <div className="main-container ">
        <div className="content-container">
          <div className="profile-card">
            <img
              src={require('./static/Rishi Jain.jpeg')}
              className="card-img-left"
              alt="Rishi Jain"
              style={{ width: '300px', height: '300px', objectFit: 'cover', borderRadius: '50%', marginRight: '40px' }}
            />

            <div className="profile-content">
              <h5 className="profile-title">RISHI JAIN</h5>
              <p className="profile-subtitle">Developer (AI, Web)</p>

              <p className="profile-text">
                <br />
                Hi, I am B.Tech student at NITK with a strong foundation in Machine Learning and NLP, complemented by hands-on experience in developing cutting-edge AI solutions. During internships at NeetPrep and Envigo, I built impactful RAG applications and LLM-based solutions using OpenAI models. Passionate about driving innovation in AI, I also have a keen interest in software development, particularly as a MERN stack developer, creating efficient and user-friendly applications. My expertise lies in integrating AI and software engineering to develop smart, scalable solutions for real-world challenges.
              </p>

              <div >
                <Link
                  to="https://drive.google.com/file/d/1BHAhBFgZS6k1qGypdCfyw-dkF7TgDajR/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-button"
                >
                  Resume Link
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
