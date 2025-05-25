
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, School, Code, Award } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const AboutSection = () => {
  const { ref: titleRef, isIntersecting: titleVisible } = useIntersectionObserver();
  const { ref: contentRef, isIntersecting: contentVisible } = useIntersectionObserver();
  const { ref: cardsRef, isIntersecting: cardsVisible } = useIntersectionObserver();

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={titleRef}>
          <h2 className={`text-3xl md:text-4xl font-bold text-portfolio-navy mb-2 text-center transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            About Me
          </h2>
          <div className={`w-20 h-1 bg-portfolio-lightBlue mx-auto mb-10 transition-all duration-1000 delay-200 ${
            titleVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div ref={contentRef} className={`transition-all duration-1000 delay-300 ${
            contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
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
          
          <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: Briefcase, title: "Experience", desc: "Internship at Prime Solutions working on embedded systems", delay: "delay-500" },
              { icon: School, title: "Education", desc: "B.E in ECE from SNS College of Engineering, CGPA: 8.93", delay: "delay-700" },
              { icon: Code, title: "Skills", desc: "Python, Java, MCP, GitHub, Ohima, Windows", delay: "delay-900" },
              { icon: Award, title: "Certifications", desc: "Python, AI Foundation, AI Associate, Cloud Foundation", delay: "delay-1000" }
            ].map((item, index) => (
              <Card key={index} className={`border-portfolio-blue/20 hover:border-portfolio-blue hover:shadow-md transition-all duration-1000 ${item.delay} ${
                cardsVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-10 rotate-3'
              }`}>
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="bg-portfolio-blue/10 p-3 rounded-lg">
                    <item.icon className="h-6 w-6 text-portfolio-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-portfolio-navy mb-1">{item.title}</h4>
                    <p className="text-sm text-portfolio-darkGray/70">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
