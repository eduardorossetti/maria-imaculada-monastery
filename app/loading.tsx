import { Spinner } from "@/components/ui/spinner"

export default function Loading() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4">
      <Spinner className="size-8 text-primary" />
      <p className="text-muted-foreground text-sm">Carregando...</p>
    </div>
  )
}
