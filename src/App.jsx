import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./CSS/App.css";
import CardComponent from "./Component/CardComponent";
// import Header from "./Header/Header";
import Header from "./Header/Header";
import LoginForm from "./Login/Login";
import RegistrationPage from "./Login/RegistartionPage";
import PrivateRoute from "./PrivateRoute"; // Import the PrivateRoute component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn && <Header />}
        <Route path="/" element={<LoginForm onLogin={handleLogin} />} />
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
        <Route path="/registrationpage" element={<RegistrationPage />} />
        <Route
          path="/card"
          element={
            <PrivateRoute>
              <CardComponent />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
