import React, { useState, useEffect } from "react";
import axios from "axios";
import Calories from "../assets/calories-icon.png";
const ApiComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:3000/user/12");

      setData(result.data);
      console.log(data.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <header>
        <h1 className="salutation-name">
          <span className="salutation">Bonjour</span>
        </h1>
        <span className="name">{data.data.userInfos.firstName}</span>
        <h3 className="congratulations">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </h3>
      </header>
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
            <div className="calories">
              <img
                src={Calories}
                alt="icone des calories"
                className="icon-calories"
              />{" "}
              {data.data.keyData.calorieCount + "kCal"}
              <span className="calories-name">Calories</span>
            </div>
            <div className="proteines">
              proteines {data.data.keyData.proteinCount + "g"}
            </div>
            <div className="glucides">
              glucides {data.data.keyData.carbohydrateCount + "g"}
            </div>
            <div className="lipides">
              lipides {data.data.keyData.lipidCount + "g"}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ApiComponent;
