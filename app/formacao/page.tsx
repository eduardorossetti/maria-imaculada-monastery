import type { Metadata } from "next"
import { getPosts } from "@/lib/notion"
import { PostCard } from "@/components/post-card"

export const metadata: Metadata = {
  title: "Formação",
  description: "Textos e reflexões sobre espiritualidade franciscana, vida contemplativa e formação religiosa das Irmãs Clarissas do Mosteiro Maria Imaculada.",
}

export default async function FormacaoPage() {
  let posts: Awaited<ReturnType<typeof getPosts>> = []
  try {
    posts = await getPosts(50)
  } catch {
    posts = []
  }

  return (
    <div className="bg-section-bg py-6 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {posts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-sm">Nenhuma postagem no momento.</p>
        )}
      </div>
    </div>
  )
}
