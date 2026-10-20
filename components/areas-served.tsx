const areas = ["South Bopal", "Shela", "Shilaj", "Gota", "Thaltej", "Satellite", "Science City"]

export function AreasServed() {
  return (
    <section className="px-8 py-12 lg:px-16">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Areas We Serve</p>
      <div className="mt-6 flex flex-wrap gap-3.5 sm:flex-nowrap sm:justify-between">
        {areas.map((area) => (
          <span
            key={area}
            className="rounded-full border border-accent/40 bg-[#F4EFE8] px-7 py-3 text-sm font-medium text-foreground"
          >
            {area}
          </span>
        ))}
      </div>
    </section>
  )
}
