import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <User className="w-8 h-8 text-green-400 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-green-400 font-mono">
              About Me
            </h2>
          </div>
          <div className="w-24 h-1 bg-green-400 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gray-900/50 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent rounded-2xl"></div>
            
            <div className="relative z-10">
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
                I'm <strong className="text-green-400">Vinayak Sahu</strong>, currently a third-year undergraduate at 
                <strong className="text-white"> Kalinga Institute of Industrial Technology</strong>. I'm a passionate 
                <strong className="text-green-400"> AI/ML practitioner</strong> with a strong foundation in 
                data-driven development and real-world problem solving.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
                My work bridges <strong className="text-green-400">computer vision</strong>, 
                <strong className="text-green-400"> NLP</strong>, and <strong className="text-green-400">deep learning</strong> — 
                bringing innovative ideas to life through clean code, robust models, and scalable solutions.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                Whether it's deploying <strong className="text-green-400">ML pipelines</strong>, building smart applications, 
                or exploring cutting-edge research, I thrive on turning complexity into clarity.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
