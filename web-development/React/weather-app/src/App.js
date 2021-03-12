import React from "react";
import './App.css';
import Weather from './Components/weather';
// import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;


const city = ["Dordrecht", "Bali"];


// for (let i = 0; i < city.length; i++) {
//   console.log(city[i]);
// }

city.forEach(element => console.log(element));


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
      // `http://api.openweathermap.org/data/2.5/group?id=1650535,2756669&cnt=2&units=metric&lang=nl&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=nl&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    );

   

    const response = await api_call.json();

  

    console.log(response);
   


    this.setState({
      city: response.name,
      // country: response.sys.country,
      temp: response.main.temp,
      temp_min: response.main.temp_min,
      temp_max: response.main.temp_max,
      humidity: response.main.humidity,
      icon: response.weather[0].icon,
    })
  };


  render() {
    return (
      <div className="App">
        <Weather
          city={this.state.city}
          // city={"Dordrecht"}
          country={this.state.country} 
          temp={this.state.temp}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          humidity={this.state.humidity}
          icon={this.state.icon}
        />
        <Weather
          city={this.state.city}
          // city={"Bali"}
          country={this.state.country} 
          temp={this.state.temp}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          humidity={this.state.humidity}
          icon={this.state.icon} />
      </div>
    )
  }
}


export default App;


// const App = () => {
//   return (
//     <div className="cards">
//       <Weather city="Dordrecht"/>
//       <Weather city="Bali"/>
//     </div>
//   );
// };

// export default App;



