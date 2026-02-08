import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Award, TrendingUp, Users, Brain } from 'lucide-react';

const Team = () => {
  const achievements = [
    {
      icon: Brain,
      title: 'Top Tier Talent',
      description: 'Team members from leading quant firms and AI research labs',
    },
    {
      icon: TrendingUp,
      title: 'Market Leaders',
      description: 'Proven track record in algorithmic trading and risk management',
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Fostering innovation through diverse expertise and perspectives',
    },
    {
      icon: Award,
      title: 'Excellence Driven',
      description: 'Creating an environment for exceptional people to thrive',
    },
  ];

  return (
    <section id="team" className="py-12 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950/10 to-slate-950" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="gradient-text-premium">Leadership</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Assembling brilliant minds to build the future of quantitative trading
          </p>
        </motion.div>

        {/* CEO Section */}
        <div className="max-w-5xl mx-auto mb-10 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3 }}
            className="glass-strong rounded-2xl md:rounded-3xl p-6 md:p-12 hover:glow-effect transition-all duration-500"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
              {/* CEO Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex justify-center md:justify-start"
              >
                <div className="relative">
                  {/* Animated glow */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Rotating border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: 'linear-gradient(45deg, #06b6d4, #3b82f6, #8b5cf6, #06b6d4)',
                      padding: '2px',
                    }}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <div className="w-full h-full bg-slate-950 rounded-2xl" />
                  </motion.div>
                  
                  <img
                    src="/images/ceo.jpg"
                    alt="George Monogyios"
                    className="relative w-32 h-32 md:w-56 md:h-56 rounded-2xl object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </motion.div>

              {/* CEO Info */}
              <div className="md:col-span-2 text-center md:text-left">
                <h3 className="text-2xl md:text-4xl font-bold mb-2 gradient-text-premium">
                  George Monogyios
                </h3>
                <p className="text-base md:text-xl text-cyan-400 mb-3 md:mb-4">Managing Partner | CEO</p>
                <p className="text-sm md:text-lg text-slate-300 mb-4 md:mb-6 leading-relaxed">
                  Leading Syntria's vision to revolutionize quantitative trading through 
                  advanced AI/ML and cutting-edge technology. With deep expertise in both 
                  financial markets and artificial intelligence, George is building a platform 
                  that transforms market complexity into strategic advantage.
                </p>
                
                <div className="flex items-center justify-center md:justify-start space-x-4">
                  <motion.a
                    href="https://www.linkedin.com/in/george-monogyios"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-6 py-3 glass rounded-xl hover:bg-white/10 transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm font-semibold">LinkedIn</span>
                  </motion.a>
                  
                  <motion.a
                    href="mailto:talent@syntriatech.ai"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative flex items-center space-x-2 px-6 py-3 rounded-xl overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Mail className="w-5 h-5 relative z-10" />
                    <span className="text-sm font-semibold relative z-10">Contact</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Team Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.3 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold mb-4">Why Join Syntria</h3>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Be part of a team that's redefining the future of quantitative trading
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="glass-strong rounded-xl md:rounded-2xl p-4 md:p-6 text-center hover:glow-effect transition-all duration-500"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-14 md:h-14 mb-3 md:mb-4 rounded-lg md:rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500">
                <achievement.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
              </div>
              <h4 className="text-sm md:text-lg font-bold mb-1 md:mb-2">{achievement.title}</h4>
              <p className="text-xs md:text-sm text-slate-400 hidden md:block">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.3 }}
          className="text-center mt-8 md:mt-16"
        >
          <div className="glass-strong rounded-2xl md:rounded-3xl p-6 md:p-12 max-w-3xl mx-auto hover:glow-effect transition-all duration-500">
            <h3 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
              We Are <span className="gradient-text-premium">Hiring</span>
            </h3>
            <p className="text-sm md:text-lg text-slate-400 mb-6 md:mb-8">
              Join our team of exceptional professionals and help build the next generation 
              of quantitative trading technology. We're looking for brilliant minds passionate 
              about AI, ML, and financial markets.
            </p>
            <motion.a
              href="mailto:talent@syntriatech.ai"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold text-base overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Mail className="w-5 h-5 relative z-10" />
              <span className="relative z-10">talent@syntriatech.ai</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
