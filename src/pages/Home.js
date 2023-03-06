import React from "react";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import ApiComponent from "../services/ApiComponent";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Sidebar />

      <ApiComponent />

      <main className="main-content">
        <div className="content-flex">
          <div className="poids-ojectif-radar-kpi">
            <div className="poids">activité quotidienne</div>
            <div className="obj-rad-pki-flex">
              <div className="objectif">objectif</div>
              <div className="radar">radar</div>
              <div className="kpi">kpi</div>
            </div>
          </div>
          <div className="calories-proteines-glucides-lipides">
            <div className="calories">calories</div>
            <div className="proteines">proteines</div>
            <div className="glucides">glucides</div>
            <div className="lipides">lipides</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
