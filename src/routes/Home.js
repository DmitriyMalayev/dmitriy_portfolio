import React from "react";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-slate-500 text-slate-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-orange-600">
              Home
            </p>
          </div>
        </div>
        
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Welcome <br/>To My Website</p>
          </div>
          <div>
            <p className="sm: text-xl leading-relaxed">
              {" "}
              My name is Dmitriy Malayev. Feel free to explore all the webpages of this website via the navigation links above.
              <br/>
              Also feel free to connect with me via the social icons on the left side of the screen. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
