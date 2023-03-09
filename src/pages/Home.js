import React, { useState, useEffect } from "react";
import axios from "axios";
import Calories from "../assets/calories-icon.png";
import Proteines from "../assets/prot-icon.png";
import Glucides from "../assets/glucides-icon.png";
import Lipides from "../assets/lipides-icon.png";
import Score from "../components/Score";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:3000/user/12");

      setData(result.data.data);
      console.log(result.data.data);
    };

    fetchData();
  }, []);

  return data ? (
    <div>
      <header>
        <h1 className="salutation-name">
          <span className="salutation">Bonjour</span>
        </h1>
        <span className="name">{data.userInfos.firstName}</span>
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
              <Score className="score" score={data.todayScore} />
            </div>
          </div>
          <div className="calories-proteines-glucides-lipides">
            <div className="calories">
              <img
                src={Calories}
                alt="icone des calories"
                className="icon-calories"
              />
              <div className="name-weight-flex">
                <span className="weight">
                  {data.keyData.calorieCount + "kCal"}
                </span>
                <span className="calories-name">Calories</span>
              </div>
            </div>
            <div className="proteines">
              <img
                src={Proteines}
                alt="icone des proteines"
                className="icon-proteines"
              />
              <div className="name-weight-flex">
                <span className="weight">
                  {data.keyData.proteinCount + "g"}
                </span>
                <span className="proteines-name">protéines</span>
              </div>
            </div>
            <div className="glucides">
              <img
                src={Glucides}
                alt="icone des glucides"
                className="icon-glucides"
              />
              <div className="name-weight-flex">
                <span className="weight">
                  {data.keyData.carbohydrateCount + "g"}
                </span>
                <span className="glucides-name">Glucides</span>
              </div>
            </div>
            <div className="lipides">
              <img
                src={Lipides}
                alt="icone des lipides"
                className="icon-lipides"
              />
              <div className="name-weight-flex">
                <span className="weight">{data.keyData.lipidCount + "g"}</span>
                <span className="lipides-name">Lipides</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  ) : (
    <p>Loading</p>
  );
};

export default Home;
