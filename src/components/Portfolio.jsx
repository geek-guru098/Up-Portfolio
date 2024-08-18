import React from "react";
import cpp from "../../public/c++.png";
import css from "../../public/css.png";
import html from "../../public/html.png";
import javascript from "../../public/javascript.png";
import react from "../../public/reactjs.png";
import sql from "../../public/sql.png";
import c from "../../public/c.png";

function Portfolio() {
  const cardItem = [
    { id: 1, name: "C++", logo: cpp },
    { id: 2, name: "CSS", logo: css },
    { id: 3, name: "HTML", logo: html },
    { id: 4, name: "JavaScript", logo: javascript },
    { id: 6, name: "React", logo: react },
    { id: 7, name: "SQL", logo: sql },
    { id: 9, name: "C", logo: c },
  ];

  return (
    <div
      id="projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 text-left">Featured Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-5">
          {cardItem.map(({ name, id, logo }) => (
            <div
              className="flex flex-col items-center justify-center md:h-[300px] md:w-[300px] border-[2px] rounded-full shadow-lg p-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:scale-105 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px] mb-3"
                alt={`${name} logo`}
              />
              <div className="font-bold text-xl mb-2">{name}</div>
              <p className="text-gray-900 mb-4">Click here</p>
              <button className="bg-blue-800 text-white font-bold px-6 py-2 rounded-full hover:bg-blue-900 transition-transform duration-200">
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
