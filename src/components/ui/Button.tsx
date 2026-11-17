import React from "react";
import { cn } from "@/src/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const variants = {
      primary: "bg-gradient-to-r from-[#28AF90] via-[#22A486] to-[#1C967A] text-white font-bold hover:brightness-110 shadow-[0_0_25px_rgba(40,175,144,0.45),inset_0_1px_1px_rgba(255,255,255,0.4)] border border-[#34D399]/60",
      secondary: "bg-gradient-to-b from-[#182644] to-[#0F1A30] text-white font-semibold hover:from-[#1E3056] hover:to-[#14223E] border border-white/15 hover:border-white/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_20px_rgba(0,0,0,0.6)]",
      outline: "bg-transparent border border-[#28AF90]/50 text-[#34D399] hover:bg-[#28AF90]/10 font-semibold shadow-[0_0_15px_rgba(40,175,144,0.15)]",
      ghost: "bg-transparent text-text-secondary hover:text-white hover:bg-white/5 font-medium",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs rounded-xl",
      md: "px-5 py-2.5 text-sm rounded-xl",
      lg: "px-7 py-3.5 text-base rounded-2xl",
      xl: "px-8 py-4 text-base md:text-lg rounded-2xl font-bold",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer tracking-wide",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
