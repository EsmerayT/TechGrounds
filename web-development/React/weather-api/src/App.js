import React from "react";
// import WeatherCard from './Components/WeatherCard'
import WeatherDetail from "./Components/WeatherDetail"
import './App.css';
// import Accordion from "./Components/Accordion"
// // import {
// //   BrowserRouter as Router,
// //   Switch,
// //   Route,
// //   Link
// // } from "react-router-dom";



function App() {

  return (
    <div className="App">
      {/* <WeatherCard
        city="Dordrecht" />
      <WeatherCard
        city="Bali" /> */}
      <WeatherDetail lat="51.81" lon="4.6736" />

    </div>
  );
}

export default App; 
