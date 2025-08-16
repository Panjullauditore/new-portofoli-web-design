import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Smartphone, Globe, Bot } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio",
      description: "A modern portfolio website built with React and Tailwind CSS with responsive design and smooth animations.",
      image: "🌐", // Emoji sebagai fallback
      imageUrl: "/images/github-readme.jpg", // Opsi gambar (opsional)
      useImage: true, // Set true untuk menggunakan gambar, false untuk emoji
      icon: Globe,
      technologies: ["TypeScript,React", "Tailwind", "Portfolio"],
      liveUrl: "https://www.portofolio.fun/",
      githubUrl: "https://github.com/Panjullauditore/new-portofoli-web-design",
      featured: true
    },
    {
      id: 2,
      title: "GitHub README Generator",
      description: "Beautiful and interactive GitHub profile README generator with modern design and glow-up effects.",
      image: "📝",
      imageUrl: "/images/github-readme-generator.jpg",
      useImage: true, // Akan menggunakan gambar jika tersedia
      icon: Globe,
      technologies: ["React", "TypeScript", "GitHub", "Markdown"],
      liveUrl: "https://my-github-glow-up.vercel.app/",
      githubUrl: "https://github.com/Panjullauditore/my-github-glow-up",
      featured: true
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team features.",
      image: "📋",
      imageUrl: "/images/task-management-app.jpg",
      useImage: true,
      icon: Globe,
      technologies: ["TypeScript", "React", "Tailwind CSS"],
      liveUrl: "https://collabo-task-flow.vercel.app/",
      githubUrl: "https://github.com/Panjullauditore/collabo-task-flow",
      featured: false
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "An interactive weather dashboard providing detailed forecasts, weather maps, and climate data visualization.",
      image: "🌤️",
      imageUrl: "/images/weather-dashboard.jpg",
      useImage: true,
      icon: Globe,
      technologies: ["Vue.js", "D3.js", "OpenWeather API", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false
    },
    {
      id: 5,
      title: "Personal Blog Platform",
      description: "A minimalist blog platform with markdown support, SEO optimization, and social media integration.",
      image: "📝",
      imageUrl: "/images/blog-platform.jpg",
      useImage: true,
      icon: Globe,
      technologies: ["Gatsby", "GraphQL", "Netlify CMS", "Styled Components"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false
    },
    {
      id: 6,
      title: "Music Player App",
      description: "A sleek music player application with playlist management, audio visualization, and social sharing features.",
      image: "🎵",
      imageUrl: "/images/music-player.jpg",
      useImage: true,
      icon: Globe,
      technologies: ["React Native", "Expo", "Redux", "Web Audio API"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  // Component untuk menampilkan gambar atau emoji
  const ProjectVisual = ({ project, size = "large" }) => {
    const containerClass = size === "large" 
      ? "w-16 h-16 rounded-lg bg-muted/30 flex items-center justify-center overflow-hidden" 
      : "w-12 h-12 rounded-lg bg-muted/30 flex items-center justify-center overflow-hidden";
    
    const emojiSize = size === "large" ? "text-4xl" : "text-2xl";

    if (project.useImage && project.imageUrl) {
      return (
        <div className={containerClass}>
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            onError={(e) => {
              // Fallback ke emoji jika gambar gagal load
              const container = (e.target as HTMLImageElement).parentElement;
              if (container) {
                container.innerHTML = `<span class="${emojiSize}">${project.image}</span>`;
              }
            }}
          />
        </div>
      );
    }

    // Fallback ke emoji
    return (
      <div className={containerClass}>
        <span className={emojiSize}>{project.image}</span>
      </div>
    );
  };

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
                  <ProjectVisual project={project} size="large" />
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
                    <ProjectVisual project={project} size="small" />
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