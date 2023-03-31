import React, { useState } from "react";
import logo from "../assets/logo.png";
import { fetchSession, fetchData, fetchPerformance } from "../services/callApi";

const Navigation = () => {
  /*const [sessions, setSessions] = useState([]);
  const fetchSession = async () => {
    const result = await fetchSession();
    setSessions(result);
  };
  const [data, setData] = useState(null);
  const fetchData = async () => {
    const result = await fetchData();
    setData(result);
  };
  const [performance, setPerformance] = useState([]);
  const [kind, setKind] = useState([]);
  const fetchPerformance = async () => {
    const result = await fetchPerformance();
    setPerformance(result);
    setKind(result);
    //kind et setKind
  };
 
  fetchSession();
  fetchData();
  fetchPerformance();

  console.log(sessions); //à terminer à la prochaine session */

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
