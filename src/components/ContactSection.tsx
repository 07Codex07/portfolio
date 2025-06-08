import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Twitter } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 px-4 bg-dark-gray">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
            Let's <span className="text-neon-green">Connect</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm always open to collaboration, internships, or even deep tech conversations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-8 font-mono">Get In Touch</h3>
            
            <div className="space-y-4">
              <motion.a
                href="mailto:vinayak1672006@gmail.com"
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 text-gray-300 hover:text-neon-green transition-colors duration-300 group"
              >
                <Mail className="w-6 h-6 group-hover:text-neon-blue" />
                <span className="text-lg">vinayak1672006@gmail.com</span>
              </motion.a>
              
              <motion.a
                href="https://github.com/07Codex07"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 text-gray-300 hover:text-neon-green transition-colors duration-300 group"
              >
                <Github className="w-6 h-6 group-hover:text-neon-blue" />
                <span className="text-lg">github.com/07Codex07</span>
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/vinayak-sahu-8999a9259"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 text-gray-300 hover:text-neon-green transition-colors duration-300 group"
              >
                <Linkedin className="w-6 h-6 group-hover:text-neon-blue" />
                <span className="text-lg">linkedin.com/in/vinayak-sahu</span>
              </motion.a>

              <motion.a
                href="https://x.com/Vinayak97386184"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 text-gray-300 hover:text-neon-green transition-colors duration-300 group"
              >
                <Twitter className="w-6 h-6 group-hover:text-neon-blue" />
                <span className="text-lg">x.com/Vinayak97386184</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form action="https://formsubmit.co/vinayak1672006@gmail.com" method="POST" className="space-y-6">
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="https://vinayak-portfolio.netlify.app/thank-you.html" />
              
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-medium-gray border border-light-gray text-white placeholder-gray-400 focus:border-neon-green focus:outline-none transition-colors duration-300"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-medium-gray border border-light-gray text-white placeholder-gray-400 focus:border-neon-green focus:outline-none transition-colors duration-300"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-medium-gray border border-light-gray text-white placeholder-gray-400 focus:border-neon-green focus:outline-none transition-colors duration-300 resize-none"
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-transparent border-2 border-neon-green text-neon-green font-mono uppercase tracking-wider hover:bg-neon-green hover:text-black transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;