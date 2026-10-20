import Link from "next/link"
import { Home, ArrowRight } from "lucide-react"

export function CtaBanner() {
  return (
    <section className="px-8 py-8 lg:px-16">
      <div className="flex flex-col items-center gap-6 rounded-xl bg-primary px-6 py-8 text-primary-foreground sm:px-10 md:flex-row md:justify-between">
        <div className="flex items-center gap-5">
          <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full border border-accent text-accent sm:flex">
            <Home className="h-7 w-7" />
          </div>
          <div>
            <h2 className="font-heading text-2xl font-extrabold tracking-tight text-accent">
              Thinking of Renting or Selling Your Property?
            </h2>
            <p className="mt-2 text-sm text-primary-foreground/80">
              List with Nimbark Realty and connect with genuine tenants & buyers.
            </p>
          </div>
        </div>
        <Link
          href="/contact#list-property"
          className="inline-flex shrink-0 items-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
        >
          List Your Property
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
