import React from "react";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-scren text-slate-300 bg-slate-500">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-slate-300 border-orange-600">
            Work
          </p>
          <p className="py-6">My Recent Work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="shadow-lg shadow-slate-800 group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div>
              <span></span>
              <div>
                <a href="/">
                  <button></button>
                </a>
                <a href="/">
                  <button></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
