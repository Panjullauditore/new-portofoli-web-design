import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavigationProps {
  activeSection?: string;
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={cn(
      "fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300",
      "bg-card/80 backdrop-blur-md border border-border/50 rounded-full px-6 py-3",
      "shadow-card"
    )}>
      <div className="flex items-center space-x-1">
        {navItems.map((item) => (
          <Button
            key={item.id}
            variant={activeSection === item.id ? "default" : "ghost"}
            size="sm"
            onClick={() => scrollToSection(item.id)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
              activeSection === item.id 
                ? "bg-gradient-primary text-primary-foreground shadow-glow" 
                : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
            )}
          >
            {item.label}
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;