import React, { useState } from 'react';
import "../styles/ChatPage.css";

// Sample data for fruits (you can replace this with actual data or fetch from an API)
const fruitsData = [
  { id: 1, name: 'Apple', image: '/images/apple.jpg', description: 'Apples are nutritious fruits high in fiber and vitamin C.' },
  { id: 2, name: 'Banana', image: '/images/banana.jpg', description: 'Bananas are rich in potassium and great for energy.' },
  { id: 3, name: 'Orange', image: '/images/orange.jpg', description: 'Oranges are an excellent source of vitamin C.' },
  // Add more fruits here
];

const ChatPage = () => {
  const [selectedFruit, setSelectedFruit] = useState(null);

  // Handler to select a fruit and display details
  const handleFruitClick = (fruit) => {
    setSelectedFruit(fruit);
  };

  // Handler to go back to the fruit list view
  const handleBackClick = () => {
    setSelectedFruit(null);
  };

  return (
    <div className="chat-page-container">
      {selectedFruit ? (
        <div className="fruit-details-container">
          <button onClick={handleBackClick} className="back-button">Back</button>
          <div className="fruit-details-card">
            <img src={selectedFruit.image} alt={selectedFruit.name} className="fruit-details-image" />
            <h2>{selectedFruit.name}</h2>
            <p>{selectedFruit.description}</p>
          </div>
        </div>
      ) : (
        <div className="fruit-list-container">
          <h1>Fruit List</h1>
          <div className="fruit-cards-container">
            {fruitsData.map(fruit => (
              <div key={fruit.id} className="fruit-card" onClick={() => handleFruitClick(fruit)}>
                <img src={fruit.image} alt={fruit.name} className="fruit-image" />
                <h3>{fruit.name}</h3>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatPage;
