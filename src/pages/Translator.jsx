// import React, { useState } from 'react';
// import "../styles/TranslatorPage.css";

// const TranslatorPage = () => {
//   const [inputText, setInputText] = useState('');
//   const [translatedText, setTranslatedText] = useState('');

//   // Function to handle translation
//   const handleTranslate = async () => {
//     // Simulating translation, in a real-world app this would be an API call.
//     // You can integrate Google Translate API or your custom translation service.
//     const translation = await fakeTranslationService(inputText); // Replace with actual API
//     setTranslatedText(translation);
//   };

//   // Simulate a fake translation service (Replace this with real API call)
//   const fakeTranslationService = (text) => {
//     // Simple mock translation for demo purposes
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(`Translated version of "${text}" into regional language`);
//       }, 1000);
//     });
//   };

//   return (
//     <div className="translator-container">
//       <h1 className="translator-title">Translator</h1>
      
//       <textarea
//         className="input-box"
//         value={inputText}
//         onChange={(e) => setInputText(e.target.value)}
//         placeholder="Enter text to translate"
//       ></textarea>
      
//       <button className="translate-button" onClick={handleTranslate}>
//         Translate
//       </button>
      
//       <div className="output-box">
//         <p>{translatedText}</p>
//       </div>
//     </div>
//   );
// };

// export default TranslatorPage;
import React, { useState } from 'react';
import axios from 'axios';
import "../styles/TranslatorPage.css";

const TranslatorPage = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('es'); // Default to Spanish

  const handleTranslate = async () => {
    try {
      const response = await axios.post('https://fruitbackend-1ikc.onrender.com/api/translate', {
        text: inputText,
        target_language: targetLanguage
      });
      setTranslatedText(response.data.translated_text);
    } catch (error) {
      console.error('Error translating text:', error);
      setTranslatedText('An error occurred while translating.');
    }
  };

  return (
    <div className="translator-container">
      <h1 className="translator-title">Translator</h1>
      
      <textarea
        className="input-box"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text to translate"
      ></textarea>

      <select
        className="language-selector"
        value={targetLanguage}
        onChange={(e) => setTargetLanguage(e.target.value)}
      >
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="zh">Chinese</option>
        {/* Add more languages as needed */}
      </select>
      
      <button className="translate-button" onClick={handleTranslate}>
        Translate
      </button>
      
      <div className="output-box">
        <p>{translatedText}</p>
      </div>
    </div>
  );
};

export default TranslatorPage;
