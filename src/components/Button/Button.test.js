import Button from "./Button";
import ReactDOM from "react-dom";
import React from "react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button />, div);
});