import React from "react";
/*import REGGIE from "../asserts/imgs/REGGIE.png";*/
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Hi! I'm Eugenia
            <p className="font-extrabold py-4 text-transparent bg-clip-text bg-gradient-to-l from-teal-500 to-fuchsia-600">
              >Frontend developer_
            </p>
          </h2>
          <div>
            <Link
              to="Portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md border-2 border-teal-500 border-y-fuchsia-600 cursor-pointer hover:scale-105 duration-200"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
