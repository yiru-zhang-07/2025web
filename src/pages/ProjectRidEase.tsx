import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const ProjectRidEase: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('student-journey');

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;
      
      sections.forEach(section => {
        const element = section as HTMLElement;
        const sectionHeight = element.offsetHeight;
        const sectionTop = element.offsetTop - 100;
        const sectionId = element.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight && sectionId) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Navigation */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between h-16">
            <Link 
              to="/" 
              className={`inline-flex items-center transition-all duration-300 hover:translate-x-1 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
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

      {/* Floating Menu */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-white/60 backdrop-blur-sm rounded-lg shadow-lg p-4 transition-all duration-300">
          <nav className="space-y-2">
            <button
              onClick={() => scrollToSection('student-journey')}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                activeSection === 'student-journey' 
                  ? 'bg-[#674BF8] text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              1. Problem
            </button>
            <button
              onClick={() => scrollToSection('problem')}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                activeSection === 'problem' 
                  ? 'bg-[#674BF8] text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              2. Opportunity
            </button>
            <button
              onClick={() => scrollToSection('discovery')}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                activeSection === 'discovery' 
                  ? 'bg-[#674BF8] text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              3. User Research
            </button>
            <button
              onClick={() => scrollToSection('solution')}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                activeSection === 'solution' 
                  ? 'bg-[#674BF8] text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              4. Solution Approach
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                activeSection === 'features' 
                  ? 'bg-[#674BF8] text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              5. Design
            </button>
            <button
              onClick={() => scrollToSection('future')}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                activeSection === 'future' 
                  ? 'bg-[#674BF8] text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              6. Looking Forward
            </button>
          </nav>
        </div>
      </div>

      <main className="bg-paper">
        {/* Hero Section */}
        <section id="journey" className="w-full h-screen bg-[#674BF8] flex items-center relative overflow-hidden">
          {/* Hero Background Pattern */}
          <div className="absolute inset-0 bg-[#674BF8] opacity-90">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  RidEase
                  <br />
                  Ride with your neighbor at Ease
                </h1>
                
                <div className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-white/20 rounded-full">
                    APP DESIGN
                  </span>
                  <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-white/20 rounded-full">
                    UX RESEARCH
                  </span>
                  <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-white/20 rounded-full">
                    UI DESIGN
                  </span>
                </div>
                
                <p className="text-xl text-white/90 max-w-2xl mb-12 mx-auto md:mx-0">
                A private car-sharing mobile app tailored for university areas, offering a safe, affordable, and efficient transportation alternative to bridge existing gaps in the system.
                </p>
              </div>
              
              <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
                <div className="w-full max-w-md aspect-square bg-white/10 rounded-xl overflow-hidden">
                  <img 
                    src="images/RidEase_Cover.jpg" 
                    alt="RidEase Cover" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-white"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </div>
          </div>
        </section>

        {/* Story Map Section */}
        <section id="student-journey" className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-8 md:px-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-[#674BF8]">1. Problem Statement</h2>
            
            <div className="bg-white p-8 rounded-xl shadow-sm mb-12">
              {/* Problem Statement with Highlights */}
              <div className="mb-12">
                <p className="text-lg text-muted-foreground">
                  At the <span className="font-medium text-[#674BF8]">University of Michigan</span> in Ann Arbor, students without personal vehicles face challenges accessing essentials like groceries. While buses and rideshares are available, <span className="font-medium text-[#674BF8]">long wait times</span>, <span className="font-medium text-[#674BF8]">unpredictable schedules</span>, and <span className="font-medium text-[#674BF8]">high costs</span> make daily travel inconvenient.
                </p>
              </div>

              {/* Challenge Cards with Icons */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-[#674BF8]/5 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#674BF8]/10 rounded-full flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#674BF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="5" y="6" width="14" height="14" rx="2"/>
                        <path d="M16 2v4M8 2v4M3 10h18"/>
                      </svg>
                    </div>
                    <h4 className="font-medium">Transit Issues</h4>
                  </div>
                  <p className="text-muted-foreground">Buses are <span className="font-medium">crowded</span>, <span className="font-medium">slow</span>, and have <span className="font-medium">long waiting times</span>.</p>
                </div>

                <div className="bg-[#674BF8]/5 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#674BF8]/10 rounded-full flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#674BF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                      </svg>
                    </div>
                    <h4 className="font-medium">Cost Barrier</h4>
                  </div>
                  <p className="text-muted-foreground"><span className="font-medium">Expensive</span> rideshare services like <span className="font-medium">Uber/Lyft</span> for short trips.</p>
                </div>

                <div className="bg-[#674BF8]/5 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#674BF8]/10 rounded-full flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#674BF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20V10M18 20V4M6 20v-6"/>
                      </svg>
                    </div>
                    <h4 className="font-medium">Resource Inefficiency</h4>
                  </div>
                  <p className="text-muted-foreground">Car owners struggle with <span className="font-medium">underutilized vehicles</span> and <span className="font-medium">parking costs</span>.</p>
                </div>
              </div>

              {/* HMW Statement with Visual Enhancement */}
              <div className="bg-[#674BF8]/10 p-8 rounded-lg flex items-center gap-6">
                <div className="hidden md:block">
                  <div className="w-12 h-12 bg-[#674BF8]/20 rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#674BF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-2-2-1.5 0-2 .62-2 2s.5 2 2 2zM15 11h.01M9 9h.01"/>
                      <circle cx="12" cy="12" r="10"/>
                    </svg>
                  </div>
                </div>
                <p className="text-lg font-medium text-[#674BF8]">
                  How might we create a <span className="underline decoration-2">university-specific</span> car-sharing platform that enhances <span className="underline decoration-2">safety</span> while promoting <span className="underline decoration-2">affordability</span> and <span className="underline decoration-2">efficiency</span>?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement Section */}
        <section id="problem" className="py-24 md:py-32 bg-[#674BF8]/5">
          <div className="max-w-6xl mx-auto px-8 md:px-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-[#674BF8]">2. User Research</h2>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-medium mb-6">Key Findings</h3>
              <p className="text-lg text-muted-foreground mb-8">
                I researched and conducted interviews with University of Michigan students to understand their travel struggles. Here's what I found:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* High Costs */}
                <div className="bg-[#674BF8]/5 p-6 rounded-xl flex items-stretch">
                  <div className="flex items-center justify-center pr-6 border-r border-[#674BF8]/10">
                    <span className="text-5xl font-bold text-[#674BF8]">72%</span>
                  </div>
                  <div className="pl-6">
                    <h4 className="font-medium text-lg mb-2">High Costs</h4>
                    <p className="text-muted-foreground">Students find Uber/Lyft too expensive for their daily commute needs</p>
                  </div>
                </div>

                {/* Safety Concerns */}
                <div className="bg-[#674BF8]/5 p-6 rounded-xl flex items-stretch">
                  <div className="flex items-center justify-center pr-6 border-r border-[#674BF8]/10">
                    <span className="text-5xl font-bold text-[#674BF8]">60%</span>
                  </div>
                  <div className="pl-6">
                    <h4 className="font-medium text-lg mb-2">Safety Concerns</h4>
                    <p className="text-muted-foreground">Students hesitate to carpool due to safety uncertainties</p>
                  </div>
                </div>

                {/* Unreliable Services */}
                <div className="bg-[#674BF8]/5 p-6 rounded-xl flex items-stretch">
                  <div className="flex items-center justify-center pr-6 border-r border-[#674BF8]/10">
                    <span className="text-5xl font-bold text-[#674BF8]">49%</span>
                  </div>
                  <div className="pl-6">
                    <h4 className="font-medium text-lg mb-2">Unreliable Services</h4>
                    <p className="text-muted-foreground">Students face long wait times with current bus services</p>
                  </div>
                </div>

                {/* Many Don't Own Cars */}
                <div className="bg-[#674BF8]/5 p-6 rounded-xl flex items-stretch">
                  <div className="flex items-center justify-center pr-6 border-r border-[#674BF8]/10">
                    <span className="text-5xl font-bold text-[#674BF8]">14k+</span>
                  </div>
                  <div className="pl-6">
                    <h4 className="font-medium text-lg mb-2">No Car Access</h4>
                    <p className="text-muted-foreground">Ann Arbor residents without personal vehicles</p>
                  </div>
                </div>

                {/* Underused Cars */}
                <div className="bg-[#674BF8]/5 p-6 rounded-xl flex items-stretch">
                  <div className="flex items-center justify-center pr-6 border-r border-[#674BF8]/10">
                    <span className="text-5xl font-bold text-[#674BF8]">54%</span>
                  </div>
                  <div className="pl-6">
                    <h4 className="font-medium text-lg mb-2">Solo Drivers</h4>
                    <p className="text-muted-foreground">Drive alone despite having room for passengers</p>
                  </div>
                </div>

                {/* Missed Opportunities */}
                <div className="bg-[#674BF8]/5 p-6 rounded-xl flex items-stretch">
                  <div className="flex items-center justify-center pr-6 border-r border-[#674BF8]/10">
                    <span className="text-5xl font-bold text-[#674BF8]">63%</span>
                  </div>
                  <div className="pl-6">
                    <h4 className="font-medium text-lg mb-2">Willing to Share</h4>
                    <p className="text-muted-foreground">Car owners open to carpooling but lack connection options</p>
                  </div>
                </div>
              </div>

              {/* Personas Section */}
              <div className="mt-16 mb-12">
                <h3 className="text-xl font-medium mb-6">Personas</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Let's take a look at how students are specifically struggling in this situation:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Jake's Card */}
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-[#674BF8]/10 hover:-translate-y-1 transition-all duration-300">
                    <div className="bg-[#674BF8]/5 p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                          <img 
                            src="images/RidEase_Jake.png" 
                            alt="Jake" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-lg">Jake</h4>
                          <p className="text-sm text-muted-foreground">Freshman, No Car</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-4">
                        <h5 className="text-sm font-medium text-[#674BF8] mb-2">Pain Point</h5>
                        <p className="text-muted-foreground">Struggles with <span className="font-medium text-[#674BF8] animate-pulse">daily transportation</span>, finding it <span className="font-medium text-[#674BF8] animate-pulse">time-consuming and costly</span> to rely on public transit or expensive rideshares.</p>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-[#674BF8] mb-2">Need</h5>
                        <p className="text-muted-foreground">A more <span className="font-medium text-[#674BF8] animate-pulse">affordable and efficient</span> way to carpool with others for commuting.</p>
                      </div>
                    </div>
                  </div>

                  {/* Emily's Card */}
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-[#674BF8]/10 hover:-translate-y-1 transition-all duration-300">
                    <div className="bg-[#674BF8]/5 p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                          <img 
                            src="images/RidEase_Emily.png" 
                            alt="Emily" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-lg">Emily</h4>
                          <p className="text-sm text-muted-foreground">Senior, Car Owner</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-4">
                        <h5 className="text-sm font-medium text-[#674BF8] mb-2">Pain Point</h5>
                        <p className="text-muted-foreground">The <span className="font-medium text-[#674BF8] animate-pulse">high cost of driving</span> daily from Ypsilanti, including <span className="font-medium text-[#674BF8] animate-pulse">gas, parking, and maintenance</span> expenses.</p>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-[#674BF8] mb-2">Need</h5>
                        <p className="text-muted-foreground">A way to <span className="font-medium text-[#674BF8] animate-pulse">reduce the financial burden</span> of driving by sharing rides.</p>
                      </div>
                    </div>
                  </div>

                  {/* Dianne's Card */}
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-[#674BF8]/10 hover:-translate-y-1 transition-all duration-300">
                    <div className="bg-[#674BF8]/5 p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                          <img 
                            src="images/RidEase_Dianne.png" 
                            alt="Dianne" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-lg">Dianne</h4>
                          <p className="text-sm text-muted-foreground">Graduate Student, No Car</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-4">
                        <h5 className="text-sm font-medium text-[#674BF8] mb-2">Pain Point</h5>
                        <p className="text-muted-foreground">Dislikes taking the <span className="font-medium text-[#674BF8] animate-pulse">crowded bus</span> and waiting for <span className="font-medium text-[#674BF8] animate-pulse">long periods</span> for transportation.</p>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-[#674BF8] mb-2">Need</h5>
                        <p className="text-muted-foreground">A more <span className="font-medium text-[#674BF8] animate-pulse">convenient and quicker</span> way to get around without relying on public transit.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#674BF8]/10 p-8 rounded-xl">
                <p className="text-lg font-medium text-[#674BF8] text-center">
                  There's a clear opportunity for a private car share platform in Ann Arbor that connects students safely and efficiently.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Concept Development Section */}
        <section id="discovery" className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-8 md:px-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-[#674BF8]">3. Concept Development</h2>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-medium mb-6">Core Functions</h3>
            <p className="text-lg text-muted-foreground mb-12">
                Using insights gathered from user research, I designed RidEase to address key pain points and enhance the transportation experience for the University of Michigan community. Here's how the app solves these challenges:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                {/* Verify Users */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-[#674BF8]/10 hover:-translate-y-1 transition-all duration-300">
                  <div className="bg-[#674BF8]/5 p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-[#674BF8]/20 rounded-full flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#674BF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                          <circle cx="12" cy="7" r="4"/>
                        </svg>
                      </div>
                      <h4 className="font-medium">Verify Users</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Require <span className="font-medium text-[#674BF8] animate-pulse">U-M email</span> for <span className="font-medium text-[#674BF8] animate-pulse">trusted verification</span></p>
                  </div>
                </div>

                {/* Match Rides */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-[#674BF8]/10 hover:-translate-y-1 transition-all duration-300">
                  <div className="bg-[#674BF8]/5 p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-[#674BF8]/20 rounded-full flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#674BF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                          <circle cx="9" cy="7" r="4"/>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                        </svg>
                      </div>
                      <h4 className="font-medium">Match Rides</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Connect students heading in the <span className="font-medium text-[#674BF8] animate-pulse">same direction</span></p>
                  </div>
                </div>

                {/* Punctuality */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-[#674BF8]/10 hover:-translate-y-1 transition-all duration-300">
                  <div className="bg-[#674BF8]/5 p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-[#674BF8]/20 rounded-full flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#674BF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"/>
                          <polyline points="12 6 12 12 16 14"/>
                        </svg>
                      </div>
                      <h4 className="font-medium">Punctuality</h4>
                    </div>
                    <p className="text-sm text-muted-foreground"><span className="font-medium text-[#674BF8] animate-pulse">Reward on-time</span>, penalize <span className="font-medium text-[#674BF8] animate-pulse">late arrivals</span></p>
                  </div>
                </div>

                {/* Meeting Points */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-[#674BF8]/10 hover:-translate-y-1 transition-all duration-300">
                  <div className="bg-[#674BF8]/5 p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-[#674BF8]/20 rounded-full flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#674BF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>
                      </div>
                      <h4 className="font-medium">Meeting Points</h4>
                    </div>
                    <p className="text-sm text-muted-foreground"><span className="font-medium text-[#674BF8] animate-pulse">Dynamic locations</span> for convenient <span className="font-medium text-[#674BF8] animate-pulse">pick-up</span></p>
                  </div>
                </div>

                {/* Rate Drivers */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-[#674BF8]/10 hover:-translate-y-1 transition-all duration-300">
                  <div className="bg-[#674BF8]/5 p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-[#674BF8]/20 rounded-full flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#674BF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                      </div>
                      <h4 className="font-medium">Rate Drivers</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Rate <span className="font-medium text-[#674BF8] animate-pulse">driving habits</span> and <span className="font-medium text-[#674BF8] animate-pulse">comfort</span></p>
                  </div>
                </div>

                {/* Safety */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-[#674BF8]/10 hover:-translate-y-1 transition-all duration-300">
                  <div className="bg-[#674BF8]/5 p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-[#674BF8]/20 rounded-full flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#674BF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                      </div>
                      <h4 className="font-medium">Safety</h4>
                    </div>
                    <p className="text-sm text-muted-foreground"><span className="font-medium text-[#674BF8] animate-pulse">In-app chat</span> and <span className="font-medium text-[#674BF8] animate-pulse">emergency contacts</span></p>
                  </div>
                </div>
              </div>

              <div className="bg-[#674BF8]/10 p-8 rounded-xl">
                <p className="text-lg font-medium text-[#674BF8] text-center">
                  These features were crafted to offer a more efficient, reliable, and affordable car-sharing experience for students, addressing their unique needs and improving overall campus mobility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Approach Section */}
        <section id="solution" className="py-24 md:py-32 bg-[#674BF8]/5">
          <div className="max-w-6xl mx-auto px-8 md:px-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-[#674BF8]">4. Solution Approach</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-[#674BF8]/10 hover:-translate-y-1 transition-all duration-300">
                <div className="bg-[#674BF8]/5 p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-[#674BF8]/20 rounded-full flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#674BF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      </svg>
                    </div>
                    <h4 className="font-medium">Safety First</h4>
                  </div>
                  <p className="text-sm text-muted-foreground"><span className="font-medium text-[#674BF8] animate-pulse">Identity verification</span> and <span className="font-medium text-[#674BF8] animate-pulse">real-time tracking</span> ensure user safety.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-[#674BF8]/10 hover:-translate-y-1 transition-all duration-300">
                <div className="bg-[#674BF8]/5 p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-[#674BF8]/20 rounded-full flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#674BF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                      </svg>
                    </div>
                    <h4 className="font-medium">Cost Effective</h4>
                  </div>
                  <p className="text-sm text-muted-foreground"><span className="font-medium text-[#674BF8] animate-pulse">Shared rides</span> reduce <span className="font-medium text-[#674BF8] animate-pulse">transportation costs</span> for all users.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-[#674BF8]/10 hover:-translate-y-1 transition-all duration-300">
                <div className="bg-[#674BF8]/5 p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-[#674BF8]/20 rounded-full flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#674BF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9"/>
                      </svg>
                    </div>
                    <h4 className="font-medium">Sustainable</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Reduce <span className="font-medium text-[#674BF8] animate-pulse">carbon footprint</span> through <span className="font-medium text-[#674BF8] animate-pulse">efficient ride sharing</span>.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section id="features" className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-8 md:px-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-[#674BF8]">5. Design</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-[#674BF8]/10 hover:-translate-y-1 transition-all duration-300">
                  <div className="bg-[#674BF8]/5 p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-[#674BF8]/20 rounded-full flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#674BF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                          <circle cx="12" cy="7" r="4"/>
                        </svg>
                      </div>
                      <h4 className="font-medium">Identity Verification</h4>
                    </div>
                    <p className="text-sm text-muted-foreground"><span className="font-medium text-[#674BF8] animate-pulse">University email</span> verification and <span className="font-medium text-[#674BF8] animate-pulse">profile validation</span></p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-[#674BF8]/10 hover:-translate-y-1 transition-all duration-300">
                  <div className="bg-[#674BF8]/5 p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-[#674BF8]/20 rounded-full flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#674BF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"/>
                          <polyline points="12 6 12 12 16 14"/>
                        </svg>
                      </div>
                      <h4 className="font-medium">Real-time Tracking</h4>
                    </div>
                    <p className="text-sm text-muted-foreground"><span className="font-medium text-[#674BF8] animate-pulse">Live location</span> sharing and <span className="font-medium text-[#674BF8] animate-pulse">ETA updates</span></p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-[#674BF8]/10 hover:-translate-y-1 transition-all duration-300">
                  <div className="bg-[#674BF8]/5 p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-[#674BF8]/20 rounded-full flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#674BF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                        </svg>
                      </div>
                      <h4 className="font-medium">In-app Chat</h4>
                    </div>
                    <p className="text-sm text-muted-foreground"><span className="font-medium text-[#674BF8] animate-pulse">Secure messaging</span> between <span className="font-medium text-[#674BF8] animate-pulse">drivers and passengers</span></p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-[#674BF8]/20 to-[#674BF8]/5 rounded-xl overflow-hidden flex items-center justify-center">
                  <div className="text-6xl">🚗</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Looking Forward Section */}
        <section id="future" className="py-24 md:py-32 bg-[#674BF8]/5">
          <div className="max-w-6xl mx-auto px-8 md:px-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-[#674BF8]">6. Looking Forward</h2>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-medium mb-4">Next Steps</h3>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Expand to other university campuses</li>
                    <li>Implement AI-powered matching</li>
                    <li>Add group ride features</li>
                    <li>Integrate with campus services</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-4">Future Vision</h3>
                  <p className="text-muted-foreground">
                    Creating a sustainable, community-driven transportation solution that connects students and reduces environmental impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProjectRidEase;
