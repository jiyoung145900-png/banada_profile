import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-md bg-ink-3 px-3.5 text-sm text-fg shadow-[inset_0_0_0_1px_var(--color-line)] placeholder:text-fg-subtle",
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
