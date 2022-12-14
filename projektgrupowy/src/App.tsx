import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { authContext } from "./helpers/authContext";
import CurrencyConverter from "./components/CurrencyPage/CurrencyPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  return (
    <div className="App">
      <BrowserRouter>
        <authContext.Provider value={loggedIn}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/currency" element={<CurrencyConverter />} />
          </Routes>
        </authContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
