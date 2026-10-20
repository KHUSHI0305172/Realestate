import { cn } from "@/lib/utils"

export function Logo({
  className,
  light = false,
}: {
  className?: string
  light?: boolean
}) {
  return (
    <div className={cn("relative -top-1 flex items-center gap-1", className)}>
      <img
        src="/nimbark-logo-mark.png"
        alt=""
        aria-hidden="true"
        width={64}
        height={64}
        decoding="async"
        fetchPriority="high"
        className="h-12 w-12 shrink-0 object-contain sm:h-16 sm:w-16"
      />
      <span
        className={cn(
          "font-heading text-lg font-extrabold leading-[0.95] tracking-[0.08em]",
          light ? "text-card" : "text-foreground",
        )}
      >
        NIMBARK
        <br />
        REALTY
      </span>
    </div>
  )
}
