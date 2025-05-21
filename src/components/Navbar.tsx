
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { useTheme } from "@/contexts/ThemeContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getNavbarClasses = () => {
    let baseClasses = "fixed top-0 w-full z-50 transition-all duration-300";
    
    if (isScrolled) {
      if (theme === "light") {
        return cn(baseClasses, "bg-white/90 backdrop-blur-md shadow-sm py-3");
      } else if (theme === "dark") {
        return cn(baseClasses, "bg-portfolio-dark/90 backdrop-blur-md shadow-sm py-3");
      } else {
        return cn(baseClasses, "bg-portfolio-oceanBlue/90 backdrop-blur-md shadow-sm py-3");
      }
    } else {
      return cn(baseClasses, "bg-transparent py-5");
    }
  };

  const getLinkClasses = () => {
    return "nav-link transition-colors";
  };

  const getLogoClasses = () => {
    if (theme === "light") {
      return "text-portfolio-navy";
    } else if (theme === "dark") {
      return "text-white";
    } else {
      return "text-blue-50";
    }
  };

  const getHighlightClasses = () => {
    return "theme-accent";
  };

  const getMobileMenuClasses = () => {
    if (theme === "light") {
      return "bg-white shadow-lg";
    } else if (theme === "dark") {
      return "bg-portfolio-dark shadow-lg";
    } else {
      return "bg-portfolio-oceanBlue shadow-lg";
    }
  };

  return (
    <header className={getNavbarClasses()}>
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <a href="#home" className={`font-bold text-2xl ${getLogoClasses()} transition-all hover:scale-105`}>
          Gokul<span className={getHighlightClasses()}>.Dev</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className={getLinkClasses()}>Home</a>
          <a href="#about" className={getLinkClasses()}>About</a>
          <a href="#projects" className={getLinkClasses()}>Projects</a>
          <a href="#experience" className={getLinkClasses()}>Experience</a>
          <a href="#contact" className={getLinkClasses()}>Contact</a>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/Gokul-Eswar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="theme-icon"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/gokul-eswar-sns-institutions/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="theme-icon"
            >
              <Linkedin size={20} />
            </a>

            {/* Theme Switcher */}
            <ThemeSwitcher />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeSwitcher />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="theme-icon"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className={`md:hidden py-4 px-6 absolute top-full left-0 w-full animate-fade-in theme-bg-primary theme-border ${getMobileMenuClasses()}`}>
          <nav className="flex flex-col gap-4">
            <a href="#home" className="menu-item px-3 py-2 rounded-md" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#about" className="menu-item px-3 py-2 rounded-md" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#projects" className="menu-item px-3 py-2 rounded-md" onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="#experience" className="menu-item px-3 py-2 rounded-md" onClick={() => setMobileMenuOpen(false)}>Experience</a>
            <a href="#contact" className="menu-item px-3 py-2 rounded-md" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            
            <div className="flex items-center gap-4 py-2">
              <a href="https://github.com/Gokul-Eswar" target="_blank" rel="noopener noreferrer" className="theme-icon">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/gokul-eswar-sns-institutions/" target="_blank" rel="noopener noreferrer" className="theme-icon">
                <Linkedin size={20} />
              </a>
              <a href="mailto:gokuleswar177@gmail.com" className="theme-icon">
                <Mail size={20} />
              </a>
              <a href="tel:+919025699713" className="theme-icon">
                <Phone size={20} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
