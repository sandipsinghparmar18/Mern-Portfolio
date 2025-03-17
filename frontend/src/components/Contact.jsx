import React, { useState } from "react";
import axios from "axios";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(
        "https://mern-portfolio-backend-qum0.onrender.com/send",
        formData
      );
      setSubmitted(true);
      setShowMessage(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    } catch (error) {
      console.error("Error sending email", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Get in Touch</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly chat.
          </p>
        </div>

        <div className="flex flex-col items-center mb-8 space-y-4 text-center">
          <p className="flex items-center gap-2 text-lg">
            <FaEnvelope />{" "}
            <a
              href="mailto:sandipsinghparmar18@gmail.com"
              className="text-blue-400 hover:underline"
            >
              sandipsinghparmar18@gmail.com
            </a>
          </p>
          <p className="flex items-center gap-2 text-lg">
            <FaPhone /> <span>+91 7879956069</span>
          </p>
          <div className="flex space-x-4">
            <a
              href="http://linkedin.com/in/sandip-singh-parmar-b29034251"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/sandipsinghparmar18"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 text-2xl"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label
              className="block text-gray-400 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-3 py-2 text-gray-900 border rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-400 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 text-gray-900 border rounded-lg focus:outline-none focus:shadow-outline"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-400 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-3 py-2 text-gray-900 border rounded-lg focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="text-center relative">
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="loader"></div>
              </div>
            )}
          </div>
        </form>
        {showMessage && (
          <div className="mt-4 text-center text-green-500 fade-in-out show">
            Thanks for reaching out! Your message has been sent.
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
