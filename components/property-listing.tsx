import Link from "next/link"
import Image from "next/image"
import { MapPin, BedDouble, Bath, Maximize } from "lucide-react"
import type { Property } from "@/lib/properties"

export function PropertyListing({
  eyebrow,
  title,
  description,
  items,
}: {
  eyebrow: string
  title: string
  description: string
  items: Property[]
}) {
  return (
    <section className="px-8 py-16 lg:px-16">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h1 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{description}</p>

      {items.length === 0 ? (
        <p className="mt-10 text-sm text-muted-foreground">
          No properties found matching your search. Try adjusting the filters above.
        </p>
      ) : null}

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <Link
            key={p.slug}
            href={`/property/${p.slug}`}
            className="block overflow-hidden rounded-xl border border-border bg-[#F4EFE8]"
          >
            <div className="relative">
              <Image
                src={p.image || "/placeholder.svg"}
                alt={`${p.title} in ${p.location}`}
          width={440}
          height={300}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={72}
          loading="lazy"
          className="h-56 w-full object-cover"
              />
              <span
                className={`absolute left-4 top-4 rounded-md px-3 py-1.5 text-xs font-semibold ${
                  p.badge === "FOR SALE" ? "bg-accent text-primary-foreground" : "bg-primary text-primary-foreground"
                }`}
              >
                {p.badge}
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
              <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {p.location}
              </p>
              <p className="mt-4 text-lg font-bold text-accent">
                {p.price}
                {p.priceSuffix ? (
                  <span className="text-sm font-normal text-muted-foreground"> {p.priceSuffix}</span>
                ) : null}
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <BedDouble className="h-4 w-4" />
                  {p.beds}
                </span>
                <span className="flex items-center gap-1.5">
                  <Bath className="h-4 w-4" />
                  {p.baths}
                </span>
                <span className="flex items-center gap-1.5">
                  <Maximize className="h-4 w-4" />
                  {p.area}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
