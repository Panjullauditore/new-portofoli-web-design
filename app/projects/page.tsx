"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { CharReveal } from '@/components/animations/TextReveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggeredCards';
import { MagneticButton } from '@/components/animations/MagneticButton';

export default function ProjectsPage() {
    const isBlurred = true; // Toggle blur - set ke false untuk menghilangkan blur

    const projects = [
        {
            id: 1,
            title: "Personal Portfolio",
            description: "A modern portfolio website built with React and Tailwind CSS with responsive design and smooth animations.",
            image: "/images/personal-web.jpg",
            technologies: ["TypeScript", "React", "Tailwind", "Portfolio"],
            github: "https://github.com/Panjullauditore/new-portofoli-web-design",
            live: "https://www.portofolio.fun/",
            featured: false
        },
        {
            id: 2,
            title: "GitHub README Generator",
            description: "Beautiful and interactive GitHub profile README generator with modern design and glow-up effects.",
            image: "/images/github-readme.jpg",
            technologies: ["React", "TypeScript", "GitHub", "Markdown"],
            github: "https://github.com/Panjullauditore/my-github-glow-up",
            live: "https://my-github-glow-up.vercel.app/",
            featured: true
        },
        {
            id: 3,
            title: "Task Management App",
            description: "Collaborative task management tool with real-time updates and team features.",
            image: "/images/task-management.jpg",
            technologies: ["TypeScript", "React", "Tailwind CSS"],
            github: "https://github.com/Panjullauditore/collabo-task-flow",
            live: "https://collabo-task-flow.vercel.app/",
            featured: true
        },
    ];

    const featuredProjects = projects.filter(project => project.featured);
    const otherProjects = projects.filter(project => !project.featured);

    return (
        <div className="min-h-screen bg-background text-foreground relative">
            <main className="py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        {/* Header */}
                        <ScrollReveal className={`text-center mb-16 ${isBlurred ? 'blur-sm' : ''}`}>
                            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                                <span className="bg-gradient-primary bg-clip-text text-transparent text-gradient-animate">
                                    <CharReveal text="My Projects" delay={0.2} />
                                </span>
                            </h1>
                            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                                A collection of projects that showcase my skills in web development and design
                            </p>
                        </ScrollReveal>

                        {/* Featured Projects */}
                        <div className={`mb-20 ${isBlurred ? 'blur-sm' : ''}`}>
                            <ScrollReveal>
                                <h2 className="text-2xl font-bold mb-8 text-foreground">Featured Projects</h2>
                            </ScrollReveal>
                            <StaggerContainer className="grid lg:grid-cols-2 gap-8" staggerDelay={0.15}>
                                {featuredProjects.map((project) => (
                                    <StaggerItem key={project.id}>
                                        <motion.div
                                            whileHover={{ scale: 1.02, y: -5 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <Card className="group bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden">
                                                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                                                    <Image
                                                        src={project.image}
                                                        alt={project.title}
                                                        fill
                                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                                    <div className="absolute top-4 right-4">
                                                        <Badge className="bg-primary/90 text-primary-foreground">
                                                            <Star className="w-3 h-3 mr-1" />
                                                            Featured
                                                        </Badge>
                                                    </div>
                                                    <div className="absolute bottom-4 left-4 right-4">
                                                        <div className="flex gap-2">
                                                            <MagneticButton>
                                                                <Button variant="secondary" size="sm" asChild className="bg-white/90 text-black hover:bg-white">
                                                                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                                                                        <ExternalLink className="h-4 w-4 mr-2" />
                                                                        Live Demo
                                                                    </a>
                                                                </Button>
                                                            </MagneticButton>
                                                            <MagneticButton>
                                                                <Button variant="outline" size="sm" asChild className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                                                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                                        <Github className="h-4 w-4 mr-2" />
                                                                        Code
                                                                    </a>
                                                                </Button>
                                                            </MagneticButton>
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
                                                            <Badge key={tech} variant="secondary" className="text-xs hover:bg-primary/20 transition-colors">
                                                                {tech}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>

                        {/* Other Projects */}
                        <div className={`${isBlurred ? 'blur-sm' : ''}`}>
                            <ScrollReveal>
                                <h2 className="text-2xl font-bold mb-8 text-foreground">Other Projects</h2>
                            </ScrollReveal>
                            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
                                {otherProjects.map((project) => (
                                    <StaggerItem key={project.id}>
                                        <motion.div
                                            whileHover={{ scale: 1.03, y: -5 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <Card className="group bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300">
                                                <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted/20 relative overflow-hidden">
                                                    <Image
                                                        src={project.image}
                                                        alt={project.title}
                                                        fill
                                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                                    <div className="absolute bottom-3 left-3 right-3">
                                                        <div className="flex gap-2">
                                                            <Button variant="ghost" size="sm" asChild className="bg-white/80 text-black hover:bg-white h-7 px-2">
                                                                <a href={project.live} target="_blank" rel="noopener noreferrer">
                                                                    <ExternalLink className="h-3 w-3" />
                                                                </a>
                                                            </Button>
                                                            <Button variant="ghost" size="sm" asChild className="bg-white/80 text-black hover:bg-white h-7 px-2">
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
                                        </motion.div>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>
                    </div>
                </div>
            </main>

            {/* Coming Soon Overlay */}
            {isBlurred && (
                <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-background/20 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <motion.div
                        className="text-center p-8 bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl shadow-card max-w-md mx-auto"
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        transition={{ delay: 0.4, type: "spring" }}
                    >
                        <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                            Coming Soon!
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            The projects page is currently under development.
                            It will soon be filled with new projects and a complete portfolio.
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}
