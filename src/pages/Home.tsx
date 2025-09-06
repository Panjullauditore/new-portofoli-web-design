import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Planet3D from '@/components/Planet3D';
import TypingAnimation from '@/components/TypingAnimation';

const Home = () => {
  return (
    <div className="h-screen bg-background text-foreground overflow-hidden">
      <main className="h-full">
        {/* Hero Section */}
        <section className="h-full flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-primary/5" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Left Content */}
              <div className="text-left animate-fade-in">
                <div className="flex items-center gap-4 mb-6">
                  <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/10">
                    <a href="https://github.com/Panjullauditore" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/10">
                    <a href="https://www.linkedin.com/in/ahmadfahrezi7/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/10">
                    <a href="mailto:ahmadfahrezir@gmail.com">
                      <Mail className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Hi, I'm Ahmad Fahrezi.
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-foreground/70 mb-2">
                  Informatics Student | FullStack Developer
                </p>
                
                <div className="text-lg md:text-xl text-foreground/70 mb-8">
                  <TypingAnimation 
                    texts={[
                      "I love coding, music, and exploring new technologies.",
                      "I build web applications with modern frameworks.",
                      "I'm passionate about creating innovative solutions.",
                      "I enjoy learning new programming languages.",
                      "I create responsive and user-friendly interfaces."
                    ]}
                    speed={80}
                    deleteSpeed={40}
                    pauseDuration={1500}
                    delay={500}
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-scale-in">
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
              </div>

              {/* Right Content - 3D Planet */}
              <div className="lg:order-2 h-96 lg:h-[500px] animate-scale-in">
                <Planet3D />
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-pulse delay-500" />
        </section>
      </main>
    </div>
  );
};

export default Home;