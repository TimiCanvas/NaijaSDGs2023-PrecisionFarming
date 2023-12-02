import React from "react";
import ayomide from './assets/ayomide.png';
import sheddy from './assets/sheddy.png';
import meshack from './assets/meshack.png';
import tomide from './assets/tomide.png';
const Team = () => {
  return (
    <div className="bg-[#1e1e1e] min-h-[30rem] m">
      <p className="text-center text-white font-bold ">About Us</p>

      <div className=" flex justify-around items-center mt-9">
        <div className=" w-[300px] h-[350px] ">
         <img src={sheddy} className='mx-auto' />
          <p className="text-white font-bold text-center">Adeyemi Shadrack</p>
          <p className="text-white font-thin text-center">
            Data Scientist/ ML Developer
          </p>
        </div>
        <div className=" w-[300px] h-[350px]">
        <img src={ayomide} className='mx-auto' />
          <p className="text-white font-bold text-center">Ayomide Taiwo</p>
          <p className="text-white font-thin text-center">Backend Developer</p>
        </div>
        <div className=" w-[300px] h-[350px]">
        <img src={tomide} className='mx-auto' />
          <p className="text-white font-bold text-center">Adeyanju Tomide</p>
          <p className="text-white font-thin text-center">Frontend Developer</p>
        </div>
        <div className=" w-[300px] h-[350px]">
            <div className="bg-slate-300 border-4 rounded-[10px] border-green-500 h-[300px] w-[220px]">
            <img src={meshack} className='mx-auto w-[200px] ' />
            </div>
       
          <p className="text-white font-bold text-center">Adeyemi Meshack</p>
          <p className="text-white font-thin text-center">Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
