import React, { useState } from "react";
import Logo from "../logo.png";

import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-orange-100 text-orange-700 gap-10  ">
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

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ">
            <a
              className="flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600 pl-4"
              href="https://www.linkedin.com/in/dmitriymalayev/"
            >
              LinkedIn <FaLinkedin size={35} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ">
            <a
              className="flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[0px] duration-300 bg-black pl-4"
              href="https://github.com/DmitriyMalayev"
            >
              GitHub <FaGithub size={35} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ">
            <a
              className="flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[0px] duration-300 bg-blue-900 pl-4"
              href="mailto:dmitriy.malayev@gmail.com"
            >
              Email <HiOutlineMail size={35} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ">
            <a
              className="flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[0px] duration-300 bg-orange-500 pl-4"
              href="https://docs.google.com/document/d/e/2PACX-1vRVyekYUVeK_As6_FKBVkpDyw2mT9yJKvK4DJ-r4dXlfBVdRLhqKZLw-gweO65Zj9Uly2yCoem7mS2V/pub"
            >
              Resume <BsFillPersonLinesFill size={35} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
