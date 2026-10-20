"use client"

import { useState } from "react"
import { Check, ChevronDown } from "lucide-react"

const fieldBase =
  "w-full rounded-lg border border-border bg-[#F4EFE8] px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20 hover:border-accent/60"

type Option = { value: string; label: string }

type CreamSelectProps = {
  id: string
  name: string
  placeholder: string
  options: Option[]
}

export function CreamSelect({ id, name, placeholder, options }: CreamSelectProps) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<Option | null>(null)

  return (
    <div className="relative">
      <input type="hidden" name={name} value={selected?.value ?? ""} />
      <button
        type="button"
        id={id}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        onBlur={() => setTimeout(() => setOpen(false), 100)}
        className={`${fieldBase} flex items-center justify-between text-left ${selected ? "text-foreground" : "text-[#161616]/40"}`}
      >
        <span>{selected?.label ?? placeholder}</span>
        <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul role="listbox" aria-labelledby={id} className="absolute z-20 mt-1 max-h-56 w-full overflow-auto rounded-lg border border-border bg-[#F4EFE8] p-1 shadow-lg">
          {options.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                role="option"
                aria-selected={selected?.value === option.value}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => {
                  setSelected(option)
                  setOpen(false)
                }}
                className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm text-[#161616] transition-colors hover:bg-[#EAE1D5] ${selected?.value === option.value ? "bg-[#EAE1D5]" : ""}`}
              >
                <span>{option.label}</span>
                {selected?.value === option.value && <Check className="h-4 w-4 text-[#B99A6B]" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
