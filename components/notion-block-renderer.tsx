import Image from "next/image"
import type { BlockObjectResponse } from "@notionhq/client"

type Annotations = {
  bold?: boolean
  italic?: boolean
  strikethrough?: boolean
  underline?: boolean
  code?: boolean
}

type RichTextItem = {
  plain_text?: string
  href?: string | null
  annotations?: Annotations
}

const SUBTITLE_CLASS = "text-center text-base text-muted-foreground sm:text-lg"
const BODY_CLASS = "text-base sm:text-lg"

function getPlainText(items: RichTextItem[] | undefined): string {
  if (!items?.length) return ""
  return items.map((i) => i.plain_text ?? "").join("")
}

const CENTER_TAGS = ["[center]", "::"] as const

function stripCenterTag(
  items: RichTextItem[]
): { items: RichTextItem[]; centered: boolean } {
  const full = getPlainText(items)
  const trimmed = full.trimStart()
  for (const tag of CENTER_TAGS) {
    const tagLow = tag.toLowerCase()
    if (trimmed.toLowerCase().startsWith(tagLow)) {
      const leadingSpace = full.length - trimmed.length
      const prefixLen = leadingSpace + tag.length
      let toRemove = prefixLen
      const newItems: RichTextItem[] = []
      for (const item of items) {
        const text = item.plain_text ?? ""
        if (toRemove <= 0) {
          newItems.push(item)
          continue
        }
        if (text.length <= toRemove) {
          toRemove -= text.length
          continue
        }
        const remainder = text.slice(toRemove)
        newItems.push({
          ...item,
          plain_text: newItems.length === 0 ? remainder.trimStart() : remainder,
        })
        toRemove = 0
      }
      return { items: newItems, centered: true }
    }
  }
  return { items, centered: false }
}

function applyAnnotations(
  text: string,
  annotations: Annotations | undefined
): React.ReactNode {
  if (!annotations) return text
  let node: React.ReactNode = text
  if (annotations.code) {
    node = (
      <code className="rounded bg-muted px-1 py-0.5 font-mono text-[0.875em]">
        {node}
      </code>
    )
  }
  if (annotations.bold) node = <strong className="font-semibold">{node}</strong>
  if (annotations.italic) node = <em>{node}</em>
  if (annotations.strikethrough) node = <s>{node}</s>
  if (annotations.underline) node = <u>{node}</u>
  return node
}

function RichText({ items }: { items: RichTextItem[] }) {
  if (!items?.length) return null
  return (
    <>
      {items.map((item, i) => {
        const text = item.plain_text ?? ""
        const content = applyAnnotations(text, item.annotations)
        if (item.href) {
          return (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium underline underline-offset-2 hover:no-underline"
            >
              {content}
            </a>
          )
        }
        return <span key={i}>{content}</span>
      })}
    </>
  )
}

function getImageUrl(block: BlockObjectResponse): string | null {
  if (block.type !== "image") return null
  const img = block.image
  if (!img) return null
  if ("external" in img && img.external?.url) return img.external.url
  if ("file" in img && img.file?.url) return img.file.url
  return null
}

type BulletedBlock = Extract<BlockObjectResponse, { type: "bulleted_list_item" }>
type NumberedBlock = Extract<BlockObjectResponse, { type: "numbered_list_item" }>

type GroupedBlock =
  | { kind: "single"; block: BlockObjectResponse; originalIndex: number }
  | { kind: "ul"; blocks: BulletedBlock[]; startIndex: number }
  | { kind: "ol"; blocks: NumberedBlock[]; startIndex: number }

function groupBlocks(blocks: BlockObjectResponse[]): GroupedBlock[] {
  const groups: GroupedBlock[] = []
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i]
    if (block.type === "bulleted_list_item") {
      const last = groups[groups.length - 1]
      if (last?.kind === "ul") {
        last.blocks.push(block as BulletedBlock)
      } else {
        groups.push({ kind: "ul", blocks: [block as BulletedBlock], startIndex: i })
      }
    } else if (block.type === "numbered_list_item") {
      const last = groups[groups.length - 1]
      if (last?.kind === "ol") {
        last.blocks.push(block as NumberedBlock)
      } else {
        groups.push({ kind: "ol", blocks: [block as NumberedBlock], startIndex: i })
      }
    } else {
      groups.push({ kind: "single", block, originalIndex: i })
    }
  }
  return groups
}

interface NotionBlockRendererProps {
  blocks: BlockObjectResponse[]
}

export function NotionBlockRenderer({ blocks }: NotionBlockRendererProps) {
  const dividerIndex = blocks.findIndex((b) => b.type === "divider")
  const isSubtitle = (index: number) => dividerIndex >= 0 && index < dividerIndex

  const groups = groupBlocks(blocks)

  return (
    <div className="space-y-4 sm:space-y-6">
      {groups.map((group, groupIndex) => {
        if (group.kind === "ul") {
          const subtitle = isSubtitle(group.startIndex)
          return (
            <ul
              key={`ul-${groupIndex}`}
              className={subtitle ? `list-none ${SUBTITLE_CLASS}` : `ml-4 list-disc ${BODY_CLASS}`}
            >
              {group.blocks.map((block) => {
                const text = block.bulleted_list_item?.rich_text
                return (
                  <li key={block.id}>
                    <RichText items={text ?? []} />
                  </li>
                )
              })}
            </ul>
          )
        }

        if (group.kind === "ol") {
          const subtitle = isSubtitle(group.startIndex)
          return (
            <ol
              key={`ol-${groupIndex}`}
              className={subtitle ? `list-none ${SUBTITLE_CLASS}` : `ml-4 list-decimal ${BODY_CLASS}`}
            >
              {group.blocks.map((block) => {
                const text = block.numbered_list_item?.rich_text
                return (
                  <li key={block.id}>
                    <RichText items={text ?? []} />
                  </li>
                )
              })}
            </ol>
          )
        }

        const { block, originalIndex } = group
        const subtitle = isSubtitle(originalIndex)

        if (block.type === "paragraph") {
          const text = block.paragraph?.rich_text
          if (!text?.length) return <p key={block.id} className="min-h-[1em]" />
          const { items: textItems, centered: tagCentered } = stripCenterTag(text)
          const centered = subtitle || tagCentered
          return (
            <p
              key={block.id}
              className={centered ? SUBTITLE_CLASS : BODY_CLASS}
            >
              <RichText items={tagCentered ? textItems : text} />
            </p>
          )
        }

        if (block.type === "heading_1") {
          const text = block.heading_1?.rich_text
          return (
            <h2
              key={block.id}
              className={subtitle ? "text-center text-xl font-bold text-muted-foreground sm:text-2xl" : "text-xl font-bold mt-8 mb-2 sm:text-2xl"}
            >
              <RichText items={text ?? []} />
            </h2>
          )
        }

        if (block.type === "heading_2") {
          const text = block.heading_2?.rich_text
          return (
            <h3
              key={block.id}
              className={subtitle ? "text-center text-lg font-semibold text-muted-foreground sm:text-xl" : "text-lg font-semibold mt-6 mb-2 sm:text-xl"}
            >
              <RichText items={text ?? []} />
            </h3>
          )
        }

        if (block.type === "heading_3") {
          const text = block.heading_3?.rich_text
          return (
            <h4
              key={block.id}
              className={subtitle ? "text-center text-base font-semibold text-muted-foreground sm:text-lg" : "text-base font-semibold mt-4 mb-2 sm:text-lg"}
            >
              <RichText items={text ?? []} />
            </h4>
          )
        }

        if (block.type === "quote") {
          const text = block.quote?.rich_text
          if (subtitle) {
            return (
              <p key={block.id} className={SUBTITLE_CLASS}>
                <RichText items={text ?? []} />
              </p>
            )
          }
          return (
            <blockquote
              key={block.id}
              className={`border-l-4 border-border pl-4 italic ${BODY_CLASS} text-muted-foreground`}
            >
              <RichText items={text ?? []} />
            </blockquote>
          )
        }

        if (block.type === "code") {
          const text = block.code?.rich_text
          const lang = block.code?.language ?? "plain text"
          return (
            <pre
              key={block.id}
              className="overflow-x-auto rounded-lg border border-border bg-muted p-4 text-sm"
            >
              <code data-language={lang}>
                <RichText items={text ?? []} />
              </code>
            </pre>
          )
        }

        if (block.type === "divider") {
          return <hr key={block.id} className="my-6 border-border" role="presentation" />
        }

        if (block.type === "image") {
          const url = getImageUrl(block)
          if (!url) return null
          return (
            <figure key={block.id} className="my-6 overflow-hidden rounded-lg border border-border">
              <Image
                src={url}
                alt={getPlainText(block.image?.caption ?? []) || "Imagem"}
                width={800}
                height={450}
                className="w-full object-cover"
                unoptimized
              />
              {block.image?.caption?.length ? (
                <figcaption className="text-muted-foreground mt-2 px-2 text-center text-sm">
                  <RichText items={block.image.caption} />
                </figcaption>
              ) : null}
            </figure>
          )
        }

        if (block.type === "callout") {
          const text = block.callout?.rich_text
          if (subtitle) {
            return (
              <p key={block.id} className={SUBTITLE_CLASS}>
                <RichText items={text ?? []} />
              </p>
            )
          }
          return (
            <p key={block.id} className={`text-center ${BODY_CLASS}`}>
              <RichText items={text ?? []} />
            </p>
          )
        }

        if (block.type === "to_do") {
          const checked = block.to_do?.checked ?? false
          const text = block.to_do?.rich_text ?? []
          return (
            <label key={block.id} className={`flex items-center gap-2 ${BODY_CLASS}`}>
              <input
                type="checkbox"
                checked={checked}
                readOnly
                className="rounded border-border"
              />
              <span className={checked ? "text-muted-foreground line-through" : ""}>
                <RichText items={text} />
              </span>
            </label>
          )
        }

        return null
      })}
    </div>
  )
}
