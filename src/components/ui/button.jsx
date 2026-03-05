import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-body tracking-wide", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-foreground/20 bg-transparent hover:bg-foreground hover:text-background",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
            // Premium variants
            hero: "bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-[0.15em] text-xs font-medium",
            "hero-outline": "border border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-foreground uppercase tracking-[0.15em] text-xs font-medium",
            elegant: "bg-foreground text-background hover:bg-foreground/90 uppercase tracking-[0.15em] text-xs font-medium",
            "elegant-outline": "border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background uppercase tracking-[0.15em] text-xs font-medium",
            minimal: "bg-transparent text-foreground hover:text-primary uppercase tracking-[0.15em] text-xs font-medium underline-offset-4 hover:underline",
        },
        size: {
            default: "h-10 px-6 py-2",
            sm: "h-9 px-4",
            lg: "h-12 px-10 py-3",
            xl: "h-14 px-12 py-4",
            icon: "h-10 w-10",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}/>;
});
Button.displayName = "Button";
export { Button, buttonVariants };
