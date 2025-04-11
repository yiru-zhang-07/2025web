
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position (only on homepage)
      if (isHomePage) {
        const sections = ['hero', 'about', 'projects'];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (!element) return false;
          
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        });
        
        if (currentSection) {
          setActiveSection(currentSection);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out px-6 md:px-10 ${
        isScrolled ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold tracking-tight">
          <img src="/public/Logo.png" alt="YZ Logo" className="h-10 w-auto" />
        </Link>
        
        {/* Navigation Tabs */}
        <nav className="flex items-center space-x-8">
          {isHomePage ? (
            <>
              <a 
                href="#hero" 
                className={`nav-link text-sm font-medium ${activeSection === 'hero' ? 'text-primary after:scale-x-100' : 'text-muted-foreground'}`}
              >
                Home
              </a>
              <a 
                href="#about" 
                className={`nav-link text-sm font-medium ${activeSection === 'about' ? 'text-primary after:scale-x-100' : 'text-muted-foreground'}`}
              >
                About
              </a>
              <a 
                href="#projects" 
                className={`nav-link text-sm font-medium ${activeSection === 'projects' ? 'text-primary after:scale-x-100' : 'text-muted-foreground'}`}
              >
                Projects
              </a>
            </>
          ) : (
            <>
              <Link to="/" className="nav-link text-sm font-medium">
                Home
              </Link>
              <Link to="/#about" className="nav-link text-sm font-medium">
                About
              </Link>
              <Link to="/#projects" className="nav-link text-sm font-medium">
                Projects
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
