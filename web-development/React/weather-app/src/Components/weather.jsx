import React from 'react';

const Weather = () => {
    return (
        <div className="container">
            <div className="cards">
                <h1>Amsterdam</h1>
                <h5 className="icons">
                    <img src="http://openweathermap.org/img/wn/02d@2x.png" />
                </h5>
                <h1 className="temp">6&deg;</h1>
                {minmaxTemp(8, 7)}
                <h4 className="humidity">87</h4>
            </div>
        </div>
    );
};

function minmaxTemp(min, max) {
    return (
        <h3>
            <span>{min}&deg;</span>
            <span>{max}&deg;</span>
        </h3>
    );

}

export default Weather;


