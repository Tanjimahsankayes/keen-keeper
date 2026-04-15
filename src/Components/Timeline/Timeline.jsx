import React from 'react';
import { useLocation } from "react-router";

const Timeline = () => {
      const location = useLocation();
      const data = location.state;


    return (
      <div className="w-8/12 mx-auto">
        <h1 className="text-3xl font-bold mt-10">Timeline </h1>
        <p>sorting</p>
        <div>
          <div>
            <h2>Timeline</h2>
            <p>Action: {data?.type}</p>
            <p>Name: {data?.name}</p>
            <p>Date: {data?.date}</p>
          </div>
        </div>
      </div>
    );
};

export default Timeline;