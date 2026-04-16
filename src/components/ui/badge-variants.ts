import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-mono transition-colors",
  {
    variants: {
      variant: {
        default: "bg-muted/50 text-muted-foreground",
        primary: "gradient-primary text-primary-foreground",
        outline: "border border-border text-muted-foreground",
        accent: "bg-accent/20 text-accent",
      },
    },
    defaultVariants: { variant: "default" },
  },
);
