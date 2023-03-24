import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const legend = {
  1: "Cardio",
  2: "Energie",
  3: "Endurance",
  4: "Force",
  5: "Vitesse",
  6: "Intensité",
};

const SimpleRadarChart = ({ performance, kind }) => {
  console.log(kind);
  console.log(performance);
  const data = performance.map((perf) => {
    return {
      kind: legend[perf.kind],
      value: perf.value,
    };
  });
  console.log(data);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" stroke="#FFFFFF" />

        <Radar
          name="Mike"
          dataKey="value"
          stroke="#FFFFFF"
          fill="red"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};
export default SimpleRadarChart;
