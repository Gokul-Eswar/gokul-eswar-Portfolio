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
  const [scrollDirection, setScrollDirection] = useState<'horizontal' | 'vertical'>('horizontal');
  const [lastWheelTime, setLastWheelTime] = useState(0);
  const [lastWheelDelta, setLastWheelDelta] = useState({ x: 0, y: 0 });
  
  // Array of sections for tracking purposes
  const sections = [
    "hero", "about", "projects", "experience", "skills", "contact", "footer"
  ];

  const scrollLeft = () => {
    if (containerRef.current) {
      setIsTransitioning(true);
      setTimeout(() => {
        containerRef.current?.scrollBy({ left: -window.innerWidth, behavior: "smooth" });
        setCurrentSection(prev => Math.max(0, prev - 1));
        setTimeout(() => setIsTransitioning(false), 500);
      }, 100);
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      setIsTransitioning(true);
      setTimeout(() => {
        containerRef.current?.scrollBy({ left: window.innerWidth, behavior: "smooth" });
        setCurrentSection(prev => Math.min(sections.length - 1, prev + 1));
        setTimeout(() => setIsTransitioning(false), 500);
      }, 100);
    }
  };

  // Handle mouse wheel events for adaptive scrolling
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const WHEEL_TIMEOUT = 150; // ms to wait before resetting scroll direction
    const DIRECTION_THRESHOLD = 1.2; // ratio to determine scroll direction

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isTransitioning) return;

      const currentTime = Date.now();
      const deltaX = Math.abs(e.deltaX);
      const deltaY = Math.abs(e.deltaY);
      
      // Update last wheel delta
      setLastWheelDelta({ x: deltaX, y: deltaY });

      // Determine scroll direction based on dominant axis
      if (currentTime - lastWheelTime > WHEEL_TIMEOUT) {
        const isHorizontal = deltaX > deltaY * DIRECTION_THRESHOLD;
        const isVertical = deltaY > deltaX * DIRECTION_THRESHOLD;
        
        if (isHorizontal || isVertical) {
          setScrollDirection(isHorizontal ? 'horizontal' : 'vertical');
        }
      }
      
      setLastWheelTime(currentTime);

      // Apply scroll based on determined direction
      if (scrollDirection === 'horizontal') {
        const scrollingRight = e.deltaY > 0 || e.deltaX > 0;
        const scrollingLeft = e.deltaY < 0 || e.deltaX < 0;
        
        if (scrollingRight || scrollingLeft) {
          setIsTransitioning(true);
          setCurrentSection(prev => {
            const newIndex = scrollingRight ? 
              Math.min(sections.length - 1, prev + 1) : 
              Math.max(0, prev - 1);
            return newIndex;
          });
          
          container.scrollBy({
            left: scrollingRight ? window.innerWidth : -window.innerWidth,
            behavior: 'smooth'
          });
          
          setTimeout(() => setIsTransitioning(false), 500);
        }
      } else {
        // Vertical scrolling
        const currentSection = container.children[Math.floor(container.scrollLeft / window.innerWidth)];
        if (currentSection) {
          currentSection.scrollBy({
            top: e.deltaY,
            behavior: 'smooth'
          });
        }
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [isTransitioning, sections.length, scrollDirection, lastWheelTime]);

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
    return () => container.removeEventListener('scroll', handleScroll);
  }, [currentSection]);

  return (
    <div className="min-h-screen flex flex-col rainbow-theme">
      <Navbar />
      
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
      
      <div 
        ref={containerRef}
        className={`flex-1 flex overflow-x-auto snap-x snap-mandatory scrollbar-hide ${isTransitioning ? 'motion-blur motion-blur-active' : 'motion-blur'}`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {sections.map((section, index) => (
          <div 
            key={section}
            className="min-w-full w-screen h-screen flex-shrink-0 snap-start overflow-y-auto"
          >
            {index === 0 && <HeroSection />}
            {index === 1 && <AboutSection />}
            {index === 2 && <ProjectsSection />}
            {index === 3 && <ExperienceSection />}
            {index === 4 && <SkillsSection />}
            {index === 5 && <ContactSection />}
            {index === 6 && <Footer />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;