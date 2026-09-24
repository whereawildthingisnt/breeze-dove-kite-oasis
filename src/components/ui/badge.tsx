import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-sm px-1.5 py-0.5 font-mono text-[11px] font-medium tracking-wide uppercase",
  {
    variants: {
      variant: {
        default: "bg-raised text-muted",
        accent: "bg-accent text-accent-fg",
        outline: "text-muted shadow-[0_0_0_1px_rgba(236,234,227,0.14)]",
        danger: "bg-danger/15 text-danger",
        ok: "bg-ok/15 text-ok",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export function Badge({
  className,
  variant,
  ...props
}: HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
