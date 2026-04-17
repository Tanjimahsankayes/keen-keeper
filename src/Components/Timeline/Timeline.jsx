import React, { useContext, useState, useMemo } from "react";
import { FriendCallContext } from "../Context/FriendContext";
import { MdAddIcCall, MdVideoCall } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";

const Timeline = () => {
  const { friendCall = [] } = useContext(FriendCallContext);

  const [sortOrder, setSortOrder] = useState("newest");
  const [filter, setFilter] = useState("all");

  const getIcon = (type) => {
    if (type === "Call") return <MdAddIcCall className="w-8 h-8" />;
    if (type === "Text") return <AiFillMessage className="w-8 h-8" />;
    if (type === "Video") return <MdVideoCall className="w-8 h-8" />;
    return null;
  };

  const processedData = useMemo(() => {
    let data = [...friendCall];


    if (filter !== "all") {
      data = data.filter((item) => item.type === filter);
    }

    data.sort((a, b) => {
      if (sortOrder === "newest") {
        return new Date(b.time) - new Date(a.time);
      } else {
        return new Date(a.time) - new Date(b.time);
      }
    });

    return data;
  }, [friendCall, filter, sortOrder]);

  return (
    <div className="w-8/12 mx-auto">
      <h1 className="text-3xl font-bold my-6">Timeline</h1>
      <div className="flex gap-4 mb-6 justify-center">
        <select
          className="border p-2 rounded"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>

        <select
          className="border p-2 rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>
      </div>
      {processedData.length === 0 ? (
        <p className="text-center mt-10 text-xl text-gray-500">
          Your timeline is empty.
        </p>
      ) : (
        processedData.map((friend, index) => (
          <div
            key={index}
            className="shadow-md p-4 mt-4 rounded-md flex items-center gap-5"
          >
            <div>{getIcon(friend.type)}</div>
            <div>
              <h2 className="text-xl font-semibold">
                {friend.type} with{" "}
                <span className="text-gray-500">{friend.name}</span>
              </h2>

              <p className="text-gray-500 text-sm">
                {new Date(friend.time).toLocaleString("en-BD", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Timeline;
