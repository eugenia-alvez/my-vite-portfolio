import React from "react";
import css from "../assets/imgs/css.png";
import html from "../assets/imgs/html.png";
import javascript from "../assets/imgs/javascript.png";
import tailwind from "../assets/imgs/tailwind.png";
import react from "../assets/imgs/react.png";
import github from "../assets/imgs/github.png";
import git from "../assets/imgs/git.png";
import vite from "../assets/imgs/vite.png";

const Experience = () => {
  const logs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 4,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 5,
      src: react,
      title: "React JS",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: git,
      title: "Git",
      style: "shadow-orange-400",
    },
    {
      id: 8,
      src: vite,
      title: "Vite JS",
      style: "shadow-pink-400",
    },
  ];

  return (
    <div
      name="Experience"
      className="bg-gradient-to-b from-gray-800 via-gray-900 to-black w-full h-full place-content-center"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="text-xl mt-10">
            These are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {logs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
