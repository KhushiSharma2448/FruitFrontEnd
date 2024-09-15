import React from "react";
import "../styles/AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Fruit.ai</h1>
      <p className="about-description">
        Welcome to <strong>Fruit.ai</strong>! Our platform is designed to help you explore a wide variety of fruits, their benefits, and related information using advanced AI technology. We are focused on bringing health awareness and ease of access to important fruit-related data through our services.
      </p>
      <section className="about-section">
        <h2 className="section-title">Our Mission</h2>
        <p className="section-text">
          Our mission is to make information about fruits accessible and engaging for everyone. With the power of AI, we aim to create an intuitive platform where users can easily interact with fruit-related content, translations, and frequently asked questions, and even have a personalized chatbot experience.
        </p>
      </section>

      <section className="about-section">
        <h2 className="section-title">Key Services</h2>
        <ul className="services-list">
          <li><strong>Chatbot</strong>: A personalized chatbot that helps you learn about different fruits, providing you with detailed information about each one.</li>
          <li><strong>Fruit Translator</strong>: Translate fruit names and information into regional languages, making the platform accessible to everyone.</li>
          <li><strong>FAQ</strong>: A list of commonly asked questions about fruits and their health benefits.</li>
          <li><strong>About Page</strong>: Learn more about the Fruit.ai project and our mission to spread knowledge about the importance of fruits.</li>
        </ul>
      </section>

      <section className="about-section">
        <h2 className="section-title">Why Choose Fruit.ai?</h2>
        <p className="section-text">
          At <strong>Fruit.ai</strong>, we leverage the latest AI technologies to make learning about fruits easy, fun, and accessible. Our tools are designed for users of all ages to explore the world of fruits through an interactive platform. Whether you're curious about the health benefits of a fruit or need information in your preferred language, Fruit.ai is here to help!
        </p>
      </section>

      <footer className="about-footer">
        <p>&copy; 2024 Fruit.ai. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
