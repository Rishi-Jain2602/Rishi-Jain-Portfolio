import React, { useState } from 'react'
import './styles/Contact.css'
import { Link } from 'react-router-dom';
export default function Contact() {
    const [info,setinfo] = useState({name:"",email:"",message:""});

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(info),
            });
            const result = await response.text();
            alert(result);
        } catch (error) {
            alert('Error sending email: ' + error.message);
        }
    };
    
    const onChange = (event)=>{
        setinfo({...info,[event.target.name]:event.target.value});
    }
    return (
        <>
            <div className="contact-form-container">
                <h2 className="form-title">Contact Me</h2>
                <p className="form-subtitle">I'd love to hear from you! Fill out the form and I'll get back to you.</p>
                
                <form  className="contact-form" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="name" name="name" onChange={onChange} placeholder="Your Full Name" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input type="email" className="form-control" id="email" name="email" onChange={onChange} placeholder="name@example.com" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" id="message" name="message" onChange={onChange} rows="4" placeholder="Your Message" required></textarea>
                    </div>
                    <div className="submit-btn-container">
                        <button type="submit" className="btn submit-btn">Submit</button>
                    </div>
                </form>
            </div>


            <div className='container social-media-container'>
                <p className="social-title">Reach out to me:</p>
                <div className="social-icons">
                    <Link to="https://www.linkedin.com/in/rishi-jain-5a79b7223/" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                        <i className="fab fa-linkedin"></i>
                    </Link>
                    <Link to="mailto:rishijainai262003@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                        <i className="fas fa-envelope"></i>
                    </Link>
                    <Link to="https://www.instagram.com/rishi_jain_262003/" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                        <i className="fab fa-instagram"></i>
                    </Link>
                    <Link to="https://x.com/beingRJ262003" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                        <i className="fab fa-twitter"></i>
                    </Link>
                    <Link to="https://github.com/Rishi-Jain2602" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                        <i className="fab fa-github"></i>
                    </Link>

                </div>
            </div>
        </>
    )
}
