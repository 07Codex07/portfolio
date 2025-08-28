import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Eye, Film, Terminal, Github, ExternalLink, Sparkles, Zap } from 'lucide-react';

interface ProjectCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  delay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ icon, title, description, tech, githubUrl, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -15, 
        scale: 1.03,
        rotateY: 5,
        rotateX: 5
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative perspective-1000"
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl"
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.1 : 0.8
        }}
        transition={{ duration: 0.5 }}
      />
      
      <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 group-hover:border-white/20 transition-all duration-500 h-full">
        {/* Animated top border */}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 1, delay: delay + 0.3 }}
          className="absolute top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full"
        />
        
        <div className="relative z-10">
          <div className="flex items-center mb-6">
            <motion.div
              animate={{ 
                rotate: isHovered ? 360 : 0,
                scale: isHovered ? 1.2 : 1
              }}
              transition={{ duration: 0.6 }}
              className="text-cyan-400 group-hover:text-purple-400 transition-colors duration-500 mr-4"
            >
              {icon}
            </motion.div>
            <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
              {title}
            </h3>
          </div>
          
          <p className="text-gray-300 mb-8 leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-300">
            {description}
          </p>
          
          {/* Tech stack with enhanced animations */}
          <div className="flex flex-wrap gap-3 mb-8">
            {tech.map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: delay + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -3,
                  boxShadow: "0 5px 15px rgba(6, 182, 212, 0.4)"
                }}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm text-cyan-400 text-sm border border-cyan-400/30 rounded-full font-medium hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 cursor-default"
              >
                {item}
              </motion.span>
            ))}
          </div>

          {/* GitHub button with enhanced styling */}
          <AnimatePresence>
            {githubUrl && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(6, 182, 212, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-2xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 font-medium shadow-lg group/btn"
              >
                <Github className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                <span>View Code</span>
                <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
              </motion.a>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      icon: <Terminal className="w-10 h-10" />,
      title: "Smart Linux Copilot",
      description: "Voice-activated AI assistant for Linux workflows. Uses speech recognition, LLM integration, and command execution to help users interact with their Linux system more naturally and efficiently.",
      tech: ["Whisper", "Phi2", "LLM", "Bash", "Python"],
      githubUrl: "https://github.com/07Codex07/local_smart_linux_assistant"
    },
    {
      icon: <Eye className="w-10 h-10" />,
      title: "Fashion Product Matcher",
      description: "Advanced computer vision pipeline using YOLOv8 for detection, CLIP for embeddings, and FAISS for fast similarity search from video streams.",
      tech: ["YOLOv8", "CLIP", "FAISS", "Computer Vision"],
      githubUrl: "https://github.com/07Codex07/Reel2Retail"
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: "PrepGraph",
      description: "A chatbot built with LangGraph and Gradio that helps students study for exams by answering questions from their notes. Deployed via ngrok and used by peers during semester exams.",
      tech: ["LangGraph", "Gradio", "Python", "RAG"],
      githubUrl: "https://github.com/07Codex07/PrepGraph.git"
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: "Handwritten Math Solver",
      description: "CNN-powered system that recognizes handwritten mathematical equations and solves them in real-time using computer vision.",
      tech: ["CNN", "OpenCV", "TensorFlow", "Python"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.3, 1]
              }}
              transition={{ 
                rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Zap className="w-12 h-12 text-cyan-400" />
            </motion.div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            🧠 What I've <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Built</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed mb-6">
            <strong className="text-white">15+ AI/ML projects</strong> across CV, NLP, and recommender systems. 
            Some highlights include:
          </p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              icon={project.icon}
              title={project.title}
              description={project.description}
              tech={project.tech}
              githubUrl={project.githubUrl}
              delay={index * 0.2}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="inline-block bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-500"
          >
            <div className="flex items-center justify-center space-x-3">
              <Sparkles className="w-6 h-6 text-purple-400" />
              <p className="text-gray-400 text-lg font-medium">
                + 11 more projects spanning deep learning, data analysis, and intelligent automation
              </p>
              <Sparkles className="w-6 h-6 text-cyan-400" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;