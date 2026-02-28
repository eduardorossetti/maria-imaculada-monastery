import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Carisma | Mosteiro Maria Imaculada",
  description: "Carisma das Irmãs Clarissas",
}

export default function CarismaPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="mb-6 text-2xl font-semibold">Carisma</h1>
      <p className="text-muted-foreground">[Conteúdo em breve]</p>
    </div>
  )
}
