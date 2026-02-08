import React, { useState, useEffect, lazy, Suspense } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LoadingScreen from './components/LoadingScreen';

// Lazy load heavy animation components
const ParticlesBackground = lazy(() => import('./components/ParticlesBackground'));
const DataStream = lazy(() => import('./components/DataStream'));
const CursorTrail = lazy(() => import('./components/CursorTrail'));
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Team = lazy(() => import('./components/Team'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['#020617', '#0f172a', '#1e293b']
  );

  useEffect(() => {
    // Simulate loading time and wait for critical resources
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Show loading screen for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          className="relative min-h-screen overflow-x-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Suspense fallback={null}>
            <ParticlesBackground />
            <DataStream />
            <CursorTrail />
          </Suspense>
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <Suspense fallback={<div className="min-h-screen" />}>
              <About />
              <Services />
              <Team />
              <Contact />
            </Suspense>
          </main>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </motion.div>
      )}
    </>
  );
}

export default App;
