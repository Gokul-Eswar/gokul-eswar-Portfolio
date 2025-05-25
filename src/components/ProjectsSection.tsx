
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const ProjectsSection = () => {
  const { ref: titleRef, isIntersecting: titleVisible } = useIntersectionObserver();
  const { ref: projectsRef, isIntersecting: projectsVisible } = useIntersectionObserver();

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
    <section id="projects" className="py-20 bg-portfolio-lightGray overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={titleRef}>
          <h2 className={`text-3xl md:text-4xl font-bold text-portfolio-navy mb-2 text-center transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            My Projects
          </h2>
          <div className={`w-20 h-1 bg-portfolio-lightBlue mx-auto mb-10 transition-all duration-1000 delay-200 ${
            titleVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}></div>
        </div>
        
        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`border-portfolio-blue/20 hover:border-portfolio-blue hover:shadow-lg transition-all duration-1000 overflow-hidden ${
              projectsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
            }`} style={{ transitionDelay: `${index * 200 + 400}ms` }}>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="bg-portfolio-blue/10 text-portfolio-blue hover:bg-portfolio-blue/20">
                    {project.type}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-portfolio-navy">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-portfolio-darkGray/80 mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="border-portfolio-blue/40 text-portfolio-blue text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="text-sm text-portfolio-darkGray/70 flex items-center">
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
