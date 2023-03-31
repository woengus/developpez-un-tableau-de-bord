import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const SimpleBarChart = ({ activity }) => {
  const customTooltip = ({ payload }) => {
    if (payload.length) {
      return (
        <div className="tooltip-activity">
          <div>{payload[0].value + "kg"}</div>
          <div>{payload[1].value + "Kcal"}</div>
        </div>
      );
    }
  };
  const formatXaxis = (value) => {
    const lastNum = value[value.length - 1];

    return lastNum;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={activity}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" tickFormatter={formatXaxis} />
        <YAxis />
        <Tooltip content={customTooltip} />
        <Legend
          align="right"
          verticalAlign="top"
          iconType="circle"
          height={50}
        />
        <Bar
          dataKey="kilogram"
          fill="#282D30"
          barSize={7}
          radius={[5, 5, 0, 0]}
        />
        <Bar
          dataKey="calories"
          fill="#E60000"
          barSize={7}
          radius={[5, 5, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default SimpleBarChart;
