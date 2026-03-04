"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-6 px-4">
      <h1 className="text-2xl font-semibold">Algo deu errado</h1>
      <p className="text-muted-foreground max-w-md text-center text-sm">
        Ocorreu um erro ao carregar esta página. Tente novamente.
      </p>
      <div className="flex gap-3">
        <Button onClick={reset} variant="default">
          Tentar novamente
        </Button>
        <Button asChild variant="outline">
          <Link href="/">Voltar ao início</Link>
        </Button>
      </div>
    </div>
  )
}
