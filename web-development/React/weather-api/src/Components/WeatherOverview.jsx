import React, { useState, useEffect } from "react";
// import Accordion from 'react-bootstrap/Accordion'
function WeatherDetail({ lat, ion }) {
  const [details, setDetails] = useState();
  const [date, setDate] = useState();
  useEffect(() => {
    const getDataFromServer = async () => {
      let req = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${ion}&exclude=hourly&units=metric&appid=979bc477cf16f1ddfbd53a5f2b5663de`
      );
      let data = await req.json();
      setDetails(data);
      setDate(data.daily);
    };
    getDataFromServer();
  }, [ion, lat]);
  console.log(date);
  // for (const property in date) {
  //   console.log(`${property}: ${date[property].dt}`);
  // }
//   const d = new Date(date[0].dt * 1000).toLocaleDateString();
  const realDate = date.map((datum) =>
    new Date(datum.dt * 1000).toLocaleDateString()
  );
  console.log(realDate);
  return (
    <div>
      {
        <div>
          {realDate.map((datum) => (
            <div>{datum}</div>
          ))}
        </div>
      }
    </div>
  );
}
export default WeatherDetail;