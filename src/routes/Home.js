import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-slate-500">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-orange-200 text-4xl">
          Hello my name is Dmitriy Malayev
        </p>

        <h2 className="text-4xl sm:text-7xl font-bold text-slate-300">
          I'm a Full Stack Software Engineer
        </h2>
        <p className="text-slate-400 py-4 max-w-[700px]">
          I am a Full-Stack Software Engineer with a background in Data
          Communications, Computer Science, and Account Management. I have a
          personable personality and solid skills in team-building, project
          management, web development, and UI Design. Additionally, I desire to
          learn constantly, whether taking online courses, reading blogs,
          debugging code, or tutoring others.
        </p>
      </div>
      <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-orange-600 hover:border-orange-500">
        View My Work
        <span className="group-hover:rotate-90 duration-300">
          <HiArrowNarrowRight className="ml-3" />{" "}
        </span>
      </button>
    </div>
  );
};

export default Home;
