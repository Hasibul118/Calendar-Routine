import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calendars = () => {
  const [value, onChange] = useState(new Date());
  
  const handleClick = (value) => {
    console.log(value)
  }
  return (
    <div className="grid place-items-center h-screen">
      <Calendar onChange={onChange} onClickDay={handleClick(value)} value={value} />
    </div>
  );
};

export default Calendars;
