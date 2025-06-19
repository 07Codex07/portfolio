import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Zap } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300"
          >
            <Brain className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:text-purple-400 transition-colors" />
            <h3 className="text-xl font-bold text-white mb-2">AI/ML Expert</h3>
            <p className="text-gray-300">Deep learning, computer vision, and NLP specialist</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300"
          >
            <Code className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:text-cyan-400 transition-colors" />
            <h3 className="text-xl font-bold text-white mb-2">Full-Stack Developer</h3>
            <p className="text-gray-300">Building end-to-end intelligent applications</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300"
          >
            <Zap className="w-12 h-12 text-pink-400 mx-auto mb-4 group-hover:text-yellow-400 transition-colors" />
            <h3 className="text-xl font-bold text-white mb-2">Innovation Driven</h3>
            <p className="text-gray-300">Turning complex problems into elegant solutions</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"></div>
          
          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            <p>
              I'm a passionate <strong className="text-cyan-400">AI/ML practitioner</strong> with a strong foundation in 
              data-driven development and real-world problem solving. Currently in my <strong className="text-purple-400">3rd year at Kalinga Institute of Industrial Technology</strong>, 
              my work bridges <strong className="text-cyan-400">computer vision</strong>, 
              <strong className="text-purple-400"> NLP</strong>, and <strong className="text-pink-400">deep learning</strong> — bringing 
              innovative ideas to life through clean code, robust models, and scalable solutions. Whether it's deploying 
              <strong className="text-cyan-400"> ML pipelines</strong>, building smart apps, or exploring cutting-edge research, 
              I thrive on turning complexity into clarity.
            </p>

            <div className="pt-6 border-t border-white/10">
              <p className="text-cyan-400 font-bold text-lg">
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