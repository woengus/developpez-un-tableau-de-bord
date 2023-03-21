import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "L",
    uv: 4000,

    amt: 2400,
  },
  {
    name: "M",
    uv: 3000,

    amt: 2210,
  },
  {
    name: "M",
    uv: 2000,

    amt: 2290,
  },
  {
    name: "J",
    uv: 2780,

    amt: 2000,
  },
  {
    name: "V",
    uv: 1890,

    amt: 2181,
  },
  {
    name: "S",
    uv: 2390,

    amt: 2500,
  },
  {
    name: "D",
    uv: 3490,

    amt: 2100,
  },
];

export default function App(props) {
  const sessions = props.sessions.map((session) => {
    return {
      name: session.day,
      sessionAverage: session.sessionLength,
    };
  });
  console.log(props.sessions);
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
      <XAxis dataKey="name" />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#ffffff" />
    </LineChart>
  );
}
