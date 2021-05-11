import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders weather app without crashing", () => {
  render(<App />);
});
