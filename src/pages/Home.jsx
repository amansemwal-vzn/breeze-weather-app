import {React, useEffect, useState} from 'react'
import WeatherCard from '../components/WeatherCard'
import { useWeather } from '../hooks/useWeather'
import TempCard from '../components/TempCard'
import ForecastCard from '../components/ForecastCard'

const Home = () => {
  const { current, forecast, hourly, daily, fetchedAt, loading, error } = useWeather(import.meta.env.VITE_OPEN_WEATHER_API_KEY);
  console.log("current: ", current);
  console.log("forecast: ", forecast);

  const [timeOfDay, setTimeOfDay] = useState("day"); 

  useEffect(() => {
    if (!current?.sunrise || !current?.sunset) return;

    const now = Date.now();
    const sunrise = current.sunrise * 1000;
    const sunset = current.sunset * 1000;

    const time = now >= sunrise && now <= sunset ? "day" : "night";

    setTimeOfDay(time);
  }, [current]);


  if (loading || !current) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div className='pt-22 relative w-full h-full flex flex-col lg:flex-row gap-5'>
      <WeatherCard weather={current.condition} description={current.description} fetchDate={fetchedAt} city={current.city} time={timeOfDay} />
      <TempCard temperature={Math.round(current.temp)} />
      <ForecastCard hourly={hourly} daily={daily} />
    </div>
  )
}

export default Home