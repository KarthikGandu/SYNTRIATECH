import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CursorTrail = () => {
  const [trails, setTrails] = useState([]);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Add trail particle
      const newTrail = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };

      setTrails((prev) => [...prev.slice(-15), newTrail]);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main cursor glow */}
      <motion.div
        className="fixed w-8 h-8 rounded-full bg-cyan-400/20 blur-xl"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Trail particles */}
      {trails.map((trail, index) => (
        <motion.div
          key={trail.id}
          className="absolute w-2 h-2 rounded-full bg-cyan-400/40"
          initial={{
            x: trail.x,
            y: trail.y,
            scale: 1,
            opacity: 0.6,
          }}
          animate={{
            scale: 0,
            opacity: 0,
          }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
          }}
          style={{
            translateX: '-50%',
            translateY: '-50%',
          }}
        />
      ))}
    </div>
  );
};

export default CursorTrail;
