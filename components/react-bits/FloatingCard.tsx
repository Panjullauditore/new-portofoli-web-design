"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

interface FloatingCardProps {
    children: React.ReactNode;
    className?: string;
    glowEffect?: boolean;
    tiltEffect?: boolean;
}

export default function FloatingCard({
    children,
    className = "",
    glowEffect = true,
    tiltEffect = true,
}: FloatingCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current || !tiltEffect) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

        setMousePosition({ x: x * 20, y: y * 20 });
    };

    const handleMouseLeave = () => {
        setMousePosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={cardRef}
            className={`relative bg-card border border-border rounded-2xl p-6 transition-all duration-300 ${glowEffect ? "hover:shadow-glow" : ""
                } ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{
                rotateX: mousePosition.y,
                rotateY: mousePosition.x,
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
            }}
            whileHover={{
                y: -10,
                scale: 1.02,
            }}
            style={{
                transformStyle: "preserve-3d",
            }}
        >
            {glowEffect && (
                <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 blur-xl"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                />
            )}
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}
