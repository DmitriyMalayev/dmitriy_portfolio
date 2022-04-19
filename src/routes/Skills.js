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
  const skills = [
    { title: "HTML", image: HTML },
    { title: "CSS", image: CSS },
    { title: "JS", image: JS },
    { title: "ReactImg", image: ReactImg },
    { title: "Node", image: Node },
    { title: "Firebase", image: FireBase },
    { title: "Github", image: GitHub },
    { title: "TailwindCSS", image: Tailwind },
    { title: "Mongo", image: Mongo },
  ];
  return (
    <div
      id="skills"
      className="w-full pt-24 lg:h-screen lg:pt-0 text-slate-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full">
          <div className="sm:text-center pb-8 pl-4 sm:pl-0 smw-full">
            <p className="text-4xl font-bold inline border-b-4 border-orange-600 text-cyan-100">
              Skills
            </p>
          </div>
        </div>
        <div className="w-full sm:w-[1000px]">
          <h3 className="sm:text-center text-xl px-2 text-slate-100">
            These are the languages and frameworks that I have worked with:
          </h3>
          <div className="w-full grid grid-cols-3 sm:grid-cols-3 gap-6 text-center py-8 p-4 sm:px-20">
            {skills.map((skill) => (
              <div className="shadow-md shadow-slate-500 hover:scale-110 border-2 border-transparent hover:border-slate-500 duration-700 pt-6">
                <img
                  className="w-20 mx-auto shadow-blue-600/50 drop-shadow-lg"
                  src={skill.image}
                  alt="CSS Icon"
                />
                <p className="my-4">{skill.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
