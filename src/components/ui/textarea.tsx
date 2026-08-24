import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-24 w-full resize-y rounded-md bg-ink-3 px-3.5 py-3 text-sm leading-normal text-fg shadow-[inset_0_0_0_1px_var(--color-line)] placeholder:text-fg-subtle",
        "transition-[box-shadow,background-color] duration-150 ease-out",
        "hover:shadow-[inset_0_0_0_1px_var(--color-line-strong)]",
        "focus-visible:outline-none focus-visible:shadow-[inset_0_0_0_1.5px_var(--color-banana)]",
        "disabled:opacity-40",
        className,
      )}
      {...props}
    />
  );
}
