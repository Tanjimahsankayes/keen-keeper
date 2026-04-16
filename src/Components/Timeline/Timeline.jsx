import React, { useContext } from "react";
import { FriendCallContext } from "../Context/FriendContext";
import { MdAddIcCall, MdVideoCall } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";

const Timeline = () => {
  const { friendCall } = useContext(FriendCallContext);

  const getIcon = (type) => {
    if (type === "Call") return <MdAddIcCall className="w-8 h-8" />;
    if (type === "Text") return <AiFillMessage className="w-8 h-8" />;
    if (type === "Video") return <MdVideoCall className="w-8 h-8" />;

    return null;
  }

  return (
    <div className="w-8/12 mx-auto">
      <h1 className="text-3xl font-bold my-6">Timeline</h1>

      {friendCall.length === 0 ? (
        <p className="text-center mt-10 text-xl text-gray-500 " >Your timeline is empty.</p>
      ) : (
        friendCall.map((friend, index) => (
          <div
            key={index}
            className="shadow-md p-4 mt-4 rounded-md flex items-center gap-5 "
          >
            <div>{getIcon(friend.type)}</div>
            <div>
              <h2 className="text-xl font-semibold">
                {friend.type} with{" "}
                <span className="text-[18px] font-normal text-gray-500">
                  {friend.name}
                </span>
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
