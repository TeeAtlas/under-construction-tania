import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import icons
import "./styles.css";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-xl md:text-2xl font-bold">Hello, I'm Tania</h1>
      <h1 className="text-xl md:text-2xl font-bold mb-4">
        🚧 I'm Under Construction 🚧
      </h1>
      <img src="../assets/sun.jpg" alt="Sun" className="rounded-lg " />
      <p className="mt-4 text-sm md:text-base">
        Please follow the links for more information :)
      </p>

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
        <p className="mt-4 text-sm md:text-base">
          My email:{" "}
          <span className="text-blue-500">taniaboterman@gmail.com</span>
        </p>
      </footer>
    </div>
  );
}
