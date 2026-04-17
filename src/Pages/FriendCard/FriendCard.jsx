import React from "react";
import { useNavigate } from "react-router";

const FriendCard = ({ friends }) => {

    const navigate = useNavigate()

  return (
    <div className=" text-center">
      <div
        onClick={() => navigate(`/frienddetails/${friends.id}`)}
        className="p-4 shadow-md rounded-md space-y-2  "
      >
        <div className="flex items-center justify-center ">
          <img src={friends.picture} alt="" className="rounded-full" />
        </div>
        <h2 className="text-xl font-bold"> {friends.name} </h2>
        <p> {friends.days_since_contact} </p>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 justify-around ">
            {friends.tags.map((tag, index) => (
              <button
                key={index}
                className="bg-green-200 rounded-full font-semibold text-md px-2"
              >
                {tag}
              </button>
            ))}
          </div>
          <button
            className={`btn rounded-full text-white ${
              friends.status === "overdue"
                ? "bg-green-500"
                : friends.status === "on-track" ? "bg-blue-500" : "bg-red-500"
            }`}
          >
            {friends.status}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
