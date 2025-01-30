import React from 'react';
import rentConnectImg from '../assets/rentconnect.png'; // Make sure to replace with the correct path to your image

function Projects() {
  return (
    <section id="projects" className="pt-16 pb-12 px-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 text-center">Projects</h2>
      <div className="mt-8 flex flex-wrap justify-center">
        <a
          href="https://your-project-link.com" // Replace with your project link
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition-transform hover:scale-105"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="bg-white rounded-lg shadow-md max-w-md p-6 m-4 hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 hover:text-white hover:shadow-xl transition duration-300">
            <img
              src={rentConnectImg}
              alt="RentConnect Project"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 hover:text-white">RentConnect</h3>
            <p className="text-gray-600 mt-2 hover:text-white">
              A web application inspired by Airbnb, connecting property owners and renters. Built with
              JavaScript, EJS, Express, Node.js, and MongoDB.
            </p>
          </div>
        </a>
        {/* Add more project cards here */}
        <a
          href="https://your-second-project-link.com" // Replace with your second project link
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition-transform hover:scale-105"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="bg-white rounded-lg shadow-md max-w-md p-6 m-4 hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 hover:text-white hover:shadow-xl transition duration-300">
            <img
              src={rentConnectImg}
              alt="Second Project"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 hover:text-white">Second Project</h3>
            <p className="text-gray-600 mt-2 hover:text-white">
              Description of the second project. Built with relevant technologies.
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Projects;
