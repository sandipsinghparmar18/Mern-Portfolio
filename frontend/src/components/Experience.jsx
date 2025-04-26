import React from "react";

function Experience() {
  return (
    <section
      id="experience"
      className="py-16 bg-gray-50 px-6 md:px-12 lg:px-24"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Experience</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Practical hands-on experience with industry-level web development
            projects during my internship.
          </p>
        </div>

        {/* Experience Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-gray-800">
            Web Developer (MERN Stack) Intern
          </h3>
          <p className="text-gray-600 mt-2">
            Signimus Technology Pvt Ltd — Indore, India
          </p>
          <p className="text-gray-500 italic mt-1">January 2025 - April 2025</p>

          <ul className="list-disc list-inside mt-6 space-y-3 text-gray-700">
            <li>
              Developed and maintained full-stack applications using the MERN
              stack.
            </li>
            <li>
              Collaborated with cross-functional teams to design scalable
              solutions.
            </li>
            <li>
              Improved frontend performance and created responsive UI designs.
            </li>
            <li>
              Worked with Git version control and followed Agile methodologies.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
