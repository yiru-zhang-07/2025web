import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

// Add theme colors as constants
const THEME = {
  primary: '#25bfc1', // Blue color for talent assessment theme
  accent: '#45808d', // Amber color for accents
  border: '#E5E7EB',
  background: '#F3F4F6',
  white: '#FFFFFF',
  text: '#1F2937',
};

const ProjectTalentAssessment = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute left-0 w-full"
        style={{ 
          background: THEME.primary, 
          opacity: 0.3,
          height: '0.8em',
          top: '50%',
          transform: 'translateY(-50%)'
        }}
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 0.3 }}
      />
    </motion.span>
  );

  // Scroll handler for active section detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;
      
      let currentSection = 'overview';
      sections.forEach(section => {
        const element = section as HTMLElement;
        const sectionTop = element.offsetTop - 150;
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

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full mx-4">
            <img 
              src={selectedImage}
              alt="Enlarged view"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

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
          className="bg-white/60 backdrop-blur-sm rounded-lg shadow-lg p-4"
        >
          <nav className="space-y-2">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'challenge', label: 'Challenge' },
              { id: 'research', label: 'Research' },
              { id: 'insights', label: 'Insights' },
              { id: 'findings', label: 'Findings' },
              { id: 'recommendations', label: 'Recommendations' },
              { id: 'conclusion', label: 'Conclusion' }
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

        {/* Main content container */}
        <div className="relative z-10 flex-1 flex flex-col pt-24 pb-16">
          {/* Main content area */}
          <div className="flex-1 flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              {/* Content grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                  <div className="space-y-4 transform transition-all duration-700 hover:translate-y-[-10px]">
                    <div className="flex flex-wrap gap-2">
                      {['UX RESEARCH', 'USER INTERVIEWS', 'AFFINITY MAPPING', 'B2B SaaS','ENTERPRISE SOFTWARE'].map((tag) => (
                        <span key={tag} className="px-3 py-1 text-sm bg-white/20 rounded-full text-white 
                          hover:bg-white/40 transition-all duration-300 cursor-default">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in-up">
                      Rethinking Talent Assessment
                    </h1>
                    <p className="text-xl text-white max-w-2xl animate-fade-in-up delay-200">
                      A UX Research case study improving <span className="font-bold"> TalentGuard</span>'s assessment experience.
                      <br></br>
                    </p>
                  </div>
                </div>

                {/* Right Content - Project Preview */}
                <div className="relative">
                  <motion.div 
                    className="relative z-10 max-w-[80%] mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <img 
                      src="images/TG_cover.jpg"
                      alt="Talent Assessment Cover" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                    
                  <motion.button
                    onClick={() => scrollToSection('findings')}
                    className="mt-6 w-full py-3 px-6 rounded-lg text-theme transition-all duration-300 hover:bg-white/20 mb-6"
                    style={{ background: THEME.border }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                      View Key Findings
                  </motion.button>
                    
                  </motion.div>
                  {/* Decorative background elements */}
                  <div className="absolute -top-8 -right-8 w-48 h-48 rounded-full" 
                    style={{ background: THEME.white, opacity: 0.1 }} />
                  <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full" 
                    style={{ background: THEME.white, opacity: 0.1 }} />
                </div>
              </div>
            </div>
          </div>

          {/* Project Info Cards */}
          <div className="mt-auto">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { title: 'Role', content: 'UX Researcher, Consultant, Interviewer' },
                  { title: 'Scope', content: 'User Research, Qualitative Analysis, UX Recommendations' },
                  { title: 'Tools', content: 'User Interviews, Affinity Mappings' },
                  { title: 'Timeline', content: 'August – December 2022' }
                ].map((item, index) => (
                  <motion.div 
                    key={item.title}
                    className="group bg-white/20 backdrop-blur-sm p-6 rounded-xl transform transition-all duration-500 
                  hover:shadow-xl"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={index}
                  >
                    <h3 className="font-semibold text-white mb-2 group-hover:text-white/90">{item.title}</h3>
                    <p className="text-white/95 group-hover:text-white">{item.content}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Context Section */}
      <section id="insights" className="py-24" style={{ background: THEME.white }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold" style={{ color: THEME.text }}>
                  Project Summary
                </h2>
                <motion.p 
                  className="text-xl leading-relaxed"
                  style={{ color: THEME.text }}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  We conducted <HighlightedText>qualitative interviews</HighlightedText> and <HighlightedText>affinity mapping</HighlightedText> to explore the current challenges facing <HighlightedText>TalentGuard</HighlightedText>'s talent assessment module.
                </motion.p>
              </div>

              {/* Right Column - Image */}
              <motion.div
                className="relative self-start"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src="images/TG_pre.jpg"
                  alt="TalentGuard Project Preview"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                <p className="text-sm text-center mt-4" style={{ color: THEME.text }}>
                  Animated presentation image of our team
                </p>
                {/* Decorative background elements */}
                <div className="absolute -top-8 -right-8 w-48 h-48 rounded-full -z-10" 
                  style={{ background: THEME.white, opacity: 0.1 }} />
                <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full -z-10" 
                  style={{ background: THEME.white, opacity: 0.1 }} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Client: TalentGuard Section */}
      <section id="about" className="py-24" style={{ background: THEME.background }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Image */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src="images/TG_about.png"
                  alt="About TalentGuard"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                {/* Decorative background elements */}
                <div className="absolute -top-8 -right-8 w-48 h-48 rounded-full -z-10" 
                  style={{ background: THEME.accent, opacity: 0.1 }} />
                <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full -z-10" 
                  style={{ background: THEME.accent, opacity: 0.1 }} />
              </motion.div>

              {/* Right Column - Content */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold" style={{ color: THEME.text }}>
                  Our Client: TalentGuard
                </h2>
                <p className="text-xl leading-relaxed" style={{ color: THEME.text }}>
                  TalentGuard is a cloud-based SaaS company specializing in <HighlightedText> talent management </HighlightedText> and development, providing innovative <HighlightedText> HR software </HighlightedText> to optimize workforce performance, growth, and succession planning.
                </p>
                
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Needs Section */}
      <section id="challenge" className="py-24" style={{ background: THEME.white }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold" style={{ color: THEME.text }}>
                  What do TalentGuard need?
                </h2>
                <p className="text-xl leading-relaxed" style={{ color: THEME.text }}>
                  TalentGuard is looking for  <HighlightedText>improvements in the workflow</HighlightedText> of its Talent Assessment Module to enhance the user experience of the onboarding process.
                </p>
                
              </div>

              {/* Right Column - Quote */}
              <motion.div
                className="relative p-8 rounded-xl self-start"
                style={{ 
                  background: THEME.primary,
                  opacity: 0.1,
                  border: `1px solid ${THEME.border}`
                }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute top-0 left-0 w-12 h-12" style={{ color: THEME.text }}>
                  <svg viewBox="0 0 24 24" fill="white">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-xl italic pl-12" style={{ color: THEME.white }}>
                  "Users often abandon the platform after their first assessment, making it difficult to maintain engagement and provide effective training."
                </p>
                <br />
                <p className="text-right mt-4" style={{ color: THEME.white }}>
                  - from the TalentGuard brief
                </p>
                {/* Decorative background elements */}
                <div className="absolute -top-8 -right-8 w-48 h-48 rounded-full -z-10" 
                  style={{ background: THEME.white, opacity: 0.1 }} />
                <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full -z-10" 
                  style={{ background: THEME.white, opacity: 0.1 }} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-24" style={{ background: THEME.background }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <h2 className="text-3xl font-bold" style={{ color: THEME.text }}>
              Methodology
            </h2>

            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="/images/TG_cover.jpg"
                alt="TalentGuard Methodology"
                className="w-full h-auto rounded-xl shadow-lg"
              />
              <p className="text-sm text-center mt-4" style={{ color: THEME.text }}>
                Our research methodology and process
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testing Process Section */}
      <section id="testing" className="py-24" style={{ background: THEME.white }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-24"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold" style={{ color: THEME.text }}>
                How did we do the semi-structured interviews?
              </h2>
              <p className="text-xl leading-relaxed max-w-3xl mx-auto" style={{ color: THEME.text }}>
                Specifically, We followed five clear steps to gather and analyze user feedback:
              </p>
            </div>

            {/* Step 1 - Background Research Report */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              
              
              <div className="relative rounded-xl overflow-hidden shadow-lg bg-gray-100 p-4">
                <iframe 
                  src="/images/TG_Background_Research_Report.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
                  className="w-full h-[500px] rounded-lg"
                  title="Background Research Report"
                  style={{ border: 'none' }}
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" 
                    style={{ background: THEME.primary, color: THEME.white }}>
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-2xl font-semibold" style={{ color: THEME.text }}>
                    Conducted background research
                  </h3>
                </div>
                <p className="text-lg leading-relaxed" style={{ color: THEME.text }}>
                  Each of us research on a portion of the industry and the company.
                </p>
              </div>
            </motion.div>

            {/* Step 2 - Interview Protocol */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg bg-gray-100 p-4">
                <iframe 
                  src="/images/TG_Interview Protocol.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
                  className="w-full h-[500px] rounded-lg"
                  title="Interview Protocol PDF"
                  style={{ border: 'none' }}
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" 
                    style={{ background: THEME.primary, color: THEME.white }}>
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-2xl font-semibold" style={{ color: THEME.text }}>
                    Prepared an interview protocol
                  </h3>
                </div>
                <p className="text-lg leading-relaxed" style={{ color: THEME.text }}>
                  Conducted five semi-structured interviews, with a 2-hour session plan for each.
                </p>
              </div>
            </motion.div>

            {/* Step 3 - Zoom Interview */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              
              <div 
                className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => setSelectedImage("/images/TG_interview.png")}
              >
                <img 
                  src="/images/TG_interview.png"
                  alt="Zoom Interview"
                  className="w-full h-auto"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" 
                    style={{ background: THEME.primary, color: THEME.white }}>
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-2xl font-semibold" style={{ color: THEME.text }}>
                    Conducted semi-structured interviews
                  </h3>
                </div>
                <p className="text-lg leading-relaxed" style={{ color: THEME.text }}>
                  One person asked questions, one took notes.
                </p>
              </div>
            </motion.div>

            {/* Step 4 - Interpretation Session Notes */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              
              <div className="relative rounded-xl overflow-hidden shadow-lg bg-gray-100 p-4">
                <iframe 
                  src="/images/TG_Interpretation_Session_Notes.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
                  className="w-full h-[500px] rounded-lg"
                  title="Interview Protocol PDF"
                  style={{ border: 'none' }}
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" 
                    style={{ background: THEME.primary, color: THEME.white }}>
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <h3 className="text-2xl font-semibold" style={{ color: THEME.text }}>
                    Process interview notes into discrete pieces of qualitative data
                  </h3>
                </div>
                <p className="text-lg leading-relaxed" style={{ color: THEME.text }}>
                  Used interpretation sessions to transfer notes into Excel.
                </p>
              </div>
            </motion.div>

            {/* Step 5 - Affinity Map */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              
              <div 
                className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => setSelectedImage("/images/TG_Affinity_wall.png")}
              >
                <img 
                  src="/images/TG_Affinity_wall.png"
                  alt="Affinity Wall"
                  className="w-full h-auto"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" 
                    style={{ background: THEME.primary, color: THEME.white }}>
                    <span className="text-xl font-bold">5</span>
                  </div>
                  <h3 className="text-2xl font-semibold" style={{ color: THEME.text }}>
                    Synthesized insights using an affinity map
                    
                  </h3>
                </div>
                <p className="text-lg leading-relaxed" style={{ color: THEME.text }}>
                  Grouped data into key themes and main points 🟨 → 🟦 → 🟥 → 🟩.
                  <br></br>Analyzing qualitative data using affinity walls                
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Findings Section */}
      <section id="findings" className="py-24" style={{ background: THEME.background }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <h2 className="text-3xl font-bold" style={{ color: THEME.text }}>
              Here are our key kindings :
            </h2>
            <h3 className="text-xl font-semibold" style={{ color: THEME.text }}>
            (from the affinity map's top green 🟩 sticky notes)
            </h3>

            <div className="space-y-8">
              <motion.div
                className="p-6 rounded-xl"
                style={{ 
                  background: THEME.background,
                  border: `1px solid ${THEME.border}`
                }}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center" 
                        style={{ background: THEME.primary, color: THEME.white }}>
                        <span className="text-xl font-bold">1</span>
                      </div>
                      <h3 className="text-xl font-semibold" style={{ color: THEME.text }}>Issues with Engagement Sustainability</h3>
                    </div>
                    <ul className="space-y-2 pl-16" style={{ color: THEME.text }}>
                      <li>• Drop-off after initial use</li>
                      <li>• Ongoing training gaps due to infrequent usage</li>
                      <li>• Unclear workflow entry points externally</li>
                    </ul>
                  </div>
                  <div className="relative p-8 rounded-xl" style={{ 
                    background: THEME.primary,
                    border: `1px solid ${THEME.border}`
                  }}>
                    <div className="absolute top-0 left-0 w-12 h-12" style={{ color: THEME.white }}>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="text-xl italic pl-12" style={{ color: THEME.white }}>
                      "Users often abandon the platform after their first assessment, making it difficult to maintain engagement and provide effective training."
                    </p>
                    <br />
                    <p className="text-right mt-4" style={{ color: THEME.white }}>
                      - from user interviews
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="p-6 rounded-xl"
                style={{ 
                  background: THEME.background,
                  border: `1px solid ${THEME.border}`
                }}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center" 
                        style={{ background: THEME.primary, color: THEME.white }}>
                        <span className="text-xl font-bold">2</span>
                      </div>
                      <h3 className="text-xl font-semibold" style={{ color: THEME.text }}>Non-Intuitive User Flow & Visual Design</h3>
                    </div>
                    <ul className="space-y-2 pl-16" style={{ color: THEME.text }}>
                      <li>• Overwhelming information</li>
                      <li>• Ambiguous icons & labels</li>
                      <li>• Frustrating, click-heavy navigation</li>
                    </ul>
                  </div>
                  <div className="relative p-8 rounded-xl" style={{ 
                    background: THEME.primary,
                    border: `1px solid ${THEME.border}`
                  }}>
                    <div className="absolute top-0 left-0 w-12 h-12" style={{ color: THEME.white }}>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="text-xl italic pl-12" style={{ color: THEME.white }}>
                      "The interface feels cluttered and confusing, with too many options and unclear navigation paths that make simple tasks unnecessarily complex."
                    </p>
                    <br />
                    <p className="text-right mt-4" style={{ color: THEME.white }}>
                      - from user interviews
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="p-6 rounded-xl"
                style={{ 
                  background: THEME.background,
                  border: `1px solid ${THEME.border}`
                }}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center" 
                        style={{ background: THEME.primary, color: THEME.white }}>
                        <span className="text-xl font-bold">3</span>
                      </div>
                      <h3 className="text-xl font-semibold" style={{ color: THEME.text }}>Unclear Improvement Pathways</h3>
                    </div>
                    <ul className="space-y-2 pl-16" style={{ color: THEME.text }}>
                      <li>• No external user testing</li>
                      <li>• Feedback loop limited to support and sales</li>
                      <li>• Lacking consistent definitions and training tools</li>
                    </ul>
                  </div>
                  <div className="relative p-8 rounded-xl" style={{ 
                    background: THEME.primary,
                    border: `1px solid ${THEME.border}`
                  }}>
                    <div className="absolute top-0 left-0 w-12 h-12" style={{ color: THEME.white }}>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="text-xl italic pl-12" style={{ color: THEME.white }}>
                      "Without proper user testing and feedback mechanisms, it's challenging to identify and address the real pain points in the system."
                    </p>
                    <br />
                    <p className="text-right mt-4" style={{ color: THEME.white }}>
                      - from user interviews
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="p-6 rounded-xl"
                style={{ 
                  background: THEME.background,
                  border: `1px solid ${THEME.border}`
                }}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center" 
                        style={{ background: THEME.primary, color: THEME.white }}>
                        <span className="text-xl font-bold">4</span>
                      </div>
                      <h3 className="text-xl font-semibold" style={{ color: THEME.text }}>Company Philosophy Disjunctures</h3>
                    </div>
                    <ul className="space-y-2 pl-16" style={{ color: THEME.text }}>
                      <li>• Unclear balance: <HighlightedText>Employees vs. Managers</HighlightedText></li>
                      <li>• Inconsistent definitions of <HighlightedText>Skills</HighlightedText> vs. <HighlightedText>Competencies</HighlightedText></li>
                    </ul>
                  </div>
                  <div className="relative p-8 rounded-xl" style={{ 
                    background: THEME.primary,
                    border: `1px solid ${THEME.border}`
                  }}>
                    <div className="absolute top-0 left-0 w-12 h-12" style={{ color: THEME.white }}>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="text-xl italic pl-12" style={{ color: THEME.white }}>
                      "The platform struggles to balance the needs of employees and managers, while also grappling with inconsistent terminology that creates confusion across the organization."
                    </p>
                    <br />
                    <p className="text-right mt-4" style={{ color: THEME.white }}>
                      - from user interviews
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section id="recommendations" className="py-24" style={{ background: THEME.white }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <h2 className="text-3xl font-bold" style={{ color: THEME.text }}>
              Recommendations
            </h2>

            <div className="grid grid-cols-1 gap-8">
              <motion.div
                className="p-6 rounded-xl"
                style={{ 
                  background: THEME.white,
                  border: `1px solid ${THEME.border}`
                }}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4" style={{ color: THEME.text }}>For Engagement & Structure</h3>
                <ul className="space-y-2" style={{ color: THEME.text }}>
                  <li>Enforce a <HighlightedText>clear information hierarchy</HighlightedText></li>
                  <li>Highlight <HighlightedText>Talent Assessment as "1"</HighlightedText> in the system order</li>
                  <li>Use visual cues to guide workflows</li>
                </ul>
              </motion.div>

              <motion.div
                className="p-6 rounded-xl"
                style={{ 
                  background: THEME.white,
                  border: `1px solid ${THEME.border}`
                }}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4" style={{ color: THEME.text }}>For Training & Onboarding</h3>
                <ul className="space-y-2" style={{ color: THEME.text }}>
                  <li>Redesign <HighlightedText>Walkthrough Wizard User Guide</HighlightedText></li>
                  <li>Simplify training into <HighlightedText>essentials-focused modules</HighlightedText></li>
                  <li>Add <HighlightedText>memory features</HighlightedText> (activity reminders)</li>
                  <li>Introduce guided <HighlightedText>action paths</HighlightedText></li>
                </ul>
              </motion.div>

              <motion.div
                className="p-6 rounded-xl"
                style={{ 
                  background: THEME.white,
                  border: `1px solid ${THEME.border}`
                }}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4" style={{ color: THEME.text }}>For User Flow & Visual Design</h3>
                <ul className="space-y-2" style={{ color: THEME.text }}>
                  <li><HighlightedText>Simplify key user flows</HighlightedText> (e.g. auto-save)</li>
                  <li>Rebuild <HighlightedText>design and writing standards</HighlightedText></li>
                  <li>Add <HighlightedText>clear onboarding and Help Center tools</HighlightedText></li>
                </ul>
              </motion.div>

              <motion.div
                className="p-6 rounded-xl"
                style={{ 
                  background: THEME.white,
                  border: `1px solid ${THEME.border}`
                }}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4" style={{ color: THEME.text }}>For Product Improvement Process</h3>
                <ul className="space-y-2" style={{ color: THEME.text }}>
                  <li>Conduct <HighlightedText>regular external user testing</HighlightedText></li>
                  <li>Centralize a <HighlightedText>universal glossary of terms</HighlightedText></li>
                  <li>Screen and prioritize feedback before development</li>
                </ul>
              </motion.div>

              <motion.div
                className="p-6 rounded-xl"
                style={{ 
                  background: THEME.white,
                  border: `1px solid ${THEME.border}`
                }}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4" style={{ color: THEME.text }}>For Philosophy Alignment</h3>
                <ul className="space-y-2" style={{ color: THEME.text }}>
                  <li>Facilitate <HighlightedText>company-wide definition workshops</HighlightedText></li>
                  <li>Host <HighlightedText>team-building activities and retreats</HighlightedText></li>
                  <li>Consult an <HighlightedText>organizational psychologist</HighlightedText> for alignment</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section id="conclusion" className="py-24" style={{ background: THEME.white }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <h2 className="text-3xl font-bold" style={{ color: THEME.text }}>
              Conclusion
            </h2>

            <motion.div
              className="p-6 rounded-xl"
              style={{ 
                background: THEME.background,
                border: `1px solid ${THEME.border}`
              }}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-xl leading-relaxed" style={{ color: THEME.text }}>
                By restructuring TalentGuard's user experience, workflows, and philosophy alignment, we can dramatically improve engagement, usability, and long-term adoption for both managers and employees.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectTalentAssessment;
