import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Projects.css'
export default function Projects() {
  return (
    <>
      <div className="container py-5" style={{ backgroundColor: '#f5f5f5', color: '#333' }}>

        {/* Wordle Game Card */}
        <div className="card shadow-sm mb-5" >
          <img
            src="https://www.nytimes.com/games-assets/v2/assets/wordle/wordle_og_1200x630.png"
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
              <br />- Choose your preferred language (English, Hindi or other).
              <br />- Enter a word in the selected language and category.
              <br />- Click the Submit button to receive feedback.
              <br />- You have a total of 5 attempts to guess the word correctly.
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
          <video
            className="card-img-left mx-4 my-4"
            controls
            style={{
              width: '300px',
              height: '300px',
              objectFit: 'cover',
              borderRadius: '10px',
              marginRight: '20px',
            }}
          >
            <source
              src="https://github.com/user-attachments/assets/2f57f3ae-50b9-4f8c-aea1-c2e4bcff63ed"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="card-body">
            <h5 className="card-title" >AI Image Analysis Pipeline</h5>
            <p className="card-text" >
              An AI Image Analysis Pipeline automates image processing by detecting objects, segmenting them, extracting features, and generating textual descriptions or structured data.
              <br />
              <strong>Tools & Models Used:</strong>
              <br />1. Image Segmentation: Mask R-CNN
              <br />2. Feature Extraction: YOLO (Hugging Face Model: hustvl/yolos-tiny)
              <br />3. Text/Data Extraction from Objects: Hugging Face Model (Salesforce/blip-image-captioning-large)
              <br />4. Summarization: Hugging Face Model (facebook/bart-large-cnn)
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

        {/* FaceFusion Card */}
        <div
          className="card shadow-sm mb-5"
          
          
        >
          <img
            src="https://chatgptdemo.com/wp-content/uploads/2024/10/facefusion-1.jpg"
            className="card-img-left mx-4"
            alt="FaceFusion"
            style={{
              width: '250px',
              height: '250px',
              objectFit: 'cover',
            }}
          />
          <div className="card-body">
            <h5 className="card-title" >FaceFusion</h5>
            <p className="card-subtitle mb-2 text-muted">Currently Working on it...</p>
            <p className="card-text" >
              FaceFusion is an AI-powered tool that allows seamless face and object swapping in images. By leveraging models like Stable Diffusion for image generation and face-swapping technologies, it automatically detects and replaces human faces with AI-generated content based on a prompt.
            </p>
            <div>
              <Link
                to="https://github.com/Rishi-Jain2602/FaceFusion"
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
