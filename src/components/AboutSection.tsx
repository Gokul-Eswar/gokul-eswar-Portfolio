
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, School, Code, Award } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const AboutSection = () => {
  const { theme } = useTheme();
  
  const getSectionBgClass = () => {
    if (theme === "light") {
      return "bg-white";
    } else if (theme === "dark") {
      return "bg-portfolio-dark";
    } else {
      return "bg-portfolio-oceanDark";
    }
  };
  
  const getCardBorderClass = () => {
    if (theme === "light") {
      return "border-portfolio-blue/20 hover:border-portfolio-blue";
    } else if (theme === "dark") {
      return "border-portfolio-lightBlue/20 hover:border-portfolio-lightBlue";
    } else {
      return "border-cyan-500/20 hover:border-cyan-500";
    }
  };
  
  const getIconBgClass = () => {
    if (theme === "light") {
      return "bg-portfolio-blue/10";
    } else if (theme === "dark") {
      return "bg-portfolio-lightBlue/10";
    } else {
      return "bg-cyan-500/10";
    }
  };
  
  const getIconTextClass = () => {
    if (theme === "light") {
      return "text-portfolio-blue";
    } else if (theme === "dark") {
      return "text-portfolio-lightBlue";
    } else {
      return "text-cyan-500";
    }
  };

  return (
    <section id="about" className={`py-20 ${getSectionBgClass()}`}>
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold theme-text mb-2 text-center">
          About Me
        </h2>
        <div className={`w-20 h-1 ${theme === "light" ? "bg-portfolio-lightBlue" : theme === "dark" ? "bg-portfolio-lightBlue" : "bg-cyan-500"} mx-auto mb-10`}></div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-xl font-medium theme-text mb-4">
              Background & Education
            </h3>
            <p className="theme-text/80 mb-4">
              I'm a Software Developer with a background in Electronics and Communication Engineering 
              from SNS College of Engineering in Coimbatore. I graduated in 2026 with a CGPA of 8.93.
            </p>
            <p className="theme-text/80 mb-4">
              My passion lies in designing and developing innovative solutions that combine hardware 
              and software. I'm particularly interested in IoT, embedded systems, and creating applications 
              that solve real-world problems.
            </p>
            <p className="theme-text/80">
              When I'm not coding, I enjoy learning new technologies, working on personal projects, and 
              continuously improving my skills through online courses and certifications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className={`${getCardBorderClass()} hover:shadow-md transition-all`}>
              <CardContent className="flex items-start gap-4 p-6">
                <div className={`${getIconBgClass()} p-3 rounded-lg`}>
                  <Briefcase className={`h-6 w-6 ${getIconTextClass()}`} />
                </div>
                <div>
                  <h4 className="font-medium theme-text mb-1">Experience</h4>
                  <p className="text-sm theme-text/70">Internship at Prime Solutions working on embedded systems</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className={`${getCardBorderClass()} hover:shadow-md transition-all`}>
              <CardContent className="flex items-start gap-4 p-6">
                <div className={`${getIconBgClass()} p-3 rounded-lg`}>
                  <School className={`h-6 w-6 ${getIconTextClass()}`} />
                </div>
                <div>
                  <h4 className="font-medium theme-text mb-1">Education</h4>
                  <p className="text-sm theme-text/70">B.E in ECE from SNS College of Engineering, CGPA: 8.93</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className={`${getCardBorderClass()} hover:shadow-md transition-all`}>
              <CardContent className="flex items-start gap-4 p-6">
                <div className={`${getIconBgClass()} p-3 rounded-lg`}>
                  <Code className={`h-6 w-6 ${getIconTextClass()}`} />
                </div>
                <div>
                  <h4 className="font-medium theme-text mb-1">Skills</h4>
                  <p className="text-sm theme-text/70">Python, Java, MCP, GitHub, Ohima, Windows</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className={`${getCardBorderClass()} hover:shadow-md transition-all`}>
              <CardContent className="flex items-start gap-4 p-6">
                <div className={`${getIconBgClass()} p-3 rounded-lg`}>
                  <Award className={`h-6 w-6 ${getIconTextClass()}`} />
                </div>
                <div>
                  <h4 className="font-medium theme-text mb-1">Certifications</h4>
                  <p className="text-sm theme-text/70">Python, AI Foundation, AI Associate, Cloud Foundation</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
