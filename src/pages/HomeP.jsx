import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/HomePage.css"

const HomePage = () => {
  const navigate = useNavigate();

  // Handle redirection
  const handleRedirect = (path) => {
    navigate(path);
  };

  return (
    <div className="homepage-container">
      <h1 className="homepage-title">Welcome to Fruit.ai</h1>
      
      <div className="services-container">
        
        {/* Chat Service */}
        <div className="service-card" onClick={() => handleRedirect('/chat')}>
          <h2 className="service-title">Chat</h2>
          <p className="service-description">A personal chatbot with a list of fruits and their details.</p>
        </div>

        {/* Translator Service */}
        <div className="service-card" onClick={() => handleRedirect('/translator')}>
          <h2 className="service-title">Translator</h2>
          <p className="service-description">Translate text into regional languages.</p>
        </div>

        {/* FAQ Page */}
        <div className="service-card" onClick={() => handleRedirect('/createFaq')}>
          <h2 className="service-title">FAQ</h2>
          <p className="service-description">Find answers to frequently asked questions.</p>
        </div>

        {/* About Page */}
        <div className="service-card" onClick={() => handleRedirect('/about')}>
          <h2 className="service-title">About</h2>
          <p className="service-description">Learn more about our application and team.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
