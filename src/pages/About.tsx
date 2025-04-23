import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WipeableImage from '../components/WipeableImage';
import FireworkEffect from '../components/FireworkEffect';
import JustifiedImageGrid from '../components/JustifiedImageGrid';

// Add custom styles for 3D transforms
const styles = {
  perspective: {
    perspective: '2000px',
    transformStyle: 'preserve-3d',
  },
  textShadow: {
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  },
};

// Add at the top of the file after imports
type SlideDirection = 1 | -1;

// Add type definitions
interface SlideData {
  id: number;
  title: string;
  tags?: string[];
}

interface CubeSliderProps {
  currentSlide: number;
  slideData: SlideData[];
  onNext: () => void;
  onPrev: () => void;
  setSlide: (index: number) => void;
  imagePrefix?: string;
}

const About: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const heroSectionRef = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [designSlide, setDesignSlide] = useState(0);
  const [sketchSlide, setSketchSlide] = useState(0);
  const [modelSlide, setModelSlide] = useState(0);
  const [renderSlide, setRenderSlide] = useState(0);
  const [researchSlide, setResearchSlide] = useState(0);
  const [otherSlide, setOtherSlide] = useState(0);
  
  // Slider data
  const sliderData = [
    { id: 1, title: "Museum Model Building", tags: ["Architecture", "Modeling"] },
    { id: 2, title: "Tibet Pilgrimage Collage", tags: ["Culture", "Public Space"] },
    { id: 3, title: "Bike Lane Design", tags: ["Green Infrastructure", "Street Redesign"] },
    { id: 4, title: "Tri-o: Public Art Installation", tags: ["Urban Design", "Public Art"] },
    { id: 5, title: "EA-VI-RO: Kansas City Urban Design", tags: ["Urban Design", "Sustainability"] },
    { id: 6, title: "Informal Play Opportunity Research", tags: ["Nature", "Playscape"] },
    { id: 7, title: "Playground Design", tags: ["Rendering", "Landscape"] },
  ];

  // Sketch slider data
  const sketchSliderData = [
    { id: 1, title: "Pen Sketch" },
    { id: 2, title: "Perspective Sketch" },
    { id: 3, title: "Watercolor" },
    { id: 4, title: "Randoll Concept Development" },
    { id: 5, title: "Sketch 5" },
  ];

  // Model slider data
  const modelSliderData = [
    { id: 1, title: "Tri-o: Public Art Installation", tags: ["After Effect", "Sketch Up Modeling"] },
    { id: 2, title: "Museum Model Building", tags: ["Hand Modeling", "Modeling"] },
    { id: 3, title: "T", tags: ["After Effect", "Modeling"] },
    { id: 4, title: "Tibet Pilgrimage Collage", tags: ["Culture", "Public Space"] },
  ];

  // Construction slider data
  const constructionSliderData = [
    { id: 1, title: "Construction 1" },
    { id: 2, title: "Construction 2" },
    { id: 3, title: "Construction 3" },
    { id: 4, title: "Construction 4" },
  ];

  // Diagram slider data
  const diagramSliderData = [
    { id: 1, title: "Diagram 1" },
    { id: 2, title: "Diagram 2" },
    { id: 3, title: "Diagram 3" },
    { id: 4, title: "Diagram 4" },
    { id: 5, title: "Diagram 5" },
    { id: 6, title: "Diagram 6" },
    { id: 7, title: "Diagram 7" },
    { id: 8, title: "Diagram 8" },
    { id: 9, title: "Diagram 9" },
    { id: 10, title: "Diagram 10" },
  ];



  // Other projects slider data
  const otherSliderData = [
    { id: 1, title: "Other Project 1" },
    { id: 2, title: "Other Project 2" },
    { id: 3, title: "Other Project 3" },
    { id: 4, title: "Other Project 4" },
    { id: 5, title: "Other Project 5" },
    { id: 6, title: "Other Project 6" },
  ];

  // Auto slide effect for all sliders
  useEffect(() => {
    const timer = setInterval(() => {
      // Only auto-slide the main slider
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 8000); // Increased interval to 8 seconds

    return () => clearInterval(timer);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderData.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  };

  const handleNextDesignSlide = () => {
    setDesignSlide((prev) => (prev + 1) % diagramSliderData.length);
  };

  const handlePrevDesignSlide = () => {
    setDesignSlide((prev) => (prev - 1 + diagramSliderData.length) % diagramSliderData.length);
  };

  const handleNextSketchSlide = () => {
    setSketchSlide((prev) => (prev + 1) % sketchSliderData.length);
  };

  const handlePrevSketchSlide = () => {
    setSketchSlide((prev) => (prev - 1 + sketchSliderData.length) % sketchSliderData.length);
  };

  const handleNextModelSlide = () => {
    setModelSlide((prev) => (prev + 1) % modelSliderData.length);
  };

  const handlePrevModelSlide = () => {
    setModelSlide((prev) => (prev - 1 + modelSliderData.length) % modelSliderData.length);
  };

  const handleNextRenderSlide = () => {
    setRenderSlide((prev) => (prev + 1) % constructionSliderData.length);
  };

  const handlePrevRenderSlide = () => {
    setRenderSlide((prev) => (prev - 1 + constructionSliderData.length) % constructionSliderData.length);
  };




  const handleNextOtherSlide = () => {
    setOtherSlide((prev) => (prev + 1) % otherSliderData.length);
  };

  const handlePrevOtherSlide = () => {
    setOtherSlide((prev) => (prev - 1 + otherSliderData.length) % otherSliderData.length);
  };
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Optimized Cube Slider Component with push animation
  const CubeSlider = React.memo<CubeSliderProps>(({ 
    currentSlide, 
    slideData, 
    onNext, 
    onPrev, 
    setSlide,
    imagePrefix = "la"
  }) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        { threshold: 0.5 }
      );

      if (sliderRef.current) {
        observer.observe(sliderRef.current);
      }

      return () => {
        if (sliderRef.current) {
          observer.unobserve(sliderRef.current);
        }
      };
    }, []);

    useEffect(() => {
      let timer: NodeJS.Timeout;
      if (isVisible) {
        timer = setInterval(() => {
          onNext();
        }, 5000);
      }
      return () => {
        if (timer) {
          clearInterval(timer);
        }
      };
    }, [isVisible, onNext]);

    return (
      <div 
        ref={sliderRef}
        className="relative w-full overflow-hidden" 
        style={{ 
          height: 'calc(100vh - 200px)',
        }}
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0 w-full h-full"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.7}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = offset.x;
              if (swipe < -50) {
                onNext();
              } else if (swipe > 50) {
                onPrev();
              }
            }}
            initial={{ 
              x: 100,
              opacity: 0
            }}
            animate={{ 
              x: 0,
              opacity: 1
            }}
            exit={{ 
              x: -100,
              opacity: 0
            }}
            transition={{ 
              duration: 0.5,
              ease: "easeInOut"
            }}
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 blur-xl" />
              <img
                src={`/images/${imagePrefix}${slideData[currentSlide].id}.jpg`}
                alt={slideData[currentSlide].title}
                className="w-full h-full object-contain"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = `/images/${imagePrefix}${slideData[currentSlide].id}.gif`;
                }}
              />
              <div className="absolute inset-0 bg-black/200" />
              
              

              {/* Progress dots */}
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3">
                {slideData.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 scale-125'
                        : 'bg-white p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full opacity-30'
                    }`}
                    onClick={() => setSlide(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  });

  // Memoize handlers to prevent unnecessary re-renders
  const memoizedHandlers = React.useMemo(() => ({
    handleNextSketchSlide: () => setSketchSlide((prev) => (prev + 1) % sketchSliderData.length),
    handlePrevSketchSlide: () => setSketchSlide((prev) => (prev - 1 + sketchSliderData.length) % sketchSliderData.length),
    handleNextModelSlide: () => setModelSlide((prev) => (prev + 1) % modelSliderData.length),
    handlePrevModelSlide: () => setModelSlide((prev) => (prev - 1 + modelSliderData.length) % modelSliderData.length),
    handleNextRenderSlide: () => setRenderSlide((prev) => (prev + 1) % constructionSliderData.length),
    handlePrevRenderSlide: () => setRenderSlide((prev) => (prev - 1 + constructionSliderData.length) % constructionSliderData.length),
    handleNextDesignSlide: () => setDesignSlide((prev) => (prev + 1) % diagramSliderData.length),
    handlePrevDesignSlide: () => setDesignSlide((prev) => (prev - 1 + diagramSliderData.length) % diagramSliderData.length),
    handleNextOtherSlide: () => setOtherSlide((prev) => (prev + 1) % otherSliderData.length),
    handlePrevOtherSlide: () => setOtherSlide((prev) => (prev - 1 + otherSliderData.length) % otherSliderData.length),
  }), []);

  const motionProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const motionPropsWithDelay = (delay: number) => ({
    ...motionProps,
    transition: { ...motionProps.transition, delay }
  });

  return (
    <div className="min-h-screen bg-transparent">
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <section id="about-me" ref={heroSectionRef} className="snap-section hero-section h-screen w-full flex items-center justify-center relative p-0 m-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />
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
                  ABOUT ME
                </span>
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold relative text-white">
                    <span className="inline-block animate-slide-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                      Get to know
                    </span>
                    <br />
                    <span className="inline-block animate-slide-up opacity-0 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" 
                          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                      my journey
                    </span>
                    <br />
                    <br />
                    <div className="text-2xl md:text-4xl lg:text-5xl">
                      <span className="inline-block animate-slide-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                        and
                      </span>
                      {' '}
                      <span className="inline-block animate-slide-up opacity-0 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500" 
                            style={{ animationDelay: '1.0s', animationFillMode: 'forwards' }}>                      
                        passion
                        <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500 transform scale-x-0 animate-scale-in" 
                              style={{ animationDelay: '1.2s', transformOrigin: 'left' }}></span>
                      </span>
                      {' '}
                      <span className="inline-block animate-slide-up opacity-0" style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}>
                        for
                      </span>
                      {' '}
                      <span className="inline-block animate-slide-up opacity-0 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500" 
                            style={{ animationDelay: '1.6s', animationFillMode: 'forwards' }}>  
                        design
                        <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-pink-500 transform scale-x-0 animate-scale-in" 
                              style={{ animationDelay: '1.8s', transformOrigin: 'left' }}></span>
                      </span>
                    </div>
                  </h1>
                </div>
              </div>
            }
          />
        </section>

        {/* Introduction Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-16"
            >
              {/* First Paragraph with Image */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <motion.div 
                  className="order-2 md:order-1"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    From Landscape to Digital
                  </h2>
                  <p className="text-lg text-gray-700">
                    You might be wondering how someone who started as a landscape architect ended up designing apps and websites. It sounds unrelated — but it actually isn't. My journey into the digital world began by accident in 2019, when I was a research assistant at Penn State University. My professor asked me to build a website for her Stormwater Living Lab. At that time, I knew almost nothing about web design — but I was curious, so I said yes.
                  </p>
                </motion.div>
                <motion.div 
                  className="order-1 md:order-2"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <img 
                    src="/images/landscape-architect.jpg" 
                    alt="Landscape Architecture"
                    className="w-full h-auto rounded-lg shadow-lg transform transition-all duration-700 hover:scale-[1.02] hover:rotate-1"
                    loading="lazy"
                  />
                </motion.div>
              </motion.div>

              {/* Second Paragraph with Image */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center pt-24"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <img 
                    src="/images/wordpress-project.jpg" 
                    alt="WordPress Project"
                    className="w-full h-auto rounded-lg shadow-lg transform transition-all duration-700 hover:scale-[1.02] hover:rotate-1"
                    loading="lazy"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Learning by Doing
                  </h2>
                  <p className="text-lg text-gray-700">
                    I started with a WordPress multisite network, and step by step, taught myself how to anchor web pages with basic code, improve navigation, and enhance the user experience. It wasn't perfect, but after four months of trial, error, and a lot of Googling, I ended up with a fully functional, comprehensive website that organized research findings, projects, and lab news in a clear and accessible way.
                  </p>
                </motion.div>
              </motion.div>

              {/* Third Paragraph with Image */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center pt-24"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <motion.div 
                  className="order-2 md:order-1"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Expanding My Skills
                  </h2>
                  <p className="text-lg text-gray-700">
                    That experience completely opened my eyes to the digital world — and I was hooked. I started taking more courses during my time at the University of Michigan, including Web Design (with HTML and CSS), Interactive Design (where I systematically learned user-centered approaches), and User Research (focused on interviews and qualitative methods).
                  </p>
                </motion.div>
                <motion.div 
                  className="order-1 md:order-2"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <img 
                    src="/images/ux-courses.jpg" 
                    alt="UX Courses"
                    className="w-full h-auto rounded-lg shadow-lg transform transition-all duration-700 hover:scale-[1.02] hover:rotate-1"
                    loading="lazy"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Past Design Projects Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider rounded-full bg-white mb-4">
                Past Design Projects
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Curious about other projects I've worked on? 
                <br />
                <br />
                Let's scroll.
              </h2>
              
            </motion.div>
          </div>
        </section>

        {/* Design & Visual Storytelling Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              
              <h3 className="text-2xl font-bold text-foreground mb-4">Hand Sketches & Concept Development</h3>
              <p className="text-gray-700 mb-6 text-center">
              <span className="font-semibold"> From pen sketches to watercolors,</span> I explored different mediums to explore the world. 
              </p>
              

              {/* Sketch Work Section */}
              <div className="mb-12">
                <CubeSlider
                  currentSlide={sketchSlide}
                  slideData={sketchSliderData}
                  onNext={memoizedHandlers.handleNextSketchSlide}
                  onPrev={memoizedHandlers.handlePrevSketchSlide}
                  setSlide={setSketchSlide}
                  imagePrefix="la-sketch"
                />
              </div>

              {/* 3D Model Section */}
              <div className="pt-16 mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-4">3D Modeling & Renderings</h3>
                <p className="text-gray-700 mb-6 text-left">
                  <span className="font-semibold"> Tri-O:</span> a public art installation in Pennsylvania. --  awarded <span className="underline">London Design Award</span> in 2024
                </p>
                <p className="text-gray-700 mb-6 text-left">
                  <span className="font-semibold"> Spatial Study of Museum Project:</span>  modeling from light study to sketching, to hand modeling to study light and space.
                </p>
                <p className="text-gray-700 mb-6 text-left">
                  <span className="font-semibold"> Collage Rending:</span>  showing pilgrimagers in Tibet.
                </p>

                <CubeSlider
                  currentSlide={modelSlide}
                  slideData={modelSliderData}
                  onNext={memoizedHandlers.handleNextModelSlide}
                  onPrev={memoizedHandlers.handlePrevModelSlide}
                  setSlide={setModelSlide}
                  imagePrefix="la-model"
                />
              </div>

              {/* Construction World Section */}
              <div className="pt-16 mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-4">Construction World & Built Projects</h3>
                <p className="text-gray-700 mb-6 text-left">
                  <span className="font-semibold"> Built Projects in the construction world: </span> From concept to construction, these are real-world projects where I've seen ideas turn into spaces people can experience and enjoy.
                </p>

                <CubeSlider
                  currentSlide={renderSlide}
                  slideData={constructionSliderData}
                  onNext={memoizedHandlers.handleNextRenderSlide}
                  onPrev={memoizedHandlers.handlePrevRenderSlide}
                  setSlide={setRenderSlide}
                  imagePrefix="la-construction"
                />
              </div>

              {/* Mapping & GIS Section */}
              <div className="pt-16 mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-4">Geospatial Intelligence & Data Mapping</h3>
                <div className="text-left space-y-6 mb-12">
                    <p className="text-gray-700">
                    <span className="font-semibold">Crime Data Visualisation:</span> I used Python to write a small tool in Geographical Information System (GIS) to visualize crime data.
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Behavior & Movement Mapping:</span> With Ghel's method of behavior mapping, I mapped the movement of bikers in Copenhagen, Denmark to learn the infrastructure supports their behavior.
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Suitability & Spatial Analysis:</span> McHarg's classic method of finding the most suitable places aggregating all the related data points.
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Bonus: </span> I also hold a  Graduate Certificate in <span className="underline"> Geospatial Intelligence Analytics </span>from Penn State University.
                  </p>
                </div>  


                <CubeSlider
                  currentSlide={designSlide}
                  slideData={diagramSliderData}
                  onNext={memoizedHandlers.handleNextDesignSlide}
                  onPrev={memoizedHandlers.handlePrevDesignSlide}
                  setSlide={setDesignSlide}
                  imagePrefix="la-diagram"
                />
              </div>

              {/* Research Section */}
              <div className="pt-16 mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-4">Research Projects </h3>
                
                <div className="text-left space-y-6 mb-12">
                  <p className="text-gray-700">
                    <span className="font-semibold">Spatial Data Approach published: </span> Interweaving Computational and Tacit Knowledges to Design Nature-based Play
                    Networks in Underserved Communities at journey <span className='italic'>Land</span>
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">VR Design Experiences:</span> I designed spaces in virtual reality — yes, you can literally walk through my designs before they're built.
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">City-Scale Design Automation:</span> At Gensler, I worked with Delve (developed by Google's Sidewalk Labs) to optimize urban design on a massive scale.
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Future Mobility Research:</span> Back in 2019, I researched how self-driving cars will shape our cities and infrastructure. It opened my eyes to how we can plan smarter, more adaptable spaces for the future.
                  </p>
                </div>
              </div>

              {/* Publications and Conferences Section */}
              <div className="pt-16 mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">Conferences & Talks</h3>
                <div className="text-left space-y-6 mb-12">
                  

                  <p className="text-gray-700">
                    <span className="font-semibold">Cumputational Urban Planning & Urban Mgt. </span> "Reconciling computational and tacit knowledges: A spatial data approach to neighborhood-scale, nature-based play networks in underserved communities," 17th Int'l. Conference on Computational Urban Planning & Urban Mgt., Aalto University, Finland, 2021.
                  </p>
                    
                  <p className="text-gray-700">
                    <span className="font-semibold">CCAP Pennsylvania GIS Conference </span> "Merging spatial data approaches to nature-based play networks," CCAP Pennsylvania GIS Conference, 2021.
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Council of Educators in Landscape Architecture </span> "A spatial data approach to neighborhood-scale, nature-based playscapes in underserved communities," Council of Educators in Landscape Architecture 2021 Annual Conference, poster, 2021.
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">10th Child in the City World Conference </span> "Landscape design approaches to nature-based playscapes in Philadelphia," 10th Child in the City World Conference, Dublin, Ireland, accepted, 2022.
                  </p>
                  <CubeSlider
                  currentSlide={otherSlide}
                  slideData={otherSliderData}
                  onNext={memoizedHandlers.handleNextOtherSlide}
                  onPrev={memoizedHandlers.handlePrevOtherSlide}
                  setSlide={setOtherSlide}
                  imagePrefix="la-others"
                /></div>
                
              </div>
            </motion.div>
          </div>
        </section>

        
        
        

        {/* Outside of Work Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div 
              className="text-center mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider rounded-full bg-white mb-4">
                Outside of work
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Besides design, I also like to take inspiration from nature, and go outside to explore.
              </h2>
              
              <p className="text-gray-700 mb-8 text-center">
                Rock climbing, learning to surf, or simply exploring new places and soaking up fresh inspiration along the way.
              </p>
            </motion.div>
          </div>
          <div className="w-full">
            <div style={{ margin: 0, padding: 0, width: '100vw'  }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <JustifiedImageGrid 
                  images={Array.from({ length: 14 }, (_, i) => `/images/lb${i + 1}.jpg`)}
                />
            </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div 
                className="text-center mb-14"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Thanks for scrolling all the way down!
              </h2>
              <p className="text-gray-700 mb-8 text-center">
                If you have any questions or would like to get in touch, please don't hesitate to reach out.
              </p>
              <div className="flex justify-center gap-6 mb-20">
                {[1, 2, 3].map((num) => (
                  <motion.img
                    key={num}
                    src={`/images/avatar-${num}.png`}
                    alt={`Avatar ${num}`}
                    className="w-24 h-24 object-contain"
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: num * 0.1 }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About; 