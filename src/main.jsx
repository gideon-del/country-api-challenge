import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import CountryProvider from "./store/CountryProvider";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CountryProvider>
      <App />
    </CountryProvider>
  </React.StrictMode>
);
