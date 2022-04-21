import React from "react";

const Projects = () => {
  return (
    <>
      <div
        id="Projects"
        className="w-full pt-24 lg:h-screen lg:pt-0 text-slate-300"
      >
        <div className="flex flex-col justify-center items-center w-full h-full mx-auto p-4">
          <div className="hidden sm:block max-w-[1000px] w-full ">
            <div className="sm:text-center pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-orange-600 text-cyan-100">
                Projects
              </p>
            </div>
          </div>

          <div className="max-w-[1000px] w-full  ">
            <div className="border-l-4 border-orange-300 space-y-4 sm:pl-0 sm:border-l-0 sm:space-y-0">
              <div className="text-4xl text-cyan-100 font-bold sm:hidden border-orange-600 border-b-4 inline">
                Projects
              </div>

              <div className="   font-bold font-dance text-center  text-2xl sm:text-3xl text-orange-300 ">
                <div>
                  <p> YouTube Playlist Of Apps</p>
                  <br className="hidden sm:block" />
                </div>
              </div>
            </div>

            <div className="w-full sm:max-w-6xl aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/videoseries?list=PLANPLv1uddy2yxI4XkFZkzTf4g3Z7fD1C"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

// const Projects = () => {

//   return (
//     <div
//       id="Projects"
//       className="w-full pt-24 lg:h-screen lg:pt-0 text-slate-300"
//     >
//       <div className="flex flex-col justify-center items-center w-full h-full">
//         <div className="max-w-[1000px] w-full">
//           <div className="sm:text-center pb-8 pl-4 sm:pl-0 smw-full">
//             <p className="text-4xl font-bold inline border-b-4 border-orange-600 text-cyan-100">
//               Projects
//             </p>
//           </div>
//         </div>
//         <div className="w-full sm:w-[1000px]">
//           <div className="sm:text-center font-bold font-dance text-2xl sm:text-3xl text-orange-300 ">
//             <div>

//               <br className="hidden sm:block" />
//             </div>
//           </div>

// </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

// import React from "react";
// // import WorkImg from "../assets/workImg.jpeg";

// // import Recipes from "../assets/recipes.png";
// const Projects = () => {
//   return (
//     <div
//       id="projects"
//       className="w-full pt-24 lg:h-screen lg:pt-0 text-slate-300"
//     >
//       <div className="flex flex-col justify-center items-center w-full h-full">
//         <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
//           <div className="sm:text-right pb-8 pl-4 w-full">
//             <p className="text-4xl font-bold inline border-b-4 border-orange-600 text-cyan-100 ">
//               Projects
//             </p>
//           </div>
//         </div>

//         {/* Container */}
//         <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
//           {/* Grid Item */}

//           {/* Hover Effects */}
//           <div className="opacity-0 group-hover:opacity-100">
//             <span className="text-2xl font-bold text-white tracking-wider">
//               React JS Application
//             </span>

//             <div className="pt-8 text-center">
//               <a href="/">
//                 {" "}
//                 {/* Add Links to projects, apps, reposit, and more */}
//                 <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-700">
//                   Demo
//                 </button>
//               </a>
//               <a href="/">
//                 <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-700">
//                   Code
//                 </button>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

// // import React from "react";
// // // import WorkImg from "../assets/workImg.jpeg";

// // // import Recipes from "../assets/recipes.png";
// // const Work = () => {
// //   return (
// //     <div
// //       id="projects"
// //       className="w-full pt-24 lg:h-screen lg:pt-0 text-slate-300"
// //     >
// //       <div className="flex flex-col justify-center items-center w-full h-full">
// //         <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
// //           <div className="sm:text-right pb-8 pl-4 w-full">
// //             <p className="text-4xl font-bold inline border-b-4 border-orange-600 text-cyan-100 ">
// //               Projects
// //             </p>
// //           </div>
// //         </div>
// //         <div className="w-full sm:w-[1000px]">
// //           <h3 className="text-center font-bold font-dance text-2xl sm:text-3xl text-orange-300">
// //             YouTube Playlist Of Apps.
// //           </h3>
// //         </div>
// //         <div className="w-full sm:max-w-6xl aspect-video">
// //           <iframe
// //             className="w-full h-full"
// //             src="https://www.youtube.com/embed/videoseries?list=PLANPLv1uddy2yxI4XkFZkzTf4g3Z7fD1C"
// //             title="YouTube video player"
// //             frameborder="0"
// //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// //             allowfullscreen
// //           ></iframe>
// //         </div>

// //         {/* Container */}
// //         <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
// //           {/* Grid Item */}

// //           {/* Hover Effects */}
// //           <div className="opacity-0 group-hover:opacity-100">
// //             <span className="text-2xl font-bold text-white tracking-wider">
// //               React JS Application
// //             </span>

// //             <div className="pt-8 text-center">
// //               <a href="/">
// //                 {" "}
// //                 {/* Add Links to projects, apps, reposit, and more */}
// //                 <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-700">
// //                   Demo
// //                 </button>
// //               </a>
// //               <a href="/">
// //                 <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-700">
// //                   Code
// //                 </button>
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Work;
