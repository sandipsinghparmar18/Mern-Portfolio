import React from 'react';
import chatAppImage from '../assets/chatApp.webp'; // Make sure to replace with the correct path to your image
import videotubeImage from '../assets/videotube.webp';

function Projects() {
  return (
    <section id="projects" className="pt-16 pb-12 px-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 text-center">Projects</h2>
      <div className="mt-8 flex flex-wrap justify-center">
        <a
          href="https://videotubedist.onrender.com" // Replace with your project link
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition-transform hover:scale-105"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="bg-white rounded-lg shadow-md max-w-md p-6 m-4 hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 hover:text-white hover:shadow-xl transition duration-300">
            <img
              src={videotubeImage}
              alt="RentConnect Project"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 hover:text-white">VideoTube</h3>
            <p className="text-gray-600 mt-2 hover:text-white">
            VideoTube is a video-sharing platform built with React (Vite), Tailwind CSS, Node.js,
             and Express, featuring video uploads, likes, comments, subscriptions, and authentication. 
             It integrates Cloudinary for media storage, offering a seamless user experience with a 
             YouTube-inspired UI. 🚀.
            </p>
          </div>
        </a>
        {/* Add more project cards here */}
        <a
          href="https://realtime-chating.netlify.app" 
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition-transform hover:scale-105"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="bg-white rounded-lg shadow-md max-w-md p-6 m-4 hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 hover:text-white hover:shadow-xl transition duration-300">
            <img
              src={chatAppImage}
              alt="Second Project"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 hover:text-white">Real-Time ChatApp</h3>
            <p className="text-gray-600 mt-2 hover:text-white">
            Real-Time Chat Application – A MERN stack chat app with Socket.io for real-time messaging, 
            JWT authentication for secure login, and MongoDB for message storage. 
            Features include instant chat updates, real-time notification, and a fast React Vite UI for 
            a seamless experience. 🚀
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Projects;
