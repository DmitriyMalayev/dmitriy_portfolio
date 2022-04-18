import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Icons = () => {
  return (
    <div className="hidden lg:flex fixed flex-col top-1/2 left-0 -translate-y-1/2">
      <ul>
        <li className="w-[160px] h-[60px] flex justify-between items-center ">
          <a
            className="flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[0px] duration-700 bg-blue-600 shadow-blue-600/100 shadow-sm pl-4"
            href="https://www.linkedin.com/in/dmitriymalayev/"
          >
            LinkedIn <FaLinkedin size={35} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ">
          <a
            className="flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[0px] duration-700 bg-black shadow-gray-800/100 shadow-sm pl-4"
            href="https://github.com/DmitriyMalayev"
          >
            GitHub <FaGithub size={35} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ">
          <a
            className="flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[0px] duration-700 bg-blue-900 pl-4 shadow-blue-900/100 shadow-sm"
            href="mailto:dmitriy.malayev@gmail.com"
          >
            Email <HiOutlineMail size={35} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ">
          <a
            className="flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[0px] duration-700 bg-orange-500 shadow-orange-500/100 shadow-sm pl-4"
            href="https://docs.google.com/document/d/e/2PACX-1vRVyekYUVeK_As6_FKBVkpDyw2mT9yJKvK4DJ-r4dXlfBVdRLhqKZLw-gweO65Zj9Uly2yCoem7mS2V/pub"
          >
            Resume <BsFillPersonLinesFill size={35} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Icons;
