
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowUpRight } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const ProjectsSection = () => {
  const { ref: titleRef, isIntersecting: titleVisible } = useIntersectionObserver<HTMLDivElement>();
  const { ref: projectsRef, isIntersecting: projectsVisible } = useIntersectionObserver<HTMLDivElement>();

  const projects = [
    {
      title: "Street light fault detection system",
      description: "Developed a system to detect the location of faulty street lights and informing the authorities about the status.",
      date: "Jan 01, 2024 - Apr 15, 2024",
      tags: ["IoT", "Embedded Systems", "Python"],
      type: "Online"
    },
    {
      title: "Agro Dehydrator",
      description: "To increase the shelf life of vegetables with highest moisture content by dehydrating them through hybrid power consumption of both solar as well as power absorbed by the solar power. It also leverages an AI technology to create a feedback loop and automate the process.",
      date: "May 15, 2024 - Oct 01, 2024",
      tags: ["AI", "Solar Power", "Automation"],
      type: "Online"
    },
    {
      title: "Traffic controls system using arduino",
      description: "Created a smart traffic control system by interfacing IoT sensors to smartly adapt to oncoming traffic flow and switch the signals accordingly. It also provides special signal adjustment for emergency vehicles like ambulance.",
      date: "2023",
      tags: ["Arduino", "IoT", "Traffic Control"],
      type: "Embedded System"
    }
  ];

  return (
    <section id="projects" className="py-32 bg-portfolio-dark overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={titleRef} className="mb-20">
          <span className={`text-portfolio-accent text-sm font-medium tracking-wider uppercase mb-4 block transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            My Work
          </span>
          <h2 className={`text-5xl md:text-6xl font-black text-white mb-6 transition-all duration-1000 delay-200 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Featured Projects
          </h2>
          <div className={`w-24 h-1 bg-portfolio-accent transition-all duration-1000 delay-400 ${
            titleVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}></div>
        </div>
        
        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`bg-glass border-white/10 hover:border-portfolio-accent/50 hover-lift group cursor-pointer transition-all duration-1000 ${
              projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`} style={{ transitionDelay: `${index * 200 + 400}ms` }}>
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <Badge className="bg-portfolio-accent/10 text-portfolio-accent hover:bg-portfolio-accent/20 border-portfolio-accent/20">
                    {project.type}
                  </Badge>
                  <ArrowUpRight className="w-5 h-5 text-portfolio-gray group-hover:text-portfolio-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <CardTitle className="text-2xl text-white font-bold group-hover:text-portfolio-accent transition-colors">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-4">
                <CardDescription className="text-portfolio-gray leading-relaxed mb-6">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="border-white/20 text-white/70 text-xs hover:border-portfolio-accent/50 hover:text-portfolio-accent transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="text-sm text-portfolio-gray flex items-center pt-4 border-t border-white/10">
                <Calendar size={14} className="mr-2" />
                {project.date}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
