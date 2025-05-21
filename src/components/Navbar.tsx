
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
    if (theme === "light") {
      return "text-portfolio-darkGray hover:text-portfolio-blue transition-colors";
    } else if (theme === "dark") {
      return "text-gray-300 hover:text-white transition-colors";
    } else {
      return "text-blue-100 hover:text-white transition-colors";
    }
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
    if (theme === "light") {
      return "text-portfolio-lightBlue";
    } else if (theme === "dark") {
      return "text-blue-400";
    } else {
      return "text-blue-200";
    }
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
        <a href="#home" className={`font-bold text-2xl ${getLogoClasses()}`}>
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
              className={getLinkClasses()}
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/gokul-eswar-sns-institutions/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={getLinkClasses()}
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
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className={`md:hidden py-4 px-6 absolute top-full left-0 w-full animate-fade-in ${getMobileMenuClasses()}`}>
          <nav className="flex flex-col gap-4">
            <a href="#home" className={getLinkClasses()} onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#about" className={getLinkClasses()} onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#projects" className={getLinkClasses()} onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="#experience" className={getLinkClasses()} onClick={() => setMobileMenuOpen(false)}>Experience</a>
            <a href="#contact" className={getLinkClasses()} onClick={() => setMobileMenuOpen(false)}>Contact</a>
            
            <div className="flex items-center gap-4 py-2">
              <a href="https://github.com/Gokul-Eswar" target="_blank" rel="noopener noreferrer" className={getLinkClasses()}>
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/gokul-eswar-sns-institutions/" target="_blank" rel="noopener noreferrer" className={getLinkClasses()}>
                <Linkedin size={20} />
              </a>
              <a href="mailto:gokuleswar177@gmail.com" className={getLinkClasses()}>
                <Mail size={20} />
              </a>
              <a href="tel:+919025699713" className={getLinkClasses()}>
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
