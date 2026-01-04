"use client";

import { motion } from 'framer-motion';
import { Code, Palette, Rocket, Heart, Github, Linkedin, Mail } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { CharReveal } from '@/components/animations/TextReveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggeredCards';
import { MagneticButton } from '@/components/animations/MagneticButton';
import FloatingCard from '@/components/react-bits/FloatingCard';

export default function AboutPage() {
    const skills = [
        "React", "TypeScript", "Node.js", "JavaScript", "HTML/CSS", "Laravel",
        "Next.js", "TailwindCSS", "PHP", "Python", "Figma", "MySQL",
    ];

    const interests = [
        { icon: Code, title: "Full-Stack Development", description: "Building scalable web applications with modern technologies" },
        { icon: Rocket, title: "Frontend Technologies", description: "Creating responsive and interactive user interfaces" },
        { icon: Palette, title: "UI/UX Design", description: "Designing beautiful and intuitive user experiences" },
        { icon: Heart, title: "Music & Creativity", description: "Finding inspiration through music and creative expression" }
    ];

    const songs = [
        { id: "0uxSUdBrJy9Un0EYoBowng", title: "20 Min", artist: "Lil Uzi Vert", spotifyEmbed: "https://open.spotify.com/embed/track/0uxSUdBrJy9Un0EYoBowng" },
        { id: "4cBm8rv2B5BJWU2pDaHVbF", title: "Headshot", artist: "Ardy Minaj", spotifyEmbed: "https://open.spotify.com/embed/track/56BG3JPRrvRFLsnk4DvOg4?utm_source=oembed" },
        { id: "278PwGlIm7MxVTZud18Rx4", title: "mejikuhibuniu", artist: "Tenxi, Suise, Jemsi", spotifyEmbed: "https://open.spotify.com/embed/track/278PwGlIm7MxVTZud18Rx4" },
        { id: "68qeaZhtMZ6abrJCYt6nQn", title: "RATHER LIE", artist: "Playboi Carti, The Weeknd", spotifyEmbed: "https://open.spotify.com/embed/track/68qeaZhtMZ6abrJCYt6nQn" },
        { id: "40tAi41702KbnQcWQjSPwZ", title: "main-main!", artist: "RYO, Josua Natanael", spotifyEmbed: "https://open.spotify.com/embed/track/40tAi41702KbnQcWQjSPwZ" },
        { id: "2hXPmiqKdXcbV0L1VKnTDN", title: "最高到達点", artist: "Sekai no Owari", spotifyEmbed: "https://open.spotify.com/embed/track/2hXPmiqKdXcbV0L1VKnTDN" },
        { id: "1CsJzYjEbcbaQCBxg5iOCv", title: "With U", artist: "Napking", spotifyEmbed: "https://open.spotify.com/embed/track/1CsJzYjEbcbaQCBxg5iOCv" },
        { id: "0KifLRxrBPUPwpNcJmtCiG", title: "Sorry", artist: "Napking", spotifyEmbed: "https://open.spotify.com/embed/track/0KifLRxrBPUPwpNcJmtCiG" },
        { id: "0FIDCNYYjNvPVimz5icugS", title: "Timeless", artist: "The Weeknd, Playboi Carti", spotifyEmbed: "https://open.spotify.com/embed/track/0FIDCNYYjNvPVimz5icugS" },
        { id: "12VH4g5pTMZmrUVzfJq7F7", title: "M a k e I t T o T h e M o r n i n g", artist: "PARTYNEXTDOOR", spotifyEmbed: "https://open.spotify.com/embed/track/12VH4g5pTMZmrUVzfJq7F7" }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <main className="py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        {/* Header */}
                        <ScrollReveal className="text-center mb-16">
                            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                                <span className="bg-gradient-primary bg-clip-text text-transparent text-gradient-animate">
                                    <CharReveal text="About Me" delay={0.2} />
                                </span>
                            </h1>
                        </ScrollReveal>

                        {/* Main Content */}
                        <div className="grid lg:grid-cols-3 gap-12 mb-16">
                            {/* Profile Section */}
                            <ScrollReveal className="lg:col-span-1" delay={0.1}>
                                <FloatingCard className="p-6 backdrop-blur-sm" glowEffect={true} tiltEffect={true}>
                                    <div className="text-center">
                                        {/* Profile Image */}
                                        <motion.div
                                            className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden border border-gray-800/20 relative"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <Image
                                                src="/images/foto-gw.jpg"
                                                alt="Profile Picture"
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 192px, 192px"
                                                priority
                                            />
                                        </motion.div>

                                        <h2 className="text-2xl font-bold mb-2">
                                            <CharReveal text="Ahmad Fahrezi" delay={0.3} staggerDelay={0.03} />
                                        </h2>
                                        <p className="text-gray-400 mb-4">Informatics Students</p>

                                        {/* Social Links */}
                                        <div className="flex justify-center gap-2 mb-6">
                                            {[
                                                { icon: Github, href: "https://github.com/Panjullauditore" },
                                                { icon: Linkedin, href: "https://www.linkedin.com/in/ahmadfahrezi7/" },
                                                { icon: Mail, href: "mailto:ahmadfahrezir@gmail.com" },
                                            ].map((social) => (
                                                <MagneticButton key={social.href}>
                                                    <Button variant="ghost" size="sm" asChild className="rounded-full hover:bg-primary/10">
                                                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                                                            <social.icon className="h-4 w-4" />
                                                        </a>
                                                    </Button>
                                                </MagneticButton>
                                            ))}
                                        </div>

                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            Email me for any inquiries at ahmadfahrezir@gmail.com
                                        </p>
                                    </div>
                                </FloatingCard>
                            </ScrollReveal>

                            {/* Description & Interests */}
                            <div className="lg:col-span-2 space-y-8">
                                <ScrollReveal delay={0.2}>
                                    <p className="text-lg text-gray-300 leading-relaxed mb-8">
                                        Hi, you can call me Rezi. I&apos;m a passionate Informatics student who loves creating
                                        beautiful web applications and learning new technologies. When I&apos;m not coding, you&apos;ll
                                        find me listening to music or exploring creative projects.
                                    </p>
                                    <p className="text-lg text-gray-300 leading-relaxed mb-8">
                                        I&apos;m very active on social media, having built a strong presence documenting my projects
                                        and sharing tech-related information. I love building things that are related to web
                                        development and modern technologies.
                                    </p>
                                </ScrollReveal>

                                {/* Interests Grid */}
                                <StaggerContainer className="grid md:grid-cols-2 gap-4" staggerDelay={0.1} initialDelay={0.3}>
                                    {interests.map((interest) => (
                                        <StaggerItem key={interest.title}>
                                            <FloatingCard className="p-4" glowEffect={true} tiltEffect={true}>
                                                <div className="flex items-start space-x-3">
                                                    <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                                                        <interest.icon className="h-4 w-4 text-primary" />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                                                            {interest.title}
                                                        </h3>
                                                        <p className="text-gray-400 text-xs leading-relaxed">
                                                            {interest.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </FloatingCard>
                                        </StaggerItem>
                                    ))}
                                </StaggerContainer>
                            </div>
                        </div>

                        {/* Skills Section */}
                        <ScrollReveal delay={0.2}>
                            <FloatingCard className="p-8 mb-16" glowEffect={true}>
                                <h3 className="text-2xl font-bold mb-6 text-center">
                                    <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                                        Skills & Technologies
                                    </span>
                                </h3>
                                <StaggerContainer className="flex flex-wrap gap-3 justify-center" staggerDelay={0.05}>
                                    {skills.map((skill) => (
                                        <StaggerItem key={skill}>
                                            <Badge
                                                variant="secondary"
                                                className="px-4 py-2 text-sm font-medium bg-transparent border border-gray-600/30 text-gray-300 hover:bg-primary/10 hover:border-primary/50 hover:text-primary hover:scale-110 hover:rotate-1 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 cursor-pointer group"
                                            >
                                                <span className="group-hover:animate-pulse">{skill}</span>
                                            </Badge>
                                        </StaggerItem>
                                    ))}
                                </StaggerContainer>
                            </FloatingCard>
                        </ScrollReveal>

                        {/* My Favorite Songs */}
                        <ScrollReveal delay={0.1}>
                            <div className="mb-16">
                                <h3 className="text-3xl font-bold mb-8 text-center">
                                    <span className="bg-gradient-primary bg-clip-text text-transparent text-gradient-animate">
                                        My Favorite Songs
                                    </span>
                                </h3>
                                <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
                                    When I step away from coding, music becomes my sanctuary. My playlist ranges from aespa, Le Sserafim, ILLIT, Hearts2Hearts, and NewJeans to Kendrick Lamar, Young Thug, and much more - each artist bringing a different energy to my creative process.
                                </p>

                                <StaggerContainer className="grid md:grid-cols-2 gap-4" staggerDelay={0.08}>
                                    {songs.map((song) => (
                                        <StaggerItem key={song.id}>
                                            <motion.div
                                                className="overflow-hidden rounded-lg"
                                                whileHover={{ scale: 1.02 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <iframe
                                                    src={song.spotifyEmbed}
                                                    width="100%"
                                                    height="80"
                                                    frameBorder="0"
                                                    allow="encrypted-media"
                                                    title={`Spotify player for ${song.title}`}
                                                    className="rounded-lg"
                                                />
                                            </motion.div>
                                        </StaggerItem>
                                    ))}
                                </StaggerContainer>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </main>
        </div>
    );
}
