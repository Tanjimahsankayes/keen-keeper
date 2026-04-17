import React, { useContext } from "react";
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { FriendCallContext } from "../Context/FriendContext";

const States = () => {
  const { friendCall } = useContext(FriendCallContext);

  if (friendCall.length === 0) {
    return (
      <p className="text-center mt-10 text-gray-500">No analytics data yet</p>
    );
  }

  const callSet = new Set();
  const textSet = new Set();
  const videoSet = new Set();

  friendCall.forEach((item) => {
    if (item.type === "Call") callSet.add(item.name);
    if (item.type === "Text") textSet.add(item.name);
    if (item.type === "Video") videoSet.add(item.name);
  });

  const data = [
    { name: "Call", value: callSet.size, fill: "#008ffe" },
    { name: "Text", value: textSet.size, fill: "#ffcc00" },
    { name: "Video", value: videoSet.size, fill: "#00c49f" },
  ];

  return (
    <div className="w-8/12 mx-auto my-8">
      <h1 className="text-3xl font-bold mb-5">Friendship Analytics</h1>

      <div className="shadow-md w-full h-80 flex flex-col">
        <h4 className="text-gray-500 p-4">By Interaction Type</h4>

        <div style={{ width: "100%", height: 320 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius="60%"
                outerRadius="90%"
                paddingAngle={5}
                cornerRadius={10}
              />
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default States;
