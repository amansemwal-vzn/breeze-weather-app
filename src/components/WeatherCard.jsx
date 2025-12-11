import React from 'react'
import WeatherImages from "../assets/Weather.json";

const WeatherCard = ({ weather=null, description=null, fetchDate=null, city=null, time="day" }) => {
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    
    const weekday = date.toLocaleString("en-US", { weekday: "long" });
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    
    return `${weekday}, ${day} ${month}`;
  };
  time = "day"

  const imageFile = WeatherImages[time][weather]?.[description]; 

  return (
    <div className="rounded-lg bg-[#24282A] backdrop-blur-xl shadow-md p-10 text-white flex flex-col justify-center items-center gap-10 transition-all duration-450 hover:scale-101 hover:bg-[#24282A]/80 hover:shadow-dark">
        <img src={`/assets/WeatherIcons/${imageFile}`} />
        <div className='flex flex-col gap-3 justify-between items-center'>
          <h1 className='font-body text-6xl font-normal text-neutral-200'>{city}</h1>
          <h5>{formatDate(fetchDate)}</h5>
        </div>
    </div>
  )
}

export default WeatherCard