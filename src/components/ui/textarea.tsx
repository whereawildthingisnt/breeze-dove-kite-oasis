import * as React from "react";
import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-24 w-full rounded-md bg-inset px-3 py-2.5 text-sm text-fg shadow-[0_0_0_1px_rgba(236,234,227,0.1)] transition-[box-shadow] duration-150 placeholder:text-subtle hover:shadow-[0_0_0_1px_rgba(236,234,227,0.18)] focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_var(--color-accent)] disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";
