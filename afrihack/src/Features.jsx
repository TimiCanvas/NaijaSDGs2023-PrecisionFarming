import React from "react";
import './Feature.css'

const Features = () => {
  return (
    <div name='features' className=" bg-[#1e1e1e] h-[20rem] FeatureBox">
      <p className="text-center text-white text-2xl font-bold mt-4">KEY FEATURES</p>
      <div className="mt-4 flex justify-center items-center features ">
        <div className="border-[0.5px] rounded-[20px] w-[400px] featBox h-[150px] p-4">
          <p className="text-center text-white font-bold">Empowering farmers</p>
          <p className="text-center text-white"> Join a community of forward-thinking farmers embracing 
            the future of agriculture . Access ongoing support, 
            training and updates to stay at the forefront of ag-tech</p>
        </div>
        <div className="flex items-center h-[50px]">
          <div className="bg-green-500 w-[50px] h-[20px] clip "> </div>
        </div>

        <div className="border-[0.5px]  rounded-[20px] featBox w-[400px] h-[150px] p-4">
          <p className="text-center text-white font-bold">Smart Cropping</p>
          <p className="text-center text-white"> Gain real-time insights 
          into your crop health and growth.
           Recieve alerts for potential issues,
            allowing for proactive management  
        </p>
        </div>
        <div className="flex items-center  h-[50px] ">
        <div className="bg-green-500 w-[50px] h-[20px] clip"> </div>
        </div>
        <div className="border-[0.5px] rounded-[20px] featBox w-[400px] h-[150px] p-4">
          <p className="text-center text-white font-bold">
            Data Driven Performance
          </p>
          <p className="text-center text-white"> 
          Make informed decisons based 
          on accurate and timely data.
          Leverage advanced analytics to enhance 
          crop planning and resource allocation
        </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
