import * as React from "react";
import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", role: "" });
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
        setToast({ type: "success", text: "Message sent! Cesar will reply within 48 hours." });
        setFormData({ name: "", email: "", message: "", role: "" });
      } else {
        setToast({ type: "error", text: "Failed to send. Please try again." });
      }
    } catch {
      setToast({ type: "error", text: "Network error. Please try again." });
    }
    setLoading(false);
    setTimeout(() => setToast(null), 4000);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-app-border bg-app-card text-app-text placeholder:text-app-muted focus:border-app-accent focus:ring-2 focus:ring-app-accent/20 outline-none transition-all duration-200 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-app-accent";

  return (
<<<<<<< Updated upstream
    <section
      id="contact"
      className="bg-app-background text-app-text py-20 dark:bg-[#080D1A] dark:text-slate-100 transition-colors duration-500"
    >
      {/* Toast */}
=======
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-100 to-slate-200 relative px-4 py-12 dark:from-[#243b55] dark:to-[#141e30]">
      {/* Toast notification */}
>>>>>>> Stashed changes
      {toast && (
        <div
          className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-xl shadow-lg text-white text-sm font-semibold transition-all duration-300 ${toast.type === "success" ? "bg-emerald-500" : "bg-red-500"}`}
        >
          {toast.text}
        </div>
      )}

<<<<<<< Updated upstream
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.4em] text-app-accent mb-3">Contact</p>
          <h2 className="text-4xl font-bold text-app-text dark:text-white mb-4">
            Let&apos;s Work Together
=======
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* ✅ Info panel — phone removed, address is just city */}
        <div className="max-w-lg mx-auto bg-white/80 p-8 rounded-lg shadow-[0_15px_25px_rgba(0,0,0,0.1)] dark:bg-black/50 dark:shadow-[0_15px_25px_rgba(0,0,0,0.6)]">
          <h2 className="text-3xl text-center font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-400">
              Talk to Me
            </span>
>>>>>>> Stashed changes
          </h2>
          <p className="text-app-muted dark:text-slate-400 max-w-xl mx-auto text-sm">
            Open to full-time roles, contract projects, and meaningful collaborations.
          </p>
        </div>

<<<<<<< Updated upstream
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Info panel */}
          <div className="rounded-2xl border border-app-border bg-app-surface p-8 flex flex-col justify-between dark:border-slate-700/50 dark:bg-slate-800/60">
=======
        {/* Contact form */}
        <div className="bg-white/80 p-8 rounded-lg shadow-[0_15px_25px_rgba(0,0,0,0.1)] dark:bg-black/50 dark:shadow-[0_15px_25px_rgba(0,0,0,0.6)]">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500">
              Contact
            </span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
>>>>>>> Stashed changes
            <div>
              <h3 className="text-2xl font-bold text-app-text dark:text-white mb-2">Talk to Me</h3>
              <p className="text-app-muted dark:text-slate-400 text-sm leading-relaxed mb-8">
                I&apos;m open to discussing employment opportunities, full stack projects, AI
                integrations, and business propositions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-app-accent flex-shrink-0" />
                  <span className="text-app-text dark:text-slate-200 text-sm select-all">
                    cesar.aguilar.dev@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-app-accent flex-shrink-0" />
                  <span className="text-app-text dark:text-slate-200 text-sm">Los Angeles, CA</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="inline-flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/10 px-5 py-2.5 rounded-full text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                Available for full-time &amp; contract roles
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-app-border bg-app-surface p-8 dark:border-slate-700/50 dark:bg-slate-800/60">
            <h3 className="text-xl font-bold text-app-text dark:text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                  className={inputClass}
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
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="role" className="sr-only">
                  Who are you
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className={inputClass}
                >
                  <option value="">Who are you?</option>
                  <option value="recruiter">Hiring Manager / Recruiter</option>
                  <option value="collaboration">Project Collaboration</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Your Message"
                  className={`${inputClass} resize-none`}
                />
              </div>

              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ display: "none" }}
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-app-accent hover:bg-app-accent-dim text-[#080D1A] font-semibold text-sm tracking-wide transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Sending…" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
