
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const ExperienceSection = () => {
  const { ref: titleRef, isIntersecting: titleVisible } = useIntersectionObserver<HTMLDivElement>();
  const { ref: experienceRef, isIntersecting: experienceVisible } = useIntersectionObserver<HTMLDivElement>();
  const { ref: educationRef, isIntersecting: educationVisible } = useIntersectionObserver<HTMLDivElement>();

  return (
    <section id="experience" className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={titleRef}>
          <h2 className={`text-4xl md:text-6xl font-bold mb-4 text-center transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="gradient-text">Experience & Education</span>
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-16 transition-all duration-1000 delay-200 ${
            titleVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16">
          {/* Experience Column */}
          <div ref={experienceRef}>
            <h3 className={`text-2xl font-semibold text-orange-500 mb-8 flex items-center text-glow transition-all duration-1000 delay-300 ${
              experienceVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <span className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center mr-4 glow-orange">
                <span className="font-bold">E</span>
              </span>
              Experience
            </h3>
            
            <div className="space-y-8 relative before:absolute before:top-0 before:left-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-orange-500 before:to-orange-600/30">
              {[
                {
                  title: "Prime Solutions",
                  badge: "Internship",
                  subtitle: "Embedded System | Offline | Jul 2024",
                  description: "During my internship I have gained knowledge on designing and simulation of electronic circuits and also learned about automating simple solution with microcontrollers with proteus software, also learned about interfacing various libraries with it.",
                  delay: "delay-500"
                },
                {
                  title: "Traffic Control System",
                  badge: "Project",
                  subtitle: "Arduino | 2023",
                  description: "Created a smart traffic control system by interfacing IoT sensors to smartly adapt to oncoming traffic flow and switch the signals accordingly. It also provides special signal adjustment for emergency vehicles like ambulance.",
                  delay: "delay-700"
                }
              ].map((item, index) => (
                <Card key={index} className={`glass-card border-gray-800 hover:border-orange-500/50 ml-10 cursor-hover group transition-all duration-1000 ${item.delay} ${
                  experienceVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl text-white group-hover:text-orange-500 transition-colors duration-300">{item.title}</CardTitle>
                      <Badge className="bg-orange-500/20 text-orange-500 border-orange-500/30 hover:bg-orange-500/30">
                        {item.badge}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-400">
                      {item.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                  {/* Timeline dot */}
                  <div className="absolute -left-7 top-6 w-4 h-4 bg-orange-500 rounded-full border-4 border-black glow-orange"></div>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Education Column */}
          <div ref={educationRef}>
            <h3 className={`text-2xl font-semibold text-orange-500 mb-8 flex items-center text-glow transition-all duration-1000 delay-300 ${
              educationVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <span className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center mr-4 glow-orange">
                <span className="font-bold">E</span>
              </span>
              Education
            </h3>
            
            <div className="space-y-8 relative before:absolute before:top-0 before:left-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-orange-500 before:to-orange-600/30">
              {[
                {
                  title: "SNS College of Engineering",
                  badge: "B.E (ECE)",
                  subtitle: "Coimbatore | 2022-2026",
                  description: "Currently pursuing Bachelor of Engineering in Electronics and Communication Engineering with a CGPA of 8.93.",
                  delay: "delay-500"
                },
                {
                  title: "P.R.Sidha Naidu Higher Secondary School",
                  badge: "Higher Secondary",
                  subtitle: "Coimbatore | 2022",
                  description: "Completed Higher Secondary education with 75.8%.",
                  delay: "delay-700"
                },
                {
                  title: "P.R.Sidha Naidu Higher Secondary School",
                  badge: "Secondary",
                  subtitle: "Coimbatore | 2020",
                  description: "Completed Secondary education with 74.0%.",
                  delay: "delay-900"
                }
              ].map((item, index) => (
                <Card key={index} className={`glass-card border-gray-800 hover:border-orange-500/50 ml-10 cursor-hover group transition-all duration-1000 ${item.delay} ${
                  educationVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl text-white group-hover:text-orange-500 transition-colors duration-300">{item.title}</CardTitle>
                      <Badge className="bg-orange-500/20 text-orange-500 border-orange-500/30 hover:bg-orange-500/30">
                        {item.badge}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-400">
                      {item.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                  {/* Timeline dot */}
                  <div className="absolute -left-7 top-6 w-4 h-4 bg-orange-500 rounded-full border-4 border-black glow-orange"></div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default ExperienceSection;
