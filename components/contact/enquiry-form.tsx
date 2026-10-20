import { ArrowRight } from "lucide-react"
import { CreamSelect } from "./cream-select"

const fieldBase =
  "w-full rounded-lg border border-border bg-[#F4EFE8] px-3.5 py-2.5 text-sm text-foreground placeholder:text-[#161616]/40 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20 hover:border-accent/60"

const labelBase = "mb-1.5 block text-[13px] font-medium text-foreground"

export function EnquiryForm() {
  return (
    <div className="rounded-2xl border border-border bg-[#F4EFE8] p-6 sm:p-8">
      <h2 className="font-heading text-xl font-bold tracking-tight text-foreground">Send Us an Enquiry</h2>
      <p className="mt-1.5 text-sm text-muted-foreground">Fill out the form and our experts will get back to you.</p>

      <form className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="enq-name" className={labelBase}>
              Full Name
            </label>
            <input id="enq-name" name="name" type="text" placeholder="Enter your full name" className={fieldBase} />
          </div>
          <div>
            <label htmlFor="enq-phone" className={labelBase}>
              Phone Number
            </label>
            <input
              id="enq-phone"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              className={fieldBase}
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="enq-email" className={labelBase}>
              Email Address
            </label>
            <input id="enq-email" name="email" type="email" placeholder="Enter your email" className={fieldBase} />
          </div>
          <div>
            <label htmlFor="enq-interest" className={labelBase}>
              I&apos;m interested in
            </label>
            <CreamSelect
              id="enq-interest"
              name="interest"
              placeholder="Select an option"
              options={[
                { value: "rent", label: "Renting a property" },
                { value: "buy", label: "Buying a property" },
                { value: "sell", label: "Selling a property" },
                { value: "list", label: "Listing my property" },
              ]}
            />
          </div>
        </div>

        <div>
          <label htmlFor="enq-subject" className={labelBase}>
            Subject
          </label>
          <input id="enq-subject" name="subject" type="text" placeholder="Enter subject" className={fieldBase} />
        </div>

        <div>
          <label htmlFor="enq-message" className={labelBase}>
            Message
          </label>
          <textarea
            id="enq-message"
            name="message"
            rows={5}
            placeholder="Type your message here..."
            className={`${fieldBase} resize-none`}
          />
        </div>

        <label className="flex items-start gap-2.5 text-sm text-muted-foreground">
          <input
            type="checkbox"
            name="consent"
            className="mt-0.5 h-4 w-4 rounded border-border text-accent accent-accent"
          />
          <span>I agree to be contacted by Nimbark Realty.</span>
        </label>

        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Send Enquiry
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    </div>
  )
}
