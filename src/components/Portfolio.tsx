import { useState, useEffect } from 'react';
import Hero from './Hero';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Navigation from './Navigation';

function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen relative overflow-x-hidden">
      {/* Global background effects */}
      <div className="fixed inset-0 grid-pattern opacity-5 pointer-events-none z-0" />
      <div className="fixed top-0 left-1/4 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed bottom-0 right-1/4 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none z-0" />
      
      <div className="relative z-10">
        <Navigation activeSection={activeSection} />
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default Portfolio;
