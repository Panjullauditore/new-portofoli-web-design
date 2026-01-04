"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Projects', href: '/projects' },
        { label: 'Experience', href: '/experience' },
        { label: 'Achievement', href: '/achievement' },
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
        if (href === '/' && pathname === '/') return true;
        if (href !== '/' && pathname === href) return true;
        return false;
    };

    return (
        <>
            {/* Spacer untuk desktop navigation */}
            <div className="hidden md:block h-24"></div>

            {/* Spacer untuk mobile navigation */}
            <div className="block md:hidden h-20"></div>

            {/* Desktop Navigation */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                className={cn(
                    "fixed top-6 inset-x-0 mx-auto w-fit z-50 transition-all duration-300 hidden md:block",
                    "bg-card/80 backdrop-blur-md border border-border/50 rounded-full px-6 py-3",
                    "shadow-card"
                )}
            >
                <div className="flex items-center space-x-1">
                    {navItems.map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Button
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
                                <Link href={item.href}>
                                    {item.label}
                                </Link>
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </motion.nav>

            {/* Mobile Navigation */}
            <nav className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 md:hidden",
                isScrolled
                    ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-card"
                    : "bg-transparent"
            )}>
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
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
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-card overflow-hidden"
                            >
                                <div className="container mx-auto px-6 py-4 space-y-2">
                                    {navItems.map((item, index) => (
                                        <motion.div
                                            key={item.label}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            <Button
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
                                                <Link href={item.href}>
                                                    {item.label}
                                                </Link>
                                            </Button>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </nav>
        </>
    );
};

export default Navigation;
