import React from 'react';
import LineGraph from './LineGraph';

const hourlyForecast = {
  hours: ["1 PM", "2 PM", "3 PM", "4 PM", "5 PM"],
  temps: [24, 25, 26, 25, 23],
};

const ForecastCard = () => {
  return (
    <div className="rounded-lg bg-[#24282A] backdrop-blur-xl shadow-md p-10 text-white flex flex-col justify-center items-center gap-10 transition-all duration-450 hover:scale-101 hover:bg-[#24282A]/80 hover:shadow-dark">
        <h1 className='font-body text-6xl font-normal text-neutral-200'>Temperature Forecast</h1>

        <LineGraph 
          labels={hourlyForecast.hours}
          values={hourlyForecast.temps}
          label="Temp (°C)"
          lineColor="#00C2FF"
          pointColor="#00C2FF"
          textColor="#FFFFFF"
          gridColor="rgba(255,255,255,0.1)"
          bgColor="#1E1E1E"
        />

        <LineGraph 
          labels={hourlyForecast.hours}
          values={hourlyForecast.temps}
          label="Temp (°C)"
          lineColor="#2563EB"
          pointColor="#2563EB"
          textColor="#111"
          gridColor="rgba(0,0,0,0.1)"
          bgColor="#FFFFFF"
        />
    </div>
  )
}

export default ForecastCard;