import React from "react";
import Photo from "../assets/photo.jpeg";

const About = () => {
  return (
    <div id="about" className="w-full pt-24 lg:h-screen lg:pt-0 text-slate-300">
      <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 ">
        <div className="pl-8 border-l-4 border-orange-300 space-y-4 sm:pl-0 sm:border-l-0 sm:space-y-0">
          <div className="text-4xl text-cyan-100 font-bold sm:hidden border-orange-600 border-b-4 inline">
            About
          </div>

          <div className="sm:text-right font-bold font-dance text-2xl sm:text-3xl text-orange-300 ">
            <div>
              <span>Educated, &nbsp;</span>
              <br />
              <span>Experienced &&nbsp;</span>
              <br />
              <span>Certified &nbsp;</span>

              <br className="hidden sm:block" />
            </div>
          </div>
        </div>
        <div>
          <p className="text-xl lg:text-2xl  leading-relaxed p-4 text-slate-100">
            I am a Full-Stack Software Engineer with a background in Data
            Communications, Computer Science, and Account Management. I have a
            personable personality and solid skills in team-building, project
            management, web development, and UI Design. I have over three years
            of experience, a Bachelor of Science degree in Data Communications
            and Computer Science, and several certifications available in the
            next section. Additionally, I desire to learn constantly, whether
            taking online courses, reading blogs, debugging code, or tutoring
            others.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
