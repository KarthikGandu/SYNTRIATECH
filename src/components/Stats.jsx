import React from 'react';
import { motion } from 'framer-motion';
import { Award, Globe, Clock, Heart } from 'lucide-react';

const Stats = () => {
  const stats = [
    { icon: Award, value: '150+', label: 'Awards Won', color: 'from-yellow-400 to-orange-500' },
    { icon: Globe, value: '40+', label: 'Countries Served', color: 'from-green-400 to-cyan-500' },
    { icon: Clock, value: '10k+', label: 'Hours Saved', color: 'from-blue-400 to-purple-500' },
    { icon: Heart, value: '99%', label: 'Happy Clients', color: 'from-pink-400 to-red-500' },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring' }}
              className="text-center"
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 mb-4 rounded-2xl bg-gradient-to-r ${stat.color} shadow-lg`}>
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <motion.div
                className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.div>
              <div className="text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
