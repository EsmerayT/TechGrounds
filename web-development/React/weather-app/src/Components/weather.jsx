import React from 'react';

const Weather = ({ city }) => {


    Weather = async () => {

        const api_call = await fetch(
            // `http://api.openweathermap.org/data/2.5/group?id=1650535,2756669&cnt=2&units=metric&lang=nl&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
            `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=nl&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        );


        const response = await api_call.json();


        console.log(response);


        return (
            <div className="container">
                <div className="cards">
                    <h1>
                        {city}
                        {/* {props.country} */}
                    </h1>
                    <h5 className="icons">
                        {/* <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt=""/> */}
                        <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="" />
                    </h5>
                    <h1 className="temp">{Math.floor(main.temp)}&deg;</h1>
                    {minmaxTemp(Math.floor(main.temp_min), Math.floor(main.temp_max))}
                    <h4>Vochtigheid</h4>
                    <h4 className="humidity">{main.humidity}%</h4>
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
};

export default Weather;