import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiPython, SiJava, SiMysql, SiGnubash,
  SiPandas, SiNumpy, SiScikitlearn, SiTensorflow, SiKeras, SiPytorch, SiOpencv,
  SiStreamlit, SiFlask, SiFastapi, SiNetlify, SiVercel,
  SiGit, SiKaggle, SiAnaconda, SiVisualstudiocode,
  SiPowerbi, SiTableau, SiMicrosoftexcel
} from 'react-icons/si';
import { Database, Brain, Eye, Target, BarChart3, Wrench, Code2, Sparkles } from 'lucide-react';

interface SkillCategoryProps {
  title: string;
  skills: Array<{ name: string; icon?: React.ReactNode; color?: string }>;
  delay: number;
  color: string;
  categoryIcon: React.ReactNode;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, delay, color, categoryIcon }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    viewport={{ once: true }}
    whileHover={{ 
      scale: 1.03, 
      y: -10,
      rotateX: 5
    }}
    className="relative group"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    
    <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 group-hover:border-white/20 transition-all duration-500 h-full">
      <div className="flex items-center space-x-3 mb-6">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.6 }}
          className={`${color} group-hover:drop-shadow-lg`}
        >
          {categoryIcon}
        </motion.div>
        <h3 className={`text-xl font-bold ${color}`}>{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: delay + index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.15, 
              y: -5,
              rotate: [0, -5, 5, 0],
              boxShadow: "0 10px 25px rgba(6, 182, 212, 0.3)"
            }}
            className="group/skill relative"
          >
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 cursor-default">
              {skill.icon && (
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={skill.color || "text-cyan-400"}
                >
                  {skill.icon}
                </motion.div>
              )}
              <span className="text-gray-300 group-hover/skill:text-white text-sm font-medium transition-colors duration-300">
                {skill.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages",
      categoryIcon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: "Python", icon: <SiPython className="w-4 h-4" />, color: "text-yellow-400" },
        { name: "Java", icon: <SiJava className="w-4 h-4" />, color: "text-red-400" },
        { name: "SQL", icon: <SiMysql className="w-4 h-4" />, color: "text-blue-400" },
        { name: "Bash", icon: <SiGnubash className="w-4 h-4" />, color: "text-green-400" }
      ],
      color: "text-cyan-400"
    },
    {
      title: "Libraries & Frameworks",
      categoryIcon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "Pandas", icon: <SiPandas className="w-4 h-4" />, color: "text-blue-400" },
        { name: "NumPy", icon: <SiNumpy className="w-4 h-4" />, color: "text-cyan-400" },
        { name: "Scikit-learn", icon: <SiScikitlearn className="w-4 h-4" />, color: "text-orange-400" },
        { name: "TensorFlow", icon: <SiTensorflow className="w-4 h-4" />, color: "text-orange-500" },
        { name: "Keras", icon: <SiKeras className="w-4 h-4" />, color: "text-red-400" },
        { name: "PyTorch", icon: <SiPytorch className="w-4 h-4" />, color: "text-red-500" },
        { name: "OpenCV", icon: <SiOpencv className="w-4 h-4" />, color: "text-green-400" },
        { name: "Matplotlib", color: "text-blue-300" },
        { name: "Seaborn", color: "text-blue-400" },
        { name: "Streamlit", icon: <SiStreamlit className="w-4 h-4" />, color: "text-red-400" }
      ],
      color: "text-purple-400"
    },
    {
      title: "NLP & ML",
      categoryIcon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "NLTK", color: "text-green-400" },
        { name: "SpaCy", color: "text-blue-400" },
        { name: "Transformers", color: "text-yellow-400" },
        { name: "HuggingFace", color: "text-yellow-500" },
        { name: "TF-IDF", color: "text-purple-400" },
        { name: "FAISS", color: "text-cyan-400" },
        { name: "Cosine Similarity", color: "text-pink-400" },
        { name: "CLIP", color: "text-green-400" }
      ],
      color: "text-pink-400"
    },
    {
      title: "Computer Vision",
      categoryIcon: <Eye className="w-6 h-6" />,
      skills: [
        { name: "YOLOv8", color: "text-red-400" },
        { name: "OpenCV", icon: <SiOpencv className="w-4 h-4" />, color: "text-green-400" },
        { name: "MediaPipe", color: "text-blue-400" }
      ],
      color: "text-green-400"
    },
    {
      title: "Recommender Systems",
      categoryIcon: <Target className="w-6 h-6" />,
      skills: [
        { name: "Collaborative Filtering", color: "text-purple-400" },
        { name: "Similarity Search", color: "text-cyan-400" }
      ],
      color: "text-yellow-400"
    },
    {
      title: "Data Analytics Tools",
      categoryIcon: <BarChart3 className="w-6 h-6" />,
      skills: [
        { name: "Power BI", icon: <SiPowerbi className="w-4 h-4" />, color: "text-yellow-400" },
        { name: "Tableau", icon: <SiTableau className="w-4 h-4" />, color: "text-blue-400" },
        { name: "Pandas Profiling", color: "text-green-400" },
        { name: "Excel (Advanced)", icon: <SiMicrosoftexcel className="w-4 h-4" />, color: "text-green-500" },
        { name: "Google Data Studio", color: "text-red-400" }
      ],
      color: "text-blue-400"
    },
    {
      title: "Deployment",
      categoryIcon: <Sparkles className="w-6 h-6" />,
      skills: [
        { name: "Flask", icon: <SiFlask className="w-4 h-4" />, color: "text-gray-400" },
        { name: "FastAPI", icon: <SiFastapi className="w-4 h-4" />, color: "text-green-400" },
        { name: "Streamlit", icon: <SiStreamlit className="w-4 h-4" />, color: "text-red-400" },
        { name: "Netlify", icon: <SiNetlify className="w-4 h-4" />, color: "text-cyan-400" },
        { name: "Vercel", icon: <SiVercel className="w-4 h-4" />, color: "text-white" }
      ],
      color: "text-indigo-400"
    },
    {
      title: "Tools & Platforms",
      categoryIcon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: "Git", icon: <SiGit className="w-4 h-4" />, color: "text-orange-400" },
        { name: "Kaggle", icon: <SiKaggle className="w-4 h-4" />, color: "text-cyan-400" },
        { name: "Google Colab", color: "text-yellow-400" },
        { name: "Anaconda", icon: <SiAnaconda className="w-4 h-4" />, color: "text-green-400" },
        { name: "VS Code", icon: <SiVisualstudiocode className="w-4 h-4" />, color: "text-blue-400" },
        { name: "SQLite", icon: <Database className="w-4 h-4" />, color: "text-blue-300" },
        { name: "APIs", color: "text-purple-400" },
        { name: "JSON", color: "text-yellow-300" }
      ],
      color: "text-orange-400"
    }
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
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Sparkles className="w-12 h-12 text-purple-400" />
            </motion.div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            🚀 My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-6">
            Tools and technologies I use to build intelligent systems
          </p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
              color={category.color}
              categoryIcon={category.categoryIcon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;