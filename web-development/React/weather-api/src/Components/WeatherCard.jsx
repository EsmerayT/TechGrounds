import React, { useEffect, useState } from "react";
import axios from "axios";

const WeatherCard = ({ city }) => {
  const [weather, setWeather] = useState({});
  const [weatherIcon, setWeatherIcon] = useState({});
  useEffect(() => {
    axios({
      method: "GET",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=nl&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    })
      .then((response) => {
        console.log(response.data);
        setWeather(response.data.main);
        setWeatherIcon(response.data.weather[0]);
      })
      .catch((error) => console.log(error));
  }, [city]);


  return (
    <div className="container">
      <div className="cards">
        <h1>
          {city}
        </h1>
        <h5 className="icons">
          <img src={`http://openweathermap.org/img/wn/${weatherIcon.icon}@2x.png`} alt="" />
        </h5>
        <h1 className="temp">{Math.floor(weather.temp)}&deg;</h1>
        {minmaxTemp(Math.floor(weather.temp_min), Math.floor(weather.temp_max))}
        <h4>Vochtigheid</h4>
        <h4 className="humidity">{weather.humidity}%</h4>
      </div>
    </div>
  );
};

function minmaxTemp(min, max) {
  return (
    <h3>
      <span>Min:{min}&deg;</span>&emsp;
      <span>Max:{max}&deg;</span>
    </h3>
  );

};


export default WeatherCard;