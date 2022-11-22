import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from './components/Navbar/Navbar';
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CurrencyConverter from "./components/CurrencyPage/CurrencyPage";

function App() {
  return (
    <div className="App">
     <HomePage />
    </div>
  );
}

export default App;
