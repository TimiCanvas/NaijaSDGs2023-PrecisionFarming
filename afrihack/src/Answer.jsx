import React from "react";
import { Link } from "react-router-dom";
const Answer = ({ info }) => {
  return (
      <div className="flex items-center justify-center">
    <div className="mt-[100px] flex-col w-[300px] p-4 border-2 h-[200px] flex">
      <Link to='/query'><p className="text-white">Close</p></Link>
      <div className="flex justify-center  h-[200px] items-center">
      <p className="text-white text-center">
        The best time to harvest your crop is:{" "}
        {info === null ? <p>no data yet</p> : <p className="text-red-500 font-bold">{info.data} season</p>}{" "}
      </p>
      </div>
   
    </div>
    </div>
  );
};

export default Answer;
