import React from "react";
import Yoga from "../assets/icon_yoga.png";
import Swim from "../assets/icon_swim.png";
import Bike from "../assets/icon_bike.png";
import Weight from "../assets/icon_weigth.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="icon-group">
        <div className="icon-yoga">
          <img src={Yoga} alt="icone de yoga" className="icon-yoga" />
        </div>
        <div className="icon-swim">
          <img src={Swim} alt="icone de nageur" className="icon-swim" />
        </div>
        <div className="icon-bike">
          <img src={Bike} alt="icone de vélo" className="icon-bike" />
        </div>
        <div className="icon-weight">
          <img src={Weight} alt="icone d'haltère" className="icon-weight" />
        </div>
      </div>

      <h3>Copyright, SportSee 2020</h3>
    </div>
  );
};

export default Sidebar;
