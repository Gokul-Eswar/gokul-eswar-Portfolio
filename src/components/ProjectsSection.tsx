
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const ProjectsSection = () => {
  const { theme } = useTheme();
  
  const getSectionBgClass = () => {
    if (theme === "light") {
      return "bg-portfolio-lightGray";
    } else if (theme === "dark") {
      return "bg-gray-900";
    } else {
      return "bg-blue-900";
    }
  };
  
  const getCardBorderClass = () => {
    if (theme === "light") {
      return "border-portfolio-blue/20";
    } else if (theme === "dark") {
      return "border-portfolio-lightBlue/20";
    } else {
      return "border-cyan-500/20";
    }
  };
  
  const getBadgeBgClass = () => {
    if (theme === "light") {
      return "bg-portfolio-blue/10 text-portfolio-blue hover:bg-portfolio-blue/20";
    } else if (theme === "dark") {
      return "bg-portfolio-lightBlue/10 text-portfolio-lightBlue hover:bg-portfolio-lightBlue/20";
    } else {
      return "bg-cyan-500/10 text-cyan-500 hover:bg-cyan-500/20";
    }
  };
  
  const getTagBadgeClass = () => {
    if (theme === "light") {
      return "border-portfolio-blue/40 text-portfolio-blue";
    } else if (theme === "dark") {
      return "border-portfolio-lightBlue/40 text-portfolio-lightBlue";
    } else {
      return "border-cyan-500/40 text-cyan-500";
    }
  };

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
    <section id="projects" className={`py-20 ${getSectionBgClass()}`}>
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold theme-text mb-2 text-center">
          My Projects
        </h2>
        <div className={`w-20 h-1 ${theme === "light" ? "bg-portfolio-lightBlue" : theme === "dark" ? "bg-portfolio-lightBlue" : "bg-cyan-500"} mx-auto mb-10`}></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`${getCardBorderClass()} hover:shadow-lg transition-all overflow-hidden`}>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className={getBadgeBgClass()}>
                    {project.type}
                  </Badge>
                </div>
                <CardTitle className="text-xl theme-text">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="theme-text/80 mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className={`${getTagBadgeClass()} text-xs`}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="text-sm theme-text/70 flex items-center">
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
