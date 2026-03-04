import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import { getPostById } from "@/lib/notion"
import { NotionBlockRenderer } from "@/components/notion-block-renderer"
import { formatDate } from "@/lib/helpers/date"
import { Badge } from "@/components/ui/badge"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { BackButton } from "@/components/back-button"

interface PostPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { id } = await params
  const post = await getPostById(id)
  if (!post) return { title: "Postagem não encontrada" }
  const description = post.subtitle?.slice(0, 160) ?? "Postagem do Mosteiro Maria Imaculada"
  return {
    title: `${post.title} | Mosteiro Maria Imaculada`,
    description,
    openGraph: {
      title: post.title,
      description,
      type: "article",
    },
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params
  const post = await getPostById(id)

  if (!post) notFound()

  return (
    <article className="border-b border-border bg-section-bg py-6 sm:py-10">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <BackButton />

        {post.img && (
          <div className="mx-auto mb-8 w-full max-w-xl overflow-hidden rounded-lg border border-border shadow-sm">
            <AspectRatio ratio={4 / 3}>
              <Image
                src={post.img}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 576px"
              />
            </AspectRatio>
          </div>
        )}

        <div className="rounded-xl border border-border bg-background p-4 shadow-sm sm:p-5">
          <header className="mb-8 text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">{post.title}</h1>
            {post.publishedDate && (
              <time
                className="text-muted-foreground mt-2 block text-right text-sm"
                dateTime={post.publishedDate}
              >
                {formatDate(post.publishedDate)}
              </time>
            )}
            {post.subtitle && (
              <p className="text-muted-foreground mt-2 text-lg">{post.subtitle}</p>
            )}
            {post.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </header>

          <div>
            {post.blocks?.length ? (
              <NotionBlockRenderer blocks={post.blocks} />
            ) : (
              <div className="whitespace-pre-wrap text-base sm:text-lg">{post.content}</div>
            )}
          </div>

          {post.references && (
            <aside className="mt-12 border-t border-border pt-8">
              <h3 className="mb-4 font-semibold">Referências</h3>
              <div className="text-muted-foreground whitespace-pre-wrap text-sm">
                {post.references}
              </div>
            </aside>
          )}
        </div>
      </div>
    </article>
  )
}
