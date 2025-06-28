import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, CheckCircle, Calendar, Hash } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verificationUrl?: string;
  skills: string[];
  delay: number;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ 
  title, 
  issuer, 
  date, 
  credentialId,
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
                <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300 mb-1">
                  {title}
                </h3>
                <p className="text-gray-400 font-medium text-lg">{issuer}</p>
              </div>
            </div>
          </div>

          {/* Date and Credential ID */}
          <div className="mb-4 space-y-2">
            <div className="flex items-center text-green-400">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="text-sm font-mono bg-green-400/10 px-3 py-1 rounded-full">
                {date}
              </span>
            </div>
            <div className="flex items-center text-gray-300">
              <Hash className="w-4 h-4 mr-2 text-green-400" />
              <span className="text-sm font-mono bg-gray-800/50 px-3 py-1 rounded-full">
                ID: {credentialId}
              </span>
            </div>
          </div>
          
          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: delay + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -3,
                  boxShadow: "0 5px 15px rgba(0, 255, 136, 0.4)"
                }}
                className="px-3 py-1 bg-gray-800/50 text-green-400 text-sm border border-green-500/30 rounded-full font-medium hover:border-green-400 hover:bg-green-400/10 transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* Verify Button */}
          <motion.button
            onClick={() => verificationUrl && window.open(verificationUrl, '_blank')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-green-500/10 border border-green-500/30 text-green-400 rounded-lg hover:bg-green-500/20 hover:border-green-400 transition-all duration-300 font-medium group/btn"
          >
            <CheckCircle className="w-4 h-4" />
            <span>Verify</span>
            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const CertificationsSection: React.FC = () => {
  const certifications = [
    {
      title: "Supervised Machine Learning: Classification",
      issuer: "IBM",
      date: "Mar 2025",
      credentialId: "B2DJ3GRE67G5",
      skills: ["Classification", "Supervised Learning", "Model Evaluation", "Feature Engineering"],
      verificationUrl: "https://www.credly.com/badges/placeholder"
    },
    {
      title: "Unsupervised Machine Learning",
      issuer: "IBM",
      date: "Mar 2025",
      credentialId: "GOKSDKRYL9L1",
      skills: ["Clustering", "Dimensionality Reduction", "Unsupervised Learning", "K-Means"],
      verificationUrl: "https://www.credly.com/badges/placeholder"
    },
    {
      title: "Supervised Machine Learning: Regression",
      issuer: "ULSA",
      date: "Mar 2025",
      credentialId: "T8UBYGNR3Y4Z",
      skills: ["Regression Analysis", "Linear Regression", "Polynomial Regression", "Model Validation"],
      verificationUrl: "https://www.credly.com/badges/placeholder"
    },
    {
      title: "Exploratory Data Analysis for Machine Learning",
      issuer: "IBM",
      date: "Jan 2025",
      credentialId: "1BHHHGVRY5IP",
      skills: ["Data Exploration", "Statistical Analysis", "Data Visualization", "Feature Selection"],
      verificationUrl: "https://www.credly.com/badges/placeholder"
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
            Professional certifications and continuous learning achievements in AI/ML
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={cert.credentialId}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              credentialId={cert.credentialId}
              verificationUrl={cert.verificationUrl}
              skills={cert.skills}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gray-900/30 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6">
            <p className="text-gray-400 text-lg">
              <span className="text-green-400 font-semibold">4 Professional Certifications</span> in Machine Learning and Data Science
            </p>
            <p className="text-gray-500 text-sm mt-2">
              All certifications are verified and can be validated through the respective issuing organizations
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;