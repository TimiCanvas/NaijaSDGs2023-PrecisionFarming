import React, { useState } from "react";
import "./Navbar.css";
import Logo from "./assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import { Link as LinkRoll } from "react-scroll";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleItem = () => {
    setOpen(true);
    console.log("clicked");
  };
  return (
    <div className=" home">
      <div className="agrisageBox flex justify-around bg-[#1e1e1e] cursor-pointer fixed  w-[100vw]   p-[10px]">
        <Link to="/">
          <div className="flex   flex-row gap-[5px] items-center w-[200px]">
            <img src={Logo} className="w-[40px]" />
            <p className="text-slate-200 font-bold">Agrisage</p>
          </div>
        </Link>

        <div className="text-slate-200 flex gap-[20px]">
          <LinkRoll to="features" smooth={true} duration={500}>
            Features
          </LinkRoll>
          <LinkRoll to="work" smooth={true} duration={500}>
            How it works
          </LinkRoll>
          <LinkRoll to="about" smooth={true} duration={500}>
            About us
          </LinkRoll>
          <LinkRoll to="contact" smooth={true} duration={500}>
            Contact us
          </LinkRoll>
        </div>
        <Link to="/query">
          <button className="border-2 border-white text-sm  p-[10px] text-slate-200 h-[40px] rounded-[5px]">
            Get Started
          </button>
        </Link>
      </div>

      {/*Navbar for small screen*/}
      <div className="lg:hidden sm:block agrisage2">
        <div className="bg-[#1e1e1e] w-[340px] h-[50px] p-[10px]   flex justify-between fixed">
          <Link to="/">
            <div className="flex   flex-row gap-[5px] items-center w-[200px]">
              <img src={Logo} className="w-[40px]" />
              <p className="text-slate-200 font-bold">Agrisage</p>
            </div>
          </Link>

          <div onClick={handleClick}>
            {open ? (
              <FiMenu className="text-white" />
            ) : (
              <FiX className="text-white" />
            )}
          </div>
        </div>

        <div
          className={
            !open
              ? "text-slate-200 header2 bg-[#1e1e1e] justify-center items-center gap-[20px] h-[400px] flex flex-col gap-[20px]"
              : "hidden"
          }
        >
          <LinkRoll to="features" smooth={true} duration={500}>
            <div onClick={handleItem}>Features</div>
          </LinkRoll>

          <LinkRoll to="work" smooth={true} duration={500}>
            <div onClick={handleItem}>How it works</div>
          </LinkRoll>
          <LinkRoll to="about" smooth={true} duration={500}>
            <div onClick={handleItem}>About us</div>
          </LinkRoll>
          <LinkRoll to="contact" smooth={true} duration={500}>
            <div onClick={handleItem}>Contact us</div>
          </LinkRoll>
          <Link to="/query">
            <button
              onClick={handleItem}
              className="border-2 border-white text-sm  p-[10px] text-slate-200 h-[40px] rounded-[5px]"
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
