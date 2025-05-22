
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "@/contexts/ThemeContext";

const ExperienceSection = () => {
  const { theme } = useTheme();
  
  const getSectionBgClass = () => {
    if (theme === "light") {
      return "bg-white";
    } else if (theme === "dark") {
      return "bg-portfolio-dark";
    } else {
      return "bg-portfolio-oceanDark";
    }
  };
  
  const getTextClass = () => {
    return "text-black";
  };
  
  const getCardBorderClass = () => {
    if (theme === "light") {
      return "border-portfolio-blue/20 hover:border-portfolio-blue";
    } else if (theme === "dark") {
      return "border-portfolio-lightBlue/20 hover:border-portfolio-lightBlue";
    } else {
      return "border-cyan-500/20 hover:border-cyan-500";
    }
  };
  
  const getBadgeClass = () => {
    if (theme === "light") {
      return "bg-portfolio-blue/10 text-portfolio-blue hover:bg-portfolio-blue/20";
    } else if (theme === "dark") {
      return "bg-portfolio-lightBlue/10 text-portfolio-lightBlue hover:bg-portfolio-lightBlue/20";
    } else {
      return "bg-cyan-500/10 text-cyan-500 hover:bg-cyan-500/20";
    }
  };
  
  const getSubTextClass = () => {
    return "text-black";
  };
  
  const getContentTextClass = () => {
    return "text-black";
  };
  
  const getAccentBgClass = () => {
    if (theme === "light") {
      return "bg-portfolio-blue";
    } else if (theme === "dark") {
      return "bg-portfolio-lightBlue";
    } else {
      return "bg-cyan-500";
    }
  };
  
  const getLineClass = () => {
    if (theme === "light") {
      return "before:bg-portfolio-blue/20";
    } else if (theme === "dark") {
      return "before:bg-portfolio-lightBlue/20";
    } else {
      return "before:bg-cyan-500/20";
    }
  };

  return (
    <section id="experience" className={`py-20 ${getSectionBgClass()}`}>
      <div className="container mx-auto px-4 md:px-6">
        <h2 className={`text-3xl md:text-4xl font-bold mb-2 text-center ${getTextClass()}`}>
          Experience & Education
        </h2>
        <div className={`w-20 h-1 ${theme === "light" ? "bg-portfolio-lightBlue" : theme === "dark" ? "bg-portfolio-lightBlue" : "bg-cyan-500"} mx-auto mb-10`}></div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Experience Column */}
          <div>
            <h3 className={`text-xl font-semibold mb-6 flex items-center ${getTextClass()}`}>
              <span className={`w-8 h-8 ${getAccentBgClass()} text-white rounded-full flex items-center justify-center mr-2`}>
                <span className="font-bold">E</span>
              </span>
              Experience
            </h3>
            
            <div className={`space-y-6 relative before:absolute before:top-0 before:left-4 before:h-full before:w-0.5 ${getLineClass()}`}>
              <Card className={`${getCardBorderClass()} hover:shadow-md transition-all ml-8`}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className={`text-lg ${getTextClass()}`}>Prime Solutions</CardTitle>
                    <Badge className={getBadgeClass()}>
                      Internship
                    </Badge>
                  </div>
                  <CardDescription className={getSubTextClass()}>
                    Embedded System | Offline | Jul 2024
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className={`text-sm ${getContentTextClass()}`}>
                    During my internship I have gained knowledge on designing and simulation of electronic 
                    circuits and also learned about automating simple solution with microcontrollers with proteus 
                    software, also learned about interfacing various libraries with it.
                  </p>
                </CardContent>
              </Card>
              
              <Card className={`${getCardBorderClass()} hover:shadow-md transition-all ml-8`}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className={`text-lg ${getTextClass()}`}>Traffic Control System</CardTitle>
                    <Badge className={getBadgeClass()}>
                      Project
                    </Badge>
                  </div>
                  <CardDescription className={getSubTextClass()}>
                    Arduino | 2023
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className={`text-sm ${getContentTextClass()}`}>
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
            <h3 className={`text-xl font-semibold mb-6 flex items-center ${getTextClass()}`}>
              <span className={`w-8 h-8 ${getAccentBgClass()} text-white rounded-full flex items-center justify-center mr-2`}>
                <span className="font-bold">E</span>
              </span>
              Education
            </h3>
            
            <div className={`space-y-6 relative before:absolute before:top-0 before:left-4 before:h-full before:w-0.5 ${getLineClass()}`}>
              <Card className={`${getCardBorderClass()} hover:shadow-md transition-all ml-8`}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className={`text-lg ${getTextClass()}`}>SNS College of Engineering</CardTitle>
                    <Badge className={getBadgeClass()}>
                      B.E (ECE)
                    </Badge>
                  </div>
                  <CardDescription className={getSubTextClass()}>
                    Coimbatore | 2022-2026
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className={`text-sm ${getContentTextClass()}`}>
                    Currently pursuing Bachelor of Engineering in Electronics and Communication Engineering
                    with a CGPA of 8.93.
                  </p>
                </CardContent>
              </Card>
              
              <Card className={`${getCardBorderClass()} hover:shadow-md transition-all ml-8`}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className={`text-lg ${getTextClass()}`}>P.R.Sidha Naidu Higher Secondary School</CardTitle>
                    <Badge className={getBadgeClass()}>
                      Higher Secondary
                    </Badge>
                  </div>
                  <CardDescription className={getSubTextClass()}>
                    Coimbatore | 2022
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className={`text-sm ${getContentTextClass()}`}>
                    Completed Higher Secondary education with 75.8%.
                  </p>
                </CardContent>
              </Card>
              
              <Card className={`${getCardBorderClass()} hover:shadow-md transition-all ml-8`}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className={`text-lg ${getTextClass()}`}>P.R.Sidha Naidu Higher Secondary School</CardTitle>
                    <Badge className={getBadgeClass()}>
                      Secondary
                    </Badge>
                  </div>
                  <CardDescription className={getSubTextClass()}>
                    Coimbatore | 2020
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className={`text-sm ${getContentTextClass()}`}>
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
