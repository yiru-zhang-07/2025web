import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      const projectsSection = document.getElementById('projects');
      
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        setIsScrolled(heroRect.bottom < 0);
        
        // Only check sections if we're on the home page
        if (location.pathname === '/') {
          // Check if we're at the top of the page
          if (window.scrollY === 0) {
            setActiveSection('home');
          } else if (projectsSection) {
            const projectsRect = projectsSection.getBoundingClientRect();
            // If projects section is in view
            if (projectsRect.top <= 100 && projectsRect.bottom >= 100) {
              setActiveSection('projects');
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const textColor = isScrolled ? 'text-foreground' : 'text-white';
  const navBackground = isScrolled ? 'bg-white shadow-sm' : 'bg-transparent';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${navBackground}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" onClick={handleScrollToTop} className="flex items-center">
            <motion.img 
              src={isScrolled ? "/images/Logo.png" : "/images/icon-yz-w.png"}
              alt="Yiru"
              className="h-8 w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link to="/" onClick={handleScrollToTop}>
              <motion.span 
                className={`text-sm font-medium ${textColor} relative group`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Home</span>
                <span className={`absolute inset-0 ${location.pathname === '/' && activeSection === 'home' ? 'w-full' : 'w-0 group-hover:w-full'} transition-all duration-300 bg-gradient-to-r ${isScrolled ? 'from-pink-500/30 via-purple-500/30 to-blue-500/30' : 'from-pink-500 via-purple-500 to-blue-500'}`} />
              </motion.span>
            </Link>
            <Link to="/" onClick={() => {
              if (location.pathname !== '/') {
                // If not on home page, wait for navigation then scroll
                setTimeout(() => {
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              } else {
                // If already on home page, just scroll
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}>
              <motion.span 
                className={`text-sm font-medium ${textColor} relative group`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Projects</span>
                <span className={`absolute inset-0 ${location.pathname === '/' && activeSection === 'projects' ? 'w-full' : 'w-0 group-hover:w-full'} transition-all duration-300 bg-gradient-to-r ${isScrolled ? 'from-pink-500/30 via-purple-500/30 to-blue-500/30' : 'from-pink-500 via-purple-500 to-blue-500'}`} />
              </motion.span>
            </Link>
            <Link to="/about">
              <motion.span 
                className={`text-sm font-medium ${textColor} relative group`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">About</span>
                <span className={`absolute inset-0 ${location.pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'} transition-all duration-300 bg-gradient-to-r ${isScrolled ? 'from-pink-500/30 via-purple-500/30 to-blue-500/30' : 'from-pink-500 via-purple-500 to-blue-500'}`} />
              </motion.span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
