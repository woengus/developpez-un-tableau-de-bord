import React from "react";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./pages/User";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Sidebar />
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/dashboard/:id" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
