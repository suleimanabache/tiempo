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
  const [isErrorFound, setIsErrorFound] = useState(false);
  const [isButtonEnabled, setDisabledButton] = useState(true);
  const [weatherReport, setWeatherReport] = useState<WeatherData>(
    defaultWeatherReport
  );

  const inputRef = useRef(document.createElement("input"));

  useEffect(() => {
    inputRef.current.focus();
  }, [weatherReport.name]);

  const changeCityText = (event: any) => {
    setCity(event.target.value);
    if (event.target.value !== "") {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  };

  const loadWeatherData = async (e: any) => {
    try {
      e.preventDefault();
      const weather = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Api_Key}`
      );
      const response = await weather.json();
      if (response.cod === "404") {
        setIsErrorFound(true);
        if (response.message === "city not found") {
          setErrorMsg("Sorry, the city you entered could not be found...");
        } else {
          setErrorMsg("Sorry, an error occured. Please try again...");
        }

        console.log(response.message);
      } else {
        console.log(response);
        setWeatherReport(response);
        setIsErrorFound(false);
      }
    } catch (error) {
      throw new Error(`error getting weather report! status: ${error}`);
    }
  };

  return (
    <>
      <form onSubmit={loadWeatherData}>
        <input
          ref={inputRef}
          type='text'
          name='city'
          placeholder='Enter your location here...'
          onChange={changeCityText}
          value={city}
        />
        <button disabled={isButtonEnabled}>Get Weather</button>
      </form>
      {weatherReport.name !== "" && (
        <div>
          {!isErrorFound ? (
            <p>
              {`${weatherReport.name}, 
              ${weatherReport.sys.country}:
              ${Math.round(weatherReport.main.temp)}
              \xB0 Celsius`}
            </p>
          ) : (
            <p> {errorMsg}</p>
          )}
        </div>
      )}
    </>
  );
};
export default Form;
