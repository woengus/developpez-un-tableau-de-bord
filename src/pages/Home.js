import React, { useState, useEffect } from "react";
import axios from "axios";
import Calories from "../assets/calories-icon.png";
import Proteines from "../assets/prot-icon.png";
import Glucides from "../assets/glucides-icon.png";
import Lipides from "../assets/lipides-icon.png";
import Score from "../components/Score";
import Counter from "../components/Counter";
import LineChart from "../components/LineChart";
import SimpleRadartChart from "../components/SimpleRadartChart";
import { BarChart } from "recharts";
import SimpleBarChart from "../components/SimpleBarChart";

const Home = () => {
  const [data, setData] = useState(null);
  const [sessions, setSessions] = useState([]);
  const [performance, setPerformance] = useState([]);
  const [kind, setKind] = useState([]);
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:3000/user/12");

      setData(result.data.data);
    };
    const fetchSession = async () => {
      const result = await axios(
        `http://localhost:3000/user/12/average-sessions`
      );

      setSessions(result.data.data.sessions);
    };
    const fetchActivity = async () => {
      const result = await axios(`http://localhost:3000/user/12/activity`);
      setActivity(result.data.data.sessions);
      console.log(result.data.data.sessions);
    };
    const fetchPerformance = async () => {
      const result = await axios(`http://localhost:3000/user/12/performance`);

      setPerformance(result.data.data.data);
      setKind(result.data.data.kind);
    };
    fetchData();
    fetchSession();
    fetchPerformance();
    fetchActivity();
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
            <div>
              <ul className="poids">
                <SimpleBarChart activity={activity} />
                <li className="poids-activité">Activité quotidienne</li>
                <li className="poids-poids">
                  <span>Poids (kg)</span>
                </li>
                <li className="poids-calories">
                  <span>Calories brûlées (kCal)</span>
                </li>
              </ul>
            </div>
            <div className="obj-rad-pki-flex">
              <div className="objectif">
                <h3>Durée moyenne des sessions</h3>
                <LineChart sessions={sessions} />
              </div>
              <div className="radar">
                <SimpleRadartChart performance={performance} kind={kind} />
              </div>
              <Score className="score" score={data.todayScore} />
              <div className="score-info">
                <h3 className="score-title">Score</h3>
                <p className="score-objectif">{data.todayScore * 100 + "%"}</p>
                <span>de votre objectif</span>
              </div>
            </div>
          </div>
          <div className="calories-proteines-glucides-lipides">
            <Counter
              src={Calories}
              alt="image de calories"
              name="Calories"
              weight={data.keyData.calorieCount + "kCal"}
            />
            <Counter
              src={Proteines}
              alt="image de protéines"
              name="Protéines"
              weight={data.keyData.proteinCount + "g"}
            />
            <Counter
              src={Glucides}
              alt="image de glucides"
              name="Glucides"
              weight={data.keyData.carbohydrateCount + "g"}
            />
            <Counter
              src={Lipides}
              alt="image de lipides"
              name="Lipides"
              weight={data.keyData.lipidCount + "g"}
            />
          </div>
        </div>
      </main>
    </div>
  ) : (
    <p>Loading</p>
  );
};

export default Home;
