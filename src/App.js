import React, { useState } from 'react';
import "./App.css";

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <header>
        <h2>Aufgaben - GUI's realisieren</h2>
      </header>
      <h3>Aufgabe 1: UI Radiobuttons</h3>
      <div className="radio">
        <label>
          <input 
            type="radio" 
            value="blitzEin" 
            checked={selectedOption === "blitzEin"} 
            onChange={handleOptionChange} 
          />
          Blitz ein
        </label>
      </div>
      <div className="radio">
        <label>
          <input 
            type="radio" 
            value="blitzAus" 
            checked={selectedOption === "blitzAus"} 
            onChange={handleOptionChange} 
          />
          Blitz aus
        </label>
      </div>
      <h3>Aufgabe 2: UI Radiobuttons</h3>
    </div>
  );
}

export default App;
