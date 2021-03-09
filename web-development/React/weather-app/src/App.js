import React from "react";
import './App.css';
import Weather from './Components/weather';
// import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

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
    const city = ["Amsterdam", "Dordrecht"]

    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=nl&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    );

    const response = await api_call.json();

    console.log(response);
    

    this.setState({
      city: response.name,
      // city: ["Amsterdam", "Dordrecht"],
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
        city={this.state.city}
        // city="Amsterdam"
        // country={this.state.country} 
        temp={this.state.temp} 
        temp_max={this.state.temp_max} 
        temp_min={this.state.temp_min} 
        humidity={this.state.humidity} 
        icon={this.state.icon} 
        />
        <Weather
         city={this.state.city}
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
