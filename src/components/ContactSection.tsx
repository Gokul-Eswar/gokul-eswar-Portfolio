
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
    <section id="contact" className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          <span className="gradient-text">Contact Me</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-16"></div>
        
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="text-2xl font-medium text-orange-500 mb-6 text-glow">
              Let's Connect
            </h3>
            <p className="text-gray-300 mb-12 text-lg leading-relaxed">
              Feel free to reach out for collaborations, job opportunities, or just to say hi! 
              I'm always open to discussing new projects and ideas.
            </p>
            
            <div className="space-y-6">
              <Card className="glass-card border-gray-800 hover:border-orange-500/50 cursor-hover group">
                <CardContent className="flex items-center gap-6 p-6">
                  <div className="bg-orange-500/20 p-4 rounded-full border border-orange-500/30">
                    <Mail className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white text-lg mb-1">Email</h4>
                    <a
                      href="mailto:gokuleswar177@gmail.com"
                      className="text-gray-400 hover:text-orange-500 transition-colors text-lg cursor-hover"
                    >
                      gokuleswar177@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-gray-800 hover:border-orange-500/50 cursor-hover group">
                <CardContent className="flex items-center gap-6 p-6">
                  <div className="bg-orange-500/20 p-4 rounded-full border border-orange-500/30">
                    <Phone className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white text-lg mb-1">Phone</h4>
                    <a
                      href="tel:+919025699713"
                      className="text-gray-400 hover:text-orange-500 transition-colors text-lg cursor-hover"
                    >
                      +91 90256 99713
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-gray-800 hover:border-orange-500/50 cursor-hover group">
                <CardContent className="flex items-center gap-6 p-6">
                  <div className="bg-orange-500/20 p-4 rounded-full border border-orange-500/30">
                    <Github className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white text-lg mb-1">GitHub</h4>
                    <a
                      href="https://github.com/Gokul-Eswar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-orange-500 transition-colors text-lg cursor-hover"
                    >
                      github.com/Gokul-Eswar
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-gray-800 hover:border-orange-500/50 cursor-hover group">
                <CardContent className="flex items-center gap-6 p-6">
                  <div className="bg-orange-500/20 p-4 rounded-full border border-orange-500/30">
                    <Linkedin className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white text-lg mb-1">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/gokul-eswar-sns-institutions/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-orange-500 transition-colors text-lg cursor-hover"
                    >
                      Gokul Eswar
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <Card className="glass-card border-gray-800 hover:border-orange-500/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-medium text-orange-500 mb-6 text-glow">
                  Send Me a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-gray-300 block mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Your name"
                      className="bg-gray-900/50 border-gray-700 focus:border-orange-500 text-white placeholder-gray-500 cursor-hover"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-gray-300 block mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Your email address"
                      className="bg-gray-900/50 border-gray-700 focus:border-orange-500 text-white placeholder-gray-500 cursor-hover"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-gray-300 block mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      placeholder="Your message"
                      className="bg-gray-900/50 border-gray-700 focus:border-orange-500 text-white placeholder-gray-500 min-h-[120px] cursor-hover"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full btn-primary text-lg py-3 cursor-hover"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default ContactSection;
