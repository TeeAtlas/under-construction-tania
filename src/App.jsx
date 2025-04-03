import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import icons
import "./index.css";

export default function app() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-xl md:text-2xl font-bold">Hello, I'm Tania and I'm Under Construction</h1>
      <p className="mt-1 text-sm md:text-base">
        Please follow the links for more information :)
      </p>
      <h1 className="text-xl md:text-2xl font-bold mb-4">
      </h1>
      <img src="/assets/sun.jpg" alt="Sun" className="rounded-lg " />

      {/* Navigation Links */}
      <nav className="flex mt-2 gap-2 md:gap-4">
        <a
          href="https://github.com/TeeAtlas/"
          className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <FaGithub className="h-4 w-4 md:h-6 md:w-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/tania-boterman/"
          className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <FaLinkedin className="h-4 w-4 md:h-6 md:w-6" />
        </a>
        <a
          href="mailto:taniaboterman@gmail.com"
          className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <FaEnvelope className="h-4 w-4 md:h-6 md:w-6" />
        </a>
      </nav>
      <footer>
        <p className="text-sm md:text-base">
          <span className= "text-gray-600">taniaboterman@gmail.com</span>
        </p>
      </footer>
    </div>
  );
}