import React from 'react';
import { motion } from 'framer-motion';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  delay: number;
  color: string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, delay, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="glass-card p-6 hover:scale-105 transition-all duration-300 group"
  >
    <h3 className={`text-xl font-bold mb-4 ${color}`}>{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <motion.span
          key={skill}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: delay + index * 0.05 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1, y: -2 }}
          className="px-3 py-2 bg-white/5 backdrop-blur-sm text-gray-300 text-sm border border-white/10 rounded-full hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-200 cursor-default font-medium"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "SQL", "Bash"],
      color: "text-cyan-400"
    },
    {
      title: "Libraries & Frameworks",
      skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Keras", "PyTorch", "OpenCV", "Matplotlib", "Seaborn", "Streamlit"],
      color: "text-purple-400"
    },
    {
      title: "NLP & ML",
      skills: ["NLTK", "SpaCy", "Transformers", "HuggingFace", "TF-IDF", "FAISS", "Cosine Similarity", "CLIP"],
      color: "text-pink-400"
    },
    {
      title: "Computer Vision",
      skills: ["YOLOv8", "OpenCV", "MediaPipe"],
      color: "text-green-400"
    },
    {
      title: "Recommender Systems",
      skills: ["Collaborative Filtering", "Similarity Search"],
      color: "text-yellow-400"
    },
    {
      title: "Data Analytics Tools",
      skills: ["Power BI", "Tableau", "Pandas Profiling", "Excel (Advanced)", "Google Data Studio"],
      color: "text-blue-400"
    },
    {
      title: "Deployment",
      skills: ["Flask", "FastAPI", "Streamlit", "Netlify", "Vercel"],
      color: "text-indigo-400"
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Kaggle", "Google Colab", "Anaconda", "VS Code", "SQLite", "APIs", "JSON"],
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
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            🚀 My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Tools and technologies I use to build intelligent systems
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
              color={category.color}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;