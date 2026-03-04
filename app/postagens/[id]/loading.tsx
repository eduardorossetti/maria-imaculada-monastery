import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <article className="border-b border-border bg-section-bg py-6 sm:py-10">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <Skeleton className="mb-6 h-9 w-24" />
        <Skeleton className="mb-8 aspect-4/3 w-full rounded-lg" />
        <div className="space-y-4 rounded-xl border border-border bg-background p-4 sm:p-5">
          <Skeleton className="mx-auto h-8 w-3/4" />
          <Skeleton className="ml-auto h-4 w-32" />
          <div className="space-y-2 pt-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        </div>
      </div>
    </article>
  )
}
