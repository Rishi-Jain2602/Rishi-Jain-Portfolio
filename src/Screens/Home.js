import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <div style={{ backgroundColor: '#1a1a1a', color: '#ffffff', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="container py-5" style={{ maxWidth: '1200px' }}>
          <div className="card" style={{ background: 'none', display: 'flex', flexDirection: 'row', alignItems: 'center', border: 'none' }}>
            
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQFcR_yanjjhrQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1696502980766?e=1742428800&v=beta&t=YFO0zODaUJketdfl6atNNRhqdFyfFr95CiBMvW90h_0"
              className="card-img-left"
              alt="Rishi Jain"
              style={{ width: '300px', height: '300px', objectFit: 'cover', borderRadius: '50%', marginRight: '40px' }}
            />

            <div className="card-body">
              <h5 className="card-title" style={{ color:'#ffffff', fontSize: '2.5rem', fontWeight: '700' }}>RISHI JAIN</h5>
              <p className="card-subtitle mb-2" style={{ color: '#00d4ff', fontSize: '1.2rem' }}>Developer (AI, Web)</p>
              
              <p className="card-text" style={{ lineHeight: '1.6', fontSize: '1.1rem', color: '#ffffff' }}>
                <br />
                Hi, I am B.Tech student at NITK with a strong foundation in Machine Learning and NLP, complemented by hands-on experience in developing cutting-edge AI solutions. During internships at NeetPrep and Envigo, I built impactful RAG applications and LLM-based solutions using OpenAI models. Passionate about driving innovation in AI, I also have a keen interest in software development, particularly as a MERN stack developer, creating efficient and user-friendly applications. My expertise lies in integrating AI and software engineering to develop smart, scalable solutions for real-world challenges.
              </p>

              <div style={{ marginTop: '20px' }}>
                <Link 
                  to="https://drive.google.com/file/d/1BHAhBFgZS6k1qGypdCfyw-dkF7TgDajR/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                  style={{
                    backgroundColor: '#00d4ff', 
                    borderColor: '#00d4ff',
                    color: '#1a1a1a', 
                    fontWeight: '600',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    fontSize: '1.1rem',
                    transition: 'background-color 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#0099cc'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#00d4ff'}
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
