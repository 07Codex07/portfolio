import React from 'react';
import { motion } from 'framer-motion';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  delay: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="bg-medium-gray border border-light-gray p-6 hover:border-neon-green transition-colors duration-300"
  >
    <h3 className="text-xl font-bold text-neon-green mb-4 font-mono">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <motion.span
          key={skill}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: delay + index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, backgroundColor: '#00ff88', color: '#000' }}
          className="px-3 py-1 bg-light-gray text-gray-300 text-sm border border-gray-600 hover:border-neon-green transition-all duration-200 cursor-default"
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
      skills: ["Python", "SQL", "Bash"]
    },
    {
      title: "Libraries & Frameworks",
      skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Keras", "PyTorch", "OpenCV", "Matplotlib", "Seaborn", "Streamlit"]
    },
    {
      title: "NLP & ML",
      skills: ["NLTK", "SpaCy", "Transformers", "TF-IDF", "FAISS", "Cosine Similarity", "CLIP"]
    },
    {
      title: "Computer Vision",
      skills: ["YOLOv8", "OpenCV", "MediaPipe"]
    },
    {
      title: "Recommender Systems",
      skills: ["Collaborative Filtering", "Similarity Search"]
    },
    {
      title: "Deployment",
      skills: ["Flask", "FastAPI", "Streamlit", "Netlify", "Vercel"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Kaggle", "Google Colab", "Anaconda", "VS Code", "SQLite", "APIs", "JSON"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-dark-gray">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
            🚀 My <span className="text-neon-green">Tech Stack</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Tools and technologies I use to build intelligent systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;