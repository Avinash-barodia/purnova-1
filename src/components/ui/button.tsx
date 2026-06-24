import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap text-[12px] font-bold uppercase tracking-[0.15em] transition-colors disabled:pointer-events-none disabled:opacity-50 border-sharp",
          {
            "bg-[var(--color-primary)] text-black hover:bg-[#ffe088]": variant === "primary",
            "border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-black": variant === "secondary",
            "border border-[var(--color-border)] hover:border-[var(--color-primary)] text-white hover:text-[var(--color-primary)]": variant === "outline",
            "hover:text-[var(--color-primary)] text-[var(--color-foreground)]": variant === "ghost",
            "h-12 px-6 py-3": size === "default",
            "h-9 px-4": size === "sm",
            "h-14 px-8 text-sm": size === "lg",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
