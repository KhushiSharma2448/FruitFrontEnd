import React, { useState } from "react";
import "../styles/FaqPage.css";

const FaqPage = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const faqs = [
    {
      question: "What is Fruit.ai?",
      answer: "Fruit.ai is an AI-powered platform for managing your health by providing personalized insights about fruits, their benefits, and more."
    },
    {
      question: "How does the chatbot work?",
      answer: "The chatbot is designed to answer your questions regarding fruits, their health benefits, and provide other useful information."
    },
    {
      question: "How do I use the Translator?",
      answer: "The translator allows you to translate names of fruits or other health-related terms into regional languages."
    },
    {
      question: "Can I get detailed information on specific fruits?",
      answer: "Yes, you can browse detailed information about specific fruits including their nutritional value, health benefits, and more."
    },
    {
      question: "Is there a mobile app version available?",
      answer: "Currently, Fruit.ai is accessible through the web, but we are working on launching a mobile app version soon."
    }
  ];

  const toggleAnswer = (index) => {
    if (openQuestionIndex === index) {
      setOpenQuestionIndex(null);
    } else {
      setOpenQuestionIndex(index);
    }
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <h3>{faq.question}</h3>
              <span>{openQuestionIndex === index ? "-" : "+"}</span>
            </div>
            {openQuestionIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
