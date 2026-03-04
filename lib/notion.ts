import { unstable_cache } from "next/cache"
import { cache } from "react"
import { APIResponseError, Client } from "@notionhq/client"
import type { BlockObjectResponse, GetBlockResponse } from "@notionhq/client"

const POSTS_PAGE_ID = process.env.NOTION_POSTS_PAGE_ID ?? ""
const CACHE_REVALIDATE = 60 * 15

let _notion: Client | null = null

export function getNotionClient(): Client {
  if (!_notion) {
    const apiKey = process.env.NOTION_API_KEY
    if (!apiKey) {
      throw new Error("NOTION_API_KEY is not set")
    }
    _notion = new Client({
      auth: apiKey,
      notionVersion: "2025-09-03",
    })
  }
  return _notion
}

export interface Post {
  id: string
  title: string
  subtitle: string
  content: string
  blocks?: BlockObjectResponse[]
  publishedDate: string | null
  tags: string[]
  img: string | null
  references: string
  link?: string
}

function truncateAtSentence(text: string, maxChars: number): string {
  const trimmed = text.trim()
  if (trimmed.length <= maxChars) return trimmed
  const cut = trimmed.slice(0, maxChars)
  const lastPeriod = cut.lastIndexOf(". ")
  const lastComma = cut.lastIndexOf(", ")
  const lastSpace = cut.lastIndexOf(" ")
  const breakAt =
    lastPeriod > maxChars * 0.5 ? lastPeriod + 1
    : lastComma > maxChars * 0.5 ? lastComma + 1
    : lastSpace > maxChars * 0.5 ? lastSpace
    : maxChars
  return `${trimmed.slice(0, breakAt).trim()}...`
}

const CENTER_TAGS = ["[center]", "::"] as const

function stripCenterTag(text: string): string {
  const trimmed = text.trimStart()
  for (const tag of CENTER_TAGS) {
    if (trimmed.toLowerCase().startsWith(tag.toLowerCase())) {
      return trimmed.slice(tag.length).trimStart()
    }
  }
  return text
}

function truncateExcerpt(text: string, maxChars: number): string {
  return truncateAtSentence(stripCenterTag(text), maxChars)
}

const OBRA_SUBTITLE_FULL =
  "Há 23 anos, estamos tentando concluir a obra do nosso mosteiro. Em 2019, suspendemos a construção por falta de recursos financeiros. Contamos com a sua ajuda com qualquer valor que o seu coração mandar. Também pode nos ajudar divulgando esta iniciativa para todos os seus amigos. Que Deus recompense com a vida eterna a todos os que nos tenham prestado benefícios. Amém!"

export const OBRA_POST: Post = {
  id: "obra",
  title: "Ajude na Obra do Mosteiro!",
  subtitle: truncateAtSentence(OBRA_SUBTITLE_FULL, 150),
  content: "",
  publishedDate: null,
  tags: [],
  img: "/obras.jpg",
  references: "",
  link: "/obra",
}

function getPlainText(
  value: { plain_text?: string }[] | undefined
): string {
  if (!value?.length) return ""
  return value.map((item) => item.plain_text ?? "").join("")
}

function getPageTitle(properties: Record<string, unknown>): string {
  const titleProp =
    properties.title ??
    properties.Name ??
    Object.values(properties).find((p) => p && typeof p === "object" && "title" in p)
  if (titleProp && typeof titleProp === "object" && titleProp !== null && "title" in titleProp) {
    const t = (titleProp as { title?: { plain_text?: string }[] }).title
    return getPlainText(t)
  }
  return ""
}

export function getCoverUrl(cover: { type?: string; external?: { url?: string }; file?: { url?: string } } | null): string | null {
  if (!cover) return null
  if (cover.type === "external" && cover.external?.url) return cover.external.url
  if (cover.type === "file" && cover.file?.url) return cover.file.url
  return null
}

export function getImageSrc(cover: { type?: string; external?: { url?: string }; file?: { url?: string } } | null, pageId: string): string | null {
  if (!cover) return null
  if (cover.type === "external" && cover.external?.url) return cover.external.url
  if (cover.type === "file") return `/api/image?id=${pageId}`
  return null
}

async function fetchFirstBlocksForExcerpt(notion: Client, pageId: string, maxChars = 150): Promise<string> {
  try {
    const response = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 8,
    })
    let text = ""
    for (const block of response.results) {
      if ("type" in block && block.type !== "child_page" && block.type !== "child_database") {
        text += blockToPlainText(block as BlockObjectResponse)
        if (block.type === "paragraph" || block.type === "quote" || block.type === "callout") {
          text += " "
        }
        if (text.length >= maxChars * 2) break
      }
    }
    return truncateExcerpt(text, maxChars)
  } catch {
    return ""
  }
}

async function fetchAllBlockChildren(notion: Client, blockId: string): Promise<BlockObjectResponse[]> {
  const blocks: BlockObjectResponse[] = []
  let cursor: string | undefined

  do {
    const response = await notion.blocks.children.list({
      block_id: blockId,
      page_size: 100,
      start_cursor: cursor,
    })

    for (const block of response.results) {
      if ("type" in block && block.type !== "child_page" && block.type !== "child_database") {
        blocks.push(block as BlockObjectResponse)
      }
    }

    cursor = response.next_cursor ?? undefined
  } while (cursor)

  return blocks
}

function blockToPlainText(block: BlockObjectResponse): string {
  const type = block.type
  const data = block[type as keyof BlockObjectResponse]
  if (!data || typeof data !== "object") return ""

  const richText = (data as { rich_text?: { plain_text?: string }[] }).rich_text
  if (richText?.length) {
    return getPlainText(richText)
  }
  return ""
}

function blocksToPlainText(blocks: BlockObjectResponse[]): string {
  return blocks
    .map(blockToPlainText)
    .filter(Boolean)
    .join("\n\n")
}

async function fetchPosts(limit: number): Promise<Post[]> {
  const notion = getNotionClient()
  if (!POSTS_PAGE_ID) return []

  const blocks: GetBlockResponse[] = []
  let cursor: string | undefined

  do {
    const response = await notion.blocks.children.list({
      block_id: POSTS_PAGE_ID,
      page_size: 100,
      start_cursor: cursor,
    })
    blocks.push(...response.results)
    cursor = response.next_cursor ?? undefined
  } while (cursor)

  const childPages = blocks.filter(
    (b): b is GetBlockResponse & { type: "child_page" } =>
      "type" in b && b.type === "child_page"
  )

  const pages = await Promise.all(
    childPages.map(async (block) => {
      try {
        const page = await notion.pages.retrieve({ page_id: block.id })
        return page
      } catch {
        return null
      }
    })
  )

  const validPages = pages.filter(
    (p): p is NonNullable<typeof p> & { properties: Record<string, unknown>; cover: unknown; created_time?: string } =>
      p !== null && "properties" in p && "cover" in p
  )

  const excerpts = await Promise.all(
    validPages.map((page) => fetchFirstBlocksForExcerpt(notion, page.id))
  )

  const posts: Post[] = validPages.map((page, i) => {
    const title = getPageTitle(page.properties)
    const cover = page.cover
    const img = getImageSrc(cover as Parameters<typeof getCoverUrl>[0], page.id)
    const publishedDate: string | null = page.created_time ?? null

    return {
      id: page.id,
      title,
      subtitle: excerpts[i] ?? "",
      content: excerpts[i] ?? "",
      publishedDate,
      tags: [],
      img,
      references: "",
    }
  })

  posts.sort((a, b) => {
    if (!a.publishedDate) return 1
    if (!b.publishedDate) return -1
    return b.publishedDate.localeCompare(a.publishedDate)
  })

  return posts.slice(0, limit)
}

export const getPosts = cache((limit = 10) =>
  unstable_cache(
    () => fetchPosts(limit),
    ["notion-posts-pages", String(limit)],
    { revalidate: CACHE_REVALIDATE }
  )()
)

async function fetchPostById(pageId: string): Promise<Post | null> {
  const notion = getNotionClient()

  try {
    const page = await notion.pages.retrieve({ page_id: pageId })
    if (!("properties" in page)) return null

    const title = getPageTitle(page.properties as Record<string, unknown>)
    const cover = "cover" in page ? page.cover : null
    const img = getImageSrc(cover as Parameters<typeof getCoverUrl>[0], pageId)
    const publishedDate = "created_time" in page ? page.created_time : null

    const blocks = await fetchAllBlockChildren(notion, pageId)
    const content = blocksToPlainText(blocks)

    return {
      id: page.id,
      title,
      subtitle: "",
      content,
      blocks,
      publishedDate,
      tags: [],
      img,
      references: "",
    }
  } catch (error) {
    if (APIResponseError.isAPIResponseError(error) && error.code === "object_not_found") {
      return null
    }
    throw error
  }
}

export const getPostById = cache((pageId: string) =>
  unstable_cache(
    () => fetchPostById(pageId),
    ["notion-post-pages", pageId],
    { revalidate: CACHE_REVALIDATE }
  )()
)
