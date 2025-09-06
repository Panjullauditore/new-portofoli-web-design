import { motion } from "framer-motion";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  gradient?: string;
  animate?: boolean;
  tag?: keyof JSX.IntrinsicElements;
}

export default function GradientText({
  children,
  className = "",
  gradient = "from-primary via-primary-glow to-accent",
  animate = true,
  tag: Tag = "span",
}: GradientTextProps) {
  if (animate) {
    return (
      <motion.span
        className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent font-bold bg-[length:200%_100%] ${className}`}
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{
          duration: 3,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse" as const,
        }}
      >
        {children}
      </motion.span>
    );
  }

  const TagComponent = Tag as any;

  return (
    <TagComponent className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent font-bold ${className}`}>
      {children}
    </TagComponent>
  );
}