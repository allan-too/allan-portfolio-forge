
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl floating"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/10 blur-3xl floating" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Pre-title */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6 animate-fade-in-up">
            <span className="text-sm text-muted-foreground">Available for new opportunities</span>
            <div className="w-2 h-2 bg-green-500 rounded-full ml-2 animate-pulse"></div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up animate-delay-200">
            <span className="block">Allan Too</span>
            <span className="block gradient-text">Full-Stack Engineer</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-delay-400">
            Building scalable web applications with modern technologies. 
            Passionate about clean code, innovative solutions, and exceptional user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up animate-delay-600">
            <Button 
              onClick={scrollToProjects}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg group"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border hover:border-primary px-8 py-3 text-lg"
              asChild
            >
              <a href="https://github.com/allan-too" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub Profile
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 animate-fade-in-up animate-delay-600">
            <a 
              href="https://github.com/allan-too" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 border border-border hover:border-primary transition-all hover:scale-110"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/allan-too" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 border border-border hover:border-primary transition-all hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:allan.too.dev@gmail.com"
              className="p-3 rounded-full bg-secondary/50 border border-border hover:border-primary transition-all hover:scale-110"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
