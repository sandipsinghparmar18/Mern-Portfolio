import React from "react";
import profilePic from "../assets/profile.png";

function About() {
  return (
    <section
      id="about"
      className="about-section py-16 bg-gray-50 px-6 md:px-12 lg:px-24"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A passionate software developer with expertise in DSA using Java
            and full-stack development with the MERN stack.
          </p>
        </div>

        {/* About Content */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 md:space-x-10">
          {/* Profile Picture */}
          <div className="md:w-1/3 text-center">
            <img
              src={profilePic}
              alt="Profile"
              className="mx-auto w-52 h-52 object-cover rounded-full shadow-lg transform transition duration-500 hover:scale-105"
            />
            <h3 className="text-2xl font-bold text-gray-800 mt-6">Sandip Singh Parmar</h3>
            <p className="text-gray-600">Full-Stack Developer</p>
          </div>

          {/* Skills & Expertise */}
          <div className="md:w-2/3">
            <h3 className="text-3xl font-bold text-gray-800">Skills & Expertise</h3>
            <ul className="mt-6 space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">✔</span> Proficient in
                Java, JavaScript, HTML, and CSS.
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">✔</span> Experienced
                with React, Node.js, Express, and MongoDB
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">✔</span> Strong
                understanding of data structures and algorithms
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">✔</span> Knowledge of
                an open-source CSS framework like Tailwind CSS.
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">✔</span> Excellent
                problem-solving and analytical skills
              </li>
            </ul>

            {/* Interests Section */}
            <h3 className="text-3xl font-bold text-gray-800 mt-12">
              Interests
            </h3>
            <p className="mt-6 text-gray-600 leading-7">
              Beyond coding, I enjoy travling, photography, and exploring new
              technologies. I’m constantly looking for ways to grow and take on
              exciting challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
