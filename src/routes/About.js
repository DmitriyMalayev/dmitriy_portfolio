import React from "react";
import Photo from "../assets/photo.jpeg";

const About = () => {
  return (
    <div id="about" className="w-full h-screen text-slate-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-orange-600 text-cyan-100">
              About Me
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 ">
          <div className="sm:text-right text-4xl font-bold flex justify-start items-center p-6">
            <img src={Photo} alt="MyPhoto" className="w-40" />
          </div>
          <div>
            <p className="text-xl leading-relaxed lg:w-auto p-3">
              I am a Full-Stack Software Engineer with a background in Data
              Communications, <br /> Computer Science, and Account Management.
              <br /> I have a personable personality and solid skills in
              team-building, project management, web development, and UI Design.
              <br />
              Additionally, I desire to learn constantly, whether taking online
              courses, reading blogs, debugging code, or tutoring others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
