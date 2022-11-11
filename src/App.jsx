import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import "./App.css";
import Details from "./pages/Details";

import Home from "./pages/Home";
import Countries from "./store/country-context";

function App() {
  const filters = useSelector((state) => state.filters);
  return (
    <Router>
      <main
        className={`${
          filters.dark ? "bg-veryDarkBlue" : "bg-white"
        } min-h-screen`}
      >
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/details/:country" element={<Details />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
