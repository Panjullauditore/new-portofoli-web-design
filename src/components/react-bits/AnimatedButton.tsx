import React from "react";
import { motion } from "framer-motion";

interface AnimatedButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, asChild, onClick, disabled, ...props }, ref) => {
    const baseClasses = "relative inline-flex items-center justify-center font-medium transition-all duration-300 overflow-hidden group";
    
    const variants = {
      primary: "bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-lg hover:shadow-glow",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      outline: "border-2 border-primary/30 text-foreground hover:border-primary hover:bg-primary/10",
      ghost: "text-foreground hover:bg-muted"
    };

    const sizes = {
      sm: "px-4 py-2 text-sm rounded-lg",
      md: "px-6 py-3 text-base rounded-xl",
      lg: "px-8 py-4 text-lg rounded-2xl"
    };

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, {
        className: `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`,
        ...props
      } as any);
    }

    return (
      <motion.button
        ref={ref}
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onClick={onClick}
        disabled={disabled}
      >
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
        <span className="relative z-10">{children}</span>
      </motion.button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export default AnimatedButton;