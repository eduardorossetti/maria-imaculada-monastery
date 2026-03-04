"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Post } from "@/lib/notion"

interface HomeCarouselProps {
  posts: Post[]
}

const slideClass =
  "group relative min-h-[55vh] w-full overflow-hidden rounded-lg border border-border md:min-h-[60vh]"
const btnClass = cn(
  buttonVariants({ variant: "secondary", size: "lg" }),
  "mt-6 bg-white text-taupe-900 shadow-md hover:bg-white/90"
)
function CarouselSlide({ post, priority = false }: { post: Post; priority?: boolean }) {
  const href = post.link ?? `/postagens/${post.id}`
  return (
    <Link href={href}>
      <div className={slideClass}>
        <Image
          src={post.img!}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="100vw"
          priority={priority}
          unoptimized
        />
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-black/30 to-black/70" />
        <div className="absolute inset-0 flex items-center justify-end px-4 py-5 md:px-6 md:py-6">
          <div className="max-w-xl text-right">
            <h2 className="text-3xl font-bold text-white drop-shadow-md md:text-4xl lg:text-5xl">
              {post.title}
            </h2>
            {post.subtitle && (
              <p className="mt-4 line-clamp-3 text-base text-white/95 drop-shadow-md md:text-lg">
                {post.subtitle}
              </p>
            )}
            <span className={btnClass}>
              Saiba mais
              <ChevronRight className="size-4" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export function HomeCarousel({ posts }: HomeCarouselProps) {
  const postsWithImage = posts.filter((p) => p.img)

  if (postsWithImage.length === 0) return null

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {postsWithImage.map((post, i) => (
          <CarouselItem key={post.id}>
            <CarouselSlide post={post} priority={i === 0} />
          </CarouselItem>
        ))}
      </CarouselContent>
      {postsWithImage.length > 1 && (
        <>
          <CarouselPrevious className="left-4 -translate-y-1/2 md:left-6" />
          <CarouselNext className="right-4 -translate-y-1/2 md:right-6" />
        </>
      )}
    </Carousel>
  )
}
