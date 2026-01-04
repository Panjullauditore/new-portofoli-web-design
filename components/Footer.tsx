"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { MagneticButton } from '@/components/animations/MagneticButton';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const pathname = usePathname();

    if (pathname === '/') return null;

    const socialLinks = [
        { icon: Github, href: "https://github.com/Panjullauditore", label: "GitHub" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/ahmadfahrezi7/", label: "LinkedIn" },
        { icon: Twitter, href: "https://x.com/panjulauditore", label: "Twitter" },
        { icon: Mail, href: "mailto:ahmadfahrezir@gmail.com", label: "Email" },
    ];

    const quickLinks = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Projects", href: "/projects" },
        { label: "Experience", href: "/experience" },
        { label: "Achievement", href: "/achievement" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <footer className="border-t border-border/20 bg-background/50 backdrop-blur-sm mt-auto">
            <div className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                            Ahmad Fahrezi
                        </h3>
                        <p className="text-foreground/60 leading-relaxed">
                            Building innovative solutions and creating digital experiences that make a difference.
                        </p>
                        <div className="flex space-x-2">
                            {socialLinks.map((social) => (
                                <MagneticButton key={social.label}>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        asChild
                                        className="text-foreground/60 hover:text-foreground hover:bg-primary/10 transition-all duration-300"
                                    >
                                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                                            <social.icon className="h-4 w-4" />
                                            <span className="sr-only">{social.label}</span>
                                        </a>
                                    </Button>
                                </MagneticButton>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">Quick Links</h4>
                        <nav className="flex flex-col space-y-2">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-foreground/60 hover:text-foreground transition-colors duration-300 text-left hover:translate-x-1 inline-block"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">Get In Touch</h4>
                        <div className="space-y-2">
                            <p className="text-foreground/60">
                                <a href="mailto:ahmadfahrezir@gmail.com" className="hover:text-foreground transition-colors duration-300">
                                    ahmadfahrezir@gmail.com
                                </a>
                            </p>
                            <p className="text-foreground/60">Semarang, Indonesia</p>
                        </div>
                        <MagneticButton>
                            <Button
                                size="sm"
                                asChild
                                className="bg-gradient-primary hover:opacity-90 text-primary-foreground rounded-full"
                            >
                                <Link href="/contact">
                                    Let&apos;s Work Together
                                </Link>
                            </Button>
                        </MagneticButton>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-foreground/60 text-sm">
                        © {currentYear} Ahmad Fahrezi. All rights reserved.
                    </p>
                    <div className="flex items-center text-foreground/60 text-sm">
                        <span>Made with</span>
                        <Heart className="h-4 w-4 mx-1 text-red-500 fill-current animate-pulse" />
                        <span>using React & Next.js</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
