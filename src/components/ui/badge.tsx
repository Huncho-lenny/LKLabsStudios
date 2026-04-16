import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
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

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = ({ className, variant, ...props }: BadgeProps) => (
  <span className={cn(badgeVariants({ variant }), className)} {...props} />
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
