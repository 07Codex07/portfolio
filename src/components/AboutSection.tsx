import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Zap, Sparkles } from 'lucide-react';

const AboutSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-12 h-12 text-cyan-400" />
              </motion.div>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Brain,
                title: "AI/ML Expert",
                description: "Deep learning, computer vision, and NLP specialist",
                color: "text-cyan-400",
                gradient: "from-cyan-500/20 to-blue-500/20"
              },
              {
                icon: Code,
                title: "Full-Stack Developer", 
                description: "Building end-to-end intelligent applications",
                color: "text-purple-400",
                gradient: "from-purple-500/20 to-pink-500/20"
              },
              {
                icon: Zap,
                title: "Innovation Driven",
                description: "Turning complex problems into elegant solutions",
                color: "text-pink-400",
                gradient: "from-pink-500/20 to-yellow-500/20"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: 5
                }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" 
                     style={{ background: `linear-gradient(135deg, ${item.gradient.split(' ')[0].replace('from-', '')}, ${item.gradient.split(' ')[2].replace('to-', '')})` }} />
                
                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 text-center group-hover:border-white/20 transition-all duration-500">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className={`${item.color} mx-auto mb-6 group-hover:drop-shadow-lg`}
                  >
                    <item.icon className="w-12 h-12" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden group-hover:border-white/20 transition-all duration-500">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full"
              />
              
              <div className="space-y-6 text-gray-300 leading-relaxed text-lg relative z-10">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  I'm a passionate <strong className="text-cyan-400">AI/ML practitioner</strong> with a strong foundation in 
                  data-driven development and real-world problem solving. Currently in my <strong className="text-purple-400">3rd year at Kalinga Institute of Industrial Technology</strong>, 
                  my work bridges <strong className="text-cyan-400">computer vision</strong>, 
                  <strong className="text-purple-400"> NLP</strong>, and <strong className="text-pink-400">deep learning</strong> — bringing 
                  innovative ideas to life through clean code, robust models, and scalable solutions. Whether it's deploying 
                  <strong className="text-cyan-400"> ML pipelines</strong>, building smart apps, or exploring cutting-edge research, 
                  I thrive on turning complexity into clarity.
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="pt-6 border-t border-white/10"
                >
                  <p className="text-cyan-400 font-bold text-lg flex items-center justify-center space-x-2">
                    <Sparkles className="w-5 h-5" />
                    <span>3rd Year Student • Self-taught • Ready to build the future</span>
                    <Sparkles className="w-5 h-5" />
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;