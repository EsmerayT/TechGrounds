import React from "react";
import './App.css';
import Weather from './Components/weather';
// import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

let i = 0;
const city = ["Dordrecht", "Bali"];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      // country: undefined,
      icon: undefined,
      main: undefined,
      temp: undefined,
      temp_max: undefined,
      temp_min: undefined,
      humidity: undefined,
      error: false
    };
    this.getWeather();
  }

  getWeather = async () => {

    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city[i]}&units=metric&lang=nl&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    );

    const response = await api_call.json();

    console.log(response);
    // console.log(city[0]);
    // console.log(city[1]);
  
    

    this.setState({
      city: response.name,
      // country: response.sys.country,
      temp: response.main.temp,
      temp_min: response.main.temp_min,
      temp_max: response.main.temp_max,
      humidity: response.main.humidity,
      icon: response.weather.icon,


    })
  };

  render() {
    return (
      <div className="App">
        <Weather 
        city={city[0]}
        // city="Amsterdam"
        // country={this.state.country} 
        temp={this.state.temp} 
        temp_max={this.state.temp_max} 
        temp_min={this.state.temp_min} 
        humidity={this.state.humidity} 
        icon={this.state.icon} 
        />
        <Weather
         city={city[1]}
        //  city="Dordrecht"
         // country={this.state.country} 
         temp={this.state.temp} 
         temp_max={this.state.temp_max} 
         temp_min={this.state.temp_min} 
         humidity={this.state.humidity} 
         icon={this.state.icon}  />
      </div>
    );
  }
}

export default App;
