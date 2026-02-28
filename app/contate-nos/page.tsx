import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contate-nos | Mosteiro Maria Imaculada",
  description: "Entre em contato com o Mosteiro Maria Imaculada",
}

export default function ContateNosPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="mb-6 text-2xl font-semibold">Contate-nos</h1>
      <div className="flex justify-center">
        <ContactForm />
      </div>
    </div>
  )
}
