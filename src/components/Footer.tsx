
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-portfolio-navy min-h-screen h-screen flex items-center justify-center text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8 text-center">
            <h3 className="text-3xl font-bold mb-2">Gokul Eswar</h3>
            <p className="text-white/70 text-lg">Software Developer & Electronics Engineer</p>
          </div>
          
          <div className="flex space-x-6 mb-8">
            <a
              href="https://github.com/Gokul-Eswar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/gokul-eswar-sns-institutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:gokuleswar177@gmail.com"
              className="text-white/70 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10"
            >
              <Mail size={24} />
            </a>
            <a
              href="tel:+919025699713"
              className="text-white/70 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10"
            >
              <Phone size={24} />
            </a>
          </div>
          
          <div className="border-t border-white/10 pt-8 w-full max-w-lg text-center">
            <p className="text-white/70 text-sm">
              © {new Date().getFullYear()} Gokul Eswar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
