export type Property = {
  slug: string
  image: string
  badge: "FOR RENT" | "FOR SALE"
  type: "rent" | "buy"
  title: string
  location: string
  price: string
  priceSuffix?: string
  beds: string
  baths: string
  area: string
  description: string
}

export const properties: Property[] = [
  {
    slug: "2-bhk-apartment-south-bopal",
    image: "/property-1.png",
    badge: "FOR RENT",
    type: "rent",
    title: "2 BHK Apartment",
    location: "South Bopal, Ahmedabad",
    price: "₹22,000",
    priceSuffix: "/ month",
    beds: "2 Beds",
    baths: "2 Baths",
    area: "1100 sq.ft",
    description:
      "A well-maintained 2 BHK apartment in South Bopal, close to schools, malls, and major roads. Ideal for small families looking for a comfortable rental in a well-connected neighborhood.",
  },
  {
    slug: "3-bhk-apartment-shela",
    image: "/property-2.png",
    badge: "FOR SALE",
    type: "buy",
    title: "3 BHK Apartment",
    location: "Shela, Ahmedabad",
    price: "₹78,00,000",
    beds: "3 Beds",
    baths: "3 Baths",
    area: "1820 sq.ft",
    description:
      "Spacious 3 BHK apartment for sale in Shela with premium amenities, ample natural light, and a peaceful surrounding. A great opportunity for families seeking a long-term home in a growing locality.",
  },
  {
    slug: "2-bhk-apartment-gota",
    image: "/property-3.png",
    badge: "FOR RENT",
    type: "rent",
    title: "2 BHK Apartment",
    location: "Gota, Ahmedabad",
    price: "₹20,000",
    priceSuffix: "/ month",
    beds: "2 Beds",
    baths: "2 Baths",
    area: "1050 sq.ft",
    description:
      "Modern 2 BHK apartment for rent in Gota, offering easy access to SG Highway and nearby IT hubs. Perfect for working professionals and small families.",
  },
  {
    slug: "3-bhk-apartment-shilaj",
    image: "/property-1.png",
    badge: "FOR RENT",
    type: "rent",
    title: "3 BHK Apartment",
    location: "Shilaj, Ahmedabad",
    price: "₹28,000",
    priceSuffix: "/ month",
    beds: "3 Beds",
    baths: "2 Baths",
    area: "1450 sq.ft",
    description:
      "Bright and airy 3 BHK apartment for rent in Shilaj, situated in a gated society with good ventilation and nearby amenities.",
  },
  {
    slug: "2-bhk-apartment-thaltej",
    image: "/property-2.png",
    badge: "FOR SALE",
    type: "buy",
    title: "2 BHK Apartment",
    location: "Thaltej, Ahmedabad",
    price: "₹55,00,000",
    beds: "2 Beds",
    baths: "2 Baths",
    area: "1250 sq.ft",
    description:
      "Well-designed 2 BHK apartment for sale in Thaltej, one of Ahmedabad's most sought-after residential areas, close to schools, hospitals, and shopping centers.",
  },
  {
    slug: "4-bhk-villa-satellite",
    image: "/property-3.png",
    badge: "FOR SALE",
    type: "buy",
    title: "4 BHK Villa",
    location: "Satellite, Ahmedabad",
    price: "₹1,45,00,000",
    beds: "4 Beds",
    baths: "4 Baths",
    area: "2800 sq.ft",
    description:
      "Elegant 4 BHK independent villa in Satellite with a private garden, dedicated parking, and premium interiors. A rare find in one of Ahmedabad's prime locations.",
  },
]

export function getPropertyBySlug(slug: string) {
  return properties.find((p) => p.slug === slug)
}
