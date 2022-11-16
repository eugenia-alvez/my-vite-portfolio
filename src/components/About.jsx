import React from "react";
/* import euge from "../asserts/imgs/euge.png";*/

const About = () => {
  return (
    <div
      name="About me"
      className="w-full h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto">
        <div className="flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              About me
            </p>
          </div>
          <div className="grid mt-10 shadow-md bg-opacity-70 shadow-gray-200 rounded-lg">
            <p className="text-xl justify-around m-5">
              I'm very interested in joining the web development work field. I'm
              seeking to gain experience, I consider myself as a proactive
              person, with eagerness to improve my quality of life as well as
              grow professionally and personally. I do a lot of research on soft
              skills and team work, I think it's also important to highlight it.
            </p>
            <br />
            <p className="text-xl m-5 mt-0 justify-around">
              I really enjoy sharing words and knowledge. Detail oriented and
              doesn't settle, open to change and easy to adapt. Making things
              happen! 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
/*
<img
src={euge}
alt="my porfile"
className="rounded-2xl scale-50 md:w-full"
/> */
