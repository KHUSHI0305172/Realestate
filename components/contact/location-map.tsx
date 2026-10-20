import { MapPin } from "lucide-react"

const MAP_QUERY = "Ahmedabad, Gujarat, India"
const embedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=12&output=embed`
const externalHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`

export function LocationMap() {
  return (
    <section className="px-8 py-6 lg:px-16">
      <div className="relative overflow-hidden rounded-2xl border border-border">
        <iframe
          src={embedSrc}
          title="Map showing Nimbark Realty location in Ahmedabad"
          className="h-72 w-full border-0 sm:h-80"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute left-5 top-5 max-w-[220px] rounded-xl border border-border bg-[#F4EFE8] p-4 shadow-lg">
          <div className="flex items-start gap-2.5">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <div>
              <p className="text-sm font-bold text-foreground">Nimbark Realty</p>
              <p className="mt-0.5 text-xs text-muted-foreground">Ahmedabad, Gujarat, India</p>
              <a
                href={externalHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 inline-block rounded px-1 py-0.5 text-xs font-medium text-accent transition-colors hover:bg-[#EAE1D5] hover:underline"
              >
                View larger map
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
