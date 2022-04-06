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
            <p className="content-start">Welcome </p>
            <p>To My Website</p>
          </div>
          <div>
            <p className="sm: text-xl leading-relaxed">
              {" "}
              My name is Dmitriy Malayev. Feel free to explore all the webpages of this website via the navigation links above. Also connect with me via the social icons on the left side of the screen. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// import React from "react";

// const Home = () => {
//   return (
//     <div name="home" className="w-full h-screen  bg-slate-500 text-slate-300">
//       <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-auto">
//         <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
//            <div className="sm:text-right pb-8 pl-4">
//         <p className="text-orange-300 text-4xl font-dance">
//           Hello my name is Dmitriy Malayev
//           <h3 className="sm:text-3xl font-bold text-slate-300 font-dance">
//             I'm a Full Stack Software Engineer
//           </h3>
//           </p>
//           </div>
//           </div>

//         <p className="text-slate-300 py-4 max-w-[500px] ">
//           I am a Full-Stack Software Engineer with a background in Data
//           Communications, Computer Science, and Account Management. <br /> I
//           have a personable personality and solid skills in team-building,
//           project management, web development, and UI Design.
//           <br />
//           Additionally, I desire to learn constantly, whether taking online
//           courses, reading blogs, debugging code, or tutoring others.
//           <br />
//           <br />
//           <button className="text-orange-300 hover:font-bold hover:border-orange-500">
//             View My Work
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Home;
