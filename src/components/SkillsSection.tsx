
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useEffect, useState } from "react";

const SkillsSection = () => {
  const { ref: titleRef, isIntersecting: titleVisible } = useIntersectionObserver<HTMLDivElement>();
  const { ref: skillsRef, isIntersecting: skillsVisible } = useIntersectionObserver<HTMLDivElement>();
  const { ref: certsRef, isIntersecting: certsVisible } = useIntersectionObserver<HTMLDivElement>();

  const [animatedValues, setAnimatedValues] = useState<number[]>([]);

  const programmingSkills = [
    { name: "Python", level: 85 },
    { name: "Java", level: 75 },
  ];
  
  const toolsSkills = [
    { name: "MCP", level: 80 },
    { name: "GitHub", level: 75 },
    { name: "Ohima", level: 70 },
  ];

  useEffect(() => {
    if (skillsVisible) {
      const allSkills = [...programmingSkills, ...toolsSkills];
      allSkills.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedValues(prev => {
            const newValues = [...prev];
            newValues[index] = skill.level;
            return newValues;
          });
        }, index * 200);
      });
    }
  }, [skillsVisible]);
  
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
    <section className="py-32 bg-gray-900/50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={titleRef}>
          <h2 className={`text-4xl md:text-6xl font-bold mb-4 text-center transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="gradient-text">Skills & Certifications</span>
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-16 transition-all duration-1000 delay-200 ${
            titleVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16">
          {/* Skills Column */}
          <div ref={skillsRef}>
            <Card className={`glass-card border-gray-800 hover:border-orange-500/50 mb-8 cursor-hover group transition-all duration-1000 delay-300 ${
              skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-orange-500 text-glow group-hover:text-orange-400 transition-colors duration-300">Programming</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {programmingSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium text-white">{skill.name}</span>
                      <span className="text-sm text-orange-500 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={animatedValues[index] || 0} 
                        className="h-3 bg-gray-800"
                      />
                      <div 
                        className="absolute top-0 left-0 h-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full progress-animated glow-orange"
                        style={{ width: `${animatedValues[index] || 0}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card className={`glass-card border-gray-800 hover:border-orange-500/50 mb-8 cursor-hover group transition-all duration-1000 delay-500 ${
              skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-orange-500 text-glow group-hover:text-orange-400 transition-colors duration-300">Tools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {toolsSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium text-white">{skill.name}</span>
                      <span className="text-sm text-orange-500 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={animatedValues[programmingSkills.length + index] || 0} 
                        className="h-3 bg-gray-800"
                      />
                      <div 
                        className="absolute top-0 left-0 h-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full progress-animated glow-orange"
                        style={{ width: `${animatedValues[programmingSkills.length + index] || 0}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card className={`glass-card border-gray-800 hover:border-orange-500/50 cursor-hover group transition-all duration-1000 delay-700 ${
              skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-orange-500 text-glow group-hover:text-orange-400 transition-colors duration-300">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {languages.map((language, index) => (
                    <Badge key={index} className={`bg-orange-500/20 text-orange-500 border-orange-500/30 hover:bg-orange-500/30 px-4 py-2 text-sm cursor-hover transition-all duration-500 ${
                      skillsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                    }`} style={{ transitionDelay: `${index * 100 + 800}ms` }}>
                      {language}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Certifications and Participations */}
          <div ref={certsRef} className="space-y-8">
            <Card className={`glass-card border-gray-800 hover:border-orange-500/50 cursor-hover group transition-all duration-1000 delay-300 ${
              certsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-orange-500 text-glow group-hover:text-orange-400 transition-colors duration-300">Certifications</CardTitle>
                <CardDescription className="text-gray-400 text-lg">
                  Professional certifications and courses completed
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {certifications.map((cert, index) => (
                    <div key={index} className={`flex justify-between items-center pb-4 border-b border-gray-800 transition-all duration-700 ${
                      certsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`} style={{ transitionDelay: `${index * 150 + 500}ms` }}>
                      <span className="font-medium text-white text-lg">{cert.name}</span>
                      <Badge variant="outline" className="text-sm border-orange-500/30 text-orange-500 hover:border-orange-500/50">
                        {cert.date}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className={`glass-card border-gray-800 hover:border-orange-500/50 cursor-hover group transition-all duration-1000 delay-700 ${
              certsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-orange-500 text-glow group-hover:text-orange-400 transition-colors duration-300">Participation Certificates</CardTitle>
                <CardDescription className="text-gray-400 text-lg">
                  Events, hackathons and workshops
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className={`flex justify-between items-center pb-4 border-b border-gray-800 transition-all duration-700 delay-900 ${
                    certsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}>
                    <span className="font-medium text-white text-lg">Bihar Innovation Challenge | Hackathon</span>
                    <Badge variant="outline" className="text-sm border-orange-500/30 text-orange-500 hover:border-orange-500/50">
                      IIT Bihar | 2023
                    </Badge>
                  </div>
                  <div className={`flex justify-between items-center pb-4 border-b border-gray-800 transition-all duration-700 delay-1000 ${
                    certsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}>
                    <span className="font-medium text-white text-lg">Workshop on PCB Designing</span>
                    <Badge variant="outline" className="text-sm border-orange-500/30 text-orange-500 hover:border-orange-500/50">
                      SNS College | 2023
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default SkillsSection;
