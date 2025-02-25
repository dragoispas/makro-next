import * as React from "react";
import { cn } from "./lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex-grow w-full rounded-md border border-zinc-200 bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-zinc-800 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300 overflow-hidden resize-none",
        className
      )}
      ref={ref}
      style={{ fieldSizing: "content" } as React.CSSProperties}
      onInput={(e) => {
        const target = e.target as HTMLTextAreaElement;
        target.style.height = "auto"; // Reset height to shrink if needed
        const parentHeight = target.parentElement?.clientHeight || window.innerHeight;
        const newHeight = Math.min(target.scrollHeight, parentHeight);
        target.style.height = `${newHeight}px`; // Adjust height based on content

        // Enable scrolling only if content exceeds available space
        if (target.scrollHeight > parentHeight) {
          target.style.overflowY = "auto";
        } else {
          target.style.overflowY = "hidden";
        }
      }}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
