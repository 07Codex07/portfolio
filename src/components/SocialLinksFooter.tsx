import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const SocialLinksFooter: React.FC = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/vinayak-sahu-8999a9259',
      icon: <Linkedin className="w-5 h-5" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/07Codex07',
      icon: <Github className="w-5 h-5" />,
      color: 'from-gray-600 to-gray-700'
    },
    {
      name: 'Twitter',
      url: 'https://x.com/Vinayak97386184',
      icon: <Twitter className="w-5 h-5" />,
      color: 'from-sky-500 to-sky-600'
    },
    {
      name: 'Email',
      url: 'mailto:vinayak1672006@gmail.com',
      icon: <Mail className="w-5 h-5" />,
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="bg-black/80 backdrop-blur-xl border border-green-500/20 rounded-2xl p-4 shadow-2xl">
        {/* Glowing background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-teal-500/10 to-green-500/10 rounded-2xl blur-xl"></div>
        
        <div className="relative flex items-center space-x-3">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              whileHover={{ 
                scale: 1.15, 
                y: -3,
                boxShadow: "0 10px 25px rgba(0, 255, 136, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-green-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative bg-gray-900/50 border border-green-500/30 rounded-xl p-3 group-hover:border-green-400 group-hover:bg-green-500/10 transition-all duration-300">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-green-400 group-hover:text-green-300"
                >
                  {link.icon}
                </motion.div>
              </div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-black/90 text-green-400 text-xs font-medium px-2 py-1 rounded-lg whitespace-nowrap border border-green-500/30">
                  {link.name}
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black/90"></div>
              </div>
            </motion.a>
          ))}
        </div>
        
        {/* Pulse animation for the entire footer */}
        <motion.div
          animate={{ 
            boxShadow: [
              "0 0 20px rgba(0, 255, 136, 0.2)",
              "0 0 30px rgba(0, 255, 136, 0.4)",
              "0 0 20px rgba(0, 255, 136, 0.2)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-2xl pointer-events-none"
        />
      </div>
    </motion.div>
  );
};

export default SocialLinksFooter;