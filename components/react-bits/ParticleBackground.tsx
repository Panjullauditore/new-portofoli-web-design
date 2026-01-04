"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface Particle {
    x: number;
    y: number;
    size: number;
    speed: number;
    opacity: number;
    element: HTMLDivElement;
}

interface ParticleBackgroundProps {
    count?: number;
    className?: string;
    color?: string;
}

export default function ParticleBackground({
    count = 50,
    className = "",
    color = "hsl(var(--primary))",
}: ParticleBackgroundProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const particlesRef = useRef<Particle[]>([]);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const particles: Particle[] = [];

        // Create particles
        for (let i = 0; i < count; i++) {
            const particle = document.createElement("div");
            particle.className = "absolute rounded-full pointer-events-none";
            particle.style.background = color;

            const size = Math.random() * 4 + 1;
            const x = Math.random() * container.offsetWidth;
            const y = Math.random() * container.offsetHeight;
            const speed = Math.random() * 0.5 + 0.1;
            const opacity = Math.random() * 0.6 + 0.1;

            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            particle.style.opacity = `${opacity}`;

            container.appendChild(particle);

            particles.push({
                x,
                y,
                size,
                speed,
                opacity,
                element: particle,
            });
        }

        particlesRef.current = particles;

        // Animate particles
        const animateParticles = () => {
            particles.forEach((particle) => {
                particle.y -= particle.speed;

                if (particle.y < -particle.size) {
                    particle.y = container.offsetHeight + particle.size;
                    particle.x = Math.random() * container.offsetWidth;
                }

                gsap.set(particle.element, {
                    x: particle.x,
                    y: particle.y,
                });
            });
        };

        const animation = gsap.ticker.add(animateParticles);

        // Floating animation
        gsap.to(particles.map(p => p.element), {
            x: "+=10",
            y: "+=5",
            duration: 3,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            stagger: 0.1,
        });

        return () => {
            gsap.ticker.remove(animation);
            particles.forEach((particle) => {
                particle.element.remove();
            });
        };
    }, [count, color]);

    return (
        <div
            ref={containerRef}
            className={`absolute inset-0 overflow-hidden ${className}`}
        />
    );
}
