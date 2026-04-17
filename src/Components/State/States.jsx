import React, { useContext } from "react";
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { FriendCallContext } from "../Context/FriendContext";

const States = () => {
  const { friendCall = [] } = useContext(FriendCallContext);

  if (!friendCall || friendCall.length === 0) {
    return (
      <p className="text-center mt-10 text-gray-500">No analytics data yet</p>
    );
  }

  const data = [
    {
      name: "Call",
      value: friendCall.filter((i) => i.type === "Call").length,
      fill: "#008ffe",
    },
    {
      name: "Text",
      value: friendCall.filter((i) => i.type === "Text").length,
      fill: "#ffcc00",
    },
    {
      name: "Video",
      value: friendCall.filter((i) => i.type === "Video").length,
      fill: "#00c49f",
    },
  ];

  return (
    <div className="w-8/12 mx-auto my-8">
      <h1 className="text-3xl font-bold mb-5">Friendship Analytics</h1>

      <div className="shadow-md w-full h-80 flex flex-col">
        <h4 className="text-gray-500 p-4">By Interaction Type</h4>

        <div style={{ width: "100%", height: "320px" }}>
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
