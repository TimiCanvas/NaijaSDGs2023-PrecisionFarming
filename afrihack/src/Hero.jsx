import React from "react";
import "./Hero.css";
import crop from "./assets/crop.png";
import crop2 from "./assets/crop5.png";
const Hero = () => {
  return (
    <div className=" heroPage">
      <div className="Heroflex">
        <div className=" p-4 headerBox flex flex-col">
          <p className="text-white headerText1 ">
            {" "}
            Welcome to <br /> Agrisage - <br /> where
            <span className="bg-green-700">Precision</span> <br /> meets
            agriculture ! <br />{" "}
          </p>
          <p className="text-white headerText">
            Redefining agriculture through the power of prescion AI. Step into a
            realm where technology and nature seamlessly converge to optimize
            your farm's potential.
          </p>
          <div className=" mt-4 flex  gap-[50px] p-4">
            <button className="text-white bg-green-800 p-[8px] rounded-[5px] w-[120px]">
              Start Now
            </button>
            <button className="text-white bg-[#1E1E1E] border-[2px] p-[8px] rounded-[5px] w-[120px]">
              How it works?
            </button>
          </div>
        </div>

        <div className=" relative flexItems  ">
          <img src={crop} className='w-[500px]' />
          <div className=" bg-green-900 h-[300px] rounded-[20px]  flex justify-center bottom-[0] items-center absolute  ">
            <img src={crop2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
