import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Sparkles, Zap, Code, Brain } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Vinayak_Sahu_Resume.pdf';
    link.download = 'Vinayak_Sahu_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-400/30 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            y: [0, -20, 0],
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-1/3 right-1/4 w-24 h-24 border border-purple-400/30"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        />
        <motion.div
          animate={{ 
            rotate: 360,
            x: [0, 30, 0],
          }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            x: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-lg"
        />
      </div>

      <div className="text-center z-10 px-4 max-w-6xl mx-auto">
        {/* Floating text box */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative"
        >
          {/* Glassmorphism container */}
          <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-cyan-500/10">
            {/* Animated border glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl animate-pulse"></div>
            
            <div className="relative z-10">
              {/* Animated icons */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="flex justify-center items-center space-x-4 mb-8"
              >
                <Brain className="w-8 h-8 text-cyan-400" />
                <Sparkles className="w-10 h-10 text-purple-400" />
                <Code className="w-8 h-8 text-pink-400" />
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-none"
              >
                <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                  VINAYAK
                </span>
                <br />
                <motion.span 
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  style={{ backgroundSize: '200% 200%' }}
                >
                  SAHU
                </motion.span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-2xl md:text-4xl font-bold text-cyan-400 mb-4">
                  AI/ML Developer | Building Intelligent Systems
                </h2>
                <p className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                  Turning raw data and neural networks into real-world applications.<br />
                  <span className="text-purple-400 font-semibold">Self-taught. Relentless. Focused.</span>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <motion.button
                  onClick={scrollToProjects}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-lg rounded-2xl overflow-hidden shadow-2xl"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <Zap className="w-5 h-5" />
                    <span>View Projects</span>
                  </span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>

                <motion.button
                  onClick={downloadResume}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    borderColor: "rgba(6, 182, 212, 1)",
                    boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-transparent border-2 border-cyan-400/50 text-cyan-400 font-bold text-lg rounded-2xl hover:bg-cyan-400/10 transition-all duration-300 flex items-center gap-3 backdrop-blur-sm"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Resume</span>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="cursor-pointer group"
          onClick={scrollToAbout}
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-cyan-400 text-sm font-medium opacity-70 group-hover:opacity-100 transition-opacity">
              Scroll Down
            </span>
            <ChevronDown className="w-6 h-6 text-cyan-400 group-hover:text-purple-400 transition-colors" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;