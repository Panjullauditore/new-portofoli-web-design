import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Smartphone, Globe, Bot } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI Chat Assistant",
      description: "An intelligent chatbot powered by OpenAI GPT that provides contextual responses and learns from conversations.",
      image: "🤖",
      icon: Bot,
      technologies: ["React", "Node.js", "OpenAI API", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      id: 2,
      title: "Smart Expense Tracker",
      description: "A mobile-first web app that uses machine learning to categorize expenses and provide spending insights.",
      image: "💰",
      icon: Smartphone,
      technologies: ["React Native", "Python", "TensorFlow", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and featuring smooth animations and dark mode.",
      image: "🌐",
      icon: Globe,
      technologies: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false
    },
    {
      id: 4,
      title: "Task Management System",
      description: "A collaborative task management platform with real-time updates, team chat, and project analytics.",
      image: "📋",
      icon: Globe,
      technologies: ["Next.js", "Supabase", "TypeScript", "Prisma"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false
    },
    {
      id: 5,
      title: "Weather Analytics Dashboard",
      description: "A data visualization dashboard that analyzes weather patterns using historical data and ML predictions.",
      image: "🌤️",
      icon: Globe,
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false
    },
    {
      id: 6,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "🛒",
      icon: Globe,
      technologies: ["React", "Express.js", "Stripe", "Redis"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Here are some of my favorite projects that showcase my skills and passion for development.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-500 hover:scale-105 overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{project.image}</div>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="text-foreground/60 hover:text-foreground transition-all duration-300 hover:scale-110"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="text-foreground/60 hover:text-foreground transition-all duration-300 hover:scale-110"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/70 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="text-xs bg-muted/50 hover:bg-primary/20 hover:text-primary transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
            More Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">{project.image}</div>
                    <div className="flex space-x-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="h-8 w-8 p-0 text-foreground/60 hover:text-foreground"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="h-8 w-8 p-0 text-foreground/60 hover:text-foreground"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="text-xs bg-muted/50 hover:bg-primary/20 hover:text-primary transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-muted/30">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* View More */}
        <div className="text-center mt-12 animate-fade-in">
          <Button 
            variant="outline" 
            size="lg"
            asChild
            className="border-border/50 text-foreground hover:bg-muted/50 px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
