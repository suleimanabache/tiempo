import React from "react";
import "./title.styles.css";

const Title = () => {
  return (
    <div>
      <h1 className='title-container__title'>Tiempo</h1>
      <p className='title-container__subtitle'>
        {" "}
        Check today's weather in your location{" "}
      </p>
    </div>
  );
};
export default Title;
