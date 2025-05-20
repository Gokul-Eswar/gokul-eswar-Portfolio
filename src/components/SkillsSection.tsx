
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const programmingSkills = [
    { name: "Python", level: 85 },
    { name: "Java", level: 75 },
  ];
  
  const toolsSkills = [
    { name: "MCP", level: 80 },
    { name: "GitHub", level: 75 },
    { name: "Ohima", level: 70 },
  ];
  
  const certifications = [
    {
      name: "Python: Prep Insta",
      date: "Feb 2024",
    },
    {
      name: "AI Associate: Salesforce",
      date: "Oct 2024",
    },
    {
      name: "AI Foundation: Oracle",
      date: "Mar 2025",
    },
    {
      name: "Cloud Foundation: Oracle",
      date: "May 2025",
    },
  ];

  const languages = ["English", "Tamil", "Hindi", "Japanese"];
  
  return (
    <section className="py-20 bg-portfolio-lightGray">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-portfolio-navy mb-2 text-center">
          Skills & Certifications
        </h2>
        <div className="w-20 h-1 bg-portfolio-lightBlue mx-auto mb-10"></div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Skills Column */}
          <div>
            <Card className="border-portfolio-blue/20 mb-6">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-portfolio-navy">Programming</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {programmingSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-portfolio-darkGray">{skill.name}</span>
                      <span className="text-xs text-portfolio-darkGray/70">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card className="border-portfolio-blue/20 mb-6">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-portfolio-navy">Tools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {toolsSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-portfolio-darkGray">{skill.name}</span>
                      <span className="text-xs text-portfolio-darkGray/70">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card className="border-portfolio-blue/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-portfolio-navy">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {languages.map((language, index) => (
                    <Badge key={index} className="bg-portfolio-blue/10 text-portfolio-blue hover:bg-portfolio-blue/20">
                      {language}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Certifications and Participations */}
          <div className="space-y-6">
            <Card className="border-portfolio-blue/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-portfolio-navy">Certifications</CardTitle>
                <CardDescription className="text-portfolio-darkGray/70">
                  Professional certifications and courses completed
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex justify-between items-center pb-3 border-b border-portfolio-blue/10">
                      <span className="font-medium text-portfolio-darkGray">{cert.name}</span>
                      <Badge variant="outline" className="text-xs border-portfolio-blue/30 text-portfolio-blue">
                        {cert.date}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-portfolio-blue/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-portfolio-navy">Participation Certificates</CardTitle>
                <CardDescription className="text-portfolio-darkGray/70">
                  Events, hackathons and workshops
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-portfolio-blue/10">
                    <span className="font-medium text-portfolio-darkGray">Bihar Innovation Challenge | Hackathon</span>
                    <Badge variant="outline" className="text-xs border-portfolio-blue/30 text-portfolio-blue">
                      IIT Bihar | 2023
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-portfolio-blue/10">
                    <span className="font-medium text-portfolio-darkGray">Workshop on PCB Designing</span>
                    <Badge variant="outline" className="text-xs border-portfolio-blue/30 text-portfolio-blue">
                      SNS College | 2023
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
