import React from "react";
// import Photo from "../assets/photo.jpeg";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse  items-center px-6 mx-auto mt-10 space-y-0 md:flex-row">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          {/* space between the y elements */}
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            Hello My Name is Dmitriy. Nice to meet you.
          </h1>
          <p className="max-w-sm text-center text-orange-500 md:text-left"></p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
