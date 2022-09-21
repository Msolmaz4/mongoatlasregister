import React from "react";
import Home from "./components/Home";
import "./App.css";
import { AuthenProvider } from "./context/Auth.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
const App = () => {
  return (
    <div>
      <AuthenProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </AuthenProvider>
    </div>
  );
};
export default App;
