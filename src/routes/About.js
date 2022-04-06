import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-slate-500 text-slate-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-orange-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hello. Welcome to my website. </p>
          </div>
          <div>
            <p>
              {" "}
              I am a Full-Stack Software Engineer with a background in Data
              Communications, Computer Science, and Account Management. I have a
              personable personality and solid skills in team-building, project
              management, web development, and UI Design. Additionally, I desire
              to learn constantly, whether taking online courses, reading blogs,
              debugging code, or tutoring others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
