import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nosso Mosteiro | Mosteiro Maria Imaculada",
  description: "Nosso Mosteiro - Irmãs Clarissas",
}

export default function NossoMosteiroPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="mb-6 text-2xl font-semibold">Nosso Mosteiro</h1>
      <p className="text-muted-foreground">[Conteúdo em breve]</p>
    </div>
  )
}
