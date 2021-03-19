// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import WeatherDetail from './WeatherDetail';
// import WeatherCard from './WeatherCard';
// import Collapsible from "react-collapsible";

// const WeatherOverview = ({ city }) => {
//   const [toggleDetails, setToggleDetails] = useState({});
//   const [lat, setLat] = useState();
//   const [lon, setLon] = useState();

//   const toggle = () => {
//     setToggleDetails(!toggleDetails);
//   }

//   useEffect(() => {
//     axios({
//       method: "GET",
//       url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=nl&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
//     })
//       .then((response) => {
//         setLat(response.data.coord.lat);
//         setLon(response.data.coord.lon);


//       })
//       .catch((error) => console.log(error));
//   }, [city]);


//   return (
//     <div className="container">
   
//         <button onClick={toggle}>weather forecast</button>
//         <div className='toggle'>
//           {toggleDetails ? <WeatherDetail lat={lat} lon={lon} city={city}  /> : null}
//         </div>
//         </div>

//   );

// };


// export default WeatherOverview;



