import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Eye, MessageSquare, Shield, Film, BookOpen, Github, ExternalLink, Code, Zap } from 'lucide-react';

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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="glass-card p-6 group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.5 }}
            className="text-cyan-400 group-hover:text-purple-400 transition-colors duration-300"
          >
            {icon}
          </motion.div>
          <h3 className="text-xl font-bold text-white ml-3">{title}</h3>
        </div>
        
        <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, index) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: delay + index * 0.05 }}
              viewport={{ once: true }}
              className="px-3 py-1 bg-white/5 backdrop-blur-sm text-cyan-400 text-xs border border-white/10 rounded-full font-medium"
            >
              {item}
            </motion.span>
          ))}
        </div>

        <AnimatePresence>
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full hover:from-purple-500 hover:to-pink-500 transition-all duration-300 text-sm font-medium shadow-lg"
            >
              <Github className="w-4 h-4" />
              <span>View Code</span>
              <ExternalLink className="w-3 h-3" />
            </motion.a>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Handwritten Math Solver",
      description: "CNN-powered system that recognizes handwritten mathematical equations and solves them in real-time using computer vision.",
      tech: ["CNN", "OpenCV", "TensorFlow", "Python"]
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: "Your Next Watch",
      description: "A Streamlit-based intelligent movie recommendation system. Uses NLP techniques, API integration, and cosine similarity to suggest movies based on mood and language.",
      tech: ["Streamlit", "NLP", "API", "Cosine Similarity", "Recommender System"],
      githubUrl: "https://github.com/07Codex07/Your-Next-Watch"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Fashion Product Matcher",
      description: "Advanced computer vision pipeline using YOLOv8 for detection, CLIP for embeddings, and FAISS for fast similarity search from video streams.",
      tech: ["YOLOv8", "CLIP", "FAISS", "Computer Vision"],
      githubUrl: "https://github.com/07Codex07/Reel2Retail"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Book Recommender",
      description: "ML-based book recommendation engine using collaborative filtering, TF-IDF vectorization, and NLP techniques to suggest personalized books.",
      tech: ["Collaborative Filtering", "TF-IDF", "NLP", "Pandas", "Recommender System"],
      githubUrl: "https://github.com/07Codex07/Book_Recommender"
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
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            🧠 What I've <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Built</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed mb-6">
            <strong className="text-white">15+ AI/ML projects</strong> across CV, NLP, and recommender systems. 
            Some highlights include:
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
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
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-card p-6 inline-block">
            <p className="text-gray-400 text-lg font-medium">
              + 11 more projects spanning deep learning, data analysis, and intelligent automation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;