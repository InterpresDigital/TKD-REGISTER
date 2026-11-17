import React from "react";
import { cn } from "@/src/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, glow = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-bg-card border border-white/10 rounded-2xl p-6 relative overflow-hidden transition-all duration-200",
          glow && "border-emerald-500/30 shadow-[0_0_30px_-5px_rgba(16,185,129,0.15)]",
          className
        )}
        {...props}
      >
        <div className="relative z-10">{children}</div>
      </div>
    );
  }
);

Card.displayName = "Card";
