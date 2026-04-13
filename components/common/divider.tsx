import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
  variant?: "soft" | "mid";
}

export function Divider({ className, variant = "soft" }: DividerProps) {
  return (
    <div
      className={cn(
        "w-full h-[7px] shrink-0",
        variant === "soft" ? "bg-[rgba(186,188,208,0.5)]" : "bg-[#d9d9d9]",
        className
      )}
    />
  );
}

export default Divider;
