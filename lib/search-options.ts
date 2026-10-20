export type SearchOption = { label: string; value: string }

export const lookingForOptions: SearchOption[] = [
  { label: "Rent", value: "rent" },
  { label: "Buy", value: "buy" },
]

export const propertyTypeOptions: SearchOption[] = [
  { label: "All Types", value: "" },
  { label: "1 BHK", value: "1bhk" },
  { label: "2 BHK", value: "2bhk" },
  { label: "3 BHK", value: "3bhk" },
  { label: "4 BHK", value: "4bhk" },
  { label: "Office", value: "office" },
  { label: "Shop", value: "shop" },
  { label: "PG", value: "pg" },
]

export const locationOptions: SearchOption[] = [
  { label: "All Locations", value: "" },
  { label: "South Bopal", value: "south-bopal" },
  { label: "Shela", value: "shela" },
  { label: "Gota", value: "gota" },
  { label: "Shilaj", value: "shilaj" },
  { label: "Thaltej", value: "thaltej" },
  { label: "Satellite", value: "satellite" },
]

export const rentBudgetOptions: SearchOption[] = [
  { label: "Any Budget", value: "" },
  { label: "Under ₹15,000", value: "15000" },
  { label: "Under ₹25,000", value: "25000" },
  { label: "Under ₹35,000", value: "35000" },
  { label: "Under ₹50,000", value: "50000" },
]

export const buyBudgetOptions: SearchOption[] = [
  { label: "Any Budget", value: "" },
  { label: "Under ₹50 Lac", value: "5000000" },
  { label: "Under ₹75 Lac", value: "7500000" },
  { label: "Under ₹1 Cr", value: "10000000" },
  { label: "Under ₹1.5 Cr", value: "15000000" },
  { label: "Under ₹2 Cr", value: "20000000" },
]
