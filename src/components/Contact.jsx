import * as React from "react";
import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    role: "",
  });

  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/xovkeoew", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setToast({ type: "success", text: "✅ Message sent! Cesar will reply within 48 hours." });
        setFormData({ name: "", email: "", message: "", role: "" });
      } else {
        setToast({ type: "error", text: "❌ Failed to send. Please try again." });
      }
    } catch {
      setToast({ type: "error", text: "⚠️ Network error. Please try again." });
    }
    setLoading(false);
    setTimeout(() => setToast(null), 4000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-100 to-slate-200 relative px-4 py-12 dark:from-[#243b55] dark:to-[#141e30]">
      {/* Toast notification */}
      {toast && (
        <div
          className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg text-white text-sm font-semibold transition-all duration-300 ${
            toast.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {toast.text}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* ✅ Info panel — phone removed, address is just city */}
        <div className="max-w-lg mx-auto bg-white/80 p-8 rounded-lg shadow-[0_15px_25px_rgba(0,0,0,0.1)] dark:bg-black/50 dark:shadow-[0_15px_25px_rgba(0,0,0,0.6)]">
          <h2 className="text-3xl text-center font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-400">
              Talk to Me
            </span>
          </h2>
          <p className="text-white text-lg mb-8 text-center font-mono">
            I'm open to discussing employment opportunities, UX/UI or Full Stack projects, and
            business propositions.
          </p>
          <div className="space-y-5 text-white">
            {/* ✅ Email — displayed for credibility, no mailto: link */}
            <div className="flex items-center justify-center gap-3">
              <FaEnvelope className="text-cyan-400 shrink-0" />
              <span className="font-mono text-lg select-all">cesar.aguilar.dev@gmail.com</span>
            </div>
            {/* ✅ Location — city only, no street address */}
            <div className="flex items-center justify-center gap-3">
              <FaMapMarkerAlt className="text-cyan-400 shrink-0" />
              <span className="font-mono text-lg">Los Angeles, CA</span>
            </div>
          </div>

          {/* ✅ Availability badge */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-2 bg-zinc-800/60 border border-emerald-500/30 px-5 py-2 rounded-full text-sm text-emerald-400 font-medium">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse inline-block"></span>
              Available for full-time &amp; contract roles
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="bg-white/80 p-8 rounded-lg shadow-[0_15px_25px_rgba(0,0,0,0.1)] dark:bg-black/50 dark:shadow-[0_15px_25px_rgba(0,0,0,0.6)]">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500">
              Contact
            </span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 text-white bg-[#1b2735]/70 rounded-md border border-cyan-500/40 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/50 placeholder:text-zinc-500 transition-all duration-300 outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="w-full px-4 py-3 text-white bg-[#1b2735]/70 rounded-md border border-cyan-500/40 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/50 placeholder:text-zinc-500 transition-all duration-300 outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                autoComplete="off"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-3 text-white bg-[#1b2735]/70 rounded-md border border-cyan-500/40 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/50 placeholder:text-zinc-500 transition-all duration-300 outline-none resize-none"
              />
            </div>

            <div>
              <label htmlFor="role" className="sr-only">
                Who are you
              </label>
              <select
                id="role"
                name="role"
                autoComplete="off"
                value={formData.role}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#1b2735]/70 text-white rounded-md border border-cyan-500/40 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/50 outline-none transition-all duration-300"
              >
                <option value="">Select one</option>
                <option value="recruiter">Hiring Manager / Recruiter</option>
                <option value="collaboration">Project Collaboration</option>
              </select>
            </div>

            <label htmlFor="gotcha" className="sr-only">
              Leave this field empty
            </label>
            <input
              id="gotcha"
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ display: "none" }}
            />

            {/* ✅ Fixed submit button — uses standard Tailwind colors, no missing custom classes */}
            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 text-lg font-bold uppercase tracking-wider text-zinc-950 rounded-full bg-cyan-400 hover:bg-cyan-300 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]"
              >
                {loading ? "Sending…" : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
