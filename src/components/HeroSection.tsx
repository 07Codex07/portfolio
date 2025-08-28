import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Download, Mail, MapPin, ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Building AI tools. Solving real problems.';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // First, open the resume in a new tab
    window.open('/Vinayak_Sahu_Resume.pdf', '_blank');
    
    // Then, after a short delay, trigger the download
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '/Vinayak_Sahu_Resume.pdf';
      link.download = 'Vinayak_Sahu_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 500); // 500ms delay to ensure the new tab opens first
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16">
      {/* Matrix-style background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse opacity-20" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-green-400 rounded-full animate-pulse opacity-35" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-4 text-green-400 font-mono tracking-tight"
            style={{
              textShadow: '0 0 20px rgba(34, 197, 94, 0.5), 0 0 40px rgba(34, 197, 94, 0.3)',
            }}
          >
            VINAYAK SAHU
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-white mb-2"
          >
            AI/ML & Data Science Practitioner
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center justify-center text-gray-400 mb-6"
          >
            <MapPin className="w-4 h-4 mr-2" />
            <span>Bhubaneswar, Odisha, India</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0 }}
            className="text-xl md:text-2xl text-green-300 mb-8 font-mono h-8"
          >
            {displayText}
            <span className="animate-pulse">|</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="https://github.com/07Codex07"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 20px rgba(34, 197, 94, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-6 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </motion.a>

            <motion.button
              onClick={downloadResume}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-6 py-3 border-2 border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              <span>Resume</span>
            </motion.button>

            <motion.a
              href="mailto:vinayaksahu1672006@gmail.com"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-6 py-3 border-2 border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="cursor-pointer"
          onClick={scrollToAbout}
        >
          <ChevronDown className="w-6 h-6 text-green-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
