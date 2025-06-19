import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Sparkles, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 py-12 px-4 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 mb-6 group-hover:border-white/20 transition-all duration-500">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="absolute top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full"
              />
              
              <div className="space-y-4">
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-gray-400 text-lg mb-2 flex items-center justify-center gap-2 flex-wrap"
                >
                  © 2024 Vinayak Sahu. Built with 
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Heart className="w-5 h-5 text-red-400" />
                  </motion.div>
                  using React, TypeScript & Framer Motion.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-center justify-center space-x-3"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <Code className="w-5 h-5 text-cyan-400" />
                  </motion.div>
                  <p className="text-cyan-400 font-bold text-lg">
                    Ready to build the future, one neural network at a time.
                  </p>
                  <motion.div
                    animate={{ 
                      rotate: [0, 15, -15, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <Zap className="w-5 h-5 text-purple-400" />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          {/* Animated gradient line */}
          <motion.div
            animate={{ 
              background: [
                'linear-gradient(90deg, #06b6d4, #8b5cf6, #ec4899, #06b6d4)',
                'linear-gradient(90deg, #8b5cf6, #ec4899, #06b6d4, #8b5cf6)',
                'linear-gradient(90deg, #ec4899, #06b6d4, #8b5cf6, #ec4899)',
                'linear-gradient(90deg, #06b6d4, #8b5cf6, #ec4899, #06b6d4)'
              ]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="w-48 h-1 mx-auto rounded-full"
          />
          
          {/* Floating sparkles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  rotate: [0, 360],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
              >
                <Sparkles className="w-4 h-4 text-cyan-400/50" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;