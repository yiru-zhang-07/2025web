
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const ProjectTalentAssessment: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />

      <main className="bg-paper pt-24 pb-16">
        {/* Hero Section */}
        <section className="w-full bg-primary py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <div className="flex flex-col items-start">
              <Link 
                to="/" 
                className="mb-8 inline-flex items-center text-white/80 hover:text-white"
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

              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Talent Assessment UX Research
              </h1>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-white/20 rounded-full">
                  UX RESEARCH
                </span>
                <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-white/20 rounded-full">
                  DATA ANALYSIS
                </span>
                <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-white/20 rounded-full">
                  STRATEGY
                </span>
              </div>
              
              <p className="text-lg text-white/90 max-w-2xl">
                A comprehensive user research study to identify pain points in talent assessment processes and provide strategic recommendations.
              </p>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Project Overview</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
              <div>
                <h3 className="text-lg font-medium mb-3">The Challenge</h3>
                <p className="text-muted-foreground">
                  Conduct user research to identify pain points in talent assessment processes and provide actionable recommendations for improving the candidate and recruiter experience.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">My Role</h3>
                <p className="text-muted-foreground">
                  UX Researcher responsible for user interviews, data analysis, affinity mapping, and presenting strategic recommendations.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">TIMELINE</h4>
                <p className="font-medium">6 Weeks</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">TOOLS</h4>
                <p className="font-medium">Miro, Lookback, Excel, Qualtrics</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">DELIVERABLES</h4>
                <p className="font-medium">Research Report, Recommendation Deck, Journey Map</p>
              </div>
            </div>
            
            <div className="mb-12">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80" 
                alt="Talent Assessment Preview" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* 1. Problem & Opportunity */}
        <section className="py-16 md:py-20 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-12">1. Problem & Opportunity</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-xl font-medium mb-4">Problems</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>High candidate drop-off rates during assessment process</li>
                  <li>Recruiter inefficiency due to manual processes</li>
                  <li>Poor candidate experience leading to negative brand perception</li>
                  <li>Inconsistent evaluation criteria across different roles</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">Opportunities</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Streamline assessment process to reduce drop-off</li>
                  <li>Automate routine tasks to improve recruiter efficiency</li>
                  <li>Enhance candidate experience to strengthen employer brand</li>
                  <li>Standardize evaluation frameworks while maintaining role relevance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes & Learnings */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-10">Outcomes & Learnings</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
              <div>
                <h3 className="text-xl font-medium mb-4">Key Outcomes</h3>
                <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                  <li>Identified 5 critical pain points in the assessment journey</li>
                  <li>Developed a standardized framework for skill evaluation</li>
                  <li>Created recommendations that reduced assessment time by 30%</li>
                  <li>Designed a feedback system to improve candidate experience</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-4">Learnings</h3>
                <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                  <li>Balancing thoroughness with candidate experience is crucial</li>
                  <li>Different roles require customized assessment approaches</li>
                  <li>Communication transparency significantly impacts satisfaction</li>
                  <li>Recruiter and candidate experiences are deeply interconnected</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm mb-12">
              <h3 className="text-xl font-medium mb-4">Impact & Metrics</h3>
              <p className="text-muted-foreground mb-6">
                The implementation of our recommendations resulted in:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2 text-blue-600">30%</div>
                  <p className="text-muted-foreground">Reduction in Assessment Time</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2 text-blue-600">25%</div>
                  <p className="text-muted-foreground">Decrease in Drop-off Rate</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2 text-blue-600">42%</div>
                  <p className="text-muted-foreground">Increase in Positive Feedback</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4">Next Steps</h3>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-6">
                <li>Further refine assessment criteria for specialized roles</li>
                <li>Develop automated feedback mechanisms</li>
                <li>Create a comprehensive dashboard for tracking assessment metrics</li>
                <li>Pilot a new candidate-centric assessment approach</li>
              </ul>
            </div>
          </div>
        </section>

        {/* More Projects */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">More Projects</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
              Explore more of my research work and see how I approach different challenges.
            </p>
            
            <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow hover:bg-primary/90">
              Back to Portfolio
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProjectTalentAssessment;
