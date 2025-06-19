import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 py-12 px-4 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-card p-6 mb-6">
            <p className="text-gray-400 text-lg mb-2 flex items-center justify-center gap-2">
              © 2024 Vinayak Sahu. Built with 
              <Heart className="w-4 h-4 text-red-400" />
              using React, TypeScript & Framer Motion.
            </p>
            <p className="text-cyan-400 font-bold text-lg flex items-center justify-center gap-2">
              <Code className="w-4 h-4" />
              Ready to build the future, one neural network at a time.
            </p>
          </div>
          
          <motion.div
            animate={{ 
              background: [
                'linear-gradient(45deg, #06b6d4, #8b5cf6)',
                'linear-gradient(45deg, #8b5cf6, #ec4899)',
                'linear-gradient(45deg, #ec4899, #06b6d4)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-32 h-1 mx-auto rounded-full"
          />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;