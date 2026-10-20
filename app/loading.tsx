export default function Loading() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-[#F4EFE8]" aria-label="Loading page">
      <div className="flex flex-col items-center gap-4">
        <div className="relative flex size-24 items-center justify-center">
          <span className="absolute inset-0 animate-spin rounded-full border-2 border-border border-t-accent" />
          <img
            src="/nimbark-logo-mark.png"
            alt="Nimbark Realty"
            width={64}
            height={64}
            decoding="async"
            fetchPriority="high"
            className="size-16 animate-pulse object-contain"
          />
        </div>
        <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground">LOADING</p>
      </div>
    </main>
  )
}
