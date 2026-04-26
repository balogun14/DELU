import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function InteractiveHoverButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border px-6 py-2 text-center font-semibold",
        "border-[#10B981] text-[#10B981] bg-transparent",
        "transition-all duration-300 hover:bg-[#10B981] hover:text-white hover:shadow-lg",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-[#10B981] transition-all duration-300 group-hover:scale-125" />

        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>

      <div
        className="
          absolute inset-0 z-10 flex items-center justify-center gap-2
          translate-x-12 opacity-0
          transition-all duration-300
          group-hover:translate-x-0
          group-hover:opacity-100
          text-white
        "
      >
        <span>{children}</span>
        <ArrowRight size={18} />
      </div>
    </button>
  );
}
