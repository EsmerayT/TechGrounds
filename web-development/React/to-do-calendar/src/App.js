import React from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Holidays from './Components/Calendar/Holidays'

export default function App() {
  const holidays = Holidays
  const i = 0
  console.log(Holidays[i].date.length)
  console.log(Holidays[i].name)
  

  // const datums = JSON.parse(holidays)
  // console.log(datums)

  const checkMonth = holidays.map((holiday) => parseInt(holiday.date.slice(0, 2).replace('-', '')));

  const checkDay = holidays.map((holiday) => parseInt(holiday.date.slice(2, -5).replace('-', '')));

  console.log(checkDay)
  console.log(checkMonth)
  

//  return(
//    checkMonth.map((el)=>{'test'})
//  )

  return (
    <div>
      <Calendar tileContent={({ activeStartDate, date, view }) => view === 'month' && date.getMonth() === parseInt(checkMonth[0] - 1) && date.getDate() === parseInt(checkDay[0]) ? <p> hoi</p> : null} />



    </div>
  );
}