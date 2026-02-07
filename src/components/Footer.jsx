import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: ['About', 'Technology', 'Team', 'Contact'],
    Trading: ['Multi-Asset', 'HFT', 'Liquidity', 'Risk Management'],
    Careers: ['Open Positions', 'Culture', 'Benefits', 'Apply Now'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Compliance', 'Disclosures'],
  };

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-black" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <img src="/images/logo.png" alt="Syntria" className="h-10 w-auto" />
                <div className="flex flex-col">
                  <span className="text-xl font-bold gradient-text">SYNTRIA</span>
                  <span className="text-[8px] font-semibold text-slate-400 tracking-[0.2em] -mt-1">QUANTITATIVE TRADING</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                AI-forward HFT multi-asset class, quantitative trading firm providing liquidity across global markets through advanced machine learning.
              </p>
            </motion.div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="font-semibold mb-4 text-white">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Hiring CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-2xl p-8 mb-12 hover:glow-effect transition-all duration-500"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">We Are <span className="gradient-text-premium">Hiring</span></h3>
            <p className="text-slate-400 mb-6">
              Join our team of exceptional professionals building the future of quantitative trading.
            </p>
            <motion.a
              href="mailto:talent@syntriatech.ai"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center space-x-2 px-8 py-4 rounded-xl font-semibold overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Mail className="w-5 h-5 relative z-10" />
              <span className="relative z-10">talent@syntriatech.ai</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-slate-400 text-sm flex items-center"
            >
              © {currentYear} Syntria LLC. All rights reserved.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6"
            >
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                Terms of Service
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
