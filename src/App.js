import React from "react";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Navigation />
      <Sidebar />
      <Home />
    </div>
  );
};

export default App;
