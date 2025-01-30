import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Projects.css'
export default function Projects() {
  return (
    <>
      <div className="container py-5" style={{ backgroundColor: '#f5f5f5', color: '#333' }}>

        {/* ConvAI */}
        <div className="card shadow-sm mb-5" >
          <img
            src={require('./static/ConvAI.JPG')}
            className="card-img-left mx-4"
            alt="Wordle"
            style={{
              width: '300px',
              height: '200px',
              objectFit: 'contain',
              marginRight: '20px',
              borderRadius: '10px',
            }}
          />
          <div className="card-body">
            <h5 className="card-title">ConvAI: Conversational AI Coach</h5>
            <p className="card-text" >

              This project is a web-based voice chat interface integrated with <strong> Mistral AI </strong> to provide real-time conversational improvement suggestions. It supports voice-based conversations between two users, such as in an interview scenario.
              <br />
              <strong>Key Features: <br /></strong>


              <strong>1. Voice Interaction:</strong> Users engage via voice, with transcriptions displayed in the chat. <br />
              <strong>2. LLM-Powered Suggestions: </strong> The AI analyzes conversations and offers tips on clarity, tone, and how to improve responses. <br />
              <strong>3. Improvement Feedback:</strong> Detailed suggestions are provided post-conversation, focusing on tone, clarity, and completeness. <br />
              <strong>4. Full Stack Integration:</strong> Built with <strong>React.js on the frontend and FastAPI for the backend</strong>, ensuring seamless display of suggestions with proper formatting.
            </p>
            <div>
              <Link
                to="https://github.com/Rishi-Jain2602/Conversational-AI-Coach"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ backgroundColor: '#00d4ff', borderColor: '#00d4ff' }}
              >
                Github Link
              </Link>
            </div>
          </div>
        </div>

        {/* Wordle Game Card */}
        <div className="card shadow-sm mb-5" >
          <img
            src={require('./static/wordle game.JPG')}
            className="card-img-left mx-4"
            alt="Wordle"
            style={{
              width: '300px',
              height: '200px',
              objectFit: 'contain',
              marginRight: '20px',
              borderRadius: '10px',
            }}
          />
          <div className="card-body">
            <h5 className="card-title">Wordle Game</h5>
            <p className="card-text" >
              A bilingual word guessing game built using <strong>FastAPI and React.js</strong>, supporting English, Hindi, and various other languages. The game evaluates guesses by providing similarity scores and common keywords based on the descriptions of the guessed word and the target word. It also offers hints for the target word, utilizing <strong> WordNet and MistralAPI </strong>for contextual search to enhance the guessing experience.
              <br />
              <strong>How to Play:</strong>
              <br /><strong>1.</strong> Choose your preferred language: <strong>(English, Hindi or other)</strong>.
              <br /><strong>2.</strong> Enter a word in the selected language and category.
              <br /><strong>3.</strong> Click the Submit button to receive feedback.
              <br /><strong>4.</strong> You have a total of <strong>5 attempts</strong> to guess the word correctly.
            </p>
            <div>
              <Link
                to="https://github.com/Rishi-Jain2602/Wordle"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ backgroundColor: '#00d4ff', borderColor: '#00d4ff' }}
              >
                Github Link
              </Link>
            </div>
          </div>
        </div>

        {/* AI Image Analysis Pipeline Card */}
        <div className="card shadow-sm mb-5" >
          <img
            src={require('./static/AI Img Analysis pipeline.webp')}
            className="card-img-left mx-4"
            alt="Wordle"
            style={{
              width: '300px',
              height: '200px',
              objectFit: 'contain',
              marginRight: '20px',
              borderRadius: '10px',
            }}
          />

          <div className="card-body">
            <h5 className="card-title" >AI Image Analysis Pipeline</h5>
            <p className="card-text" >
              An AI Image Analysis Pipeline automates image processing by detecting objects, segmenting them, extracting features, and generating textual descriptions or structured data.
              <br />
              <strong>Tools & Models Used:</strong>
              <br /><strong>1. Image Segmentation:</strong> Mask R-CNN
              <br /><strong>2. Feature Extraction:</strong> YOLO (Hugging Face Model: hustvl/yolos-tiny)
              <br /><strong>3. Text/Data Extraction from Objects:</strong> BLIP (Hugging Face Model: Salesforce/blip-image-captioning-large)
              <br /><strong>4. Summarization:</strong> BART (Hugging Face Model: facebook/bart-large-cnn)
            </p>
            <div>
              <Link
                to="https://github.com/Rishi-Jain2602/AI-Image-Analysis-Pipeline"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ backgroundColor: '#00d4ff', borderColor: '#00d4ff' }}
              >
                Github Link
              </Link>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
