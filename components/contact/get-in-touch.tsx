import { Phone, MessageCircle, Mail, Clock, MapPin } from "lucide-react"
import { contactInfo, whatsappLink, telLink, mailtoLink } from "@/lib/contact-info"

const items = [
  { icon: Phone, label: "Call Us", value: contactInfo.phoneDisplay, href: telLink },
  { icon: MessageCircle, label: "WhatsApp", value: contactInfo.phoneDisplay, href: whatsappLink },
  { icon: Mail, label: "Email Us", value: contactInfo.email, href: mailtoLink },
]

export function GetInTouch() {
  return (
    <div className="rounded-2xl border border-border bg-[#F4EFE8] p-6 sm:p-8">
      <h2 className="font-heading text-xl font-bold tracking-tight text-foreground">Get in Touch</h2>
      <p className="mt-1.5 text-sm text-muted-foreground">Our team is ready to assist you.</p>

      <div className="mt-6 divide-y divide-border">
        {items.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center gap-4 py-4 transition-opacity hover:opacity-75"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary">
              <c.icon className="h-5 w-5 text-accent" />
            </span>
            <span>
              <span className="block text-sm font-semibold text-foreground">{c.label}</span>
              <span className="mt-0.5 block break-all text-sm text-muted-foreground">{c.value}</span>
            </span>
          </a>
        ))}

        <div className="flex items-start gap-4 py-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary">
            <Clock className="h-5 w-5 text-accent" />
          </span>
          <div className="text-sm">
            <p className="font-semibold text-foreground">Office Hours</p>
            <p className="mt-0.5 text-muted-foreground">Monday &ndash; Saturday</p>
            <p className="text-muted-foreground">9:30 AM &ndash; 7:00 PM</p>
            <p className="mt-1 text-muted-foreground">Sunday</p>
            <p className="text-muted-foreground">10:00 AM &ndash; 2:00 PM</p>
          </div>
        </div>

        <div className="flex items-start gap-4 py-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary">
            <MapPin className="h-5 w-5 text-accent" />
          </span>
          <div className="text-sm">
            <p className="font-semibold text-foreground">Our Office</p>
            <p className="mt-0.5 text-muted-foreground">Nimbark Realty</p>
            <p className="text-muted-foreground">Ahmedabad, Gujarat, India</p>
          </div>
        </div>
      </div>
    </div>
  )
}
