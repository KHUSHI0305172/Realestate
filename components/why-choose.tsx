import { ShieldCheck, Headphones, MapPin, UserRound } from "lucide-react"

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Listings",
    desc: "All properties are verified for a safe & transparent experience.",
  },
  {
    icon: Headphones,
    title: "Fast Support",
    desc: "Quick responses on calls and WhatsApp. We're always here.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    desc: "Deep knowledge of Ahmedabad's top localities and markets.",
  },
  {
    icon: UserRound,
    title: "Owner Assistance",
    desc: "End-to-end support for property owners to list and manage easily.",
  },
]

export function WhyChoose() {
  return (
    <section className="px-8 py-12 lg:px-16">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Why Choose Nimbark Realty</p>
      <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-foreground">
        Your Property, Our Priority.
      </h2>

      <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <div
            key={f.title}
            className={`flex items-start gap-4 ${
              i !== 0 ? "lg:border-l lg:border-border lg:pl-8" : ""
            }`}
          >
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-secondary text-foreground">
              <f.icon className="h-8 w-8" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-1.5">
              <h3 className="text-base font-bold text-foreground">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
