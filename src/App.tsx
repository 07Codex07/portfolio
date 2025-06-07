import React from 'react';
import MatrixBackground from './components/MatrixBackground';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <MatrixBackground />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 border-t border-light-gray bg-dark-gray">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 font-mono text-sm">
            © 2024 Vinayak Sahu. Built with React, TypeScript & Framer Motion.
          </p>
          <p className="text-neon-green font-mono text-xs mt-2">
            Ready to build the future, one neural network at a time.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;