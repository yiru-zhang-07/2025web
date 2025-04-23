import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

// Add theme colors as constants
const THEME = {
  primary: '#56AB2F',
  accent: '#F9C51A',
  border: '#BDD1CF',
  background: '#ECF4F4',
  white: '#FBFAF8',
  text: '#271E1E',
};

const ProjectBloom = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'challenge', label: 'Challenge' },
    { id: 'research', label: 'Research' },
    { id: 'insights', label: 'Insights' }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const HighlightedText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <motion.span
      className="relative inline-block"
      whileHover={{ scale: 1.05 }}
    >
      <span className="relative z-10 text-green-600">{children}</span>
      <motion.span
        className="absolute bottom-0 left-0 w-full h-[30%] bg-green-600/10"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 0.3 }}
      />
    </motion.span>
  );

  // First, update the useEffect scroll handler to better detect active sections
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;
      
      let currentSection = 'overview';
      sections.forEach(section => {
        const element = section as HTMLElement;
        const sectionTop = element.offsetTop - 150; // Increased offset for better detection
        const sectionBottom = sectionTop + element.offsetHeight;
        const sectionId = element.getAttribute('id');
        
        if (scrollY >= sectionTop && scrollY < sectionBottom && sectionId) {
          currentSection = sectionId;
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
            setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen" style={{ background: THEME.white }}>
      <Navigation />

      {/* Floating Navigation */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      } bg-white shadow-md`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
              <Link 
                to="/" 
              className="inline-flex items-center transition-all duration-300 hover:-translate-x-1"
              style={{ color: THEME.text }}
              >
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="mr-2"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to Projects
              </Link>
          </div>
        </div>
      </div>

      {/* Side Navigation */}
      <div className={`fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block transition-opacity duration-300 ${
        isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/60 backdrop-blur-sm rounded-lg shadow-lg p-4 xl:p-4 group-hover:p-4"
        >
          {/* Text-based navigation for larger screens */}
          <nav className="space-y-2 hidden xl:block">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'research', label: 'Research' },
              { id: 'challenge', label: 'Challenge' },
              { id: 'solution', label: 'Solution' },
              { id: 'process', label: 'Process' },
              { id: 'learnings', label: 'Learnings' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-300`}
                style={{ 
                  backgroundColor: activeSection === item.id ? THEME.primary : 'transparent',
                  color: activeSection === item.id ? THEME.white : THEME.text,
                  boxShadow: activeSection === item.id ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Dot-based navigation for smaller screens with hover expansion */}
          <div className="group xl:hidden">
            <nav className="space-y-1 transition-all duration-300 group-hover:space-y-2">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'research', label: 'Research' },
                { id: 'challenge', label: 'Challenge' },
                { id: 'solution', label: 'Solution' },
                { id: 'process', label: 'Process' },
                { id: 'learnings', label: 'Learnings' }
              ].map(item => (
                <div key={item.id} className="group/item relative">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-2 transition-all duration-300 w-2 group-hover:w-full group-hover:px-3 group-hover:py-2 group-hover:rounded-md`}
                    style={{ 
                      backgroundColor: activeSection === item.id ? THEME.primary : 'transparent',
                      color: activeSection === item.id ? THEME.white : THEME.text,
                      boxShadow: activeSection === item.id ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'
                    }}
                  >
                    <div 
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeSection === item.id ? 'scale-150' : 'scale-100'
                      }`}
                      style={{ 
                        backgroundColor: activeSection === item.id ? THEME.primary : THEME.text,
                        opacity: activeSection === item.id ? 1 : 0.5
                      }}
                    />
                    <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      {item.label}
                    </span>
                  </button>
                </div>
              ))}
            </nav>
          </div>
        </motion.div>
      </div>

      {/* Hero Section */}
      <section 
        id="overview" 
        className="min-h-screen relative overflow-hidden flex flex-col" 
        style={{ background: THEME.primary }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 animate-pulse-slow" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />

        {/* Main content container - Adjust flex layout and spacing */}
        <div className="relative z-10 flex-1 flex flex-col pt-24 pb-16">
          {/* Main content area */}
          <div className="flex-1 flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              {/* Content grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                {/* Left Content */}
                <div className="space-y-8">
                  <div className="space-y-4 transform transition-all duration-700 hover:translate-y-[-10px]">
                    <div className="flex flex-wrap gap-2">
                      {['UI/UX DESIGN', 'MOBILE APP', 'FIGMA'].map((tag) => (
                        <span key={tag} className="px-3 py-1 text-sm bg-white/20 rounded-full text-white 
                          hover:bg-white/30 transition-all duration-300 cursor-default">
                          {tag}
                </span>
                      ))}
              </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in-up">
                      BLOOM
                    </h1>
                    <p className="text-xl text-white/80 max-w-2xl animate-fade-in-up delay-200">
                      A mobile application that helps people meet other gardening lovers, get gardening ideas, tips and more
                    </p>
                    <p className="text-xl text-white/80 max-w-2xl animate-fade-in-up delay-200">
                    Awarded New York Product Design Awards 2024
                    <br />
                    Category:Interactive Design (IxD) - Motion Graphics
                    </p>
              
            </div>
          </div>

                {/* Right Content - App Preview */}
                <div className="relative">
                  <motion.div 
                    className="relative z-10 max-w-[80%] mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <img 
                      src="images/Bloom_Cover.jpg"
                      alt="Bloom Cover" 
                      className="w-full h-full object-cover"
                    />
                    <motion.div 
                      className="absolute top-4 right-4 z-20"
                      initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
                      animate={{ opacity: 1, scale: 1.3, rotate: 15 }}
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      
                      <img 
                        src="/images/Bloom_NY-Product-Design-Awards.png" 
                        alt="NY Product Design Awards" 
                        className="h-20 object-contain drop-shadow-lg"
                        onClick={() => window.open('https://nydesignawards.com/winner-info.php?id=1880', '_blank')}
                      />
                    </motion.div>
                  </motion.div>
                  {/* Adjusted decorative background elements */}
                  <div className="absolute -top-8 -right-8 w-48 h-48 rounded-full" 
                    style={{ background: THEME.accent, opacity: 0.1 }} />
                  <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full" 
                    style={{ background: THEME.accent, opacity: 0.1 }} />
                </div>
              </div>
              
              <div className="mb-24">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { title: 'Role', content: 'UI/UX Design, Design Strategy, User Research, Illustration, Motion Design' },
                    { title: 'Timeline', content: 'March 2022 - August 2022' },
                    { title: 'Scope', content: 'Problem Framing, Concept Development, Validation, Prototyping' },
                    { title: 'Tools', content: 'Figma, Adobe Illustrator, Adobe After Effects' }
                  ].map((item, index) => (
                    <motion.div 
                      key={item.title}
                      className="group bg-white/10 backdrop-blur-sm p-6 rounded-xl transform transition-all duration-500 
                    hover:bg-white/20 hover:-translate-y-2 hover:shadow-xl"
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={index}
                    >
                      <h3 className="font-semibold text-white mb-2 group-hover:text-white/90">{item.title}</h3>
                      <p className="text-white/80 group-hover:text-white">{item.content}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
              </div>
            </div>
            
        {/* Scroll indicator - Positioned relative to new spacing */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
              </div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section id="introduction"className="py-20" style={{ background: THEME.white }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 
                className="text-3xl font-bold"
                style={{ color: THEME.text }}
              >
                Lucy's Gardening Dilemma
              </h2>
              
              <div 
              className="prose prose-lg max-w-none"
              style={{ color: THEME.text }}
            >
              <p className="text-xl leading-relaxed mb-8">
                Lucy loves gardening, but her plants keep wilting. Overwhelmed by scattered tips online, she needs a simple way to get help and connect with others.
              </p>
              
              <p className="text-xl leading-relaxed">
                That's where <HighlightedText>BLOOM</HighlightedText> comes in—a friendly space to grow her garden and confidence.
              </p>
              </div>
            </motion.div>

            {/* Image with Caption */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3 max-w-md mx-auto"
            >
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="images/Bloom_Storyboard.jpg"
                  alt="Bloom Storyboard" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p 
                className="text-center text-sm italic"
                style={{ color: THEME.text }}
              >
                The story of Lucy saving her plant with "BLOOM"
              </p>
            </motion.div>
            </div>
          </div>
        </section>
  {/* Research Section */}
  <section id="research" className="py-20" style={{ background: THEME.background }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-12" style={{ color: THEME.text }}>
              Understanding Our Gardeners
            </h2>
            
            <p className="text-xl mb-12" style={{ color: THEME.text }}>
            Lucy isn't alone—many gardeners face similar struggles. Let's meet our users and uncover their pain points and needs.            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Robert Novak, 78',
                  title: 'The Expert Gardener',
                  image: 'images/Bloom_Robert.jpg',
                  description: 'A retired pilot, Robert has a lifetime of gardening experience but finds modern technology daunting.',
                  painPoints: [
                    'Intimidated by complex apps',
                    'Dislikes intrusive ads'
                  ],
                  needs: [
                    'A platform to share gardening knowledge',
                    'A way to track his plant maintenance'
                  ]
                },
                {
                  name: 'Mary Connor, 27',
                  title: 'The New Gardener',
                  image: 'images/Bloom_Mary.jpg',
                  description: 'A graduate student with a new home and garden, Mary is eager to learn but overwhelmed by conflicting online information.',
                  painPoints: [
                    'Struggles with overly wordy instructions online',
                    'Finds it hard to keep track of her gardening tasks'
                  ],
                  needs: [
                    'Clear, structured gardening guidance',
                    'A place to save articles and set reminders'
                  ]
                },
                {
                  name: 'Iris Lum, 55',
                  title: 'The Passionate Experimenter',
                  image: 'images/Bloom_Iris.jpg',
                  description: 'A nurse with a few years of gardening experience, Iris is redesigning her garden and looking for inspiration.',
                  painPoints: [
                    'Limited time to research gardening ideas',
                    'Difficulty finding expert advice'
                  ],
                  needs: [
                    'A space to explore creative gardening themes',
                    'Community feedback on her garden redesign'
                  ]
                }
              ].map((profile, index) => (
                <motion.div
                  key={profile.name}
                  className="p-6 rounded-xl"
                  style={{ 
                    background: THEME.white,
                    border: `1px solid ${THEME.border}`
                  }}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                >
                  <div className="mb-6 rounded-lg overflow-hidden">
                    <img 
                      src={profile.image} 
                      alt={profile.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: THEME.text }}>{profile.name}</h3>
                  <h4 className="text-lg mb-4" style={{ color: THEME.primary }}>{profile.title}</h4>
                  <p className="mb-6" style={{ color: THEME.text }}>{profile.description}</p>
                  
                  <div className="space-y-4">
              <div>
                      <h5 className="font-medium mb-2" style={{ color: THEME.text }}>Pain Points:</h5>
                      <ul className="space-y-2">
                        {profile.painPoints.map((point, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span style={{ color: THEME.primary }}>•</span>
                            <span style={{ color: THEME.text }}>{point}</span>
                          </li>
                        ))}
                </ul>
              </div>
                    
              <div>
                      <h5 className="font-medium mb-2" style={{ color: THEME.text }}>Needs:</h5>
                      <ul className="space-y-2">
                        {profile.needs.map((need, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span style={{ color: THEME.primary }}>•</span>
                            <span style={{ color: THEME.text }}>{need}</span>
                          </li>
                        ))}
                </ul>
              </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          </div>
        </section>

      {/* Challenge Section */}
      <motion.section 
        id="challenge" 
        className="py-20"
        style={{ background: THEME.white }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold" style={{ color: THEME.text }}>
            Cultivating a Community for Gardeners
            </h2> 
            
            <p className="text-xl leading-relaxed mb-8" style={{color: THEME.text}}>
              After understanding the challenges, BLOOM steps in—turning obstacles into opportunities. The mission is to create a thriving, supportive space where gardeners can learn, share, and grow together.
            </p>

            {/* Challenges and Goals Container */}
            <div className="space-y-6">
              {/* Challenges Section */}
              <div className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-8 items-center">
                {/* Title Column */}
                <div className="lg:self-center">
                  <h3 className="text-2xl font-semibold" style={{ color: THEME.text }}>
                    Challenges
                  </h3>
                </div>
                
                {/* Cards Column */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: 'No Dedicated Platform',
                      content: 'Social media lacks a focused space for garden lovers to share their progress and skills.',
                      icon: (
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      )
                    },
                    {
                      title: 'Limited Access to Help',
                      content: 'Beginners often face plant-related challenges but lack quick and reliable advice from experienced gardeners.',
                      icon: (
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )
                    },
                    {
                      title: 'Maintenance Tracking',
                      content: 'Busy individuals find it hard to remember watering schedules, seasonal care, and plant-specific maintenance.',
                      icon: (
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )
                    }
                  ].map((challenge, index) => (
                    <motion.div
                      key={challenge.title}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={index}
                    >
                      <div 
                        className="p-6 rounded-xl transform transition-all duration-500 hover:-translate-y-2"
                        style={{ 
                          background: 'transparent',
                          border: `2px solid ${THEME.primary}`,
                          borderLeft: `4px solid ${THEME.primary}`
                        }}
                      >
                        <div className="mb-4" style={{ color: THEME.primary }}>
                          {challenge.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-3" style={{ color: THEME.text }}>
                          {challenge.title}
                        </h3>
                        <p style={{ color: THEME.text }}>
                          {challenge.content}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Arrows Row */}
              <div className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-6">
                <div></div> {/* Empty column to maintain alignment */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[0, 1, 2].map((index) => (
                    <motion.div 
                      key={index}
                      className="flex justify-center"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 * index }}
                    >
                      <svg 
                        width="24" 
                        height="32"
                        viewBox="0 0 24 32" 
                        fill="none"
                        className="transform transition-all duration-500 hover:translate-y-2"
                      >
                        <path 
                          d="M12 0L12 24M12 24L4 16M12 24L20 16" 
                          stroke={THEME.primary}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Goals Section */}
              <div className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-6 items-center">
                {/* Title Column */}
                <div className="lg:self-center">
                  <h3 className="text-2xl font-semibold" style={{ color: THEME.text }}>
                    Goals
                  </h3>
                </div>

                {/* Cards Column */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: 'Interactive Platform',
                      content: 'Create an engaging platform to share gardening experiences and techniques.',
                      icon: (
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                      )
                    },
                    {
                      title: 'Community Building',
                      content: 'Connect like-minded individuals to form a thriving gardening network.',
                      icon: (
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      )
                    },
                    {
                      title: 'Smart Tools',
                      content: 'Offer tools to track plant care, maintenance, and gardening events.',
                      icon: (
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )
                    }
                  ].map((goal, index) => (
                    <motion.div
                      key={goal.title}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={index}
                    >
                      <div 
                        className="p-6 rounded-xl transform transition-all duration-500 hover:-translate-y-2"
                        style={{ 
                          background: THEME.primary,
                          boxShadow: `0 4px 14px ${THEME.primary}40`
                        }}
                      >
                        <div className="mb-4 text-white">
                          {goal.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-white">
                          {goal.title}
                        </h3>
                        <p className="text-white/90">
                          {goal.content}
                        </p>
                </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Opportunity Section */}
      <section id="opportunity"className="py-20" style={{ background: THEME.background }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
          
            <h2 className="text-3xl font-bold mb-12" style={{ color: THEME.text }}>
              The Opportunity
            </h2>

            <div className="max-w-4xl">
              <p className="text-xl leading-relaxed mb-12" style={{ color: THEME.text }}>
                How might we create an online gardening community with helpful solutions and ideas that can engage the online community?
              </p>
            </div>
          </div>
        </section>

      {/* Solution Section */}
      <section id="solution" className="py-20" style={{ background: THEME.white }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-12" style={{ color: THEME.text }}>
              The Solution: Designing BLOOM
            </h2>

            {/* Detailed features with alternating layout */}
            <div className="space-y-12 mb-12">
              {[
                {
                  title: 'Onboarding',
                  image: 'images/Bloom_1_onboarding.gif',
                  description: 'Quick and easy access to start your gardening journey',
                  features: [
                    'Simple sign-up process for quick access',
                    'Log in with existing social media accounts',
                    'Applying Hick\'s Law to limit choices and reduce reaction time'
                  ]
                },
                {
                  title: 'Personalization',
                  image: 'images/Bloom_2_personalization.gif',
                  description: 'Tailored experience based on your gardening expertise',
                  features: [
                    'Customize settings based on gardening experience',
                    'Gardening level adjusts feed content',
                    'Tailored experience to enhance exploration'
                  ]
                },
                {
                  title: 'Browsing and Tab Switching',
                  image: 'images/Bloom_3_browsing.gif',
                  description: 'Effortless navigation through gardening content',
                  features: [
                    'Browse trending and nearby content easily',
                    'Switch tabs with a tap or drag',
                    'Seamless navigation for an optimized feed'
                  ]
                },
                {
                  title: 'Search Ideas',
                  image: 'images/Bloom_4_interaction.gif',
                  description: 'Discover gardening inspiration with ease',
                  features: [
                    'Browse and subscribe to posts from other gardeners',
                    'Like, comment, and share posts easily',
                    'Save favorite content for future reference'
                  ]
                },
                {
                  title: 'Content Interaction',
                  image: 'images/Bloom_5_search.gif',
                  description: 'Engage with the gardening community',
                  features: [
                    'Quick image search using popular keywords',
                    'Endless scrolling for uninterrupted discovery',
                    'Smooth, non-staggered layout for easy reading'

                  ]
                },
                {
                  title: 'Gardening Record Keeping',
                  image: 'images/Bloom_6_record.gif',
                  description: 'Track and maintain your garden progress',
                  features: [
                    'Track watering, sunlight, and plant status',
                    'Maintain a gardening diary for easy updates',
                    'Record plant events to stay organized'
                  ]
                }
              ].map((feature, index) => (
                <React.Fragment key={feature.title}>
                  <motion.div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                      index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                    }`}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {/* Text Content */}
                    <div className="space-y-6 flex flex-col justify-center">
                      <div>
                        <h3 className="text-2xl font-semibold mb-3" style={{ color: THEME.text }}>
                          {feature.title}
                        </h3>
                        <p className="text-lg" style={{ color: THEME.text }}>
                          {feature.description}
                        </p>
                      </div>
                      <ul className="space-y-4">
                        {feature.features.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span 
                              className="p-1 rounded-full"
                              style={{ background: THEME.primary }}
                            >
                              <svg 
                                className="w-4 h-4 text-white" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                              >
                                <path 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  strokeWidth={2} 
                                  d="M5 13l4 4L19 7" 
                                />
                              </svg>
                            </span>
                            <span style={{ color: THEME.text }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Image/GIF - Updated size and container */}
                    <div className={`relative rounded-xl overflow-hidden ${
                      index % 2 === 1 ? 'lg:order-first' : ''
                    }`}>
                      <div className="style={{ maxHeight: '700px', height: 'auto' }}">
                        <img 
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-contain"
                          style={{ 
                            maxHeight: '700px', // Increased from 500px to 600px
                            width: '100%'
                          }}
                        />
                      </div>
                      {/* Decorative elements */}
                      <div 
                        className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full -z-10" // Increased decorative element size
                        style={{ background: THEME.accent, opacity: 0.1 }}
                      />
                    </div>
                  </motion.div>
                  
                  {/* Add divider if not the last feature */}
                  {index < 5 && (
                    <div 
                      className="w-full h-px" 
                      style={{ background: `${THEME.border}40` }} // Using border color with 40% opacity
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section - Updated background color */}
      <section id="process" className="py-20" style={{ background: THEME.background }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-12" style={{ color: THEME.text }}>
              The Process: From Concept to Prototype
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: 'Ideation & Wireframing',
                  image: 'images/Bloom_Wireframe.jpg',
                  content: 'Using storyboarding and paper wireframes, I visualized user journeys, ensuring BLOOM addressed key user needs.',
                  steps: [
                    'User journey mapping',
                    'Paper wireframes',
                    'Information architecture'
                  ]
                },
                {
                  title: 'Digital Prototypes & Testing',
                  image: 'images/Bloom_low-fid-export.png',
                  content: 'Created low-fidelity digital wireframes to refine layout and interactions, developed interactive prototypes for usability testing.',
                  steps: [
                    'Low-fidelity wireframes',
                    'Interactive prototypes',
                    'User testing iterations'
                  ]
                },
                {
                  title: 'High-Fidelity Design',
                  image: 'images/Bloom_high-fid.png',
                  content: 'Developed polished, detailed designs with refined interactions and visual elements for a cohesive user experience.',
                  steps: [
                    'Detailed UI components',
                    'Interactive animations',
                    'Refined user flows'
                  ]
                }
              ].map((phase, index) => (
                <motion.div
                  key={phase.title}
                  className="rounded-xl overflow-hidden"
                  style={{ background: THEME.background }}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                >
                  <div className="w-full aspect-[4/3] mb-6">
                    <img 
                      src={phase.image}
                      alt={phase.title}
                      className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3" style={{ color: THEME.text }}>
                      {phase.title}
                    </h3>
                    <p className="mb-4" style={{ color: THEME.text }}>
                      {phase.content}
                    </p>
                    <ul className="space-y-2">
                      {phase.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span style={{ color: THEME.primary }}>•</span>
                          <span style={{ color: THEME.text }}>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* UX Flow Diagram */}
            <div className="mt-16 space-y-6">
              <h3 className="text-2xl font-semibold" style={{ color: THEME.text }}>
                Information Architecture
              </h3>
              <motion.div 
                className="rounded-xl overflow-hidden"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <img 
                  src="images/Bloom_Flow_Chart.png"
                  alt="Bloom Flow Chart" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Outcome */}
      

      {/* The Outcome Section */}
      <section id="outcome" className="py-20" style={{ background: THEME.white }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-12" style={{ color: THEME.text }}>
              The Outcome: A Thriving Gardening Community
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
              {/* Text Content */}
              <div className="space-y-8">
                <motion.p 
                  className="text-xl leading-relaxed"
                  style={{ color: THEME.text }}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  BLOOM blossomed into an all-in-one platform where users can explore new gardening techniques, get real-time advice, and connect with fellow plant lovers. It's more than just an app—it's a space to grow knowledge, confidence, and community.
                </motion.p>
              </div>
            </div>

            {/* Visual Identity Section */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold" style={{ color: THEME.text }}>
                Consistent Visual Identity
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.p 
                  className="text-xl leading-relaxed"
                  style={{ color: THEME.text }}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  I designed a clean, vibrant style guide to reflect the spirit of BLOOM—fresh, optimistic, and welcoming. The color palette evokes nature and growth, while modern typography ensures clarity, accessibility, and a friendly user experience throughout the app.
                </motion.p>

                {/* Style Guide Image */}
                <motion.div
                  className="rounded-xl overflow-hidden shadow-lg"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <img 
                    src="images/Bloom_Style_Guide.png"
                    alt="Bloom Style Guide" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <section id="learnings" className="py-20" style={{ background: THEME.background }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-12" style={{ color: THEME.text }}>
              Key Learnings & Takeaways
            </h2>

            <div className="max-w-4xl space-y-8">
              <motion.p 
                className="text-xl leading-relaxed"
                style={{ color: THEME.text }}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                BLOOM marked a turning point in my design journey—my first time applying the full design thinking process and building a complete design system. It allowed me to bridge my background in landscape design with UX, using gardening as a way to connect people through shared experiences and practical knowledge.
              </motion.p>

              <h2 className="text-3xl font-bold mb-12" style={{ color: THEME.text }}>
              Why this project
              </h2>
              <motion.p 
                className="text-xl leading-relaxed"
                style={{ color: THEME.text }}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
              >
                I learned that community-driven features are powerful tools for engagement. BLOOM became more than a gardening app—it fostered connections, support, and joy. This project deepened my passion for designing experiences that are not only functional but also meaningful. I'm excited to keep creating digital spaces that bring people together.
              </motion.p>
            </div>
          </motion.div>
          </div>
      </section>
      {/* Insights Section */}
      <section id="insights" className="py-20" style={{ background: THEME.white }}>
        {/* Insights content here */}
        </section>

      <Footer />
    </div>
  );
};

export default ProjectBloom;
