import React from "react";
import { IoMdAdd } from "react-icons/io";

const Banner = () => {
    return (
      <div className="text-center space-y-4 mt-12 w-8/12 mx-auto ">
        <h1 className="text-4xl font-bold">
          Friends to keep close in your life
        </h1>
        <p className="text-sm text-black/50">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>
        <div className=" flex justify-center ">
          <button className="flex gap-1 items-center bg-[#244D3F] text-white py-2 px-4 rounded-sm ">
            <span>
              <IoMdAdd />
            </span>
            Add a Friend
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10 w-full mx-auto pt-4 justify-center ">
          <div className="p-10 rounded-md bg-base-100 shadow-xl  ">
            <h4>10</h4>
            <h3>Total Friends</h3>
          </div>
          <div className="p-10 rounded-md bg-base-100 shadow-xl ">
            <h4>10</h4>
            <h3>On Track</h3>
          </div>
          <div className="p-10 rounded-md bg-base-100 shadow-xl">
            <h4>10</h4>
            <h3>Need Attention</h3>
          </div>
          <div className="p-10 rounded-md bg-base-100 shadow-xl ">
            <h4>10</h4>
            <h3>Interactions This Month</h3>
          </div>
        </div>
      </div>
    );
};

export default Banner;