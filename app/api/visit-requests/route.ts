import { NextResponse } from "next/server"
import { z } from "zod"
import { db } from "@/lib/db"
import { visitRequests } from "@/lib/db/schema"

const visitSchema = z.object({
  propertySlug: z.string().trim().min(1).max(200),
  propertyTitle: z.string().trim().min(1).max(200),
  propertyLocation: z.string().trim().min(1).max(200),
  propertyPrice: z.string().trim().min(1).max(100),
  clientName: z.string().trim().min(2).max(100),
  clientPhone: z.string().trim().min(7).max(25),
  visitDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  visitTime: z.string().regex(/^\d{2}:\d{2}$/),
})

export async function POST(request: Request) {
  try {
    const input = visitSchema.parse(await request.json())
    const [saved] = await db.insert(visitRequests).values(input).returning({ id: visitRequests.id })
    return NextResponse.json({ id: saved.id })
  } catch (error) {
    if (error instanceof z.ZodError) return NextResponse.json({ error: "Please enter valid visit details." }, { status: 400 })
    console.error("[v0] Visit request save failed", error)
    return NextResponse.json({ error: "Unable to save the visit request." }, { status: 500 })
  }
}
