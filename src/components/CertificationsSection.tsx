import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  verificationUrl?: string;
  skills: string[];
  delay: number;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ 
  title, 
  issuer, 
  date, 
  verificationUrl, 
  skills, 
  delay 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(0, 255, 136, 0.2)"
      }}
      className="group relative"
    >
      {/* Glowing border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-teal-500/20 to-green-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="relative bg-gray-900/50 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6 group-hover:border-green-400/50 transition-all duration-500 h-full">
        {/* Top accent line */}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 1, delay: delay + 0.3 }}
          className="absolute top-0 left-0 h-1 bg-gradient-to-r from-green-400 to-teal-400 rounded-full"
        />
        
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className="text-green-400 mr-3"
              >
                <Award className="w-6 h-6" />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-gray-400 font-medium">{issuer}</p>
              </div>
            </div>
            <span className="text-sm text-green-400 font-mono bg-green-400/10 px-3 py-1 rounded-full">
              {date}
            </span>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: delay + index * 0.1 }}
                viewport={{ once: true }}
                className="px-3 py-1 bg-gray-800/50 text-green-400 text-sm border border-green-500/30 rounded-full font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {verificationUrl && (
            <motion.a
              href={verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-green-500/10 border border-green-500/30 text-green-400 rounded-lg hover:bg-green-500/20 hover:border-green-400 transition-all duration-300 font-medium"
            >
              <CheckCircle className="w-4 h-4" />
              <span>Verify</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const CertificationsSection: React.FC = () => {
  const certifications = [
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford University (Coursera)",
      date: "2023",
      skills: ["Supervised Learning", "Unsupervised Learning", "Neural Networks", "Deep Learning"],
      verificationUrl: "https://coursera.org/verify/specialization/example"
    },
    {
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.AI",
      date: "2023",
      skills: ["CNN", "RNN", "LSTM", "Computer Vision", "NLP"],
      verificationUrl: "https://coursera.org/verify/specialization/example"
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "2023",
      skills: ["TensorFlow", "Keras", "Model Deployment", "Computer Vision"],
      verificationUrl: "https://www.credential.net/example"
    },
    {
      title: "Data Science Professional Certificate",
      issuer: "IBM",
      date: "2022",
      skills: ["Python", "Data Analysis", "Machine Learning", "Data Visualization"],
      verificationUrl: "https://coursera.org/verify/professional-cert/example"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Award className="w-8 h-8 text-green-400 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-green-400 font-mono">
              Certifications
            </h2>
          </div>
          <div className="w-24 h-1 bg-green-400 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional certifications and continuous learning achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={cert.title}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              verificationUrl={cert.verificationUrl}
              skills={cert.skills}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;