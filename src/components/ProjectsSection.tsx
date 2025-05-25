
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
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
    <section id="projects" className="py-32 bg-gray-900/50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={titleRef}>
          <h2 className={`text-4xl md:text-6xl font-bold mb-4 text-center transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="gradient-text">My Projects</span>
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-16 transition-all duration-1000 delay-200 ${
            titleVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}></div>
        </div>
        
        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`glass-card border-gray-800 hover:border-orange-500/50 transition-all duration-1000 overflow-hidden cursor-hover group ${
              projectsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
            }`} style={{ transitionDelay: `${index * 200 + 400}ms` }}>
              <CardHeader className="relative">
                <div className="flex justify-between items-start mb-4">
                  <Badge className="bg-orange-500/20 text-orange-500 border-orange-500/30 hover:bg-orange-500/30">
                    {project.type}
                  </Badge>
                </div>
                <CardTitle className="text-2xl text-white group-hover:text-orange-500 transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-500/20 to-transparent rounded-bl-3xl"></div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="border-gray-600 text-gray-300 hover:border-orange-500/50 hover:text-orange-500 text-xs transition-colors duration-300">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="text-sm text-gray-400 flex items-center border-t border-gray-800 pt-4">
                <Calendar size={16} className="mr-2 text-orange-500" />
                {project.date}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-56 h-56 bg-orange-600/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default ProjectsSection;
