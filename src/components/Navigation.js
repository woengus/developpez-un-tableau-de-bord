import React from "react";
import logo from "../assets/logo.png";

const Navigation = () => {
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="Logo de l'application" className="logo" />
        <h2>SportSee</h2>
      </div>

      <ul className="navigation">
        <li>Accueil</li>
        <li>Profil</li>
        <li>Réglages</li>
        <li>Communauté</li>
      </ul>
    </div>
  );
};

export default Navigation;
