"use client";

import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, BookOpen, Trophy, Medal } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { CharReveal } from '@/components/animations/TextReveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggeredCards';
import { MagneticButton } from '@/components/animations/MagneticButton';

type AchievementCategory = 'certification' | 'course' | 'competition' | 'award';

interface Achievement {
    id: string;
    title: string;
    issuer: string;
    date: string;
    description: string;
    category: AchievementCategory;
    credentialId?: string;
    credentialUrl?: string;
    skills: string[];
    image?: string;
}

export default function AchievementPage() {
    const isBlurred = false; // Toggle blur - set ke false untuk menghilangkan blur

    const achievements: Achievement[] = [
        {
            id: '1',
            title: 'React Developer Certification',
            issuer: 'Meta',
            date: '2024-01-15',
            description: 'Comprehensive certification covering React fundamentals, advanced concepts, and best practices.',
            category: 'certification',
            credentialId: 'META-REACT-2024-001',
            credentialUrl: 'https://coursera.org/verify/example',
            skills: ['React', 'JavaScript', 'JSX', 'Hooks', 'State Management'],
        },
        {
            id: '2',
            title: 'Full Stack Web Development',
            issuer: 'freeCodeCamp',
            date: '2023-11-20',
            description: 'Complete full-stack development course covering front-end and back-end technologies.',
            category: 'course',
            credentialId: 'FCC-FULLSTACK-2023',
            credentialUrl: 'https://freecodecamp.org/verify/example',
            skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
        },
        {
            id: '3',
            title: 'AWS Cloud Practitioner',
            issuer: 'Amazon Web Services',
            date: '2023-09-10',
            description: 'Foundational certification demonstrating understanding of AWS Cloud concepts and services.',
            category: 'certification',
            credentialId: 'AWS-CP-2023-789',
            credentialUrl: 'https://aws.amazon.com/verify/example',
            skills: ['AWS', 'Cloud Computing', 'EC2', 'S3', 'Lambda'],
        },
        {
            id: '4',
            title: 'UI/UX Design Fundamentals',
            issuer: 'Google',
            date: '2023-07-25',
            description: 'Comprehensive course on user interface and user experience design principles.',
            category: 'course',
            credentialId: 'GOOGLE-UXUI-2023',
            credentialUrl: 'https://coursera.org/verify/google-example',
            skills: ['Figma', 'Prototyping', 'User Research', 'Design Thinking'],
        },
        {
            id: '5',
            title: 'Hackathon Winner - Best Innovation',
            issuer: 'TechFest 2023',
            date: '2023-05-15',
            description: 'First place winner in the innovation category for developing a sustainable technology solution.',
            category: 'competition',
            credentialId: 'TECHFEST-2023-WINNER',
            skills: ['Innovation', 'Problem Solving', 'Team Leadership'],
        },
        {
            id: '6',
            title: 'Outstanding Student Achievement',
            issuer: 'Universitas Teknologi',
            date: '2022-12-01',
            description: 'Recognition for outstanding academic performance and contribution to student community.',
            category: 'award',
            skills: ['Leadership', 'Academic Excellence', 'Community Service'],
        },
    ];

    const getCategoryIcon = (category: AchievementCategory) => {
        switch (category) {
            case 'certification': return Award;
            case 'course': return BookOpen;
            case 'competition': return Trophy;
            case 'award': return Medal;
            default: return Award;
        }
    };

    const getCategoryColor = (category: AchievementCategory) => {
        switch (category) {
            case 'certification': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
            case 'course': return 'bg-green-500/10 text-green-500 border-green-500/20';
            case 'competition': return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
            case 'award': return 'bg-purple-500/10 text-purple-500 border-purple-500/20';
            default: return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/5 relative">
            <div className="container mx-auto px-6 py-12">
                {/* Header */}
                <ScrollReveal className={`text-center mb-16 ${isBlurred ? 'blur-sm' : ''}`}>
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                        <span className="bg-gradient-primary bg-clip-text text-transparent text-gradient-animate">
                            <CharReveal text="Achievements & Certifications" delay={0.2} />
                        </span>
                    </h1>
                    <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                        A collection of certifications, courses, and achievements that showcase my continuous learning journey
                    </p>
                </ScrollReveal>

                {/* Achievements Grid */}
                <div className={isBlurred ? 'blur-sm' : ''}>
                    <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
                        {achievements.map((achievement) => {
                            const CategoryIcon = getCategoryIcon(achievement.category);
                            return (
                                <StaggerItem key={achievement.id}>
                                    <motion.div
                                        whileHover={{ scale: 1.03, y: -5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <Card className="h-full bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group overflow-hidden">
                                            <CardHeader>
                                                <div className="flex items-start justify-between gap-3">
                                                    <motion.div
                                                        className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors"
                                                        whileHover={{ rotate: 10 }}
                                                    >
                                                        <CategoryIcon className="h-6 w-6 text-primary" />
                                                    </motion.div>
                                                    <Badge className={`${getCategoryColor(achievement.category)} border capitalize`}>
                                                        {achievement.category}
                                                    </Badge>
                                                </div>
                                                <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors mt-4">
                                                    {achievement.title}
                                                </CardTitle>
                                                <CardDescription className="text-foreground/60">
                                                    {achievement.issuer}
                                                </CardDescription>
                                                <div className="flex items-center gap-2 text-sm text-foreground/50 mt-2">
                                                    <Calendar className="h-4 w-4" />
                                                    <span>{new Date(achievement.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</span>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
                                                    {achievement.description}
                                                </p>

                                                <div className="flex flex-wrap gap-1 mb-4">
                                                    {achievement.skills.slice(0, 3).map((skill) => (
                                                        <Badge key={skill} variant="secondary" className="text-xs hover:bg-primary/20 transition-colors">
                                                            {skill}
                                                        </Badge>
                                                    ))}
                                                    {achievement.skills.length > 3 && (
                                                        <Badge variant="secondary" className="text-xs">
                                                            +{achievement.skills.length - 3}
                                                        </Badge>
                                                    )}
                                                </div>

                                                {achievement.credentialUrl && (
                                                    <MagneticButton>
                                                        <Button variant="outline" size="sm" asChild className="w-full group/btn">
                                                            <a href={achievement.credentialUrl} target="_blank" rel="noopener noreferrer">
                                                                <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                                                                View Credential
                                                            </a>
                                                        </Button>
                                                    </MagneticButton>
                                                )}
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </StaggerItem>
                            );
                        })}
                    </StaggerContainer>
                </div>

                {/* Coming Soon Overlay */}
                {isBlurred && (
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center bg-background/20 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <motion.div
                            className="text-center p-8 bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl shadow-card max-w-md mx-auto"
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            transition={{ delay: 0.4, type: "spring" }}
                        >
                            <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                                Coming Soon!
                            </h2>
                            <p className="text-muted-foreground text-lg">
                                The achievements page is currently under development.
                                It will be updated soon with the latest certificates and achievements.
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
