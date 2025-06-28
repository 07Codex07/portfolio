import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/vinayak-sahu-8999a9259',
      icon: <Linkedin className="w-5 h-5" />,
      ariaLabel: 'Visit Vinayak\'s LinkedIn profile'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/07Codex07',
      icon: <Github className="w-5 h-5" />,
      ariaLabel: 'Visit Vinayak\'s GitHub repositories'
    },
    {
      name: 'Twitter',
      url: 'https://x.com/Vinayak97386184',
      icon: <Twitter className="w-5 h-5" />,
      ariaLabel: 'Follow Vinayak on Twitter/X'
    },
    {
      name: 'Email',
      url: 'mailto:vinayak1672006@gmail.com',
      icon: <Mail className="w-5 h-5" />,
      ariaLabel: 'Send email to Vinayak'
    }
  ];

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
          <div className="flex items-center justify-center mb-6">
            <Terminal className="w-6 h-6 text-green-400 mr-2" />
            <span className="text-green-400 font-mono font-bold text-lg">VS</span>
          </div>
          
          {/* Social Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-4 mb-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
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
                
                <div className="relative bg-black/60 border-2 border-green-500/40 rounded-xl p-3 group-hover:border-green-400 group-hover:bg-green-500/10 transition-all duration-300 backdrop-blur-sm">
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
                  <div className="bg-black/90 text-green-400 text-xs font-medium px-3 py-1 rounded-lg whitespace-nowrap border border-green-500/30">
                    {link.name}
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black/90"></div>
                </div>
              </motion.a>
            ))}
          </motion.div>
          
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