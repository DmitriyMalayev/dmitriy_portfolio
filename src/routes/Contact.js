import React from "react";
const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full pt-24 lg:h-screen lg:pt-0 text-slate-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <form
          method="POST"
          action="https://getform.io/f/a30d9116-d1d7-44e9-9b87-1b526592e428"
          className="flex flex-col max-w-[600px] w-full border-8 p-12 pb-6 text-xl"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-orange-600 text-cyan-100 ">
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
          <div className="grid grid-cols-1  sm:grid-cols-2 gap-2  ">
            <input
              className=" p-2 w-full custom-ring rounded-lg"
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              className=" p-2 w-full custom-ring rounded-lg"
              type="email"
              placeholder="Email"
              name="email"
            />
            <input
              className=" p-2 w-full custom-ring rounded-lg"
              type="text"
              placeholder="Website"
              name="website"
            />
            <input
              className=" p-2 w-full custom-ring rounded-lg"
              type="text"
              placeholder="LinkedIn"
              name="linkedin"
            />
            <textarea
              className="p-2 w-full sm:col-span-2 custom-ring rounded-lg"
              name="message"
              row="10"
              placeholder="Message"
            ></textarea>
          </div>

          <button className="bg-slate-800 hover:blue-500 hover:bg-orange-600 px-8 py-4 my-8 mx-auto flex items-center outline-none font-dance w-full sm:w-auto justify-center">
            Let's Collaberate
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
