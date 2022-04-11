// import React from "react";

// const Contact = () => {
//   return (
//     <div id="contact" className="container mx-auto h-screen bg-red-500">
//       <h1>Hello 1</h1>
//     </div>
//   );
// }

// export default Contact;

import React from "react";
const Contact = () => {
  return (
    <div id="contact" className="w-full h-screen bg-slate-500 text-slate-300">
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <form
          method="POST"
          action="https://getform.io/f/a30d9116-d1d7-44e9-9b87-1b526592e428"
          className="flex flex-col max-w-[600px] w-full border-8 p-12 pb-6 text-xl"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-orange-600 text-slate-300">
              Contact
            </p>
            <p className="text-slate-300 py-4">
              Submit the form below or send me an email at {/*  */}
              <a
                href="mailto:dmitriy.malayev@gmail.com"
                className="text-blue-200 underline"
              >
                dmitriy.malayev@gmail.com
              </a>
            </p>
          </div>
          <input
            className="bg-slate-200 my-2 p-2"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="bg-slate-200 my-2 p-2"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-slate-200 mt-2 p-2"
            name="message"
            row="10"
            placeholder="Message"
          ></textarea>
          <button className="bg-slate-800 border-2 hover:teal-500 hover:bg-orange-600 px-4 py-3 my-8 mx-auto flex items-center text-xl">
            Let's Collaberate
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
