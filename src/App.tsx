import React from "react";
import Title from "./pages/home/components/title";
import Form from "./pages/home/components/form";

import "./App.css";

const App = () => {
  return (
    <div className='App'>
      <div className='wrapper'>
        <div className='main'>
          <div className='container'>
            <div className='row'>
              <Title />
              <div>
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
