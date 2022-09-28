import React from "react";
import Home from "./components/Home";
import "./App.css";

import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthenProvider } from "./context/Auth.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Detail from "./components/Detail";
const App = () => {
  return (
    <div>
    
        <BrowserRouter>
        <AuthenProvider>
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
          </AuthenProvider>
        </BrowserRouter>
    
    </div>
  );
};
export default App;
