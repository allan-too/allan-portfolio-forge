
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Server, Smartphone, Wrench } from "lucide-react";

const AboutSection = () => {
  const skills = {
    "Frontend": {
      icon: Globe,
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular"]
    },
    "Backend": {
      icon: Server,
      technologies: ["Node.js", "Python", "Express", "FastAPI", "Django", "PHP"]
    },
    "Database": {
      icon: Database,
      technologies: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"]
    },
    "Mobile": {
      icon: Smartphone,
      technologies: ["React Native", "Flutter", "Expo", "Ionic"]
    },
    "DevOps": {
      icon: Wrench,
      technologies: ["Docker", "AWS", "CI/CD", "Kubernetes", "Vercel"]
    },
    "Languages": {
      icon: Code,
      technologies: ["JavaScript", "TypeScript", "Python", "Java", "PHP", "Dart"]
    }
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate full-stack developer with expertise in modern web technologies. 
            I love creating efficient, scalable solutions that make a real impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Bio Section */}
          <div className="space-y-6">
            <Card className="p-8 bg-card/50 border-border backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  With several years of experience in software development, I specialize in building 
                  end-to-end web applications that solve real-world problems. My passion lies in 
                  creating clean, maintainable code and delivering exceptional user experiences.
                </p>
                <p>
                  I have a strong background in both frontend and backend development, with expertise 
                  in modern frameworks and cloud technologies. I'm always eager to learn new technologies 
                  and best practices to stay at the forefront of web development.
                </p>
                <p>
                  When I'm not coding, I enjoy contributing to open-source projects, writing technical 
                  articles, and mentoring aspiring developers in the community.
                </p>
              </div>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center bg-card/50 border-border backdrop-blur-sm">
                <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </Card>
              <Card className="p-6 text-center bg-card/50 border-border backdrop-blur-sm">
                <div className="text-3xl font-bold gradient-text mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </Card>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            <div className="grid gap-6">
              {Object.entries(skills).map(([category, { icon: Icon, technologies }]) => (
                <Card key={category} className="p-6 bg-card/50 border-border backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 mr-3">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold">{category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="tech-badge"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
