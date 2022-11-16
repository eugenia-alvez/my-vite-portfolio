import React from "react";
import { GiTalk } from "react-icons/gi";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full h-full bg-gradient-to-b from-black via-gray-900 to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Contact
          </p>
          <p className="text-xl mt-10">
            Submit the form below to get in touch with me
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/a56d2297-1c67-40de-afb5-5dace0bec847"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder=">Enter your name_"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder=">Enter your email_"
              className=" my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder=">Enter your message_"
              id=""
              cols="30"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="group text-white w-fit px-6 py-3 my-8 mx-auto flex items-center rounded-md border-2 border-teal-500 border-y-fuchsia-600 cursor-pointer hover:scale-110 duration-300">
              Let's talk
              <span className="group">
                <GiTalk size={25} className="ml-1" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
