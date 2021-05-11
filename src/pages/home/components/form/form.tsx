import React, { useState, useRef, useEffect } from "react";
import "./form.styles.css";

const Api_Key = "485c4a0747189164e23a829b7f4924c8";

interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  sys: {
    country: string;
  };
}

const defaultWeatherReport: WeatherData = {
  name: "",
  main: {
    temp: 0,
  },
  sys: {
    country: "",
  },
};

const Form = () => {
  const [city, setCity] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [weatherReport, setWeatherReport] = useState<WeatherData>(
    defaultWeatherReport
  );

  const inputRef = useRef(document.createElement("input"));

  useEffect(() => {
    inputRef.current.focus();
  }, [weatherReport]);

  const changeCityText = (event: any) => {
    setCity(event.target.value);
  };

  const loadWeatherData = async (e: any) => {
    if (city === "") {
      return;
    }
    try {
      e.preventDefault();
      const weather = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Api_Key}`
      );
      const response = await weather.json();
      setWeatherReport(response);
    } catch (error) {
      setErrorMsg(error);
      throw new Error(`error getting weather report! status: ${error}`);
    }
  };

  // temperature: Math.round(response.main.temp) + "\xB0 Celsius",
  // city: response.name,
  // country: response.sys.country,
  // humidity: response.main.humidity,
  // description: response.weather[0].description,

  return (
    <>
      <form onSubmit={loadWeatherData}>
        <input
          ref={inputRef}
          type='text'
          name='city'
          placeholder='Enter the name of your city here'
          onChange={changeCityText}
          value={city}
        />
        <button>Get Weather</button>
      </form>
      {weatherReport.name !== "" && (
        <div>
          <p>
            {`${weatherReport.name}, 
              ${weatherReport.sys.country}:
              ${Math.round(weatherReport.main.temp)}
              \xB0 Celsius`}
          </p>
        </div>
      )}
    </>
  );
};
export default Form;
