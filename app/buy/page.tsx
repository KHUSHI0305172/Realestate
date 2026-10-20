import type { Metadata } from "next"
import { BuyView } from "@/components/buy-view"

export const metadata: Metadata = {
  title: "Properties for Sale in Ahmedabad | Nimbark Realty",
  description: "Browse verified resale apartments and villas across Ahmedabad with Nimbark Realty.",
}

export default function BuyPage() {
  return <BuyView />
}
