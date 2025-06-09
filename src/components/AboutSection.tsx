import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-mono">
            About <span className="text-neon-green">Me</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-medium-gray border border-light-gray p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-green to-neon-blue"></div>
          
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              I'm a passionate <strong className="text-neon-green">AI/ML practitioner</strong> with a strong foundation in 
              data-driven development and real-world problem solving. Currently in my <strong className="text-neon-blue">3rd year at Kalinga Institute of Industrial Technology</strong>, 
              my work bridges <strong className="text-neon-blue">computer vision</strong>, 
              <strong className="text-neon-blue"> NLP</strong>, and <strong className="text-neon-blue">deep learning</strong> — bringing 
              innovative ideas to life through clean code, robust models, and scalable solutions. Whether it's deploying 
              <strong className="text-neon-green"> ML pipelines</strong>, building smart apps, or exploring cutting-edge research, 
              I thrive on turning complexity into clarity.
            </p>

            <div className="pt-6 border-t border-light-gray">
              <p className="text-neon-green font-mono text-sm uppercase tracking-wider">
                3rd Year Student • Self-taught • Ready to build the future
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;