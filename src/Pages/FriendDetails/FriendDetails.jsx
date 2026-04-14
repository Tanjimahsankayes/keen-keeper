import React, { use } from 'react';
import { useParams } from 'react-router';
import { MdNotificationsPaused } from "react-icons/md";
import { FaArchive } from "react-icons/fa";
import { MdDelete } from "react-icons/md";  
import Call from "../../assets/call.png";
import Text from "../../assets/text.png";
import Video from "../../assets/video.png";
import { FaHistory } from "react-icons/fa";
import toast from "react-hot-toast";


const friendPromise = fetch("/public/Data.json").then((res) => res.json())

const FriendDetails = () => {
    const { id } = useParams();
    const friends = use(friendPromise);
    const Friend = friends.find((friend) => friend.id === parseInt(id));
    return (
      <div className="w-11/12 md:w-8/12 mx-auto md:grid md:grid-cols-6 gap-8 mt-15 ">
        <div className="col-span-2">
          <div>
            <div className="p-4 shadow-md rounded-md space-y-2 text-center w-full mx-auto">
              <div className="flex items-center justify-center ">
                <img src={Friend.picture} alt="" className="rounded-full" />
              </div>
              <h2 className="text-2xl font-bold"> {Friend.name} </h2>
              <p> {Friend.days_since_contact} </p>
              <div className="flex flex-col gap-2">
                <button className="bg-green-300 rounded-full font-semibold text-xl p-2">
                  {Friend.tags[0]}
                </button>
                <button className="btn bg-amber-300 rounded-full text-white">
                  {Friend.status}
                </button>
                <p className="text-black/50 italic"> {Friend.bio} </p>
                <p className="text-black/50"> Preferred : {Friend.email} </p>
              </div>
            </div>
            <div>
              <button className="flex gap-1 items-center justify-center text-center font-bold w-full mt-4 p-4 rounded-md shadow-md cursor-pointer">
                <span>
                  <MdNotificationsPaused />
                </span>
                Snoze 2 Weeks
              </button>
              <button className="flex gap-1 items-center justify-center text-center font-bold w-full mt-4 p-4 rounded-md shadow-md cursor-pointer">
                <span>
                  <FaArchive />
                </span>
                Archive
              </button>
              <button className="flex gap-1 items-center justify-center text-center font-bold w-full mt-4 p-4 rounded-md shadow-md text-red-500 cursor-pointer">
                <span>
                  <MdDelete />
                </span>
                Delete
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="shadow-md p-6 text-center rounded-md">
              <h1 className="text-2xl font-bold">
                {Friend.days_since_contact}
              </h1>
              <h4> Days Since Contact</h4>
            </div>
            <div className="shadow-md p-6 text-center rounded-md">
              <h1 className="text-2xl font-bold">{Friend.goal}</h1>
              <h4>Goal (Days)</h4>
            </div>
            <div className="shadow-md p-6 text-center rounded-md">
              <h1 className="text-2xl font-bold"> {Friend.next_due_date} </h1>
              <h4>Next Due</h4>
            </div>
          </div>
          <div className="shadow-md mt-4 p-6 rounded-md">
            <div className="flex justify-between">
              <h2 className="text-2xl font-semibold">Relational Goal </h2>
              <button className="btn">Edit</button>
            </div>
            <h2>
              Connect every
              <span className="font-bold">{Friend.goal} Days </span>
            </h2>
          </div>
          <div className="shadow-md mt-4 p-6 rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Quick Check-In</h2>
            <div className="flex gap-4">
              <div
                onClick={() => toast.success(`Calling ${Friend.name}...`)}
                className="bg-base-200 p-4 rounded-md text-center flex flex-col gap-2 items-center w-full font-semibold text-xl cursor-pointer"
              >
                <img src={Call} alt="" className="h-8 w-8 " />
                <h3>Call</h3>
              </div>
              <div
                onClick={() => toast(`Sending Message ${Friend.name}...`)}
                className="bg-base-200 p-4 rounded-md text-center flex flex-col gap-2 items-center w-full font-semibold text-xl cursor-pointer"
              >
                <img src={Text} alt="" className="h-8 w-8" />
                <h3> Text </h3>
              </div>
              <div
                onClick={() =>
                  toast.success(`Starting Video Call ${Friend.name}...`)
                }
                className="bg-base-200 p-4 rounded-md text-center flex flex-col gap-2 items-center w-full font-semibold text-xl cursor-pointer"
              >
                <img src={Video} alt="" className="h-8 w-8" />
                <h3>Video</h3>
              </div>
            </div>
          </div>

          <div className="shadow-md p-4 rounded-md">
            <div className="flex justify-between">
              <h2 className="text-2xl font-semibold">Recent Interactions</h2>
              <div className="flex gap-2 items-center btn">
                <span>
                  <FaHistory />
                </span>
                <h2>Full History</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FriendDetails;