import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Users, TrendingUp } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with cutting-edge technology stack',
    },
    {
      icon: Target,
      title: 'Precision Focused',
      description: 'Tailored solutions that hit your business goals exactly',
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our priority, every step of the way',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Growth',
      description: 'Solutions that grow with your business needs',
    },
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="gradient-text">Syntria</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            We combine innovation, expertise, and dedication to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="text-center glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
