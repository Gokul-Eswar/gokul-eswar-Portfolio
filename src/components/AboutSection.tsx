
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, School, Code, Award } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const AboutSection = () => {
  const { ref: titleRef, isIntersecting: titleVisible } = useIntersectionObserver<HTMLDivElement>();
  const { ref: contentRef, isIntersecting: contentVisible } = useIntersectionObserver<HTMLDivElement>();
  const { ref: cardsRef, isIntersecting: cardsVisible } = useIntersectionObserver<HTMLDivElement>();

  return (
    <section id="about" className="py-32 bg-portfolio-light overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={titleRef} className="mb-20">
          <span className={`text-portfolio-accent text-sm font-medium tracking-wider uppercase mb-4 block transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            About Me
          </span>
          <h2 className={`text-5xl md:text-6xl font-black text-white mb-6 transition-all duration-1000 delay-200 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Building the Future
          </h2>
          <div className={`w-24 h-1 bg-portfolio-accent transition-all duration-1000 delay-400 ${
            titleVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div ref={contentRef} className={`transition-all duration-1000 delay-300 ${
            contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h3 className="text-2xl font-bold text-white mb-6">
              Background & Education
            </h3>
            <div className="space-y-6 text-lg text-portfolio-gray leading-relaxed">
              <p>
                I'm a Software Developer with a background in Electronics and Communication Engineering 
                from SNS College of Engineering in Coimbatore. I graduated in 2026 with a CGPA of 8.93.
              </p>
              <p>
                My passion lies in designing and developing innovative solutions that combine hardware 
                and software. I'm particularly interested in IoT, embedded systems, and creating applications 
                that solve real-world problems.
              </p>
              <p>
                When I'm not coding, I enjoy learning new technologies, working on personal projects, and 
                continuously improving my skills through online courses and certifications.
              </p>
            </div>
          </div>
          
          <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: Briefcase, title: "Experience", desc: "Internship at Prime Solutions working on embedded systems", delay: "delay-500" },
              { icon: School, title: "Education", desc: "B.E in ECE from SNS College of Engineering, CGPA: 8.93", delay: "delay-700" },
              { icon: Code, title: "Skills", desc: "Python, Java, MCP, GitHub, Ohima, Windows", delay: "delay-900" },
              { icon: Award, title: "Certifications", desc: "Python, AI Foundation, AI Associate, Cloud Foundation", delay: "delay-1000" }
            ].map((item, index) => (
              <Card key={index} className={`bg-glass border-white/10 hover:border-portfolio-accent/50 hover-lift transition-all duration-1000 ${item.delay} ${
                cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <CardContent className="p-8">
                  <div className="bg-portfolio-accent/10 p-4 rounded-xl mb-4 w-fit">
                    <item.icon className="h-8 w-8 text-portfolio-accent" />
                  </div>
                  <h4 className="font-bold text-white mb-2 text-lg">{item.title}</h4>
                  <p className="text-portfolio-gray text-sm leading-relaxed">{item.desc}</p>
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
