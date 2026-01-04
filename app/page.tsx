"use client";

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CharReveal } from '@/components/animations/TextReveal';

import { MagneticButton } from '@/components/animations/MagneticButton';
import ParticleBackground from '@/components/react-bits/ParticleBackground';
import TypingAnimation from '@/components/TypingAnimation';

// Dynamic import Planet3D untuk SSR compatibility
const Planet3D = dynamic(() => import('@/components/Planet3D'), {
    ssr: false,
    loading: () => (
        <div className="h-full w-full flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-primary animate-pulse" />
        </div>
    ),
});

export default function HomePage() {
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
                            <motion.div
                                className="text-left"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                            >
                                {/* Social Links */}
                                <motion.div
                                    className="flex items-center gap-4 mb-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {[
                                        { icon: Github, href: "https://github.com/Panjullauditore", label: "GitHub" },
                                        { icon: Linkedin, href: "https://www.linkedin.com/in/ahmadfahrezi7/", label: "LinkedIn" },
                                        { icon: Mail, href: "mailto:ahmadfahrezir@gmail.com", label: "Email" },
                                    ].map((social) => (
                                        <MagneticButton key={social.label}>
                                            <Button variant="ghost" size="sm" asChild className="rounded-full hover:bg-primary/10">
                                                <a href={social.href} target="_blank" rel="noopener noreferrer">
                                                    <social.icon className="h-5 w-5" />
                                                </a>
                                            </Button>
                                        </MagneticButton>
                                    ))}
                                </motion.div>

                                {/* Name with animated text */}
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                    <span className="bg-gradient-primary bg-clip-text text-transparent text-gradient-animate">
                                        <CharReveal text="Hi, I'm Ahmad Fahrezi." delay={0.3} />
                                    </span>
                                </h1>

                                <motion.p
                                    className="text-lg md:text-xl text-foreground/70 mb-2"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    Informatics Student | FullStack Developer
                                </motion.p>

                                <motion.div
                                    className="text-lg md:text-xl text-foreground/70 mb-8"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                >
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
                                </motion.div>

                                {/* CTA Buttons */}
                                <motion.div
                                    className="flex flex-col sm:flex-row gap-4 mb-8"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 }}
                                >
                                    <MagneticButton>
                                        <Button size="lg" asChild className="bg-gradient-primary hover:opacity-90 text-primary-foreground rounded-full px-8 shadow-glow transition-all duration-300 hover:scale-105">
                                            <Link href="/projects">
                                                View My Work
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </MagneticButton>
                                    <MagneticButton>
                                        <Button variant="outline" size="lg" asChild className="rounded-full px-8 border-primary/30 hover:bg-primary/10 transition-all duration-300 hover:scale-105">
                                            <Link href="/contact">Get In Touch</Link>
                                        </Button>
                                    </MagneticButton>
                                </motion.div>
                            </motion.div>

                            {/* Right Content - 3D Planet */}
                            <motion.div
                                className="lg:order-2 h-96 lg:h-[500px]"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                            >
                                <Planet3D />
                            </motion.div>
                        </div>
                    </div>

                    {/* Floating Elements */}
                    <motion.div
                        className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl"
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                    />
                    <motion.div
                        className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/20 rounded-full blur-xl"
                        animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.2, 0.5, 0.2]
                        }}
                        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    />
                </section>
            </main>
        </div>
    );
}
