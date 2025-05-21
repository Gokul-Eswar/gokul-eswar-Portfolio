
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();

  const getFooterClasses = () => {
    if (theme === "light") {
      return "bg-portfolio-navy py-8 text-white";
    } else if (theme === "dark") {
      return "bg-gray-900 py-8 text-white";
    } else {
      return "bg-blue-900 py-8 text-white";
    }
  };

  return (
    <footer className={getFooterClasses()}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-1">Gokul Eswar</h3>
            <p className="text-white/70 text-sm">Software Developer & Electronics Engineer</p>
          </div>
          
          <div className="flex space-x-4">
            <a
              href="https://github.com/Gokul-Eswar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/gokul-eswar-sns-institutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:gokuleswar177@gmail.com"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
            <a
              href="tel:+919025699713"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-6 pt-6 text-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} Gokul Eswar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
