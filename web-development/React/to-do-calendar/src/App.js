import React from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Holidays from './Components/Calendar/Holidays'

function App() {

  const tileContent = ({ activeStartDate, date, view }) => {
    return Holidays.map((el) => {
      const datum = new Date (el.date);
      const naam  = el.name.charAt(0);
      return view === "month" && 
      date.getDate() === datum.getDate() && 
      date.getMonth() ===datum.getMonth() ? ( 
        
      <p className="react-calendar__tile--holiday" style={{background: 'lightgreen', padding: '0.75em 0.5em'}}>{naam}</p>
      ) : null
    });
  };






  
  return (
    <div>
      <Calendar tileContent={tileContent} />
    </div>
  );
}

export default App;