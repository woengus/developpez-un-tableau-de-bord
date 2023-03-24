import React from "react";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip } from "recharts";

//transform value in days of the week
export default function App(props) {
  const days = {
    1: "L",
    2: "M",
    3: "M",
    4: "J",
    5: "V",
    6: "S",
    7: "D",
  };
  const sessions = props.sessions.map((session) => {
    return {
      name: days[session.day],
      average: session.sessionLength,
    };
  });

  //tooltip
  const mapSession = ({ payload }) => {
    if (payload.length) {
      return <div className="tooltip">{payload[0].value} min</div>;
    }
  };
  return (
    <LineChart
      width={300}
      height={200}
      data={sessions}
      margin={{
        top: 5,
        right: 30,
        left: -10,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="0 3" />
      <XAxis dataKey="name" stroke="#ffffff" />
      <Tooltip content={mapSession} />
      <Line
        type="monotone"
        dataKey="average"
        stroke="#ffffff"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
}
