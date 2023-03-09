import React from "react";
import { Pie, PieChart, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#E60000", "transparent"];
const Score = ({ score }) => {
  const data = [
    { name: "Score", value: score * 100 },
    { name: "Max-score", value: (1 - score) * 100 },
  ];
  return (
    <div className="kpi">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#E60000"
          paddingAngle={5}
          dataKey="value"
          //startAngle={80}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default Score;
