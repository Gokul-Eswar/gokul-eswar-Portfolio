
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SlideInSection from "@/components/SlideInSection";
import PacmanBackground from "@/components/PacmanBackground";
import { useTheme } from "@/contexts/ThemeContext";
import { useEffect } from "react";

const Index = () => {
  const { theme } = useTheme();
  
  useEffect(() => {
    // Apply theme to body element
    document.body.classList.remove("theme-light", "theme-dark", "theme-ocean");
    document.body.classList.add(`theme-${theme}`);
    
    // Apply CSS variables to body to make them accessible to all components
    document.documentElement.style.setProperty('--theme-transition-speed', '0.5s');
  }, [theme]);

  return (
    <div className={`min-h-screen theme-${theme}`}>
      <PacmanBackground />
      <Navbar />
      <SlideInSection direction="right">
        <HeroSection />
      </SlideInSection>
      
      <SlideInSection direction="left">
        <AboutSection />
      </SlideInSection>
      
      <SlideInSection direction="right">
        <ProjectsSection />
      </SlideInSection>
      
      <SlideInSection direction="left">
        <ExperienceSection />
      </SlideInSection>
      
      <SlideInSection direction="right">
        <SkillsSection />
      </SlideInSection>
      
      <SlideInSection direction="left">
        <ContactSection />
      </SlideInSection>
      
      <Footer />
    </div>
  );
};

export default Index;
