import React from "react";
import LandingPage from "./pages/landing.page";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
// import { Route, Routes } from "react-router-dom";

function App() {
  // <Route path="about" element={<About />} />
  return (
    <div className="app">
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
