import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CurrencyConverter from "./components/CurrencyPage/CurrencyPage";

function App() {
  return (
    <div className="App">
      <HomePage />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          {/* <Route path="/register" element={<RegisterPage />} /> */}
          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route path="/converter" element={<CurrencyConverter />} />
        </Routes>
        {/* ---- */}
        {/* tu poniżej znow kompo, ktore maja sie wyswietlac caly czas - np. footer  */}
      </BrowserRouter>
    </div>
  );
}

export default App;
