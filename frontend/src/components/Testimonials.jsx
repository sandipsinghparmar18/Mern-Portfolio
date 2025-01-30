import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      quote: 'A talented developer with exceptional problem-solving skills!',
      name: 'John Doe',
      role: 'Team Lead',
    },
    {
      quote: 'Delivered high-quality code and collaborated effectively.',
      name: 'Jane Smith',
      role: 'Project Manager',
    },
  ];

  return (
    <section id="testimonials" className="pt-16 pb-12 px-8 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 text-center">Testimonials</h2>
      <div className="mt-8 flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow-md max-w-sm p-6 m-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            <h4 className="mt-4 text-gray-800 font-bold">{testimonial.name}</h4>
            <p className="text-gray-600 text-sm">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
