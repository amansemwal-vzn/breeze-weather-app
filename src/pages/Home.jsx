import React from 'react'
import WeatherCard from '../components/WeatherCard'
import { useWeather } from '../hooks/useWeather'
import TempCard from '../components/TempCard'
import ForecastCard from '../components/ForecastCard'

const Home = () => {
  const { current, forecast, hourly, daily, coords, fetchedAt, loading, error } = useWeather(import.meta.env.VITE_OPEN_WEATHER_API_KEY);
  console.log("current: ", current);
  console.log("forecast: ", forecast);
  console.log("daily: ", daily);
  console.log("hourly: ", hourly);
  console.log("fetchedAt: ", fetchedAt);

  const now = Date.now(); // current time in milliseconds
  const sunrise = current?.sunrise * 1000; // convert seconds → ms
  const sunset = current?.sunset * 1000;   // convert seconds → ms
  
  let time = now >= sunrise && now <= sunset ? "day" : "night";

  if (loading || !current) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div className='pt-22 relative w-full h-full flex flex-col lg:flex-row gap-5'>
      <WeatherCard weather={current.condition} description={current.description} fetchDate={fetchedAt} city={current.city} time={time} />
      <TempCard temperature={Math.round(current.temp)} />
      <ForecastCard />
    </div>
  )
}

export default Home