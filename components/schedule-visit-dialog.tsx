"use client"

import { FormEvent, useState } from "react"
import { CalendarDays, X } from "lucide-react"

type Property = { slug: string; title: string; location: string; price: string }

export function ScheduleVisitDialog({ property }: { property: Property }) {
  const [open, setOpen] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState("")

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSaving(true)
    setError("")
    const form = new FormData(event.currentTarget)
    const data = { propertySlug: property.slug, propertyTitle: property.title, propertyLocation: property.location, propertyPrice: property.price, clientName: String(form.get("name") || ""), clientPhone: String(form.get("phone") || ""), visitDate: String(form.get("date") || ""), visitTime: String(form.get("time") || "") }
    try {
      const response = await fetch("/api/visit-requests", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
      if (!response.ok) throw new Error("save")
      const agentMessage = encodeURIComponent(`New client inquiry: Schedule a Visit\n\nProperty: ${property.title}\nLocation: ${property.location}\nPrice: ₹${property.price}\nClient: ${data.clientName}\nPhone: ${data.clientPhone}\nRequested date: ${data.visitDate}\nRequested time: ${data.visitTime}`)
      const agentUrl = `https://wa.me/919773426970?text=${agentMessage}`
      const normalizedPhone = data.clientPhone.replace(/\D/g, "")
      const clientWhatsapp = normalizedPhone.length === 10 ? `91${normalizedPhone}` : normalizedPhone
      const clientMessage = encodeURIComponent(`Your visit request has been received.\n\nProperty: ${property.title}\nDate: ${data.visitDate}\nTime: ${data.visitTime}\n\nNimbark Realty will contact you to confirm the meeting.`)
      const clientUrl = `https://wa.me/${clientWhatsapp}?text=${clientMessage}`
      window.open(agentUrl, "_blank", "noopener,noreferrer")
      window.open(clientUrl, "_blank", "noopener,noreferrer")
      setOpen(false)
    } catch {
      setError("Could not save your request. Please try again.")
    } finally { setSaving(false) }
  }

  return <>
    <button type="button" onClick={() => setOpen(true)} className="flex h-11 w-full items-center justify-center gap-2 rounded-md bg-accent px-4 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-85"><CalendarDays className="h-4 w-4" />Schedule a Visit</button>
    {open && <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/50 p-4" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}><section role="dialog" aria-modal="true" aria-labelledby="schedule-visit-title" className="w-full max-w-md rounded-xl border border-border bg-card p-6 shadow-xl"><div className="flex items-start justify-between gap-4"><div><h2 id="schedule-visit-title" className="text-lg font-bold">Schedule a Visit</h2><p className="mt-1 text-xs text-muted-foreground">{property.title}</p></div><button type="button" onClick={() => setOpen(false)} aria-label="Close dialog" className="rounded-md p-1 text-muted-foreground hover:bg-muted"><X className="h-4 w-4" /></button></div><form onSubmit={submit} className="mt-5 flex flex-col gap-4"><label className="flex flex-col gap-1 text-sm font-medium">Your name<input required name="name" className="h-10 rounded-md border border-border bg-background px-3 text-sm" /></label><label className="flex flex-col gap-1 text-sm font-medium">WhatsApp number<input required name="phone" type="tel" inputMode="tel" placeholder="+91 98765 43210" className="h-10 rounded-md border border-border bg-background px-3 text-sm" /></label><div className="grid grid-cols-2 gap-3"><label className="flex flex-col gap-1 text-sm font-medium">Date<input required name="date" type="date" min={new Date().toISOString().split("T")[0]} className="h-10 rounded-md border border-border bg-background px-3 text-sm" /></label><label className="flex flex-col gap-1 text-sm font-medium">Time<input required name="time" type="time" className="h-10 rounded-md border border-border bg-background px-3 text-sm" /></label></div>{error && <p role="alert" className="text-sm text-destructive">{error}</p>}<button disabled={saving} className="h-11 rounded-md bg-primary text-sm font-semibold text-primary-foreground disabled:opacity-60">{saving ? "Saving..." : "Confirm Visit"}</button></form></section></div>}
  </>
}
