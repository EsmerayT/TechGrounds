import React from "react";
import './App.css';
import Weather from './Components/weather';
// import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';


const API_key = "9fdb1ff1cf943338caee836b3497d08a";

class App extends React.Component {
  constructor(){
    super();
    this.state = {};
  }

  getWeather = async () => {
    const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_key}')
  }

  render() {
    return (
      <div className="App">
        <Weather />
      </div>
    );
  }
}

export default App;
