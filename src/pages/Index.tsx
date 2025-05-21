
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";
import { useEffect } from "react";

const Index = () => {
  const { theme } = useTheme();
  
  useEffect(() => {
    // Apply theme to body element
    document.body.classList.remove("theme-light", "theme-dark", "theme-ocean");
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  return (
    <div className={`min-h-screen theme-${theme}`}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
