import {React, useState } from 'react';
import LineGraph from './LineGraph';

const ForecastCard = ({ hourly, daily }) => {
  
  const [hourlyForecast, setHourlyForecast] = useState(true);

  return (
    <div className="rounded-lg bg-[#24282A] backdrop-blur-xl shadow-md p-10 text-white flex flex-col justify-center items-center gap-10 transition-all duration-450 hover:scale-101 hover:bg-[#24282A]/80 hover:shadow-dark">
        <h1 className='font-body text-6xl font-normal text-neutral-200'>Temperature Forecast</h1>

        <LineGraph 
          forecastData={(hourlyForecast === true ) ? hourly.temps : daily.temps}
          forecastLabel={(hourlyForecast === true) ? hourly.labels : daily.labels}
        />

        <button onClick={() => setHourlyForecast(!hourlyForecast)}>Toggle</button>
    </div>
  )
}

export default ForecastCard;