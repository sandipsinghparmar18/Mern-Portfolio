import React from 'react';

function Hero() {
  return (
    <section id="hero" className="hero-section pt-20" data-aos="fade-up">
      <div className="container mx-auto text-center py-20 px-4">
        <h1 className="text-5xl font-bold text-white">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg text-gray-200">I am a passionate developer...</p>
        <a href="#about">
          <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">
            Learn More
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
