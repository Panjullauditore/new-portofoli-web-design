import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Star } from 'lucide-react';
import Footer from '@/components/Footer';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A modern e-commerce platform built with React and Node.js, featuring real-time inventory management, payment processing, and advanced analytics.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "TailwindCSS"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true
    },
    {
      id: 2,
      title: "Recipe Sharing Platform",
      description: "A social platform where users can share recipes, create meal plans, and connect with fellow food enthusiasts. Features include recipe search, rating system, and meal planning tools.",
      image: "/placeholder.svg",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Cloudinary"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team workspaces, and project tracking capabilities.",
      image: "/placeholder.svg",
      technologies: ["React", "Firebase", "Material-UI", "TypeScript"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "An interactive weather dashboard providing detailed forecasts, weather maps, and climate data visualization.",
      image: "/placeholder.svg",
      technologies: ["Vue.js", "D3.js", "OpenWeather API", "Chart.js"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    },
    {
      id: 5,
      title: "Personal Blog Platform",
      description: "A minimalist blog platform with markdown support, SEO optimization, and social media integration.",
      image: "/placeholder.svg",
      technologies: ["Gatsby", "GraphQL", "Netlify CMS", "Styled Components"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    },
    {
      id: 6,
      title: "Music Player App",
      description: "A sleek music player application with playlist management, audio visualization, and social sharing features.",
      image: "/placeholder.svg",
      technologies: ["React Native", "Expo", "Redux", "Web Audio API"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                My Projects
              </h1>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                A collection of projects that showcase my skills in web development and design
              </p>
            </div>

            {/* Featured Projects */}
            <div className="mb-20">
              <h2 className="text-2xl font-bold mb-8 text-foreground">Featured Projects</h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {featuredProjects.map((project, index) => (
                  <Card 
                    key={project.id} 
                    className="group bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 animate-scale-in overflow-hidden"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary/90 text-primary-foreground">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex gap-2">
                          <Button
                            variant="secondary"
                            size="sm"
                            asChild
                            className="bg-white/90 text-black hover:bg-white"
                          >
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-foreground/60">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Other Projects */}
            <div>
              <h2 className="text-2xl font-bold mb-8 text-foreground">Other Projects</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project, index) => (
                  <Card 
                    key={project.id} 
                    className="group bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted/20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            asChild
                            className="bg-white/80 text-black hover:bg-white h-7 px-2"
                          >
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            asChild
                            className="bg-white/80 text-black hover:bg-white h-7 px-2"
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-3 w-3" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-foreground/60 line-clamp-3">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs px-2 py-1">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="text-xs px-2 py-1">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default Projects;
