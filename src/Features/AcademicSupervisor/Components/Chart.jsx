import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart() {
  return (

    <div style={{ width: "400px", height: "200px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={[
            { name: "W1", uv: 80 },
            { name: "W2", uv: 56},
            { name: "W3", uv: 50},
            { name: "W4", uv: 40 },
            { name: "W5", uv: 60 },
            { name: "W6", uv: 70 },
            { name: "W7", uv: 90 },
            { name: "W8", uv: 100 },
          ]}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 10 }} />
          <YAxis tick={{ fontSize: 10 }} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="green"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
