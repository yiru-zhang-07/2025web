import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import LFGChallenge from "../images/LFG_challenge.png";
import LFGCourses from "../images/LFG_courses.png";
import LFGZoomMeeting from "../images/LFG_Zoom_meeting2.png";

const ProjectLearningForGood = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;
      const windowHeight = window.innerHeight;
      
      let currentSection = activeSection; // Keep current section if no new one is found
      
      sections.forEach(section => {
        const element = section as HTMLElement;
        const sectionTop = element.offsetTop - 100;
        const sectionBottom = sectionTop + element.offsetHeight;
        
        // Only update if the section is in the middle of the viewport
        if (scrollY + (windowHeight / 2) >= sectionTop && 
            scrollY + (windowHeight / 2) <= sectionBottom) {
          currentSection = element.getAttribute('id') || currentSection;
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]); // Add activeSection as dependency

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setActiveSection(sectionId); // Set active section immediately on click
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Navigation items with short labels
  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'challenge', label: 'Challenge' },
    { id: 'research', label: 'Research' },
    { id: 'solution', label: 'Solution' },
    { id: 'impact', label: 'Impact' }
  ];

  const HighlightedText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <motion.span
      className="relative inline-block"
      whileHover={{ scale: 1.05 }}
    >
      <span className="relative z-10 text-[#00b5cc]">{children}</span>
      <motion.span
        className="absolute bottom-0 left-0 w-full h-[30%] bg-[#00b5cc]/10"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 0.3 }}
      />
    </motion.span>
  );

  // Fix the grid pattern background
  const gridPattern = {
    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
    backgroundSize: '40px 40px'
  };

  // Remove the import statement and use the image path directly
  const LFGCover = "/src/images/LFG_Cover.png";

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Update document title
  useEffect(() => {
    document.title = "Learning For Good | Yiru's Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Floating Navigation - Only show when scrolled */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      } bg-white shadow-md`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link 
              to="/" 
              className="inline-flex items-center transition-all duration-300 hover:-translate-x-1 text-gray-800"
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

      {/* Side Navigation - Only show when scrolled */}
      <div className={`fixed right-8 top-[50%] transform -translate-y-1/2 z-40 hidden lg:block transition-opacity duration-300 ${
        isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/60 backdrop-blur-sm rounded-lg shadow-lg p-4"
        >
          <nav className="space-y-2">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-[#00b5cc] text-white shadow-md font-medium' 
                    : 'text-gray-600 hover:bg-gray-100 hover:text-[#00b5cc]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </motion.div>
      </div>

      {/* Hero Section */}
      <section id="overview" className="min-h-screen bg-[#00b5cc] relative overflow-hidden flex flex-col justify-between py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 animate-pulse-slow" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        
        {/* Main Content */}
        <div className="relative z-10 flex-grow flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-8">
                <div className="space-y-4 transform transition-all duration-700 hover:translate-y-[-10px]">
                  <div className="flex flex-wrap gap-2">
                    {['UX DESIGN', 'WEBSITE REDESIGN', 'WEBFLOW'].map((tag) => (
                      <span key={tag} className="px-3 py-1 text-sm bg-white/20 rounded-full text-white 
                        hover:bg-white/30 transition-all duration-300 cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold text-white 
                    animate-fade-in-up">
                    Learning For Good
                  </h1>
                  <p className="text-xl text-white/80 max-w-2xl animate-fade-in-up delay-200">
                    Redesigning a corporate website to better connect schools with educational content creators
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00b5cc]/30 to-white/30 rounded-xl blur-lg 
                  group-hover:blur-xl transition-all duration-700"></div>
                <div className="relative">
                  <img 
                    src="/src/images/LFG_Cover.png"
                    alt="Learning For Good Cover"
                    className="w-full h-auto rounded-xl shadow-2xl transform transition-all duration-700 
                      group-hover:scale-[1.1] group-hover:rotate-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Info Cards - Bottom of Hero */}
        <div className="relative z-10 w-full pb-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: 'Role', content: 'UX Designer, Volunteer' },
                { title: 'Timeline', content: 'February 2025 - Present' },
                { title: 'Scope', content: 'Corporate website refactor' },
                { title: 'Tools', content: 'WebFlow' },
              ].map((item, index) => (
                <div 
                  key={item.title}
                  className="group bg-white/10 backdrop-blur-sm p-6 rounded-xl transform transition-all duration-500 
                    hover:bg-white/20 hover:-translate-y-2 hover:shadow-xl"
                  style={{ 
                    animationDelay: `${index * 200}ms`,
                    animation: 'fadeInUp 0.8s ease-out forwards'
                  }}
                >
                  <h3 className="font-semibold text-white mb-2 group-hover:text-white/90">{item.title}</h3>
                  <p className="text-white/80 group-hover:text-white">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <motion.section 
        id="challenge" 
        className="py-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16">
            The Challenge: A Website That Didn't Speak Loud Enough
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="prose prose-lg max-w-none">
                <p>
                  When I first explored Learning For Good's website, I saw an organization with a powerful mission
                  {' '}—but a digital presence that didn't quite reflect it. Their work in{' '}
                  <HighlightedText>connecting schools and educators</HighlightedText>
                  {' '}with creators of educational resources was making a tangible difference, yet their website 
                  <HighlightedText>felt static, difficult to navigate, and lacked the emotional pull </HighlightedText>
                  {' '}that could drive action.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div 
                  className="p-6 rounded-xl bg-card border-2 border-[#00b5cc]/20 hover:border-[#00b5cc] hover:shadow-lg transition-all duration-300"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={0}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-[#00b5cc]/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#00b5cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold">Low Engagement</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Visitors weren't staying long enough to understand the value proposition
                  </p>
                </motion.div>

                <motion.div 
                  className="p-6 rounded-xl bg-card border-2 border-[#00b5cc]/20 hover:border-[#00b5cc] hover:shadow-lg transition-all duration-300"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={1}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-[#00b5cc]/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#00b5cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold">Resource Discovery</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Schools struggled to find available teaching resources
                  </p>
                </motion.div>

                <motion.div 
                  className="p-6 rounded-xl bg-card border-2 border-[#00b5cc]/20 hover:border-[#00b5cc] hover:shadow-lg transition-all duration-300"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={2}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-[#00b5cc]/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#00b5cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold">Connection Barriers</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Content creators lacked clear paths to contribute
                  </p>
                </motion.div>
              </div>
            </div>

            <div className="flex flex-col">
              <motion.div 
                className="relative rounded-xl overflow-hidden bg-[#00b5cc]/5"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="aspect-[4/3] w-full bg-[#00b5cc]/10 flex items-center justify-center">
                  <img 
                    src={LFGChallenge}
                    alt="Learning For Good Challenge"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="absolute inset-0 border-2 border-[#00b5cc]/20 rounded-xl"></div>
              </motion.div>
              <p className="text-sm text-muted-foreground mt-4">
                Learning For Good joins Helping Hands TV episodes in a continued effort to make a greater impact.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Research Section */}
      <section id="research" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16">Understanding the Disconnect</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="p-8 rounded-xl bg-card border-2 border-[#00b5cc]/20 hover:border-[#00b5cc] hover:shadow-lg transition-all duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#00b5cc]/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#00b5cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Stakeholder Insights</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Educators were unsure where to find relevant resources</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Content creators lacked a clear path to contribute</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Navigation was confusing and not action-oriented</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="p-8 rounded-xl bg-card border-2 border-[#00b5cc]/20 hover:border-[#00b5cc] hover:shadow-lg transition-all duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#00b5cc]/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#00b5cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">User Behavior Analysis</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>High bounce rates on homepage</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Complex sign-up process deterred creators</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Educational resources were difficult to discover</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16">The Solution</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-card">
              <h3 className="text-xl font-semibold mb-6">Story-Driven Experience</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>Purpose-driven homepage design</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>Real stories from teachers and creators</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>Showcase of successful collaborations</span>
                </li>
              </ul>
            </div>

            <div className="relative rounded-xl overflow-hidden">
              <img 
                src={LFGCourses}
                alt="Learning For Good Courses"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16">Impact & Key Takeaways</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="prose prose-lg max-w-none mb-12">
              <p>
                The redesign has led to significant improvements in user engagement and conversion rates. Users now stay longer on the site and interact with more content, while schools and creators are more actively participating in the platform. The website now better reflects the organization's mission and impact, creating a stronger brand presence.
              </p>
            </div>

            <div className="relative rounded-xl overflow-hidden">
              <img 
                src={LFGZoomMeeting}
                alt="Learning For Good Zoom Meeting"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>

          <div className="prose prose-lg max-w-none mt-8">
            <p>
              Visit the live site at{" "}
              <a 
                href="http://www.learningforgood.com.au" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#00b5cc] hover:underline"
              >
                www.learningforgood.com.au
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectLearningForGood; 