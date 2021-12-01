import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";

function App() {
  // <Route path="about" element={<About />} />
  return (
    <div className="App">
      <Routes>
        <Route path="/" />
      </Routes>
    </div>
  );
}

export default App;
