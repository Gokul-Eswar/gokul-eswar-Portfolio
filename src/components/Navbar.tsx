
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <a href="#home" className="font-bold text-2xl text-portfolio-navy">
          Gokul<span className="text-portfolio-lightBlue">.Dev</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#home" 
            className="text-portfolio-darkGray hover:text-portfolio-blue transition-colors"
          >
            Home
          </a>
          <a 
            href="#about" 
            className="text-portfolio-darkGray hover:text-portfolio-blue transition-colors"
          >
            About
          </a>
          <a 
            href="#projects" 
            className="text-portfolio-darkGray hover:text-portfolio-blue transition-colors"
          >
            Projects
          </a>
          <a 
            href="#experience" 
            className="text-portfolio-darkGray hover:text-portfolio-blue transition-colors"
          >
            Experience
          </a>
          <a 
            href="#contact" 
            className="text-portfolio-darkGray hover:text-portfolio-blue transition-colors"
          >
            Contact
          </a>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/Gokul-Eswar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-portfolio-darkGray hover:text-portfolio-blue transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/gokul-eswar-sns-institutions/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-portfolio-darkGray hover:text-portfolio-blue transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-6 absolute top-full left-0 w-full animate-fade-in">
          <nav className="flex flex-col gap-4">
            <a 
              href="#home" 
              className="text-portfolio-darkGray hover:text-portfolio-blue transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-portfolio-darkGray hover:text-portfolio-blue transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-portfolio-darkGray hover:text-portfolio-blue transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#experience" 
              className="text-portfolio-darkGray hover:text-portfolio-blue transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Experience
            </a>
            <a 
              href="#contact" 
              className="text-portfolio-darkGray hover:text-portfolio-blue transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            
            <div className="flex items-center gap-4 py-2">
              <a 
                href="https://github.com/Gokul-Eswar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-portfolio-darkGray hover:text-portfolio-blue transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/gokul-eswar-sns-institutions/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-portfolio-darkGray hover:text-portfolio-blue transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:gokuleswar177@gmail.com" 
                className="text-portfolio-darkGray hover:text-portfolio-blue transition-colors"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+919025699713" 
                className="text-portfolio-darkGray hover:text-portfolio-blue transition-colors"
              >
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
