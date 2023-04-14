import React from "react";
import { Pie, PieChart, Cell, ResponsiveContainer } from "recharts";
import PropType from "prop-types";

const COLORS = ["#E60000", "transparent"];
const Score = ({ score }) => {
  const data = [
    { name: "Score", value: score * 100 },
    { name: "Max-score", value: (1 - score) * 100 },
  ];
  return (
    <div className="kpi">
      <ResponsiveContainer>
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx={150}
            cy={90}
            innerRadius={70}
            outerRadius={80}
            fill="transparent"
            paddingAngle={5}
            dataKey="value"
            stroke="transparent"
            radius={[0, 5, 5, 0]}
            startAngle={90}
            cornerRadius={5} //arrondis
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
Score.propType = {
  score: PropType.number,
};
export default Score;
