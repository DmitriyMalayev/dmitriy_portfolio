import React from "react";
import SimpleSlider from "./SimpleSlider.js";

const Certificates = () => {
  return (
    <>
      <div
        id="certificates"
        className="w-full pt-24 lg:h-screen lg:pt-0 text-slate-300"
      >
        <div className="flex flex-col justify-center items-center w-full h-full mx-auto p-2">
          <div className="hidden sm:block max-w-[1000px] w-full ">
            <div className="sm:text-center pb-4">
              <p className="text-4xl font-bold inline border-b-4 border-orange-600 text-cyan-100">
                Certificates
              </p>
            </div>
          </div>

          <div className="max-w-[1000px] w-full">
            <div className="pl-8 border-l-4 border-orange-300 space-y-4 sm:pl-0 sm:border-l-0 sm:space-y-0">
              <div className="text-4xl text-cyan-100 font-bold sm:hidden border-orange-600 border-b-4 inline">
                Certificates
              </div>

              <div className="sm:text-right md:text-center font-bold font-dance text-2xl sm:text-3xl text-orange-300 ">
                <div>
                  <span>My Certificates</span>
                  <br className="hidden sm:block" />
                </div>
              </div>
            </div>
            <SimpleSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificates;
