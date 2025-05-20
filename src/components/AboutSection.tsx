
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, School, Code, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-portfolio-navy mb-2 text-center">
          About Me
        </h2>
        <div className="w-20 h-1 bg-portfolio-lightBlue mx-auto mb-10"></div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-xl font-medium text-portfolio-darkGray mb-4">
              Background & Education
            </h3>
            <p className="text-portfolio-darkGray/80 mb-4">
              I'm a Software Developer with a background in Electronics and Communication Engineering 
              from SNS College of Engineering in Coimbatore. I graduated in 2026 with a CGPA of 8.93.
            </p>
            <p className="text-portfolio-darkGray/80 mb-4">
              My passion lies in designing and developing innovative solutions that combine hardware 
              and software. I'm particularly interested in IoT, embedded systems, and creating applications 
              that solve real-world problems.
            </p>
            <p className="text-portfolio-darkGray/80">
              When I'm not coding, I enjoy learning new technologies, working on personal projects, and 
              continuously improving my skills through online courses and certifications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="border-portfolio-blue/20 hover:border-portfolio-blue hover:shadow-md transition-all">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="bg-portfolio-blue/10 p-3 rounded-lg">
                  <Briefcase className="h-6 w-6 text-portfolio-blue" />
                </div>
                <div>
                  <h4 className="font-medium text-portfolio-navy mb-1">Experience</h4>
                  <p className="text-sm text-portfolio-darkGray/70">Internship at Prime Solutions working on embedded systems</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-portfolio-blue/20 hover:border-portfolio-blue hover:shadow-md transition-all">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="bg-portfolio-blue/10 p-3 rounded-lg">
                  <School className="h-6 w-6 text-portfolio-blue" />
                </div>
                <div>
                  <h4 className="font-medium text-portfolio-navy mb-1">Education</h4>
                  <p className="text-sm text-portfolio-darkGray/70">B.E in ECE from SNS College of Engineering, CGPA: 8.93</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-portfolio-blue/20 hover:border-portfolio-blue hover:shadow-md transition-all">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="bg-portfolio-blue/10 p-3 rounded-lg">
                  <Code className="h-6 w-6 text-portfolio-blue" />
                </div>
                <div>
                  <h4 className="font-medium text-portfolio-navy mb-1">Skills</h4>
                  <p className="text-sm text-portfolio-darkGray/70">Python, Java, MCP, GitHub, Ohima, Windows</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-portfolio-blue/20 hover:border-portfolio-blue hover:shadow-md transition-all">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="bg-portfolio-blue/10 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-portfolio-blue" />
                </div>
                <div>
                  <h4 className="font-medium text-portfolio-navy mb-1">Certifications</h4>
                  <p className="text-sm text-portfolio-darkGray/70">Python, AI Foundation, AI Associate, Cloud Foundation</p>
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
