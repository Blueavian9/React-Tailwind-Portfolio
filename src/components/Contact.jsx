import * as React from "react";
import { useState } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    role: "",
  });

  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://formspree.io/f/xovkeoew", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setToast({ type: "success", text: "✅ Message sent successfully!" });
        setFormData({ name: "", email: "", message: "", role: "" });
      } else {
        setToast({
          type: "error",
          text: "❌ Failed to send. Please try again.",
        });
      }
    } catch {
      setToast({ type: "error", text: "⚠️ Network error. Please try again." });
    }
    setTimeout(() => setToast(null), 4000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#243b55] to-[#141e30] relative">
      {toast && (
        <div
          className={`fixed top-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg text-white text-sm font-semibold transition-all duration-300 ${
            toast.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {toast.text}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-8">
        {/* Info panel */}
        <div className="max-w-lg mx-auto bg-black bg-opacity-50 p-8 rounded-lg shadow-[0_15px_25px_rgba(0,0,0,0.6)]">
          <h2 className="text-3xl text-center font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-400">
              Talk to Me
            </span>
          </h2>
          <p className="text-white text-lg mb-6 text-center font-mono">
            I'm open to discussing employment opportunities, UX/UI or Full Stack
            projects, or business propositions.
          </p>
          <div className="space-y-4 text-white">
            <div className="flex items-center justify-center">
              <FaPhone className="mr-3 text-cyan-400" />
              <strong className="font-mono text-lg">+123 456 7890</strong>
            </div>
            <div className="flex items-center justify-center">
              <FaEnvelope className="mr-3 text-cyan-400" />
              <strong className="font-mono text-lg">
                blueavian9@gmail.com
              </strong>
            </div>
            <div className="flex items-center justify-center">
              <FaMapMarkedAlt className="mr-3 text-cyan-400" />
              <strong className="font-mono text-lg">
                Los Angeles, USA
              </strong>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-[0_15px_25px_rgba(0,0,0,0.6)]">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500">
              Contact
            </span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Inputs */}
            {["name", "email"].map((field) => (
              <div key={field} className="relative">
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  placeholder={field === "name" ? "Full Name" : "Email"}
                  className="peer w-full px-4 py-3 text-white bg-[#1b2735]/70 rounded-md border border-cyan-500/40 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/50 placeholder-transparent transition-all duration-300 outline-none"
                />
                <label className="absolute left-4 top-3 text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-translate-y-4 peer-focus:text-cyan-300 peer-focus:text-sm transition-all duration-300">
                  {field === "name" ? "Full Name" : "Email"}
                </label>
              </div>
            ))}

            {/* Message */}
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Message"
                className="peer w-full px-4 py-3 text-white bg-[#1b2735]/70 rounded-md border border-cyan-500/40 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/50 placeholder-transparent transition-all duration-300 outline-none resize-none"
              />
              <label className="absolute left-4 top-3 text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-translate-y-4 peer-focus:text-cyan-300 peer-focus:text-sm transition-all duration-300">
                Message
              </label>
            </div>

            {/* Role */}
            <label className="block text-white font-mono">
              Who are you? <span className="text-red-400">*</span>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="mt-2 w-full px-4 py-3 bg-[#1b2735]/70 text-white rounded-md border border-cyan-500/40 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/50 outline-none transition-all duration-300"
              >
                <option value="">Select one</option>
                <option value="recruiter">Hiring Manager / Recruiter</option>
                <option value="collaboration">Project Collaboration</option>
              </select>
            </label>

            {/* Honeypot */}
            <input type="text" name="_gotcha" style={{ display: "none" }} />

            {/* Glow Button */}
            <div className="text-center">
              <button
                type="submit"
                className="
                  relative z-10 w-48 py-3 text-lg font-extrabold uppercase tracking-wider
                  text-white rounded-full
                  bg-gradient-to-r from-glow-cyan via-glow-fuchsia to-glow-violet
                  border border-glow-cyan/40
                  transition-all duration-700 ease-in-out
                  hover:scale-110
                  hover:shadow-[0_0_25px_#22d3ee,0_0_50px_#e879f9,0_0_75px_#a78bfa]
                  focus:shadow-[0_0_25px_#22d3ee,0_0_50px_#e879f9,0_0_75px_#a78bfa]
                  before:content-[''] before:absolute before:inset-0 before:rounded-full
                  before:bg-conic-gradient(from_0deg,theme(colors.glow-cyan),theme(colors.glow-fuchsia),theme(colors.glow-violet),theme(colors.glow-cyan))
                  before:opacity-0 before:blur-2xl
                  hover:before:opacity-40 hover:before:animate-spin-pulse
                "
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
