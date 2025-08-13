import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Experience', href: '/experience' },
    { label: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveRoute = (href: string) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href !== '/' && location.pathname === href) return true;
    return false;
  };

  return (
    <>
      {/* Spacer untuk desktop navigation */}
      <div className="hidden md:block h-24"></div>
      
      {/* Spacer untuk mobile navigation */}
      <div className="block md:hidden h-20"></div>

      {/* Desktop Navigation */}
      <nav className={cn(
        "fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 hidden md:block",
        "bg-card/80 backdrop-blur-md border border-border/50 rounded-full px-6 py-3",
        "shadow-card"
      )}>
        <div className="flex items-center space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant={isActiveRoute(item.href) ? "default" : "ghost"}
              size="sm"
              asChild
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                isActiveRoute(item.href)
                  ? "bg-gradient-primary text-primary-foreground shadow-glow" 
                  : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
              )}
            >
              <Link to={item.href}>
                {item.label}
              </Link>
            </Button>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 md:hidden",
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-card" 
          : "bg-transparent"
      )}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Ahmad Fahrezi
            </Link>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:bg-primary/10"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-card">
              <div className="container mx-auto px-6 py-4 space-y-2">
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    variant="ghost"
                    asChild
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "w-full justify-start transition-all duration-300",
                      isActiveRoute(item.href)
                        ? 'text-primary bg-primary/10' 
                        : 'text-foreground/70 hover:text-foreground hover:bg-primary/5'
                    )}
                  >
                    <Link to={item.href}>
                      {item.label}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;