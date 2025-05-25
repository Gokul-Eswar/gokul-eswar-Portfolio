
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const ExperienceSection = () => {
  const { ref: titleRef, isIntersecting: titleVisible } = useIntersectionObserver();
  const { ref: experienceRef, isIntersecting: experienceVisible } = useIntersectionObserver();
  const { ref: educationRef, isIntersecting: educationVisible } = useIntersectionObserver();

  return (
    <section id="experience" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={titleRef}>
          <h2 className={`text-3xl md:text-4xl font-bold text-portfolio-navy mb-2 text-center transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Experience & Education
          </h2>
          <div className={`w-20 h-1 bg-portfolio-lightBlue mx-auto mb-10 transition-all duration-1000 delay-200 ${
            titleVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Experience Column */}
          <div ref={experienceRef}>
            <h3 className={`text-xl font-semibold text-portfolio-navy mb-6 flex items-center transition-all duration-1000 delay-300 ${
              experienceVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <span className="w-8 h-8 bg-portfolio-blue text-white rounded-full flex items-center justify-center mr-2">
                <span className="font-bold">E</span>
              </span>
              Experience
            </h3>
            
            <div className="space-y-6 relative before:absolute before:top-0 before:left-4 before:h-full before:w-0.5 before:bg-portfolio-blue/20">
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
                <Card key={index} className={`border-portfolio-blue/20 hover:border-portfolio-blue hover:shadow-md transition-all duration-1000 ml-8 ${item.delay} ${
                  experienceVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg text-portfolio-navy">{item.title}</CardTitle>
                      <Badge className="bg-portfolio-blue/10 text-portfolio-blue hover:bg-portfolio-blue/20">
                        {item.badge}
                      </Badge>
                    </div>
                    <CardDescription className="text-portfolio-darkGray/70">
                      {item.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <p className="text-sm text-portfolio-darkGray/80">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Education Column */}
          <div ref={educationRef}>
            <h3 className={`text-xl font-semibold text-portfolio-navy mb-6 flex items-center transition-all duration-1000 delay-300 ${
              educationVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <span className="w-8 h-8 bg-portfolio-blue text-white rounded-full flex items-center justify-center mr-2">
                <span className="font-bold">E</span>
              </span>
              Education
            </h3>
            
            <div className="space-y-6 relative before:absolute before:top-0 before:left-4 before:h-full before:w-0.5 before:bg-portfolio-blue/20">
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
                <Card key={index} className={`border-portfolio-blue/20 hover:border-portfolio-blue hover:shadow-md transition-all duration-1000 ml-8 ${item.delay} ${
                  educationVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg text-portfolio-navy">{item.title}</CardTitle>
                      <Badge className="bg-portfolio-blue/10 text-portfolio-blue hover:bg-portfolio-blue/20">
                        {item.badge}
                      </Badge>
                    </div>
                    <CardDescription className="text-portfolio-darkGray/70">
                      {item.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <p className="text-sm text-portfolio-darkGray/80">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
