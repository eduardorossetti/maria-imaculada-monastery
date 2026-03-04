import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-background px-4 py-12">
      <h2 className="text-muted-foreground text-6xl font-bold">404</h2>
      <p className="text-muted-foreground mt-2 text-lg">
        Esta página não foi encontrada.
      </p>
      <Button asChild variant="outline" className="mt-8">
        <Link href="/" className="inline-flex items-center gap-2">
          <Home className="size-4" />
          Voltar ao início
        </Link>
      </Button>
    </div>
  )
}
