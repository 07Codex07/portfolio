import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 border-t border-green-500/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <Terminal className="w-6 h-6 text-green-400 mr-2" />
            <span className="text-green-400 font-mono font-bold text-lg">VS</span>
          </div>
          
          <p className="text-gray-400 mb-2 flex items-center justify-center gap-2">
            © 2024 Vinayak Sahu. Built with 
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-4 h-4 text-green-400" />
            </motion.div>
            using React & TypeScript
          </p>
          
          <p className="text-green-400 font-mono text-sm">
            Ready to build the future, one algorithm at a time.
          </p>
          
          <div className="w-32 h-0.5 bg-green-400 mx-auto mt-4 rounded-full"></div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
