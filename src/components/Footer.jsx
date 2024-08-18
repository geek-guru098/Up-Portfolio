import React from "react";
import {
  FaLinkedin,
  FaYoutube,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-6">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex items-center justify-center space-x-4">
            <a
              href="https://www.linkedin.com/in/santos-ayer-595b64271/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BAErMwWBBRhm5YakDeXcgiA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://www.youtube.com/@ayercoderx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/ayercoderx/#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare className="text-2xl" />
            </a>
            <a
              href="https://github.com/geek-guru098"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare className="text-2xl" />
            </a>
          </div>
          <div className="mt-4 border-t border-gray-600 pt-4 flex items-center justify-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Ayercoderx. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
