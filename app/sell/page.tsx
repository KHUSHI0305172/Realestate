import type { Metadata } from "next"
import { SellView } from "@/components/sell-view"

export const metadata: Metadata = {
  title: "Properties for Sale | Nimbark Realty",
  description: "Explore verified properties for sale across Ahmedabad with Nimbark Realty.",
}

export default function SellPage() {
  return <SellView />
}
