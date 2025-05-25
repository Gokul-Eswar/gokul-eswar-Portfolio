
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, School, Code, Award } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const AboutSection = () => {
  const { ref: titleRef, isIntersecting: titleVisible } = useIntersectionObserver<HTMLDivElement>();
  const { ref: contentRef, isIntersecting: contentVisible } = useIntersectionObserver<HTMLDivElement>();
  const { ref: cardsRef, isIntersecting: cardsVisible } = useIntersectionObserver<HTMLDivElement>();

  return (
    <section id="about" className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={titleRef}>
          <h2 className={`text-4xl md:text-6xl font-bold mb-4 text-center transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="gradient-text">About Me</span>
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-16 transition-all duration-1000 delay-200 ${
            titleVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div ref={contentRef} className={`transition-all duration-1000 delay-300 ${
            contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h3 className="text-2xl font-medium text-orange-500 mb-6 text-glow">
              Background & Education
            </h3>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              I'm a Software Developer with a background in Electronics and Communication Engineering 
              from SNS College of Engineering in Coimbatore. I graduated in 2026 with a CGPA of 8.93.
            </p>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              My passion lies in designing and developing innovative solutions that combine hardware 
              and software. I'm particularly interested in IoT, embedded systems, and creating applications 
              that solve real-world problems.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
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
              <Card key={index} className={`glass-card border-gray-800 hover:border-orange-500/50 transition-all duration-1000 cursor-hover ${item.delay} ${
                cardsVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-10 rotate-3'
              }`}>
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="bg-orange-500/20 p-3 rounded-lg border border-orange-500/30">
                    <item.icon className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2 text-lg">{item.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-orange-600/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default AboutSection;
