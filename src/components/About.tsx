import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Palette, Rocket, Heart } from 'lucide-react';

const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "AI/ML", "PostgreSQL",
    "Next.js", "TailwindCSS", "Docker", "AWS", "GraphQL", "MongoDB"
  ];

  const interests = [
    { icon: Code, title: "Full-Stack Development", description: "Building scalable web applications with modern technologies" },
    { icon: Rocket, title: "AI & Machine Learning", description: "Exploring artificial intelligence and neural networks" },
    { icon: Palette, title: "UI/UX Design", description: "Creating beautiful and intuitive user experiences" },
    { icon: Heart, title: "Open Source", description: "Contributing to the developer community" }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              I'm a passionate developer who loves creating innovative solutions and learning new technologies. 
              When I'm not coding, you'll find me exploring the latest in AI or contributing to open source projects.
            </p>
          </div>

          {/* Interests Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {interests.map((interest, index) => (
              <Card 
                key={interest.title} 
                className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <interest.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                        {interest.title}
                      </h3>
                      <p className="text-foreground/60 text-sm leading-relaxed">
                        {interest.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills Section */}
          <Card className="bg-gradient-card border-border/50 animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {skills.map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm font-medium bg-muted/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-105 animate-scale-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Personal Touch */}
          <div className="text-center mt-16 animate-fade-in">
            <p className="text-lg text-foreground/60 italic">
              "Technology is not just about code – it's about creating meaningful experiences that improve people's lives."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;