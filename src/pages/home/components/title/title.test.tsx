import React from "react";
import { render, screen } from "@testing-library/react";
import Title from "./title";

test("renders title component", () => {
  render(<Title />);
  const linkElement = screen.getByText(/Suleiman's Weather App/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders sub title component", () => {
  render(<Title />);
  const linkElement = screen.getByText(
    /Check today's weather in your location/i
  );
  expect(linkElement).toBeInTheDocument();
});
