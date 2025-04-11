import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BloomCover from '@/images/Bloom_Cover.jpg';
import TalentCover from '@/images/Talent_Cover.jpg';
import RidEaseCover from '@/images/RidEase_Cover.jpg';
import LFGCover from '@/images/LFG_lap_cover.jpg';

const projectsData = [{
  id: 1,
  title: "Bloom App Design",
  category: "UX/UI Design, Motion Design",
  imageUrl: BloomCover,
  description: "A mobile application that connects gardeners in a social network to share and grow.",
  link: "/projects/bloom"
}, {
  id: 2,
  title: "Talent Assessment",
  category: "UX Research,Interviews",
  imageUrl: TalentCover,
  description: "Conducting interviews and affinity mapping to identify pain points and provide suggestions.",
  link: "/projects/talent-assessment"
}, {
  id: 3,
  title: "RidEase",
  category: "App Design, UX Research",
  imageUrl: RidEaseCover,
  description: "Designed a carpooling app with a focus on safety and user experience.",
  link: "/projects/ridease"
}, {
  id: 4,
  title: "Learning For Good",
  category: "Web Design, Education",
  imageUrl: LFGCover,
  description: "What I learned that helps improve online learning experiences for schools.",
  link: "/project/learning-for-good"
}];

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up', 'opacity-100');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
    
    projectRefs.current.forEach(item => {
      if (item) observer.observe(item);
    });
    
    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
      projectRefs.current.forEach(item => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);
  
  return (
    <section id="projects" className="section snap-section bg-secondary/30" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14 opacity-0 transform translate-y-8" ref={headerRef}>
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider rounded-full bg-white mb-4">
            FEATURED WORK
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Selected Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <Link 
              key={project.id} 
              to={project.link} 
              className="group block opacity-0 transform translate-y-8 hover:no-underline bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300" 
              ref={el => projectRefs.current[index] = el as HTMLAnchorElement} 
              style={{
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <div className="flex flex-col h-full">
                <div className="relative aspect-square w-full bg-muted overflow-hidden group">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="scale-0 group-hover:scale-100 transition-transform duration-300 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                    >
                      View Project
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
                <div className="p-8 flex flex-col space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.category.split(', ').map((cat, i) => (
                      <span 
                        key={i}
                        className="text-[11px] font-medium text-muted-foreground/70"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <p className="text-base text-foreground/80 leading-relaxed">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;




