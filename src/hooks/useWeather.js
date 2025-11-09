import { useState, useEffect } from "react";

export const useWeather = (apiKey) => {
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadWeather = async () => {
      try {
        // Step 1: Get user location via browser
        navigator.geolocation.getCurrentPosition(
          async (pos) => {
            const { latitude, longitude } = pos.coords;

            // Step 2: Fetch current weather
            const currentRes = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
            );
            if (!currentRes.ok) throw new Error("Failed to fetch current weather");
            const currentData = await currentRes.json();

            // Step 3: Fetch 5-day forecast
            const forecastRes = await fetch(
              `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
            );
            if (!forecastRes.ok) throw new Error("Failed to fetch forecast");
            const forecastData = await forecastRes.json();

            // Step 4: Update state
            setCurrent(currentData);
            setForecast(forecastData);
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

  return { current, forecast, loading, error };
};
