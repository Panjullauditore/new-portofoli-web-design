import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import heroImage from '@/assets/hero-planet.jpg';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Panjullauditore", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ahmadfahrezi7/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/rezzinhere7/", label: "Instagram" },
    { icon: Mail, href: "mailto:ahmadfahrezir@gmail.com", label: "Email" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-in">
          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <Button
                key={social.label}
                variant="ghost"
                size="icon"
                asChild
                className="text-foreground/60 hover:text-foreground transition-all duration-300 hover:scale-110"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </a>
              </Button>
            ))}
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
              Hi, I'm Rezi.
            </h1>
            
            <p className="text-xl lg:text-2xl text-foreground/80 font-medium">
              Full-Stack Developer | Informatics Students @ Diponegoro University
            </p>
            
            <p className="text-lg text-foreground/60 leading-relaxed max-w-md">
              I build modern web applications, love creating beautiful user experiences, 
              and enjoy exploring new technologies and music.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8 py-6 rounded-full shadow-glow transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border/50 text-foreground hover:bg-muted/50 px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="flex justify-center lg:justify-end animate-scale-in">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-glow animate-float">
              <img 
                src={heroImage} 
                alt="Cosmic Planet" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-3xl animate-glow-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;