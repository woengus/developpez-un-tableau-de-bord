import React, { useState, useEffect } from "react";
import Calories from "../assets/calories-icon.png";
import Proteines from "../assets/prot-icon.png";
import Glucides from "../assets/glucides-icon.png";
import Lipides from "../assets/lipides-icon.png";
import Score from "../components/Score";
import Counter from "../components/Counter";
import LineChart from "../components/LineChart";
import SimpleRadartChart from "../components/SimpleRadartChart";
import SimpleBarChart from "../components/SimpleBarChart";
import {
  getSession,
  getActivity,
  getPerformance,
  getData,
} from "../services/callApi";
import { useParams } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState(null);
  const [sessions, setSessions] = useState([]);
  const [performance, setPerformance] = useState([]);
  const [activity, setActivity] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData(id);

      setData(result);
    };
    const fetchSession = async () => {
      const result = await getSession(id);
      console.log(result);
      setSessions(result);
    };
    const fetchActivity = async () => {
      const result = await getActivity(id);

      setActivity(result);
    };
    const fetchPerformance = async () => {
      const result = await getPerformance(id);

      setPerformance(result.data);
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
              <h2 className="poids-activité">Activité quotidienne</h2>
              <div className="poids">
                <SimpleBarChart activity={activity} />
              </div>
            </div>
            <div className="obj-rad-pki-flex">
              <div className="objectif">
                <h3>Durée moyenne des sessions</h3>
                <LineChart sessions={sessions} />
              </div>
              <div className="radar">
                <SimpleRadartChart performance={performance} />
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
