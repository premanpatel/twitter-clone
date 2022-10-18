import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeScreen from "./pages/HomeScreen.js";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/index";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/LogIn" element={<LogIn />} />
          <Route exact path="/SignUp" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
