import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center pt-20 pb-6 md:pb-0 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-purple-950/20" />
      
      {/* Premium Glowing Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.6, 0.4, 0.6],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.1, 1.4, 1.1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <div className="glass px-4 py-2 rounded-full">
              <span className="text-sm font-semibold text-cyan-400">GLOBAL</span>
            </div>
            <div className="glass px-4 py-2 rounded-full">
              <span className="text-sm font-semibold text-cyan-400">24/7</span>
            </div>
            <div className="glass px-4 py-2 rounded-full">
              <span className="text-sm font-semibold text-cyan-400">MULTI-ASSET</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="text-4xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 leading-tight"
          >
            <motion.span 
              className="gradient-text-premium"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: '200% 200%' }}
            >
              A New Era of
            </motion.span>
            <br />
            <span className="text-white drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]">Quantitative Trading</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-base md:text-2xl text-slate-400 mb-6 md:mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Combining deep market expertise with cutting-edge AI/ML on a clean-slate architecture. 
            We turn constant technological change into competitive advantage through advanced machine learning 
            and state-of-the-art engineering.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="mailto:talent@syntriatech.ai"
              className="group relative px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 animate-gradient"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500"></div>
              
              {/* Ripple effect */}
              <motion.span
                className="absolute inset-0 bg-white/30 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                whileTap={{ scale: 2.5, opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Pulsing ring */}
              <motion.span
                className="absolute inset-0 border-2 border-white rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <Rocket className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Join Our Team</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a
              href="#about"
              className="px-8 py-4 glass rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mt-6 md:mt-20"
          >
            {[
              { value: 'HFT', label: 'High-Frequency Trading' },
              { value: 'AI/ML', label: 'Advanced Machine Learning' },
              { value: 'Global', label: 'Multi-Asset Markets' },
              { value: '24/7', label: 'Continuous Liquidity' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="glass-strong rounded-xl md:rounded-2xl p-4 md:p-6 hover:glow-effect transition-all duration-500 group cursor-pointer relative overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                }}
                transition={{ delay: 0.25 + index * 0.05 }}
                whileHover={{ y: -12, scale: 1.05 }}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  y: {
                    duration: 3 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                {/* Animated shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "linear"
                  }}
                />
                
                <div className="text-2xl md:text-3xl font-bold gradient-text-premium mb-2 group-hover:scale-110 transition-transform duration-300 relative z-10">
                  {stat.value}
                </div>
                <div className="text-slate-300 text-sm font-medium relative z-10">{stat.label}</div>
                
                {/* Pulsing dot indicator */}
                <motion.div
                  className="absolute top-3 right-3 w-2 h-2 bg-cyan-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
