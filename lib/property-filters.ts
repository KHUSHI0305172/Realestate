import type { Property } from "@/lib/properties"

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

// Maps a property's title to a "type" slug used by the search bar
// (e.g. "2 BHK Apartment" -> "2bhk", "Office Space" -> "office")
export function getPropertyTypeSlug(title: string): string | null {
  const bhkMatch = title.match(/(\d+)\s*BHK/i)
  if (bhkMatch) return `${bhkMatch[1]}bhk`
  if (/office/i.test(title)) return "office"
  if (/shop/i.test(title)) return "shop"
  if (/\bpg\b/i.test(title)) return "pg"
  return null
}

export function getLocationSlug(location: string): string {
  const area = location.split(",")[0]
  return slugify(area)
}

export function parsePriceValue(price: string): number {
  const digits = price.replace(/[^0-9]/g, "")
  return digits ? Number.parseInt(digits, 10) : 0
}

export type PropertySearchFilters = {
  type?: string
  location?: string
  budget?: string
}

export function filterProperties(items: Property[], filters: PropertySearchFilters): Property[] {
  return items.filter((p) => {
    if (filters.type && getPropertyTypeSlug(p.title) !== filters.type) return false
    if (filters.location && getLocationSlug(p.location) !== filters.location) return false
    if (filters.budget) {
      const budgetNum = Number.parseInt(filters.budget, 10)
      if (!Number.isNaN(budgetNum) && parsePriceValue(p.price) > budgetNum) return false
    }
    return true
  })
}
