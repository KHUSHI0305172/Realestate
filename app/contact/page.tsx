import type { Metadata } from "next"
import { ContactHero } from "@/components/contact/contact-hero"
import { GetInTouch } from "@/components/contact/get-in-touch"
import { EnquiryForm } from "@/components/contact/enquiry-form"
import { ListPropertyForm } from "@/components/contact/list-property-form"
import { LocationMap } from "@/components/contact/location-map"
import { CtaBanner } from "@/components/cta-banner"

export const metadata: Metadata = {
  title: "Contact Us | Nimbark Realty",
  description:
    "Get in touch with Nimbark Realty for rentals, resale, or listing your property in Ahmedabad. Send an enquiry or list your property with us.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F4EFE8]">
      <ContactHero />

      <section className="relative z-10 -mt-16 px-6 pb-8 lg:-mt-20 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <GetInTouch />
          </div>
          <div className="lg:col-span-3">
            <EnquiryForm />
          </div>
        </div>
      </section>

      <ListPropertyForm />
      <LocationMap />
      <CtaBanner />
    </main>
  )
}
