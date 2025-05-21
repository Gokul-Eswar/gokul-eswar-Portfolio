
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const HeroSection = () => {
  const { theme } = useTheme();
  
  const getBgClasses = () => {
    if (theme === "light") {
      return "bg-gradient-to-br from-white to-portfolio-lightGray";
    } else if (theme === "dark") {
      return "bg-gradient-to-br from-portfolio-dark to-gray-900";
    } else {
      return "bg-gradient-to-br from-portfolio-oceanDark to-portfolio-oceanBlue";
    }
  };
  
  const getTextClasses = () => {
    if (theme === "light") {
      return "text-portfolio-navy";
    } else if (theme === "dark") {
      return "text-white";
    } else {
      return "text-white";
    }
  };
  
  const getHighlightClasses = () => {
    if (theme === "light") {
      return "text-portfolio-lightBlue";
    } else if (theme === "dark") {
      return "text-portfolio-lightBlue";
    } else {
      return "text-cyan-300";
    }
  };
  
  const getButtonClasses = () => {
    if (theme === "light") {
      return "bg-portfolio-blue hover:bg-portfolio-navy text-white";
    } else if (theme === "dark") {
      return "bg-portfolio-lightBlue hover:bg-blue-700 text-white";
    } else {
      return "bg-cyan-500 hover:bg-cyan-600 text-white";
    }
  };
  
  const getOutlineButtonClasses = () => {
    if (theme === "light") {
      return "border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue/10";
    } else if (theme === "dark") {
      return "border-portfolio-lightBlue text-portfolio-lightBlue hover:bg-portfolio-lightBlue/10";
    } else {
      return "border-cyan-500 text-cyan-500 hover:bg-cyan-500/10";
    }
  };
  
  const getArrowClasses = () => {
    if (theme === "light") {
      return "border-portfolio-blue text-portfolio-blue";
    } else if (theme === "dark") {
      return "border-portfolio-lightBlue text-portfolio-lightBlue";
    } else {
      return "border-cyan-500 text-cyan-500";
    }
  };

  return (
    <section 
      id="home" 
      className={`min-h-screen flex flex-col justify-center relative pt-20 pb-10 ${getBgClasses()}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${getTextClasses()} mb-4 animate-fade-in`}>
            Hi, I'm <span className={getHighlightClasses()}>Gokul Eswar</span>
          </h1>
          <h2 className="text-xl md:text-2xl theme-text mb-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Software Developer & Electronics Engineer
          </h2>
          <p className="text-lg theme-text/80 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "400ms" }}>
            An individual passionate about continuous learning, current trends, with a positive outlook, 
            strong teamwork skills, and adaptability, seeking a dynamic role to utilize technical expertise 
            and drive engineering excellence in any professional environment.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "600ms" }}>
            <Button 
              className={getButtonClasses()}
              asChild
            >
              <a href="#projects">View My Projects</a>
            </Button>
            <Button 
              variant="outline" 
              className={getOutlineButtonClasses()}
              asChild
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${getArrowClasses()}`}>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
