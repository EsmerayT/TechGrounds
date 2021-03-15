import React, { useState } from "react";
import Weather from './Components/Weather'
import './App.css';



function App() {
 
  return (
    <div className="App">
        <Weather
          city="Dordrecht" />
        <Weather
          city="Bali" />
      </div>
  );
}

export default App; 
