"use client"

import { useMemo, useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  MapPin,
  Wallet,
  Building2,
  Sofa,
  Users,
  Search,
  RotateCcw,
  ChevronDown,
  BedDouble,
  Bath,
  Scaling,
  BadgeCheck,
  ArrowRight,
  Headphones,
  Check,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

type SearchOption = { label: string; value: string }

function Dropdown({
  icon,
  label,
  value,
  onChange,
  options,
}: {
  icon: React.ReactNode
  label: string
  value: string
  onChange: (value: string) => void
  options: SearchOption[]
}) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const selected = options.find((opt) => opt.value === value) ?? options[0]

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.curbuy && !containerRef.curbuy.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEscape)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative flex-1">
      {label ? (
        <span className="mb-2 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
          {icon}
          {label}
        </span>
      ) : null}
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between rounded-md border border-border bg-[#F4EFE8] px-3 py-2.5 text-left text-sm font-medium text-foreground transition-colors hover:border-accent/60"
      >
        <span className="truncate">{selected.label}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open ? (
        <ul
          role="listbox"
          className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-30 max-h-64 overflow-auto rounded-md border border-border bg-[#F4EFE8] p-1 text-foreground shadow-lg"
        >
          {options.map((opt) => {
            const isSelected = opt.value === value
            return (
              <li key={opt.value}>
                <button
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onChange(opt.value)
                    setOpen(false)
                  }}
                  className={`flex w-full items-center justify-between rounded-sm px-3 py-2 text-left text-sm transition-colors hover:bg-secondary hover:text-foreground ${
                    isSelected ? "text-accent" : "text-foreground"
                  }`}
                >
                  {opt.label}
                  {isSelected ? <Check className="h-4 w-4 text-accent" /> : null}
                </button>
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}

const buyLocationOptions: SearchOption[] = [
  { label: "Ahmedabad", value: "ahmedabad" },
  { label: "Prahlad Nagar", value: "prahlad-nagar" },
  { label: "Gota", value: "gota" },
  { label: "Shela", value: "shela" },
  { label: "South Bopal", value: "south-bopal" },
  { label: "Shilaj", value: "shilaj" },
  { label: "Thaltej", value: "thaltej" },
]

const buyBudgetOptions: SearchOption[] = [
  { label: "Any Budget", value: "" },
  { label: "Under ₹20,000", value: "20000" },
  { label: "Under ₹30,000", value: "30000" },
  { label: "Under ₹50,000", value: "50000" },
]

const buyPropertyTypeOptions: SearchOption[] = [
  { label: "All Types", value: "" },
  { label: "2 BHK", value: "2bhk" },
  { label: "3 BHK", value: "3bhk" },
  { label: "4 BHK", value: "4bhk" },
]

const furnishingOptions: SearchOption[] = [
  { label: "Any", value: "" },
  { label: "Furnished", value: "furnished" },
  { label: "Semi-Furnished", value: "semi" },
  { label: "Unfurnished", value: "unfurnished" },
]

const tenantOptions: SearchOption[] = [
  { label: "Any", value: "" },
  { label: "Family", value: "family" },
  { label: "Bachelor", value: "bachelor" },
  { label: "Company", value: "company" },
]

const sortDropdownOptions: SearchOption[] = [
  { label: "Latest", value: "latest" },
  { label: "Price Low to High", value: "low" },
  { label: "Price High to Low", value: "high" },
  { label: "Furnished", value: "furnished" },
]

type BuyListing = {
  slug: string
  image: string
  title: string
  location: string
  price: number
  beds: number
  baths: number
  area: number
  furnished: boolean
}

const buyListings: BuyListing[] = [
  {
    slug: "3-bhk-apartment-prahlad-nagar",
    image: "/rent-1.png",
    title: "3 BHK Apartment",
    location: "Prahlad Nagar, Ahmedabad",
    price: 28000,
    beds: 3,
    baths: 3,
    area: 1450,
    furnished: true,
  },
  {
    slug: "2-bhk-apartment-gota",
    image: "/rent-2.png",
    title: "2 BHK Apartment",
    location: "Gota, Ahmedabad",
    price: 18000,
    beds: 2,
    baths: 2,
    area: 1100,
    furnished: true,
  },
  {
    slug: "3-bhk-apartment-shela",
    image: "/rent-3.png",
    title: "3 BHK Apartment",
    location: "Shela, Ahmedabad",
    price: 26000,
    beds: 3,
    baths: 3,
    area: 1600,
    furnished: false,
  },
  {
    slug: "2-bhk-apartment-south-bopal",
    image: "/rent-4.png",
    title: "2 BHK Apartment",
    location: "South Bopal, Ahmedabad",
    price: 16500,
    beds: 2,
    baths: 2,
    area: 1050,
    furnished: false,
  },
  {
    slug: "3-bhk-apartment-shilaj",
    image: "/rent-5.png",
    title: "3 BHK Apartment",
    location: "Shilaj, Ahmedabad",
    price: 22000,
    beds: 3,
    baths: 2,
    area: 1400,
    furnished: true,
  },
  {
    slug: "4-bhk-apartment-thaltej",
    image: "/rent-6.png",
    title: "4 BHK Apartment",
    location: "Thaltej, Ahmedabad",
    price: 35000,
    beds: 4,
    baths: 4,
    area: 2100,
    furnished: true,
  },
]

const inr = (n: number) => `\u20B9${n.toLocaleString("en-IN")}`

type SortKey = "latest" | "low" | "high" | "furnished"

const sortPills: { key: SortKey; label: string }[] = [
  { key: "latest", label: "Latest" },
  { key: "low", label: "Price Low to High" },
  { key: "high", label: "Price High to Low" },
  { key: "furnished", label: "Furnished" },
]

export function BuyView() {
  const [sort, setSort] = useState<SortKey>("latest")
  const [location, setLocation] = useState("ahmedabad")
  const [budget, setBudget] = useState("")
  const [propertyType, setPropertyType] = useState("")
  const [furnishing, setFurnishing] = useState("")
  const [tenant, setTenant] = useState("")
  const [page, setPage] = useState(1)
  const cardsPerPage = 6

  const visible = useMemo(() => {
    const list = [...buyListings]
    switch (sort) {
      case "low":
        return list.sort((a, b) => a.price - b.price)
      case "high":
        return list.sort((a, b) => b.price - a.price)
      case "furnished":
        return list.filter((r) => r.furnished)
      default:
        return list
    }
  }, [sort])

  const pageCount = Math.max(1, Math.ceil(visible.length / cardsPerPage))
  const paginated = visible.slice((page - 1) * cardsPerPage, page * cardsPerPage)

  return (
    <main className="min-h-screen bg-[#F4EFE8]">
      {/* Hero - full width */}
      <section className="w-full overflow-hidden rounded-2xl bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-3 py-6 sm:gap-8 sm:px-6 sm:py-10 lg:px-8 lg:py-16">
          <div className="max-w-2xl flex-1 lg:-translate-x-20">
            <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
              Buy
            </span>
            <h1 className="mt-6 text-balance font-heading text-2xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Properties to Buy in Ahmedabad
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-relaxed sm:mt-6 sm:text-lg text-primary-foreground/85">
              Quality homes across Ahmedabad.
              <br />
              Verified listings. Transparent process.
            </p>
          </div>
          <div className="flex w-[34%] shrink-0 items-center justify-center sm:w-[38%] md:flex-1 md:items-center md:justify-center">
            <img src="/nimbark-logo-mark.png" alt="Nimbark Realty logo" className="h-28 w-full max-w-full scale-[1.5] object-contain sm:h-40 sm:scale-100 lg:mb-8 lg:h-80 lg:max-w-lg lg:translate-x-28 lg:scale-[1.4]" />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6 lg:px-10">
        {/* Filter bar */}
        <section className="mt-6 rounded-2xl border border-border bg-[#F4EFE8] p-4 sm:p-6">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            <Dropdown
              icon={<MapPin className="h-4 w-4" />}
              label="Location"
              value={location}
              onChange={setLocation}
              options={buyLocationOptions}
            />
            <Dropdown
              icon={<Wallet className="h-4 w-4" />}
              label="Budget"
              value={budget}
              onChange={setBudget}
              options={buyBudgetOptions}
            />
            <Dropdown
              icon={<Building2 className="h-4 w-4" />}
              label="Property Type"
              value={propertyType}
              onChange={setPropertyType}
              options={buyPropertyTypeOptions}
            />
            <Dropdown
              icon={<Sofa className="h-4 w-4" />}
              label="Furnishing"
              value={furnishing}
              onChange={setFurnishing}
              options={furnishingOptions}
            />
            <Dropdown
              icon={<Users className="h-4 w-4" />}
              label="Tenant Preference"
              value={tenant}
              onChange={setTenant}
              options={tenantOptions}
            />
          </div>

          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Search className="h-4 w-4" />
                Apply Filters
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <RotateCcw className="h-4 w-4" />
                Clear Filters
              </button>
            </div>
            <div className="flex items-center gap-3">
              <span className="shrink-0 text-sm text-muted-foreground">Sort by:</span>
              <div className="w-44">
                <Dropdown
                  icon={<ArrowUpDown className="h-4 w-4" />}
                  label=""
                  value={sort}
                  onChange={(v) => setSort(v as SortKey)}
                  options={sortDropdownOptions}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Results header */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Building2 className="h-4 w-4 text-accent" />
            112 Properties Found
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            {sortPills.map((pill) => (
              <button
                key={pill.key}
                type="button"
                onClick={() => setSort(pill.key)}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                  sort === pill.key
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {pill.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <section className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {paginated.map((r) => (
            <article key={r.slug} className="overflow-hidden rounded-xl border border-border bg-[#F4EFE8]">
              <div className="relative">
                <Image
                  src={r.image || "/placeholder.svg"}
                  alt={`${r.title} in ${r.location}`}
                  width={440}
                  height={300}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={72}
                  loading="lazy"
                  className="h-52 w-full object-cover"
                />
                <span className="absolute left-3 top-3 rounded-md bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  FOR RENT
                </span>
                <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-md bg-cream px-2.5 py-1 text-xs font-semibold text-accent-foreground">
                  <BadgeCheck className="h-3.5 w-3.5 text-accent" />
                  VERIFIED
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground">{r.title}</h3>
                <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {r.location}
                </p>
                <p className="mt-3 text-lg font-bold text-accent">
                  {inr(r.price)}
                  <span className="text-sm font-medium text-accent"> / month</span>
                </p>
                <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-muted-foreground">
                  <span className="flex items-center justify-center gap-1.5 rounded-md px-2 py-2">
                    <BedDouble className="h-4 w-4" />
                    {r.beds} Beds
                  </span>
                  <span className="flex items-center justify-center gap-1.5 rounded-md px-2 py-2">
                    <Bath className="h-4 w-4" />
                    {r.baths} Baths
                  </span>
                  <span className="flex items-center justify-center gap-1.5 rounded-md px-2 py-2">
                    <Scaling className="h-4 w-4" />
                    {r.area} sq.ft.
                  </span>
                </div>
                <Link
                  href={`/property/${r.slug}`}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg border border-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/10"
                >
                  View Details
                  <ArrowRight className="h-4 w-4 text-accent" />
                </Link>
              </div>
            </article>
          ))}
        </section>

        {pageCount > 1 && (
          <nav className="mt-5 flex items-center justify-center gap-1.5" aria-label="Property pagination">
            <button type="button" onClick={() => setPage((current) => Math.max(1, current - 1))} disabled={page === 1} className="inline-flex size-7 items-center justify-center rounded-md border border-border text-muted-foreground hover:bg-muted disabled:pointer-events-none disabled:opacity-40" aria-label="Previous page"><ChevronLeft className="size-3.5" /></button>
            <span className="px-2 text-xs font-medium text-muted-foreground">{page} / {pageCount}</span>
            <button type="button" onClick={() => setPage((current) => Math.min(pageCount, current + 1))} disabled={page === pageCount} className="inline-flex size-7 items-center justify-center rounded-md border border-border text-muted-foreground hover:bg-muted disabled:pointer-events-none disabled:opacity-40" aria-label="Next page"><ChevronRight className="size-3.5" /></button>
          </nav>
        )}

        {/* Expert CTA */}
        <section className="mt-10 rounded-2xl bg-cream px-4 py-6 sm:px-8 sm:py-10">
          <div className="flex flex-col items-stretch gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-1 items-start gap-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary text-accent">
                <Headphones className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Looking for a Specific Property?</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Our experts will help you find the perfect buyal home that fits your needs and budget.
                </p>
              </div>
            </div>
            <Link
              href="tel:+919773426970"
              className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 sm:w-auto text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Talk to Our Expert
              <ArrowRight className="h-4 w-4 text-accent" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
