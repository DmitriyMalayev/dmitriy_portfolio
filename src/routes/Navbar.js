import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="flex justify-start items-end">
      <div className="flex">
        <img src={Logo} alt="Logo" height="100" width="100" />
      </div>
      <div className="flex-grow">
        <ul className="hidden md:flex justify-around sm:text-lg md:text-xl lg:text-2xl font-semibold">
          {/* Menu */}
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/skills">Skills</a>
          </li>
          <li>
            <a href="/work">Work</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        {/* Hamburger Menu */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <div>
        <ul className="hidden md:flex justify-around sm:text-lg md:text-xl lg:text-2xl font-semibold">
          {" "}
          {/* Menu */}{" "}
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/skills">Skills</a>
          </li>
          <li>
            <a href="/work">Work</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>{" "}
      </div>
      {/* Hamburger Menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu  */}
      <div>
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#d3c6be] text-white flex flex-col justify-center items-center"
          }
        >
          {" "}
          <Link
            onClick={handleClick}
            className="hover:bg-blue-500 scroll-smooth py-6 text-4xl"
            to="home"
          >
            Home
          </Link>
          <Link
            onClick={handleClick}
            className="hover:bg-blue-500 scroll-smooth py-6 text-4xl"
            to="about"
          >
            About
          </Link>
          <Link
            onClick={handleClick}
            className="hover:bg-blue-500 scroll-smooth py-6 text-4xl"
            to="skills"
          >
            Skills
          </Link>
          <Link
            onClick={handleClick}
            className="hover:bg-blue-500 scroll-smooth py-6 text-4xl"
            to="contact"
          >
            Contact
          </Link>
        </ul>{" "}
      </div>
      {/* Social Icons */}
      <div className="flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ">
            <a
              className="flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600"
              href="/"
            >
              LinkedIn <FaLinkedin size={30} />{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ">
            <a
              className="flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-black"
              href="/"
            >
              GitHub <FaGithub size={30} />{" "}
            </a>
          </li>{" "}
          <li className="w-[160px] h-[60px] flex justify-between items-center ">
            <a
              className="flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-900"
              href="/"
            >
              Email <HiOutlineMail size={30} />{" "}
            </a>
          </li>{" "}
          <li className="w-[160px] h-[60px] flex justify-between items-center ">
            <a
              className="flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-orange-500"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />{" "}
            </a>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
