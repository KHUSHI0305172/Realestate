import type { Metadata } from "next"
import { RentView } from "@/components/rent-view"

export const metadata: Metadata = {
  title: "Properties for Rent in Ahmedabad | Nimbark Realty",
  description: "Browse verified rental apartments and homes across Ahmedabad with Nimbark Realty.",
}

export default function RentPage() {
  return <RentView />
}
