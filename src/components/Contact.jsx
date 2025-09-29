import * as React from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#243b55] to-[#141e30]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-8">
        {/* Left: Talk to Me */}
        <div className="max-w-lg mx-auto bg-black bg-opacity-50 p-8 rounded-lg shadow-[0_15px_25px_rgba(0,0,0,0.6)] mb-8">
          <h2 className="text-3xl text-center font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-400">
              Talk to Me
            </span>
          </h2>
          <p className="text-white text-lg mb-6 text-center font-mono">
            I'm open to discussing employment opportunities, UI/UX & Full-Stack
            projects, or serious business propositions.
          </p>

          <div className="space-y-4 text-white">
            <div className="flex items-center justify-center">
              <FaPhone className="mr-3 text-cyan-400" />
              <span className="font-mono text-lg">
                <strong>+123&nbsp;456&nbsp;7890</strong>
              </span>
            </div>

            <div className="flex items-center justify-center">
              <FaEnvelope className="mr-3 text-cyan-400" />
              <span className="font-mono text-lg">
                <strong>blueavian9@gmail.com</strong>
              </span>
            </div>

            <div className="flex items-center justify-center">
              <FaMapMarkedAlt className="mr-3 text-cyan-400" />
              <span className="font-mono text-lg">
                <strong>Los Angeles, CA, USA</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-[0_15px_25px_rgba(0,0,0,0.6)]">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500">
              Contact
            </span>
          </h2>

          <form
            action="https://formspree.io/f/xovkeoew"
            method="POST"
            className="space-y-6"
            data-captcha="true"
          >
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                name="name"
                required
                className="w-full px-0 py-1.5 text-sm text-white bg-transparent border-b border-white focus:outline-none focus:border-[#03e9f4] peer"
              />
              <label className="absolute left-0 top-2 text-white text-sm transition-all duration-300 origin-0 peer-focus:text-[#03e9f4] peer-focus:text-xs peer-focus:-translate-y-5 peer-valid:text-xs peer-valid:-translate-y-5">
                Full Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                required
                className="w-full px-0 py-1.5 text-sm text-white bg-transparent border-b border-white focus:outline-none focus:border-[#03e9f4] peer"
              />
              <label className="absolute left-0 top-2 text-white text-sm transition-all duration-300 origin-0 peer-focus:text-[#03e9f4] peer-focus:text-xs peer-focus:-translate-y-5 peer-valid:text-xs peer-valid:-translate-y-5">
                Email
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                name="message"
                rows="4"
                required
                className="w-full px-0 py-1.5 text-sm text-white bg-transparent border-b border-white focus:outline-none focus:border-[#03e9f4] peer resize-none"
              ></textarea>
              <label className="absolute left-0 top-2 text-white text-sm transition-all duration-300 origin-0 peer-focus:text-[#03e9f4] peer-focus:text-xs peer-focus:-translate-y-5 peer-valid:text-xs peer-valid:-translate-y-5">
                Message
              </label>
            </div>

            {/* Anti-spam honeypot */}
            <input type="text" name="_gotcha" style={{ display: "none" }} />

            {/* Recruiter filter */}
            <label className="block text-white">
              Who are you? <span className="text-red-400">*</span>
              <select
                name="role"
                required
                className="w-full px-3 py-2 mt-1 text-black rounded"
              >
                <option value="">Select one</option>
                <option value="recruiter">Hiring Manager / Recruiter</option>
                <option value="collaboration">Project Collaboration</option>
              </select>
            </label>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="relative z-10 w-1/4 py-1.5 text-sm text-cyan-100 hover:text-black font-semibold uppercase tracking-wide rounded-md bg-gradient-to-r from-blue-600 to-blue-600 hover:from-cyan-300 hover:to-cyan-300 border-4 border-transparent hover:border-[#00ffff] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75 hover:shadow-[0_0_15px_rgba(0,255,255,0.7),0_0_25px_rgba(0,255,255,0.7),0_0_35px_rgba(0,255,255,0.8)] transition-all duration-300 ease-in-out"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
