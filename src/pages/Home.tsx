import AnimatedButton from '@/components/react-bits/AnimatedButton';
import SplitText from '@/components/react-bits/SplitText';
import GradientText from '@/components/react-bits/GradientText';
import ParticleBackground from '@/components/react-bits/ParticleBackground';
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
          <ParticleBackground count={80} />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-primary/5" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Left Content */}
              <div className="text-left animate-fade-in">
                <div className="flex items-center gap-4 mb-6">
                  <AnimatedButton variant="ghost" size="sm" asChild>
                    <a href="https://github.com/Panjullauditore" target="_blank" rel="noopener noreferrer" className="rounded-full hover:bg-primary/10">
                      <Github className="h-5 w-5" />
                    </a>
                  </AnimatedButton>
                  <AnimatedButton variant="ghost" size="sm" asChild>
                    <a href="https://www.linkedin.com/in/ahmadfahrezi7/" target="_blank" rel="noopener noreferrer" className="rounded-full hover:bg-primary/10">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </AnimatedButton>
                  <AnimatedButton variant="ghost" size="sm" asChild>
                    <a href="mailto:ahmadfahrezir@gmail.com" className="rounded-full hover:bg-primary/10">
                      <Mail className="h-5 w-5" />
                    </a>
                  </AnimatedButton>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  <GradientText tag="span" animate={true} gradient="from-primary via-primary-glow to-accent">
                    <SplitText text="Hi, I'm Ahmad Fahrezi." splitType="chars" delay={50} />
                  </GradientText>
                </h1>
                
                <SplitText 
                  text="Informatics Student | FullStack Developer"
                  tag="p"
                  className="text-lg md:text-xl text-foreground/70 mb-2"
                  splitType="words"
                  delay={100}
                  duration={0.8}
                />
                
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
                  <AnimatedButton variant="primary" size="lg" asChild>
                    <Link to="/projects" className="bg-gradient-primary hover:opacity-90 text-primary-foreground rounded-full px-8">
                      View My Work
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </AnimatedButton>
                  <AnimatedButton variant="outline" size="lg" asChild>
                    <Link to="/contact" className="rounded-full px-8 border-primary/30 hover:bg-primary/10">Get In Touch</Link>
                  </AnimatedButton>
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