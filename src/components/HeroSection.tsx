
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Hi, I'm Gokul Eswar";
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      if (displayText.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        }, 150);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(true);
        }, 500);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [displayText, isTyping, fullText]);

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative pt-20 pb-10 bg-gradient-to-br from-black via-gray-900 to-black"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 min-h-[1.2em] section-enter visible">
            <span className="gradient-text">{displayText}</span>
            <span className="animate-pulse text-orange-500">|</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 section-enter visible stagger-1">
            Software Developer & Electronics Engineer
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl leading-relaxed section-enter visible stagger-2">
            An individual passionate about continuous learning, current trends, with a positive outlook, 
            strong teamwork skills, and adaptability, seeking a dynamic role to utilize technical expertise 
            and drive engineering excellence in any professional environment.
          </p>
          <div className="flex flex-wrap gap-6 section-enter visible stagger-3">
            <Button 
              className="btn-primary cursor-hover text-lg px-8 py-4"
              asChild
            >
              <a href="#projects">View My Projects</a>
            </Button>
            <Button 
              className="btn-secondary text-lg px-8 py-4 cursor-hover"
              asChild
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-orange-500 text-orange-500 cursor-hover hover:bg-orange-500 hover:text-black transition-all duration-300">
          <ArrowDown size={24} />
        </a>
      </div>
      
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </section>
  );
};

export default HeroSection;
