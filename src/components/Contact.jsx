import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Upload, Briefcase, User, Phone as PhoneIcon, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    reason: '',
    message: '',
  });

  const [resumeName, setResumeName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - in production, this would send to backend
    console.log('Application submitted:', formData);
    alert('Thank you for your application! We will review it and get back to you soon.');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, resume: file });
      setResumeName(file.name);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/10 to-slate-950" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our <span className="gradient-text-premium">Team</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Interested in joining Syntria? Reach out to explore opportunities in quantitative trading and AI/ML.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-strong rounded-2xl md:rounded-3xl p-6 md:p-12 space-y-4 md:space-y-6 hover:glow-effect transition-all duration-500">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-3 gradient-text-premium">Join Our Team</h3>
                <p className="text-slate-400">
                  We're looking for exceptional talent passionate about AI, quantitative trading, and financial markets.
                </p>
              </div>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="flex items-center space-x-2 text-sm font-medium mb-2">
                    <User className="w-4 h-4 text-cyan-400" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label className="flex items-center space-x-2 text-sm font-medium mb-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>Email Address *</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="flex items-center space-x-2 text-sm font-medium mb-2">
                  <PhoneIcon className="w-4 h-4 text-cyan-400" />
                  <span>Phone Number *</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="+1 (555) 123-4567"
                  required
                />
              </div>

              {/* Resume Upload */}
              <div>
                <label className="flex items-center space-x-2 text-sm font-medium mb-2">
                  <Upload className="w-4 h-4 text-cyan-400" />
                  <span>Upload Resume/CV *</span>
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                    id="resume-upload"
                    required
                  />
                  <label
                    htmlFor="resume-upload"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between cursor-pointer hover:border-cyan-400 transition-colors group"
                  >
                    <span className={resumeName ? 'text-white' : 'text-slate-400'}>
                      {resumeName || 'Choose file (PDF, DOC, DOCX)'}
                    </span>
                    <Upload className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                  </label>
                </div>
              </div>

              {/* Why Interested */}
              <div>
                <label className="flex items-center space-x-2 text-sm font-medium mb-2">
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                  <span>Why are you interested in Syntria? *</span>
                </label>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  placeholder="Tell us what excites you about quantitative trading and working at Syntria..."
                  required
                />
              </div>

              {/* Additional Message */}
              <div>
                <label className="flex items-center space-x-2 text-sm font-medium mb-2">
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                  <span>Why do you want to join our team? *</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  placeholder="Share your background, skills, and what you can bring to our team..."
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full px-6 py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Ripple effect */}
                <motion.span
                  className="absolute inset-0 bg-white/30 rounded-xl"
                  initial={{ scale: 0, opacity: 0 }}
                  whileTap={{ scale: 2.5, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
                
                <Send className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Submit Application</span>
              </motion.button>

              {/* Footer Note */}
              <p className="text-center text-sm text-slate-500 mt-6">
                By submitting, you agree to our privacy policy. We'll contact you at{' '}
                <a href="mailto:talent@syntriatech.ai" className="text-cyan-400 hover:underline">
                  talent@syntriatech.ai
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
