import React, { useState } from 'react';
import "../styles/ChatPage.css";

// Sample data for fruits (you can replace this with actual data or fetch from an API)
const fruitsData = [
  { id: 1, name: 'Apple', image: '/images/apple.jpg', description: 'Apples are nutritious fruits high in fiber and vitamin C.' },
  { id: 2, name: 'Banana', image: 'data:image/jpeg;base64,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', description: 'Bananas are rich in potassium and great for energy.' },
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
