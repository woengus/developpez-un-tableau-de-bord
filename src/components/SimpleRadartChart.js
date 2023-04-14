import React from "react";
import PropType from "prop-types";
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

const SimpleRadarChart = ({ performance }) => {
  const data = performance.map((perf) => {
    return {
      kind: legend[perf.kind],
      value: perf.value,
    };
  });

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
SimpleRadarChart.propsType = {
  performance: PropType.array,
};
export default SimpleRadarChart;
