import React, { useEffect, useState } from "react";
import axios from "axios";

const WeatherDetail = ({ lat, lon }) => {
    const [details, setDetails] = useState({});
    useEffect(() => {
        axios({
            method: "GET",
            url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&lang=nl&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        })
            .then((response) => {
                console.log(response);
                setDetails(response.data);
            })
            .catch((error) => console.log(error));
    }, [lat, lon]);

    const date = new Date(details.current.dt * 1000);
    let newDate = date.toLocaleDateString();
    console.log(newDate);

    return (
        <div className="details">
            <p>{newDate}</p>
            <img src={`http://openweathermap.org/img/wn/${details.daily[0].weather[0].icon}@2x.png`} alt="" />
            <p>{Math.floor(details.daily[0].temp.min)}/{Math.floor(details.daily[0].temp.max)}&deg;</p>
            <p>Temperature</p>
            <p>Morning: {Math.floor(details.daily[0].temp.morn)}&deg;</p>
            <p>Afternoon: {Math.floor(details.daily[0].temp.day)}&deg;</p>
            <p>Evening: {Math.floor(details.daily[0].temp.eve)}&deg;</p>
            <p>Night: {Math.floor(details.daily[0].temp.night)}&deg;</p>
        </div>
    );
};

export default WeatherDetail;


