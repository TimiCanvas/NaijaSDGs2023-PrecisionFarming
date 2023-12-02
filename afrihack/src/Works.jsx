import React from "react";
import "./Work.css";
import crop6 from "./assets/crop6.png";
import crop4 from "./assets/crop4.png";
import B1 from './assets/B1.png';
import B2 from './assets/B2.png';
import B3 from './assets/B3.png';
const Works = () => {
  return (
    <div name='work' className=" bg-[#1e1e1e] colorit h-[70rem] mt-[-2px]">
      <p className="text-center text-white font-bold text-xl">How it Works </p>
      <div className="flex justify-center items-center flex-col ">
        <div className="w-[900px] flex justify-around WorkFlex items-center h-[300px] mt-4">
          <div className="flexOrder1">
            <img src={crop6}   />
          </div>
          <div className="flexOrder2">
            <img src={B1} className='w-[30px]'/>
          </div>
          <div className="flexOrder3">
            <p className="text-white font-bold ">
              Sign Up for Exclusive Access to Precision Farming
            </p>
        
            <p className="text-white mt-4">  Why Join Agrisage?</p>
            <p className="text-white"> Personalised insights community</p>
            <p className="text-white"> Connection exclusive resources</p>
          </div>
        </div>
        <div className=" w-[900px] WorkFlex h-[300px] mt-4 flex justify-around items-center">
        <div className="flexOrder1">
            <img src={crop6} />
          </div>
          <div className="flexOrder2">
            <img src={B2} className='w-[20px]' />
          </div>
          <div className="flexOrder3">
            <p className="text-white font-bold ">
           Welcome to the heart of Agrisage Technology!
            </p>
        
            <p className="text-white mt-4">  Unlock the full potential of our ai driven technology!</p>
            <p className="text-white"> Explore Features</p>
            <p className="text-white">  Access to advance tools</p>
          </div>
        </div>
        <div className=" w-[900px] WorkFlex h-[300px] mt-4 flex justify-around items-center">
        <div className="bg-[#1e1e1e] flexOrder1Box w-[350px] flex justify-center border-[1px]">
            <img src={crop4} />
          </div>
          <div className="flexOrder2">
            <img src={B3} className='w-[10px]' />
          </div>
          <div className="flexOrder3">
            <p className="text-white font-bold ">
              See our precision AI in action
            </p>
        
            <p className="text-white mt-4">  unlock the full potential of AI driven solution</p>
            <p className="text-white"> Real-time monitoring</p>
            <p className="text-white">  Automation in Action</p>
            <p className="text-white">  Predictive Analysis</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
