import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import DataStream from './components/DataStream';
import CursorTrail from './components/CursorTrail';

function App() {
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['#020617', '#0f172a', '#1e293b']
  );

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParticlesBackground />
      <DataStream />
      <CursorTrail />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
