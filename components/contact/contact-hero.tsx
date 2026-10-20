export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      {/* Full-bleed building image anchored to the top-right */}
      <div className="absolute inset-y-0 right-0 w-[45%] lg:w-1/2">
        <img
          src="/hero-building.png"
          alt="Modern residential apartment building with balconies at dusk"
          className="h-full w-full object-cover object-[60%_50%] lg:object-center"
        />
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-cream to-transparent lg:w-24" />
      </div>

      <div className="relative block px-3 pb-20 pt-6 sm:px-6 sm:pb-24 sm:pt-12 lg:px-12 lg:pb-32 lg:pt-24">
        <div className="max-w-[58%] lg:max-w-[48%]">
          <h1 className="font-heading text-2xl font-extrabold leading-[1.08] tracking-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
            Contact Nimbark Realty
          </h1>
          <p className="mt-3 max-w-sm text-xs leading-relaxed text-muted-foreground text-pretty sm:mt-4 sm:text-base">
            We&apos;re here to help you find the perfect property or get the best value for yours.
          </p>
        </div>

      </div>
    </section>
  )
}
