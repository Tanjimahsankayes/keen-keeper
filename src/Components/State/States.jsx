import React from "react";
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const States = () => {
  const data = [
    { name: "Call", value: 400, fill: "#008ffe" },
    { name: "Text", value: 300, fill: "#ffcc00" },
    { name: "VideoCall", value: 200, fill: "#00c49f" },
  ];

  return (
    <div className="w-8/12 mx-auto my-8">
      <h1 className="text-3xl font-bold">Friendship Analytics</h1>

      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius="60%"
              outerRadius="90%"
              paddingAngle={5}
              cornerRadius={10}
              isAnimationActive={true}
            />
          </PieChart>
          <Tooltip></Tooltip>
          <Legend></Legend>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default States;
