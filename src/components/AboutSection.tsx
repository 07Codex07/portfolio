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
              I'm a fast-paced learner who prefers <strong className="text-neon-green">building over memorizing</strong>. 
              I've created over <strong className="text-white">15 projects</strong>, ranging from handwritten equation 
              solvers to fashion item recommendation engines using <strong className="text-neon-blue">YOLOv8</strong>, 
              <strong className="text-neon-blue"> CLIP</strong>, and <strong className="text-neon-blue">FAISS</strong>. 
              I'm deeply interested in real-world AI applications — <strong className="text-neon-green">Computer Vision</strong>, 
              <strong className="text-neon-green"> NLP</strong>, and <strong className="text-neon-green">recommendation systems</strong> are my playground.
            </p>
            
            <p className="text-lg">
              My goal is to land a high-package internship within the next 6 months by building solid, 
              portfolio-ready tools that reflect my potential. I work with <strong className="text-neon-blue">Python</strong>, 
              <strong className="text-neon-blue"> TensorFlow</strong>, <strong className="text-neon-blue">PyTorch</strong>, 
              and <strong className="text-neon-blue">Deep Learning</strong> frameworks to create intelligent systems 
              that solve real problems.
            </p>

            <div className="pt-6 border-t border-light-gray">
              <p className="text-neon-green font-mono text-sm uppercase tracking-wider">
                19 years old • Self-taught • Ready to build the future
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;