import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";

const Details = React.lazy(() => import("./pages/Details"));
function App() {
  const filters = useSelector((state) => state.filters);
  return (
    <Suspense
      fallback={
        <div
          className={`w-screen h-screen flex justify-center items-center ${
            filters.dark ? "bg-veryDarkBlue" : "bg-white"
          } `}
        >
          <span className="loader"></span>
        </div>
      }
    >
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
    </Suspense>
  );
}

export default App;
