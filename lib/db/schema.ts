import { date, pgTable, serial, text, time, timestamp } from "drizzle-orm/pg-core"

export const visitRequests = pgTable("visit_requests", {
  id: serial("id").primaryKey(),
  propertySlug: text("property_slug").notNull(),
  propertyTitle: text("property_title").notNull(),
  propertyLocation: text("property_location").notNull(),
  propertyPrice: text("property_price").notNull(),
  clientName: text("client_name").notNull(),
  clientPhone: text("client_phone").notNull(),
  visitDate: date("visit_date").notNull(),
  visitTime: time("visit_time").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
})
