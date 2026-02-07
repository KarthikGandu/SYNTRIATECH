import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const DataStream = () => {
  const streams = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    delay: i * 0.5,
    duration: 8 + Math.random() * 4,
    left: `${10 + i * 12}%`,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden opacity-30">
      {streams.map((stream) => (
        <motion.div
          key={stream.id}
          className="absolute top-0 w-[1px] h-screen"
          style={{ left: stream.left }}
          initial={{ y: '-100%' }}
          animate={{ y: '100%' }}
          transition={{
            duration: stream.duration,
            repeat: Infinity,
            delay: stream.delay,
            ease: 'linear',
          }}
        >
          <div className="w-full h-20 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent" />
        </motion.div>
      ))}
    </div>
  );
};

export default DataStream;
