import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vocação | Mosteiro Maria Imaculada",
  description: "Vocação - Irmãs Clarissas",
}

export default function VocacaoPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="mb-6 text-2xl font-semibold">Vocação</h1>
      <p className="text-muted-foreground">[Conteúdo em breve]</p>
    </div>
  )
}
