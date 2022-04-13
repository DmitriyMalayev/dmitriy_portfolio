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
    <div id="skills" className="w-full h-screen bg-slate-500 text-slate-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4 w-full">
            <p className="text-4xl font-bold inline border-b-4 border-orange-600 text-cyan-100">
              Skills
            </p>
          </div>
        </div>
        <div className="w-full">
          <h3 className="text-center sm:text-2xl">
            These are the languages and frameworks I have worked with:
          </h3>

          <div className="w-full grid grid-cols-3 sm:grid-cols-3 gap-6 text-center py-8 px-52">
            <div className="shadow-md shadow-slate-800 hover:scale-110 duration-500 pt-6">
              <img className="w-20 mx-auto" src={HTML} alt="HTML Icon" />
              <p className="my-4">HTML</p>
            </div>
            <div className="shadow-md shadow-slate-800 hover:scale-110 duration-500 pt-6">
              <img className="w-20 mx-auto" src={CSS} alt="CSS Icon" />
              <p className="my-4">CSS</p>
            </div>{" "}
            <div className="shadow-md shadow-slate-800 hover:scale-110 duration-500 pt-6">
              <img className="w-20 mx-auto" src={JS} alt="JS Icon" />
              <p className="my-4">JavaScript</p>
            </div>{" "}
            <div className="shadow-md shadow-slate-800 hover:scale-110 duration-500 pt-6">
              <img className="w-20 mx-auto" src={ReactImg} alt="React Icon" />
              <p className="my-4">React</p>
            </div>{" "}
            <div className="shadow-md shadow-slate-800 hover:scale-110 duration-500 pt-6">
              <img className="w-20 mx-auto" src={Node} alt="Node Icon" />
              <p className="my-4">Node</p>
            </div>{" "}
            <div className="shadow-md shadow-slate-800 hover:scale-110 duration-500 pt-6">
              <img
                className="w-20 mx-auto"
                src={FireBase}
                alt="FireBase Icon"
              />
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
    </div>
  );
};

export default Skills;
