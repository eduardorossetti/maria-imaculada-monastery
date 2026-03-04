import Link from "next/link"
import { getPosts, OBRA_POST } from "@/lib/notion"
import { DonationSection } from "@/components/donation-section"
import { HomeCarousel } from "@/components/home-carousel"
import { PostCard } from "@/components/post-card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default async function Home() {
  let posts: Awaited<ReturnType<typeof getPosts>> = []
  try {
    posts = await getPosts(3)
  } catch {
    posts = []
  }
  const postsWithObra = [OBRA_POST, ...posts]

  return (
    <>
      <h1 className="sr-only">Mosteiro Maria Imaculada - Irmãs Clarissas</h1>

      <section className="border-b border-border bg-section-bg py-3 md:py-4">
        <div className="mx-auto min-h-[55vh] max-w-6xl px-4 md:min-h-[60vh] md:px-6">
          {postsWithObra.length > 0 ? (
            <HomeCarousel posts={postsWithObra} />
          ) : (
            <p className="text-muted-foreground flex min-h-[40vh] items-center justify-center text-sm">
              [Carrossel - em breve]
            </p>
          )}
        </div>
      </section>

      <section className="border-b border-border py-4 md:py-6">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <blockquote className="text-muted-foreground mx-auto mb-4 max-w-3xl px-4 text-center text-lg italic sm:text-xl">
            <p>Pax et bonum!</p>
          </blockquote>
          {posts.length > 0 ? (
            <>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
              <div className="mt-6 flex justify-center">
                <Button asChild variant="outline" size="lg">
                  <Link href="/formacao" className="inline-flex items-center gap-2">
                    Ver mais postagens
                    <ChevronRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </>
          ) : (
            <p className="text-muted-foreground text-sm">[Cards de postagens - em breve]</p>
          )}
        </div>
      </section>

      <DonationSection />
    </>
  )
}
