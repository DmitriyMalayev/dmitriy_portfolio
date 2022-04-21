import React, { useState } from "react";
import Logo from "../logo.svg";
import Icons from "./Icons";

import { FaBars, FaTimes } from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <>
      <Icons />
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4  text-orange-700 gap-10 bg-orange-300/15 backdrop-blur-xl">
        <div>
          <img src={Logo} alt="Logo" style={{ width: "50px" }} />
        </div>

        {/* menu */}
        <ul className="hidden md:flex justify-around sm:text-lg md:text-xl lg:text-2xl font-semibold grow ">
          <li className="hover:text-red-600 hover:text-3xl">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-red-600 hover:text-3xl">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-red-600 hover:text-3xl">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-red-600 hover:text-3xl">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-red-600 hover:text-3xl">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-4xl">
            <a onClick={handleClick} href="#home">
              Home
            </a>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <a onClick={handleClick} href="#about">
              About
            </a>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <a onClick={handleClick} href="#skills">
              Skills
            </a>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <a onClick={handleClick} href="#projects">
              Projects
            </a>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <a onClick={handleClick} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
