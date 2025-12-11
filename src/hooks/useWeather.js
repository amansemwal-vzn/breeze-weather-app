import { useState, useEffect } from "react";

export const useWeather = (apiKey) => {
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [hourly, setHourly] = useState(null);
  const [daily, setDaily] = useState(null);
  const [coords, setCoords] = useState(null);
  const [fetchedAt, setFetchedAt] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadWeather = async () => {
      try {
        navigator.geolocation.getCurrentPosition(
          async (pos) => {
            const { latitude, longitude } = pos.coords;
            setCoords({ latitude, longitude });

            // Fetch current weather
            const currentRes = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
            );
            if (!currentRes.ok) throw new Error("Failed to fetch current weather");
            const currentData = await currentRes.json();

            console.log("DODODO currentData: ", currentData);

            // Fetch 5-day forecast (3-hour intervals)
            const forecastRes = await fetch(
              `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
            );
            if (!forecastRes.ok) throw new Error("Failed to fetch forecast");
            const forecastData = await forecastRes.json();

            console.log("DODODO forecastData: ", forecastData);

            // Extract next 12 hours (4 entries x 3-hour intervals)
            const next12Hours = forecastData.list.slice(0, 4);

            // Group forecast by day
            const groupedByDay = forecastData.list.reduce((acc, item) => {
              const day = item.dt_txt.split(" ")[0];
              if (!acc[day]) acc[day] = [];
              acc[day].push(item);
              return acc;
            }, {});

            // State updates
            setCurrent({
              temp: currentData.main.temp,
              feels_like: currentData.main.feels_like,
              humidity: currentData.main.humidity,
              pressure: currentData.main.pressure,
              visibility: currentData.visibility,
              wind_speed: currentData.wind.speed,
              wind_deg: currentData.wind.deg,
              sunrise: currentData.sys.sunrise,
              sunset: currentData.sys.sunset,
              condition: currentData.weather[0].main,
              description: currentData.weather[0].description,
              icon: currentData.weather[0].icon,
              city: currentData.name,
              country: currentData.sys.country,
            });

            setForecast(forecastData);
            setHourly(next12Hours);
            setDaily(groupedByDay);
            setFetchedAt(new Date().toISOString());

            setLoading(false);
          },
          (geoError) => {
            console.error("Geolocation error:", geoError);
            setError("Location permission denied or unavailable");
            setLoading(false);
          }
        );
      } catch (err) {
        console.error("Weather error:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    loadWeather();
  }, [apiKey]);

  return {
    current,       // cleaned current weather
    forecast,      // raw forecast
    hourly,        // next 12 hours
    daily,         // grouped by day
    coords,        // user location
    fetchedAt,     // timestamp
    loading,
    error,
  };
};
