import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiPython, SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, SiNumpy,
  SiOpencv, SiStreamlit, SiFlask, SiFastapi, SiGit, SiDocker,
  SiMysql, SiMongodb, SiPostgresql, SiJupyter, SiGooglecolab,
  SiKaggle, SiLinux, SiVisualstudiocode, SiGithub
} from 'react-icons/si';
import { Brain, Database, Code, Zap } from 'lucide-react';

interface TechItemProps {
  icon: React.ReactNode;
  name: string;
  category: string;
  delay: number;
}

const TechItem: React.FC<TechItemProps> = ({ icon, name, category, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.1, 
        y: -10,
        rotateY: 15,
        boxShadow: "0 15px 30px rgba(0, 255, 136, 0.3)"
      }}
      className="group relative perspective-1000"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative bg-gray-900/30 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6 group-hover:border-green-400/50 transition-all duration-500 text-center h-full flex flex-col items-center justify-center">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8 }}
          className="text-4xl mb-4 text-green-400 group-hover:text-teal-400 transition-colors duration-300"
        >
          {icon}
        </motion.div>
        
        <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-green-400 transition-colors duration-300">
          {name}
        </h3>
        
        <span className="text-gray-400 text-sm font-mono bg-gray-800/50 px-3 py-1 rounded-full">
          {category}
        </span>
      </div>
    </motion.div>
  );
};

const TechStackSection: React.FC = () => {
  const technologies = [
    // AI/ML Core
    { icon: <SiPython />, name: "Python", category: "Language" },
    { icon: <SiTensorflow />, name: "TensorFlow", category: "ML Framework" },
    { icon: <SiPytorch />, name: "PyTorch", category: "ML Framework" },
    { icon: <SiScikitlearn />, name: "Scikit-learn", category: "ML Library" },
    
    // Data Science
    { icon: <SiPandas />, name: "Pandas", category: "Data Analysis" },
    { icon: <SiNumpy />, name: "NumPy", category: "Computing" },
    { icon: <SiOpencv />, name: "OpenCV", category: "Computer Vision" },
    { icon: <Brain className="w-8 h-8" />, name: "NLTK", category: "NLP" },
    
    // Web & Deployment
    { icon: <SiStreamlit />, name: "Streamlit", category: "Web App" },
    { icon: <SiFlask />, name: "Flask", category: "Web Framework" },
    { icon: <SiFastapi />, name: "FastAPI", category: "API Framework" },
    { icon: <SiDocker />, name: "Docker", category: "Containerization" },
    
    // Databases
    { icon: <SiMysql />, name: "MySQL", category: "Database" },
    { icon: <SiMongodb />, name: "MongoDB", category: "NoSQL" },
    { icon: <SiPostgresql />, name: "PostgreSQL", category: "Database" },
    
    // Tools & Platforms
    { icon: <SiGit />, name: "Git", category: "Version Control" },
    { icon: <SiJupyter />, name: "Jupyter", category: "Notebook" },
    { icon: <SiGooglecolab />, name: "Google Colab", category: "Cloud IDE" },
    { icon: <SiKaggle />, name: "Kaggle", category: "Platform" },
    { icon: <SiLinux />, name: "Linux", category: "OS" },
    { icon: <SiVisualstudiocode />, name: "VS Code", category: "IDE" }
  ];

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Zap className="w-8 h-8 text-green-400 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-green-400 font-mono">
              Tech Stack
            </h2>
          </div>
          <div className="w-24 h-1 bg-green-400 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build intelligent systems
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <TechItem
              key={tech.name}
              icon={tech.icon}
              name={tech.name}
              category={tech.category}
              delay={index * 0.05}
            />
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-900/30 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-green-400 mb-6">Core Competencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Brain className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">Machine Learning</h4>
                <p className="text-gray-400 text-sm">Supervised & Unsupervised Learning, Deep Learning, Neural Networks</p>
              </div>
              <div className="text-center">
                <Code className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">Computer Vision</h4>
                <p className="text-gray-400 text-sm">Image Processing, Object Detection, CNN, OpenCV</p>
              </div>
              <div className="text-center">
                <Database className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">Data Science</h4>
                <p className="text-gray-400 text-sm">Data Analysis, Visualization, Statistical Modeling, ETL</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;