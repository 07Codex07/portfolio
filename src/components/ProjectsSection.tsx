import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Eye, MessageSquare, Shield, Film, BookOpen } from 'lucide-react';

interface ProjectCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tech: string[];
  delay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ icon, title, description, tech, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="bg-medium-gray border border-light-gray p-6 hover:border-neon-green transition-all duration-300 group"
  >
    <div className="flex items-center mb-4">
      <div className="text-neon-green group-hover:text-neon-blue transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white ml-3 font-mono">{title}</h3>
    </div>
    
    <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
    
    <div className="flex flex-wrap gap-2">
      {tech.map((item) => (
        <span
          key={item}
          className="px-2 py-1 bg-light-gray text-neon-green text-xs border border-gray-600 font-mono"
        >
          {item}
        </span>
      ))}
    </div>
  </motion.div>
);

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
      tech: ["Streamlit", "NLP", "API", "Cosine Similarity", "Recommender System"]
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Fashion Product Matcher",
      description: "Advanced computer vision pipeline using YOLOv8 for detection, CLIP for embeddings, and FAISS for fast similarity search from video streams.",
      tech: ["YOLOv8", "CLIP", "FAISS", "Computer Vision"]
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Book Recommender",
      description: "ML-based book recommendation engine using collaborative filtering, TF-IDF vectorization, and NLP techniques to suggest personalized books.",
      tech: ["Collaborative Filtering", "TF-IDF", "NLP", "Pandas", "Recommender System"]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
            🧠 What I've <span className="text-neon-green">Built</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            <strong className="text-white">15+ AI/ML projects</strong> across CV, NLP, and recommender systems. 
            Some highlights include:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              icon={project.icon}
              title={project.title}
              description={project.description}
              tech={project.tech}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 font-mono">
            + 11 more projects spanning deep learning, data analysis, and intelligent automation
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;