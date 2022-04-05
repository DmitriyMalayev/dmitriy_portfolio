import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JS from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-slate-500 text-slate-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-orange-600">
            Skills
          </p>
          <p className="py-4">
            These are the languages and frameworks I have worked with:
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-slate-800 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML Icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-slate-800 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS Icon" />
            <p className="my-4">CSS</p>
          </div>{" "}
          <div className="shadow-md shadow-slate-800 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JS} alt="JS Icon" />
            <p className="my-4">JavaScript</p>
          </div>{" "}
          <div className="shadow-md shadow-slate-800 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React Icon" />
            <p className="my-4">React</p>
          </div>{" "}
          <div className="shadow-md shadow-slate-800 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="Node Icon" />
            <p className="my-4">Node</p>
          </div>{" "}
          <div className="shadow-md shadow-slate-800 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={FireBase} alt="FireBase Icon" />
            <p className="my-4">FireBase</p>
          </div>{" "}
          <div className="shadow-md shadow-slate-800 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="GitHub Icon" />
            <p className="my-4">GitHub</p>
          </div>
          <div className="shadow-md shadow-slate-800 hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={Tailwind}
              alt="TailWindCSS Icon"
            />
            <p className="my-4">TailwindCSS</p>
          </div>
          <div className="shadow-md shadow-slate-800 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="Mongo Icon" />
            <p className="my-4">MongoDB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
