import React from "react";
import todolist from "../assets/imgs/todolist.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: todolist,
    },
  ];

  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black via-gray-900 to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="text-xl mt-10">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-8 ">
          {portfolios.map(({ id, src }) => (
            <div
              key={id}
              className="bg-opacity-50 shadow-md shadow-gray-600 rounded-lg"
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href="https://github.com/eugenia-alvez/reactjs-todoapp/blob/main/README.md">
                    Description
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href="https://github.com/eugenia-alvez/reactjs-todoapp">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
