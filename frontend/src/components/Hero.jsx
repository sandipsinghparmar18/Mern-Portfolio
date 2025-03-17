import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="hero"
      className="hero-section pt-24 min-h-screen flex items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
      data-aos="fade-up"
    >
      <div className="container mx-auto text-center py-24 px-6">
        <h1 className="text-6xl font-bold text-white drop-shadow-lg">
          Welcome to My Portfolio
        </h1>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          I am a passionate Full-Stack Developer who loves building scalable and
          efficient applications.
        </p>
        <div className="mt-10 flex justify-center gap-1">
          <a
            href="http://linkedin.com/in/sandip-singh-parmar-b29034251"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 text-white rounded-full flex items-center gap-2 hover:bg-gray-900 transition duration-300 shadow-lg"
          >
            <FaLinkedin size={24} /> LinkedIn
          </a>
          <a
            href="https://github.com/sandipsinghparmar18"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 text-white rounded-full flex items-center gap-2 hover:bg-gray-900 transition duration-300 shadow-lg"
          >
            <FaGithub size={24} /> GitHub
          </a>
        </div>

        <a href="#about">
          <button className="mt-20 px-6 py-2 bg-blue-700 text-white text-lg rounded-full hover:bg-blue-600 transition duration-300 shadow-lg">
            Learn More
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
