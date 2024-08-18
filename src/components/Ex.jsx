import React from "react";
import cpp from "../../public/c++.png";
import css from "../../public/css.png";
import html from "../../public/html.png";
import javascript from "../../public/javascript.png";
import react from "../../public/reactjs.png";
import sql from "../../public/sql.png";
import c from "../../public/c.png";

function Ex() {
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
      id="xperience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ name, id, logo }) => (
            <div
              className="flex flex-col items-center justify-center rounded-lg p-4 hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[100px] h-[100px] p-2 rounded-full border-[2px]"
                alt={`${name} logo`}
              />
              <div className="font-bold text-lg mt-2 text-center">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ex;
