
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-portfolio-navy mb-2 text-center">
          Contact Me
        </h2>
        <div className="w-20 h-1 bg-portfolio-lightBlue mx-auto mb-10"></div>
        
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-xl font-medium text-portfolio-navy mb-4">
              Let's Connect
            </h3>
            <p className="text-portfolio-darkGray/80 mb-8">
              Feel free to reach out for collaborations, job opportunities, or just to say hi! 
              I'm always open to discussing new projects and ideas.
            </p>
            
            <div className="space-y-4">
              <Card className="border-portfolio-blue/20 hover:border-portfolio-blue hover:shadow-md transition-all">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="bg-portfolio-blue/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-portfolio-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-portfolio-navy">Email</h4>
                    <a
                      href="mailto:gokuleswar177@gmail.com"
                      className="text-portfolio-darkGray/70 hover:text-portfolio-blue transition-colors"
                    >
                      gokuleswar177@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-portfolio-blue/20 hover:border-portfolio-blue hover:shadow-md transition-all">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="bg-portfolio-blue/10 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-portfolio-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-portfolio-navy">Phone</h4>
                    <a
                      href="tel:+919025699713"
                      className="text-portfolio-darkGray/70 hover:text-portfolio-blue transition-colors"
                    >
                      +91 90256 99713
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-portfolio-blue/20 hover:border-portfolio-blue hover:shadow-md transition-all">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="bg-portfolio-blue/10 p-3 rounded-full">
                    <Github className="h-5 w-5 text-portfolio-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-portfolio-navy">GitHub</h4>
                    <a
                      href="https://github.com/Gokul-Eswar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-portfolio-darkGray/70 hover:text-portfolio-blue transition-colors"
                    >
                      github.com/Gokul-Eswar
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-portfolio-blue/20 hover:border-portfolio-blue hover:shadow-md transition-all">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="bg-portfolio-blue/10 p-3 rounded-full">
                    <Linkedin className="h-5 w-5 text-portfolio-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-portfolio-navy">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/gokul-eswar-sns-institutions/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-portfolio-darkGray/70 hover:text-portfolio-blue transition-colors"
                    >
                      Gokul Eswar
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <Card className="border-portfolio-blue/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-portfolio-navy mb-4">
                  Send Me a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-portfolio-darkGray block mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Your name"
                      className="border-portfolio-blue/20 focus-visible:ring-portfolio-blue"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-portfolio-darkGray block mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Your email address"
                      className="border-portfolio-blue/20 focus-visible:ring-portfolio-blue"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-portfolio-darkGray block mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      placeholder="Your message"
                      className="border-portfolio-blue/20 focus-visible:ring-portfolio-blue min-h-[120px]"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-portfolio-blue hover:bg-portfolio-navy text-white"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
