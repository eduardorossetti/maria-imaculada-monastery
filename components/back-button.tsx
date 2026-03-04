"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BackButton() {
  const router = useRouter()
  return (
    <Button variant="ghost" size="sm" className="mb-6" onClick={() => router.back()}>
      <ArrowLeft className="mr-2 size-4" />
      Voltar
    </Button>
  )
}
