import React, { useState } from "react";
import logo from "../assets/logo.png";
import { fetchSession } from "../services/callApi";

const Navigation = () => {
  /*const [sessions, setSessions] = useState([]);
  const fetchData = async () => {
    const result = await fetchSession();
    setSessions(result);
  };
  fetchData();
  console.log(sessions);*/ // à terminer à la prochaine session
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
