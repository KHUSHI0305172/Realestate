import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Users,
  Repeat,
  UserCog,
  MapPin,
  Target,
  Eye,
  ShieldCheck,
  Headphones,
  CheckCircle2,
  Home,
  Building2,
  Tag,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ArrowRight,
} from "lucide-react"
import { contactInfo, whatsappLink } from "@/lib/contact-info"

export const metadata: Metadata = {
  title: "About Us | Nimbark Realty",
  description:
    "Nimbark Realty is Ahmedabad's trusted real estate partner offering end-to-end solutions for rental, resale, and owner services with transparency, expertise, and care.",
}

const storyHighlights = [
  { icon: Users, title: "Rental", sub: "Solutions" },
  { icon: Repeat, title: "Resale", sub: "Expertise" },
  { icon: UserCog, title: "Owner", sub: "Services" },
  { icon: MapPin, title: "Local", sub: "Specialists" },
]

const stats = [
  { icon: ShieldCheck, value: "1,200+", label: "Verified Listings" },
  { icon: MapPin, value: "25+", label: "Localities Served" },
  { icon: Users, value: "3,500+", label: "Happy Clients" },
  { icon: Headphones, value: "24/7", label: "Fast Support" },
]

const trustPoints = [
  "100% verified properties and documents",
  "Deep knowledge of Ahmedabad's local markets",
  "Personalized support from inquiry to possession",
  "Honest advice, transparent pricing",
  "End-to-end assistance for owners and tenants",
]

const services = [
  { icon: Home, title: "Rent", desc: "Find the perfect home for rent in prime localities." },
  { icon: Building2, title: "Buy", desc: "Explore residential properties that fit your lifestyle and budget." },
  { icon: Tag, title: "Sell", desc: "Get the best value for your property with our expert guidance." },
  { icon: UserCog, title: "Owner Services", desc: "We help you manage, rent, and maintain your property with ease." },
]

const team = [
  { name: "Harshil Patel", role: "Founder & CEO", img: "/team-harshil.png" },
  { name: "Neha Shah", role: "Property Advisor", img: "/team-neha.png" },
  { name: "Vatsal Mehta", role: "Client Relations", img: "/team-vatsal.png" },
]

export default function AboutPage() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Full-bleed banner image on the right, blended into the page background on its left edge */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-0 w-[44%] [mask-image:linear-gradient(to_right,transparent_0%,black_65%)] lg:[mask-image:none] lg:w-[52%]">
          <Image
            src="/about-hero-office.png"
            alt="Nimbark Realty modern office reception and workspace in Ahmedabad"
            fill
            priority
            sizes="52vw"
            className="object-cover object-[25%_50%] lg:object-center"
          />
          {/* Clean left-edge fade only: image stays vivid, blends smoothly into the cream background */}
          <div className="absolute inset-0 hidden bg-gradient-to-r from-background from-0% via-background/70 via-15% to-transparent to-45% lg:block" />
        </div>

        <div className="relative grid grid-cols-1 items-center gap-1 px-3 py-5 sm:gap-8 sm:px-8 sm:py-12 lg:grid-cols-2 lg:px-16 lg:py-20">
          <div className="flex max-w-[56%] flex-col justify-center lg:max-w-none">
            <h1 className="font-heading text-xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-4xl">
              About Nimbark Realty
            </h1>
            <p className="mt-2 max-w-lg text-xs leading-snug text-muted-foreground sm:mt-5 sm:text-sm sm:leading-relaxed">
              Nimbark Realty is Ahmedabad&apos;s trusted real estate partner, offering end-to-end solutions for rental,
              resale, and owner services with transparency, expertise, and care.
            </p>
            <div>
              <Link
                href="/buy"
                className="mt-3 inline-flex w-auto items-center justify-center gap-2 rounded-md bg-primary px-3.5 py-2 text-xs sm:mt-8 sm:w-auto sm:px-6 sm:py-3.5 sm:text-sm font-semibold text-accent transition-opacity hover:opacity-90"
              >
                <Building2 className="h-4 w-4 text-accent" />
                Explore Properties
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Everything below the hero sits on the card-colored surface */}
      <div className="bg-[#F4EFE8]">
      {/* Our Story */}
      <section className="grid items-center gap-10 px-8 py-8 lg:grid-cols-2 lg:px-16 lg:py-12">
        <div className="relative h-72 overflow-hidden rounded-xl sm:h-96">
          <Image
            src="/about-team-meeting.png"
            alt="Nimbark Realty team collaborating in the office"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Our Story</p>
          <h2 className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            Built on Trust. Focused on You.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Founded with a vision to simplify real estate in Ahmedabad, Nimbark Realty brings together deep local
            knowledge, verified listings, and personalized service to help clients find the right property or the right
            tenant&mdash;faster and stress-free.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Whether you&apos;re looking to rent your next home, buy a perfect space, sell your property, or need help
            managing it&mdash;we&apos;re here to support you at every step.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4">
            {storyHighlights.map((item, i) => (
              <div
                key={item.title}
                className={`flex items-center gap-3 ${i !== 0 ? "sm:border-l sm:border-border sm:pl-4" : ""}`}
              >
                <item.icon className="h-6 w-6 shrink-0 text-accent" strokeWidth={1.5} />
                <p className="text-sm font-medium leading-tight text-foreground">
                  {item.title}
                  <br />
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-8 py-8 lg:px-16">
        <div className="grid gap-8 rounded-2xl bg-[#EAE1D5] px-8 py-10 md:grid-cols-2 md:gap-0">
          <div className="flex items-start gap-5 md:pr-10">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-card text-accent shadow-sm">
              <Target className="h-7 w-7" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-foreground">Our Mission</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                To deliver honest, reliable, and efficient real estate solutions that create lasting value for our
                clients and community.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-5 md:border-l md:border-border/70 md:pl-10">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-card text-accent shadow-sm">
              <Eye className="h-7 w-7" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-foreground">Our Vision</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                To be Ahmedabad&apos;s most trusted real estate brand&mdash;known for integrity, innovation, and
                exceptional client experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-8 py-8 lg:px-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-4 rounded-xl border border-border bg-[#EAE1D5] px-6 py-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-accent">
                <s.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div>
                <p className="font-heading text-2xl font-extrabold text-accent">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust + Services */}
      <section className="grid items-stretch gap-10 px-8 py-10 lg:grid-cols-2 lg:px-16">
        <div className="flex h-full flex-col py-6 sm:py-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Why Clients Trust Us</p>
          <h2 className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            Transparent. Reliable. Local.
          </h2>
          <ul className="mt-8 flex flex-1 flex-col justify-between gap-5">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" strokeWidth={1.75} />
                <span className="text-sm text-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex h-full flex-col rounded-2xl bg-cream p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Our Services</p>
          <div className="mt-6 grid flex-1 auto-rows-fr gap-4 sm:grid-cols-2">
            {services.map((svc) => (
              <div key={svc.title} className="flex items-start gap-3 rounded-xl bg-card p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-accent">
                  <svc.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">{svc.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team + Get in touch */}
      <section className="px-8 py-8 lg:px-16">
        <div className="grid gap-10 rounded-2xl bg-cream px-8 py-10 lg:grid-cols-2 lg:gap-0">
          <div className="lg:pr-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Meet Our Team</p>
            <h2 className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Local Experts. Real Support.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Our experienced team is always ready to guide you with the right solutions and genuine advice.
            </p>
            <div className="mt-8 flex gap-8">
              {team.map((member) => (
                <div key={member.name} className="flex flex-col items-center text-center">
                  <div className="relative h-20 w-20 overflow-hidden rounded-full">
                    <Image
                      src={member.img || "/placeholder.svg"}
                      alt={`${member.name}, ${member.role} at Nimbark Realty`}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-3 text-sm font-bold text-foreground">{member.name}</p>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:border-l lg:border-accent/40 lg:pl-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Get In Touch</p>
            <h2 className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              We&apos;re Here to Help
            </h2>
            <ul className="mt-6 flex flex-col gap-5">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-accent" strokeWidth={1.75} />
                <a href={`tel:${contactInfo.phoneTel}`} className="text-sm text-foreground hover:text-accent">
                  {contactInfo.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-accent" strokeWidth={1.75} />
                <a href={`mailto:${contactInfo.email}`} className="text-sm text-foreground hover:text-accent">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-accent" strokeWidth={1.75} />
                <span className="text-sm text-foreground">Ahmedabad, Gujarat, India</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.75} />
                <span className="text-sm leading-relaxed text-foreground">
                  Mon &ndash; Sat: 9:30 AM &ndash; 7:00 PM
                  <br />
                  Sunday: 10:00 AM &ndash; 2:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="px-8 pb-14 pt-6 lg:px-16">
        <div className="flex flex-col items-center gap-6 rounded-xl bg-primary px-6 py-8 text-primary-foreground sm:px-10 md:flex-row md:justify-between">
          <div className="flex items-center gap-5">
            <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full border border-accent text-accent sm:flex">
              <MessageCircle className="h-6 w-6" />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-extrabold tracking-tight text-accent">
                Let&apos;s Connect on WhatsApp
              </h2>
              <p className="mt-2 text-sm text-primary-foreground/80">
                Have a question or ready to get started? Chat with us now.
              </p>
            </div>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
          >
            Chat on WhatsApp
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
      </div>
    </main>
  )
}
