import React from "react";
import ReactDOM from "react-dom";
import CarsState from "./context/Cars/CarsState";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <CarsState>
      <App />
    </CarsState>
  </React.StrictMode>,
  document.getElementById("root")
);
