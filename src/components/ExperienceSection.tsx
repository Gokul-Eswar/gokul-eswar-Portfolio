
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-portfolio-navy mb-2 text-center">
          Experience & Education
        </h2>
        <div className="w-20 h-1 bg-portfolio-lightBlue mx-auto mb-10"></div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Experience Column */}
          <div>
            <h3 className="text-xl font-semibold text-portfolio-navy mb-6 flex items-center">
              <span className="w-8 h-8 bg-portfolio-blue text-white rounded-full flex items-center justify-center mr-2">
                <span className="font-bold">E</span>
              </span>
              Experience
            </h3>
            
            <div className="space-y-6 relative before:absolute before:top-0 before:left-4 before:h-full before:w-0.5 before:bg-portfolio-blue/20">
              <Card className="border-portfolio-blue/20 hover:border-portfolio-blue hover:shadow-md transition-all ml-8">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg text-portfolio-navy">Prime Solutions</CardTitle>
                    <Badge className="bg-portfolio-blue/10 text-portfolio-blue hover:bg-portfolio-blue/20">
                      Internship
                    </Badge>
                  </div>
                  <CardDescription className="text-portfolio-darkGray/70">
                    Embedded System | Offline | Jul 2024
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-sm text-portfolio-darkGray/80">
                    During my internship I have gained knowledge on designing and simulation of electronic 
                    circuits and also learned about automating simple solution with microcontrollers with proteus 
                    software, also learned about interfacing various libraries with it.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-portfolio-blue/20 hover:border-portfolio-blue hover:shadow-md transition-all ml-8">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg text-portfolio-navy">Traffic Control System</CardTitle>
                    <Badge className="bg-portfolio-blue/10 text-portfolio-blue hover:bg-portfolio-blue/20">
                      Project
                    </Badge>
                  </div>
                  <CardDescription className="text-portfolio-darkGray/70">
                    Arduino | 2023
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-sm text-portfolio-darkGray/80">
                    Created a smart traffic control system by interfacing IoT sensors to smartly adapt 
                    to oncoming traffic flow and switch the signals accordingly. It also provides special 
                    signal adjustment for emergency vehicles like ambulance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Education Column */}
          <div>
            <h3 className="text-xl font-semibold text-portfolio-navy mb-6 flex items-center">
              <span className="w-8 h-8 bg-portfolio-blue text-white rounded-full flex items-center justify-center mr-2">
                <span className="font-bold">E</span>
              </span>
              Education
            </h3>
            
            <div className="space-y-6 relative before:absolute before:top-0 before:left-4 before:h-full before:w-0.5 before:bg-portfolio-blue/20">
              <Card className="border-portfolio-blue/20 hover:border-portfolio-blue hover:shadow-md transition-all ml-8">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg text-portfolio-navy">SNS College of Engineering</CardTitle>
                    <Badge className="bg-portfolio-blue/10 text-portfolio-blue hover:bg-portfolio-blue/20">
                      B.E (ECE)
                    </Badge>
                  </div>
                  <CardDescription className="text-portfolio-darkGray/70">
                    Coimbatore | 2022-2026
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-sm text-portfolio-darkGray/80">
                    Currently pursuing Bachelor of Engineering in Electronics and Communication Engineering
                    with a CGPA of 8.93.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-portfolio-blue/20 hover:border-portfolio-blue hover:shadow-md transition-all ml-8">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg text-portfolio-navy">P.R.Sidha Naidu Higher Secondary School</CardTitle>
                    <Badge className="bg-portfolio-blue/10 text-portfolio-blue hover:bg-portfolio-blue/20">
                      Higher Secondary
                    </Badge>
                  </div>
                  <CardDescription className="text-portfolio-darkGray/70">
                    Coimbatore | 2022
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-sm text-portfolio-darkGray/80">
                    Completed Higher Secondary education with 75.8%.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-portfolio-blue/20 hover:border-portfolio-blue hover:shadow-md transition-all ml-8">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg text-portfolio-navy">P.R.Sidha Naidu Higher Secondary School</CardTitle>
                    <Badge className="bg-portfolio-blue/10 text-portfolio-blue hover:bg-portfolio-blue/20">
                      Secondary
                    </Badge>
                  </div>
                  <CardDescription className="text-portfolio-darkGray/70">
                    Coimbatore | 2020
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-sm text-portfolio-darkGray/80">
                    Completed Secondary education with 74.0%.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
