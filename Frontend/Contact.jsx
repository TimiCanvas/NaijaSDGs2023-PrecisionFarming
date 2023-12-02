import React from "react";
import crop3 from "./assets/crop3.png";
import Agrisage from "./assets/Agrisage.png";
import "./Work.css";
const Contact = () => {
  return (
    <div name='contact' className="contactDiv bg-[#1e1e1e] h-[60rem] ">
      <p className="text-center text-white text-2xl mt-[-5px] p-4 font-bold"> Contact us</p>

      <img src={crop3} className="mx-auto mt-9" />
      <div className="flex justify-center items-center flex-col mt-[100px] text-white">
        <a href="mailto:adeyemishedracktimi@gmail.com">
          adeyemishedracktimi@gmail.com
        </a>
        <a href="mailto:adeyanjutomide@gmail.com">adeyanjutomide@gmail.com</a>
        <a href="mailto:ayomidet905@gmail.com">ayomidet905@gmail.com</a>
        <a href="mailto:adeyemimeshack@gmail.com">adeyemimeshack@gmail.com</a>
        <button className="border-[1px] border-green-500 text-white p-[10px] mx-auto mt-[100px]">
          Start Now
        </button>
      </div>
      <img src={Agrisage} className=" mx-auto mt-[50px]" />
    </div>
  );
};

export default Contact;
