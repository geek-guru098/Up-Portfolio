import React from "react";
import pic from "../../public/logo.avif";
import {
  FaLinkedin,
  FaYoutube,
  FaInstagramSquare,
  FaGithubSquare,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { ReactTyped } from "react-typed";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiCyberdefenders, SiMysql } from "react-icons/si";

function Home() {
  return (
    <div
      name="Home"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
          <span className="text-xl">Welcome !!</span>
          <div className="flex space-x-1 text-2xl md:text-4xl">
            <h1>Hello, I'm a</h1>
            <ReactTyped
              className="text-blue-700 font-bold"
              strings={[
                "Programmer",
                "Coder",
                "Designer",
                "Front-End Developer",
                "Cyber Enthusiast",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            />
          </div>
          <br />
          <p className="text-base md:text-lg text-justify">
            A budding programmer and coder with a passion for front-end
            development and design. As a beginner, you are eager to learn and
            grow in creating user-friendly and visually engaging web interfaces.
            With a strong interest in cybersecurity, you are also exploring the
            fundamentals of cyber defense to build secure applications.
            Enthusiastic and driven, you are committed to developing skills
            across these areas to contribute to innovative and safe web
            solutions.
          </p>

          <br />
          {/* social media icons */}
          <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
            <div className="space-y-2">
              <h1 className="font-bold text-center">Connect with me </h1>
              <ul className="flex space-x-5">
                <li key="linkedin">
                  <a
                    href="https://www.linkedin.com/in/santos-ayer-595b64271/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BW8nWjFH6TpiUF1ibeyzwLw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="text-2xl hover:scale-110 cursor-pointer duration-200" />
                  </a>
                </li>
                <li key="youtube">
                  <a
                    href="https://www.youtube.com/@ayercoderx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube className="text-2xl hover:scale-110 cursor-pointer duration-200" />
                  </a>
                </li>
                <li key="instagram">
                  <a
                    href="https://www.instagram.com/ayercoderx/#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagramSquare className="text-2xl hover:scale-110 cursor-pointer duration-200" />
                  </a>
                </li>
                <li key="github">
                  <a
                    href="https://github.com/geek-guru098"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithubSquare className="text-2xl hover:scale-110 cursor-pointer duration-200" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h1 className="font-bold text-center">Currently working on</h1>
              <div className="flex space-x-5">
                <a
                  href="https://cyberdefenders.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiCyberdefenders
                    key="cyberdefenders"
                    className="text-2xl md:text-3xl hover:scale-110 cursor-pointer duration-200 rounded-full border-[2px]"
                  />
                </a>
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiTailwindCssFill
                    key="tailwind"
                    className="text-2xl md:text-3xl hover:scale-110 cursor-pointer duration-200 rounded-full border-[2px]"
                  />
                </a>
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaReact
                    key="react"
                    className="text-2xl md:text-3xl hover:scale-110 cursor-pointer duration-200 rounded-full border-[2px]"
                  />
                </a>
                <a
                  href="https://nodejs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaNodeJs
                    key="nodejs"
                    className="text-2xl md:text-3xl hover:scale-110 cursor-pointer duration-200 rounded-full border-[2px]"
                  />
                </a>
                <a
                  href="https://www.mysql.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiMysql
                    key="mysql"
                    className="text-2xl md:text-3xl hover:scale-110 cursor-pointer duration-200 rounded-full border-[2px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1"
          style={{ marginTop: "-50px" }}
        >
          {" "}
          {/* Adjust the value as needed */}
          <img
            src={pic}
            className="rounded-full md:w-[450px] md:h-[450px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
