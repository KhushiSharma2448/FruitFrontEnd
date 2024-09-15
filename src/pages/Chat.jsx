import React, { useState } from 'react';
import "../styles/ChatPage.css";

// Sample data for fruits (you can replace this with actual data or fetch from an API)
const fruitsData = [
  { id: 1, name: 'Apple', image: '/images/apple.jpg', description: 'Apples are nutritious fruits high in fiber and vitamin C.' },
  { id: 2, name: 'Banana', image:'data:image/jpeg;base64,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', description: 'Bananas are rich in potassium and great for energy.' },
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
