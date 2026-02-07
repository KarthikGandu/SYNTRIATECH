import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Brain, Zap, TrendingUp, Database, Cpu, Shield, Code, Globe, BarChart } from 'lucide-react';

const About = () => {
  const [hoveredBox, setHoveredBox] = useState(null);

  const highlights = [
    'Brilliant minds from top firms and AI labs',
    'Living platform that adapts to market evolution',
    'Deep expertise in quantitative finance',
    'State-of-the-art engineering practices',
    'Culture of excellence and innovation',
    'Continuous technological advancement',
  ];

  const techBoxes = [
    { icon: Brain, label: 'Neural Networks', color: 'from-purple-500 to-pink-500', metric: '50+', desc: 'AI Models' },
    { icon: Zap, label: 'Low Latency', color: 'from-cyan-500 to-blue-500', metric: '<1μs', desc: 'Execution' },
    { icon: TrendingUp, label: 'Alpha Gen', color: 'from-green-500 to-teal-500', metric: '24/7', desc: 'Trading' },
    { icon: Database, label: 'Big Data', color: 'from-blue-500 to-purple-500', metric: '10PB+', desc: 'Data Lake' },
    { icon: Cpu, label: 'HPC', color: 'from-orange-500 to-red-500', metric: '1000+', desc: 'GPU Cores' },
    { icon: Shield, label: 'Security', color: 'from-red-500 to-pink-500', metric: '99.99%', desc: 'Uptime' },
    { icon: Code, label: 'Automation', color: 'from-teal-500 to-cyan-500', metric: '95%', desc: 'Automated' },
    { icon: Globe, label: 'Global', color: 'from-indigo-500 to-purple-500', metric: '40+', desc: 'Markets' },
    { icon: BarChart, label: 'Analytics', color: 'from-yellow-500 to-orange-500', metric: 'Real-time', desc: 'Insights' },
  ];

  return (
    <section id="about" className="py-12 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950/10 to-slate-950" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text-premium">Syntria</span>
            </h2>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              Syntria represents a new era of quantitative trading, combining deep market expertise 
              with cutting-edge AI/ML on a clean-slate architecture. We are assembling brilliant minds 
              from top firms and AI labs to build a living platform that turns constant technological 
              change into competitive advantage.
            </p>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Our mission is to harness advanced machine learning and state-of-the-art engineering 
              while fostering a culture where exceptional people do the best work of their careers. 
              We provide liquidity across global markets through innovative quantitative strategies.
            </p>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle2 className="w-4 h-4 md:w-6 md:h-6 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-300 text-xs md:text-base">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass-strong rounded-3xl p-8 relative overflow-hidden hover:glow-effect transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20" />
              
              {/* Interactive Tech Grid */}
              <div className="relative grid grid-cols-3 gap-4">
                {techBoxes.map((box, index) => (
                  <motion.div
                    key={index}
                    className="aspect-square glass rounded-xl cursor-pointer overflow-hidden relative group"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: 'spring' }}
                    whileHover={{ scale: 1.15, zIndex: 10 }}
                    onHoverStart={() => setHoveredBox(index)}
                    onHoverEnd={() => setHoveredBox(null)}
                  >
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${box.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                    
                    {/* Content */}
                    <div className="w-full h-full flex flex-col items-center justify-center p-3 relative z-10">
                      <motion.div
                        animate={{ 
                          rotate: hoveredBox === index ? 360 : 0,
                          scale: hoveredBox === index ? 1.2 : 1
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <box.icon className={`w-8 h-8 mb-2 bg-gradient-to-r ${box.color} bg-clip-text text-transparent`} 
                          style={{ filter: 'brightness(1.5)' }}
                          stroke="url(#gradient)"
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#06b6d4" />
                            <stop offset="100%" stopColor="#3b82f6" />
                          </linearGradient>
                        </defs>
                      </motion.div>
                      
                      {/* Label - Always visible */}
                      <div className="text-[10px] font-bold text-center text-cyan-400 mb-1">
                        {box.label}
                      </div>
                      
                      {/* Metric - Shows on hover */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ 
                          opacity: hoveredBox === index ? 1 : 0,
                          y: hoveredBox === index ? 0 : 10
                        }}
                        className="text-center"
                      >
                        <div className="text-sm font-bold gradient-text-premium">
                          {box.metric}
                        </div>
                        <div className="text-[9px] text-slate-400">
                          {box.desc}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -top-6 -right-6 glass rounded-2xl p-6 shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="text-3xl font-bold gradient-text">AI-First</div>
              <div className="text-sm text-slate-400">Trading Platform</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
