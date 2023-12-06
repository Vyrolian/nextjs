"use client";
import React, { useState } from "react";

const Project2: React.FC = () => {
  const [city, setCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState<any>(null);

  const getWeather = () => {
    if (city.trim() === "") {
      alert("Please enter the city name.");
      return;
    }

    const apiKey = "bd5e378503939ddaee76f12ad7a97608";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setWeatherInfo(data))
      .catch((error) => {
        console.error("An error occurred while receiving data:", error);
        alert("An error occurred while retrieving data. Try later.");
      });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* Navbar Content */}
      </nav>

      <h2 className="auto-style1">
        <strong>Weather in the city</strong>
      </h2>
      <center>
        <label htmlFor="cityInput">Enter city: </label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>Get weather</button>

        {weatherInfo && (
          <div id="weatherInfo">
            <p>City: {weatherInfo.name}</p>
            <p>t: {Math.round(weatherInfo.main.temp - 273.15)}°C</p>
            <p>Notes: {weatherInfo.weather[0].description}</p>
          </div>
        )}
      </center>

      <br />
      <br />
    </div>
  );
};

export default Project2;
