import React from 'react'
import './styles/Education.css'
export default function Education() {
    return (
        <>
            <div className="container py-3" style={{ backgroundColor: '#f5f5f5', color: '#333' }}>
                <div className="card shadow-sm mb-5" >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/c/cc/NITK_Emblem.png"
                        className="card-img-left mx-4"
                        alt="NITK"
                        style={{
                            width: '300px',
                            height: '200px',
                            objectFit: 'contain',
                            marginRight: '20px',
                            borderRadius: '10px',
                        }}
                    />
                    <div className="card-body">
                        <h5 className="card-title" style={{ fontSize: '1.6rem', fontWeight: '600' }}>National Institute of Technology, Karnataka</h5>
                        <p className="card-subtitle mb-2 text-muted">Dec. 2021 - April 2025</p>
                        <p className="card-text" style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#666' }}>
                            I am currently pursuing a <strong>B.Tech in Civil Engineering with AI Minors at NITK</strong>, where I am gaining a strong foundation in both traditional engineering principles and cutting-edge technologies. <br />
                            <strong>Activities and societies:</strong> <br />
                            <ul>
                                <li>
                                    Executive member of IEEE NITK
                                </li>
                                <li>
                                    Internship Coordinator at CDC NITK 2023
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container" style={{ backgroundColor: '#f5f5f5', color: '#333' }}>
                <div className="card shadow-sm mb-5">
                    <img
                        src="https://www.schooldekho.org/storage/logo//3ekaidxoyx440skc44w4gg00occc8sk.jpg"
                        className="card-img-left mx-4"
                        alt="HHS"
                        style={{
                            width: '300px',
                            height: '200px',
                            objectFit: 'contain',
                            marginRight: '20px',
                            borderRadius: '10px',
                        }}
                    />
                    <div className="card-body">
                        <h5 className="card-title" style={{ fontSize: '1.6rem', fontWeight: '600' }}>Happy Hours School, Jodhpur</h5>
                        <p className="card-text" style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#666' }}>
                            I completed my schooling at Happy Hours School, Jodhpur, scoring <strong>91.2% in 12th grade and 80% in 10th grade </strong>. Alongside academics, I enjoyed activities like art & craft and played sports such as football, badminton etc which helped me stay active and balanced.

                        </p>

                    </div>
                </div>
            </div>
        </>
    )
}
