import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, order management, and admin dashboard.",
      image: "photo-1498050108023-c5249f4df085",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      github: "https://github.com/allan-too/ecommerce-platform",
      live: "https://ecommerce-demo.vercel.app",
      stars: 42,
      featured: true
    },
    {
      title: "Task Management App",
      description: "Modern task management application with real-time collaboration, drag-and-drop functionality, and team workspace features.",
      image: "photo-1486312338219-ce68d2c6f44d",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Socket.io"],
      github: "https://github.com/allan-too/task-manager",
      live: "https://taskmanager-pro.vercel.app",
      stars: 28,
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "Responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "photo-1488590528505-98d2b5aba04b",
      technologies: ["Vue.js", "Express.js", "Weather API", "Chart.js", "PWA"],
      github: "https://github.com/allan-too/weather-dashboard",
      live: "https://weather-dashboard-vue.netlify.app",
      stars: 15,
      featured: false
    },
    {
      title: "Social Media Analytics",
      description: "Comprehensive analytics platform for social media insights with real-time data visualization and reporting features.",
      image: "photo-1461749280684-dccba630e2f6",
      technologies: ["React", "Python", "Django", "D3.js", "Redis"],
      github: "https://github.com/allan-too/social-analytics",
      live: "",
      stars: 33,
      featured: true
    },
    {
      title: "Mobile Fitness Tracker",
      description: "Cross-platform mobile app for fitness tracking with workout plans, progress monitoring, and social features.",
      image: "photo-1581091226825-a6a2a5aee158",
      technologies: ["React Native", "Firebase", "Expo", "Redux", "Health APIs"],
      github: "https://github.com/allan-too/fitness-tracker",
      live: "",
      stars: 19,
      featured: false
    },
    {
      title: "Real-time Chat Platform",
      description: "Scalable chat application with real-time messaging, file sharing, video calls, and group management features.",
      image: "photo-1649972904349-6e44c42644a7",
      technologies: ["Socket.io", "Node.js", "React", "WebRTC", "AWS S3"],
      github: "https://github.com/allan-too/chat-platform",
      live: "https://realtime-chat-app.herokuapp.com",
      stars: 67,
      featured: true
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, featuring full-stack applications built with modern technologies
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={project.title} className="group overflow-hidden bg-card/50 border-border backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/${project.image}?w=600&h=300&fit=crop`}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute top-4 right-4 flex gap-2">
                  {project.live && (
                    <Button size="sm" variant="secondary" className="opacity-90 hover:opacity-100" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  <Button size="sm" variant="secondary" className="opacity-90 hover:opacity-100" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="h-4 w-4 mr-1" />
                    {project.stars}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="tech-badge text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold mb-4">Other Notable Projects</h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <Card key={project.title} className="group p-6 bg-card/50 border-border backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-semibold">{project.title}</h4>
                <div className="flex gap-2">
                  {project.live && (
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description.substring(0, 120)}...
              </p>
              
              <div className="flex flex-wrap gap-1 mb-3">
                {project.technologies.slice(0, 3).map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 3 && (
                  <Badge variant="secondary" className="text-xs">
                    +{project.technologies.length - 3}
                  </Badge>
                )}
              </div>
              
              <div className="flex items-center text-sm text-muted-foreground">
                <Star className="h-4 w-4 mr-1" />
                {project.stars}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-border hover:border-primary" asChild>
            <a href="https://github.com/allan-too" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
