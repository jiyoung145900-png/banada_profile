import { cn } from "@/lib/utils";

export function BananaMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="16" fill="#F0C400" />
      <circle cx="21.5" cy="11.5" r="12" fill="#12110e" />
    </svg>
  );
}
