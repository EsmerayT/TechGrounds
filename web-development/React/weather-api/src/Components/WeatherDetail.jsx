import React, { useEffect, useState } from "react";
import axios from "axios";

let i = 0;

const WeatherDetail = ({ lat, lon }) => {
    const [details, setDetails] = useState("");
    const [date, setDate] = useState("");
    useEffect(() => {
        axios({
            method: "GET",
            url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&lang=nl&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        })
            .then((response) => {
                console.log(response);
                setDetails(response.data);
                setDate(response.data.daily);
            })
            .catch((error) => console.log(error));
    }, [lat, lon]);
    console.log(date);

    // let d = new Date(date * 1000).toLocaleDateString();
    // console.log(d)

    const d = new Date(date * 1000);
    let newDate = d.toLocaleDateString();
    console.log(newDate);
    console.log(details)
    


    // const realDate = date.map((datum) =>
    //     new Date(datum.dt * 1000).toLocaleDateString()
    // );
    // console.log(realDate);

    let i = 0;

    for (let i = 0; i < date.length; i++) {
        console.log(date[i].dt);
    }


 



     // const forecast = new Date(date * 1000);
    // let newDate = forecast.toLocaleDateString();
    // console.log(newDate);
    // console.log(details)




    return (
        <div className="details">
            {details && (
                <div>
                    {/* {
                        <div>
                            {realDate.map((datum) => (
                                <div>{datum}</div>
                            ))}
                        </div>
                    } */}
                    <h1>Dordrecht</h1>
                    <p>{newDate}</p>
                    <img src={`http://openweathermap.org/img/wn/${details.daily[0].weather[0].icon}@2x.png`} alt="" />
                    <p>{Math.floor(details.daily[0].temp.min)}/{Math.floor(details.daily[0].temp.max)}&deg;C</p>
                    <p>Temperature</p>
                    <p>Morning: {Math.floor(details.daily[0].temp.morn)}&deg;C</p>
                    <p>Afternoon: {Math.floor(details.daily[0].temp.day)}&deg;C</p>
                    <p>Evening: {Math.floor(details.daily[0].temp.eve)}&deg;C</p>
                    <p>Night: {Math.floor(details.daily[0].temp.night)}&deg;C</p>
                </div>
            )}
        </div>
    );
};

export default WeatherDetail;


