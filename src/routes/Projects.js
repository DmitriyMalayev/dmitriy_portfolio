import React from "react";
// import WorkImg from "../assets/workImg.jpeg";

// import Recipes from "../assets/recipes.png";
const Work = () => {
  return (
    <div id="projects" className="w-full h-screen  text-slate-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-orange-600 text-cyan-100">
              Projects
            </p>
          </div>
        </div>
        <div>
          <p className="sm:text-xl leading-relaxed mb-6">
            Below is a YouTube playlist of my apps.
          </p>
        </div>
        <div className="w-full sm:max-w-5xl hover:scale-125 aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/videoseries?list=PLANPLv1uddy2yxI4XkFZkzTf4g3Z7fD1C"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          {/* Grid Item */}

          {/* Hover Effects */}
          <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold text-white tracking-wider">
              React JS Application
            </span>

            <div className="pt-8 text-center">
              <a href="/">
                {" "}
                {/* Add Links to projects, apps, reposit, and more */}
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-700">
                  Demo
                </button>
              </a>
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-700">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
