import React from "react";
import logo from "../assets/logo.png";

const Navigation = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="Logo de l'application" className="logo" />
      </div>

      <ul className="nav-item-list">
        <li>Accueil</li>
        <li>Profil</li>
        <li>Réglages</li>
        <li>Communauté</li>
      </ul>
    </div>
  );
};

export default Navigation;
