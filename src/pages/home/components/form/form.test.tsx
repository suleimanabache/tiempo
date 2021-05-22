import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import Form from "./form";

test("form submits city", async () => {
  render(<Form />);

  const input = screen.getByPlaceholderText(
    "Enter the name of your city here..."
  );

  fireEvent.change(input, { target: { value: "Crawley" } });

  fireEvent.click(screen.getByText("Get Weather"));
});
