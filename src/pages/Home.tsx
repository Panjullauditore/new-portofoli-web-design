import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import heroImage from '@/assets/hero-planet.jpg';

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-primary/5" />
          
          {/* Background Image */}
          <div className="absolute inset-0 opacity-20">
            <img 
              src={heroImage} 
              alt="Space background" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="animate-fade-in">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
                  Alex Portfolio
                </h1>
                <p className="text-xl md:text-2xl text-foreground/70 mb-8 leading-relaxed max-w-3xl mx-auto">
                  Computer Science Student passionate about creating beautiful web applications 
                  and exploring the latest technologies
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-scale-in">
                <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground rounded-full px-8">
                  <Link to="/projects">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-primary/30 hover:bg-primary/10">
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4 animate-fade-in">
                <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/10 hover:scale-110 transition-all duration-300">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/10 hover:scale-110 transition-all duration-300">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/10 hover:scale-110 transition-all duration-300">
                  <a href="mailto:alex@example.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-pulse delay-500" />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;