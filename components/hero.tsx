"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { Building2, User, ChevronDown, Home, Layers, MapPin, Wallet, Search, Check } from "lucide-react"
import {
  lookingForOptions,
  propertyTypeOptions,
  locationOptions,
  rentBudgetOptions,
  buyBudgetOptions,
  type SearchOption,
} from "@/lib/search-options"

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
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
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
      <div className="mb-2 flex items-center gap-2 text-xs font-medium text-muted-foreground">
        {icon}
        {label}
      </div>
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

export function Hero() {
  const router = useRouter()
  const [lookingFor, setLookingFor] = useState("rent")
  const [propertyType, setPropertyType] = useState("")
  const [location, setLocation] = useState("")
  const [budget, setBudget] = useState("")

  const budgetOptions = lookingFor === "buy" ? buyBudgetOptions : rentBudgetOptions

  function handleLookingForChange(value: string) {
    setLookingFor(value)
    setBudget("")
  }

  function handleSearch() {
    const params = new URLSearchParams()
    if (propertyType) params.set("type", propertyType)
    if (location) params.set("location", location)
    if (budget) params.set("budget", budget)
    const query = params.toString()
    router.push(`/${lookingFor}${query ? `?${query}` : ""}`)
  }

  return (
    <section className="relative">
      {/* Hero top: text + building image */}
      <div className="relative">
        {/* Full-bleed hero image on the right (desktop) */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[55%] lg:block">
          <Image
            src="/hero-building.png"
            alt="Modern residential apartment building in Ahmedabad"
            fill
            priority
            sizes="55vw"
            quality={78}
            className="object-cover object-left"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F4EFE8] via-[#F4EFE8]/30 to-transparent" />
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F4EFE8] to-transparent" />
        </div>

        {/* Mobile: same image + soft left fade as the Contact page hero */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-0 w-[45%] bg-[#F4EFE8] lg:hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-building.png"
            alt="Modern residential apartment building in Ahmedabad"
            className="ml-0.5 h-full w-[calc(100%-2px)] object-cover object-[60%_50%]"
          />
          <div className="absolute inset-y-0 -left-px w-[calc(55%+1px)] bg-[linear-gradient(to_right,#F4EFE8_0%,rgba(244,239,232,0.94)_10%,rgba(244,239,232,0.8)_25%,rgba(244,239,232,0.58)_42%,rgba(244,239,232,0.32)_60%,rgba(244,239,232,0.12)_80%,rgba(244,239,232,0)_100%)]" />
        </div>

        <div className="relative px-4 sm:min-h-[590px] sm:px-8 lg:min-h-0 lg:px-16">
          <div className="max-w-[54%] pb-9 pt-3 sm:max-w-[55%] sm:py-10 lg:max-w-2xl lg:py-24">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-accent sm:mb-5 sm:text-xs sm:tracking-[0.2em]">
            Ahmedabad Real Estate
          </p>
          <h1 className="font-heading text-xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Find Your Perfect Property in <span className="text-accent">Ahmedabad</span>
          </h1>
          <p className="mt-2 max-w-md text-[13px] leading-relaxed text-muted-foreground sm:mt-6 sm:text-base">
            Trusted rental, resale, and property solutions with fast support and local expertise.
          </p>

          <div className="mt-3 flex w-fit flex-col gap-2 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/rent"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-3.5 py-2 text-xs sm:w-auto sm:px-6 sm:py-3.5 sm:text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Building2 className="h-4 w-4 text-accent" />
              Explore Properties
            </Link>
            <Link
              href="/sell"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-accent bg-transparent px-3.5 py-2 text-xs sm:w-auto sm:px-6 sm:py-3.5 sm:text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <User className="h-4 w-4 text-accent" />
              List Your Property
            </Link>
          </div>
        </div>

        </div>
      </div>

      {/* Search bar */}
      <div className="relative z-20 -mt-6 px-3 pb-4 sm:mt-4 sm:px-8 lg:-mt-12 lg:px-16">
        <div className="flex flex-col gap-4 rounded-xl border border-border bg-[#F4EFE8] p-4 shadow-md lg:flex-row lg:items-end lg:gap-5">
          <Dropdown
            icon={<Home className="h-4 w-4" />}
            label="Looking For"
            value={lookingFor}
            onChange={handleLookingForChange}
            options={lookingForOptions}
          />
          <Dropdown
            icon={<Layers className="h-4 w-4" />}
            label="Property Type"
            value={propertyType}
            onChange={setPropertyType}
            options={propertyTypeOptions}
          />
          <Dropdown
            icon={<MapPin className="h-4 w-4" />}
            label="Location"
            value={location}
            onChange={setLocation}
            options={locationOptions}
          />
          <Dropdown
            icon={<Wallet className="h-4 w-4" />}
            label="Budget"
            value={budget}
            onChange={setBudget}
            options={budgetOptions}
          />
          <button
            type="button"
            onClick={handleSearch}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Search className="h-4 w-4" />
            Search Properties
          </button>
        </div>
      </div>
    </section>
  )
}
