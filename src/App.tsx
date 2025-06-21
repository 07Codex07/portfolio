import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import TechStackSection from './components/TechStackSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-inter relative overflow-x-hidden">
      <Navbar />
      
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CertificationsSection />
        <TechStackSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
