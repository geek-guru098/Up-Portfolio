import React, { useState } from "react";
import pic from "../../public/logo.avif";
import { TiThMenu } from "react-icons/ti";
import { IoCloseCircle } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "projects" },
    { id: 3, text: "Xperience" }, // Fixed spelling to "Experience"
    { id: 4, text: "Contact" },
    { id: 5, text: "About" },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center space-x-2">
          <img src={pic} className="h-12 w-12 rounded-full" alt="Logo" />
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold cursor-pointer">
              <span className="text-blue-700 text-2xl">Santos Ayer</span>
            </h1>
            <p className="text-sm">Unemployed</p>
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <div
            onClick={() => setMenu(!menu)}
            className="text-2xl cursor-pointer"
          >
            {menu ? <IoCloseCircle /> : <TiThMenu />}
          </div>
        </div>
        <div className="hidden md:flex">
          <ul className="flex space-x-8 font-semibold">
            {navItems.map(({ id, text }) => (
              <li
                className="relative p-2 md:p-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer"
                key={id}
              >
                <Link
                  to={text.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  className="relative z-10 px-4 py-2 rounded-full transition-colors duration-300 ease-in-out bg-white hover:bg-blue-100"
                >
                  {text}
                </Link>
                <span className="absolute inset-0 rounded-full border-2 border-transparent opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 bg-gradient-radial from-blue-400 to-blue-600"></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {menu && (
        <div className="md:hidden">
          <ul className="space-y-4 mt-4 font-semibold">
            {navItems.map(({ id, text }) => (
              <li
                className="relative p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer"
                key={id}
              >
                <Link
                  to={text.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  className="relative z-10 px-4 py-2 rounded-full transition-colors duration-300 ease-in-out bg-white hover:bg-blue-100"
                >
                  {text}
                </Link>
                <span className="absolute inset-0 rounded-full border-2 border-transparent opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 bg-gradient-radial from-blue-400 to-blue-600"></span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
