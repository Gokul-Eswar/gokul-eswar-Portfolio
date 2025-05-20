
import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  
  // Array of sections for tracking purposes
  const sections = [
    "hero", "about", "projects", "experience", "skills", "contact", "footer"
  ];

  const scrollLeft = () => {
    if (containerRef.current) {
      // Apply motion blur during transition
      setIsTransitioning(true);
      setTimeout(() => {
        containerRef.current?.scrollBy({ left: -window.innerWidth, behavior: "smooth" });
        setCurrentSection(prev => Math.max(0, prev - 1));
        
        // Remove motion blur after transition completes
        setTimeout(() => setIsTransitioning(false), 500);
      }, 100);
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      // Apply motion blur during transition
      setIsTransitioning(true);
      setTimeout(() => {
        containerRef.current?.scrollBy({ left: window.innerWidth, behavior: "smooth" });
        setCurrentSection(prev => Math.min(sections.length - 1, prev + 1));
        
        // Remove motion blur after transition completes
        setTimeout(() => setIsTransitioning(false), 500);
      }, 100);
    }
  };

  // Handle mouse wheel events for horizontal scrolling
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Prevent the default vertical scroll
      e.preventDefault();

      // Don't process wheel events during transitions
      if (isTransitioning) return;

      // Determine scroll direction
      const scrollingRight = e.deltaY > 0;
      const scrollingLeft = e.deltaY < 0;
      
      if (scrollingRight || scrollingLeft) {
        // Apply motion blur during transition
        setIsTransitioning(true);
        
        // Update current section index
        setCurrentSection(prev => {
          const newIndex = scrollingRight ? 
            Math.min(sections.length - 1, prev + 1) : 
            Math.max(0, prev - 1);
          return newIndex;
        });
        
        // Apply the scroll with smooth behavior
        container.scrollBy({
          left: scrollingRight ? window.innerWidth : -window.innerWidth,
          behavior: 'smooth'
        });
        
        // Remove motion blur after transition completes
        setTimeout(() => setIsTransitioning(false), 500);
      }
    };

    // Add event listener for wheel events
    container.addEventListener('wheel', handleWheel, { passive: false });

    // Clean up the event listener
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [isTransitioning, sections.length]);

  // Add scroll snap observation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const handleScroll = () => {
      const sectionIndex = Math.round(container.scrollLeft / window.innerWidth);
      if (sectionIndex !== currentSection) {
        setCurrentSection(sectionIndex);
      }
    };
    
    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [currentSection]);

  // Update rainbow color based on scroll position
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const updateRainbowTheme = () => {
      const totalWidth = container.scrollWidth - window.innerWidth;
      const progress = container.scrollLeft / totalWidth;
      document.documentElement.style.setProperty('--rainbow-progress', `${progress * 100}%`);
    };
    
    updateRainbowTheme(); // Initial update
    container.addEventListener('scroll', updateRainbowTheme);
    return () => {
      container.removeEventListener('scroll', updateRainbowTheme);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col rainbow-theme">
      <Navbar />
      
      {/* Navigation controls */}
      <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center gap-4">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={scrollLeft}
          className="bg-white bg-opacity-70 backdrop-blur-sm border-portfolio-blue hover:bg-portfolio-blue hover:text-white rainbow-border"
          disabled={currentSection === 0 || isTransitioning}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          onClick={scrollRight}
          className="bg-white bg-opacity-70 backdrop-blur-sm border-portfolio-blue hover:bg-portfolio-blue hover:text-white rainbow-border"
          disabled={currentSection === sections.length - 1 || isTransitioning}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
      
      {/* Horizontal scroll container */}
      <div 
        ref={containerRef}
        className={`flex-1 flex overflow-x-auto snap-x snap-mandatory scrollbar-hide ${isTransitioning ? 'motion-blur motion-blur-active' : 'motion-blur'}`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Each section is a snap point */}
        <div className="min-w-full w-screen h-screen flex-shrink-0 snap-start">
          <HeroSection />
        </div>
        
        <div className="min-w-full w-screen h-screen flex-shrink-0 snap-start">
          <AboutSection />
        </div>
        
        <div className="min-w-full w-screen h-screen flex-shrink-0 snap-start">
          <ProjectsSection />
        </div>
        
        <div className="min-w-full w-screen h-screen flex-shrink-0 snap-start">
          <ExperienceSection />
        </div>
        
        <div className="min-w-full w-screen h-screen flex-shrink-0 snap-start">
          <SkillsSection />
        </div>
        
        <div className="min-w-full w-screen h-screen flex-shrink-0 snap-start">
          <ContactSection />
        </div>
        
        <div className="min-w-full w-screen h-screen flex-shrink-0 snap-start">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
