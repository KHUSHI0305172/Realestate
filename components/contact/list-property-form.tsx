import { Building2, Users, UploadCloud, ArrowRight } from "lucide-react"
import { CreamSelect } from "./cream-select"

const fieldBase =
  "w-full rounded-lg border border-border bg-[#F4EFE8] px-3.5 py-2.5 text-sm text-foreground placeholder:text-[#161616]/40 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20 hover:border-accent/60"

const labelBase = "mb-1.5 block text-[13px] font-medium text-foreground"

export function ListPropertyForm() {
  return (
    <section id="list-property" className="px-6 py-6 lg:px-12">
      <div className="overflow-hidden rounded-2xl border border-border bg-[#F4EFE8]">
        <div className="flex flex-col gap-5 border-b border-border bg-cream px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-background">
              <Building2 className="h-6 w-6 text-accent" />
            </span>
            <div>
              <h2 className="font-heading text-xl font-bold tracking-tight text-foreground">List Your Property</h2>
              <p className="mt-1.5 max-w-md text-sm text-muted-foreground">
                Share your property details and we&apos;ll help you reach the right buyers or tenants.
              </p>
            </div>
          </div>
          <button
            type="button"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent"
          >
            <Users className="h-4 w-4 text-accent" />
            Why List With Us?
          </button>
        </div>

        <form className="space-y-5 p-6 sm:p-8">
          <div className="grid gap-5 md:grid-cols-3">
            <div>
              <label htmlFor="lp-owner" className={labelBase}>
                Owner Name
              </label>
              <input id="lp-owner" name="owner" type="text" placeholder="Enter owner name" className={fieldBase} />
            </div>
            <div>
              <label htmlFor="lp-phone" className={labelBase}>
                Phone Number
              </label>
              <input id="lp-phone" name="phone" type="tel" placeholder="Enter phone number" className={fieldBase} />
            </div>
            <div>
              <label htmlFor="lp-type" className={labelBase}>
                Property Type
              </label>
              <CreamSelect
                id="lp-type"
                name="type"
                placeholder="Select property type"
                options={[
                  { value: "1bhk", label: "1 BHK" },
                  { value: "2bhk", label: "2 BHK" },
                  { value: "3bhk", label: "3 BHK" },
                  { value: "4bhk", label: "4 BHK" },
                  { value: "office", label: "Office" },
                  { value: "shop", label: "Shop" },
                  { value: "pg", label: "PG" },
                ]}
              />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div>
              <label htmlFor="lp-locality" className={labelBase}>
                Locality
              </label>
              <input id="lp-locality" name="locality" type="text" placeholder="Enter locality" className={fieldBase} />
            </div>
            <div>
              <label htmlFor="lp-budget" className={labelBase}>
                Budget / Rent
              </label>
              <input
                id="lp-budget"
                name="budget"
                type="text"
                placeholder="Enter expected price"
                className={fieldBase}
              />
            </div>
            <div>
              <label htmlFor="lp-for" className={labelBase}>
                Property For
              </label>
              <CreamSelect
                id="lp-for"
                name="for"
                placeholder="Select an option"
                options={[
                  { value: "rent", label: "For Rent" },
                  { value: "sale", label: "For Sale" },
                ]}
              />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="lp-desc" className={labelBase}>
                Property Description <span className="text-muted-foreground">(Optional)</span>
              </label>
              <textarea
                id="lp-desc"
                name="description"
                rows={5}
                placeholder="Share more details about your property..."
                className={`${fieldBase} resize-none`}
              />
            </div>
            <div>
              <span className={labelBase}>Upload Photos</span>
              <label
                htmlFor="lp-photos"
                className="flex h-[136px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-[#F4EFE8] text-center transition-colors hover:border-accent"
              >
                <UploadCloud className="h-8 w-8 text-accent" />
                <span className="mt-2 text-sm font-medium text-foreground">Click to upload or drag and drop</span>
                <span className="mt-1 text-xs text-muted-foreground">JPG, PNG up to 5MB (Max 5 files)</span>
                <input id="lp-photos" name="photos" type="file" accept="image/png,image/jpeg" multiple className="sr-only" />
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Submit Property
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  )
}
