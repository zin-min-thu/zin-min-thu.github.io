import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStacks from './components/TechStacks';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll to detect active section and sync with URL
  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      // Debounce scroll events to prevent conflicts with smooth scrolling
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const sections = ['home', 'about', 'tech', 'projects', 'contact'];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              // Update URL hash without triggering scroll
              if (section === 'home') {
                // For home section, use clean URL without hash
                if (window.location.hash) {
                  window.history.replaceState(null, null, window.location.pathname);
                }
              } else {
                // For other sections, use hash
                if (window.location.hash !== `#${section}`) {
                  window.history.replaceState(null, null, `#${section}`);
                }
              }
              break;
            }
          }
        }
      }, 100); // 100ms debounce
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // Handle initial URL hash and browser navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove the # symbol
      const sections = ['home', 'about', 'tech', 'projects', 'contact'];
      
      if (sections.includes(hash)) {
        setActiveSection(hash);
        scrollToSection(hash);
      } else {
        // Default to home if no valid hash (including no hash at all)
        setActiveSection('home');
        // Don't add hash to URL if it's the default home page
        if (window.location.hash) {
          window.history.replaceState(null, null, window.location.pathname);
        }
      }
    };

    // Handle initial load
    handleHashChange();

    // Handle browser back/forward navigation
    window.addEventListener('hashchange', handleHashChange);
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Update URL based on section
      if (sectionId === 'home') {
        // For home section, use clean URL without hash
        window.history.pushState(null, null, window.location.pathname);
      } else {
        // For other sections, use hash
        window.history.pushState(null, null, `#${sectionId}`);
      }
      
      // Add a small delay to ensure smooth scrolling works properly
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 10);
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Navbar onNavigate={scrollToSection} activeSection={activeSection} />
        
        {/* Home Section */}
        <section id="home">
          <Hero onNavigate={scrollToSection} />
        </section>
        
        {/* About Section */}
        <section id="about">
          <About />
        </section>
        
        {/* Tech Stacks Section */}
        <section id="tech">
          <TechStacks />
        </section>
        
        {/* Projects Section */}
        <section id="projects">
          <Projects />
        </section>
        
        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>
        
        {/* Footer Section */}
        <Footer onNavigate={scrollToSection} />
      </div>
    </ThemeProvider>
  );
}

export default App;
