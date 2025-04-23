import React, { useRef, useEffect, useState } from 'react';
import WipeableImage from '../components/WipeableImage';
import Navigation from '../components/Navigation';
import Projects from '../components/Projects';
import OutsideOfWork from '../components/OutsideOfWork';
import Footer from '../components/Footer';
import FireworkEffect from '../components/FireworkEffect';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  const heroSectionRef = useRef<HTMLElement>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <>
      <Navigation />
      
      <main className="bg-paper">
        <section id="hero" ref={heroSectionRef} className="snap-section hero-section h-screen w-full flex items-center justify-center relative p-0 m-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />
          <FireworkEffect />
          <div 
            className="hero-cursor"
            style={{
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y}px`
            }}
          />
          <WipeableImage
            topImage="data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='texture' patternUnits='userSpaceOnUse' width='100' height='100'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23222' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='%23111111'/%3E%3Crect width='100' height='100' fill='url(%23texture)'/%3E%3C/svg%3E"
            className="w-full h-screen absolute inset-0"
            containedMode={false}
            bottomContent={
              <div className="flex flex-col items-center justify-center text-center p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider rounded-full bg-secondary mb-4 animate-fade-in text-foreground" style={{ animationDelay: '0.2s' }}>
                  UX DESIGNER
                </span>
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold relative text-white">
                    <span className="inline-block animate-slide-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                      Hi there
                    </span>
                    <br />
                    <span className="inline-block animate-slide-up opacity-0 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" 
                          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                      I'm Yiru!
                    </span>
                    <br />
                    <br />
                    <div className="text-2xl md:text-4xl lg:text-5xl">
                      <span className="inline-block animate-slide-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                        I design
                      </span>
                      {' '}
                      <span className="inline-block animate-slide-up opacity-0 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500" 
                            style={{ animationDelay: '1.0s', animationFillMode: 'forwards' }}>                      
                        fun
                        <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500 transform scale-x-0 animate-scale-in" 
                              style={{ animationDelay: '1.2s', transformOrigin: 'left' }}></span>
                      </span>
                      {' '}
                      <span className="inline-block animate-slide-up opacity-0" style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}>
                        and
                      </span>
                      {' '}
                      <span className="inline-block animate-slide-up opacity-0 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500" 
                            style={{ animationDelay: '1.6s', animationFillMode: 'forwards' }}>  
                        engaging
                        <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-pink-500 transform scale-x-0 animate-scale-in" 
                              style={{ animationDelay: '1.8s', transformOrigin: 'left' }}></span>
                      </span>
                      {' '}
                      <span className="inline-block animate-slide-up opacity-0" style={{ animationDelay: '2.0s', animationFillMode: 'forwards' }}>
                        experiences.
                      </span>
                    </div>
                  </h1>
                </div>
                <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-8 animate-fade-in" style={{ animationDelay: '2.2s' }}>
                </p>
                <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: '2.4s' }}>
                  <div className="flex flex-col items-center mt-8">
                    <div className="flex space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div 
                          key={i} 
                          className="animate-bounce" 
                          style={{ 
                            animationDelay: `${2.6 + (i * 0.2)}s`,
                            animationDuration: '1.5s'
                          }}
                        >
                          <svg 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          >
                            <path d="M12 5v14M5 12l7 7 7-7"/>
                          </svg>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        </section>
        
        <Projects />
        <section id="outside-work">
          <OutsideOfWork />
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
