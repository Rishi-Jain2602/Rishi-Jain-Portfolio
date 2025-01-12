import React from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <>
      <div className="container py-5" style={{ backgroundColor: '#f5f5f5', color: '#333' }}>

        {/* Wordle Game Card */}
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
            <h5 className="card-title" style={{ fontSize: '1.6rem', fontWeight: '600' }}>Wordle Game</h5>
            <p className="card-subtitle mb-2 text-muted">Currently Working on it...</p>
            <p className="card-text" style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#666' }}>
              A bilingual word guessing game built using FastAPI and Streamlit, supporting both English and Hindi. The game provides feedback based on correct letter positions and similarity scores for Hindi words, utilizing WordNet, IndoWordNet, and IndicBERT for contextual search.
              <br />
              <strong>How to Play:</strong>
              <br />- Choose your preferred language (English or Hindi).
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
          <video
            className="card-img-left mx-4 my-4"
            controls
            style={{
              width: '350px',
              height: '350px',
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
            <h5 className="card-title" style={{ fontSize: '1.6rem', fontWeight: '600' }}>AI Image Analysis Pipeline</h5>
            <p className="card-subtitle mb-2 text-muted">Currently Working on it...</p>
            <p className="card-text" style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#666' }}>
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
            src="https://chatgptdemo.com/wp-content/uploads/2024/10/facefusion-1.jpg"
            className="card-img-left mx-4"
            alt="FaceFusion"
            style={{
              width: '150px',
              height: '150px',
              objectFit: 'cover',
              marginRight: '20px',
              borderRadius: '10px',
            }}
          />
          <div className="card-body">
            <h5 className="card-title" style={{ fontSize: '1.6rem', fontWeight: '600' }}>FaceFusion</h5>
            <p className="card-subtitle mb-2 text-muted">Currently Working on it...</p>
            <p className="card-text" style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#666' }}>
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
