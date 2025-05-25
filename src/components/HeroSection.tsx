
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
      // Typing phase
      if (displayText.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        }, 150); // typing speed
      } else {
        // Pause before erasing
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // pause duration
      }
    } else {
      // Erasing phase
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 100); // erasing speed
      } else {
        // Pause before typing again
        timeout = setTimeout(() => {
          setIsTyping(true);
        }, 500); // pause before restart
      }
    }
    
    return () => clearTimeout(timeout);
  }, [displayText, isTyping, fullText]);

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative pt-20 pb-10 bg-gradient-to-br from-white to-portfolio-lightGray"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-lg">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-navy mb-4 min-h-[1.2em]">
            {displayText}
            <span className="animate-pulse text-portfolio-lightBlue">|</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-portfolio-darkGray mb-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Software Developer & Electronics Engineer
          </h2>
          <p className="text-lg text-portfolio-darkGray/80 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "400ms" }}>
            An individual passionate about continuous learning, current trends, with a positive outlook, 
            strong teamwork skills, and adaptability, seeking a dynamic role to utilize technical expertise 
            and drive engineering excellence in any professional environment.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "600ms" }}>
            <Button 
              className="bg-portfolio-blue hover:bg-portfolio-navy text-white"
              asChild
            >
              <a href="#projects">View My Projects</a>
            </Button>
            <Button 
              variant="outline" 
              className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue/10"
              asChild
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#about" className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-portfolio-blue text-portfolio-blue bg-white/80 backdrop-blur-sm">
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
