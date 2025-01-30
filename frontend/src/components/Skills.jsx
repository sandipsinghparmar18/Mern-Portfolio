import React from 'react';

function Skills() {
  const skills = [
    { name: 'HTML5', percentage: 90 },
    { name: 'CSS3', percentage: 85 },
    { name: 'JavaScript', percentage: 94 },
    { name: 'Tailwind CSS', percentage: 88 },
    { name: 'RESTful APIs', percentage: 85 },
    { name: 'Node.js', percentage: 87 },
    { name: 'React.js', percentage: 92 },
    { name: 'Express.js', percentage: 89 },
    { name: 'MongoDB', percentage: 86 },
    { name: 'EJS', percentage: 83 },
  ];

  return (
    <section id="skills" className="py-16 px-8 bg-gray-100">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay={`${index * 100}`}
          >
            <div className="relative w-24 h-24 mb-4">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="50%"
                  cy="50%"
                  r="38%"
                  stroke="gray"
                  strokeWidth="8"
                  fill="none"
                  className="text-gray-300"
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r="38%"
                  stroke="teal"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray="240"
                  strokeDashoffset={`${240 - (240 * skill.percentage) / 100}`}
                  className="text-teal-500"
                  style={{
                    transition: 'stroke-dashoffset 0.5s ease-in-out',
                  }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-gray-700">
                {skill.percentage}%
              </div>
            </div>
            <p className="text-lg font-medium text-gray-800">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
