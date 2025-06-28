import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import TechStackSection from './components/TechStackSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MatrixBackground from './components/MatrixBackground';
import SocialLinksFooter from './components/SocialLinksFooter';

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-inter relative overflow-x-hidden">
      <MatrixBackground />
      <Navbar />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <TechStackSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      
      <Footer />
      <SocialLinksFooter />
    </div>
  );
}

export default App;