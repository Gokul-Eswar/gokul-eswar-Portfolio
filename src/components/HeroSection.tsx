
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";
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
      className="min-h-screen flex flex-col justify-center relative pt-20 pb-10 bg-portfolio-dark overflow-hidden"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,53,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,53,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl">
          {/* Small intro text */}
          <div className="mb-6 animate-fade-in">
            <span className="text-portfolio-accent text-sm font-medium tracking-wider uppercase">
              Software Developer & Electronics Engineer
            </span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-none">
            <div className="min-h-[1.2em]">
              {displayText}
              <span className="animate-pulse text-portfolio-accent">|</span>
            </div>
            <div className="text-portfolio-gray text-5xl md:text-6xl lg:text-7xl mt-4">
              Creating Digital
            </div>
            <div className="text-gradient text-5xl md:text-6xl lg:text-7xl">
              Experiences
            </div>
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-portfolio-gray mb-12 max-w-3xl leading-relaxed animate-fade-in" style={{ animationDelay: "400ms" }}>
            An individual passionate about continuous learning, current trends, with a positive outlook, 
            strong teamwork skills, and adaptability, seeking a dynamic role to utilize technical expertise 
            and drive engineering excellence in any professional environment.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-6 animate-fade-in" style={{ animationDelay: "600ms" }}>
            <Button 
              className="bg-portfolio-accent hover:bg-portfolio-accent/90 text-black font-semibold px-8 py-4 text-lg rounded-full group"
              asChild
            >
              <a href="#projects" className="flex items-center gap-2">
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full"
              asChild
            >
              <a href="#contact">Let's Talk</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-white/60 hover:text-portfolio-accent transition-colors">
          <span className="text-sm mb-2">Scroll</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
