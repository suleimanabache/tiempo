import React, { useState, useRef, useEffect } from "react";
import "./form.styles.css";

const Form = () => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inputRef = useRef(document.createElement("input"));

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeCountryText = (event: any) => {
    setCountry(event.target.value);
  };

  const changeCityText = (event: any) => {
    setCity(event.target.value);
  };

  const loadWeather = () => {
    console.log("submit weather report");
    setIsSubmitting(!isSubmitting);
  };

  return (
    <form onSubmit={loadWeather}>
      <input
        ref={inputRef}
        type='text'
        name='city'
        placeholder='Enter the name of your city here'
        onChange={changeCityText}
        value={city}
      />

      <input
        type='text'
        name='country'
        placeholder='Enter the name of your country here'
        onChange={changeCountryText}
        value={country}
      />

      <button>Get Weather</button>
    </form>
  );
};
export default Form;
