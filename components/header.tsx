"use client"

import Image from "next/image"
import Link from "next/link"
import logo from "@/public/logo.jpg"
import { MenuIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

const navItems = [
  { href: "/vocacao", label: "Vocacional" },
  { href: "/formacao", label: "Formação" },
  { href: "/obra", label: "Obra" },
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/nosso-mosteiro", label: "Nosso Mosteiro" },
] as const

function NavLinks() {
  return (
    <>
      {navItems.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            className="text-muted-foreground text-base font-medium hover:text-foreground transition-colors"
          >
            {label}
          </Link>
        </li>
      ))}
    </>
  )
}

export function Header() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-border shadow-(--header-footer-shadow)"
      style={{ background: "var(--header-footer-bg)" }}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={logo}
            alt="Mosteiro Maria Imaculada"
            width={56}
            height={56}
            className="size-12 shrink-0 rounded-lg object-contain sm:size-14"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-sm leading-tight text-taupe-800 sm:text-xl dark:text-taupe-400">
              Mosteiro Maria Imaculada
            </span>
            <span className="text-muted-foreground text-xs sm:text-sm">
              Irmãs Clarissas - Marília-SP
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-6">
            <NavLinks />
          </ul>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="size-9 p-0"
                aria-label="Abrir menu de navegação"
              >
                <MenuIcon className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Mosteiro Maria Imaculada</SheetTitle>
              </SheetHeader>
              <ul className="flex flex-col gap-1 px-4">
                {navItems.map(({ href, label }) => (
                  <li key={href} className="border-b border-border last:border-b-0">
                    <SheetClose asChild>
                      <Link
                        href={href}
                        className="text-foreground block py-3 text-sm uppercase tracking-wide hover:text-primary transition-colors"
                      >
                        {label}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
