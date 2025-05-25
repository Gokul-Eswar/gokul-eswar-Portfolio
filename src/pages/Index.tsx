
import { useRef, useEffect } from "react";
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

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -window.innerWidth * 0.8, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: window.innerWidth * 0.8, behavior: "smooth" });
    }
  };

  // Handle mouse wheel events for horizontal scrolling
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Prevent the default vertical scroll
      e.preventDefault();

      // Determine scroll amount based on wheel delta
      // Use deltaY for vertical wheel movement to scroll horizontally
      const scrollAmount = e.deltaY * 2; // Adjust multiplier for scroll sensitivity
      
      // Apply the scroll with smooth behavior
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    };

    // Add event listener for wheel events
    container.addEventListener('wheel', handleWheel, { passive: false });

    // Clean up the event listener
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* Navigation controls */}
      <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center gap-4">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={scrollLeft}
          className="bg-white bg-opacity-70 backdrop-blur-sm border-portfolio-blue hover:bg-portfolio-blue hover:text-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          onClick={scrollRight}
          className="bg-white bg-opacity-70 backdrop-blur-sm border-portfolio-blue hover:bg-portfolio-blue hover:text-white"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
      
      {/* Horizontal scroll container */}
      <div 
        ref={containerRef}
        className="flex-1 flex overflow-x-auto snap-x snap-mandatory scrollbar-hide" 
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
