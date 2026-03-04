import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="main" className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
