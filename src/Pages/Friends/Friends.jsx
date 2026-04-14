import React, { useEffect, useState } from "react";
import FriendCard from "../FriendCard/FriendCard";

const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("/Data.json")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div className="mt-12 w-8/12 mx-auto">
      <h1 className="text-3xl font-bold mb-8">Your Friends</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {friends.map((friend, index) => (
          <FriendCard key={index} friends={friend} />
        ))}
      </div>
    </div>
  );
};

export default Friends;
