import React from "react";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from "./Projects";
import Footer from "./Footer";

// import PageWrapper from "./PageWrapper";
import SimpleSlider from "./SimpleSlider";
// import Resume from "./Resume";
// import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <div
        id="home"
        className="w-full pt-24 lg:h-screen lg:pt-0 text-slate-300"
      >
        <div className="flex flex-col justify-center items-center w-full h-full mx-auto p-4">
          <div className="hidden sm:grid max-w-[1000px] w-full sm:grid-cols-2 gap-8">
            <div className="sm:text-right pb-8 sm:pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-orange-600 text-cyan-100">
                Home
              </p>
            </div>
          </div>

          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 ">
            <div className="pl-8 border-l-4 border-orange-300 space-y-4 sm:pl-0 sm:border-l-0 sm:space-y-0">
              <div className="text-4xl text-cyan-100 font-bold sm:hidden border-orange-600 border-b-4 inline">
                Home
              </div>

              <div className="sm:text-right font-bold font-dance text-2xl sm:text-3xl text-orange-300 ">
                <div>
                  <span>Personable&nbsp;</span>
                  <br />
                  <span>Software Engineer&nbsp;</span>
                  <br />
                  <span>From Queens, NY&nbsp;</span>
                  <br />
                  <br className="hidden sm:block" />
                </div>
              </div>
            </div>
            <div>
              <p className="text-xl lg:text-2xl leading-relaxed sm:pr-8  text-slate-100">
                My name is Dmitriy Malayev. I am a Full-Stack Software Engineer
                that's based in Queens, NY. Please feel free to explore all the
                webpages of this website via the navigation links above. Also
                feel free to connect with me via the social icons on the left
                side of the screen.
              </p>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Skills />
      <SimpleSlider />
      <Projects />
      <Contact />
      <Footer />

      {/* <PageWrapper title="test">
        <div>Test</div>
      </PageWrapper> */}
      {/* <Resume/> */}
    </>
  );
};

export default Home;
