import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4 font-mono">
            <span className="text-white font-bold">Vinayak</span>
            <span className="text-neon-green animate-glow font-bold"> Sahu</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-xl md:text-2xl text-gray-300 mb-2 font-sans">
            AI/ML Developer | Building Intelligent Systems
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Turning raw data and neural networks into real-world applications.<br />
            <span className="text-neon-blue">Self-taught. Relentless. Focused.</span>
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          onClick={scrollToAbout}
          className="group relative px-8 py-3 bg-transparent border-2 border-neon-green text-neon-green font-mono text-sm uppercase tracking-wider hover:bg-neon-green hover:text-black transition-all duration-300 transform hover:scale-105"
        >
          <span className="relative z-10">Explore My Work</span>
          <div className="absolute inset-0 bg-neon-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-gray-400 animate-bounce cursor-pointer" onClick={scrollToAbout} />
      </motion.div>
    </section>
  );
};

export default HeroSection;