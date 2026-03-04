import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { formatDate } from "@/lib/helpers/date"
import { truncate } from "@/lib/helpers/string"
import type { Post } from "@/lib/notion"

interface PostCardProps {
  post: Post
}

const linkClass = "transition-colors hover:text-primary/80 hover:underline"

export function PostCard({ post }: PostCardProps) {
  const excerpt = post.subtitle || truncate(post.content, 150)
  const href = post.link ?? `/postagens/${post.id}`

  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-border">
      {post.img && (
        <Link href={href} className="block overflow-hidden">
          <AspectRatio ratio={1}>
            <Image
              src={post.img}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </AspectRatio>
        </Link>
      )}
      <div className="flex flex-1 flex-col px-4 py-3">
        {post.publishedDate && (
          <time
            className="text-muted-foreground mb-2 block text-xs font-medium uppercase tracking-wider"
            dateTime={post.publishedDate}
          >
            {formatDate(post.publishedDate)}
          </time>
        )}
        <h3 className="text-primary text-lg font-semibold leading-tight tracking-tight">
          <Link href={href} className={linkClass}>
            {post.title}
          </Link>
        </h3>
        {excerpt && (
          <p className="text-muted-foreground mt-4 flex-1 text-sm leading-snug line-clamp-5">
            {excerpt}
          </p>
        )}
        <Link
          href={href}
          className={`text-primary mt-5 inline-flex items-center gap-1.5 text-base ${linkClass}`}
        >
          Saiba mais
          <ChevronRight className="size-4 shrink-0" />
        </Link>
      </div>
    </article>
  )
}
