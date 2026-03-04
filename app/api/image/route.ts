import { type NextRequest, NextResponse } from "next/server"
import { getNotionClient, getCoverUrl } from "@/lib/notion"

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id")
  if (!id) return new NextResponse("Missing id", { status: 400 })

  try {
    const notion = getNotionClient()
    const page = await notion.pages.retrieve({ page_id: id })
    const cover = "cover" in page ? page.cover : null
    const url = getCoverUrl(cover as Parameters<typeof getCoverUrl>[0])

    if (!url) return new NextResponse("No image", { status: 404 })

    return NextResponse.redirect(url)
  } catch {
    return new NextResponse("Error fetching image", { status: 500 })
  }
}
