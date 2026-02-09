import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Database, Cpu, Cloud, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'Advanced AI/ML Models',
      description: 'Deep learning architectures that continuously adapt to market conditions, leveraging state-of-the-art neural networks for alpha generation.',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Database,
      title: 'Multi-Asset Trading',
      description: 'Comprehensive coverage across equities, futures, options, forex, and digital assets with unified risk management.',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      icon: Cpu,
      title: 'High-Frequency Execution',
      description: 'Ultra-low latency infrastructure providing microsecond-level execution across global exchanges and dark pools.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Cloud,
      title: 'Clean-Slate Architecture',
      description: 'Modern, scalable technology stack built from the ground up to handle massive data throughput and complex computations.',
      gradient: 'from-pink-500 to-red-500',
    },
    {
      icon: Code,
      title: 'Liquidity Provision',
      description: 'Consistent market making and liquidity provision strategies that benefit market efficiency and capture spreads.',
      gradient: 'from-red-500 to-orange-500',
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Sophisticated real-time risk controls and portfolio optimization ensuring capital preservation and consistent returns.',
      gradient: 'from-orange-500 to-yellow-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="technology" className="py-12 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/10 to-slate-950" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="gradient-text-premium">Technology</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Cutting-edge infrastructure and algorithms driving superior performance in global markets
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group relative glass-strong rounded-2xl md:rounded-3xl p-4 md:p-8 hover:glow-effect transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Animated Gradient Border */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-30 rounded-3xl transition-opacity duration-500`}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundSize: '200% 200%' }}
              />
              
              {/* Premium Icon with Pulse */}
              <motion.div 
                className={`relative w-12 h-12 md:w-20 md:h-20 mb-3 md:mb-6 rounded-xl md:rounded-2xl bg-gradient-to-r ${service.gradient} p-2 md:p-4 shadow-2xl`}
                whileHover={{ rotate: 360, scale: 1.1, transition: { duration: 0.6 } }}
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(6, 182, 212, 0.3)',
                    '0 0 40px rgba(6, 182, 212, 0.6)',
                    '0 0 20px rgba(6, 182, 212, 0.3)',
                  ],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }
                }}
              >
                <service.icon className="w-full h-full text-white" />
                
                {/* Orbiting particles */}
                <motion.div
                  className="absolute w-1.5 h-1.5 bg-white rounded-full"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    top: '50%',
                    left: '50%',
                    transformOrigin: '0 -30px',
                  }}
                />
              </motion.div>

              {/* Content */}
              <h3 className="text-sm md:text-2xl font-bold mb-2 md:mb-4 text-white group-hover:gradient-text-premium transition-all duration-500">
                {service.title}
              </h3>
              <p className="text-slate-300 leading-relaxed text-xs md:text-sm hidden md:block">
                {service.description}
              </p>

              {/* Premium Hover Arrow */}
              <motion.div
                className="mt-6 flex items-center text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-500"
                initial={{ x: -10 }}
                whileHover={{ x: 5 }}
              >
                <span className="text-sm font-bold">Explore Technology</span>
                <motion.svg 
                  className="w-5 h-5 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
