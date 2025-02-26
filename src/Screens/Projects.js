import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Projects.css'
export default function Projects() {
  return (
    <>
      <div className="container py-5" style={{ backgroundColor: '#f5f5f5', color: '#333' }}>

        {/* LinkRefine */}
        <div className="card shadow-sm mb-5" >
          <img
            src={require('./static/LinkedIn review systemGen AI.webp')}
            className="card-img-left mx-4"
            alt="Wordle"
            style={{
              width: '275px',
              height: '200px',
              objectFit: 'contain',
              marginRight: '20px',
              borderRadius: '10px',
            }}
          />
          <div className="card-body">
            <h5 className="card-title">LinkRefine: Polish Your LinkedIn Presence</h5>
            <p className="card-text" >

            <strong>LinkRefine</strong> is a web application that refines and optimizes LinkedIn profiles by fetching and analyzing data such as the headline, about section, work experience, and skills. <br />

<ul>
  <li>Offers AI-driven suggestions to improve profile sections, helping professionals present their expertise more effectively and attract recruiters.</li>
  <li>Streamlines the profile enhancement process by providing actionable insights from the analysis of the LinkedIn profile URL.</li>
  <li>Powered by <strong>FastAPI</strong> and <strong>LangChain</strong>—leveraging <strong>Mistral LLM</strong> for profile optimization and <strong>LLAMA 3B</strong> for advanced image analysis.</li>
</ul>

            </p>
            <div>
              <Link
                to="https://github.com/Rishi-Jain2602/LinkRefine"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ backgroundColor: '#00d4ff', borderColor: '#00d4ff' }}
              >
                Github Link
              </Link>

              <Link
                to="https://link-refine-five.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mx-3"
                style={{ backgroundColor: '#00d4ff', borderColor: '#00d4ff' }}
              >
                Live Link
              </Link>
            </div>
          </div>
        </div>

        {/* AskSmart */}
        <div className="card shadow-sm mb-5" >
          <img
            src={require('./static/AskSmart.webp')}
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
            <h5 className="card-title">AskSmart: A RAG-Powered Intelligent Query System</h5>
            <p className="card-text" >
              <ul>
                <li><strong>AskSmart</strong> is a powerful document retrieval system that allows you to upload and process various formats such as <strong>PDF, DOCX, JSON, and TXT</strong>. Our advanced <strong>AI technology</strong> retrieves relevant information and generates context-aware responses to your queries.
                </li>

                <li>
                  Leveraged <strong>Weaviate</strong> as a vector store to index document chunks, resulting in a <strong>30%</strong> improvement in response times compared to other vector store methods.
                </li>
                <li>
                  Delivered a full-stack solution with a <strong>FastAPI backend </strong> and a responsive <strong>React frontend</strong>, ensuring a smooth, context-aware user experience.
                </li>
              </ul>


            </p>
            <div>
              <Link
                to="https://github.com/Rishi-Jain2602/AskSmart"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ backgroundColor: '#00d4ff', borderColor: '#00d4ff' }}
              >
                Github Link
              </Link>

              <Link
                to="https://ask-smart-git-main-rishi-jain2602s-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mx-3"
                style={{ backgroundColor: '#00d4ff', borderColor: '#00d4ff' }}
              >
                Live Link
              </Link>
            </div>
          </div>
        </div>

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
              <strong>2. LLM-Powered Feedback:</strong> The AI analyzes conversations and provides real-time tips on clarity, tone, and response improvement, with detailed suggestions post-conversation.

            <br />
              <strong>3. Full Stack Integration:</strong> Built with <strong>FastAPI backend </strong> and a responsive <strong>React frontend</strong>, ensuring seamless display of suggestions with proper formatting.
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

              <Link
                to="https://conversational-ai-coach.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mx-3"
                style={{ backgroundColor: '#00d4ff', borderColor: '#00d4ff' }}
              >
                Live Link
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
