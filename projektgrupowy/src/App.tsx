import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
     <HomePage />
     <Navbar />
    </div>
  );
}

export default App;
