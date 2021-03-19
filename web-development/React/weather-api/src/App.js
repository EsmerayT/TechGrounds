import React from "react";
import WeatherCard from './Components/WeatherCard'
import WeatherDetail from "./Components/WeatherDetail"
import './App.css';



function App() {

  return (
    <div className="App">
      <WeatherCard
        city="Dordrecht" />
      <WeatherCard
        city="Bali" />
    </div>
  );
}

export default App; 
