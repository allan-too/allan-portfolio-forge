
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you and explore how we can collaborate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8 bg-card/50 border-border backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-primary/10 mr-4">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a 
                      href="mailto:allan.too.dev@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      allan.too.dev@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-primary/10 mr-4">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a 
                      href="tel:+254700000000" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +254 700 000 000
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-primary/10 mr-4">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-8 bg-card/50 border-border backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-6">Connect with Me</h3>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/allan-too" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary hover:bg-primary transition-colors group"
                >
                  <Github className="h-5 w-5 group-hover:text-primary-foreground" />
                </a>
                <a 
                  href="https://linkedin.com/in/allan-too" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary hover:bg-primary transition-colors group"
                >
                  <Linkedin className="h-5 w-5 group-hover:text-primary-foreground" />
                </a>
                <a 
                  href="mailto:allan.too.dev@gmail.com"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary hover:bg-primary transition-colors group"
                >
                  <Mail className="h-5 w-5 group-hover:text-primary-foreground" />
                </a>
              </div>
            </Card>

            {/* Quick Response Time */}
            <Card className="p-6 bg-card/50 border-border backdrop-blur-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <div>
                  <p className="font-medium text-sm">Usually responds within 24 hours</p>
                  <p className="text-xs text-muted-foreground">Available for new projects</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-card/50 border-border backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name"
                  name="name"
                  type="text" 
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email"
                  name="email"
                  type="email" 
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or how I can help..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="mt-2"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
