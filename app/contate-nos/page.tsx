import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contate-nos",
  description: "Entre em contato com o Mosteiro Maria Imaculada — Irmãs Clarissas de Marília-SP.",
}

export default function ContateNosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:py-10 md:px-6">
      <h1 className="mb-6 text-2xl font-semibold sm:text-3xl">Contate-nos</h1>
      <div className="flex justify-center">
        <ContactForm />
      </div>
    </div>
  )
}
