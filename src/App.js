import "./App.css";
import React from "react";
import Dog from "./components/Dog/Dog";
import Home from "./components/DogsHome/Home";
import Form from "./components/Form/Form";
import Bienvenido from "./components/Bienvenida/Bienvenido";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Bienvenido />} />
        <Route path="/dogs-website" element={<Home />} />
        <Route path="/dogs-website/:id" element={<Dog />} />
        <Route path="/dogs-website/add" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
