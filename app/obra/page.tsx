import { redirect } from "next/navigation"

export const metadata = {
  title: "Obra",
  description: "Ajude as Irmãs Clarissas a concluir a obra do Mosteiro Maria Imaculada em Marília-SP. Qualquer contribuição faz diferença. Que Deus recompense a todos os benfeitores.",
}

export default function ObraPage() {
  redirect("/#obra")
}
