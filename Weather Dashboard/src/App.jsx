// App.jsx

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      setLoading(true);
      setError("");

      // Free Open-Meteo API
      // Bangalore Coordinates
      const latitude = 12.9716;
      const longitude = 77.5946;

      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }

      const data = await response.json();
      setWeather(data.current_weather);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f4f4",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          textAlign: "center",
          width: "320px",
        }}
      >
        <h1>Weather Dashboard</h1>

        {/* Loading */}
        {loading && <p>Loading weather data...</p>}

        {/* Error */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* Weather Data */}
        {weather && !loading && (
          <div>
            <h2>Bangalore</h2>
            <h3>{weather.temperature}°C</h3>
            <p>Wind Speed: {weather.windspeed} km/h</p>
            <p>Wind Direction: {weather.winddirection}°</p>
            <p>Weather Code: {weather.weathercode}</p>
          </div>
        )}

        <button
          onClick={fetchWeather}
          style={{
            marginTop: "20px",
            padding: "10px 15px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Refresh
        </button>
      </div>
    </div>
  );
}

export default App;