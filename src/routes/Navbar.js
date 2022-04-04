import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../logo.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div>
      <nav>
        <ul className="w-full h-[100px] flex justify-between items-center bg-[#d3c6be] text-white">
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "300px", left: "80px", top: "100px" }}
          />
          <Link className="hover:bg-blue-500" to="/home">
            Home
          </Link>
          <Link className="hover:bg-blue-500" to="/about">
            About
          </Link>
          <Link className="hover:bg-blue-500" to="/skills">
            Skills
          </Link>
          <Link className="hover:bg-blue-500" to="/contact">
            Contact
          </Link>
        </ul>
        <ul className="hidden md:flex">
          {" "}
          {/* Menu */}{" "}
          <Link className="hover:bg-blue-500" to="/home">
            Home
          </Link>
          <Link className="hover:bg-blue-500" to="/about">
            About
          </Link>
          <Link className="hover:bg-blue-500" to="/skills">
            Skills
          </Link>
          <Link className="hover:bg-blue-500" to="/contact">
            Contact
          </Link>
        </ul>{" "}
        {/* Hamburger Menu */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* Mobile Menu  */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#d3c6be] text-white flex flex-col justify-center items-center"
          }
        >
          {" "}
          <Link className="hover:bg-blue-500 py-6 text-4xl" to="/home">
            Home
          </Link>
          <Link className="hover:bg-blue-500 py-6 text-4xl" to="/about">
            About
          </Link>
          <Link className="hover:bg-blue-500 py-6 text-4xl" to="/skills">
            Skills
          </Link>
          <Link className="hover:bg-blue-500 py-6 text-4xl" to="/contact">
            Contact
          </Link>
        </ul>{" "}
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
                className="flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-zinc-300"
                href="/"
              >
                Resume <BsFillPersonLinesFill size={30} />{" "}
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
