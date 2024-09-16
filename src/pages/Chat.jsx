import React, { useState } from 'react';
import "../styles/ChatPage.css";

// Sample data for fruits (you can replace this with actual data or fetch from an API)
const fruitsData = [
  { id: 1, name: 'Apple', image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAnwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQECBAYHAwj/xAA7EAABAwIEBAMFBQcFAQAAAAABAAIDBBEFBhIhEzFBUQciYXGBkaHBFDJSsdEjM0JikuHwJENTcqIV/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAUBBv/EACkRAAIDAAICAgAEBwAAAAAAAAABAgMRBBIhMQVRE4GRsRUjJTIzQWH/2gAMAwEAAhEDEQA/AO4oiIAiIgCIiAIiIAiIgCIiAIhVt143gLkVoN+RCqET30CqIi9AREQBERAEREAREQBeUk8Ub2sklY17zZrXOALvYvVch8VcCrMLxOPM9BLK+ndI37Qxzi7gPBGlw/lPXsbd9oybS1FlcFOWN4ddBuqqPwLEosXwilr4fuzRhxH4XdR7is2SRscbnvIa1oJJPQL3fGkGseMSvZGwvkcGsaLkk2AC1DGc8QQl0OEsFTKNi91w0fqtYzRmaoxmd0MRdFh7Ts0bGT1P6KJidE1t7Bq4vK+Rl5jV+pW5fRM1WN4zWsvLXSsB5siOgfJRkstQ7Y1VQXE8uKV6GpHDbpF7+iTTRw0wLWjiPOwXIVlk5bJkXgg40G4q5w7mAJXfqpKhx3F6TeKufI0c2THWPnv81AQkGa/FsSfNf6LOMsZbyIjHzXrnZCWxZ4mbph2d4HOEeJxiEn/dZct+HMLaqaohqoWzU8jZInC4c03BXImywvsNAa0crhSmB4/UYXWABnEpXbPZqsfaOl11OL8lJNRtek1L7Onoo/D8Yoq+zaeW7iL6XNIKkF24yjJbFkwiIpAIiIAitcQLknktbxTOOG0cxp6cmqmGxDDZoPq4/S68bS9lldU7XkFpsyxq+kgr6Kekq4xJBPGWSMPJwItZay7HqqWEzTVdLSR/hhHEcPef0Ws4pnmkgLmMqa6pfbmJiwfAWVcrYpGur466x4jJ8N558vY/ieT697jw3mWke7+Nnce1tj7Q5b9jDeJhVWzVp1QuGrtsuBZhzOyoxmgxWKmMM1MdLiZHOMjD3J9/9RWwUebaGsnY2rpbxzEMDGnyjfYkdT7bqp2rr1+y63425yfjyW1LPMTE1zmjlYXCwJZi0jiRva0fyrfp4m8KzIw19vu6fyUPJhb5SdbdjvYhcOXGcHhxpwaeGpvqHyOPAc7SO4srbVN9RJctidhHBfdjLDsVc2hedmxB3sUXHPRW19msgyM/dNJd6jksumGISEWA94Wxx4RM9t3QtYB3spSgyzPUFpaPL1fawHv/AEU41Sn4UQoM1yKgLwDM5wP4WuUthuEvmlZHDGXP7E3st1oMs4fStHEj47+pfy+Cl4IIoBaGJjB2a2y21fHP3PwWKBH4NhLMOjuXF0rhZ3YexSiqi6sIRgsiWBERTAXnLI2KN0j3BrGC7iegV55LQvE3GnQwwYTBJodUeaZ3Znb3qMpKK1l3Hpd9igv9kZj+Y63MdQ6kw1xiob6b8uJ7T9F4U+UJ5A0SPtq6jkEhxzDMJomxsDHPaLm++6j63xCljsIIrAjZZG4+5M+hrjdFdKI4v+kw/I0j2mNtWLA2IIPP3KLqfDWVpc8Ygwelr/RQdRn3Fnn9nI1o6rEkzjikrvNVv0kdhz9ig5V/RohVzF7miZr8g1eKhkbZoaZsbdJe/bV62VcP8N5aCoillxqnLo3AgAbLXJcfxJ9uLUyAndY7sRqZb655D71F2x+i1cG1vs55+R03EaUTlv2vMDI9G7eCS0j5qMmxCKjaRHmqtld0D4o3gf8Am/zWgGVzj5jdG6nmzQSfRRd2+kT/AITU1/Me/kiUxHM2PCV3BrKeaO+zjT6Tb4q6jzRjD6ez6hsUo6tYLH4ph+X66tJLWWbfmVMyZMlZTXDrvtsLLxRk/OGazgcGE04+zZvDXNEWIyjDcWbG6vFzDMR+9A6H+Yei6UAvmpzavCq4PY4xVEDtTH9iDsvoXLuKMxjB6aujt+1YC4Do7qPitfGs1dX7Ry/l+BGhxtr/ALZfuSSIi1HFCIiAIiICh5LhHiLWPqMxVD77bNHsHJd2kNo3EdAuIZsouNUvd1uqOQtidb4hxja5P6NKe+SVkjnPcQwX7/VYjn3t3HVZdZRujJFisF4Led1jw+i7rdR708Qm4hcXgMbfyM1H4XHxVKmN1PK6B4ZrjO7mm9wRfn71jNc9rtUb3MPdpskTZZpQ2NrpJHdBuSnU8dj09tZJuST03K9ow94JYCbC5sFjEFri0ixBsvSN723DXEA87HmoNF8ZskaGmfW1AjYLAkDbouiYDlyGlfGJYC8luovI2Hof86LVMmtb9pBf0K6ZBM1jQGu23Ny+5vzsr6q1ms5/O5E96RLKego6SOpZSs1OkJdJGJN7u/JZjXXL4+GWtZYNc7k7bosT7TDCZCxrWOJu8gWuVF19dEZoZhK9roS4hods64turm0jnRrlNkLnuij2qGNs5vW3NbP4OVbpMIq6Vx2im1tHa43/ACWoY9XOrmmPoVtfhTAad1SDycwH5hVV/wCbUbucv6f1l7R0dFToqrcfKBERAEREBR4u0juFyXMDLVL7jr1XWzyXNM4U3Cr5R3JIUJrUbOHLJnP62OMTy6YXGUsBuRs4enqsOSja5oJbY23CnKuOQgmItDrjmL7dljSt6rO0dlWePBBPw9o30/BViomNfqLLgixbfopRwQALzET7yRgy0wl4QLQBGwMaAN7Dv3VBQs7LN0+bVc3VHGyi0i2NkmzIwr/TSBzeYU2+v1aHuF3RElp7Eix+S1wTNZa/UgC3qsjjeqjpb+GpPWSEOJS1MDZJdnO6dla6Yu5lYPG7K19Q2NjnvPlaLleNlsa0iQjaHPB7bWXRPD6C3HkH4QPn/Zc5oncRzLgjUAbFdcyZSiDC+IQNUh5+g/wq6ledOZ8rZlXX7J9ERaz5sIiIAiIgC1HPVCZImVTQbAaXenZbcsevpmVlJJTyfde2y8a0nCXWSZxaVm5WFUCyncUo30lXJDIPMx1ioatbYKmSOtVPWRb3gKjXLGnksSrY5bqo3NeDJfJYLGkm9VZNJYLCfKSVCTw0Ux0zmy3svdr1HQm6y28lA2Yke/EVQ4P8rhcHosdzrK+Alz7DmvRpsuXqd9TUxsYNy4ALtlFA2mpooWcmNAWh+G2Dmxrpm7M2ZcczbmuhBbKo4tPlvk7/AMS3qvSKoiK05oREQBERAFRVRAaxnHBftkBrKdpM0Y8zQPvD+y5niUdmEruRC59nnLhhikrqJl4TcysH8Hr7PyUJLTTRb1eM45XzaZCF5089za68sYJZUuHqsGGfS/crPnk7UrV0JapfYLBD7lXSy64+a8I3XKhZEv4tqkSNNuswmwWNRt8t1WomDbgKMYmm21LwVdJc2U/lHB5sXxKKCFt7m7ndh1K1/C6efEauOnpo3Syvdpa1vMlfQOTMtR5ew4NcGuq5B+2ePyHora4dmYeXzVTXi9smqCjioKSKmgFmRtAHqsgKqLWfNNtvWEREAREQBERAEREAVr2tc0tcAWkWIO91ciA49njwmrKqrdV5amg0O3NLO7Tp/wCrrcvQ/FaLP4ZZ0huf/jF9v+OeM/VfTaKPVFqumlh8o1uWsyYawvr8Dr4o283CEuA97bqPpZWSyNbG9pc4gBoNyT2AX18rOEzXr0N1/itv8VGVaZdTy51PUcPwfw0x7E6NkkkkGHMeLjjguf8A0jl7ypiDwYBt9sx59+vBpwPzJXW1RexgkRs5ds3rZruVsmYRlll6KJ8tQW2dUzkOefZYAD3ALYrBFVTSwzuTk9YREQ8CIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgP/9k=', description: 'Apples are nutritious fruits high in fiber and vitamin C.' },
  { id: 2, name: 'Banana', image:'data:image/jpeg;base64,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', description: 'Bananas are rich in potassium and great for energy.' },
  { id: 3, name: 'Orange', image: 'data:image/jpeg;base64,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', description: 'Oranges are an excellent source of vitamin C.' },
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
