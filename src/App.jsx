import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import "./App.css";
import Details from "./pages/Details";

import Home from "./pages/Home";
import Countries from "./store/country-context";

function App() {
  const ctr = useContext(Countries);
  return (
    <Router>
      <main
        className={`${ctr.theme ? "bg-veryDarkBlue" : "bg-white"} min-h-screen`}
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
