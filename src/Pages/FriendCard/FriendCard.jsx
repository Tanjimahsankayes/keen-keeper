import React from "react";

const FriendCard = ({ friends }) => {
  return (
    <div className=" text-center ">
      <div className="p-4 shadow-md rounded-md space-y-2 ">
        <div className="flex items-center justify-center ">
          <img src={friends.picture} alt="" className="rounded-full" />
        </div>
        <h2 className="text-2xl font-bold"> {friends.name} </h2>
        <p> {friends.days_since_contact} </p>
        <div className="flex flex-col gap-2" >
          <button className="bg-green-300 rounded-full font-semibold text-xl p-2">
            {friends.tags[0]}
          </button>
          <button className="btn bg-amber-300 rounded-full text-white">
            {friends.status}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
